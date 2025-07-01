//
//  TableausView.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/25/24.
//

import SwiftUI

struct CollapsibleSection<C>: View where C: View {
    @State var showingContent = true
    var content: C
    var header: String
    
    @inlinable
    init(@ViewBuilder content: () -> C, header: String) {
        self.content = content()
        self.header = header
    }
    
    var body: some View {
        Section(header, isExpanded: $showingContent) {
            content
        }
    }
}


struct BoutView: View {
    let bout: TableauData.Table.Bout
    let findPerson: (_ lastName: String, _ firstName: String) -> TableauData.Person?
    @State var showingSheet = false
    
    var body: some View {
        VStack(alignment: .leading) {
            HStack {
                if let left = bout.left {
                    Text("(\(left.seed)) " + left.lastName + (left.firstName.map { " \($0)" } ?? ""))
                    Spacer()
                    Text(left.score?.formatted() ?? "")
                } else {
                    Text("?")
                }
                if let info = bout.info {
                    Spacer()
                    Text(info)
                        .foregroundStyle(.secondary)
                }
            }
            .bold(bout.leftWon == true)
            HStack {
                if let right = bout.right {
                    Text("(\(right.seed)) " + right.lastName + (right.firstName.map { " \($0)" } ?? ""))
                    Spacer()
                    Text(right.score?.formatted() ?? "")
                } else {
                    Text("?")
                }
            }
            .bold(bout.leftWon == false)
        }
        .onTapGesture {
            withAnimation {
                showingSheet.toggle()
            }
        }
        .sheet(isPresented: $showingSheet) {
            VStack {
                if let left = bout.left, left.firstName != nil {
                    if let leftInfo = findPerson(left.lastName, left.firstName!) {
                        Text("(\(leftInfo.seed)) " + leftInfo.formattedName)
                        if let affiliation = leftInfo.affiliation {
                            Text(affiliation)
                        }
                    } else {
                        Text("Left person wasn't found")
                    }
                }
                if let right = bout.right, right.firstName != nil {
                    if let rightInfo = findPerson(right.lastName, right.firstName!) {
                        Text("(\(rightInfo.seed)) " + rightInfo.formattedName)
                        if let affiliation = rightInfo.affiliation {
                            Text(affiliation)
                        }
                    } else {
                        Text("Right person wasn't found")
                    }
                }
            }
        }
    }
}

func personToNameCombo(_ person: TableauData.Table.Bout.BoutCompetitor?) -> String {
    if let person {
        return (person.firstName.map { "\($0) " } ?? "") + person.lastName + (person.firstName.map { " \($0)" } ?? "")
    } else {
        return ""
    }
    
}

struct TableauView: View {
    let tableau: TableauData
    
    @State var searchText = ""
    @State var hideByes = false
    
    func findFencer(_ lastName: String, _ firstName: String) -> TableauData.Person? {
        tableau.people.first {
            $0.lastName == lastName && $0.firstName == firstName
        }
    }
    
    func filteredTableau(
        bouts: [TableauData.Table.Bout],
        searchText: String,
        hidingByes: Bool
    ) -> [TableauData.Table.Bout] {
        guard !searchText.isEmpty else { return bouts.filter {
            !(hidingByes && ($0.left?.lastName == "- BYE -" || $0.right?.lastName == "- BYE -"))
        } }
        return bouts.filter {
            !(hidingByes && ($0.left?.lastName == "- BYE -" || $0.right?.lastName == "- BYE -"))
        }.filter { bout in
            personToNameCombo(bout.left).lowercased().contains(searchText.lowercased()) || personToNameCombo(bout.right).lowercased().contains(searchText.lowercased())
        }
    }

    var body: some View {
        List {
            Toggle("Hide Byes", isOn: $hideByes.animation())
            ForEach(tableau.tables, id: \.name) { table in
                CollapsibleSection(content: {
                    ForEach(filteredTableau(bouts: table.bouts, searchText: searchText, hidingByes: hideByes)) { bout in
                        BoutView(bout: bout, findPerson: self.findFencer)
                    }
                }, header: table.name)
            }
        }
        .listStyle(.sidebar)
        .searchable(text: $searchText.animation(), prompt: "Type to filter")
    }
}

struct TableausView: View {
    let event: TournamentData.Day.Event
    let roundId: String

    @State var tableausData: [TableauData]?
    @State var error: Error?


    func fetchData() async {
        do {
            error = nil
            let url = URL(string: "\(BASE_URL)/event/\(event.id)/\(roundId)/tableaus")!
            let (data, _) = try await URLSession.shared.data(from: url)
            self.tableausData = try JSONDecoder().decode([TableauData].self, from: data)
        } catch {
            self.error = error
        }
    }

    var body: some View {
        Group {
            if let error = self.error {
                ErrorView(error: error, retry: fetchData)
            } else if let tableausData = self.tableausData {
                if (tableausData.count > 1) {
                    List {
                        ForEach(tableausData, id: \.name) { tableau in
                            NavigationLink {
                                TableauView(tableau: tableau)
                                    .navigationTitle(tableau.name)
                                    .toolbar {
                                        ToolbarItem {
                                            NavigationLink {
                                                FencingTimeLiveWebView(
                                                    url: URL(
                                                        string: "https://www.fencingtimelive.com/tableaus/scores/\(event.id)/\(roundId)")!)
                                            } label: {
                                                Label("Website", systemImage: "safari")
                                            }
                                        }
                                    }
                                    .refreshable {
                                        await fetchData()
                                    }
                            } label: {
                                Text(tableau.name)
                            }
                        }
                    }
                } else {
                    TableauView(tableau: tableausData[0])
                }
            } else {
                ProgressView()
            }
        }
        .navigationTitle("Tableau")
        .toolbar {
            ToolbarItem {
                NavigationLink {
                    FencingTimeLiveWebView(
                        url: URL(
                            string: "https://www.fencingtimelive.com/tableaus/scores/\(event.id)/\(roundId)")!)
                } label: {
                    Label("Website", systemImage: "safari")
                }
            }
        }
        .refreshable {
            await fetchData()
        }
        .task {
            await fetchData()
        }
    }
}

struct TableauData: Decodable {
    var name: String
    var people: [Person]
    var tables: [Table]
    
    struct Person: Decodable {
        var lastName: String
        var firstName: String?
        var seed: String
        var affiliation: String?
        var formattedName: String
    }

    struct Table: Decodable {
        var name: String
        var bouts: [Bout]
        
        struct Bout: Decodable, Identifiable {
            var id: String
            var left: BoutCompetitor?
            var right: BoutCompetitor?
            var leftWon: Bool?
            var info: String?
            
            struct BoutCompetitor: Decodable {
                var seed: String
                var lastName: String
                var firstName: String?
                var score: Int?
            }
        }
    }
}
