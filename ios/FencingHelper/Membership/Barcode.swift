//
//  Pixel.swift
//  FencingHelper
//
//  Created by Ethan Henry on 12/28/24.
//

import Combine
import CoreImage.CIFilterBuiltins
import SwiftUI

public struct Pixel {
    public var value: UInt32

    public var red: UInt8 {
        get {
            return UInt8(value & 0xFF)
        }
        set {
            value = UInt32(newValue) | (value & 0xFFFF_FF00)
        }
    }

    public var green: UInt8 {
        get {
            return UInt8((value >> 8) & 0xFF)
        }
        set {
            value = (UInt32(newValue) << 8) | (value & 0xFFFF_00FF)
        }
    }

    public var blue: UInt8 {
        get {
            return UInt8((value >> 16) & 0xFF)
        }
        set {
            value = (UInt32(newValue) << 16) | (value & 0xFF00_FFFF)
        }
    }

    public var alpha: UInt8 {
        get {
            return UInt8((value >> 24) & 0xFF)
        }
        set {
            value = (UInt32(newValue) << 24) | (value & 0x00FF_FFFF)
        }
    }
}

public struct RGBAImage {
    public var pixels: UnsafeMutableBufferPointer<Pixel>

    public var width: Int
    public var height: Int

    public init?(image: UIImage) {
        guard let cgImage = image.cgImage else { return nil }

        // Redraw image for correct pixel format
        let colorSpace = CGColorSpaceCreateDeviceRGB()

        var bitmapInfo: UInt32 = CGBitmapInfo.byteOrder32Big.rawValue
        bitmapInfo |=
            CGImageAlphaInfo.premultipliedLast.rawValue & CGBitmapInfo.alphaInfoMask.rawValue

        width = Int(image.size.width)
        height = Int(image.size.height)
        let bytesPerRow = width * 4

        let imageData = UnsafeMutablePointer<Pixel>.allocate(capacity: width * height)

        guard
            let imageContext = CGContext(
                data: imageData, width: width, height: height, bitsPerComponent: 8,
                bytesPerRow: bytesPerRow, space: colorSpace, bitmapInfo: bitmapInfo)
        else { return nil }
        imageContext.draw(cgImage, in: CGRect(origin: CGPoint.zero, size: image.size))

        pixels = UnsafeMutableBufferPointer<Pixel>(start: imageData, count: width * height)
    }

    public func toUIImage() -> UIImage? {
        let colorSpace = CGColorSpaceCreateDeviceRGB()
        var bitmapInfo: UInt32 = CGBitmapInfo.byteOrder32Big.rawValue
        bitmapInfo |=
            CGImageAlphaInfo.premultipliedLast.rawValue & CGBitmapInfo.alphaInfoMask.rawValue

        let bytesPerRow = width * 4

        guard
            let imageContext = CGContext(
                data: pixels.baseAddress, width: width, height: height, bitsPerComponent: 8,
                bytesPerRow: bytesPerRow, space: colorSpace, bitmapInfo: bitmapInfo,
                releaseCallback: nil,
                releaseInfo: nil)
        else { return nil }

        guard let cgImage = imageContext.makeImage() else { return nil }
        let image = UIImage(cgImage: cgImage)

        return image
    }
}

let context = CIContext()
let generator = CIFilter.code128BarcodeGenerator()

func generateBarcode(text: String, colorScheme: ColorScheme) -> Image {
    let generator = CIFilter.code128BarcodeGenerator()
    generator.message = Data(text.utf8)
    generator.quietSpace = 0

    if let outputImage = generator.outputImage,
        let cgImage = context.createCGImage(outputImage, from: outputImage.extent)
    {

        let uiImage = UIImage(cgImage: cgImage)
        let rgbImage = RGBAImage(image: uiImage)!
        let transparentPixel = Pixel(value: 0x0000_0000)
        let coloredPixel = Pixel(value: colorScheme == .light ? 0xFF00_0000 : 0xFFFF_FFFF)
        for (index, piece) in rgbImage.pixels.enumerated() {
            if piece.red >= 240 && piece.green >= 240 && piece.blue >= 240 {
                rgbImage.pixels[index] = transparentPixel
            } else {
                rgbImage.pixels[index] = coloredPixel
            }
        }

        return Image(uiImage: rgbImage.toUIImage() ?? uiImage)
    }

    return Image(systemName: "barcode")
}
