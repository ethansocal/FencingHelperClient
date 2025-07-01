// index.ts
var qs = document.querySelector.bind(document);
var qsa = document.querySelectorAll.bind(document);
function createElement(type, options = {}) {
  const element = document.createElement(type);
  Object.entries(options).forEach(([key, value]) => {
    if (key === "class") {
      element.classList.add(...value.split(" "));
      return;
    }
    if (key === "text") {
      element.textContent = value;
      return;
    }
    if (key === "innerHTML") {
      element.innerHTML = value;
      return;
    }
    if (key === "children") {
      value.forEach((child) => {
        element.appendChild(child);
      });
      return;
    }
    element.setAttribute(key, value);
  });
  return element;
}
function injectCSS(css) {
  document.head.appendChild(createElement("style", { innerHTML: css }));
}
function start() {
  injectCSS(`
    header {
        display: none;
    }
    main {
        padding-top: 0;
        min-height: auto;
    }
    html, body {
        height: auto;
    }
    #tabScrollContainer {
        padding-bottom: 0 !important;
    }
    #ftfooter {
        display: none;
    }
    .shBannerMobile, .fhBanner {
        display: none;
    }
    .tabs-wrapper {
        display: none;
    }
    h3:has(+ #searchApp), h3:has(+ div.alert.alert-primary.p-0), div.alert.alert-primary.p-0 > div > div.w-100 > a, h3:has(+ h5), h3:has(+ table) {
        display: none;
    }`);
  injectCSS(`
    @media (prefers-color-scheme: dark) {
        /*
                                _______
                            /                                   .==.    .==.
                            ((  ))==((  ))
                            / "=="    "=="                        /____|| || ||___            ________     ____    ________  ___    ___
            |  ___     /       |  ___   |  |  /  /
            |  |     /  /    |  |    |  |_/  /
            |  |   )  /  /__   |  |__/  /|  ___              |  |__/  /  ______  |  ____  |  |            _______|_______/__/ ____ ____|_______|_________
        |  ___   |  ____/ /       |  ___   |  ____|  ___          |  |    |  |___ /  /    |  |    |  |___|  |            |  |__/  /|  ____/  /__   |  |   )  |  ____|  |__/  /
        |  ____  |  |__/  ______  |  |__/  /|  |___|  ____          |__|   ______/__/      _________/ |______|__|   __                        https://darkreader.org
        */

        /*! Dark reader generated CSS | Licensed under MIT https://github.com/darkreader/darkreader/blob/main/LICENSE */

        /* User-Agent Style */
        html {
            background-color: #181a1b !important;
        }
        html {
            color-scheme: dark !important;
        }
        html, body {
            background-color: #181a1b;
        }
        html, body {
            border-color: #736b5e;
            color: #e8e6e3;
        }
        a {
            color: #3391ff;
        }
        table {
            border-color: #545b5e;
        }
        ::placeholder {
            color: #b2aba1;
        }
        input:-webkit-autofill,
        textarea:-webkit-autofill,
        select:-webkit-autofill {
            background-color: #404400 !important;
            color: #e8e6e3 !important;
        }
        ::-webkit-scrollbar {
            background-color: #202324;
            color: #aba499;
        }
        ::-webkit-scrollbar-thumb {
            background-color: #454a4d;
        }
        ::-webkit-scrollbar-thumb:hover {
            background-color: #575e62;
        }
        ::-webkit-scrollbar-thumb:active {
            background-color: #484e51;
        }
        ::-webkit-scrollbar-corner {
            background-color: #181a1b;
        }
        ::selection {
            background-color: #004daa !important;
            color: #e8e6e3 !important;
        }
        ::-moz-selection {
            background-color: #004daa !important;
            color: #e8e6e3 !important;
        }

        /* Invert Style */
        .jfk-bubble.gtx-bubble, .captcheck_answer_label > input + img, span#closed_text > img[src^="https://www.gstatic.com/images/branding/googlelogo"], span[data-href^="https://www.hcaptcha.com/"] > #icon, #bit-notification-bar-iframe, ::-webkit-calendar-picker-indicator, img.Wirisformula {
            filter: invert(100%) hue-rotate(180deg) contrast(90%) !important;
        }

        /* Variables Style */
        :root {
        --darkreader-neutral-background: #131516;
        --darkreader-neutral-text: #d8d4cf;
        --darkreader-selection-background: #004daa;
        --darkreader-selection-text: #e8e6e3;
        }

        /* Modified CSS */
        .fa-border {
            border-color: rgb(53, 57, 59);
        }
        .fa-inverse {
            color: rgb(232, 230, 227);
        }
        .sr-only {
            border-color: initial;
        }
        :root {
            --blue: #007bff; --indigo: #6610f2; --purple: #6f42c1; --pink: #e83e8c; --red: #dc3545; --orange: #fd7e14; --yellow: #ffc107; --green: #28a745; --teal: #20c997; --cyan: #17a2b8; --white: #fff; --gray: #6c757d; --gray-dark: #343a40; --primary: #007bff; --secondary: #6c757d; --success: #28a745; --info: #17a2b8; --warning: #ffc107; --danger: #dc3545; --light: #f8f9fa; --dark: #343a40; --breakpoint-xs: 0; --breakpoint-sm: 576px; --breakpoint-md: 768px; --breakpoint-lg: 992px; --breakpoint-xl: 1200px; --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"; --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",
            monospace;
        }
        html {
            -webkit-tap-highlight-color: transparent;
        }
        body {
            color: rgb(209, 205, 199);
            background-color: rgb(24, 26, 27);
        }
        [tabindex="-1"]:focus {
            outline-color: initial !important;
        }
        abbr[data-original-title],
        abbr[title] {
            text-decoration-color: initial;
            border-bottom-color: initial;
        }
        a {
            color: rgb(51, 162, 255);
            text-decoration-color: initial;
            background-color: transparent;
        }
        a:hover {
            color: rgb(97, 183, 255);
            text-decoration-color: initial;
        }
        a:not([href]):not([tabindex]) {
            color: inherit;
            text-decoration-color: initial;
        }
        a:not([href]):not([tabindex]):focus,
        a:not([href]):not([tabindex]):hover {
            color: inherit;
            text-decoration-color: initial;
        }
        a:not([href]):not([tabindex]):focus {
            outline-color: initial;
        }
        caption {
            color: rgb(158, 150, 137);
        }
        button:focus {
            outline-color: rgb(186, 123, 0);
        }
        fieldset {
            border-color: initial;
        }
        legend {
            color: inherit;
        }
        hr {
            border-right-color: initial;
            border-bottom-color: initial;
            border-left-color: initial;
            border-top-color: rgba(140, 130, 115, 0.1);
        }
        .mark,
        mark {
            background-color: rgb(47, 40, 5);
        }
        .list-unstyled {
            list-style-image: initial;
        }
        .list-inline {
            list-style-image: initial;
        }
        .blockquote-footer {
            color: rgb(158, 150, 137);
        }
        .img-thumbnail {
            background-color: rgb(24, 26, 27);
            border-color: rgb(56, 61, 63);
        }
        .figure-caption {
            color: rgb(158, 150, 137);
        }
        code {
            color: rgb(233, 74, 147);
        }
        a > code {
            color: inherit;
        }
        kbd {
            color: rgb(232, 230, 227);
            background-color: rgb(28, 30, 31);
        }
        pre {
            color: rgb(209, 205, 199);
        }
        pre code {
            color: inherit;
        }
        .table {
            color: rgb(209, 205, 199);
        }
        .table td,
        .table th {
            border-top-color: rgb(56, 61, 63);
        }
        .table thead th {
            border-bottom-color: rgb(56, 61, 63);
        }
        .table tbody + tbody {
            border-top-color: rgb(56, 61, 63);
        }
        .table-bordered {
            border-color: rgb(56, 61, 63);
        }
        .table-bordered td,
        .table-bordered th {
            border-color: rgb(56, 61, 63);
        }
        .table-borderless tbody + tbody,
        .table-borderless td,
        .table-borderless th,
        .table-borderless thead th {
            border-color: initial;
        }
        .table-striped tbody tr:nth-of-type(2n+1) {
            background-color: rgba(0, 0, 0, 0.05);
        }
        .table-hover tbody tr:hover {
            color: rgb(209, 205, 199);
            background-color: rgba(0, 0, 0, 0.07);
        }
        .table-primary,
        .table-primary > td,
        .table-primary > th {
            background-color: rgb(44, 48, 50);
        }
        .table-primary tbody + tbody,
        .table-primary td,
        .table-primary th,
        .table-primary thead th {
            border-color: rgb(0, 68, 142);
        }
        .table-hover .table-primary:hover {
            background-color: rgb(51, 55, 57);
        }
        .table-hover .table-primary:hover > td,
        .table-hover .table-primary:hover > th {
            background-color: rgb(51, 55, 57);
        }
        .table-secondary,
        .table-secondary > td,
        .table-secondary > th {
            background-color: rgb(46, 50, 51);
        }
        .table-secondary tbody + tbody,
        .table-secondary td,
        .table-secondary th,
        .table-secondary thead th {
            border-color: rgb(68, 74, 77);
        }
        .table-hover .table-secondary:hover {
            background-color: rgb(53, 58, 60);
        }
        .table-hover .table-secondary:hover > td,
        .table-hover .table-secondary:hover > th {
            background-color: rgb(53, 58, 60);
        }
        .table-success,
        .table-success > td,
        .table-success > th {
            background-color: rgb(30, 72, 48);
        }
        .table-success tbody + tbody,
        .table-success td,
        .table-success th,
        .table-success thead th {
            border-color: rgb(43, 106, 58);
        }
        .table-hover .table-success:hover {
            background-color: rgb(34, 83, 54);
        }
        .table-hover .table-success:hover > td,
        .table-hover .table-success:hover > th {
            background-color: rgb(34, 83, 54);
        }
        .table-info,
        .table-info > td,
        .table-info > th {
            background-color: rgb(24, 71, 78);
        }
        .table-info tbody + tbody,
        .table-info td,
        .table-info th,
        .table-info thead th {
            border-color: rgb(35, 104, 114);
        }
        .table-hover .table-info:hover {
            background-color: rgb(28, 81, 89);
        }
        .table-hover .table-info:hover > td,
        .table-hover .table-info:hover > th {
            background-color: rgb(28, 81, 89);
        }
        .table-warning,
        .table-warning > td,
        .table-warning > th {
            background-color: rgb(69, 52, 0);
        }
        .table-warning tbody + tbody,
        .table-warning td,
        .table-warning th,
        .table-warning thead th {
            border-color: rgb(141, 106, 0);
        }
        .table-hover .table-warning:hover {
            background-color: rgb(81, 61, 0);
        }
        .table-hover .table-warning:hover > td,
        .table-hover .table-warning:hover > th {
            background-color: rgb(81, 61, 0);
        }
        .table-danger,
        .table-danger > td,
        .table-danger > th {
            background-color: rgb(78, 14, 20);
        }
        .table-danger tbody + tbody,
        .table-danger td,
        .table-danger th,
        .table-danger thead th {
            border-color: rgb(119, 20, 29);
        }
        .table-hover .table-danger:hover {
            background-color: rgb(91, 16, 24);
        }
        .table-hover .table-danger:hover > td,
        .table-hover .table-danger:hover > th {
            background-color: rgb(91, 16, 24);
        }
        .table-light,
        .table-light > td,
        .table-light > th {
            background-color: rgb(25, 27, 28);
        }
        .table-light tbody + tbody,
        .table-light td,
        .table-light th,
        .table-light thead th {
            border-color: rgb(49, 53, 55);
        }
        .table-hover .table-light:hover {
            background-color: rgb(32, 35, 36);
        }
        .table-hover .table-light:hover > td,
        .table-hover .table-light:hover > th {
            background-color: rgb(32, 35, 36);
        }
        .table-dark,
        .table-dark > td,
        .table-dark > th {
            background-color: rgb(55, 60, 62);
        }
        .table-dark tbody + tbody,
        .table-dark td,
        .table-dark th,
        .table-dark thead th {
            border-color: rgb(77, 83, 87);
        }
        .table-hover .table-dark:hover {
            background-color: rgb(62, 67, 70);
        }
        .table-hover .table-dark:hover > td,
        .table-hover .table-dark:hover > th {
            background-color: rgb(62, 67, 70);
        }
        .table-active,
        .table-active > td,
        .table-active > th {
            background-color: rgba(0, 0, 0, 0.07);
        }
        .table-hover .table-active:hover {
            background-color: rgba(0, 0, 0, 0.07);
        }
        .table-hover .table-active:hover > td,
        .table-hover .table-active:hover > th {
            background-color: rgba(0, 0, 0, 0.07);
        }
        .table .thead-dark th {
            color: rgb(232, 230, 227);
            background-color: rgb(44, 47, 49);
            border-color: rgb(115, 106, 94);
        }
        .table .thead-light th {
            color: rgb(181, 175, 166);
            background-color: rgb(35, 38, 39);
            border-color: rgb(56, 61, 63);
        }
        .table-dark {
            color: rgb(232, 230, 227);
            background-color: rgb(44, 47, 49);
        }
        .table-dark td,
        .table-dark th,
        .table-dark thead th {
            border-color: rgb(115, 106, 94);
        }
        .table-dark.table-bordered {
            border-color: initial;
        }
        .table-dark.table-striped tbody tr:nth-of-type(2n+1) {
            background-color: rgba(24, 26, 27, 0.05);
        }
        .table-dark.table-hover tbody tr:hover {
            color: rgb(232, 230, 227);
            background-color: rgba(24, 26, 27, 0.07);
        }
        @media (max-width: 575.98px) {
            .table-responsive-sm > .table-bordered {
                border-color: initial;
            }
        }
        @media (max-width: 767.98px) {
            .table-responsive-md > .table-bordered {
                border-color: initial;
            }
        }
        @media (max-width: 991.98px) {
            .table-responsive-lg > .table-bordered {
                border-color: initial;
            }
        }
        @media (max-width: 1199.98px) {
            .table-responsive-xl > .table-bordered {
                border-color: initial;
            }
        }
        .table-responsive > .table-bordered {
            border-color: initial;
        }
        .form-control {
            color: rgb(181, 175, 166);
            background-color: rgb(24, 26, 27);
            border-color: rgb(60, 65, 68);
        }
        .form-control:focus {
            color: rgb(181, 175, 166);
            background-color: rgb(24, 26, 27);
            border-color: rgb(0, 67, 140);
            outline-color: initial;
            box-shadow: rgba(0, 98, 204, 0.25) 0px 0px 0px 0.2rem;
        }
        .form-control::-webkit-input-placeholder {
            color: rgb(158, 150, 137);
        }
        .form-control::placeholder {
            color: rgb(158, 150, 137);
        }
        .form-control:disabled,
        .form-control[readonly] {
            background-color: rgb(35, 38, 39);
        }
        .form-control-plaintext {
            color: rgb(209, 205, 199);
            background-color: transparent;
            border-color: transparent;
        }
        .form-check-input:disabled ~ .form-check-label {
            color: rgb(158, 150, 137);
        }
        .valid-feedback {
            color: rgb(97, 217, 124);
        }
        .valid-tooltip {
            color: rgb(232, 230, 227);
            background-color: rgba(32, 134, 55, 0.9);
        }
        .form-control.is-valid,
        .was-validated .form-control:valid {
            border-color: rgb(37, 156, 64);
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyMyOGE3NDUnIGQ9J00yLjMgNi43M0wuNiA0LjUzYy0uNC0xLjA0LjQ2LTEuNCAxLjEtLjhsMS4xIDEuNCAzLjQtMy44Yy42LS42MyAxLjYtLjI3IDEuMi43bC00IDQuNmMtLjQzLjUtLjguNC0xLjEuMXonLz48L3N2Zz4=");
        }
        .form-control.is-valid:focus,
        .was-validated .form-control:valid:focus {
            border-color: rgb(37, 156, 64);
            box-shadow: rgba(32, 134, 55, 0.25) 0px 0px 0px 0.2rem;
        }
        .custom-select.is-valid,
        .was-validated .custom-select:valid {
            border-color: rgb(37, 156, 64);
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0IDUnPjxwYXRoIGZpbGw9JyMzNDNhNDAnIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLz48L3N2Zz4="),
            url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyMyOGE3NDUnIGQ9J00yLjMgNi43M0wuNiA0LjUzYy0uNC0xLjA0LjQ2LTEuNCAxLjEtLjhsMS4xIDEuNCAzLjQtMy44Yy42LS42MyAxLjYtLjI3IDEuMi43bC00IDQuNmMtLjQzLjUtLjguNC0xLjEuMXonLz48L3N2Zz4=");
            background-color: rgb(24, 26, 27);
        }
        .custom-select.is-valid:focus,
        .was-validated .custom-select:valid:focus {
            border-color: rgb(37, 156, 64);
            box-shadow: rgba(32, 134, 55, 0.25) 0px 0px 0px 0.2rem;
        }
        .form-check-input.is-valid ~ .form-check-label,
        .was-validated .form-check-input:valid ~ .form-check-label {
            color: rgb(97, 217, 124);
        }
        .custom-control-input.is-valid ~ .custom-control-label,
        .was-validated .custom-control-input:valid ~ .custom-control-label {
            color: rgb(97, 217, 124);
        }
        .custom-control-input.is-valid ~ .custom-control-label::before,
        .was-validated .custom-control-input:valid ~ .custom-control-label::before {
            border-color: rgb(37, 156, 64);
        }
        .custom-control-input.is-valid:checked ~ .custom-control-label::before,
        .was-validated .custom-control-input:valid:checked ~ .custom-control-label::before {
            border-color: rgb(35, 143, 59);
            background-color: rgb(39, 163, 91);
        }
        .custom-control-input.is-valid:focus ~ .custom-control-label::before,
        .was-validated .custom-control-input:valid:focus ~ .custom-control-label::before {
            box-shadow: rgba(32, 134, 55, 0.25) 0px 0px 0px 0.2rem;
        }
        .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before,
        .was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before {
            border-color: rgb(37, 156, 64);
        }
        .custom-file-input.is-valid ~ .custom-file-label,
        .was-validated .custom-file-input:valid ~ .custom-file-label {
            border-color: rgb(37, 156, 64);
        }
        .custom-file-input.is-valid:focus ~ .custom-file-label,
        .was-validated .custom-file-input:valid:focus ~ .custom-file-label {
            border-color: rgb(37, 156, 64);
            box-shadow: rgba(32, 134, 55, 0.25) 0px 0px 0px 0.2rem;
        }
        .invalid-feedback {
            color: rgb(223, 70, 85);
        }
        .invalid-tooltip {
            color: rgb(232, 230, 227);
            background-color: rgba(165, 29, 42, 0.9);
        }
        .form-control.is-invalid,
        .was-validated .form-control:invalid {
            border-color: rgb(148, 26, 37);
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyNkYzM1NDUnIHZpZXdCb3g9Jy0yIC0yIDcgNyc+PHBhdGggc3Ryb2tlPScjZGMzNTQ1JyBkPSdNMCAwbDMgM20wLTNMMCAzJy8+PGNpcmNsZSByPScuNScvPjxjaXJjbGUgY3g9JzMnIHI9Jy41Jy8+PGNpcmNsZSBjeT0nMycgcj0nLjUnLz48Y2lyY2xlIGN4PSczJyBjeT0nMycgcj0nLjUnLz48L3N2Zz4=");
        }
        .form-control.is-invalid:focus,
        .was-validated .form-control:invalid:focus {
            border-color: rgb(148, 26, 37);
            box-shadow: rgba(165, 29, 42, 0.25) 0px 0px 0px 0.2rem;
        }
        .custom-select.is-invalid,
        .was-validated .custom-select:invalid {
            border-color: rgb(148, 26, 37);
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0IDUnPjxwYXRoIGZpbGw9JyMzNDNhNDAnIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLz48L3N2Zz4="),
            url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyNkYzM1NDUnIHZpZXdCb3g9Jy0yIC0yIDcgNyc+PHBhdGggc3Ryb2tlPScjZGMzNTQ1JyBkPSdNMCAwbDMgM20wLTNMMCAzJy8+PGNpcmNsZSByPScuNScvPjxjaXJjbGUgY3g9JzMnIHI9Jy41Jy8+PGNpcmNsZSBjeT0nMycgcj0nLjUnLz48Y2lyY2xlIGN4PSczJyBjeT0nMycgcj0nLjUnLz48L3N2Zz4=");
            background-color: rgb(24, 26, 27);
        }
        .custom-select.is-invalid:focus,
        .was-validated .custom-select:invalid:focus {
            border-color: rgb(148, 26, 37);
            box-shadow: rgba(165, 29, 42, 0.25) 0px 0px 0px 0.2rem;
        }
        .form-check-input.is-invalid ~ .form-check-label,
        .was-validated .form-check-input:invalid ~ .form-check-label {
            color: rgb(223, 70, 85);
        }
        .custom-control-input.is-invalid ~ .custom-control-label,
        .was-validated .custom-control-input:invalid ~ .custom-control-label {
            color: rgb(223, 70, 85);
        }
        .custom-control-input.is-invalid ~ .custom-control-label::before,
        .was-validated .custom-control-input:invalid ~ .custom-control-label::before {
            border-color: rgb(148, 26, 37);
        }
        .custom-control-input.is-invalid:checked ~ .custom-control-label::before,
        .was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before {
            border-color: rgb(135, 23, 34);
            background-color: rgb(139, 24, 35);
        }
        .custom-control-input.is-invalid:focus ~ .custom-control-label::before,
        .was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before {
            box-shadow: rgba(165, 29, 42, 0.25) 0px 0px 0px 0.2rem;
        }
        .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before,
        .was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before {
            border-color: rgb(148, 26, 37);
        }
        .custom-file-input.is-invalid ~ .custom-file-label,
        .was-validated .custom-file-input:invalid ~ .custom-file-label {
            border-color: rgb(148, 26, 37);
        }
        .custom-file-input.is-invalid:focus ~ .custom-file-label,
        .was-validated .custom-file-input:invalid:focus ~ .custom-file-label {
            border-color: rgb(148, 26, 37);
            box-shadow: rgba(165, 29, 42, 0.25) 0px 0px 0px 0.2rem;
        }
        .btn {
            color: rgb(209, 205, 199);
            background-color: transparent;
            border-color: transparent;
        }
        .btn:hover {
            color: rgb(209, 205, 199);
            text-decoration-color: initial;
        }
        .btn.focus,
        .btn:focus {
            outline-color: initial;
            box-shadow: rgba(0, 98, 204, 0.25) 0px 0px 0px 0.2rem;
        }
        .btn-primary {
            color: rgb(232, 230, 227);
            background-color: rgb(0, 98, 204);
            border-color: rgb(0, 86, 179);
        }
        .btn-primary:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(0, 84, 174);
            border-color: rgb(0, 93, 194);
        }
        .btn-primary.focus,
        .btn-primary:focus {
            box-shadow: rgba(0, 88, 181, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-primary.disabled,
        .btn-primary:disabled {
            color: rgb(232, 230, 227);
            background-color: rgb(0, 98, 204);
            border-color: rgb(0, 86, 179);
        }
        .btn-primary:not(:disabled):not(.disabled).active,
        .btn-primary:not(:disabled):not(.disabled):active,
        .show > .btn-primary.dropdown-toggle {
            color: rgb(232, 230, 227);
            background-color: rgb(0, 78, 163);
            border-color: rgb(0, 95, 198);
        }
        .btn-primary:not(:disabled):not(.disabled).active:focus,
        .btn-primary:not(:disabled):not(.disabled):active:focus,
        .show > .btn-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 88, 181, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-secondary {
            color: rgb(232, 230, 227);
            background-color: rgb(88, 95, 99);
            border-color: rgb(102, 94, 83);
        }
        .btn-secondary:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(73, 79, 82);
            border-color: rgb(110, 102, 90);
        }
        .btn-secondary.focus,
        .btn-secondary:focus {
            box-shadow: rgba(90, 98, 102, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-secondary.disabled,
        .btn-secondary:disabled {
            color: rgb(232, 230, 227);
            background-color: rgb(88, 95, 99);
            border-color: rgb(102, 94, 83);
        }
        .btn-secondary:not(:disabled):not(.disabled).active,
        .btn-secondary:not(:disabled):not(.disabled):active,
        .show > .btn-secondary.dropdown-toggle {
            color: rgb(232, 230, 227);
            background-color: rgb(69, 74, 77);
            border-color: rgb(112, 104, 92);
        }
        .btn-secondary:not(:disabled):not(.disabled).active:focus,
        .btn-secondary:not(:disabled):not(.disabled):active:focus,
        .show > .btn-secondary.dropdown-toggle:focus {
            box-shadow: rgba(90, 98, 102, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-success {
            color: rgb(232, 230, 227);
            background-color: rgb(32, 134, 55);
            border-color: rgb(37, 156, 64);
        }
        .btn-success:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(26, 109, 45);
            border-color: rgb(40, 168, 69);
        }
        .btn-success.focus,
        .btn-success:focus {
            box-shadow: rgba(58, 144, 78, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-success.disabled,
        .btn-success:disabled {
            color: rgb(232, 230, 227);
            background-color: rgb(32, 134, 55);
            border-color: rgb(37, 156, 64);
        }
        .btn-success:not(:disabled):not(.disabled).active,
        .btn-success:not(:disabled):not(.disabled):active,
        .show > .btn-success.dropdown-toggle {
            color: rgb(232, 230, 227);
            background-color: rgb(24, 101, 42);
            border-color: rgb(41, 171, 71);
        }
        .btn-success:not(:disabled):not(.disabled).active:focus,
        .btn-success:not(:disabled):not(.disabled):active:focus,
        .show > .btn-success.dropdown-toggle:focus {
            box-shadow: rgba(58, 144, 78, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-info {
            color: rgb(232, 230, 227);
            background-color: rgb(18, 130, 147);
            border-color: rgb(21, 151, 171);
        }
        .btn-info:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(15, 106, 120);
            border-color: rgb(23, 163, 186);
        }
        .btn-info.focus,
        .btn-info:focus {
            box-shadow: rgba(46, 141, 156, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-info.disabled,
        .btn-info:disabled {
            color: rgb(232, 230, 227);
            background-color: rgb(18, 130, 147);
            border-color: rgb(21, 151, 171);
        }
        .btn-info:not(:disabled):not(.disabled).active,
        .btn-info:not(:disabled):not(.disabled):active,
        .show > .btn-info.dropdown-toggle {
            color: rgb(232, 230, 227);
            background-color: rgb(14, 98, 111);
            border-color: rgb(24, 166, 188);
        }
        .btn-info:not(:disabled):not(.disabled).active:focus,
        .btn-info:not(:disabled):not(.disabled):active:focus,
        .show > .btn-info.dropdown-toggle:focus {
            box-shadow: rgba(46, 141, 156, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-warning {
            color: rgb(209, 205, 199);
            background-color: rgb(150, 112, 0);
            border-color: rgb(176, 132, 0);
        }
        .btn-warning:hover {
            color: rgb(209, 205, 199);
            background-color: rgb(179, 134, 0);
            border-color: rgb(192, 144, 0);
        }
        .btn-warning.focus,
        .btn-warning:focus {
            box-shadow: rgba(178, 136, 10, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-warning.disabled,
        .btn-warning:disabled {
            color: rgb(209, 205, 199);
            background-color: rgb(150, 112, 0);
            border-color: rgb(176, 132, 0);
        }
        .btn-warning:not(:disabled):not(.disabled).active,
        .btn-warning:not(:disabled):not(.disabled):active,
        .show > .btn-warning.dropdown-toggle {
            color: rgb(209, 205, 199);
            background-color: rgb(169, 126, 0);
            border-color: rgb(196, 147, 0);
        }
        .btn-warning:not(:disabled):not(.disabled).active:focus,
        .btn-warning:not(:disabled):not(.disabled):active:focus,
        .show > .btn-warning.dropdown-toggle:focus {
            box-shadow: rgba(178, 136, 10, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-danger {
            color: rgb(232, 230, 227);
            background-color: rgb(165, 29, 42);
            border-color: rgb(148, 26, 37);
        }
        .btn-danger:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(160, 28, 41);
            border-color: rgb(160, 28, 41);
        }
        .btn-danger.focus,
        .btn-danger:focus {
            box-shadow: rgba(147, 26, 38, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-danger.disabled,
        .btn-danger:disabled {
            color: rgb(232, 230, 227);
            background-color: rgb(165, 29, 42);
            border-color: rgb(148, 26, 37);
        }
        .btn-danger:not(:disabled):not(.disabled).active,
        .btn-danger:not(:disabled):not(.disabled):active,
        .show > .btn-danger.dropdown-toggle {
            color: rgb(232, 230, 227);
            background-color: rgb(151, 26, 38);
            border-color: rgb(164, 29, 41);
        }
        .btn-danger:not(:disabled):not(.disabled).active:focus,
        .btn-danger:not(:disabled):not(.disabled):active:focus,
        .show > .btn-danger.dropdown-toggle:focus {
            box-shadow: rgba(147, 26, 38, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-light {
            color: rgb(209, 205, 199);
            background-color: rgb(27, 30, 31);
            border-color: rgb(50, 54, 56);
        }
        .btn-light:hover {
            color: rgb(209, 205, 199);
            background-color: rgb(38, 41, 43);
            border-color: rgb(57, 62, 64);
        }
        .btn-light.focus,
        .btn-light:focus {
            box-shadow: rgba(45, 49, 51, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-light.disabled,
        .btn-light:disabled {
            color: rgb(209, 205, 199);
            background-color: rgb(27, 30, 31);
            border-color: rgb(50, 54, 56);
        }
        .btn-light:not(:disabled):not(.disabled).active,
        .btn-light:not(:disabled):not(.disabled):active,
        .show > .btn-light.dropdown-toggle {
            color: rgb(209, 205, 199);
            background-color: rgb(42, 45, 47);
            border-color: rgb(59, 64, 66);
        }
        .btn-light:not(:disabled):not(.disabled).active:focus,
        .btn-light:not(:disabled):not(.disabled):active:focus,
        .show > .btn-light.dropdown-toggle:focus {
            box-shadow: rgba(45, 49, 51, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-dark {
            color: rgb(232, 230, 227);
            background-color: rgb(44, 47, 49);
            border-color: rgb(121, 112, 99);
        }
        .btn-dark:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(29, 32, 33);
            border-color: rgb(129, 120, 106);
        }
        .btn-dark.focus,
        .btn-dark:focus {
            box-shadow: rgba(66, 71, 74, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-dark.disabled,
        .btn-dark:disabled {
            color: rgb(232, 230, 227);
            background-color: rgb(44, 47, 49);
            border-color: rgb(121, 112, 99);
        }
        .btn-dark:not(:disabled):not(.disabled).active,
        .btn-dark:not(:disabled):not(.disabled):active,
        .show > .btn-dark.dropdown-toggle {
            color: rgb(232, 230, 227);
            background-color: rgb(24, 27, 28);
            border-color: rgb(131, 122, 108);
        }
        .btn-dark:not(:disabled):not(.disabled).active:focus,
        .btn-dark:not(:disabled):not(.disabled):active:focus,
        .show > .btn-dark.dropdown-toggle:focus {
            box-shadow: rgba(66, 71, 74, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-outline-primary {
            color: rgb(51, 162, 255);
            border-color: rgb(0, 86, 179);
        }
        .btn-outline-primary:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(0, 98, 204);
            border-color: rgb(0, 86, 179);
        }
        .btn-outline-primary.focus,
        .btn-outline-primary:focus {
            box-shadow: rgba(0, 98, 204, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-outline-primary.disabled,
        .btn-outline-primary:disabled {
            color: rgb(51, 162, 255);
            background-color: transparent;
        }
        .btn-outline-primary:not(:disabled):not(.disabled).active,
        .btn-outline-primary:not(:disabled):not(.disabled):active,
        .show > .btn-outline-primary.dropdown-toggle {
            color: rgb(232, 230, 227);
            background-color: rgb(0, 98, 204);
            border-color: rgb(0, 86, 179);
        }
        .btn-outline-primary:not(:disabled):not(.disabled).active:focus,
        .btn-outline-primary:not(:disabled):not(.disabled):active:focus,
        .show > .btn-outline-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 98, 204, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-outline-secondary {
            color: rgb(158, 150, 137);
            border-color: rgb(102, 94, 83);
        }
        .btn-outline-secondary:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(88, 95, 99);
            border-color: rgb(102, 94, 83);
        }
        .btn-outline-secondary.focus,
        .btn-outline-secondary:focus {
            box-shadow: rgba(88, 95, 99, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-outline-secondary.disabled,
        .btn-outline-secondary:disabled {
            color: rgb(158, 150, 137);
            background-color: transparent;
        }
        .btn-outline-secondary:not(:disabled):not(.disabled).active,
        .btn-outline-secondary:not(:disabled):not(.disabled):active,
        .show > .btn-outline-secondary.dropdown-toggle {
            color: rgb(232, 230, 227);
            background-color: rgb(88, 95, 99);
            border-color: rgb(102, 94, 83);
        }
        .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,
        .btn-outline-secondary:not(:disabled):not(.disabled):active:focus,
        .show > .btn-outline-secondary.dropdown-toggle:focus {
            box-shadow: rgba(88, 95, 99, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-outline-success {
            color: rgb(97, 217, 124);
            border-color: rgb(37, 156, 64);
        }
        .btn-outline-success:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(32, 134, 55);
            border-color: rgb(37, 156, 64);
        }
        .btn-outline-success.focus,
        .btn-outline-success:focus {
            box-shadow: rgba(32, 134, 55, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-outline-success.disabled,
        .btn-outline-success:disabled {
            color: rgb(97, 217, 124);
            background-color: transparent;
        }
        .btn-outline-success:not(:disabled):not(.disabled).active,
        .btn-outline-success:not(:disabled):not(.disabled):active,
        .show > .btn-outline-success.dropdown-toggle {
            color: rgb(232, 230, 227);
            background-color: rgb(32, 134, 55);
            border-color: rgb(37, 156, 64);
        }
        .btn-outline-success:not(:disabled):not(.disabled).active:focus,
        .btn-outline-success:not(:disabled):not(.disabled):active:focus,
        .show > .btn-outline-success.dropdown-toggle:focus {
            box-shadow: rgba(32, 134, 55, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-outline-info {
            color: rgb(81, 212, 233);
            border-color: rgb(21, 151, 171);
        }
        .btn-outline-info:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(18, 130, 147);
            border-color: rgb(21, 151, 171);
        }
        .btn-outline-info.focus,
        .btn-outline-info:focus {
            box-shadow: rgba(18, 130, 147, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-outline-info.disabled,
        .btn-outline-info:disabled {
            color: rgb(81, 212, 233);
            background-color: transparent;
        }
        .btn-outline-info:not(:disabled):not(.disabled).active,
        .btn-outline-info:not(:disabled):not(.disabled):active,
        .show > .btn-outline-info.dropdown-toggle {
            color: rgb(232, 230, 227);
            background-color: rgb(18, 130, 147);
            border-color: rgb(21, 151, 171);
        }
        .btn-outline-info:not(:disabled):not(.disabled).active:focus,
        .btn-outline-info:not(:disabled):not(.disabled):active:focus,
        .show > .btn-outline-info.dropdown-toggle:focus {
            box-shadow: rgba(18, 130, 147, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-outline-warning {
            color: rgb(255, 199, 30);
            border-color: rgb(176, 132, 0);
        }
        .btn-outline-warning:hover {
            color: rgb(209, 205, 199);
            background-color: rgb(150, 112, 0);
            border-color: rgb(176, 132, 0);
        }
        .btn-outline-warning.focus,
        .btn-outline-warning:focus {
            box-shadow: rgba(150, 112, 0, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-outline-warning.disabled,
        .btn-outline-warning:disabled {
            color: rgb(255, 199, 30);
            background-color: transparent;
        }
        .btn-outline-warning:not(:disabled):not(.disabled).active,
        .btn-outline-warning:not(:disabled):not(.disabled):active,
        .show > .btn-outline-warning.dropdown-toggle {
            color: rgb(209, 205, 199);
            background-color: rgb(150, 112, 0);
            border-color: rgb(176, 132, 0);
        }
        .btn-outline-warning:not(:disabled):not(.disabled).active:focus,
        .btn-outline-warning:not(:disabled):not(.disabled):active:focus,
        .show > .btn-outline-warning.dropdown-toggle:focus {
            box-shadow: rgba(150, 112, 0, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-outline-danger {
            color: rgb(223, 70, 85);
            border-color: rgb(148, 26, 37);
        }
        .btn-outline-danger:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(165, 29, 42);
            border-color: rgb(148, 26, 37);
        }
        .btn-outline-danger.focus,
        .btn-outline-danger:focus {
            box-shadow: rgba(165, 29, 42, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-outline-danger.disabled,
        .btn-outline-danger:disabled {
            color: rgb(223, 70, 85);
            background-color: transparent;
        }
        .btn-outline-danger:not(:disabled):not(.disabled).active,
        .btn-outline-danger:not(:disabled):not(.disabled):active,
        .show > .btn-outline-danger.dropdown-toggle {
            color: rgb(232, 230, 227);
            background-color: rgb(165, 29, 42);
            border-color: rgb(148, 26, 37);
        }
        .btn-outline-danger:not(:disabled):not(.disabled).active:focus,
        .btn-outline-danger:not(:disabled):not(.disabled):active:focus,
        .show > .btn-outline-danger.dropdown-toggle:focus {
            box-shadow: rgba(165, 29, 42, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-outline-light {
            color: rgb(228, 226, 222);
            border-color: rgb(50, 54, 56);
        }
        .btn-outline-light:hover {
            color: rgb(209, 205, 199);
            background-color: rgb(27, 30, 31);
            border-color: rgb(50, 54, 56);
        }
        .btn-outline-light.focus,
        .btn-outline-light:focus {
            box-shadow: rgba(27, 30, 31, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-outline-light.disabled,
        .btn-outline-light:disabled {
            color: rgb(228, 226, 222);
            background-color: transparent;
        }
        .btn-outline-light:not(:disabled):not(.disabled).active,
        .btn-outline-light:not(:disabled):not(.disabled):active,
        .show > .btn-outline-light.dropdown-toggle {
            color: rgb(209, 205, 199);
            background-color: rgb(27, 30, 31);
            border-color: rgb(50, 54, 56);
        }
        .btn-outline-light:not(:disabled):not(.disabled).active:focus,
        .btn-outline-light:not(:disabled):not(.disabled):active:focus,
        .show > .btn-outline-light.dropdown-toggle:focus {
            box-shadow: rgba(27, 30, 31, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-outline-dark {
            color: rgb(195, 190, 182);
            border-color: rgb(121, 112, 99);
        }
        .btn-outline-dark:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(44, 47, 49);
            border-color: rgb(121, 112, 99);
        }
        .btn-outline-dark.focus,
        .btn-outline-dark:focus {
            box-shadow: rgba(44, 47, 49, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-outline-dark.disabled,
        .btn-outline-dark:disabled {
            color: rgb(195, 190, 182);
            background-color: transparent;
        }
        .btn-outline-dark:not(:disabled):not(.disabled).active,
        .btn-outline-dark:not(:disabled):not(.disabled):active,
        .show > .btn-outline-dark.dropdown-toggle {
            color: rgb(232, 230, 227);
            background-color: rgb(44, 47, 49);
            border-color: rgb(121, 112, 99);
        }
        .btn-outline-dark:not(:disabled):not(.disabled).active:focus,
        .btn-outline-dark:not(:disabled):not(.disabled):active:focus,
        .show > .btn-outline-dark.dropdown-toggle:focus {
            box-shadow: rgba(44, 47, 49, 0.5) 0px 0px 0px 0.2rem;
        }
        .btn-link {
            color: rgb(51, 162, 255);
            text-decoration-color: initial;
        }
        .btn-link:hover {
            color: rgb(97, 183, 255);
            text-decoration-color: initial;
        }
        .btn-link.focus,
        .btn-link:focus {
            text-decoration-color: initial;
            box-shadow: none;
        }
        .btn-link.disabled,
        .btn-link:disabled {
            color: rgb(158, 150, 137);
        }
        .dropdown-toggle::after {
            border-top-color: initial;
            border-right-color: transparent;
            border-bottom-color: initial;
            border-left-color: transparent;
        }
        .dropdown-menu {
            color: rgb(209, 205, 199);
            list-style-image: initial;
            background-color: rgb(24, 26, 27);
            border-color: rgba(140, 130, 115, 0.15);
        }
        .dropup .dropdown-toggle::after {
            border-top-color: initial;
            border-right-color: transparent;
            border-bottom-color: initial;
            border-left-color: transparent;
        }
        .dropright .dropdown-toggle::after {
            border-top-color: transparent;
            border-right-color: initial;
            border-bottom-color: transparent;
            border-left-color: initial;
        }
        .dropleft .dropdown-toggle::before {
            border-top-color: transparent;
            border-right-color: initial;
            border-bottom-color: transparent;
        }
        .dropdown-divider {
            border-top-color: rgb(53, 58, 60);
        }
        .dropdown-item {
            color: rgb(209, 205, 199);
            background-color: transparent;
            border-color: initial;
        }
        .dropdown-item:focus,
        .dropdown-item:hover {
            color: rgb(217, 213, 208);
            text-decoration-color: initial;
            background-color: rgb(27, 30, 31);
        }
        .dropdown-item.active,
        .dropdown-item:active {
            color: rgb(232, 230, 227);
            text-decoration-color: initial;
            background-color: rgb(0, 98, 204);
        }
        .dropdown-item.disabled,
        .dropdown-item:disabled {
            color: rgb(158, 150, 137);
            background-color: transparent;
        }
        .dropdown-header {
            color: rgb(158, 150, 137);
        }
        .dropdown-item-text {
            color: rgb(209, 205, 199);
        }
        .input-group-text {
            color: rgb(181, 175, 166);
            background-color: rgb(35, 38, 39);
            border-color: rgb(60, 65, 68);
        }
        .custom-control-input:checked ~ .custom-control-label::before {
            color: rgb(232, 230, 227);
            border-color: rgb(0, 86, 179);
            background-color: rgb(0, 98, 204);
        }
        .custom-control-input:focus ~ .custom-control-label::before {
            box-shadow: rgba(0, 98, 204, 0.25) 0px 0px 0px 0.2rem;
        }
        .custom-control-input:focus:not(:checked) ~ .custom-control-label::before {
            border-color: rgb(0, 67, 140);
        }
        .custom-control-input:not(:disabled):active ~ .custom-control-label::before {
            color: rgb(232, 230, 227);
            background-color: rgb(45, 49, 51);
            border-color: rgb(0, 59, 125);
        }
        .custom-control-input:disabled ~ .custom-control-label {
            color: rgb(158, 150, 137);
        }
        .custom-control-input:disabled ~ .custom-control-label::before {
            background-color: rgb(35, 38, 39);
        }
        .custom-control-label::before {
            background-color: rgb(24, 26, 27);
            border-color: rgb(69, 75, 78);
        }
        .custom-control-label::after {
            background-image: initial;
            background-color: initial;
        }
        .custom-checkbox .custom-control-input:checked ~ .custom-control-label::after {
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGZpbGw9JyNmZmYnIGQ9J002LjU2NC43NWwtMy41OSAzLjYxMi0xLjUzOC0xLjU1TDAgNC4yNiAyLjk3NCA3LjI1IDggMi4xOTN6Jy8+PC9zdmc+");
        }
        .custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before {
            border-color: rgb(0, 86, 179);
            background-color: rgb(0, 98, 204);
        }
        .custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after {
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0IDQnPjxwYXRoIHN0cm9rZT0nI2ZmZicgZD0nTTAgMmg0Jy8+PC9zdmc+");
        }
        .custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before {
            background-color: rgba(0, 98, 204, 0.5);
        }
        .custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before {
            background-color: rgba(0, 98, 204, 0.5);
        }
        .custom-radio .custom-control-input:checked ~ .custom-control-label::after {
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9Jy00IC00IDggOCc+PGNpcmNsZSByPSczJyBmaWxsPScjZmZmJy8+PC9zdmc+");
        }
        .custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before {
            background-color: rgba(0, 98, 204, 0.5);
        }
        .custom-switch .custom-control-label::after {
            background-color: rgb(66, 71, 74);
        }
        .custom-switch .custom-control-input:checked ~ .custom-control-label::after {
            background-color: rgb(24, 26, 27);
        }
        .custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {
            background-color: rgba(0, 98, 204, 0.5);
        }
        .custom-select {
            color: rgb(181, 175, 166);
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA0IDUnPjxwYXRoIGZpbGw9JyMzNDNhNDAnIGQ9J00yIDBMMCAyaDR6bTAgNUwwIDNoNHonLz48L3N2Zz4=");
            background-color: rgb(24, 26, 27);
            border-color: rgb(60, 65, 68);
        }
        .custom-select:focus {
            border-color: rgb(0, 67, 140);
            outline-color: initial;
            box-shadow: rgba(0, 98, 204, 0.25) 0px 0px 0px 0.2rem;
        }
        .custom-select[multiple],
        .custom-select[size]:not([size="1"]) {
            background-image: none;
        }
        .custom-select:disabled {
            color: rgb(158, 150, 137);
            background-color: rgb(35, 38, 39);
        }
        .custom-file-input:focus ~ .custom-file-label {
            border-color: rgb(0, 67, 140);
            box-shadow: rgba(0, 98, 204, 0.25) 0px 0px 0px 0.2rem;
        }
        .custom-file-input:disabled ~ .custom-file-label {
            background-color: rgb(35, 38, 39);
        }
        .custom-file-label {
            color: rgb(181, 175, 166);
            background-color: rgb(24, 26, 27);
            border-color: rgb(60, 65, 68);
        }
        .custom-file-label::after {
            color: rgb(181, 175, 166);
            background-color: rgb(35, 38, 39);
            border-left-color: inherit;
        }
        .custom-range {
            background-color: transparent;
        }
        .custom-range:focus {
            outline-color: initial;
        }
        .custom-range:focus::-webkit-slider-thumb {
            box-shadow: rgb(24, 26, 27) 0px 0px 0px 1px,
            rgba(0, 98, 204, 0.25) 0px 0px 0px 0.2rem;
        }
        .custom-range::-webkit-slider-thumb {
            background-color: rgb(0, 98, 204);
            border-color: initial;
        }
        .custom-range::-webkit-slider-thumb:active {
            background-color: rgb(45, 49, 51);
        }
        .custom-range::-webkit-slider-runnable-track {
            color: transparent;
            background-color: rgb(40, 44, 45);
            border-color: transparent;
        }
        .custom-range:disabled::-webkit-slider-thumb {
            background-color: rgb(66, 71, 74);
        }
        .nav {
            list-style-image: initial;
        }
        .nav-link:focus,
        .nav-link:hover {
            text-decoration-color: initial;
        }
        .nav-link.disabled {
            color: rgb(158, 150, 137);
        }
        .nav-tabs {
            border-bottom-color: rgb(56, 61, 63);
        }
        .nav-tabs .nav-link {
            border-color: transparent;
        }
        .nav-tabs .nav-link:focus,
        .nav-tabs .nav-link:hover {
            border-color: rgb(53, 58, 60) rgb(53, 58, 60) rgb(56, 61, 63);
        }
        .nav-tabs .nav-link.disabled {
            color: rgb(158, 150, 137);
            background-color: transparent;
            border-color: transparent;
        }
        .nav-tabs .nav-item.show .nav-link,
        .nav-tabs .nav-link.active {
            color: rgb(181, 175, 166);
            background-color: rgb(24, 26, 27);
            border-color: rgb(56, 61, 63) rgb(56, 61, 63) rgb(48, 52, 54);
        }
        .nav-pills .nav-link.active,
        .nav-pills .show > .nav-link {
            color: rgb(232, 230, 227);
            background-color: rgb(0, 98, 204);
        }
        .navbar-brand:focus,
        .navbar-brand:hover {
            text-decoration-color: initial;
        }
        .navbar-nav {
            list-style-image: initial;
        }
        .navbar-toggler {
            background-color: transparent;
            border-color: transparent;
        }
        .navbar-toggler:focus,
        .navbar-toggler:hover {
            text-decoration-color: initial;
        }
        .navbar-toggler-icon {
            background-image: initial;
            background-color: initial;
        }
        .navbar-light .navbar-brand {
            color: rgba(232, 230, 227, 0.9);
        }
        .navbar-light .navbar-brand:focus,
        .navbar-light .navbar-brand:hover {
            color: rgba(232, 230, 227, 0.9);
        }
        .navbar-light .navbar-nav .nav-link {
            color: rgba(232, 230, 227, 0.5);
        }
        .navbar-light .navbar-nav .nav-link:focus,
        .navbar-light .navbar-nav .nav-link:hover {
            color: rgba(232, 230, 227, 0.7);
        }
        .navbar-light .navbar-nav .nav-link.disabled {
            color: rgba(232, 230, 227, 0.3);
        }
        .navbar-light .navbar-nav .active > .nav-link,
        .navbar-light .navbar-nav .nav-link.active,
        .navbar-light .navbar-nav .nav-link.show,
        .navbar-light .navbar-nav .show > .nav-link {
            color: rgba(232, 230, 227, 0.9);
        }
        .navbar-light .navbar-toggler {
            color: rgba(232, 230, 227, 0.5);
            border-color: rgba(140, 130, 115, 0.1);
        }
        .navbar-light .navbar-toggler-icon {
            background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggc3Ryb2tlPSdyZ2JhKDAsIDAsIDAsIDAuNSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+");
        }
        .navbar-light .navbar-text {
            color: rgba(232, 230, 227, 0.5);
        }
        .navbar-light .navbar-text a {
            color: rgba(232, 230, 227, 0.9);
        }
        .navbar-light .navbar-text a:focus,
        .navbar-light .navbar-text a:hover {
            color: rgba(232, 230, 227, 0.9);
        }
        .navbar-dark .navbar-brand {
            color: rgb(232, 230, 227);
        }
        .navbar-dark .navbar-brand:focus,
        .navbar-dark .navbar-brand:hover {
            color: rgb(232, 230, 227);
        }
        .navbar-dark .navbar-nav .nav-link {
            color: rgba(232, 230, 227, 0.5);
        }
        .navbar-dark .navbar-nav .nav-link:focus,
        .navbar-dark .navbar-nav .nav-link:hover {
            color: rgba(232, 230, 227, 0.75);
        }
        .navbar-dark .navbar-nav .nav-link.disabled {
            color: rgba(232, 230, 227, 0.25);
        }
        .navbar-dark .navbar-nav .active > .nav-link,
        .navbar-dark .navbar-nav .nav-link.active,
        .navbar-dark .navbar-nav .nav-link.show,
        .navbar-dark .navbar-nav .show > .nav-link {
            color: rgb(232, 230, 227);
        }
        .navbar-dark .navbar-toggler {
            color: rgba(232, 230, 227, 0.5);
            border-color: rgba(48, 52, 54, 0.1);
        }
        .navbar-dark .navbar-toggler-icon {
            background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMzAgMzAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggc3Ryb2tlPSdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDdoMjJNNCAxNWgyMk00IDIzaDIyJy8+PC9zdmc+");
        }
        .navbar-dark .navbar-text {
            color: rgba(232, 230, 227, 0.5);
        }
        .navbar-dark .navbar-text a {
            color: rgb(232, 230, 227);
        }
        .navbar-dark .navbar-text a:focus,
        .navbar-dark .navbar-text a:hover {
            color: rgb(232, 230, 227);
        }
        .card {
            background-color: rgb(24, 26, 27);
            border-color: rgba(140, 130, 115, 0.13);
        }
        .card-link:hover {
            text-decoration-color: initial;
        }
        .card-header {
            background-color: rgba(0, 0, 0, 0.03);
            border-bottom-color: rgba(140, 130, 115, 0.13);
        }
        .card-header + .list-group .list-group-item:first-child {
            border-top-color: initial;
        }
        .card-footer {
            background-color: rgba(0, 0, 0, 0.03);
            border-top-color: rgba(140, 130, 115, 0.13);
        }
        .card-header-tabs {
            border-bottom-color: initial;
        }
        @media (min-width: 576px) {
            .card-group > .card + .card {
                border-left-color: initial;
            }
        }
        .accordion > .card:not(:first-of-type):not(:last-of-type) {
            border-bottom-color: initial;
        }
        .accordion > .card:first-of-type {
            border-bottom-color: initial;
        }
        .breadcrumb {
            list-style-image: initial;
            background-color: rgb(35, 38, 39);
        }
        .breadcrumb-item + .breadcrumb-item::before {
            color: rgb(158, 150, 137);
        }
        .breadcrumb-item + .breadcrumb-item:hover::before {
            text-decoration-color: initial;
        }
        .breadcrumb-item + .breadcrumb-item:hover::before {
            text-decoration-color: initial;
        }
        .breadcrumb-item.active {
            color: rgb(158, 150, 137);
        }
        .pagination {
            list-style-image: initial;
        }
        .page-link {
            color: rgb(51, 162, 255);
            background-color: rgb(24, 26, 27);
            border-color: rgb(56, 61, 63);
        }
        .page-link:hover {
            color: rgb(97, 183, 255);
            text-decoration-color: initial;
            background-color: rgb(35, 38, 39);
            border-color: rgb(56, 61, 63);
        }
        .page-link:focus {
            outline-color: initial;
            box-shadow: rgba(0, 98, 204, 0.25) 0px 0px 0px 0.2rem;
        }
        .page-item.active .page-link {
            color: rgb(232, 230, 227);
            background-color: rgb(0, 98, 204);
            border-color: rgb(0, 86, 179);
        }
        .page-item.disabled .page-link {
            color: rgb(158, 150, 137);
            background-color: rgb(24, 26, 27);
            border-color: rgb(56, 61, 63);
        }
        a.badge:focus,
        a.badge:hover {
            text-decoration-color: initial;
        }
        .badge-primary {
            color: rgb(232, 230, 227);
            background-color: rgb(0, 98, 204);
        }
        a.badge-primary:focus,
        a.badge-primary:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(0, 78, 163);
        }
        a.badge-primary.focus,
        a.badge-primary:focus {
            outline-color: initial;
            box-shadow: rgba(0, 98, 204, 0.5) 0px 0px 0px 0.2rem;
        }
        .badge-secondary {
            color: rgb(232, 230, 227);
            background-color: rgb(88, 95, 99);
        }
        a.badge-secondary:focus,
        a.badge-secondary:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(69, 74, 77);
        }
        a.badge-secondary.focus,
        a.badge-secondary:focus {
            outline-color: initial;
            box-shadow: rgba(88, 95, 99, 0.5) 0px 0px 0px 0.2rem;
        }
        .badge-success {
            color: rgb(232, 230, 227);
            background-color: rgb(32, 134, 55);
        }
        a.badge-success:focus,
        a.badge-success:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(24, 101, 42);
        }
        a.badge-success.focus,
        a.badge-success:focus {
            outline-color: initial;
            box-shadow: rgba(32, 134, 55, 0.5) 0px 0px 0px 0.2rem;
        }
        .badge-info {
            color: rgb(232, 230, 227);
            background-color: rgb(18, 130, 147);
        }
        a.badge-info:focus,
        a.badge-info:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(14, 98, 111);
        }
        a.badge-info.focus,
        a.badge-info:focus {
            outline-color: initial;
            box-shadow: rgba(18, 130, 147, 0.5) 0px 0px 0px 0.2rem;
        }
        .badge-warning {
            color: rgb(209, 205, 199);
            background-color: rgb(150, 112, 0);
        }
        a.badge-warning:focus,
        a.badge-warning:hover {
            color: rgb(209, 205, 199);
            background-color: rgb(169, 126, 0);
        }
        a.badge-warning.focus,
        a.badge-warning:focus {
            outline-color: initial;
            box-shadow: rgba(150, 112, 0, 0.5) 0px 0px 0px 0.2rem;
        }
        .badge-danger {
            color: rgb(232, 230, 227);
            background-color: rgb(165, 29, 42);
        }
        a.badge-danger:focus,
        a.badge-danger:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(151, 26, 38);
        }
        a.badge-danger.focus,
        a.badge-danger:focus {
            outline-color: initial;
            box-shadow: rgba(165, 29, 42, 0.5) 0px 0px 0px 0.2rem;
        }
        .badge-light {
            color: rgb(209, 205, 199);
            background-color: rgb(27, 30, 31);
        }
        a.badge-light:focus,
        a.badge-light:hover {
            color: rgb(209, 205, 199);
            background-color: rgb(42, 45, 47);
        }
        a.badge-light.focus,
        a.badge-light:focus {
            outline-color: initial;
            box-shadow: rgba(27, 30, 31, 0.5) 0px 0px 0px 0.2rem;
        }
        .badge-dark {
            color: rgb(232, 230, 227);
            background-color: rgb(44, 47, 49);
        }
        a.badge-dark:focus,
        a.badge-dark:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(24, 27, 28);
        }
        a.badge-dark.focus,
        a.badge-dark:focus {
            outline-color: initial;
            box-shadow: rgba(44, 47, 49, 0.5) 0px 0px 0px 0.2rem;
        }
        .jumbotron {
            background-color: rgb(35, 38, 39);
        }
        .alert {
            border-color: transparent;
        }
        .alert-heading {
            color: inherit;
        }
        .alert-dismissible .close {
            color: inherit;
        }
        .alert-primary {
            color: rgb(124, 195, 255);
            background-color: rgb(38, 42, 43);
            border-color: rgb(0, 59, 123);
        }
        .alert-primary hr {
            border-top-color: rgb(0, 63, 131);
        }
        .alert-primary .alert-link {
            color: rgb(206, 202, 195);
        }
        .alert-secondary {
            color: rgb(194, 188, 180);
            background-color: rgb(40, 43, 44);
            border-color: rgb(59, 64, 66);
        }
        .alert-secondary hr {
            border-top-color: rgb(63, 68, 70);
        }
        .alert-secondary .alert-link {
            color: rgb(210, 206, 200);
        }
        .alert-success {
            color: rgb(153, 230, 171);
            background-color: rgb(26, 62, 41);
            border-color: rgb(37, 90, 50);
        }
        .alert-success hr {
            border-top-color: rgb(39, 96, 52);
        }
        .alert-success .alert-link {
            color: rgb(214, 210, 205);
        }
        .alert-info {
            color: rgb(142, 227, 241);
            background-color: rgb(20, 59, 67);
            border-color: rgb(30, 89, 97);
        }
        .alert-info hr {
            border-top-color: rgb(32, 93, 103);
        }
        .alert-info .alert-link {
            color: rgb(214, 210, 205);
        }
        .alert-warning {
            color: rgb(251, 215, 112);
            background-color: rgb(61, 46, 0);
            border-color: rgb(123, 92, 0);
        }
        .alert-warning hr {
            border-top-color: rgb(130, 98, 0);
        }
        .alert-warning .alert-link {
            color: rgb(205, 200, 194);
        }
        .alert-danger {
            color: rgb(225, 134, 143);
            background-color: rgb(67, 12, 17);
            border-color: rgb(104, 18, 27);
        }
        .alert-danger hr {
            border-top-color: rgb(110, 20, 29);
        }
        .alert-danger .alert-link {
            color: rgb(203, 199, 192);
        }
        .alert-light {
            color: rgb(153, 144, 131);
            background-color: rgb(25, 27, 28);
            border-color: rgb(34, 34, 69);
        }
        .alert-light hr {
            border-top-color: rgb(35, 35, 75);
        }
        .alert-light .alert-link {
            color: rgb(166, 159, 147);
        }
        .alert-dark {
            color: rgb(213, 209, 204);
            background-color: rgb(46, 50, 52);
            border-color: rgb(64, 69, 71);
        }
        .alert-dark hr {
            border-top-color: rgb(67, 73, 75);
        }
        .alert-dark .alert-link {
            color: rgb(229, 227, 224);
        }
        .progress {
            background-color: rgb(35, 38, 39);
        }
        .progress-bar {
            color: rgb(232, 230, 227);
            background-color: rgb(0, 98, 204);
        }
        .progress-bar-striped {
            background-image: linear-gradient(45deg,
            rgba(24, 26, 27, 0.15) 25%,
            rgba(0, 0, 0, 0) 25%,
            rgba(0, 0, 0, 0) 50%,
            rgba(24, 26, 27, 0.15) 50%,
            rgba(24, 26, 27, 0.15) 75%,
            rgba(0, 0, 0, 0) 75%,
            rgba(0, 0, 0, 0));
        }
        .list-group-item-action {
            color: rgb(181, 175, 166);
        }
        .list-group-item-action:focus,
        .list-group-item-action:hover {
            color: rgb(181, 175, 166);
            text-decoration-color: initial;
            background-color: rgb(27, 30, 31);
        }
        .list-group-item-action:active {
            color: rgb(209, 205, 199);
            background-color: rgb(35, 38, 39);
        }
        .list-group-item {
            background-color: rgb(24, 26, 27);
            border-color: rgba(140, 130, 115, 0.13);
        }
        .list-group-item.disabled,
        .list-group-item:disabled {
            color: rgb(158, 150, 137);
            background-color: rgb(24, 26, 27);
        }
        .list-group-item.active {
            color: rgb(232, 230, 227);
            background-color: rgb(0, 98, 204);
            border-color: rgb(0, 86, 179);
        }
        .list-group-flush .list-group-item {
            border-right-color: initial;
            border-left-color: initial;
        }
        .list-group-flush:first-child .list-group-item:first-child {
            border-top-color: initial;
        }
        .list-group-flush:last-child .list-group-item:last-child {
            border-bottom-color: initial;
        }
        .list-group-item-primary {
            color: rgb(124, 195, 255);
            background-color: rgb(44, 48, 50);
        }
        .list-group-item-primary.list-group-item-action:focus,
        .list-group-item-primary.list-group-item-action:hover {
            color: rgb(124, 195, 255);
            background-color: rgb(51, 55, 57);
        }
        .list-group-item-primary.list-group-item-action.active {
            color: rgb(232, 230, 227);
            background-color: rgb(0, 51, 106);
            border-color: rgb(0, 104, 215);
        }
        .list-group-item-secondary {
            color: rgb(194, 188, 180);
            background-color: rgb(46, 50, 51);
        }
        .list-group-item-secondary.list-group-item-action:focus,
        .list-group-item-secondary.list-group-item-action:hover {
            color: rgb(194, 188, 180);
            background-color: rgb(53, 58, 60);
        }
        .list-group-item-secondary.list-group-item-action.active {
            color: rgb(232, 230, 227);
            background-color: rgb(46, 49, 51);
            border-color: rgb(120, 111, 99);
        }
        .list-group-item-success {
            color: rgb(153, 230, 171);
            background-color: rgb(30, 72, 48);
        }
        .list-group-item-success.list-group-item-action:focus,
        .list-group-item-success.list-group-item-action:hover {
            color: rgb(153, 230, 171);
            background-color: rgb(34, 83, 54);
        }
        .list-group-item-success.list-group-item-action.active {
            color: rgb(232, 230, 227);
            background-color: rgb(17, 70, 29);
            border-color: rgb(43, 179, 74);
        }
        .list-group-item-info {
            color: rgb(142, 227, 241);
            background-color: rgb(24, 71, 78);
        }
        .list-group-item-info.list-group-item-action:focus,
        .list-group-item-info.list-group-item-action:hover {
            color: rgb(142, 227, 241);
            background-color: rgb(28, 81, 89);
        }
        .list-group-item-info.list-group-item-action.active {
            color: rgb(232, 230, 227);
            background-color: rgb(10, 67, 77);
            border-color: rgb(25, 173, 198);
        }
        .list-group-item-warning {
            color: rgb(251, 215, 112);
            background-color: rgb(69, 52, 0);
        }
        .list-group-item-warning.list-group-item-action:focus,
        .list-group-item-warning.list-group-item-action:hover {
            color: rgb(251, 215, 112);
            background-color: rgb(81, 61, 0);
        }
        .list-group-item-warning.list-group-item-action.active {
            color: rgb(232, 230, 227);
            background-color: rgb(106, 80, 3);
            border-color: rgb(208, 156, 6);
        }
        .list-group-item-danger {
            color: rgb(225, 134, 143);
            background-color: rgb(78, 14, 20);
        }
        .list-group-item-danger.list-group-item-action:focus,
        .list-group-item-danger.list-group-item-action:hover {
            color: rgb(225, 134, 143);
            background-color: rgb(91, 16, 24);
        }
        .list-group-item-danger.list-group-item-action.active {
            color: rgb(232, 230, 227);
            background-color: rgb(91, 22, 29);
            border-color: rgb(171, 42, 54);
        }
        .list-group-item-light {
            color: rgb(153, 144, 131);
            background-color: rgb(25, 27, 28);
        }
        .list-group-item-light.list-group-item-action:focus,
        .list-group-item-light.list-group-item-action:hover {
            color: rgb(153, 144, 131);
            background-color: rgb(32, 35, 36);
        }
        .list-group-item-light.list-group-item-action.active {
            color: rgb(232, 230, 227);
            background-color: rgb(95, 103, 107);
            border-color: rgb(83, 90, 94);
        }
        .list-group-item-dark {
            color: rgb(213, 209, 204);
            background-color: rgb(55, 60, 62);
        }
        .list-group-item-dark.list-group-item-action:focus,
        .list-group-item-dark.list-group-item-action:hover {
            color: rgb(213, 209, 204);
            background-color: rgb(62, 67, 70);
        }
        .list-group-item-dark.list-group-item-action.active {
            color: rgb(232, 230, 227);
            background-color: rgb(23, 24, 25);
            border-color: rgb(130, 121, 107);
        }
        .close {
            color: rgb(232, 230, 227);
            text-shadow: rgb(24, 26, 27) 0px 1px 0px;
        }
        .close:hover {
            color: rgb(232, 230, 227);
            text-decoration-color: initial;
        }
        button.close {
            background-color: transparent;
            border-color: initial;
        }
        .toast {
            background-color: rgba(24, 26, 27, 0.85);
            border-color: rgba(140, 130, 115, 0.1);
            box-shadow: rgba(0, 0, 0, 0.1) 0px 0.25rem 0.75rem;
        }
        .toast-header {
            color: rgb(158, 150, 137);
            background-color: rgba(24, 26, 27, 0.85);
            border-bottom-color: rgba(140, 130, 115, 0.05);
        }
        .modal {
            outline-color: initial;
        }
        .modal-content {
            background-color: rgb(24, 26, 27);
            border-color: rgba(140, 130, 115, 0.2);
            outline-color: initial;
        }
        .modal-backdrop {
            background-color: rgb(0, 0, 0);
        }
        .modal-header {
            border-bottom-color: rgb(56, 61, 63);
        }
        .modal-footer {
            border-top-color: rgb(56, 61, 63);
        }
        .tooltip {
            text-decoration-color: initial; text-shadow: none;
        }
        .tooltip .arrow::before {
            border-color: transparent;
        }
        .bs-tooltip-auto[x-placement^="top"] .arrow::before,
        .bs-tooltip-top .arrow::before {
            border-top-color: rgb(140, 130, 115);
        }
        .bs-tooltip-auto[x-placement^="right"] .arrow::before,
        .bs-tooltip-right .arrow::before {
            border-right-color: rgb(140, 130, 115);
        }
        .bs-tooltip-auto[x-placement^="bottom"] .arrow::before,
        .bs-tooltip-bottom .arrow::before {
            border-bottom-color: rgb(140, 130, 115);
        }
        .bs-tooltip-auto[x-placement^="left"] .arrow::before,
        .bs-tooltip-left .arrow::before {
            border-left-color: rgb(140, 130, 115);
        }
        .tooltip-inner {
            color: rgb(232, 230, 227);
            background-color: rgb(0, 0, 0);
        }
        .popover {
            text-decoration-color: initial;
            text-shadow: none;
            background-color: rgb(24, 26, 27);
            border-color: rgba(140, 130, 115, 0.2);
        }
        .popover .arrow::after, .popover .arrow::before {
            border-color: transparent;
        }
        .bs-popover-auto[x-placement^="top"] > .arrow::before,
        .bs-popover-top > .arrow::before {
            border-top-color: rgba(140, 130, 115, 0.25);
        }
        .bs-popover-auto[x-placement^="top"] > .arrow::after,
        .bs-popover-top > .arrow::after {
            border-top-color: rgb(48, 52, 54);
        }
        .bs-popover-auto[x-placement^="right"] > .arrow::before,
        .bs-popover-right > .arrow::before {
            border-right-color: rgba(140, 130, 115, 0.25);
        }
        .bs-popover-auto[x-placement^="right"] > .arrow::after,
        .bs-popover-right > .arrow::after {
            border-right-color: rgb(48, 52, 54);
        }
        .bs-popover-auto[x-placement^="bottom"] > .arrow::before,
        .bs-popover-bottom > .arrow::before {
            border-bottom-color: rgba(140, 130, 115, 0.25);
        }
        .bs-popover-auto[x-placement^="bottom"] > .arrow::after,
        .bs-popover-bottom > .arrow::after {
            border-bottom-color: rgb(48, 52, 54);
        }
        .bs-popover-auto[x-placement^="bottom"] .popover-header::before,
        .bs-popover-bottom .popover-header::before {
            border-bottom-color: rgb(50, 54, 57);
        }
        .bs-popover-auto[x-placement^="left"] > .arrow::before,
        .bs-popover-left > .arrow::before {
            border-left-color: rgba(140, 130, 115, 0.25);
        }
        .bs-popover-auto[x-placement^="left"] > .arrow::after,
        .bs-popover-left > .arrow::after {
            border-left-color: rgb(48, 52, 54);
        }
        .popover-header {
            background-color: rgb(29, 31, 32);
            border-bottom-color: rgb(54, 58, 60);
        }
        .popover-body {
            color: rgb(209, 205, 199);
        }
        .carousel-control-next,
        .carousel-control-prev {
            color: rgb(232, 230, 227);
        }
        .carousel-control-next:focus,
        .carousel-control-next:hover,
        .carousel-control-prev:focus,
        .carousel-control-prev:hover {
            color: rgb(232, 230, 227);
            text-decoration-color: initial;
            outline-color: initial;
        }
        .carousel-control-next-icon,
        .carousel-control-prev-icon {
            background-image: initial;
            background-color: initial;
        }
        .carousel-control-prev-icon {
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyNmZmYnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNS0yLjUtMi41IDIuNS0yLjUtMS41LTEuNXonLz48L3N2Zz4=");
        }
        .carousel-control-next-icon {
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyNmZmYnIHZpZXdCb3g9JzAgMCA4IDgnPjxwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjUgMi41IDIuNS0yLjUgMi41IDEuNSAxLjUgNC00LTQtNHonLz48L3N2Zz4=");
        }
        .carousel-indicators {
            list-style-image: initial;
        }
        .carousel-indicators li {
            background-color: rgb(24, 26, 27);
            border-top-color: transparent;
            border-bottom-color: transparent;
        }
        .carousel-caption {
            color: rgb(232, 230, 227);
        }
        .spinner-border {
            border-color: currentcolor transparent currentcolor currentcolor;
        }
        .spinner-grow {
            background-color: currentcolor;
        }
        .bg-primary {
            background-color: rgb(0, 98, 204) !important;
        }
        a.bg-primary:focus,
        a.bg-primary:hover,
        button.bg-primary:focus,
        button.bg-primary:hover {
            background-color: rgb(0, 78, 163) !important;
        }
        .bg-secondary {
            background-color: rgb(88, 95, 99) !important;
        }
        a.bg-secondary:focus,
        a.bg-secondary:hover,
        button.bg-secondary:focus,
        button.bg-secondary:hover {
            background-color: rgb(69, 74, 77) !important;
        }
        .bg-success {
            background-color: rgb(32, 134, 55) !important;
        }
        a.bg-success:focus,
        a.bg-success:hover,
        button.bg-success:focus,
        button.bg-success:hover {
            background-color: rgb(24, 101, 42) !important;
        }
        .bg-info {
            background-color: rgb(18, 130, 147) !important;
        }
        a.bg-info:focus,
        a.bg-info:hover,
        button.bg-info:focus,
        button.bg-info:hover {
            background-color: rgb(14, 98, 111) !important;
        }
        .bg-warning {
            background-color: rgb(150, 112, 0) !important;
        }
        a.bg-warning:focus,
        a.bg-warning:hover,
        button.bg-warning:focus,
        button.bg-warning:hover {
            background-color: rgb(169, 126, 0) !important;
        }
        .bg-danger {
            background-color: rgb(165, 29, 42) !important;
        }
        a.bg-danger:focus,
        a.bg-danger:hover,
        button.bg-danger:focus,
        button.bg-danger:hover {
            background-color: rgb(151, 26, 38) !important;
        }
        .bg-light {
            background-color: rgb(27, 30, 31) !important;
        }
        a.bg-light:focus,
        a.bg-light:hover,
        button.bg-light:focus,
        button.bg-light:hover {
            background-color: rgb(42, 45, 47) !important;
        }
        .bg-dark {
            background-color: rgb(44, 47, 49) !important;
        }
        a.bg-dark:focus,
        a.bg-dark:hover,
        button.bg-dark:focus,
        button.bg-dark:hover {
            background-color: rgb(24, 27, 28) !important;
        }
        .bg-white {
            background-color: rgb(24, 26, 27) !important;
        }
        .bg-transparent {
            background-color: transparent !important;
        }
        .border {
            border-color: rgb(56, 61, 63) !important;
        }
        .border-top {
            border-top-color: rgb(56, 61, 63) !important;
        }
        .border-right {
            border-right-color: rgb(56, 61, 63) !important;
        }
        .border-bottom {
            border-bottom-color: rgb(56, 61, 63) !important;
        }
        .border-left {
            border-left-color: rgb(56, 61, 63) !important;
        }
        .border-0 {
            border-color: initial !important;
        }
        .border-top-0 {
            border-top-color: initial !important;
        }
        .border-right-0 {
            border-right-color: initial !important;
        }
        .border-bottom-0 {
            border-bottom-color: initial !important;
        }
        .border-left-0 {
            border-left-color: initial !important;
        }
        .border-primary {
            border-color: rgb(0, 86, 179) !important;
        }
        .border-secondary {
            border-color: rgb(102, 94, 83) !important;
        }
        .border-success {
            border-color: rgb(37, 156, 64) !important;
        }
        .border-info {
            border-color: rgb(21, 151, 171) !important;
        }
        .border-warning {
            border-color: rgb(176, 132, 0) !important;
        }
        .border-danger {
            border-color: rgb(148, 26, 37) !important;
        }
        .border-light {
            border-color: rgb(50, 54, 56) !important;
        }
        .border-dark {
            border-color: rgb(121, 112, 99) !important;
        }
        .border-white {
            border-color: rgb(48, 52, 54) !important;
        }
        .embed-responsive .embed-responsive-item,
        .embed-responsive embed,
        .embed-responsive iframe,
        .embed-responsive object,
        .embed-responsive video {
            border-color: initial;
        }
        .sr-only {
            border-color: initial;
        }
        .shadow-sm {
            box-shadow: rgba(0, 0, 0, 0.07) 0px 0.125rem 0.25rem !important;
        }
        .shadow {
            box-shadow: rgba(0, 0, 0, 0.15) 0px 0.5rem 1rem !important;
        }
        .shadow-lg {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 1rem 3rem !important;
        }
        .shadow-none {
            box-shadow: none !important;
        }
        .stretched-link::after {
            background-color: rgba(0, 0, 0, 0);
        }
        .text-white {
            color: rgb(232, 230, 227) !important;
        }
        .text-primary {
            color: rgb(51, 162, 255) !important;
        }
        a.text-primary:focus,
        a.text-primary:hover {
            color: rgb(97, 183, 255) !important;
        }
        .text-secondary {
            color: rgb(158, 150, 137) !important;
        }
        a.text-secondary:focus,
        a.text-secondary:hover {
            color: rgb(182, 176, 167) !important;
        }
        .text-success {
            color: rgb(97, 217, 124) !important;
        }
        a.text-success:focus,
        a.text-success:hover {
            color: rgb(140, 228, 161) !important;
        }
        .text-info {
            color: rgb(81, 212, 233) !important;
        }
        a.text-info:focus,
        a.text-info:hover {
            color: rgb(129, 223, 239) !important;
        }
        .text-warning {
            color: rgb(255, 199, 30) !important;
        }
        a.text-warning:focus,
        a.text-warning:hover {
            color: rgb(255, 209, 74) !important;
        }
        .text-danger {
            color: rgb(223, 70, 85) !important;
        }
        a.text-danger:focus,
        a.text-danger:hover {
            color: rgb(227, 95, 107) !important;
        }
        .text-light {
            color: rgb(228, 226, 222) !important;
        }
        a.text-light:focus,
        a.text-light:hover {
            color: rgb(204, 199, 193) !important;
        }
        .text-dark {
            color: rgb(195, 190, 182) !important;
        }
        a.text-dark:focus,
        a.text-dark:hover {
            color: rgb(219, 216, 212) !important;
        }
        .text-body {
            color: rgb(209, 205, 199) !important;
        }
        .text-muted {
            color: rgb(158, 150, 137) !important;
        }
        .text-black-50 {
            color: rgba(232, 230, 227, 0.5) !important;
        }
        .text-white-50 {
            color: rgba(232, 230, 227, 0.5) !important;
        }
        .text-hide {
            color: transparent;
            text-shadow: none;
            background-color: transparent;
            border-color: initial;
        }
        .text-decoration-none {
            text-decoration-color: initial !important;
        }
        .text-reset {
            color: inherit !important;
        }
        .pswp__container,
        .pswp__img,
        .waves-effect {
            -webkit-tap-highlight-color: transparent;
        }
        .mdb-color.lighten-5 {
            background-color: rgb(45, 49, 51) !important;
        }
        .mdb-color.lighten-4 {
            background-color: rgb(49, 58, 78) !important;
        }
        .mdb-color.lighten-3 {
            background-color: rgb(61, 73, 97) !important;
        }
        .mdb-color.lighten-2 {
            background-color: rgb(72, 86, 116) !important;
        }
        .mdb-color.lighten-1 {
            background-color: rgb(71, 84, 113) !important;
        }
        .mdb-color {
            background-color: rgb(55, 66, 88) !important;
        }
        .mdb-color-text {
            color: rgb(175, 169, 158) !important;
        }
        .rgba-mdb-color-slight,
        .rgba-mdb-color-slight::after {
            background-color: rgba(55, 66, 88, 0.1);
        }
        .rgba-mdb-color-light,
        .rgba-mdb-color-light::after {
            background-color: rgba(55, 66, 88, 0.3);
        }
        .rgba-mdb-color-strong,
        .rgba-mdb-color-strong::after {
            background-color: rgba(55, 66, 88, 0.7);
        }
        .mdb-color.darken-1 {
            background-color: rgb(47, 56, 75) !important;
        }
        .mdb-color.darken-2 {
            background-color: rgb(37, 46, 65) !important;
        }
        .mdb-color.darken-3 {
            background-color: rgb(22, 34, 58) !important;
        }
        .mdb-color.darken-4 {
            background-color: rgb(22, 28, 39) !important;
        }
        .red.lighten-5 {
            background-color: rgb(63, 0, 9) !important;
        }
        .red.lighten-4 {
            background-color: rgb(81, 0, 8) !important;
        }
        .red.lighten-3 {
            background-color: rgb(105, 17, 17) !important;
        }
        .red.lighten-2 {
            background-color: rgb(127, 24, 24) !important;
        }
        .red.lighten-1 {
            background-color: rgb(152, 16, 14) !important;
        }
        .red {
            background-color: rgb(169, 20, 9) !important;
        }
        .red-text {
            color: rgb(245, 78, 66) !important;
        }
        .rgba-red-slight,
        .rgba-red-slight::after {
            background-color: rgba(169, 20, 9, 0.1);
        }
        .rgba-red-light,
        .rgba-red-light::after {
            background-color: rgba(169, 20, 9, 0.3);
        }
        .rgba-red-strong,
        .rgba-red-strong::after {
            background-color: rgba(169, 20, 9, 0.7);
        }
        .red.darken-1 {
            background-color: rgb(166, 25, 21) !important;
        }
        .red.darken-2 {
            background-color: rgb(167, 35, 35) !important;
        }
        .red.darken-3 {
            background-color: rgb(158, 32, 32) !important;
        }
        .red.darken-4 {
            background-color: rgb(146, 22, 22) !important;
        }
        .red.accent-1 {
            background-color: rgb(127, 10, 0) !important;
        }
        .red.accent-2 {
            background-color: rgb(155, 0, 0) !important;
        }
        .red.accent-3 {
            background-color: rgb(190, 0, 37) !important;
        }
        .red.accent-4 {
            background-color: rgb(170, 0, 0) !important;
        }
        .pink.lighten-5 {
            background-color: rgb(62, 7, 25) !important;
        }
        .pink.lighten-4 {
            background-color: rgb(87, 9, 36) !important;
        }
        .pink.lighten-3 {
            background-color: rgb(114, 11, 46) !important;
        }
        .pink.lighten-2 {
            background-color: rgb(141, 13, 56) !important;
        }
        .pink.lighten-1 {
            background-color: rgb(161, 16, 65) !important;
        }
        .pink {
            background-color: rgb(181, 18, 73) !important;
        }
        .pink-text {
            color: rgb(235, 51, 114) !important;
        }
        .rgba-pink-slight,
        .rgba-pink-slight::after {
            background-color: rgba(181, 18, 73, 0.1);
        }
        .rgba-pink-light,
        .rgba-pink-light::after {
            background-color: rgba(181, 18, 73, 0.3);
        }
        .rgba-pink-strong,
        .rgba-pink-strong::after {
            background-color: rgba(181, 18, 73, 0.7);
        }
        .pink.darken-1 {
            background-color: rgb(173, 22, 77) !important;
        }
        .pink.darken-2 {
            background-color: rgb(155, 19, 73) !important;
        }
        .pink.darken-3 {
            background-color: rgb(138, 16, 70) !important;
        }
        .pink.darken-4 {
            background-color: rgb(109, 11, 63) !important;
        }
        .pink.accent-1 {
            background-color: rgb(127, 0, 43) !important;
        }
        .pink.accent-2 {
            background-color: rgb(166, 0, 56) !important;
        }
        .pink.accent-3 {
            background-color: rgb(196, 0, 70) !important;
        }
        .pink.accent-4 {
            background-color: rgb(158, 14, 78) !important;
        }
        .purple.lighten-5 {
            background-color: rgb(48, 20, 52) !important;
        }
        .purple.lighten-4 {
            background-color: rgb(69, 28, 76) !important;
        }
        .purple.lighten-3 {
            background-color: rgb(93, 37, 102) !important;
        }
        .purple.lighten-2 {
            background-color: rgb(116, 47, 128) !important;
        }
        .purple.lighten-1 {
            background-color: rgb(134, 54, 148) !important;
        }
        .purple {
            background-color: rgb(125, 31, 141) !important;
        }
        .purple-text {
            color: rgb(200, 90, 218) !important;
        }
        .rgba-purple-slight,
        .rgba-purple-slight::after {
            background-color: rgba(125, 31, 141, 0.1);
        }
        .rgba-purple-light,
        .rgba-purple-light::after {
            background-color: rgba(125, 31, 141, 0.3);
        }
        .rgba-purple-strong,
        .rgba-purple-strong::after {
            background-color: rgba(125, 31, 141, 0.7);
        }
        .purple.darken-1 {
            background-color: rgb(114, 29, 136) !important;
        }
        .purple.darken-2 {
            background-color: rgb(98, 25, 130) !important;
        }
        .purple.darken-3 {
            background-color: rgb(85, 22, 123) !important;
        }
        .purple.darken-4 {
            background-color: rgb(59, 16, 112) !important;
        }
        .purple.accent-1 {
            background-color: rgb(108, 3, 126) !important;
        }
        .purple.accent-2 {
            background-color: rgb(141, 3, 165) !important;
        }
        .purple.accent-3 {
            background-color: rgb(170, 0, 199) !important;
        }
        .purple.accent-4 {
            background-color: rgb(136, 0, 204) !important;
        }
        .deep-purple.lighten-5 {
            background-color: rgb(33, 36, 37) !important;
        }
        .deep-purple.lighten-4 {
            background-color: rgb(47, 51, 53) !important;
        }
        .deep-purple.lighten-3 {
            background-color: rgb(57, 35, 96) !important;
        }
        .deep-purple.lighten-2 {
            background-color: rgb(71, 44, 120) !important;
        }
        .deep-purple.lighten-1 {
            background-color: rgb(82, 50, 138) !important;
        }
        .deep-purple {
            background-color: rgb(82, 46, 146) !important;
        }
        .deep-purple-text {
            color: rgb(129, 88, 202) !important;
        }
        .rgba-deep-purple-slight,
        .rgba-deep-purple-slight::after {
            background-color: rgba(82, 46, 146, 0.1);
        }
        .rgba-deep-purple-light,
        .rgba-deep-purple-light::after {
            background-color: rgba(82, 46, 146, 0.3);
        }
        .rgba-deep-purple-strong,
        .rgba-deep-purple-strong::after {
            background-color: rgba(82, 46, 146, 0.7);
        }
        .deep-purple.darken-1 {
            background-color: rgb(75, 42, 142) !important;
        }
        .deep-purple.darken-2 {
            background-color: rgb(65, 36, 134) !important;
        }
        .deep-purple.darken-3 {
            background-color: rgb(55, 31, 128) !important;
        }
        .deep-purple.darken-4 {
            background-color: rgb(39, 22, 117) !important;
        }
        .deep-purple.accent-1 {
            background-color: rgb(44, 0, 122) !important;
        }
        .deep-purple.accent-2 {
            background-color: rgb(42, 0, 158) !important;
        }
        .deep-purple.accent-3 {
            background-color: rgb(58, 0, 185) !important;
        }
        .deep-purple.accent-4 {
            background-color: rgb(78, 0, 187) !important;
        }
        .indigo.lighten-5 {
            background-color: rgb(33, 36, 37) !important;
        }
        .indigo.lighten-4 {
            background-color: rgb(47, 50, 52) !important;
        }
        .indigo.lighten-3 {
            background-color: rgb(36, 45, 94) !important;
        }
        .indigo.lighten-2 {
            background-color: rgb(45, 57, 117) !important;
        }
        .indigo.lighten-1 {
            background-color: rgb(52, 64, 135) !important;
        }
        .indigo {
            background-color: rgb(50, 65, 145) !important;
        }
        .indigo-text {
            color: rgb(109, 149, 204) !important;
        }
        .rgba-indigo-slight,
        .rgba-indigo-slight::after {
            background-color: rgba(50, 65, 145, 0.1);
        }
        .rgba-indigo-light,
        .rgba-indigo-light::after {
            background-color: rgba(50, 65, 145, 0.3);
        }
        .rgba-indigo-strong,
        .rgba-indigo-strong::after {
            background-color: rgba(50, 65, 145, 0.7);
        }
        .indigo.darken-1 {
            background-color: rgb(46, 58, 137) !important;
        }
        .indigo.darken-2 {
            background-color: rgb(38, 50, 127) !important;
        }
        .indigo.darken-3 {
            background-color: rgb(32, 42, 118) !important;
        }
        .indigo.darken-4 {
            background-color: rgb(21, 28, 101) !important;
        }
        .indigo.accent-1 {
            background-color: rgb(0, 19, 120) !important;
        }
        .indigo.accent-2 {
            background-color: rgb(1, 24, 154) !important;
        }
        .indigo.accent-3 {
            background-color: rgb(1, 26, 167) !important;
        }
        .indigo.accent-4 {
            background-color: rgb(1, 27, 175) !important;
        }
        .blue.lighten-5 {
            background-color: rgb(32, 35, 37) !important;
        }
        .blue.lighten-4 {
            background-color: rgb(44, 48, 50) !important;
        }
        .blue.lighten-3 {
            background-color: rgb(6, 66, 115) !important;
        }
        .blue.lighten-2 {
            background-color: rgb(8, 82, 141) !important;
        }
        .blue.lighten-1 {
            background-color: rgb(9, 93, 162) !important;
        }
        .blue {
            background-color: rgb(10, 106, 182) !important;
        }
        .blue-text {
            color: rgb(51, 162, 244) !important;
        }
        .rgba-blue-slight,
        .rgba-blue-slight::after {
            background-color: rgba(10, 106, 182, 0.1);
        }
        .rgba-blue-light,
        .rgba-blue-light::after {
            background-color: rgba(10, 106, 182, 0.3);
        }
        .rgba-blue-strong,
        .rgba-blue-strong::after {
            background-color: rgba(10, 106, 182, 0.7);
        }
        .blue.darken-1 {
            background-color: rgb(21, 106, 181) !important;
        }
        .blue.darken-2 {
            background-color: rgb(20, 94, 168) !important;
        }
        .blue.darken-3 {
            background-color: rgb(17, 81, 154) !important;
        }
        .blue.darken-4 {
            background-color: rgb(10, 57, 129) !important;
        }
        .blue.accent-1 {
            background-color: rgb(0, 47, 126) !important;
        }
        .blue.accent-2 {
            background-color: rgb(0, 61, 163) !important;
        }
        .blue.accent-3 {
            background-color: rgb(0, 67, 179) !important;
        }
        .blue.accent-4 {
            background-color: rgb(0, 48, 179) !important;
        }
        .light-blue.lighten-5 {
            background-color: rgb(2, 47, 67) !important;
        }
        .light-blue.lighten-4 {
            background-color: rgb(4, 66, 95) !important;
        }
        .light-blue.lighten-3 {
            background-color: rgb(5, 87, 125) !important;
        }
        .light-blue.lighten-2 {
            background-color: rgb(7, 109, 154) !important;
        }
        .light-blue.lighten-1 {
            background-color: rgb(7, 124, 177) !important;
        }
        .light-blue {
            background-color: rgb(2, 135, 195) !important;
        }
        .light-blue-text {
            color: rgb(34, 184, 252) !important;
        }
        .rgba-light-blue-slight,
        .rgba-light-blue-slight::after {
            background-color: rgba(2, 135, 195, 0.1);
        }
        .rgba-light-blue-light,
        .rgba-light-blue-light::after {
            background-color: rgba(2, 135, 195, 0.3);
        }
        .rgba-light-blue-strong,
        .rgba-light-blue-strong::after {
            background-color: rgba(2, 135, 195, 0.7);
        }
        .light-blue.darken-1 {
            background-color: rgb(2, 124, 183) !important;
        }
        .light-blue.darken-2 {
            background-color: rgb(2, 109, 167) !important;
        }
        .light-blue.darken-3 {
            background-color: rgb(2, 95, 151) !important;
        }
        .light-blue.darken-4 {
            background-color: rgb(1, 70, 124) !important;
        }
        .light-blue.accent-1 {
            background-color: rgb(0, 88, 127) !important;
        }
        .light-blue.accent-2 {
            background-color: rgb(0, 114, 166) !important;
        }
        .light-blue.accent-3 {
            background-color: rgb(0, 141, 204) !important;
        }
        .light-blue.accent-4 {
            background-color: rgb(0, 116, 187) !important;
        }
        .cyan.lighten-5 {
            background-color: rgb(10, 56, 63) !important;
        }
        .cyan.lighten-4 {
            background-color: rgb(15, 82, 90) !important;
        }
        .cyan.lighten-3 {
            background-color: rgb(20, 109, 120) !important;
        }
        .cyan.lighten-2 {
            background-color: rgb(25, 136, 150) !important;
        }
        .cyan.lighten-1 {
            background-color: rgb(30, 158, 174) !important;
        }
        .cyan {
            background-color: rgb(0, 150, 170) !important;
        }
        .cyan-text {
            color: rgb(56, 232, 255) !important;
        }
        .rgba-cyan-slight,
        .rgba-cyan-slight::after {
            background-color: rgba(0, 150, 170, 0.1);
        }
        .rgba-cyan-light,
        .rgba-cyan-light::after {
            background-color: rgba(0, 150, 170, 0.3);
        }
        .rgba-cyan-strong,
        .rgba-cyan-strong::after {
            background-color: rgba(0, 150, 170, 0.7);
        }
        .cyan.darken-1 {
            background-color: rgb(0, 138, 154) !important;
        }
        .cyan.darken-2 {
            background-color: rgb(0, 121, 134) !important;
        }
        .cyan.darken-3 {
            background-color: rgb(0, 105, 114) !important;
        }
        .cyan.darken-4 {
            background-color: rgb(0, 77, 80) !important;
        }
        .cyan.accent-1 {
            background-color: rgb(0, 125, 125) !important;
        }
        .cyan.accent-2 {
            background-color: rgb(0, 190, 190) !important;
        }
        .cyan.accent-3 {
            background-color: rgb(0, 183, 204) !important;
        }
        .cyan.accent-4 {
            background-color: rgb(0, 147, 170) !important;
        }
        .teal.lighten-5 {
            background-color: rgb(23, 55, 53) !important;
        }
        .teal.lighten-4 {
            background-color: rgb(34, 82, 79) !important;
        }
        .teal.lighten-3 {
            background-color: rgb(46, 112, 108) !important;
        }
        .teal.lighten-2 {
            background-color: rgb(59, 143, 137) !important;
        }
        .teal.lighten-1 {
            background-color: rgb(30, 133, 123) !important;
        }
        .teal {
            background-color: rgb(0, 120, 109) !important;
        }
        .teal-text {
            color: rgb(99, 255, 240) !important;
        }
        .rgba-teal-slight,
        .rgba-teal-slight::after {
            background-color: rgba(0, 120, 109, 0.1);
        }
        .rgba-teal-light,
        .rgba-teal-light::after {
            background-color: rgba(0, 120, 109, 0.3);
        }
        .rgba-teal-strong,
        .rgba-teal-strong::after {
            background-color: rgba(0, 120, 109, 0.7);
        }
        .teal.darken-1 {
            background-color: rgb(0, 110, 98) !important;
        }
        .teal.darken-2 {
            background-color: rgb(0, 97, 86) !important;
        }
        .teal.darken-3 {
            background-color: rgb(0, 84, 74) !important;
        }
        .teal.darken-4 {
            background-color: rgb(0, 62, 51) !important;
        }
        .teal.accent-1 {
            background-color: rgb(0, 104, 86) !important;
        }
        .teal.accent-2 {
            background-color: rgb(0, 144, 118) !important;
        }
        .teal.accent-3 {
            background-color: rgb(18, 182, 151) !important;
        }
        .teal.accent-4 {
            background-color: rgb(0, 153, 132) !important;
        }
        .green.lighten-5 {
            background-color: rgb(21, 49, 30) !important;
        }
        .green.lighten-4 {
            background-color: rgb(31, 68, 41) !important;
        }
        .green.lighten-3 {
            background-color: rgb(41, 89, 54) !important;
        }
        .green.lighten-2 {
            background-color: rgb(49, 111, 67) !important;
        }
        .green.lighten-1 {
            background-color: rgb(56, 127, 77) !important;
        }
        .green {
            background-color: rgb(61, 140, 64) !important;
        }
        .green-text {
            color: rgb(97, 186, 101) !important;
        }
        .rgba-green-slight,
        .rgba-green-slight::after {
            background-color: rgba(61, 140, 64, 0.1);
        }
        .rgba-green-light,
        .rgba-green-light::after {
            background-color: rgba(61, 140, 64, 0.3);
        }
        .rgba-green-strong,
        .rgba-green-strong::after {
            background-color: rgba(61, 140, 64, 0.7);
        }
        .green.darken-1 {
            background-color: rgb(54, 128, 57) !important;
        }
        .green.darken-2 {
            background-color: rgb(45, 114, 48) !important;
        }
        .green.darken-3 {
            background-color: rgb(37, 100, 40) !important;
        }
        .green.darken-4 {
            background-color: rgb(22, 75, 26) !important;
        }
        .green.accent-1 {
            background-color: rgb(11, 87, 46) !important;
        }
        .green.accent-2 {
            background-color: rgb(14, 136, 91) !important;
        }
        .green.accent-3 {
            background-color: rgb(0, 184, 94) !important;
        }
        .green.accent-4 {
            background-color: rgb(0, 160, 66) !important;
        }
        .light-green.lighten-5 {
            background-color: rgb(40, 52, 17) !important;
        }
        .light-green.lighten-4 {
            background-color: rgb(55, 71, 23) !important;
        }
        .light-green.lighten-3 {
            background-color: rgb(71, 92, 31) !important;
        }
        .light-green.lighten-2 {
            background-color: rgb(87, 114, 38) !important;
        }
        .light-green.lighten-1 {
            background-color: rgb(100, 131, 43) !important;
        }
        .light-green {
            background-color: rgb(113, 147, 49) !important;
        }
        .light-green-text {
            color: rgb(149, 200, 90) !important;
        }
        .rgba-light-green-slight,
        .rgba-light-green-slight::after {
            background-color: rgba(113, 147, 49, 0.1);
        }
        .rgba-light-green-light,
        .rgba-light-green-light::after {
            background-color: rgba(113, 147, 49, 0.3);
        }
        .rgba-light-green-strong,
        .rgba-light-green-strong::after {
            background-color: rgba(113, 147, 49, 0.7);
        }
        .light-green.darken-1 {
            background-color: rgb(99, 143, 53) !important;
        }
        .light-green.darken-2 {
            background-color: rgb(83, 127, 45) !important;
        }
        .light-green.darken-3 {
            background-color: rgb(68, 111, 38) !important;
        }
        .light-green.darken-4 {
            background-color: rgb(41, 84, 24) !important;
        }
        .light-green.accent-1 {
            background-color: rgb(77, 118, 0) !important;
        }
        .light-green.accent-2 {
            background-color: rgb(98, 151, 0) !important;
        }
        .light-green.accent-3 {
            background-color: rgb(120, 202, 0) !important;
        }
        .light-green.accent-4 {
            background-color: rgb(80, 177, 18) !important;
        }
        .lime.lighten-5 {
            background-color: rgb(41, 44, 7) !important;
        }
        .lime.lighten-4 {
            background-color: rgb(56, 59, 11) !important;
        }
        .lime.lighten-3 {
            background-color: rgb(73, 77, 13) !important;
        }
        .lime.lighten-2 {
            background-color: rgb(89, 95, 16) !important;
        }
        .lime.lighten-1 {
            background-color: rgb(102, 108, 19) !important;
        }
        .lime {
            background-color: rgb(115, 122, 21) !important;
        }
        .lime-text {
            color: rgb(209, 223, 73) !important;
        }
        .rgba-lime-slight,
        .rgba-lime-slight::after {
            background-color: rgba(115, 122, 21, 0.1);
        }
        .rgba-lime-light,
        .rgba-lime-light::after {
            background-color: rgba(115, 122, 21, 0.3);
        }
        .rgba-lime-strong,
        .rgba-lime-strong::after {
            background-color: rgba(115, 122, 21, 0.7);
        }
        .lime.darken-1 {
            background-color: rgb(154, 162, 41) !important;
        }
        .lime.darken-2 {
            background-color: rgb(140, 144, 34) !important;
        }
        .lime.darken-3 {
            background-color: rgb(126, 126, 29) !important;
        }
        .lime.darken-4 {
            background-color: rgb(104, 95, 18) !important;
        }
        .lime.accent-1 {
            background-color: rgb(89, 95, 0) !important;
        }
        .lime.accent-2 {
            background-color: rgb(115, 124, 0) !important;
        }
        .lime.accent-3 {
            background-color: rgb(127, 153, 0) !important;
        }
        .lime.accent-4 {
            background-color: rgb(139, 187, 0) !important;
        }
        .yellow.lighten-5 {
            background-color: rgb(49, 45, 0) !important;
        }
        .yellow.lighten-4 {
            background-color: rgb(65, 58, 0) !important;
        }
        .yellow.lighten-3 {
            background-color: rgb(82, 74, 0) !important;
        }
        .yellow.lighten-2 {
            background-color: rgb(100, 90, 0) !important;
        }
        .yellow.lighten-1 {
            background-color: rgb(113, 102, 0) !important;
        }
        .yellow {
            background-color: rgb(126, 114, 0) !important;
        }
        .yellow-text {
            color: rgb(255, 236, 67) !important;
        }
        .rgba-yellow-slight,
        .rgba-yellow-slight::after {
            background-color: rgba(126, 114, 0, 0.1);
        }
        .rgba-yellow-light,
        .rgba-yellow-light::after {
            background-color: rgba(126, 114, 0, 0.3);
        }
        .rgba-yellow-strong,
        .rgba-yellow-strong::after {
            background-color: rgba(126, 114, 0, 0.7);
        }
        .yellow.darken-1 {
            background-color: rgb(129, 105, 1) !important;
        }
        .yellow.darken-2 {
            background-color: rgb(132, 95, 3) !important;
        }
        .yellow.darken-3 {
            background-color: rgb(180, 113, 5) !important;
        }
        .yellow.darken-4 {
            background-color: rgb(188, 92, 8) !important;
        }
        .yellow.accent-1 {
            background-color: rgb(90, 90, 0) !important;
        }
        .yellow.accent-2 {
            background-color: rgb(153, 153, 0) !important;
        }
        .yellow.accent-3 {
            background-color: rgb(153, 140, 0) !important;
        }
        .yellow.accent-4 {
            background-color: rgb(153, 128, 0) !important;
        }
        .amber.lighten-5 {
            background-color: rgb(52, 40, 0) !important;
        }
        .amber.lighten-4 {
            background-color: rgb(72, 54, 0) !important;
        }
        .amber.lighten-3 {
            background-color: rgb(95, 71, 0) !important;
        }
        .amber.lighten-2 {
            background-color: rgb(117, 89, 0) !important;
        }
        .amber.lighten-1 {
            background-color: rgb(135, 102, 0) !important;
        }
        .amber {
            background-color: rgb(150, 112, 0) !important;
        }
        .amber-text {
            color: rgb(255, 199, 30) !important;
        }
        .rgba-amber-slight,
        .rgba-amber-slight::after {
            background-color: rgba(150, 112, 0, 0.1);
        }
        .rgba-amber-light,
        .rgba-amber-light::after {
            background-color: rgba(150, 112, 0, 0.3);
        }
        .rgba-amber-strong,
        .rgba-amber-strong::after {
            background-color: rgba(150, 112, 0, 0.7);
        }
        .amber.darken-1 {
            background-color: rgb(153, 107, 0) !important;
        }
        .amber.darken-2 {
            background-color: rgb(204, 128, 0) !important;
        }
        .amber.darken-3 {
            background-color: rgb(204, 114, 0) !important;
        }
        .amber.darken-4 {
            background-color: rgb(204, 89, 0) !important;
        }
        .amber.accent-1 {
            background-color: rgb(96, 76, 0) !important;
        }
        .amber.accent-2 {
            background-color: rgb(124, 98, 0) !important;
        }
        .amber.accent-3 {
            background-color: rgb(153, 118, 0) !important;
        }
        .amber.accent-4 {
            background-color: rgb(153, 103, 0) !important;
        }
        .orange.lighten-5 {
            background-color: rgb(70, 43, 0) !important;
        }
        .orange.lighten-4 {
            background-color: rgb(97, 58, 0) !important;
        }
        .orange.lighten-3 {
            background-color: rgb(127, 76, 0) !important;
        }
        .orange.lighten-2 {
            background-color: rgb(158, 94, 0) !important;
        }
        .orange.lighten-1 {
            background-color: rgb(181, 108, 0) !important;
        }
        .orange {
            background-color: rgb(204, 122, 0) !important;
        }
        .orange-text {
            color: rgb(255, 162, 26) !important;
        }
        .rgba-orange-slight,
        .rgba-orange-slight::after {
            background-color: rgba(204, 122, 0, 0.1);
        }
        .rgba-orange-light,
        .rgba-orange-light::after {
            background-color: rgba(204, 122, 0, 0.3);
        }
        .rgba-orange-strong,
        .rgba-orange-strong::after {
            background-color: rgba(204, 122, 0, 0.7);
        }
        .orange.darken-1 {
            background-color: rgb(201, 112, 0) !important;
        }
        .orange.darken-2 {
            background-color: rgb(196, 99, 0) !important;
        }
        .orange.darken-3 {
            background-color: rgb(191, 86, 0) !important;
        }
        .orange.darken-4 {
            background-color: rgb(184, 65, 0) !important;
        }
        .orange.accent-1 {
            background-color: rgb(127, 81, 0) !important;
        }
        .orange.accent-2 {
            background-color: rgb(166, 93, 0) !important;
        }
        .orange.accent-3 {
            background-color: rgb(204, 116, 0) !important;
        }
        .orange.accent-4 {
            background-color: rgb(204, 87, 0) !important;
        }
        .deep-orange.lighten-5 {
            background-color: rgb(58, 15, 10) !important;
        }
        .deep-orange.lighten-4 {
            background-color: rgb(91, 22, 0) !important;
        }
        .deep-orange.lighten-3 {
            background-color: rgb(117, 28, 0) !important;
        }
        .deep-orange.lighten-2 {
            background-color: rgb(143, 34, 0) !important;
        }
        .deep-orange.lighten-1 {
            background-color: rgb(164, 39, 0) !important;
        }
        .deep-orange {
            background-color: rgb(184, 44, 0) !important;
        }
        .deep-orange-text {
            color: rgb(255, 99, 49) !important;
        }
        .rgba-deep-orange-slight,
        .rgba-deep-orange-slight::after {
            background-color: rgba(184, 44, 0, 0.1);
        }
        .rgba-deep-orange-light,
        .rgba-deep-orange-light::after {
            background-color: rgba(184, 44, 0, 0.3);
        }
        .rgba-deep-orange-strong,
        .rgba-deep-orange-strong::after {
            background-color: rgba(184, 44, 0, 0.7);
        }
        .deep-orange.darken-1 {
            background-color: rgb(184, 51, 9) !important;
        }
        .deep-orange.darken-2 {
            background-color: rgb(184, 59, 20) !important;
        }
        .deep-orange.darken-3 {
            background-color: rgb(173, 54, 17) !important;
        }
        .deep-orange.darken-4 {
            background-color: rgb(153, 43, 10) !important;
        }
        .deep-orange.accent-1 {
            background-color: rgb(127, 30, 0) !important;
        }
        .deep-orange.accent-2 {
            background-color: rgb(166, 40, 0) !important;
        }
        .deep-orange.accent-3 {
            background-color: rgb(204, 49, 0) !important;
        }
        .deep-orange.accent-4 {
            background-color: rgb(177, 35, 0) !important;
        }
        .brown.lighten-5 {
            background-color: rgb(43, 35, 31) !important;
        }
        .brown.lighten-4 {
            background-color: rgb(63, 50, 45) !important;
        }
        .brown.lighten-3 {
            background-color: rgb(84, 67, 62) !important;
        }
        .brown.lighten-2 {
            background-color: rgb(106, 85, 78) !important;
        }
        .brown.lighten-1 {
            background-color: rgb(113, 88, 79) !important;
        }
        .brown {
            background-color: rgb(97, 68, 58) !important;
        }
        .brown-text {
            color: rgb(186, 151, 138) !important;
        }
        .rgba-brown-slight,
        .rgba-brown-slight::after {
            background-color: rgba(97, 68, 58, 0.1);
        }
        .rgba-brown-light,
        .rgba-brown-light::after {
            background-color: rgba(97, 68, 58, 0.3);
        }
        .rgba-brown-strong,
        .rgba-brown-strong::after {
            background-color: rgba(97, 68, 58, 0.7);
        }
        .brown.darken-1 {
            background-color: rgb(87, 61, 52) !important;
        }
        .brown.darken-2 {
            background-color: rgb(74, 51, 44) !important;
        }
        .brown.darken-3 {
            background-color: rgb(62, 42, 37) !important;
        }
        .brown.darken-4 {
            background-color: rgb(50, 31, 28) !important;
        }
        .blue-grey.lighten-5 {
            background-color: rgb(33, 36, 37) !important;
        }
        .blue-grey.lighten-4 {
            background-color: rgb(43, 53, 58) !important;
        }
        .blue-grey.lighten-3 {
            background-color: rgb(56, 70, 77) !important;
        }
        .blue-grey.lighten-2 {
            background-color: rgb(70, 87, 96) !important;
        }
        .blue-grey.lighten-1 {
            background-color: rgb(81, 101, 110) !important;
        }
        .blue-grey {
            background-color: rgb(77, 100, 111) !important;
        }
        .blue-grey-text {
            color: rgb(158, 149, 137) !important;
        }
        .rgba-blue-grey-slight,
        .rgba-blue-grey-slight::after {
            background-color: rgba(77, 100, 111, 0.1);
        }
        .rgba-blue-grey-light,
        .rgba-blue-grey-light::after {
            background-color: rgba(77, 100, 111, 0.3);
        }
        .rgba-blue-grey-strong,
        .rgba-blue-grey-strong::after {
            background-color: rgba(77, 100, 111, 0.7);
        }
        .blue-grey.darken-1 {
            background-color: rgb(67, 88, 98) !important;
        }
        .blue-grey.darken-2 {
            background-color: rgb(55, 72, 80) !important;
        }
        .blue-grey.darken-3 {
            background-color: rgb(44, 57, 63) !important;
        }
        .blue-grey.darken-4 {
            background-color: rgb(30, 40, 45) !important;
        }
        .grey.lighten-5 {
            background-color: rgb(27, 29, 30) !important;
        }
        .grey.lighten-4 {
            background-color: rgb(30, 32, 33) !important;
        }
        .grey.lighten-3 {
            background-color: rgb(34, 36, 38) !important;
        }
        .grey.lighten-2 {
            background-color: rgb(42, 45, 47) !important;
        }
        .grey.lighten-1 {
            background-color: rgb(61, 66, 69) !important;
        }
        .grey {
            background-color: rgb(79, 85, 89) !important;
        }
        .grey-text {
            color: rgb(171, 163, 152) !important;
        }
        .rgba-grey-slight,
        .rgba-grey-slight::after {
            background-color: rgba(79, 85, 89, 0.1);
        }
        .md-pills .nav-link:hover,
        .md-pills .nav-link:hover::after,
        .rgba-grey-light,
        .rgba-grey-light::after {
            background-color: rgba(79, 85, 89, 0.3);
        }
        .rgba-grey-strong,
        .rgba-grey-strong::after {
            background-color: rgba(79, 85, 89, 0.7);
        }
        .grey.darken-1 {
            background-color: rgb(88, 95, 99) !important;
        }
        .grey.darken-2 {
            background-color: rgb(73, 79, 82) !important;
        }
        .grey.darken-3 {
            background-color: rgb(50, 54, 56) !important;
        }
        .grey.darken-4 {
            background-color: rgb(25, 27, 28) !important;
        }
        .black,
        .picker__list-item:hover {
            background-color: rgb(0, 0, 0) !important;
        }
        .black-text,
        .btn.btn-link,
        .md-toast-close-button:focus,
        .md-toast-close-button:hover {
            color: rgb(232, 230, 227) !important;
        }
        .rgba-black-slight,
        .rgba-black-slight::after {
            background-color: rgba(0, 0, 0, 0.1);
        }
        .rgba-black-light,
        .rgba-black-light::after {
            background-color: rgba(0, 0, 0, 0.3);
        }
        .rgba-black-strong,
        .rgba-black-strong::after {
            background-color: rgba(0, 0, 0, 0.7);
        }
        .picker__box .picker__header .picker__select--month.browser-default,
        .picker__box .picker__header .picker__select--year.browser-default,
        .picker__list-item,
        .white {
            background-color: rgb(24, 26, 27) !important;
        }
        #toast-container > div,
        .card.card-cascade .view.view-cascade.gradient-card-header,
        .clockpicker-display .clockpicker-display-column #click-am.text-primary,
        .clockpicker-display .clockpicker-display-column #click-pm.text-primary,
        .clockpicker-display .clockpicker-display-column .clockpicker-span-hours.text-primary,
        .clockpicker-display .clockpicker-display-column .clockpicker-span-minutes.text-primary,
        .darktheme .picker__box .picker__calendar-container .clockpicker-plate .clockpicker-tick,
        .darktheme .picker__box .picker__date-display .clockpicker-display,
        .darktheme .picker__box .picker__date-display .clockpicker-display .clockpicker-span-am-pm,
        .darktheme .picker__box .picker__footer button,
        .dropdown .dropdown-menu .dropdown-item:active,
        .dropdown .dropdown-menu .dropdown-item:hover,
        .dropleft .dropdown-menu .dropdown-item:active,
        .dropleft .dropdown-menu .dropdown-item:hover,
        .dropright .dropdown-menu .dropdown-item:active,
        .dropright .dropdown-menu .dropdown-item:hover,
        .dropup .dropdown-menu .dropdown-item:active,
        .dropup .dropdown-menu .dropdown-item:hover,
        .md-toast-close-button,
        .md-toast-message a,
        .md-toast-message label,
        .picker--focused .picker__list-item--selected,
        .picker--time .picker__button--clear:focus,
        .picker--time .picker__button--clear:focus::before,
        .picker--time .picker__button--clear:hover,
        .picker--time .picker__button--clear:hover::before,
        .picker__box .picker__header .picker__date-display,
        .picker__box .picker__table .picker--focused,
        .picker__box .picker__table .picker__day--outfocus,
        .picker__box .picker__table .picker__day--selected,
        .picker__box .picker__table .picker__day--selected:hover,
        .picker__date-display,
        .picker__date-display .clockpicker-display .clockpicker-display-column #click-am.text-primary,
        .picker__date-display .clockpicker-display .clockpicker-display-column #click-pm.text-primary,
        .picker__date-display .clockpicker-display .clockpicker-display-column .clockpicker-span-hours.text-primary,
        .picker__date-display .clockpicker-display .clockpicker-display-column .clockpicker-span-minutes.text-primary,
        .picker__list-item--selected,
        .picker__list-item--selected:hover,
        .side-nav,
        .side-nav .search-form .form-control,
        .white-text {
            color: rgb(232, 230, 227) !important;
        }
        .dark-grey-text,
        .dark-grey-text:focus,
        .dark-grey-text:hover,
        .navbar .mega-dropdown .dropdown-menu.mega-menu.v-1 .sub-menu .news-title {
            color: rgb(182, 176, 166) !important;
        }
        .rgba-white-slight,
        .rgba-white-slight::after {
            background-color: rgba(24, 26, 27, 0.1);
        }
        .rgba-white-light,
        .rgba-white-light::after {
            background-color: rgba(24, 26, 27, 0.3);
        }
        .rgba-white-strong,
        .rgba-white-strong::after {
            background-color: rgba(24, 26, 27, 0.7);
        }
        .rgba-stylish-slight {
            background-color: rgba(50, 55, 65, 0.1);
        }
        .rgba-stylish-light {
            background-color: rgba(50, 55, 65, 0.3);
        }
        .rgba-stylish-strong {
            background-color: rgba(50, 55, 65, 0.7);
        }
        .primary-color,
        ul.stepper li.active a .circle,
        ul.stepper li.completed a .circle {
            background-color: rgb(9, 67, 162) !important;
        }
        .primary-color-dark {
            background-color: rgb(10, 57, 129) !important;
        }
        .secondary-color {
            background-color: rgb(101, 43, 130) !important;
        }
        .secondary-color-dark {
            background-color: rgb(122, 41, 163) !important;
        }
        .default-color {
            background-color: rgb(34, 150, 138) !important;
        }
        .default-color-dark {
            background-color: rgb(0, 84, 74) !important;
        }
        .info-color {
            background-color: rgb(21, 128, 168) !important;
        }
        .info-color-dark {
            background-color: rgb(0, 122, 163) !important;
        }
        .success-color {
            background-color: rgb(0, 160, 65) !important;
        }
        .success-color-dark {
            background-color: rgb(0, 101, 41) !important;
        }
        .warning-color {
            background-color: rgb(173, 116, 0) !important;
        }
        .warning-color-dark {
            background-color: rgb(204, 109, 0) !important;
        }
        .danger-color,
        ul.stepper li.warning a .circle {
            background-color: rgb(172, 0, 15) !important;
        }
        .danger-color-dark {
            background-color: rgb(163, 0, 0) !important;
        }
        .elegant-color {
            background-color: rgb(35, 38, 39) !important;
        }
        .elegant-color-dark {
            background-color: rgb(25, 27, 28) !important;
        }
        .stylish-color {
            background-color: rgb(63, 69, 71) !important;
        }
        .stylish-color-dark {
            background-color: rgb(50, 55, 65) !important;
        }
        .unique-color {
            background-color: rgb(50, 91, 124) !important;
        }
        .unique-color-dark {
            background-color: rgb(22, 28, 39) !important;
        }
        .special-color {
            background-color: rgb(44, 57, 63) !important;
        }
        .special-color-dark {
            background-color: rgb(30, 40, 45) !important;
        }
        .purple-gradient {
            background-image: linear-gradient(40deg,
            rgb(138, 0, 82),
            rgb(14, 9, 132)) !important;
            background-color: initial !important;
        }
        .peach-gradient {
            background-image: linear-gradient(40deg,
            rgb(103, 75, 0),
            rgb(144, 3, 3)) !important;
            background-color: initial !important;
        }
        .aqua-gradient {
            background-image: linear-gradient(40deg,
            rgb(0, 98, 185),
            rgb(0, 201, 146)) !important;
            background-color: initial !important;
        }
        .blue-gradient {
            background-image: linear-gradient(40deg,
            rgb(3, 118, 162),
            rgb(38, 50, 127)) !important;
            background-color: initial !important;
        }
        .purple-gradient-rgba {
            background-image: linear-gradient(40deg,
            rgba(138, 0, 82, 0.9),
            rgba(14, 9, 132, 0.9)) !important;
            background-color: initial !important;
        }
        .peach-gradient-rgba {
            background-image: linear-gradient(40deg,
            rgba(103, 75, 0, 0.9),
            rgba(144, 3, 3, 0.9)) !important;
            background-color: initial !important;
        }
        .aqua-gradient-rgba {
            background-image: linear-gradient(40deg,
            rgba(0, 98, 185, 0.9),
            rgba(0, 201, 146, 0.9)) !important;
            background-color: initial !important;
        }
        .blue-gradient-rgba {
            background-image: linear-gradient(40deg,
            rgba(3, 118, 162, 0.9),
            rgba(38, 50, 127, 0.9)) !important;
            background-color: initial !important;
        }
        .hoverable {
            box-shadow: none;
        }
        .hoverable:hover {
            box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 17px 0px,
            rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;
        }
        .z-depth-0 {
            box-shadow: none !important;
        }
        .chip:active,
        .z-depth-1 {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px !important;
        }
        .z-depth-1-half {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px !important;
        }
        .z-depth-2 {
            box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 17px 0px,
            rgba(0, 0, 0, 0.19) 0px 6px 20px 0px !important;
        }
        .z-depth-3 {
            box-shadow: rgba(0, 0, 0, 0.24) 0px 12px 15px 0px,
            rgba(0, 0, 0, 0.19) 0px 17px 50px 0px !important;
        }
        .z-depth-4 {
            box-shadow: rgba(0, 0, 0, 0.22) 0px 16px 28px 0px,
            rgba(0, 0, 0, 0.21) 0px 25px 55px 0px !important;
        }
        .z-depth-5 {
            box-shadow: rgba(0, 0, 0, 0.2) 0px 27px 24px 0px,
            rgba(0, 0, 0, 0.22) 0px 40px 77px 0px !important;
        }
        .btn,
        .btn.disabled:active,
        .btn.disabled:focus,
        .btn.disabled:hover,
        .btn:disabled:active,
        .btn:disabled:focus,
        .btn:disabled:hover,
        .jumbotron {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
        }
        a {
            text-decoration-color: initial;
            color: rgb(51, 162, 255);
        }
        a:hover {
            text-decoration-color: initial;
            color: rgb(97, 183, 255);
        }
        a.disabled:hover,
        a:disabled:hover {
            color: rgb(51, 162, 255);
        }
        a:not([href]):not([tabindex]),
        a:not([href]):not([tabindex]):focus,
        a:not([href]):not([tabindex]):hover {
            color: inherit;
            text-decoration-color: initial;
        }
        .hr-light {
            border-top-color: rgb(48, 52, 54);
        }
        .hr-dark {
            border-top-color: rgb(106, 99, 87);
        }
        .jumbotron {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
            background-color: rgb(24, 26, 27);
        }
        .bg-primary {
            background-color: rgb(9, 67, 162) !important;
        }
        a.bg-primary:focus,
        a.bg-primary:hover,
        button.bg-primary:focus,
        button.bg-primary:hover {
            background-color: rgb(11, 79, 190) !important;
        }
        .border-primary {
            border-color: rgb(9, 63, 153) !important;
        }
        .bg-danger {
            background-color: rgb(172, 0, 15) !important;
        }
        a.bg-danger:focus,
        a.bg-danger:hover,
        button.bg-danger:focus,
        button.bg-danger:hover {
            background-color: rgb(203, 0, 18) !important;
        }
        .border-danger {
            border-color: rgb(163, 0, 14) !important;
        }
        .bg-warning {
            background-color: rgb(173, 116, 0) !important;
        }
        a.bg-warning:focus,
        a.bg-warning:hover,
        button.bg-warning:focus,
        button.bg-warning:hover {
            background-color: rgb(204, 136, 0) !important;
        }
        .border-warning {
            border-color: rgb(163, 109, 0) !important;
        }
        .bg-success {
            background-color: rgb(0, 160, 65) !important;
        }
        a.bg-success:focus,
        a.bg-success:hover,
        button.bg-success:focus,
        button.bg-success:hover {
            background-color: rgb(0, 119, 48) !important;
        }
        .border-success {
            border-color: rgb(0, 195, 79) !important;
        }
        .bg-info {
            background-color: rgb(21, 128, 168) !important;
        }
        a.bg-info:focus,
        a.bg-info:hover,
        button.bg-info:focus,
        button.bg-info:hover {
            background-color: rgb(21, 124, 162) !important;
        }
        .border-info {
            border-color: rgb(19, 116, 152) !important;
        }
        .bg-default {
            background-color: rgb(34, 150, 138) !important;
        }
        a.bg-default:focus,
        a.bg-default:hover,
        button.bg-default:focus,
        button.bg-default:hover {
            background-color: rgb(26, 117, 108) !important;
        }
        .border-default {
            border-color: rgb(35, 151, 140) !important;
        }
        .bg-secondary {
            background-color: rgb(101, 43, 130) !important;
        }
        a.bg-secondary:focus,
        a.bg-secondary:hover,
        button.bg-secondary:focus,
        button.bg-secondary:hover {
            background-color: rgb(119, 51, 153) !important;
        }
        .border-secondary {
            border-color: rgb(95, 41, 122) !important;
        }
        .bg-dark {
            background-color: rgb(25, 27, 28) !important;
        }
        a.bg-dark:focus,
        a.bg-dark:hover,
        button.bg-dark:focus,
        button.bg-dark:hover {
            background-color: rgb(6, 7, 7) !important;
        }
        .border-dark {
            border-color: rgb(129, 120, 106) !important;
        }
        .bg-light {
            background-color: rgb(42, 45, 47) !important;
        }
        a.bg-light:focus,
        a.bg-light:hover,
        button.bg-light:focus,
        button.bg-light:hover {
            background-color: rgb(56, 60, 63) !important;
        }
        .border-light {
            border-color: rgb(57, 61, 64) !important;
        }
        .divider-new::after,
        .divider-new::before {
            background-image: initial;
            background-color: rgb(56, 61, 63);
        }
        .blockquote {
            border-left-color: rgb(53, 57, 60);
        }
        .blockquote.text-right {
            border-left-color: initial;
            border-right-color: rgb(53, 57, 60);
        }
        .bq-primary {
            border-left-color: rgb(9, 63, 153) !important;
        }
        .bq-primary .bq-title {
            color: rgb(75, 160, 244) !important;
        }
        .bq-danger {
            border-left-color: rgb(163, 0, 14) !important;
        }
        .bq-danger .bq-title {
            color: rgb(255, 63, 80) !important;
        }
        .bq-warning {
            border-left-color: rgb(163, 109, 0) !important;
        }
        .bq-warning .bq-title {
            color: rgb(255, 190, 61) !important;
        }
        .bq-success {
            border-left-color: rgb(0, 195, 79) !important;
        }
        .bq-success .bq-title {
            color: rgb(64, 255, 141) !important;
        }
        .bq-info {
            border-left-color: rgb(19, 116, 152) !important;
        }
        .bq-info .bq-title {
            color: rgb(67, 187, 231) !important;
        }
        .text-primary {
            color: rgb(75, 160, 244) !important;
        }
        a.text-primary:focus,
        a.text-primary:hover {
            color: rgb(41, 143, 242) !important;
        }
        .text-danger {
            color: rgb(255, 63, 80) !important;
        }
        a.text-danger:focus,
        a.text-danger:hover {
            color: rgb(255, 27, 48) !important;
        }
        .text-warning {
            color: rgb(255, 190, 61) !important;
        }
        a.text-warning:focus,
        a.text-warning:hover {
            color: rgb(255, 179, 26) !important;
        }
        .text-success {
            color: rgb(64, 255, 141) !important;
        }
        a.text-success:focus,
        a.text-success:hover {
            color: rgb(100, 255, 162) !important;
        }
        .text-info {
            color: rgb(67, 187, 231) !important;
        }
        a.text-info:focus,
        a.text-info:hover {
            color: rgb(68, 187, 231) !important;
        }
        .text-default {
            color: rgb(83, 215, 202) !important;
        }
        a.text-default:focus,
        a.text-default:hover {
            color: rgb(111, 222, 212) !important;
        }
        .text-secondary {
            color: rgb(174, 110, 207) !important;
        }
        a.text-secondary:focus,
        a.text-secondary:hover {
            color: rgb(160, 83, 197) !important;
        }
        .text-dark {
            color: rgb(211, 207, 202) !important;
        }
        a.text-dark:focus,
        a.text-dark:hover {
            color: rgb(227, 225, 221) !important;
        }
        .text-light {
            color: rgb(212, 209, 203) !important;
        }
        a.text-light:focus,
        a.text-light:hover {
            color: rgb(197, 192, 184) !important;
        }
        .pattern-1 {
            background-image: url("https://www.fencingtimelive.com/img/overlays/01.png");
            background-color: initial;
        }
        .pattern-2 {
            background-image: url("https://www.fencingtimelive.com/img/overlays/02.png");
            background-color: initial;
        }
        .pattern-3 {
            background-image: url("https://www.fencingtimelive.com/img/overlays/03.png");
            background-color: initial;
        }
        .pattern-4 {
            background-image: url("https://www.fencingtimelive.com/img/overlays/04.png");
            background-color: initial;
        }
        .pattern-5 {
            background-image: url("https://www.fencingtimelive.com/img/overlays/05.png");
            background-color: initial;
        }
        .pattern-6 {
            background-image: url("https://www.fencingtimelive.com/img/overlays/06.png");
            background-color: initial;
        }
        .pattern-7 {
            background-image: url("https://www.fencingtimelive.com/img/overlays/07.png");
            background-color: initial;
        }
        .pattern-8 {
            background-image: url("https://www.fencingtimelive.com/img/overlays/08.png");
            background-color: initial;
        }
        .pattern-9 {
            background-image: url("https://www.fencingtimelive.com/img/overlays/09.png");
            background-color: initial;
        }
        .waves-effect .waves-ripple {
            background-image: radial-gradient(rgba(0, 0, 0, 0.2) 0px,
            rgba(0, 0, 0, 0.3) 40%,
            rgba(0, 0, 0, 0.4) 50%,
            rgba(0, 0, 0, 0.5) 60%,
            rgba(24, 26, 27, 0) 70%);
            background-color: initial;
        }
        .waves-effect.waves-light .waves-ripple {
            background-image: radial-gradient(rgba(24, 26, 27, 0.2) 0px,
            rgba(24, 26, 27, 0.3) 40%,
            rgba(24, 26, 27, 0.4) 50%,
            rgba(24, 26, 27, 0.5) 60%,
            rgba(24, 26, 27, 0) 70%);
            background-color: initial;
        }
        .waves-effect.waves-classic .waves-ripple {
            background-image: initial;
            background-color: rgba(0, 0, 0, 0.2);
        }
        .waves-effect.waves-classic.waves-light .waves-ripple {
            background-image: initial;
            background-color: rgba(24, 26, 27, 0.4);
        }
        .waves-button,
        .waves-button-input,
        .waves-button:hover,
        .waves-button:visited {
            border-color: initial;
            outline-color: initial;
            color: inherit;
            background-color: rgba(0, 0, 0, 0);
            text-decoration-color: initial;
        }
        .waves-float {
            box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 1.5px 1px;
        }
        .waves-float:active {
            box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 20px 1px;
        }
        .btn {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
            border-color: initial;
            color: inherit;
        }
        .btn:active,
        .btn:focus,
        .btn:hover {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            outline-color: initial;
        }
        .btn:not([disabled]):not(.disabled).active,
        .btn:not([disabled]):not(.disabled):active {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn.disabled:active,
        .btn.disabled:focus,
        .btn.disabled:hover,
        .btn:disabled:active,
        .btn:disabled:focus,
        .btn:disabled:hover {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
        }
        .btn.btn-link {
            box-shadow: none;
            background-color: transparent;
        }
        .btn.btn-link:active,
        .btn.btn-link:focus,
        .btn.btn-link:hover {
            background-color: transparent;
            box-shadow: none !important;
        }
        .btn-primary {
            color: rgb(232, 230, 227);
            background-color: rgb(9, 67, 162) !important;
        }
        .btn-primary:hover {
            background-color: rgb(9, 62, 147);
            color: rgb(232, 230, 227);
        }
        .btn-primary.focus,
        .btn-primary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-primary.active,
        .btn-primary:active,
        .btn-primary:focus {
            background-color: rgb(9, 65, 158);
        }
        .btn-primary.dropdown-toggle {
            background-color: rgb(9, 67, 162) !important;
        }
        .btn-primary.dropdown-toggle:focus,
        .btn-primary.dropdown-toggle:hover {
            background-color: rgb(9, 62, 147) !important;
        }
        .btn-primary:not([disabled]):not(.disabled).active,
        .btn-primary:not([disabled]):not(.disabled):active,
        .show > .btn-primary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(9, 65, 158) !important;
        }
        .btn-primary:not([disabled]):not(.disabled).active:focus,
        .btn-primary:not([disabled]):not(.disabled):active:focus,
        .show > .btn-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .primary-ic {
            color: rgb(75, 160, 244) !important;
        }
        .primary-ic:focus,
        .primary-ic:hover {
            color: rgb(75, 160, 244);
        }
        table.table a.btn.btn-primary {
            color: rgb(232, 230, 227);
        }
        .btn-outline-primary {
            border-color: rgb(9, 63, 153) !important;
            background-color: transparent !important;
            color: rgb(75, 160, 244) !important;
        }
        .btn-outline-primary.active,
        .btn-outline-primary:active,
        .btn-outline-primary:active:focus,
        .btn-outline-primary:focus,
        .btn-outline-primary:hover {
            border-color: rgb(9, 63, 153) !important;
            background-color: transparent !important;
            color: rgb(75, 160, 244) !important;
        }
        .btn-outline-primary:not([disabled]):not(.disabled).active,
        .btn-outline-primary:not([disabled]):not(.disabled):active,
        .show > .btn-outline-primary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(9, 63, 153) !important;
        }
        .btn-outline-primary:not([disabled]):not(.disabled).active:focus,
        .btn-outline-primary:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-danger {
            color: rgb(232, 230, 227);
            background-color: rgb(172, 0, 15) !important;
        }
        .btn-danger:hover {
            background-color: rgb(157, 0, 13);
            color: rgb(232, 230, 227);
        }
        .btn-danger.focus,
        .btn-danger:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-danger.active,
        .btn-danger:active,
        .btn-danger:focus {
            background-color: rgb(165, 0, 14);
        }
        .btn-danger.dropdown-toggle {
            background-color: rgb(172, 0, 15) !important;
        }
        .btn-danger.dropdown-toggle:focus,
        .btn-danger.dropdown-toggle:hover {
            background-color: rgb(157, 0, 13) !important;
        }
        .btn-danger:not([disabled]):not(.disabled).active,
        .btn-danger:not([disabled]):not(.disabled):active,
        .show > .btn-danger.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(165, 0, 14) !important;
        }
        .btn-danger:not([disabled]):not(.disabled).active:focus,
        .btn-danger:not([disabled]):not(.disabled):active:focus,
        .show > .btn-danger.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .danger-ic {
            color: rgb(255, 63, 80) !important;
        }
        .danger-ic:focus,
        .danger-ic:hover {
            color: rgb(255, 63, 80);
        }
        table.table a.btn.btn-danger {
            color: rgb(232, 230, 227);
        }
        .btn-outline-danger {
            border-color: rgb(163, 0, 14) !important;
            background-color: transparent !important;
            color: rgb(255, 63, 80) !important;
        }
        .btn-outline-danger.active,
        .btn-outline-danger:active,
        .btn-outline-danger:active:focus,
        .btn-outline-danger:focus,
        .btn-outline-danger:hover {
            border-color: rgb(163, 0, 14) !important;
            background-color: transparent !important;
            color: rgb(255, 63, 80) !important;
        }
        .btn-outline-danger:not([disabled]):not(.disabled).active,
        .btn-outline-danger:not([disabled]):not(.disabled):active,
        .show > .btn-outline-danger.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(163, 0, 14) !important;
        }
        .btn-outline-danger:not([disabled]):not(.disabled).active:focus,
        .btn-outline-danger:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-danger.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-warning {
            color: rgb(232, 230, 227);
            background-color: rgb(173, 116, 0) !important;
        }
        .btn-warning:hover {
            background-color: rgb(118, 79, 0);
            color: rgb(232, 230, 227);
        }
        .btn-warning.focus,
        .btn-warning:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-warning.active,
        .btn-warning:active,
        .btn-warning:focus {
            background-color: rgb(163, 109, 0);
        }
        .btn-warning.dropdown-toggle {
            background-color: rgb(173, 116, 0) !important;
        }
        .btn-warning.dropdown-toggle:focus,
        .btn-warning.dropdown-toggle:hover {
            background-color: rgb(118, 79, 0) !important;
        }
        .btn-warning:not([disabled]):not(.disabled).active,
        .btn-warning:not([disabled]):not(.disabled):active,
        .show > .btn-warning.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(163, 109, 0) !important;
        }
        .btn-warning:not([disabled]):not(.disabled).active:focus,
        .btn-warning:not([disabled]):not(.disabled):active:focus,
        .show > .btn-warning.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .warning-ic {
            color: rgb(255, 190, 61) !important;
        }
        .warning-ic:focus,
        .warning-ic:hover {
            color: rgb(255, 190, 61);
        }
        table.table a.btn.btn-warning {
            color: rgb(232, 230, 227);
        }
        .btn-outline-warning {
            border-color: rgb(163, 109, 0) !important;
            background-color: transparent !important;
            color: rgb(255, 190, 61) !important;
        }
        .btn-outline-warning.active,
        .btn-outline-warning:active,
        .btn-outline-warning:active:focus,
        .btn-outline-warning:focus,
        .btn-outline-warning:hover {
            border-color: rgb(163, 109, 0) !important;
            background-color: transparent !important;
            color: rgb(255, 190, 61) !important;
        }
        .btn-outline-warning:not([disabled]):not(.disabled).active,
        .btn-outline-warning:not([disabled]):not(.disabled):active,
        .show > .btn-outline-warning.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(163, 109, 0) !important;
        }
        .btn-outline-warning:not([disabled]):not(.disabled).active:focus,
        .btn-outline-warning:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-warning.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-success {
            color: rgb(232, 230, 227);
            background-color: rgb(0, 160, 65) !important;
        }
        .btn-success:hover {
            background-color: rgb(0, 181, 73);
            color: rgb(232, 230, 227);
        }
        .btn-success.focus,
        .btn-success:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-success.active,
        .btn-success:active,
        .btn-success:focus {
            background-color: rgb(0, 78, 32);
        }
        .btn-success.dropdown-toggle {
            background-color: rgb(0, 160, 65) !important;
        }
        .btn-success.dropdown-toggle:focus,
        .btn-success.dropdown-toggle:hover {
            background-color: rgb(0, 181, 73) !important;
        }
        .btn-success:not([disabled]):not(.disabled).active,
        .btn-success:not([disabled]):not(.disabled):active,
        .show > .btn-success.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(0, 78, 32) !important;
        }
        .btn-success:not([disabled]):not(.disabled).active:focus,
        .btn-success:not([disabled]):not(.disabled):active:focus,
        .show > .btn-success.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .success-ic {
            color: rgb(64, 255, 141) !important;
        }
        .success-ic:focus,
        .success-ic:hover {
            color: rgb(64, 255, 141);
        }
        table.table a.btn.btn-success {
            color: rgb(232, 230, 227);
        }
        .btn-outline-success {
            border-color: rgb(0, 195, 79) !important;
            background-color: transparent !important;
            color: rgb(64, 255, 141) !important;
        }
        .btn-outline-success.active,
        .btn-outline-success:active,
        .btn-outline-success:active:focus,
        .btn-outline-success:focus,
        .btn-outline-success:hover {
            border-color: rgb(0, 195, 79) !important;
            background-color: transparent !important;
            color: rgb(64, 255, 141) !important;
        }
        .btn-outline-success:not([disabled]):not(.disabled).active,
        .btn-outline-success:not([disabled]):not(.disabled):active,
        .show > .btn-outline-success.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(0, 195, 79) !important;
        }
        .btn-outline-success:not([disabled]):not(.disabled).active:focus,
        .btn-outline-success:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-success.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-info {
            color: rgb(232, 230, 227);
            background-color: rgb(21, 128, 168) !important;
        }
        .btn-info:hover {
            background-color: rgb(20, 117, 154);
            color: rgb(232, 230, 227);
        }
        .btn-info.focus,
        .btn-info:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-info.active,
        .btn-info:active,
        .btn-info:focus {
            background-color: rgb(16, 97, 126);
        }
        .btn-info.dropdown-toggle {
            background-color: rgb(21, 128, 168) !important;
        }
        .btn-info.dropdown-toggle:focus,
        .btn-info.dropdown-toggle:hover {
            background-color: rgb(20, 117, 154) !important;
        }
        .btn-info:not([disabled]):not(.disabled).active,
        .btn-info:not([disabled]):not(.disabled):active,
        .show > .btn-info.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(16, 97, 126) !important;
        }
        .btn-info:not([disabled]):not(.disabled).active:focus,
        .btn-info:not([disabled]):not(.disabled):active:focus,
        .show > .btn-info.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .info-ic {
            color: rgb(67, 187, 231) !important;
        }
        .info-ic:focus,
        .info-ic:hover {
            color: rgb(67, 187, 231);
        }
        table.table a.btn.btn-info {
            color: rgb(232, 230, 227);
        }
        .btn-outline-info {
            border-color: rgb(19, 116, 152) !important;
            background-color: transparent !important;
            color: rgb(67, 187, 231) !important;
        }
        .btn-outline-info.active,
        .btn-outline-info:active,
        .btn-outline-info:active:focus,
        .btn-outline-info:focus,
        .btn-outline-info:hover {
            border-color: rgb(19, 116, 152) !important;
            background-color: transparent !important;
            color: rgb(67, 187, 231) !important;
        }
        .btn-outline-info:not([disabled]):not(.disabled).active,
        .btn-outline-info:not([disabled]):not(.disabled):active,
        .show > .btn-outline-info.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(19, 116, 152) !important;
        }
        .btn-outline-info:not([disabled]):not(.disabled).active:focus,
        .btn-outline-info:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-info.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-default {
            color: rgb(232, 230, 227);
            background-color: rgb(34, 150, 138) !important;
        }
        .btn-default:hover {
            background-color: rgb(38, 166, 157);
            color: rgb(232, 230, 227);
        }
        .btn-default.focus,
        .btn-default:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-default.active,
        .btn-default:active,
        .btn-default:focus {
            background-color: rgb(19, 83, 77);
        }
        .btn-default.dropdown-toggle {
            background-color: rgb(34, 150, 138) !important;
        }
        .btn-default.dropdown-toggle:focus,
        .btn-default.dropdown-toggle:hover {
            background-color: rgb(38, 166, 157) !important;
        }
        .btn-default:not([disabled]):not(.disabled).active,
        .btn-default:not([disabled]):not(.disabled):active,
        .show > .btn-default.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(19, 83, 77) !important;
        }
        .btn-default:not([disabled]):not(.disabled).active:focus,
        .btn-default:not([disabled]):not(.disabled):active:focus,
        .show > .btn-default.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .default-ic {
            color: rgb(83, 215, 202) !important;
        }
        .default-ic:focus,
        .default-ic:hover {
            color: rgb(83, 215, 202);
        }
        table.table a.btn.btn-default {
            color: rgb(232, 230, 227);
        }
        .btn-outline-default {
            border-color: rgb(35, 151, 140) !important;
            background-color: transparent !important;
            color: rgb(83, 215, 202) !important;
        }
        .btn-outline-default.active,
        .btn-outline-default:active,
        .btn-outline-default:active:focus,
        .btn-outline-default:focus,
        .btn-outline-default:hover {
            border-color: rgb(35, 151, 140) !important;
            background-color: transparent !important;
            color: rgb(83, 215, 202) !important;
        }
        .btn-outline-default:not([disabled]):not(.disabled).active,
        .btn-outline-default:not([disabled]):not(.disabled):active,
        .show > .btn-outline-default.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(35, 151, 140) !important;
        }
        .btn-outline-default:not([disabled]):not(.disabled).active:focus,
        .btn-outline-default:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-default.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-secondary {
            color: rgb(232, 230, 227);
            background-color: rgb(101, 43, 130) !important;
        }
        .btn-secondary:hover {
            background-color: rgb(93, 40, 119);
            color: rgb(232, 230, 227);
        }
        .btn-secondary.focus,
        .btn-secondary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-secondary.active,
        .btn-secondary:active,
        .btn-secondary:focus {
            background-color: rgb(95, 41, 122);
        }
        .btn-secondary.dropdown-toggle {
            background-color: rgb(101, 43, 130) !important;
        }
        .btn-secondary.dropdown-toggle:focus,
        .btn-secondary.dropdown-toggle:hover {
            background-color: rgb(93, 40, 119) !important;
        }
        .btn-secondary:not([disabled]):not(.disabled).active,
        .btn-secondary:not([disabled]):not(.disabled):active,
        .show > .btn-secondary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(95, 41, 122) !important;
        }
        .btn-secondary:not([disabled]):not(.disabled).active:focus,
        .btn-secondary:not([disabled]):not(.disabled):active:focus,
        .show > .btn-secondary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .secondary-ic {
            color: rgb(174, 110, 207) !important;
        }
        .secondary-ic:focus,
        .secondary-ic:hover {
            color: rgb(174, 110, 207);
        }
        table.table a.btn.btn-secondary {
            color: rgb(232, 230, 227);
        }
        .btn-outline-secondary {
            border-color: rgb(95, 41, 122) !important;
            background-color: transparent !important;
            color: rgb(174, 110, 207) !important;
        }
        .btn-outline-secondary.active,
        .btn-outline-secondary:active,
        .btn-outline-secondary:active:focus,
        .btn-outline-secondary:focus,
        .btn-outline-secondary:hover {
            border-color: rgb(95, 41, 122) !important;
            background-color: transparent !important;
            color: rgb(174, 110, 207) !important;
        }
        .btn-outline-secondary:not([disabled]):not(.disabled).active,
        .btn-outline-secondary:not([disabled]):not(.disabled):active,
        .show > .btn-outline-secondary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(95, 41, 122) !important;
        }
        .btn-outline-secondary:not([disabled]):not(.disabled).active:focus,
        .btn-outline-secondary:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-secondary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-elegant {
            color: rgb(232, 230, 227);
            background-color: rgb(35, 38, 39) !important;
        }
        .btn-elegant:hover {
            background-color: rgb(44, 48, 50);
            color: rgb(232, 230, 227);
        }
        .btn-elegant.focus,
        .btn-elegant:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-elegant.active,
        .btn-elegant:active,
        .btn-elegant:focus {
            background-color: rgb(0, 0, 0);
        }
        .btn-elegant.dropdown-toggle {
            background-color: rgb(35, 38, 39) !important;
        }
        .btn-elegant.dropdown-toggle:focus,
        .btn-elegant.dropdown-toggle:hover {
            background-color: rgb(44, 48, 50) !important;
        }
        .btn-elegant:not([disabled]):not(.disabled).active,
        .btn-elegant:not([disabled]):not(.disabled):active,
        .show > .btn-elegant.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(0, 0, 0) !important;
        }
        .btn-elegant:not([disabled]):not(.disabled).active:focus,
        .btn-elegant:not([disabled]):not(.disabled):active:focus,
        .show > .btn-elegant.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .elegant-ic {
            color: rgb(203, 198, 192) !important;
        }
        .elegant-ic:focus,
        .elegant-ic:hover {
            color: rgb(203, 198, 192);
        }
        table.table a.btn.btn-elegant {
            color: rgb(232, 230, 227);
        }
        .btn-outline-elegant {
            border-color: rgb(125, 116, 103) !important;
            background-color: transparent !important;
            color: rgb(203, 198, 192) !important;
        }
        .btn-outline-elegant.active,
        .btn-outline-elegant:active,
        .btn-outline-elegant:active:focus,
        .btn-outline-elegant:focus,
        .btn-outline-elegant:hover {
            border-color: rgb(125, 116, 103) !important;
            background-color: transparent !important;
            color: rgb(203, 198, 192) !important;
        }
        .btn-outline-elegant:not([disabled]):not(.disabled).active,
        .btn-outline-elegant:not([disabled]):not(.disabled):active,
        .show > .btn-outline-elegant.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(125, 116, 103) !important;
        }
        .btn-outline-elegant:not([disabled]):not(.disabled).active:focus,
        .btn-outline-elegant:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-elegant.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-unique {
            color: rgb(232, 230, 227);
            background-color: rgb(109, 11, 63) !important;
        }
        .btn-unique:hover {
            background-color: rgb(127, 13, 74);
            color: rgb(232, 230, 227);
        }
        .btn-unique.focus,
        .btn-unique:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-unique.active,
        .btn-unique:active,
        .btn-unique:focus {
            background-color: rgb(35, 3, 20);
        }
        .btn-unique.dropdown-toggle {
            background-color: rgb(109, 11, 63) !important;
        }
        .btn-unique.dropdown-toggle:focus,
        .btn-unique.dropdown-toggle:hover {
            background-color: rgb(127, 13, 74) !important;
        }
        .btn-unique:not([disabled]):not(.disabled).active,
        .btn-unique:not([disabled]):not(.disabled):active,
        .show > .btn-unique.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(35, 3, 20) !important;
        }
        .btn-unique:not([disabled]):not(.disabled).active:focus,
        .btn-unique:not([disabled]):not(.disabled):active:focus,
        .show > .btn-unique.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .unique-ic {
            color: rgb(240, 114, 181) !important;
        }
        .unique-ic:focus,
        .unique-ic:hover {
            color: rgb(240, 114, 181);
        }
        table.table a.btn.btn-unique {
            color: rgb(232, 230, 227);
        }
        .btn-outline-unique {
            border-color: rgb(190, 20, 111) !important;
            background-color: transparent !important;
            color: rgb(240, 114, 181) !important;
        }
        .btn-outline-unique.active,
        .btn-outline-unique:active,
        .btn-outline-unique:active:focus,
        .btn-outline-unique:focus,
        .btn-outline-unique:hover {
            border-color: rgb(190, 20, 111) !important;
            background-color: transparent !important;
            color: rgb(240, 114, 181) !important;
        }
        .btn-outline-unique:not([disabled]):not(.disabled).active,
        .btn-outline-unique:not([disabled]):not(.disabled):active,
        .show > .btn-outline-unique.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(190, 20, 111) !important;
        }
        .btn-outline-unique:not([disabled]):not(.disabled).active:focus,
        .btn-outline-unique:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-unique.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-dark-green {
            color: rgb(232, 230, 227);
            background-color: rgb(45, 114, 48) !important;
        }
        .btn-dark-green:hover {
            background-color: rgb(50, 128, 54);
            color: rgb(232, 230, 227);
        }
        .btn-dark-green.focus,
        .btn-dark-green:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-dark-green.active,
        .btn-dark-green:active,
        .btn-dark-green:focus {
            background-color: rgb(22, 55, 23);
        }
        .btn-dark-green.dropdown-toggle {
            background-color: rgb(45, 114, 48) !important;
        }
        .btn-dark-green.dropdown-toggle:focus,
        .btn-dark-green.dropdown-toggle:hover {
            background-color: rgb(50, 128, 54) !important;
        }
        .btn-dark-green:not([disabled]):not(.disabled).active,
        .btn-dark-green:not([disabled]):not(.disabled):active,
        .show > .btn-dark-green.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(22, 55, 23) !important;
        }
        .btn-dark-green:not([disabled]):not(.disabled).active:focus,
        .btn-dark-green:not([disabled]):not(.disabled):active:focus,
        .show > .btn-dark-green.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .dark-green-ic {
            color: rgb(119, 201, 123) !important;
        }
        .dark-green-ic:focus,
        .dark-green-ic:hover {
            color: rgb(119, 201, 123);
        }
        table.table a.btn.btn-dark-green {
            color: rgb(232, 230, 227);
        }
        .btn-outline-dark-green {
            border-color: rgb(55, 140, 59) !important;
            background-color: transparent !important;
            color: rgb(119, 201, 123) !important;
        }
        .btn-outline-dark-green.active,
        .btn-outline-dark-green:active,
        .btn-outline-dark-green:active:focus,
        .btn-outline-dark-green:focus,
        .btn-outline-dark-green:hover {
            border-color: rgb(55, 140, 59) !important;
            background-color: transparent !important;
            color: rgb(119, 201, 123) !important;
        }
        .btn-outline-dark-green:not([disabled]):not(.disabled).active,
        .btn-outline-dark-green:not([disabled]):not(.disabled):active,
        .show > .btn-outline-dark-green.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(55, 140, 59) !important;
        }
        .btn-outline-dark-green:not([disabled]):not(.disabled).active:focus,
        .btn-outline-dark-green:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-dark-green.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-mdb-color {
            color: rgb(232, 230, 227);
            background-color: rgb(71, 84, 113) !important;
        }
        .btn-mdb-color:hover {
            background-color: rgb(78, 93, 125);
            color: rgb(232, 230, 227);
        }
        .btn-mdb-color.focus,
        .btn-mdb-color:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-mdb-color.active,
        .btn-mdb-color:active,
        .btn-mdb-color:focus {
            background-color: rgb(40, 46, 62);
        }
        .btn-mdb-color.dropdown-toggle {
            background-color: rgb(71, 84, 113) !important;
        }
        .btn-mdb-color.dropdown-toggle:focus,
        .btn-mdb-color.dropdown-toggle:hover {
            background-color: rgb(78, 93, 125) !important;
        }
        .btn-mdb-color:not([disabled]):not(.disabled).active,
        .btn-mdb-color:not([disabled]):not(.disabled):active,
        .show > .btn-mdb-color.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(40, 46, 62) !important;
        }
        .btn-mdb-color:not([disabled]):not(.disabled).active:focus,
        .btn-mdb-color:not([disabled]):not(.disabled):active:focus,
        .show > .btn-mdb-color.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .mdb-color-ic {
            color: rgb(159, 151, 139) !important;
        }
        .mdb-color-ic:focus,
        .mdb-color-ic:hover {
            color: rgb(159, 151, 139);
        }
        table.table a.btn.btn-mdb-color {
            color: rgb(232, 230, 227);
        }
        .btn-outline-mdb-color {
            border-color: rgb(102, 95, 84) !important;
            background-color: transparent !important;
            color: rgb(159, 151, 139) !important;
        }
        .btn-outline-mdb-color.active,
        .btn-outline-mdb-color:active,
        .btn-outline-mdb-color:active:focus,
        .btn-outline-mdb-color:focus,
        .btn-outline-mdb-color:hover {
            border-color: rgb(102, 95, 84) !important;
            background-color: transparent !important;
            color: rgb(159, 151, 139) !important;
        }
        .btn-outline-mdb-color:not([disabled]):not(.disabled).active,
        .btn-outline-mdb-color:not([disabled]):not(.disabled):active,
        .show > .btn-outline-mdb-color.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(102, 95, 84) !important;
        }
        .btn-outline-mdb-color:not([disabled]):not(.disabled).active:focus,
        .btn-outline-mdb-color:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-mdb-color.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-red {
            color: rgb(232, 230, 227);
            background-color: rgb(167, 35, 35) !important;
        }
        .btn-red:hover {
            background-color: rgb(154, 33, 33);
            color: rgb(232, 230, 227);
        }
        .btn-red.focus,
        .btn-red:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-red.active,
        .btn-red:active,
        .btn-red:focus {
            background-color: rgb(103, 22, 22);
        }
        .btn-red.dropdown-toggle {
            background-color: rgb(167, 35, 35) !important;
        }
        .btn-red.dropdown-toggle:focus,
        .btn-red.dropdown-toggle:hover {
            background-color: rgb(154, 33, 33) !important;
        }
        .btn-red:not([disabled]):not(.disabled).active,
        .btn-red:not([disabled]):not(.disabled):active,
        .show > .btn-red.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(103, 22, 22) !important;
        }
        .btn-red:not([disabled]):not(.disabled).active:focus,
        .btn-red:not([disabled]):not(.disabled):active:focus,
        .show > .btn-red.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .red-ic {
            color: rgb(215, 67, 67) !important;
        }
        .red-ic:focus,
        .red-ic:hover {
            color: rgb(215, 67, 67);
        }
        table.table a.btn.btn-red {
            color: rgb(232, 230, 227);
        }
        .btn-outline-red {
            border-color: rgb(147, 31, 31) !important;
            background-color: transparent !important;
            color: rgb(215, 67, 67) !important;
        }
        .btn-outline-red.active,
        .btn-outline-red:active,
        .btn-outline-red:active:focus,
        .btn-outline-red:focus,
        .btn-outline-red:hover {
            border-color: rgb(147, 31, 31) !important;
            background-color: transparent !important;
            color: rgb(215, 67, 67) !important;
        }
        .btn-outline-red:not([disabled]):not(.disabled).active,
        .btn-outline-red:not([disabled]):not(.disabled):active,
        .show > .btn-outline-red.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(147, 31, 31) !important;
        }
        .btn-outline-red:not([disabled]):not(.disabled).active:focus,
        .btn-outline-red:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-red.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-pink {
            color: rgb(232, 230, 227);
            background-color: rgb(161, 16, 65) !important;
        }
        .btn-pink:hover {
            background-color: rgb(147, 15, 60);
            color: rgb(232, 230, 227);
        }
        .btn-pink.focus,
        .btn-pink:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-pink.active,
        .btn-pink:active,
        .btn-pink:focus {
            background-color: rgb(144, 14, 58);
        }
        .btn-pink.dropdown-toggle {
            background-color: rgb(161, 16, 65) !important;
        }
        .btn-pink.dropdown-toggle:focus,
        .btn-pink.dropdown-toggle:hover {
            background-color: rgb(147, 15, 60) !important;
        }
        .btn-pink:not([disabled]):not(.disabled).active,
        .btn-pink:not([disabled]):not(.disabled):active,
        .show > .btn-pink.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(144, 14, 58) !important;
        }
        .btn-pink:not([disabled]):not(.disabled).active:focus,
        .btn-pink:not([disabled]):not(.disabled):active:focus,
        .show > .btn-pink.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .pink-ic {
            color: rgb(237, 75, 130) !important;
        }
        .pink-ic:focus,
        .pink-ic:hover {
            color: rgb(237, 75, 130);
        }
        table.table a.btn.btn-pink {
            color: rgb(232, 230, 227);
        }
        .btn-outline-pink {
            border-color: rgb(150, 15, 60) !important;
            background-color: transparent !important;
            color: rgb(237, 75, 130) !important;
        }
        .btn-outline-pink.active,
        .btn-outline-pink:active,
        .btn-outline-pink:active:focus,
        .btn-outline-pink:focus,
        .btn-outline-pink:hover {
            border-color: rgb(150, 15, 60) !important;
            background-color: transparent !important;
            color: rgb(237, 75, 130) !important;
        }
        .btn-outline-pink:not([disabled]):not(.disabled).active,
        .btn-outline-pink:not([disabled]):not(.disabled):active,
        .show > .btn-outline-pink.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(150, 15, 60) !important;
        }
        .btn-outline-pink:not([disabled]):not(.disabled).active:focus,
        .btn-outline-pink:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-pink.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-purple {
            color: rgb(232, 230, 227);
            background-color: rgb(114, 29, 136) !important;
        }
        .btn-purple:hover {
            background-color: rgb(128, 32, 153);
            color: rgb(232, 230, 227);
        }
        .btn-purple.focus,
        .btn-purple:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-purple.active,
        .btn-purple:active,
        .btn-purple:focus {
            background-color: rgb(58, 14, 69);
        }
        .btn-purple.dropdown-toggle {
            background-color: rgb(114, 29, 136) !important;
        }
        .btn-purple.dropdown-toggle:focus,
        .btn-purple.dropdown-toggle:hover {
            background-color: rgb(128, 32, 153) !important;
        }
        .btn-purple:not([disabled]):not(.disabled).active,
        .btn-purple:not([disabled]):not(.disabled):active,
        .show > .btn-purple.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(58, 14, 69) !important;
        }
        .btn-purple:not([disabled]):not(.disabled).active:focus,
        .btn-purple:not([disabled]):not(.disabled):active:focus,
        .show > .btn-purple.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .purple-ic {
            color: rgb(194, 94, 221) !important;
        }
        .purple-ic:focus,
        .purple-ic:hover {
            color: rgb(194, 94, 221);
        }
        table.table a.btn.btn-purple {
            color: rgb(232, 230, 227);
        }
        .btn-outline-purple {
            border-color: rgb(133, 34, 159) !important;
            background-color: transparent !important;
            color: rgb(194, 94, 221) !important;
        }
        .btn-outline-purple.active,
        .btn-outline-purple:active,
        .btn-outline-purple:active:focus,
        .btn-outline-purple:focus,
        .btn-outline-purple:hover {
            border-color: rgb(133, 34, 159) !important;
            background-color: transparent !important;
            color: rgb(194, 94, 221) !important;
        }
        .btn-outline-purple:not([disabled]):not(.disabled).active,
        .btn-outline-purple:not([disabled]):not(.disabled):active,
        .show > .btn-outline-purple.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(133, 34, 159) !important;
        }
        .btn-outline-purple:not([disabled]):not(.disabled).active:focus,
        .btn-outline-purple:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-purple.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-deep-purple {
            color: rgb(232, 230, 227);
            background-color: rgb(65, 36, 134) !important;
        }
        .btn-deep-purple:hover {
            background-color: rgb(73, 40, 150);
            color: rgb(232, 230, 227);
        }
        .btn-deep-purple.focus,
        .btn-deep-purple:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-deep-purple.active,
        .btn-deep-purple:active,
        .btn-deep-purple:focus {
            background-color: rgb(34, 18, 70);
        }
        .btn-deep-purple.dropdown-toggle {
            background-color: rgb(65, 36, 134) !important;
        }
        .btn-deep-purple.dropdown-toggle:focus,
        .btn-deep-purple.dropdown-toggle:hover {
            background-color: rgb(73, 40, 150) !important;
        }
        .btn-deep-purple:not([disabled]):not(.disabled).active,
        .btn-deep-purple:not([disabled]):not(.disabled):active,
        .show > .btn-deep-purple.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(34, 18, 70) !important;
        }
        .btn-deep-purple:not([disabled]):not(.disabled).active:focus,
        .btn-deep-purple:not([disabled]):not(.disabled):active:focus,
        .show > .btn-deep-purple.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .deep-purple-ic {
            color: rgb(131, 97, 213) !important;
        }
        .deep-purple-ic:focus,
        .deep-purple-ic:hover {
            color: rgb(131, 97, 213);
        }
        table.table a.btn.btn-deep-purple {
            color: rgb(232, 230, 227);
        }
        .btn-outline-deep-purple {
            border-color: rgb(73, 40, 151) !important;
            background-color: transparent !important;
            color: rgb(131, 97, 213) !important;
        }
        .btn-outline-deep-purple.active,
        .btn-outline-deep-purple:active,
        .btn-outline-deep-purple:active:focus,
        .btn-outline-deep-purple:focus,
        .btn-outline-deep-purple:hover {
            border-color: rgb(73, 40, 151) !important;
            background-color: transparent !important;
            color: rgb(131, 97, 213) !important;
        }
        .btn-outline-deep-purple:not([disabled]):not(.disabled).active,
        .btn-outline-deep-purple:not([disabled]):not(.disabled):active,
        .show > .btn-outline-deep-purple.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(73, 40, 151) !important;
        }
        .btn-outline-deep-purple:not([disabled]):not(.disabled).active:focus,
        .btn-outline-deep-purple:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-deep-purple.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-indigo {
            color: rgb(232, 230, 227);
            background-color: rgb(50, 65, 145) !important;
        }
        .btn-indigo:hover {
            background-color: rgb(50, 64, 145);
            color: rgb(232, 230, 227);
        }
        .btn-indigo.focus,
        .btn-indigo:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-indigo.active,
        .btn-indigo:active,
        .btn-indigo:focus {
            background-color: rgb(30, 38, 84);
        }
        .btn-indigo.dropdown-toggle {
            background-color: rgb(50, 65, 145) !important;
        }
        .btn-indigo.dropdown-toggle:focus,
        .btn-indigo.dropdown-toggle:hover {
            background-color: rgb(50, 64, 145) !important;
        }
        .btn-indigo:not([disabled]):not(.disabled).active,
        .btn-indigo:not([disabled]):not(.disabled):active,
        .show > .btn-indigo.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(30, 38, 84) !important;
        }
        .btn-indigo:not([disabled]):not(.disabled).active:focus,
        .btn-indigo:not([disabled]):not(.disabled):active:focus,
        .show > .btn-indigo.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .indigo-ic {
            color: rgb(109, 149, 204) !important;
        }
        .indigo-ic:focus,
        .indigo-ic:hover {
            color: rgb(109, 149, 204);
        }
        table.table a.btn.btn-indigo {
            color: rgb(232, 230, 227);
        }
        .btn-outline-indigo {
            border-color: rgb(47, 60, 135) !important;
            background-color: transparent !important;
            color: rgb(109, 149, 204) !important;
        }
        .btn-outline-indigo.active,
        .btn-outline-indigo:active,
        .btn-outline-indigo:active:focus,
        .btn-outline-indigo:focus,
        .btn-outline-indigo:hover {
            border-color: rgb(47, 60, 135) !important;
            background-color: transparent !important;
            color: rgb(109, 149, 204) !important;
        }
        .btn-outline-indigo:not([disabled]):not(.disabled).active,
        .btn-outline-indigo:not([disabled]):not(.disabled):active,
        .show > .btn-outline-indigo.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(47, 60, 135) !important;
        }
        .btn-outline-indigo:not([disabled]):not(.disabled).active:focus,
        .btn-outline-indigo:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-indigo.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-blue {
            color: rgb(232, 230, 227);
            background-color: rgb(20, 94, 168) !important;
        }
        .btn-blue:hover {
            background-color: rgb(22, 101, 179);
            color: rgb(232, 230, 227);
        }
        .btn-blue.focus,
        .btn-blue:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-blue.active,
        .btn-blue:active,
        .btn-blue:focus {
            background-color: rgb(11, 54, 95);
        }
        .btn-blue.dropdown-toggle {
            background-color: rgb(20, 94, 168) !important;
        }
        .btn-blue.dropdown-toggle:focus,
        .btn-blue.dropdown-toggle:hover {
            background-color: rgb(22, 101, 179) !important;
        }
        .btn-blue:not([disabled]):not(.disabled).active,
        .btn-blue:not([disabled]):not(.disabled):active,
        .show > .btn-blue.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(11, 54, 95) !important;
        }
        .btn-blue:not([disabled]):not(.disabled).active:focus,
        .btn-blue:not([disabled]):not(.disabled):active:focus,
        .show > .btn-blue.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .blue-ic {
            color: rgb(83, 167, 235) !important;
        }
        .blue-ic:focus,
        .blue-ic:hover {
            color: rgb(83, 167, 235);
        }
        table.table a.btn.btn-blue {
            color: rgb(232, 230, 227);
        }
        .btn-outline-blue {
            border-color: rgb(20, 93, 165) !important;
            background-color: transparent !important;
            color: rgb(83, 167, 235) !important;
        }
        .btn-outline-blue.active,
        .btn-outline-blue:active,
        .btn-outline-blue:active:focus,
        .btn-outline-blue:focus,
        .btn-outline-blue:hover {
            border-color: rgb(20, 93, 165) !important;
            background-color: transparent !important;
            color: rgb(83, 167, 235) !important;
        }
        .btn-outline-blue:not([disabled]):not(.disabled).active,
        .btn-outline-blue:not([disabled]):not(.disabled):active,
        .show > .btn-outline-blue.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(20, 93, 165) !important;
        }
        .btn-outline-blue:not([disabled]):not(.disabled).active:focus,
        .btn-outline-blue:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-blue.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-light-blue {
            color: rgb(232, 230, 227);
            background-color: rgb(0, 47, 126) !important;
        }
        .btn-light-blue:hover {
            background-color: rgb(52, 56, 58);
            color: rgb(232, 230, 227);
        }
        .btn-light-blue.focus,
        .btn-light-blue:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-light-blue.active,
        .btn-light-blue:active,
        .btn-light-blue:focus {
            background-color: rgb(0, 70, 187);
        }
        .btn-light-blue.dropdown-toggle {
            background-color: rgb(0, 47, 126) !important;
        }
        .btn-light-blue.dropdown-toggle:focus,
        .btn-light-blue.dropdown-toggle:hover {
            background-color: rgb(52, 56, 58) !important;
        }
        .btn-light-blue:not([disabled]):not(.disabled).active,
        .btn-light-blue:not([disabled]):not(.disabled):active,
        .show > .btn-light-blue.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(0, 70, 187) !important;
        }
        .btn-light-blue:not([disabled]):not(.disabled).active:focus,
        .btn-light-blue:not([disabled]):not(.disabled):active:focus,
        .show > .btn-light-blue.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .light-blue-ic {
            color: rgb(116, 187, 255) !important;
        }
        .light-blue-ic:focus,
        .light-blue-ic:hover {
            color: rgb(116, 187, 255);
        }
        table.table a.btn.btn-light-blue {
            color: rgb(232, 230, 227);
        }
        .btn-outline-light-blue {
            border-color: rgb(0, 52, 140) !important;
            background-color: transparent !important;
            color: rgb(116, 187, 255) !important;
        }
        .btn-outline-light-blue.active,
        .btn-outline-light-blue:active,
        .btn-outline-light-blue:active:focus,
        .btn-outline-light-blue:focus,
        .btn-outline-light-blue:hover {
            border-color: rgb(0, 52, 140) !important;
            background-color: transparent !important;
            color: rgb(116, 187, 255) !important;
        }
        .btn-outline-light-blue:not([disabled]):not(.disabled).active,
        .btn-outline-light-blue:not([disabled]):not(.disabled):active,
        .show > .btn-outline-light-blue.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(0, 52, 140) !important;
        }
        .btn-outline-light-blue:not([disabled]):not(.disabled).active:focus,
        .btn-outline-light-blue:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-light-blue.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-cyan {
            color: rgb(232, 230, 227);
            background-color: rgb(0, 150, 170) !important;
        }
        .btn-cyan:hover {
            background-color: rgb(0, 169, 190);
            color: rgb(232, 230, 227);
        }
        .btn-cyan.focus,
        .btn-cyan:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-cyan.active,
        .btn-cyan:active,
        .btn-cyan:focus {
            background-color: rgb(0, 78, 88);
        }
        .btn-cyan.dropdown-toggle {
            background-color: rgb(0, 150, 170) !important;
        }
        .btn-cyan.dropdown-toggle:focus,
        .btn-cyan.dropdown-toggle:hover {
            background-color: rgb(0, 169, 190) !important;
        }
        .btn-cyan:not([disabled]):not(.disabled).active,
        .btn-cyan:not([disabled]):not(.disabled):active,
        .show > .btn-cyan.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(0, 78, 88) !important;
        }
        .btn-cyan:not([disabled]):not(.disabled).active:focus,
        .btn-cyan:not([disabled]):not(.disabled):active:focus,
        .show > .btn-cyan.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .cyan-ic {
            color: rgb(56, 232, 255) !important;
        }
        .cyan-ic:focus,
        .cyan-ic:hover {
            color: rgb(56, 232, 255);
        }
        table.table a.btn.btn-cyan {
            color: rgb(232, 230, 227);
        }
        .btn-outline-cyan {
            border-color: rgb(0, 170, 191) !important;
            background-color: transparent !important;
            color: rgb(56, 232, 255) !important;
        }
        .btn-outline-cyan.active,
        .btn-outline-cyan:active,
        .btn-outline-cyan:active:focus,
        .btn-outline-cyan:focus,
        .btn-outline-cyan:hover {
            border-color: rgb(0, 170, 191) !important;
            background-color: transparent !important;
            color: rgb(56, 232, 255) !important;
        }
        .btn-outline-cyan:not([disabled]):not(.disabled).active,
        .btn-outline-cyan:not([disabled]):not(.disabled):active,
        .show > .btn-outline-cyan.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(0, 170, 191) !important;
        }
        .btn-outline-cyan:not([disabled]):not(.disabled).active:focus,
        .btn-outline-cyan:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-cyan.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-teal {
            color: rgb(232, 230, 227);
            background-color: rgb(0, 97, 86) !important;
        }
        .btn-teal:hover {
            background-color: rgb(0, 118, 104);
            color: rgb(232, 230, 227);
        }
        .btn-teal.focus,
        .btn-teal:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-teal.active,
        .btn-teal:active,
        .btn-teal:focus {
            background-color: rgb(0, 15, 14);
        }
        .btn-teal.dropdown-toggle {
            background-color: rgb(0, 97, 86) !important;
        }
        .btn-teal.dropdown-toggle:focus,
        .btn-teal.dropdown-toggle:hover {
            background-color: rgb(0, 118, 104) !important;
        }
        .btn-teal:not([disabled]):not(.disabled).active,
        .btn-teal:not([disabled]):not(.disabled):active,
        .show > .btn-teal.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(0, 15, 14) !important;
        }
        .btn-teal:not([disabled]):not(.disabled).active:focus,
        .btn-teal:not([disabled]):not(.disabled):active:focus,
        .show > .btn-teal.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .teal-ic {
            color: rgb(119, 255, 239) !important;
        }
        .teal-ic:focus,
        .teal-ic:hover {
            color: rgb(119, 255, 239);
        }
        table.table a.btn.btn-teal {
            color: rgb(232, 230, 227);
        }
        .btn-outline-teal {
            border-color: rgb(0, 219, 193) !important;
            background-color: transparent !important;
            color: rgb(119, 255, 239) !important;
        }
        .btn-outline-teal.active,
        .btn-outline-teal:active,
        .btn-outline-teal:active:focus,
        .btn-outline-teal:focus,
        .btn-outline-teal:hover {
            border-color: rgb(0, 219, 193) !important;
            background-color: transparent !important;
            color: rgb(119, 255, 239) !important;
        }
        .btn-outline-teal:not([disabled]):not(.disabled).active,
        .btn-outline-teal:not([disabled]):not(.disabled):active,
        .show > .btn-outline-teal.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(0, 219, 193) !important;
        }
        .btn-outline-teal:not([disabled]):not(.disabled).active:focus,
        .btn-outline-teal:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-teal.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-green {
            color: rgb(232, 230, 227);
            background-color: rgb(45, 114, 48) !important;
        }
        .btn-green:hover {
            background-color: rgb(50, 128, 54);
            color: rgb(232, 230, 227);
        }
        .btn-green.focus,
        .btn-green:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-green.active,
        .btn-green:active,
        .btn-green:focus {
            background-color: rgb(22, 55, 23);
        }
        .btn-green.dropdown-toggle {
            background-color: rgb(45, 114, 48) !important;
        }
        .btn-green.dropdown-toggle:focus,
        .btn-green.dropdown-toggle:hover {
            background-color: rgb(50, 128, 54) !important;
        }
        .btn-green:not([disabled]):not(.disabled).active,
        .btn-green:not([disabled]):not(.disabled):active,
        .show > .btn-green.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(22, 55, 23) !important;
        }
        .btn-green:not([disabled]):not(.disabled).active:focus,
        .btn-green:not([disabled]):not(.disabled):active:focus,
        .show > .btn-green.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .green-ic {
            color: rgb(119, 201, 123) !important;
        }
        .green-ic:focus,
        .green-ic:hover {
            color: rgb(119, 201, 123);
        }
        table.table a.btn.btn-green {
            color: rgb(232, 230, 227);
        }
        .btn-outline-green {
            border-color: rgb(55, 140, 59) !important;
            background-color: transparent !important;
            color: rgb(119, 201, 123) !important;
        }
        .btn-outline-green.active,
        .btn-outline-green:active,
        .btn-outline-green:active:focus,
        .btn-outline-green:focus,
        .btn-outline-green:hover {
            border-color: rgb(55, 140, 59) !important;
            background-color: transparent !important;
            color: rgb(119, 201, 123) !important;
        }
        .btn-outline-green:not([disabled]):not(.disabled).active,
        .btn-outline-green:not([disabled]):not(.disabled):active,
        .show > .btn-outline-green.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(55, 140, 59) !important;
        }
        .btn-outline-green:not([disabled]):not(.disabled).active:focus,
        .btn-outline-green:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-green.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-light-green {
            color: rgb(232, 230, 227);
            background-color: rgb(113, 147, 49) !important;
        }
        .btn-light-green:hover {
            background-color: rgb(104, 135, 45);
            color: rgb(232, 230, 227);
        }
        .btn-light-green.focus,
        .btn-light-green:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-light-green.active,
        .btn-light-green:active,
        .btn-light-green:focus {
            background-color: rgb(70, 100, 34);
        }
        .btn-light-green.dropdown-toggle {
            background-color: rgb(113, 147, 49) !important;
        }
        .btn-light-green.dropdown-toggle:focus,
        .btn-light-green.dropdown-toggle:hover {
            background-color: rgb(104, 135, 45) !important;
        }
        .btn-light-green:not([disabled]):not(.disabled).active,
        .btn-light-green:not([disabled]):not(.disabled):active,
        .show > .btn-light-green.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(70, 100, 34) !important;
        }
        .btn-light-green:not([disabled]):not(.disabled).active:focus,
        .btn-light-green:not([disabled]):not(.disabled):active:focus,
        .show > .btn-light-green.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .light-green-ic {
            color: rgb(149, 200, 90) !important;
        }
        .light-green-ic:focus,
        .light-green-ic:hover {
            color: rgb(149, 200, 90);
        }
        table.table a.btn.btn-light-green {
            color: rgb(232, 230, 227);
        }
        .btn-outline-light-green {
            border-color: rgb(90, 131, 43) !important;
            background-color: transparent !important;
            color: rgb(149, 200, 90) !important;
        }
        .btn-outline-light-green.active,
        .btn-outline-light-green:active,
        .btn-outline-light-green:active:focus,
        .btn-outline-light-green:focus,
        .btn-outline-light-green:hover {
            border-color: rgb(90, 131, 43) !important;
            background-color: transparent !important;
            color: rgb(149, 200, 90) !important;
        }
        .btn-outline-light-green:not([disabled]):not(.disabled).active,
        .btn-outline-light-green:not([disabled]):not(.disabled):active,
        .show > .btn-outline-light-green.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(90, 131, 43) !important;
        }
        .btn-outline-light-green:not([disabled]):not(.disabled).active:focus,
        .btn-outline-light-green:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-light-green.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-lime {
            color: rgb(232, 230, 227);
            background-color: rgb(140, 144, 34) !important;
        }
        .btn-lime:hover {
            background-color: rgb(156, 161, 38);
            color: rgb(232, 230, 227);
        }
        .btn-lime.focus,
        .btn-lime:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-lime.active,
        .btn-lime:active,
        .btn-lime:focus {
            background-color: rgb(76, 78, 18);
        }
        .btn-lime.dropdown-toggle {
            background-color: rgb(140, 144, 34) !important;
        }
        .btn-lime.dropdown-toggle:focus,
        .btn-lime.dropdown-toggle:hover {
            background-color: rgb(156, 161, 38) !important;
        }
        .btn-lime:not([disabled]):not(.disabled).active,
        .btn-lime:not([disabled]):not(.disabled):active,
        .show > .btn-lime.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(76, 78, 18) !important;
        }
        .btn-lime:not([disabled]):not(.disabled).active:focus,
        .btn-lime:not([disabled]):not(.disabled):active:focus,
        .show > .btn-lime.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .lime-ic {
            color: rgb(210, 215, 88) !important;
        }
        .lime-ic:focus,
        .lime-ic:hover {
            color: rgb(210, 215, 88);
        }
        table.table a.btn.btn-lime {
            color: rgb(232, 230, 227);
        }
        .btn-outline-lime {
            border-color: rgb(148, 152, 36) !important;
            background-color: transparent !important;
            color: rgb(210, 215, 88) !important;
        }
        .btn-outline-lime.active,
        .btn-outline-lime:active,
        .btn-outline-lime:active:focus,
        .btn-outline-lime:focus,
        .btn-outline-lime:hover {
            border-color: rgb(148, 152, 36) !important;
            background-color: transparent !important;
            color: rgb(210, 215, 88) !important;
        }
        .btn-outline-lime:not([disabled]):not(.disabled).active,
        .btn-outline-lime:not([disabled]):not(.disabled):active,
        .show > .btn-outline-lime.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(148, 152, 36) !important;
        }
        .btn-outline-lime:not([disabled]):not(.disabled).active:focus,
        .btn-outline-lime:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-lime.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-yellow {
            color: rgb(232, 230, 227);
            background-color: rgb(132, 95, 3) !important;
        }
        .btn-yellow:hover {
            background-color: rgb(121, 87, 3);
            color: rgb(232, 230, 227);
        }
        .btn-yellow.focus,
        .btn-yellow:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-yellow.active,
        .btn-yellow:active,
        .btn-yellow:focus {
            background-color: rgb(152, 110, 3);
        }
        .btn-yellow.dropdown-toggle {
            background-color: rgb(132, 95, 3) !important;
        }
        .btn-yellow.dropdown-toggle:focus,
        .btn-yellow.dropdown-toggle:hover {
            background-color: rgb(121, 87, 3) !important;
        }
        .btn-yellow:not([disabled]):not(.disabled).active,
        .btn-yellow:not([disabled]):not(.disabled):active,
        .show > .btn-yellow.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(152, 110, 3) !important;
        }
        .btn-yellow:not([disabled]):not(.disabled).active:focus,
        .btn-yellow:not([disabled]):not(.disabled):active:focus,
        .show > .btn-yellow.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .yellow-ic {
            color: rgb(251, 196, 58) !important;
        }
        .yellow-ic:focus,
        .yellow-ic:hover {
            color: rgb(251, 196, 58);
        }
        table.table a.btn.btn-yellow {
            color: rgb(232, 230, 227);
        }
        .btn-outline-yellow {
            border-color: rgb(163, 117, 3) !important;
            background-color: transparent !important;
            color: rgb(251, 196, 58) !important;
        }
        .btn-outline-yellow.active,
        .btn-outline-yellow:active,
        .btn-outline-yellow:active:focus,
        .btn-outline-yellow:focus,
        .btn-outline-yellow:hover {
            border-color: rgb(163, 117, 3) !important;
            background-color: transparent !important;
            color: rgb(251, 196, 58) !important;
        }
        .btn-outline-yellow:not([disabled]):not(.disabled).active,
        .btn-outline-yellow:not([disabled]):not(.disabled):active,
        .show > .btn-outline-yellow.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(163, 117, 3) !important;
        }
        .btn-outline-yellow:not([disabled]):not(.disabled).active:focus,
        .btn-outline-yellow:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-yellow.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-amber {
            color: rgb(232, 230, 227);
            background-color: rgb(204, 128, 0) !important;
        }
        .btn-amber:hover {
            background-color: rgb(188, 118, 0);
            color: rgb(232, 230, 227);
        }
        .btn-amber.focus,
        .btn-amber:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-amber.active,
        .btn-amber:active,
        .btn-amber:focus {
            background-color: rgb(122, 77, 0);
        }
        .btn-amber.dropdown-toggle {
            background-color: rgb(204, 128, 0) !important;
        }
        .btn-amber.dropdown-toggle:focus,
        .btn-amber.dropdown-toggle:hover {
            background-color: rgb(188, 118, 0) !important;
        }
        .btn-amber:not([disabled]):not(.disabled).active,
        .btn-amber:not([disabled]):not(.disabled):active,
        .show > .btn-amber.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(122, 77, 0) !important;
        }
        .btn-amber:not([disabled]):not(.disabled).active:focus,
        .btn-amber:not([disabled]):not(.disabled):active:focus,
        .show > .btn-amber.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .amber-ic {
            color: rgb(255, 170, 26) !important;
        }
        .amber-ic:focus,
        .amber-ic:hover {
            color: rgb(255, 170, 26);
        }
        table.table a.btn.btn-amber {
            color: rgb(232, 230, 227);
        }
        .btn-outline-amber {
            border-color: rgb(179, 112, 0) !important;
            background-color: transparent !important;
            color: rgb(255, 170, 26) !important;
        }
        .btn-outline-amber.active,
        .btn-outline-amber:active,
        .btn-outline-amber:active:focus,
        .btn-outline-amber:focus,
        .btn-outline-amber:hover {
            border-color: rgb(179, 112, 0) !important;
            background-color: transparent !important;
            color: rgb(255, 170, 26) !important;
        }
        .btn-outline-amber:not([disabled]):not(.disabled).active,
        .btn-outline-amber:not([disabled]):not(.disabled):active,
        .show > .btn-outline-amber.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(179, 112, 0) !important;
        }
        .btn-outline-amber:not([disabled]):not(.disabled).active:focus,
        .btn-outline-amber:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-amber.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-orange {
            color: rgb(232, 230, 227);
            background-color: rgb(196, 99, 0) !important;
        }
        .btn-orange:hover {
            background-color: rgb(194, 98, 0);
            color: rgb(232, 230, 227);
        }
        .btn-orange.focus,
        .btn-orange:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-orange.active,
        .btn-orange:active,
        .btn-orange:focus {
            background-color: rgb(114, 58, 0);
        }
        .btn-orange.dropdown-toggle {
            background-color: rgb(196, 99, 0) !important;
        }
        .btn-orange.dropdown-toggle:focus,
        .btn-orange.dropdown-toggle:hover {
            background-color: rgb(194, 98, 0) !important;
        }
        .btn-orange:not([disabled]):not(.disabled).active,
        .btn-orange:not([disabled]):not(.disabled):active,
        .show > .btn-orange.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(114, 58, 0) !important;
        }
        .btn-orange:not([disabled]):not(.disabled).active:focus,
        .btn-orange:not([disabled]):not(.disabled):active:focus,
        .show > .btn-orange.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .orange-ic {
            color: rgb(255, 145, 33) !important;
        }
        .orange-ic:focus,
        .orange-ic:hover {
            color: rgb(255, 145, 33);
        }
        table.table a.btn.btn-orange {
            color: rgb(232, 230, 227);
        }
        .btn-outline-orange {
            border-color: rgb(182, 92, 0) !important;
            background-color: transparent !important;
            color: rgb(255, 145, 33) !important;
        }
        .btn-outline-orange.active,
        .btn-outline-orange:active,
        .btn-outline-orange:active:focus,
        .btn-outline-orange:focus,
        .btn-outline-orange:hover {
            border-color: rgb(182, 92, 0) !important;
            background-color: transparent !important;
            color: rgb(255, 145, 33) !important;
        }
        .btn-outline-orange:not([disabled]):not(.disabled).active,
        .btn-outline-orange:not([disabled]):not(.disabled):active,
        .show > .btn-outline-orange.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(182, 92, 0) !important;
        }
        .btn-outline-orange:not([disabled]):not(.disabled).active:focus,
        .btn-outline-orange:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-orange.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-deep-orange {
            color: rgb(232, 230, 227);
            background-color: rgb(164, 39, 0) !important;
        }
        .btn-deep-orange:hover {
            background-color: rgb(148, 35, 0);
            color: rgb(232, 230, 227);
        }
        .btn-deep-orange.focus,
        .btn-deep-orange:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-deep-orange.active,
        .btn-deep-orange:active,
        .btn-deep-orange:focus {
            background-color: rgb(176, 42, 0);
        }
        .btn-deep-orange.dropdown-toggle {
            background-color: rgb(164, 39, 0) !important;
        }
        .btn-deep-orange.dropdown-toggle:focus,
        .btn-deep-orange.dropdown-toggle:hover {
            background-color: rgb(148, 35, 0) !important;
        }
        .btn-deep-orange:not([disabled]):not(.disabled).active,
        .btn-deep-orange:not([disabled]):not(.disabled):active,
        .show > .btn-deep-orange.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(176, 42, 0) !important;
        }
        .btn-deep-orange:not([disabled]):not(.disabled).active:focus,
        .btn-deep-orange:not([disabled]):not(.disabled):active:focus,
        .show > .btn-deep-orange.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .deep-orange-ic {
            color: rgb(255, 116, 72) !important;
        }
        .deep-orange-ic:focus,
        .deep-orange-ic:hover {
            color: rgb(255, 116, 72);
        }
        table.table a.btn.btn-deep-orange {
            color: rgb(232, 230, 227);
        }
        .btn-outline-deep-orange {
            border-color: rgb(158, 38, 0) !important;
            background-color: transparent !important;
            color: rgb(255, 116, 72) !important;
        }
        .btn-outline-deep-orange.active,
        .btn-outline-deep-orange:active,
        .btn-outline-deep-orange:active:focus,
        .btn-outline-deep-orange:focus,
        .btn-outline-deep-orange:hover {
            border-color: rgb(158, 38, 0) !important;
            background-color: transparent !important;
            color: rgb(255, 116, 72) !important;
        }
        .btn-outline-deep-orange:not([disabled]):not(.disabled).active,
        .btn-outline-deep-orange:not([disabled]):not(.disabled):active,
        .show > .btn-outline-deep-orange.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(158, 38, 0) !important;
        }
        .btn-outline-deep-orange:not([disabled]):not(.disabled).active:focus,
        .btn-outline-deep-orange:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-deep-orange.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-brown {
            color: rgb(232, 230, 227);
            background-color: rgb(97, 68, 58) !important;
        }
        .btn-brown:hover {
            background-color: rgb(110, 77, 66);
            color: rgb(232, 230, 227);
        }
        .btn-brown.focus,
        .btn-brown:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-brown.active,
        .btn-brown:active,
        .btn-brown:focus {
            background-color: rgb(46, 32, 27);
        }
        .btn-brown.dropdown-toggle {
            background-color: rgb(97, 68, 58) !important;
        }
        .btn-brown.dropdown-toggle:focus,
        .btn-brown.dropdown-toggle:hover {
            background-color: rgb(110, 77, 66) !important;
        }
        .btn-brown:not([disabled]):not(.disabled).active,
        .btn-brown:not([disabled]):not(.disabled):active,
        .show > .btn-brown.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(46, 32, 27) !important;
        }
        .btn-brown:not([disabled]):not(.disabled).active:focus,
        .btn-brown:not([disabled]):not(.disabled):active:focus,
        .show > .btn-brown.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .brown-ic {
            color: rgb(186, 151, 138) !important;
        }
        .brown-ic:focus,
        .brown-ic:hover {
            color: rgb(186, 151, 138);
        }
        table.table a.btn.btn-brown {
            color: rgb(232, 230, 227);
        }
        .btn-outline-brown {
            border-color: rgb(124, 87, 74) !important;
            background-color: transparent !important;
            color: rgb(186, 151, 138) !important;
        }
        .btn-outline-brown.active,
        .btn-outline-brown:active,
        .btn-outline-brown:active:focus,
        .btn-outline-brown:focus,
        .btn-outline-brown:hover {
            border-color: rgb(124, 87, 74) !important;
            background-color: transparent !important;
            color: rgb(186, 151, 138) !important;
        }
        .btn-outline-brown:not([disabled]):not(.disabled).active,
        .btn-outline-brown:not([disabled]):not(.disabled):active,
        .show > .btn-outline-brown.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(124, 87, 74) !important;
        }
        .btn-outline-brown:not([disabled]):not(.disabled).active:focus,
        .btn-outline-brown:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-brown.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-grey {
            color: rgb(232, 230, 227);
            background-color: rgb(73, 79, 82) !important;
        }
        .btn-grey:hover {
            background-color: rgb(83, 90, 93);
            color: rgb(232, 230, 227);
        }
        .btn-grey.focus,
        .btn-grey:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-grey.active,
        .btn-grey:active,
        .btn-grey:focus {
            background-color: rgb(35, 38, 39);
        }
        .btn-grey.dropdown-toggle {
            background-color: rgb(73, 79, 82) !important;
        }
        .btn-grey.dropdown-toggle:focus,
        .btn-grey.dropdown-toggle:hover {
            background-color: rgb(83, 90, 93) !important;
        }
        .btn-grey:not([disabled]):not(.disabled).active,
        .btn-grey:not([disabled]):not(.disabled):active,
        .show > .btn-grey.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(35, 38, 39) !important;
        }
        .btn-grey:not([disabled]):not(.disabled).active:focus,
        .btn-grey:not([disabled]):not(.disabled):active:focus,
        .show > .btn-grey.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .grey-ic {
            color: rgb(171, 163, 152) !important;
        }
        .grey-ic:focus,
        .grey-ic:hover {
            color: rgb(171, 163, 152);
        }
        table.table a.btn.btn-grey {
            color: rgb(232, 230, 227);
        }
        .btn-outline-grey {
            border-color: rgb(108, 100, 89) !important;
            background-color: transparent !important;
            color: rgb(171, 163, 152) !important;
        }
        .btn-outline-grey.active,
        .btn-outline-grey:active,
        .btn-outline-grey:active:focus,
        .btn-outline-grey:focus,
        .btn-outline-grey:hover {
            border-color: rgb(108, 100, 89) !important;
            background-color: transparent !important;
            color: rgb(171, 163, 152) !important;
        }
        .btn-outline-grey:not([disabled]):not(.disabled).active,
        .btn-outline-grey:not([disabled]):not(.disabled):active,
        .show > .btn-outline-grey.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(108, 100, 89) !important;
        }
        .btn-outline-grey:not([disabled]):not(.disabled).active:focus,
        .btn-outline-grey:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-grey.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-blue-grey {
            color: rgb(232, 230, 227);
            background-color: rgb(81, 101, 110) !important;
        }
        .btn-blue-grey:hover {
            background-color: rgb(74, 92, 101);
            color: rgb(232, 230, 227);
        }
        .btn-blue-grey.focus,
        .btn-blue-grey:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-blue-grey.active,
        .btn-blue-grey:active,
        .btn-blue-grey:focus {
            background-color: rgb(59, 73, 80);
        }
        .btn-blue-grey.dropdown-toggle {
            background-color: rgb(81, 101, 110) !important;
        }
        .btn-blue-grey.dropdown-toggle:focus,
        .btn-blue-grey.dropdown-toggle:hover {
            background-color: rgb(74, 92, 101) !important;
        }
        .btn-blue-grey:not([disabled]):not(.disabled).active,
        .btn-blue-grey:not([disabled]):not(.disabled):active,
        .show > .btn-blue-grey.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(59, 73, 80) !important;
        }
        .btn-blue-grey:not([disabled]):not(.disabled).active:focus,
        .btn-blue-grey:not([disabled]):not(.disabled):active:focus,
        .show > .btn-blue-grey.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .blue-grey-ic {
            color: rgb(158, 150, 137) !important;
        }
        .blue-grey-ic:focus,
        .blue-grey-ic:hover {
            color: rgb(158, 150, 137);
        }
        table.table a.btn.btn-blue-grey {
            color: rgb(232, 230, 227);
        }
        .btn-outline-blue-grey {
            border-color: rgb(81, 88, 91) !important;
            background-color: transparent !important;
            color: rgb(158, 150, 137) !important;
        }
        .btn-outline-blue-grey.active,
        .btn-outline-blue-grey:active,
        .btn-outline-blue-grey:active:focus,
        .btn-outline-blue-grey:focus,
        .btn-outline-blue-grey:hover {
            border-color: rgb(81, 88, 91) !important;
            background-color: transparent !important;
            color: rgb(158, 150, 137) !important;
        }
        .btn-outline-blue-grey:not([disabled]):not(.disabled).active,
        .btn-outline-blue-grey:not([disabled]):not(.disabled):active,
        .show > .btn-outline-blue-grey.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(81, 88, 91) !important;
        }
        .btn-outline-blue-grey:not([disabled]):not(.disabled).active:focus,
        .btn-outline-blue-grey:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-blue-grey.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-dark {
            color: rgb(232, 230, 227);
            background-color: rgb(25, 27, 28) !important;
        }
        .btn-dark:hover {
            background-color: rgb(35, 38, 39);
            color: rgb(232, 230, 227);
        }
        .btn-dark.focus,
        .btn-dark:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-dark.active,
        .btn-dark:active,
        .btn-dark:focus {
            background-color: rgb(0, 0, 0);
        }
        .btn-dark.dropdown-toggle {
            background-color: rgb(25, 27, 28) !important;
        }
        .btn-dark.dropdown-toggle:focus,
        .btn-dark.dropdown-toggle:hover {
            background-color: rgb(35, 38, 39) !important;
        }
        .btn-dark:not([disabled]):not(.disabled).active,
        .btn-dark:not([disabled]):not(.disabled):active,
        .show > .btn-dark.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(0, 0, 0) !important;
        }
        .btn-dark:not([disabled]):not(.disabled).active:focus,
        .btn-dark:not([disabled]):not(.disabled):active:focus,
        .show > .btn-dark.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .dark-ic {
            color: rgb(211, 207, 202) !important;
        }
        .dark-ic:focus,
        .dark-ic:hover {
            color: rgb(211, 207, 202);
        }
        table.table a.btn.btn-dark {
            color: rgb(232, 230, 227);
        }
        .btn-outline-dark {
            border-color: rgb(129, 120, 106) !important;
            background-color: transparent !important;
            color: rgb(211, 207, 202) !important;
        }
        .btn-outline-dark.active,
        .btn-outline-dark:active,
        .btn-outline-dark:active:focus,
        .btn-outline-dark:focus,
        .btn-outline-dark:hover {
            border-color: rgb(129, 120, 106) !important;
            background-color: transparent !important;
            color: rgb(211, 207, 202) !important;
        }
        .btn-outline-dark:not([disabled]):not(.disabled).active,
        .btn-outline-dark:not([disabled]):not(.disabled):active,
        .show > .btn-outline-dark.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(129, 120, 106) !important;
        }
        .btn-outline-dark:not([disabled]):not(.disabled).active:focus,
        .btn-outline-dark:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-dark.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-light {
            color: rgb(232, 230, 227);
            background-color: rgb(42, 45, 47) !important;
        }
        .btn-light:hover {
            background-color: rgb(34, 37, 38);
            color: rgb(232, 230, 227);
        }
        .btn-light.focus,
        .btn-light:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-light.active,
        .btn-light:active,
        .btn-light:focus {
            background-color: rgb(70, 76, 79);
        }
        .btn-light.dropdown-toggle {
            background-color: rgb(42, 45, 47) !important;
        }
        .btn-light.dropdown-toggle:focus,
        .btn-light.dropdown-toggle:hover {
            background-color: rgb(34, 37, 38) !important;
        }
        .btn-light:not([disabled]):not(.disabled).active,
        .btn-light:not([disabled]):not(.disabled):active,
        .show > .btn-light.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(70, 76, 79) !important;
        }
        .btn-light:not([disabled]):not(.disabled).active:focus,
        .btn-light:not([disabled]):not(.disabled):active:focus,
        .show > .btn-light.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .light-ic {
            color: rgb(212, 209, 203) !important;
        }
        .light-ic:focus,
        .light-ic:hover {
            color: rgb(212, 209, 203);
        }
        table.table a.btn.btn-light {
            color: rgb(232, 230, 227);
        }
        .btn-outline-light {
            border-color: rgb(57, 61, 64) !important;
            background-color: transparent !important;
            color: rgb(212, 209, 203) !important;
        }
        .btn-outline-light.active,
        .btn-outline-light:active,
        .btn-outline-light:active:focus,
        .btn-outline-light:focus,
        .btn-outline-light:hover {
            border-color: rgb(57, 61, 64) !important;
            background-color: transparent !important;
            color: rgb(212, 209, 203) !important;
        }
        .btn-outline-light:not([disabled]):not(.disabled).active,
        .btn-outline-light:not([disabled]):not(.disabled):active,
        .show > .btn-outline-light.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(57, 61, 64) !important;
        }
        .btn-outline-light:not([disabled]):not(.disabled).active:focus,
        .btn-outline-light:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-light.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-white {
            color: rgb(232, 230, 227);
            background-color: rgb(24, 26, 27) !important;
        }
        .btn-white:hover {
            background-color: rgb(24, 26, 27);
            color: rgb(232, 230, 227);
        }
        .btn-white.focus,
        .btn-white:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-white.active,
        .btn-white:active,
        .btn-white:focus {
            background-color: rgb(53, 57, 59);
        }
        .btn-white.dropdown-toggle,
        .btn-white.dropdown-toggle:focus,
        .btn-white.dropdown-toggle:hover {
            background-color: rgb(24, 26, 27) !important;
        }
        .btn-white:not([disabled]):not(.disabled).active,
        .btn-white:not([disabled]):not(.disabled):active,
        .show > .btn-white.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(53, 57, 59) !important;
        }
        .btn-white:not([disabled]):not(.disabled).active:focus,
        .btn-white:not([disabled]):not(.disabled):active:focus,
        .show > .btn-white.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .white-ic {
            color: rgb(232, 230, 227) !important;
        }
        .white-ic:focus,
        .white-ic:hover {
            color: rgb(232, 230, 227);
        }
        a.btn:not([href]):not([tabindex]),
        a.btn:not([href]):not([tabindex]):focus,
        a.btn:not([href]):not([tabindex]):hover,
        table.table a.btn.btn-white {
            color: rgb(232, 230, 227);
        }
        .btn-outline-white {
            border-color: rgb(48, 52, 54) !important;
            background-color: transparent !important;
            color: rgb(232, 230, 227) !important;
        }
        .btn-outline-white.active,
        .btn-outline-white:active,
        .btn-outline-white:active:focus,
        .btn-outline-white:focus,
        .btn-outline-white:hover {
            border-color: rgb(48, 52, 54) !important;
            background-color: transparent !important;
            color: rgb(232, 230, 227) !important;
        }
        .btn-outline-white:not([disabled]):not(.disabled).active,
        .btn-outline-white:not([disabled]):not(.disabled):active,
        .show > .btn-outline-white.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(48, 52, 54) !important;
        }
        .btn-outline-white:not([disabled]):not(.disabled).active:focus,
        .btn-outline-white:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-white.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-black {
            color: rgb(232, 230, 227);
            background-color: rgb(0, 0, 0) !important;
        }
        .btn-black:hover {
            background-color: rgb(10, 11, 11);
            color: rgb(232, 230, 227);
        }
        .btn-black.focus,
        .btn-black:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-black.active,
        .btn-black:active,
        .btn-black:focus {
            background-color: rgb(0, 0, 0);
        }
        .btn-black.dropdown-toggle {
            background-color: rgb(0, 0, 0) !important;
        }
        .btn-black.dropdown-toggle:focus,
        .btn-black.dropdown-toggle:hover {
            background-color: rgb(10, 11, 11) !important;
        }
        .btn-black:not([disabled]):not(.disabled).active,
        .btn-black:not([disabled]):not(.disabled):active,
        .show > .btn-black.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(0, 0, 0) !important;
        }
        .btn-black:not([disabled]):not(.disabled).active:focus,
        .btn-black:not([disabled]):not(.disabled):active:focus,
        .show > .btn-black.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .black-ic {
            color: rgb(232, 230, 227) !important;
        }
        .black-ic:focus,
        .black-ic:hover {
            color: rgb(232, 230, 227);
        }
        table.table a.btn.btn-black {
            color: rgb(232, 230, 227);
        }
        .btn-outline-black {
            border-color: rgb(140, 130, 115) !important;
            background-color: transparent !important;
            color: rgb(232, 230, 227) !important;
        }
        .btn-outline-black.active,
        .btn-outline-black:active,
        .btn-outline-black:active:focus,
        .btn-outline-black:focus,
        .btn-outline-black:hover {
            border-color: rgb(140, 130, 115) !important;
            background-color: transparent !important;
            color: rgb(232, 230, 227) !important;
        }
        .btn-outline-black:not([disabled]):not(.disabled).active,
        .btn-outline-black:not([disabled]):not(.disabled):active,
        .show > .btn-outline-black.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(140, 130, 115) !important;
        }
        .btn-outline-black:not([disabled]):not(.disabled).active:focus,
        .btn-outline-black:not([disabled]):not(.disabled):active:focus,
        .show > .btn-outline-black.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .card,
        .navbar {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
        }
        .btn-warning:not(:disabled):not(.disabled).active,
        .btn-warning:not(:disabled):not(.disabled):active,
        .show > .btn-warning.dropdown-toggle {
            color: rgb(232, 230, 227);
        }
        .card {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px; border-color: initial;
        }
        .card[class*="border"] {
            border-color: rgb(75, 82, 85);
            box-shadow: none;
        }
        .card .card-body .card-text {
            color: rgb(159, 151, 138);
        }
        .md-form.input-group .input-group-text {
            background-color: rgb(42, 45, 47);
        }
        .md-form.input-group .input-group-text.md-addon {
            border-color: initial;
            background-color: transparent;
        }
        .navbar {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
        }
        .navbar .breadcrumb {
            background-color: inherit;
        }
        .navbar .breadcrumb .breadcrumb-item {
            color: rgb(232, 230, 227);
        }
        .navbar .breadcrumb .breadcrumb-item.active,
        .navbar .breadcrumb .breadcrumb-item::before {
            color: rgba(232, 230, 227, 0.65);
        }
        .navbar .navbar-toggler {
            outline-color: initial;
        }
        .navbar .dropdown-menu a {
            color: rgb(232, 230, 227);
        }
        .navbar.navbar-light .navbar-nav .nav-item .nav-link.disbled,
        .navbar.navbar-light .navbar-nav .nav-item .nav-link.disbled:hover {
            color: rgba(232, 230, 227, 0.3);
        }
        .navbar.navbar-light .navbar-toggler-icon {
            background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMzIgMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggc3Ryb2tlPSdyZ2JhKDAsIDAsIDAsIDAuOSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDhoMjRNNCAxNmgyNE00IDI0aDI0Jy8+PC9zdmc+");
        }
        .navbar.navbar-light .breadcrumb .nav-item .nav-link,
        .navbar.navbar-light .navbar-nav .nav-item .nav-link {
            color: rgb(232, 230, 227);
        }
        .navbar.navbar-light .breadcrumb .nav-item .nav-link:hover,
        .navbar.navbar-light .navbar-nav .nav-item .nav-link:hover {
            color: rgba(232, 230, 227, 0.7);
        }
        .navbar.navbar-light .breadcrumb .nav-item.active > .nav-link,
        .navbar.navbar-light .navbar-nav .nav-item.active > .nav-link {
            background-color: rgba(0, 0, 0, 0.1);
        }
        .navbar.navbar-light .breadcrumb .nav-item.active > .nav-link:hover,
        .navbar.navbar-light .navbar-nav .nav-item.active > .nav-link:hover,
        .navbar.navbar-light .navbar-toggler {
            color: rgb(232, 230, 227);
        }
        .navbar.navbar-light form .md-form input {
            border-bottom-color: rgb(140, 130, 115);
        }
        .navbar.navbar-light form .md-form input:focus:not([readonly]) {
            border-color: rgb(9, 63, 153);
        }
        .navbar.navbar-light form .md-form .form-control {
            color: rgb(232, 230, 227);
        }
        .navbar.navbar-light form .md-form .form-control::-webkit-input-placeholder {
            color: rgb(232, 230, 227);
        }
        .navbar.navbar-light form .md-form .form-control::placeholder {
            color: rgb(232, 230, 227);
        }
        .navbar.navbar-dark .navbar-nav .nav-item .nav-link.disbled,
        .navbar.navbar-dark .navbar-nav .nav-item .nav-link.disbled:hover {
            color: rgba(232, 230, 227, 0.25);
        }
        .navbar.navbar-dark .navbar-toggler-icon {
            background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PScwIDAgMzIgMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+PHBhdGggc3Ryb2tlPSdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDhoMjRNNCAxNmgyNE00IDI0aDI0Jy8+PC9zdmc+");
        }
        .navbar.navbar-dark .breadcrumb .nav-item .nav-link,
        .navbar.navbar-dark .navbar-nav .nav-item .nav-link {
            color: rgb(232, 230, 227);
        }
        .navbar.navbar-dark .breadcrumb .nav-item .nav-link:hover,
        .navbar.navbar-dark .navbar-nav .nav-item .nav-link:hover {
            color: rgba(232, 230, 227, 0.75);
        }
        .navbar.navbar-dark .breadcrumb .nav-item.active > .nav-link,
        .navbar.navbar-dark .navbar-nav .nav-item.active > .nav-link {
            background-color: rgba(24, 26, 27, 0.1);
        }
        .navbar.navbar-dark .breadcrumb .nav-item.active > .nav-link:hover,
        .navbar.navbar-dark .navbar-nav .nav-item.active > .nav-link:hover,
        .navbar.navbar-dark .navbar-toggler {
            color: rgb(232, 230, 227);
        }
        .navbar.navbar-dark form .md-form input {
            border-bottom-color: rgb(48, 52, 54);
        }
        .navbar.navbar-dark form .md-form input:focus:not([readonly]) {
            border-color: rgb(9, 63, 153);
        }
        .navbar.navbar-dark form .md-form .form-control {
            color: rgb(232, 230, 227);
        }
        .navbar.navbar-dark form .md-form .form-control::-webkit-input-placeholder {
            color: rgb(232, 230, 227);
        }
        .navbar.navbar-dark form .md-form .form-control::placeholder {
            color: rgb(232, 230, 227);
        }
        .pagination .page-item.active .page-link {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
            background-color: rgb(9, 67, 162);
            color: rgb(232, 230, 227);
        }
        .pagination .page-item.active .page-link:hover {
            background-color: rgb(9, 67, 162);
        }
        .pagination .page-item.disabled .page-link {
            color: rgb(161, 152, 140);
        }
        .pagination .page-item .page-link {
            outline-color: initial;
            border-color: initial;
            background-color: transparent;
            color: rgb(209, 205, 199);
        }
        .badge,
        .badge-danger,
        .badge-dark,
        .badge-default,
        .badge-info,
        .badge-primary,
        .badge-secondary,
        .badge-success,
        .badge-warning {
            color: rgb(232, 230, 227) !important;
        }
        .pagination .page-item .page-link:hover {
            background-color: rgb(34, 36, 38);
        }
        .pagination .page-item .page-link:focus {
            background-color: transparent;
            box-shadow: none;
        }
        .modal-dialog.modal-notify.modal-primary .badge,
        .modal-dialog.modal-notify.modal-primary .modal-header,
        .pagination.pg-blue .page-item.active .page-link,
        .pagination.pg-blue .page-item.active .page-link:hover {
            background-color: rgb(9, 67, 162);
        }
        .pagination.pg-red .page-item.active .page-link,
        .pagination.pg-red .page-item.active .page-link:hover {
            background-color: rgb(172, 0, 15);
        }
        .pagination.pg-teal .page-item.active .page-link,
        .pagination.pg-teal .page-item.active .page-link:hover {
            background-color: rgb(34, 150, 138);
        }
        .pagination.pg-dark-grey .page-item.active .page-link,
        .pagination.pg-dark-grey .page-item.active .page-link:hover {
            background-color: rgb(44, 57, 63);
        }
        .pagination.pg-dark .page-item.active .page-link,
        .pagination.pg-dark .page-item.active .page-link:hover {
            background-color: rgb(35, 38, 39);
        }
        .pagination.pg-blue-grey .page-item.active .page-link,
        .pagination.pg-blue-grey .page-item.active .page-link:hover {
            background-color: rgb(50, 91, 124);
        }
        .pagination.pg-amber .page-item.active .page-link,
        .pagination.pg-amber .page-item.active .page-link:hover {
            background-color: rgb(204, 89, 0);
        }
        .pagination.pg-purple .page-item.active .page-link,
        .pagination.pg-purple .page-item.active .page-link:hover {
            background-color: rgb(75, 42, 142);
        }
        .badge {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
        }
        .badge-primary {
            background-color: rgb(9, 67, 162) !important;
        }
        .badge-danger {
            background-color: rgb(172, 0, 15) !important;
        }
        .badge-warning {
            background-color: rgb(173, 116, 0) !important;
        }
        .badge-success {
            background-color: rgb(0, 160, 65) !important;
        }
        .badge-info {
            background-color: rgb(21, 128, 168) !important;
        }
        .badge-default {
            background-color: rgb(34, 150, 138) !important;
        }
        .badge-secondary {
            background-color: rgb(101, 43, 130) !important;
        }
        .badge-dark {
            background-color: rgb(25, 27, 28) !important;
        }
        .badge-light {
            background-color: rgb(42, 45, 47) !important;
            color: rgb(232, 230, 227) !important;
        }
        .modal-dialog .modal-content {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            border-color: initial;
        }
        .modal-dialog.cascading-modal .close {
            text-shadow: none;
            color: rgb(232, 230, 227);
            outline-color: initial;
        }
        .modal-dialog.cascading-modal .modal-header {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            border-color: initial;
        }
        .modal-dialog.cascading-modal .modal-c-tabs .md-tabs {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
        }
        .modal-dialog.cascading-modal .modal-body,
        .modal-dialog.cascading-modal .modal-footer {
            color: rgb(171, 163, 152);
        }
        .modal-dialog.cascading-modal.modal-avatar .modal-header {
            box-shadow: none;
        }
        .modal-dialog.cascading-modal.modal-avatar .modal-header img {
            box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 17px 0px,
            rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;
        }
        .media .media-left img,
        .modal-dialog.modal-notify .modal-header {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
        }
        .modal-dialog.modal-notify .heading {
            color: rgb(232, 230, 227);
        }
        .modal-dialog.modal-notify .modal-header {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
            border-color: initial;
        }
        .modal-dialog.modal-notify .modal-body {
            color: rgb(171, 163, 152);
        }
        .modal-dialog.modal-notify.modal-primary .fab,
        .modal-dialog.modal-notify.modal-primary .far,
        .modal-dialog.modal-notify.modal-primary .fas {
            color: rgb(75, 160, 244);
        }
        .modal-dialog.modal-notify.modal-danger .badge,
        .modal-dialog.modal-notify.modal-danger .modal-header {
            background-color: rgb(172, 0, 15);
        }
        .modal-dialog.modal-notify.modal-primary .btn .fab,
        .modal-dialog.modal-notify.modal-primary .btn .far,
        .modal-dialog.modal-notify.modal-primary .btn .fas {
            color: rgb(232, 230, 227);
        }
        .modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fab,
        .modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .far,
        .modal-dialog.modal-notify.modal-primary .btn.btn-outline-primary .fas {
            color: rgb(75, 160, 244);
        }
        .modal-dialog.modal-notify.modal-danger .fab,
        .modal-dialog.modal-notify.modal-danger .far,
        .modal-dialog.modal-notify.modal-danger .fas {
            color: rgb(255, 63, 80);
        }
        .modal-dialog.modal-notify.modal-warning .badge,
        .modal-dialog.modal-notify.modal-warning .modal-header {
            background-color: rgb(173, 116, 0);
        }
        .modal-dialog.modal-notify.modal-danger .btn .fab,
        .modal-dialog.modal-notify.modal-danger .btn .far,
        .modal-dialog.modal-notify.modal-danger .btn .fas {
            color: rgb(232, 230, 227);
        }
        .modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fab,
        .modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .far,
        .modal-dialog.modal-notify.modal-danger .btn.btn-outline-danger .fas {
            color: rgb(255, 63, 80);
        }
        .modal-dialog.modal-notify.modal-warning .fab,
        .modal-dialog.modal-notify.modal-warning .far,
        .modal-dialog.modal-notify.modal-warning .fas {
            color: rgb(255, 190, 61);
        }
        .modal-dialog.modal-notify.modal-success .badge,
        .modal-dialog.modal-notify.modal-success .modal-header {
            background-color: rgb(0, 160, 65);
        }
        .modal-dialog.modal-notify.modal-warning .btn .fab,
        .modal-dialog.modal-notify.modal-warning .btn .far,
        .modal-dialog.modal-notify.modal-warning .btn .fas {
            color: rgb(232, 230, 227);
        }
        .modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fab,
        .modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .far,
        .modal-dialog.modal-notify.modal-warning .btn.btn-outline-warning .fas {
            color: rgb(255, 190, 61);
        }
        .modal-dialog.modal-notify.modal-success .fab,
        .modal-dialog.modal-notify.modal-success .far,
        .modal-dialog.modal-notify.modal-success .fas {
            color: rgb(64, 255, 141);
        }
        .modal-dialog.modal-notify.modal-info .badge,
        .modal-dialog.modal-notify.modal-info .modal-header {
            background-color: rgb(21, 128, 168);
        }
        .modal-dialog.modal-notify.modal-success .btn .fab,
        .modal-dialog.modal-notify.modal-success .btn .far,
        .modal-dialog.modal-notify.modal-success .btn .fas {
            color: rgb(232, 230, 227);
        }
        .modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fab,
        .modal-dialog.modal-notify.modal-success .btn.btn-outline-success .far,
        .modal-dialog.modal-notify.modal-success .btn.btn-outline-success .fas {
            color: rgb(64, 255, 141);
        }
        .modal-dialog.modal-notify.modal-info .fab,
        .modal-dialog.modal-notify.modal-info .far,
        .modal-dialog.modal-notify.modal-info .fas {
            color: rgb(67, 187, 231);
        }
        .modal-dialog.modal-notify.modal-info .btn .fab,
        .modal-dialog.modal-notify.modal-info .btn .far,
        .modal-dialog.modal-notify.modal-info .btn .fas {
            color: rgb(232, 230, 227);
        }
        .modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fab,
        .modal-dialog.modal-notify.modal-info .btn.btn-outline-info .far,
        .modal-dialog.modal-notify.modal-info .btn.btn-outline-info .fas {
            color: rgb(67, 187, 231);
        }
        .carousel .carousel-control-prev-icon {
            background-image: url("https://www.fencingtimelive.com/img/svg/arrow_left.svg");
        }
        .carousel .carousel-control-next-icon {
            background-image: url("https://www.fencingtimelive.com/img/svg/arrow_right.svg");
        }
        .md-form input[type="date"], .md-form input[type="datetime-local"], .md-form input[type="email"], .md-form input[type="number"], .md-form input[type="password"], .md-form input[type="search-md"], .md-form input[type="search"], .md-form input[type="tel"], .md-form input[type="text"], .md-form input[type="time"], .md-form input[type="url"],
        .md-form textarea.md-textarea {
            outline-color: initial;
            box-shadow: none;
            border-top-color: initial;
            border-right-color: initial;
            border-left-color: initial;
            border-bottom-color: rgb(60, 65, 68); background-color: transparent;
        }
        .md-form input[type="date"]:focus:not([readonly]), .md-form input[type="datetime-local"]:focus:not([readonly]), .md-form input[type="email"]:focus:not([readonly]), .md-form input[type="number"]:focus:not([readonly]), .md-form input[type="password"]:focus:not([readonly]), .md-form input[type="search-md"]:focus:not([readonly]), .md-form input[type="search"]:focus:not([readonly]), .md-form input[type="tel"]:focus:not([readonly]), .md-form input[type="text"]:focus:not([readonly]), .md-form input[type="time"]:focus:not([readonly]), .md-form input[type="url"]:focus:not([readonly]),
        .md-form textarea.md-textarea:focus:not([readonly]) {
            box-shadow: rgb(9, 67, 162) 0px 1px 0px 0px;
            border-bottom-color: rgb(9, 63, 153);
        }
        .md-form input[type="date"]:focus:not([readonly]) + label, .md-form input[type="datetime-local"]:focus:not([readonly]) + label, .md-form input[type="email"]:focus:not([readonly]) + label, .md-form input[type="number"]:focus:not([readonly]) + label, .md-form input[type="password"]:focus:not([readonly]) + label, .md-form input[type="search-md"]:focus:not([readonly]) + label, .md-form input[type="search"]:focus:not([readonly]) + label, .md-form input[type="tel"]:focus:not([readonly]) + label, .md-form input[type="text"]:focus:not([readonly]) + label, .md-form input[type="time"]:focus:not([readonly]) + label, .md-form input[type="url"]:focus:not([readonly]) + label,
        .md-form textarea.md-textarea:focus:not([readonly]) + label {
            color: rgb(75, 160, 244);
        }
        .md-form input[type="date"].valid, .md-form input[type="date"]:focus.valid, .md-form input[type="datetime-local"].valid, .md-form input[type="datetime-local"]:focus.valid, .md-form input[type="email"].valid, .md-form input[type="email"]:focus.valid, .md-form input[type="number"].valid, .md-form input[type="number"]:focus.valid, .md-form input[type="password"].valid, .md-form input[type="password"]:focus.valid, .md-form input[type="search-md"].valid, .md-form input[type="search-md"]:focus.valid, .md-form input[type="search"].valid, .md-form input[type="search"]:focus.valid, .md-form input[type="tel"].valid, .md-form input[type="tel"]:focus.valid, .md-form input[type="text"].valid, .md-form input[type="text"]:focus.valid, .md-form input[type="time"].valid, .md-form input[type="time"]:focus.valid, .md-form input[type="url"].valid, .md-form input[type="url"]:focus.valid,
        .md-form textarea.md-textarea.valid,
        .md-form textarea.md-textarea:focus.valid {
            border-bottom-color: rgb(0, 195, 79);
            box-shadow: rgb(0, 160, 65) 0px 1px 0px 0px;
        }
        .md-form input[type="date"].valid + label::after, .md-form input[type="date"]:focus.valid + label::after, .md-form input[type="datetime-local"].valid + label::after, .md-form input[type="datetime-local"]:focus.valid + label::after, .md-form input[type="email"].valid + label::after, .md-form input[type="email"]:focus.valid + label::after, .md-form input[type="number"].valid + label::after, .md-form input[type="number"]:focus.valid + label::after, .md-form input[type="password"].valid + label::after, .md-form input[type="password"]:focus.valid + label::after, .md-form input[type="search-md"].valid + label::after, .md-form input[type="search-md"]:focus.valid + label::after, .md-form input[type="search"].valid + label::after, .md-form input[type="search"]:focus.valid + label::after, .md-form input[type="tel"].valid + label::after, .md-form input[type="tel"]:focus.valid + label::after, .md-form input[type="text"].valid + label::after, .md-form input[type="text"]:focus.valid + label::after, .md-form input[type="time"].valid + label::after, .md-form input[type="time"]:focus.valid + label::after, .md-form input[type="url"].valid + label::after, .md-form input[type="url"]:focus.valid + label::after,
        .md-form textarea.md-textarea.valid + label::after,
        .md-form textarea.md-textarea:focus.valid + label::after {
            color: rgb(64, 255, 141);
        }
        .md-form input[type="date"].invalid, .md-form input[type="date"]:focus.invalid, .md-form input[type="datetime-local"].invalid, .md-form input[type="datetime-local"]:focus.invalid, .md-form input[type="email"].invalid, .md-form input[type="email"]:focus.invalid, .md-form input[type="number"].invalid, .md-form input[type="number"]:focus.invalid, .md-form input[type="password"].invalid, .md-form input[type="password"]:focus.invalid, .md-form input[type="search-md"].invalid, .md-form input[type="search-md"]:focus.invalid, .md-form input[type="search"].invalid, .md-form input[type="search"]:focus.invalid, .md-form input[type="tel"].invalid, .md-form input[type="tel"]:focus.invalid, .md-form input[type="text"].invalid, .md-form input[type="text"]:focus.invalid, .md-form input[type="time"].invalid, .md-form input[type="time"]:focus.invalid, .md-form input[type="url"].invalid, .md-form input[type="url"]:focus.invalid,
        .md-form textarea.md-textarea.invalid,
        .md-form textarea.md-textarea:focus.invalid {
            border-bottom-color: rgb(157, 19, 9);
            box-shadow: rgb(169, 20, 9) 0px 1px 0px 0px;
        }
        .md-form input[type="date"].invalid + label::after, .md-form input[type="date"]:focus.invalid + label::after, .md-form input[type="datetime-local"].invalid + label::after, .md-form input[type="datetime-local"]:focus.invalid + label::after, .md-form input[type="email"].invalid + label::after, .md-form input[type="email"]:focus.invalid + label::after, .md-form input[type="number"].invalid + label::after, .md-form input[type="number"]:focus.invalid + label::after, .md-form input[type="password"].invalid + label::after, .md-form input[type="password"]:focus.invalid + label::after, .md-form input[type="search-md"].invalid + label::after, .md-form input[type="search-md"]:focus.invalid + label::after, .md-form input[type="search"].invalid + label::after, .md-form input[type="search"]:focus.invalid + label::after, .md-form input[type="tel"].invalid + label::after, .md-form input[type="tel"]:focus.invalid + label::after, .md-form input[type="text"].invalid + label::after, .md-form input[type="text"]:focus.invalid + label::after, .md-form input[type="time"].invalid + label::after, .md-form input[type="time"]:focus.invalid + label::after, .md-form input[type="url"].invalid + label::after, .md-form input[type="url"]:focus.invalid + label::after,
        .md-form textarea.md-textarea.invalid + label::after,
        .md-form textarea.md-textarea:focus.invalid + label::after {
            color: rgb(245, 78, 66);
        }
        .md-form .was-validated input[type="text"]:valid + label {
            color: rgb(64, 255, 141) !important;
        }
        .md-form .was-validated input[type="text"]:invalid + label {
            color: rgb(245, 78, 66) !important;
        }
        .md-form .was-validated .form-control:valid:focus {
            box-shadow: rgb(0, 160, 65) 0px 1px 0px 0px !important;
        }
        .md-form .was-validated .form-control:valid {
            border-color: rgb(0, 195, 79) !important;
        }
        .md-form .was-validated .form-control:invalid:focus {
            box-shadow: rgb(169, 20, 9) 0px 1px 0px 0px !important;
        }
        .md-form .was-validated .form-control:invalid {
            border-color: rgb(157, 19, 9) !important;
        }
        .md-form .form-control {
            background-color: transparent;
        }
        .md-form .form-control:focus {
            box-shadow: none;
        }
        .md-form .form-control:disabled,
        .md-form .form-control[readonly] {
            border-bottom-color: rgb(67, 72, 75);
            background-color: transparent;
        }
        .md-form .form-control.is-valid {
            border-color: rgb(0, 195, 79);
        }
        .md-form .form-control.is-valid:focus {
            border-color: rgb(0, 195, 79) !important;
            box-shadow: rgb(0, 160, 65) 0px 1px 0px 0px !important;
        }
        .md-form .form-control.is-invalid {
            border-color: rgb(157, 19, 9);
        }
        .md-form .form-control.is-invalid:focus {
            box-shadow: rgb(169, 20, 9) 0px 1px 0px 0px !important;
            border-color: rgb(157, 19, 9) !important;
        }
        .md-form label {
            color: rgb(158, 150, 137);
        }
        .md-form .prefix.active, .md-form textarea ~ label.active, .md-form.md-outline input[type="date"]:focus:not([readonly]) + label, .md-form.md-outline input[type="datetime-local"]:focus:not([readonly]) + label, .md-form.md-outline input[type="email"]:focus:not([readonly]) + label, .md-form.md-outline input[type="number"]:focus:not([readonly]) + label, .md-form.md-outline input[type="password"]:focus:not([readonly]) + label, .md-form.md-outline input[type="search-md"]:focus:not([readonly]) + label, .md-form.md-outline input[type="search"]:focus:not([readonly]) + label, .md-form.md-outline input[type="tel"]:focus:not([readonly]) + label, .md-form.md-outline input[type="text"]:focus:not([readonly]) + label, .md-form.md-outline input[type="time"]:focus:not([readonly]) + label, .md-form.md-outline input[type="url"]:focus:not([readonly]) + label,
        .md-form.md-outline textarea.md-textarea:focus:not([readonly]) + label {
            color: rgb(75, 160, 244);
        }
        .md-form.md-outline input[type="date"], .md-form.md-outline input[type="datetime-local"], .md-form.md-outline input[type="email"], .md-form.md-outline input[type="number"], .md-form.md-outline input[type="password"], .md-form.md-outline input[type="search-md"], .md-form.md-outline input[type="search"], .md-form.md-outline input[type="tel"], .md-form.md-outline input[type="text"], .md-form.md-outline input[type="time"], .md-form.md-outline input[type="url"],
        .md-form.md-outline textarea.md-textarea {
            outline-color: initial;
            box-shadow: none;
            border-color: rgb(58, 62, 65); background-color: transparent;
        }
        .md-form.md-outline input[type="date"]:focus:not([readonly]), .md-form.md-outline input[type="datetime-local"]:focus:not([readonly]), .md-form.md-outline input[type="email"]:focus:not([readonly]), .md-form.md-outline input[type="number"]:focus:not([readonly]), .md-form.md-outline input[type="password"]:focus:not([readonly]), .md-form.md-outline input[type="search-md"]:focus:not([readonly]), .md-form.md-outline input[type="search"]:focus:not([readonly]), .md-form.md-outline input[type="tel"]:focus:not([readonly]), .md-form.md-outline input[type="text"]:focus:not([readonly]), .md-form.md-outline input[type="time"]:focus:not([readonly]), .md-form.md-outline input[type="url"]:focus:not([readonly]),
        .md-form.md-outline textarea.md-textarea:focus:not([readonly]) {
            border-color: rgb(9, 63, 153);
            box-shadow: rgb(9, 67, 162) 0px 0px 0px 1px inset;
        }
        .md-form.md-outline input[type="date"].valid, .md-form.md-outline input[type="date"]:focus.valid, .md-form.md-outline input[type="datetime-local"].valid, .md-form.md-outline input[type="datetime-local"]:focus.valid, .md-form.md-outline input[type="email"].valid, .md-form.md-outline input[type="email"]:focus.valid, .md-form.md-outline input[type="number"].valid, .md-form.md-outline input[type="number"]:focus.valid, .md-form.md-outline input[type="password"].valid, .md-form.md-outline input[type="password"]:focus.valid, .md-form.md-outline input[type="search-md"].valid, .md-form.md-outline input[type="search-md"]:focus.valid, .md-form.md-outline input[type="search"].valid, .md-form.md-outline input[type="search"]:focus.valid, .md-form.md-outline input[type="tel"].valid, .md-form.md-outline input[type="tel"]:focus.valid, .md-form.md-outline input[type="text"].valid, .md-form.md-outline input[type="text"]:focus.valid, .md-form.md-outline input[type="time"].valid, .md-form.md-outline input[type="time"]:focus.valid, .md-form.md-outline input[type="url"].valid, .md-form.md-outline input[type="url"]:focus.valid,
        .md-form.md-outline textarea.md-textarea.valid,
        .md-form.md-outline textarea.md-textarea:focus.valid {
            border-color: rgb(0, 195, 79);
            box-shadow: rgb(0, 160, 65) 0px 0px 0px 1px inset;
        }
        .md-form.md-outline input[type="date"].valid + label::after, .md-form.md-outline input[type="date"]:focus.valid + label::after, .md-form.md-outline input[type="date"]:focus:not([readonly]).valid + label, .md-form.md-outline input[type="datetime-local"].valid + label::after, .md-form.md-outline input[type="datetime-local"]:focus.valid + label::after, .md-form.md-outline input[type="datetime-local"]:focus:not([readonly]).valid + label, .md-form.md-outline input[type="email"].valid + label::after, .md-form.md-outline input[type="email"]:focus.valid + label::after, .md-form.md-outline input[type="email"]:focus:not([readonly]).valid + label, .md-form.md-outline input[type="number"].valid + label::after, .md-form.md-outline input[type="number"]:focus.valid + label::after, .md-form.md-outline input[type="number"]:focus:not([readonly]).valid + label, .md-form.md-outline input[type="password"].valid + label::after, .md-form.md-outline input[type="password"]:focus.valid + label::after, .md-form.md-outline input[type="password"]:focus:not([readonly]).valid + label, .md-form.md-outline input[type="search-md"].valid + label::after, .md-form.md-outline input[type="search-md"]:focus.valid + label::after, .md-form.md-outline input[type="search-md"]:focus:not([readonly]).valid + label, .md-form.md-outline input[type="search"].valid + label::after, .md-form.md-outline input[type="search"]:focus.valid + label::after, .md-form.md-outline input[type="search"]:focus:not([readonly]).valid + label, .md-form.md-outline input[type="tel"].valid + label::after, .md-form.md-outline input[type="tel"]:focus.valid + label::after, .md-form.md-outline input[type="tel"]:focus:not([readonly]).valid + label, .md-form.md-outline input[type="text"].valid + label::after, .md-form.md-outline input[type="text"]:focus.valid + label::after, .md-form.md-outline input[type="text"]:focus:not([readonly]).valid + label, .md-form.md-outline input[type="time"].valid + label::after, .md-form.md-outline input[type="time"]:focus.valid + label::after, .md-form.md-outline input[type="time"]:focus:not([readonly]).valid + label, .md-form.md-outline input[type="url"].valid + label::after, .md-form.md-outline input[type="url"]:focus.valid + label::after, .md-form.md-outline input[type="url"]:focus:not([readonly]).valid + label,
        .md-form.md-outline textarea.md-textarea.valid + label::after,
        .md-form.md-outline textarea.md-textarea:focus.valid + label::after,
        .md-form.md-outline textarea.md-textarea:focus:not([readonly]).valid + label {
            color: rgb(64, 255, 141);
        }
        .md-form.md-outline input[type="date"].invalid, .md-form.md-outline input[type="date"]:focus.invalid, .md-form.md-outline input[type="datetime-local"].invalid, .md-form.md-outline input[type="datetime-local"]:focus.invalid, .md-form.md-outline input[type="email"].invalid, .md-form.md-outline input[type="email"]:focus.invalid, .md-form.md-outline input[type="number"].invalid, .md-form.md-outline input[type="number"]:focus.invalid, .md-form.md-outline input[type="password"].invalid, .md-form.md-outline input[type="password"]:focus.invalid, .md-form.md-outline input[type="search-md"].invalid, .md-form.md-outline input[type="search-md"]:focus.invalid, .md-form.md-outline input[type="search"].invalid, .md-form.md-outline input[type="search"]:focus.invalid, .md-form.md-outline input[type="tel"].invalid, .md-form.md-outline input[type="tel"]:focus.invalid, .md-form.md-outline input[type="text"].invalid, .md-form.md-outline input[type="text"]:focus.invalid, .md-form.md-outline input[type="time"].invalid, .md-form.md-outline input[type="time"]:focus.invalid, .md-form.md-outline input[type="url"].invalid, .md-form.md-outline input[type="url"]:focus.invalid,
        .md-form.md-outline textarea.md-textarea.invalid,
        .md-form.md-outline textarea.md-textarea:focus.invalid {
            border-color: rgb(157, 19, 9);
            box-shadow: rgb(169, 20, 9) 0px 0px 0px 1px inset;
        }
        .md-form.md-outline input[type="date"].invalid + label::after, .md-form.md-outline input[type="date"]:focus.invalid + label::after, .md-form.md-outline input[type="date"]:focus:not([readonly]).invalid + label, .md-form.md-outline input[type="datetime-local"].invalid + label::after, .md-form.md-outline input[type="datetime-local"]:focus.invalid + label::after, .md-form.md-outline input[type="datetime-local"]:focus:not([readonly]).invalid + label, .md-form.md-outline input[type="email"].invalid + label::after, .md-form.md-outline input[type="email"]:focus.invalid + label::after, .md-form.md-outline input[type="email"]:focus:not([readonly]).invalid + label, .md-form.md-outline input[type="number"].invalid + label::after, .md-form.md-outline input[type="number"]:focus.invalid + label::after, .md-form.md-outline input[type="number"]:focus:not([readonly]).invalid + label, .md-form.md-outline input[type="password"].invalid + label::after, .md-form.md-outline input[type="password"]:focus.invalid + label::after, .md-form.md-outline input[type="password"]:focus:not([readonly]).invalid + label, .md-form.md-outline input[type="search-md"].invalid + label::after, .md-form.md-outline input[type="search-md"]:focus.invalid + label::after, .md-form.md-outline input[type="search-md"]:focus:not([readonly]).invalid + label, .md-form.md-outline input[type="search"].invalid + label::after, .md-form.md-outline input[type="search"]:focus.invalid + label::after, .md-form.md-outline input[type="search"]:focus:not([readonly]).invalid + label, .md-form.md-outline input[type="tel"].invalid + label::after, .md-form.md-outline input[type="tel"]:focus.invalid + label::after, .md-form.md-outline input[type="tel"]:focus:not([readonly]).invalid + label, .md-form.md-outline input[type="text"].invalid + label::after, .md-form.md-outline input[type="text"]:focus.invalid + label::after, .md-form.md-outline input[type="text"]:focus:not([readonly]).invalid + label, .md-form.md-outline input[type="time"].invalid + label::after, .md-form.md-outline input[type="time"]:focus.invalid + label::after, .md-form.md-outline input[type="time"]:focus:not([readonly]).invalid + label, .md-form.md-outline input[type="url"].invalid + label::after, .md-form.md-outline input[type="url"]:focus.invalid + label::after, .md-form.md-outline input[type="url"]:focus:not([readonly]).invalid + label,
        .md-form.md-outline textarea.md-textarea.invalid + label::after,
        .md-form.md-outline textarea.md-textarea:focus.invalid + label::after,
        .md-form.md-outline textarea.md-textarea:focus:not([readonly]).invalid + label {
            color: rgb(245, 78, 66);
        }
        .md-form.md-outline > input[type="time"]:not(.browser-default) + label,
        .md-form.md-outline > input[type]:-webkit-autofill:not(.browser-default):not([type="search"]) + label {
            background-image: initial;
            background-color: rgb(24, 26, 27);
        }
        .md-form.md-outline label {
            color: rgb(158, 150, 137);
        }
        .md-form.md-outline label.active {
            background-image: initial;
            background-color: rgb(24, 26, 27);
        }
        .md-form.md-outline .prefix:focus {
            color: rgb(75, 160, 244);
        }
        .md-form.md-bg input[type="date"], .md-form.md-bg input[type="datetime-local"], .md-form.md-bg input[type="email"], .md-form.md-bg input[type="number"], .md-form.md-bg input[type="password"], .md-form.md-bg input[type="search-md"], .md-form.md-bg input[type="search"], .md-form.md-bg input[type="tel"], .md-form.md-bg input[type="text"], .md-form.md-bg input[type="time"], .md-form.md-bg input[type="url"],
        .md-form.md-bg textarea.md-textarea {
            border-color: initial;
            background-color: rgb(30, 32, 33);
            background-image: linear-gradient(rgb(9, 67, 162),
            rgb(9, 67, 162)),
            linear-gradient(rgb(48, 52, 54),
            rgb(48, 52, 54));
        }
        .md-form.md-bg input[type="date"]:focus:not([readonly]), .md-form.md-bg input[type="datetime-local"]:focus:not([readonly]), .md-form.md-bg input[type="email"]:focus:not([readonly]), .md-form.md-bg input[type="number"]:focus:not([readonly]), .md-form.md-bg input[type="password"]:focus:not([readonly]), .md-form.md-bg input[type="search-md"]:focus:not([readonly]), .md-form.md-bg input[type="search"]:focus:not([readonly]), .md-form.md-bg input[type="tel"]:focus:not([readonly]), .md-form.md-bg input[type="text"]:focus:not([readonly]), .md-form.md-bg input[type="time"]:focus:not([readonly]), .md-form.md-bg input[type="url"]:focus:not([readonly]),
        .md-form.md-bg textarea.md-textarea:focus:not([readonly]) {
            box-shadow: none; border-bottom-color: initial;
        }
        .md-form.md-bg input[type="date"]:focus, .md-form.md-bg input[type="datetime-local"]:focus, .md-form.md-bg input[type="email"]:focus, .md-form.md-bg input[type="number"]:focus, .md-form.md-bg input[type="password"]:focus, .md-form.md-bg input[type="search-md"]:focus, .md-form.md-bg input[type="search"]:focus, .md-form.md-bg input[type="tel"]:focus, .md-form.md-bg input[type="text"]:focus, .md-form.md-bg input[type="time"]:focus, .md-form.md-bg input[type="url"]:focus,
        .md-form.md-bg textarea.md-textarea:focus {
            background-color: rgb(44, 47, 49);
            outline-color: initial;
        }
        .edge-header {
            background-color: rgb(53, 57, 59);
        }
        .juicy-peach-gradient {
            background-image: linear-gradient(to right,
            rgb(78, 45, 0) 0px,
            rgb(107, 29, 3) 100%);
        }
        .young-passion-gradient {
            background-image: linear-gradient(to right,
            rgb(133, 10, 0) 0px,
            rgb(131, 12, 0) 0px,
            rgb(128, 13, 0) 21%,
            rgb(122, 18, 6) 52%,
            rgb(142, 40, 59) 78%,
            rgb(142, 34, 73) 100%);
        }
        .lady-lips-gradient {
            background-image: linear-gradient(to top,
            rgb(112, 0, 4) 0px,
            rgb(79, 2, 54) 99%,
            rgb(79, 2, 54) 100%);
        }
        .sunny-morning-gradient {
            background-image: linear-gradient(120deg,
            rgb(105, 81, 6) 0px,
            rgb(123, 29, 2) 100%);
        }
        .rainy-ashville-gradient {
            background-image: linear-gradient(to top,
            rgb(84, 6, 62) 0px,
            rgb(18, 48, 96) 100%);
        }
        .frozen-dreams-gradient {
            background-image: linear-gradient(to top,
            rgb(80, 3, 62) 0px,
            rgb(80, 3, 62) 1%,
            rgb(46, 34, 50) 100%);
        }
        .warm-flame-gradient {
            background-image: linear-gradient(45deg,
            rgb(112, 0, 4) 0px,
            rgb(82, 24, 7) 99%,
            rgb(82, 24, 7) 100%);
        }
        .night-fade-gradient {
            background-image: linear-gradient(to top,
            rgb(61, 42, 105) 0px,
            rgb(84, 6, 62) 100%);
        }
        .spring-warmth-gradient {
            background-image: linear-gradient(to top,
            rgb(82, 24, 7) 0px,
            rgb(79, 0, 79) 100%);
        }
        .winter-neva-gradient {
            background-image: linear-gradient(120deg,
            rgb(51, 55, 57) 0px,
            rgb(6, 60, 84) 100%);
        }
        .dusty-grass-gradient {
            background-image: linear-gradient(120deg,
            rgb(76, 98, 2) 0px,
            rgb(25, 104, 53) 100%);
        }
        .tempting-azure-gradient {
            background-image: linear-gradient(120deg,
            rgb(5, 123, 67) 0px,
            rgb(11, 80, 114) 100%);
        }
        .heavy-rain-gradient {
            background-image: linear-gradient(to top,
            rgb(47, 50, 52) 0px,
            rgb(36, 39, 41) 100%);
        }
        .amy-crisp-gradient {
            background-image: linear-gradient(120deg,
            rgb(49, 54, 56) 0px,
            rgb(124, 9, 13) 100%);
        }
        .mean-fruit-gradient {
            background-image: linear-gradient(120deg,
            rgb(116, 65, 3) 0px,
            rgb(101, 19, 122) 100%);
        }
        .deep-blue-gradient {
            background-image: linear-gradient(120deg,
            rgb(42, 45, 47) 0px,
            rgb(3, 60, 117) 100%);
        }
        .ripe-malinka-gradient {
            background-image: linear-gradient(120deg,
            rgb(102, 4, 114) 0px,
            rgb(149, 9, 27) 100%);
        }
        .cloudy-knoxville-gradient {
            background-image: linear-gradient(120deg,
            rgb(36, 18, 18) 0px,
            rgb(34, 37, 39) 100%);
        }
        .morpheus-den-gradient {
            background-image: linear-gradient(to top,
            rgb(38, 165, 166) 0px,
            rgb(41, 6, 82) 100%);
        }
        .rare-wind-gradient {
            background-image: linear-gradient(to top,
            rgb(20, 94, 92) 0px,
            rgb(74, 2, 25) 100%);
        }
        .near-moon-gradient {
            background-image: linear-gradient(to top,
            rgb(21, 141, 136) 0px,
            rgb(81, 48, 101) 100%);
        }
        .schedule-list .hr-bold {
            border-top-color: rgb(128, 119, 105);
        }
        .note {
            border-left-color: initial;
        }
        .note.note-primary {
            background-color: rgb(34, 36, 38);
            border-color: rgb(20, 92, 169);
        }
        .note.note-secondary {
            background-color: rgb(40, 43, 44);
            border-color: rgb(111, 103, 91);
        }
        .note.note-success {
            background-color: rgb(26, 51, 37);
            border-color: rgb(56, 127, 72);
        }
        .note.note-danger {
            background-color: rgb(57, 12, 14);
            border-color: rgb(139, 22, 32);
        }
        .note.note-warning {
            background-color: rgb(47, 38, 8);
            border-color: rgb(134, 113, 43);
        }
        .note.note-info {
            background-color: rgb(20, 47, 53);
            border-color: rgb(35, 141, 160);
        }
        .note.note-light {
            background-color: rgb(25, 27, 28);
            border-color: rgb(135, 125, 111);
        }
        footer.page-footer {
            color: rgb(232, 230, 227);
        }
        footer.page-footer .footer-copyright {
            background-color: rgba(0, 0, 0, 0.2);
            color: rgba(232, 230, 227, 0.6);
        }
        footer.page-footer a {
            color: rgb(232, 230, 227);
        }
        .media .media-left img {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
        }
        table.table thead th {
            border-top-color: initial;
        }
        table.table a {
            color: rgb(209, 205, 199);
        }
        table.table-hover tbody tr:hover {
            background-color: rgba(0, 0, 0, 0.07);
        }
        .table-responsive-lg > .table-bordered,
        .table-responsive-md > .table-bordered,
        .table-responsive-sm > .table-bordered,
        .table-responsive-xl > .table-bordered,
        .table-responsive > .table-bordered {
            border-top-color: rgb(56, 61, 63);
        }
        ul.stepper li a .circle {
            color: rgb(232, 230, 227);
            background-image: initial;
            background-color: rgba(0, 0, 0, 0.38);
        }
        ul.stepper li a .label {
            color: rgba(232, 230, 227, 0.38);
        }
        ul.stepper li.active a .label,
        ul.stepper li.completed a .label {
            color: rgba(232, 230, 227, 0.87);
        }
        .stepper-horizontal li:not(:first-child)::before,
        .stepper-horizontal li:not(:last-child)::after {
            background-color: rgba(0, 0, 0, 0.1);
        }
        .stepper-horizontal li:hover {
            background-color: rgba(0, 0, 0, 0.06);
        }
        .stepper-vertical li:not(:last-child)::after {
            background-color: rgba(0, 0, 0, 0.1);
        }
        .btn.btn-flat {
            box-shadow: none;
            background-color: transparent;
            color: inherit;
        }
        .btn.btn-flat:not([disabled]):not(.disabled):active {
            box-shadow: none;
        }
        .btn-fb.focus,
        .btn-fb:focus,
        .btn-floating {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-floating {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-floating i {
            color: rgb(232, 230, 227);
        }
        .btn-floating:hover {
            box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 17px 0px,
            rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;
        }
        .counter,
        .md-pills .show > .nav-link {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
        }
        .btn.purple-gradient {
            color: rgb(232, 230, 227);
        }
        .btn.aqua-gradient,
        .btn.peach-gradient {
            color: rgb(232, 230, 227);
        }
        .btn.purple-gradient:active,
        .btn.purple-gradient:active:focus .btn.purple-gradient.active,
        .btn.purple-gradient:focus,
        .btn.purple-gradient:hover {
            background-image: linear-gradient(rgb(122, 0, 72),
            rgb(12, 8, 117));
            background-color: initial;
        }
        .btn.peach-gradient:active,
        .btn.peach-gradient:active:focus .btn.peach-gradient.active,
        .btn.peach-gradient:focus,
        .btn.peach-gradient:hover {
            background-image: linear-gradient(rgb(91, 67, 0),
            rgb(129, 3, 3));
            background-color: initial;
        }
        .btn.aqua-gradient:active,
        .btn.aqua-gradient:active:focus .btn.aqua-gradient.active,
        .btn.aqua-gradient:focus,
        .btn.aqua-gradient:hover {
            background-image: linear-gradient(rgb(0, 89, 169),
            rgb(0, 185, 134));
            background-color: initial;
        }
        .btn.blue-gradient {
            color: rgb(232, 230, 227);
        }
        .btn.blue-gradient:active,
        .btn.blue-gradient:active:focus .btn.blue-gradient.active,
        .btn.blue-gradient:focus,
        .btn.blue-gradient:hover {
            background-image: linear-gradient(rgb(3, 107, 147),
            rgb(43, 57, 143));
            background-color: initial;
        }
        .counter {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
            background-color: rgb(193, 1, 1);
            color: rgb(232, 230, 227);
        }
        .btn-fb {
            color: rgb(232, 230, 227);
            background-color: rgb(47, 71, 122) !important;
        }
        .btn-fb:hover {
            background-color: rgb(53, 80, 136);
            color: rgb(232, 230, 227);
        }
        .btn-fb.focus,
        .btn-fb:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-fb.active,
        .btn-fb:active,
        .btn-fb:focus {
            background-color: rgb(24, 37, 63);
        }
        .btn-fb.dropdown-toggle {
            background-color: rgb(47, 71, 122) !important;
        }
        .btn-fb.dropdown-toggle:focus,
        .btn-fb.dropdown-toggle:hover {
            background-color: rgb(53, 80, 136) !important;
        }
        .btn-fb:not([disabled]):not(.disabled).active,
        .btn-fb:not([disabled]):not(.disabled):active,
        .show > .btn-fb.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(24, 37, 63) !important;
        }
        .btn-fb:not([disabled]):not(.disabled).active:focus,
        .btn-fb:not([disabled]):not(.disabled):active:focus,
        .show > .btn-fb.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .fb-ic {
            color: rgb(127, 165, 205) !important;
        }
        .fb-ic:focus,
        .fb-ic:hover {
            color: rgb(127, 165, 205);
        }
        .btn-tw,
        .btn-tw:hover,
        table.table a.btn.btn-fb {
            color: rgb(232, 230, 227);
        }
        .btn-tw {
            background-color: rgb(15, 91, 148) !important;
        }
        .btn-tw:hover {
            background-color: rgb(14, 82, 134);
        }
        .btn-tw.focus,
        .btn-tw:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-tw.active,
        .btn-tw:active,
        .btn-tw:focus {
            background-color: rgb(16, 98, 161);
        }
        .btn-tw.dropdown-toggle {
            background-color: rgb(15, 91, 148) !important;
        }
        .btn-tw.dropdown-toggle:focus,
        .btn-tw.dropdown-toggle:hover {
            background-color: rgb(14, 82, 134) !important;
        }
        .btn-tw:not([disabled]):not(.disabled).active,
        .btn-tw:not([disabled]):not(.disabled):active,
        .show > .btn-tw.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(16, 98, 161) !important;
        }
        .btn-tw:not([disabled]):not(.disabled).active:focus,
        .btn-tw:not([disabled]):not(.disabled):active:focus,
        .show > .btn-tw.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .tw-ic {
            color: rgb(90, 176, 238) !important;
        }
        .tw-ic:focus,
        .tw-ic:hover {
            color: rgb(90, 176, 238);
        }
        table.table a.btn.btn-tw {
            color: rgb(232, 230, 227);
        }
        .btn-gplus {
            color: rgb(232, 230, 227);
            background-color: rgb(162, 43, 28) !important;
        }
        .btn-gplus:hover {
            background-color: rgb(149, 39, 25);
            color: rgb(232, 230, 227);
        }
        .btn-gplus.focus,
        .btn-gplus:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-gplus.active,
        .btn-gplus:active,
        .btn-gplus:focus {
            background-color: rgb(120, 31, 21);
        }
        .btn-gplus.dropdown-toggle {
            background-color: rgb(162, 43, 28) !important;
        }
        .btn-gplus.dropdown-toggle:focus,
        .btn-gplus.dropdown-toggle:hover {
            background-color: rgb(149, 39, 25) !important;
        }
        .btn-gplus:not([disabled]):not(.disabled).active,
        .btn-gplus:not([disabled]):not(.disabled):active,
        .show > .btn-gplus.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(120, 31, 21) !important;
        }
        .btn-gplus:not([disabled]):not(.disabled).active:focus,
        .btn-gplus:not([disabled]):not(.disabled):active:focus,
        .show > .btn-gplus.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .gplus-ic {
            color: rgb(224, 89, 73) !important;
        }
        .gplus-ic:focus,
        .gplus-ic:hover {
            color: rgb(224, 89, 73);
        }
        .btn-yt,
        .btn-yt:hover,
        table.table a.btn.btn-gplus {
            color: rgb(232, 230, 227);
        }
        .btn-yt {
            background-color: rgb(172, 16, 15) !important;
        }
        .btn-yt:hover {
            background-color: rgb(158, 15, 14);
        }
        .btn-yt.focus,
        .btn-yt:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-yt.active,
        .btn-yt:active,
        .btn-yt:focus {
            background-color: rgb(134, 12, 11);
        }
        .btn-yt.dropdown-toggle {
            background-color: rgb(172, 16, 15) !important;
        }
        .btn-yt.dropdown-toggle:focus,
        .btn-yt.dropdown-toggle:hover {
            background-color: rgb(158, 15, 14) !important;
        }
        .btn-yt:not([disabled]):not(.disabled).active,
        .btn-yt:not([disabled]):not(.disabled):active,
        .show > .btn-yt.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(134, 12, 11) !important;
        }
        .btn-yt:not([disabled]):not(.disabled).active:focus,
        .btn-yt:not([disabled]):not(.disabled):active:focus,
        .show > .btn-yt.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .yt-ic {
            color: rgb(238, 63, 62) !important;
        }
        .yt-ic:focus,
        .yt-ic:hover {
            color: rgb(238, 63, 62);
        }
        .btn-li,
        .btn-li:hover,
        table.table a.btn.btn-yt {
            color: rgb(232, 230, 227);
        }
        .btn-li {
            background-color: rgb(0, 104, 162) !important;
        }
        .btn-li:hover {
            background-color: rgb(0, 117, 182);
        }
        .btn-li.focus,
        .btn-li:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-li.active,
        .btn-li:active,
        .btn-li:focus {
            background-color: rgb(0, 51, 80);
        }
        .btn-li.dropdown-toggle {
            background-color: rgb(0, 104, 162) !important;
        }
        .btn-li.dropdown-toggle:focus,
        .btn-li.dropdown-toggle:hover {
            background-color: rgb(0, 117, 182) !important;
        }
        .btn-li:not([disabled]):not(.disabled).active,
        .btn-li:not([disabled]):not(.disabled):active,
        .show > .btn-li.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(0, 51, 80) !important;
        }
        .btn-li:not([disabled]):not(.disabled).active:focus,
        .btn-li:not([disabled]):not(.disabled):active:focus,
        .show > .btn-li.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .li-ic {
            color: rgb(63, 186, 255) !important;
        }
        .li-ic:focus,
        .li-ic:hover {
            color: rgb(63, 186, 255);
        }
        table.table a.btn.btn-li {
            color: rgb(232, 230, 227);
        }
        .btn-pin {
            color: rgb(232, 230, 227);
            background-color: rgb(158, 14, 19) !important;
        }
        .btn-pin:hover {
            background-color: rgb(177, 15, 22);
            color: rgb(232, 230, 227);
        }
        .btn-pin.focus,
        .btn-pin:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-pin.active,
        .btn-pin:active,
        .btn-pin:focus {
            background-color: rgb(83, 7, 10);
        }
        .btn-pin.dropdown-toggle {
            background-color: rgb(158, 14, 19) !important;
        }
        .btn-pin.dropdown-toggle:focus,
        .btn-pin.dropdown-toggle:hover {
            background-color: rgb(177, 15, 22) !important;
        }
        .btn-pin:not([disabled]):not(.disabled).active,
        .btn-pin:not([disabled]):not(.disabled):active,
        .show > .btn-pin.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(83, 7, 10) !important;
        }
        .btn-pin:not([disabled]):not(.disabled).active:focus,
        .btn-pin:not([disabled]):not(.disabled):active:focus,
        .show > .btn-pin.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .pin-ic {
            color: rgb(239, 69, 76) !important;
        }
        .pin-ic:focus,
        .pin-ic:hover {
            color: rgb(239, 69, 76);
        }
        table.table a.btn.btn-pin {
            color: rgb(232, 230, 227);
        }
        .btn-ins {
            color: rgb(232, 230, 227);
            background-color: rgb(37, 75, 107) !important;
        }
        .btn-ins:hover {
            background-color: rgb(42, 86, 122);
            color: rgb(232, 230, 227);
        }
        .btn-ins.focus,
        .btn-ins:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-ins.active,
        .btn-ins:active,
        .btn-ins:focus {
            background-color: rgb(16, 33, 46);
        }
        .btn-ins.dropdown-toggle {
            background-color: rgb(37, 75, 107) !important;
        }
        .btn-ins.dropdown-toggle:focus,
        .btn-ins.dropdown-toggle:hover {
            background-color: rgb(42, 86, 122) !important;
        }
        .btn-ins:not([disabled]):not(.disabled).active,
        .btn-ins:not([disabled]):not(.disabled):active,
        .show > .btn-ins.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(16, 33, 46) !important;
        }
        .btn-ins:not([disabled]):not(.disabled).active:focus,
        .btn-ins:not([disabled]):not(.disabled):active:focus,
        .show > .btn-ins.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .ins-ic {
            color: rgb(137, 181, 214) !important;
        }
        .ins-ic:focus,
        .ins-ic:hover {
            color: rgb(137, 181, 214);
        }
        table.table a.btn.btn-ins {
            color: rgb(232, 230, 227);
        }
        .btn-git {
            color: rgb(232, 230, 227);
            background-color: rgb(38, 42, 43) !important;
        }
        .btn-git:hover {
            background-color: rgb(48, 52, 54);
            color: rgb(232, 230, 227);
        }
        .btn-git.focus,
        .btn-git:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-git.active,
        .btn-git:active,
        .btn-git:focus {
            background-color: rgb(0, 0, 0);
        }
        .btn-git.dropdown-toggle {
            background-color: rgb(38, 42, 43) !important;
        }
        .btn-git.dropdown-toggle:focus,
        .btn-git.dropdown-toggle:hover {
            background-color: rgb(48, 52, 54) !important;
        }
        .btn-git:not([disabled]):not(.disabled).active,
        .btn-git:not([disabled]):not(.disabled):active,
        .show > .btn-git.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(0, 0, 0) !important;
        }
        .btn-git:not([disabled]):not(.disabled).active:focus,
        .btn-git:not([disabled]):not(.disabled):active:focus,
        .show > .btn-git.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .git-ic {
            color: rgb(200, 195, 188) !important;
        }
        .git-ic:focus,
        .git-ic:hover {
            color: rgb(200, 195, 188);
        }
        table.table a.btn.btn-git {
            color: rgb(232, 230, 227);
        }
        .btn-comm {
            color: rgb(232, 230, 227);
            background-color: rgb(38, 166, 157) !important;
        }
        .btn-comm:hover {
            background-color: rgb(35, 153, 144);
            color: rgb(232, 230, 227);
        }
        .btn-comm.focus,
        .btn-comm:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-comm.active,
        .btn-comm:active,
        .btn-comm:focus {
            background-color: rgb(23, 99, 92);
        }
        .btn-comm.dropdown-toggle {
            background-color: rgb(38, 166, 157) !important;
        }
        .btn-comm.dropdown-toggle:focus,
        .btn-comm.dropdown-toggle:hover {
            background-color: rgb(35, 153, 144) !important;
        }
        .btn-comm:not([disabled]):not(.disabled).active,
        .btn-comm:not([disabled]):not(.disabled):active,
        .show > .btn-comm.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(23, 99, 92) !important;
        }
        .btn-comm:not([disabled]):not(.disabled).active:focus,
        .btn-comm:not([disabled]):not(.disabled):active:focus,
        .show > .btn-comm.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .comm-ic {
            color: rgb(69, 212, 198) !important;
        }
        .comm-ic:focus,
        .comm-ic:hover {
            color: rgb(69, 212, 198);
        }
        .btn-vk,
        .btn-vk:hover,
        table.table a.btn.btn-comm {
            color: rgb(232, 230, 227);
        }
        .btn-vk {
            background-color: rgb(61, 94, 130) !important;
        }
        .btn-vk:hover {
            background-color: rgb(63, 97, 135);
        }
        .btn-vk.focus,
        .btn-vk:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-vk.active,
        .btn-vk:active,
        .btn-vk:focus {
            background-color: rgb(35, 54, 74);
        }
        .btn-vk.dropdown-toggle {
            background-color: rgb(61, 94, 130) !important;
        }
        .btn-vk.dropdown-toggle:focus,
        .btn-vk.dropdown-toggle:hover {
            background-color: rgb(63, 97, 135) !important;
        }
        .btn-vk:not([disabled]):not(.disabled).active,
        .btn-vk:not([disabled]):not(.disabled):active,
        .show > .btn-vk.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(35, 54, 74) !important;
        }
        .btn-vk:not([disabled]):not(.disabled).active:focus,
        .btn-vk:not([disabled]):not(.disabled):active:focus,
        .show > .btn-vk.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .vk-ic {
            color: rgb(122, 161, 193) !important;
        }
        .vk-ic:focus,
        .vk-ic:hover {
            color: rgb(122, 161, 193);
        }
        table.table a.btn.btn-vk {
            color: rgb(232, 230, 227);
        }
        .btn-dribbble {
            color: rgb(232, 230, 227);
            background-color: rgb(155, 16, 70) !important;
        }
        .btn-dribbble:hover {
            background-color: rgb(141, 15, 64);
            color: rgb(232, 230, 227);
        }
        .btn-dribbble.focus,
        .btn-dribbble:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-dribbble.active,
        .btn-dribbble:active,
        .btn-dribbble:focus {
            background-color: rgb(150, 16, 68);
        }
        .btn-dribbble.dropdown-toggle {
            background-color: rgb(155, 16, 70) !important;
        }
        .btn-dribbble.dropdown-toggle:focus,
        .btn-dribbble.dropdown-toggle:hover {
            background-color: rgb(141, 15, 64) !important;
        }
        .btn-dribbble:not([disabled]):not(.disabled).active,
        .btn-dribbble:not([disabled]):not(.disabled):active,
        .show > .btn-dribbble.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(150, 16, 68) !important;
        }
        .btn-dribbble:not([disabled]):not(.disabled).active:focus,
        .btn-dribbble:not([disabled]):not(.disabled):active:focus,
        .show > .btn-dribbble.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .dribbble-ic {
            color: rgb(237, 82, 142) !important;
        }
        .dribbble-ic:focus,
        .dribbble-ic:hover {
            color: rgb(237, 82, 142);
        }
        .btn-so,
        .btn-so:hover,
        table.table a.btn.btn-dribbble {
            color: rgb(232, 230, 227);
        }
        .btn-so {
            background-color: rgb(163, 91, 0) !important;
        }
        .btn-so:hover {
            background-color: rgb(148, 82, 0);
        }
        .btn-so.focus,
        .btn-so:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-so.active,
        .btn-so:active,
        .btn-so:focus {
            background-color: rgb(177, 98, 0);
        }
        .btn-so.dropdown-toggle {
            background-color: rgb(163, 91, 0) !important;
        }
        .btn-so.dropdown-toggle:focus,
        .btn-so.dropdown-toggle:hover {
            background-color: rgb(148, 82, 0) !important;
        }
        .btn-so:not([disabled]):not(.disabled).active,
        .btn-so:not([disabled]):not(.disabled):active,
        .show > .btn-so.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(177, 98, 0) !important;
        }
        .btn-so:not([disabled]):not(.disabled).active:focus,
        .btn-so:not([disabled]):not(.disabled):active:focus,
        .show > .btn-so.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .so-ic {
            color: rgb(255, 174, 73) !important;
        }
        .so-ic:focus,
        .so-ic:hover {
            color: rgb(255, 174, 73);
        }
        table.table a.btn.btn-so {
            color: rgb(232, 230, 227);
        }
        .btn-slack {
            color: rgb(232, 230, 227);
            background-color: rgb(59, 137, 111) !important;
        }
        .btn-slack:hover {
            background-color: rgb(54, 126, 102);
            color: rgb(232, 230, 227);
        }
        .btn-slack.focus,
        .btn-slack:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-slack.active,
        .btn-slack:active,
        .btn-slack:focus {
            background-color: rgb(40, 93, 69);
        }
        .btn-slack.dropdown-toggle {
            background-color: rgb(59, 137, 111) !important;
        }
        .btn-slack.dropdown-toggle:focus,
        .btn-slack.dropdown-toggle:hover {
            background-color: rgb(54, 126, 102) !important;
        }
        .btn-slack:not([disabled]):not(.disabled).active,
        .btn-slack:not([disabled]):not(.disabled):active,
        .show > .btn-slack.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(40, 93, 69) !important;
        }
        .btn-slack:not([disabled]):not(.disabled).active:focus,
        .btn-slack:not([disabled]):not(.disabled):active:focus,
        .show > .btn-slack.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .slack-ic {
            color: rgb(101, 189, 149) !important;
        }
        .slack-ic:focus,
        .slack-ic:hover {
            color: rgb(101, 189, 149);
        }
        table.table a.btn.btn-slack {
            color: rgb(232, 230, 227);
        }
        .btn-email {
            color: rgb(232, 230, 227);
            background-color: rgb(63, 69, 71) !important;
        }
        .btn-email:hover {
            background-color: rgb(73, 79, 82);
            color: rgb(232, 230, 227);
        }
        .btn-email.focus,
        .btn-email:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-email.active,
        .btn-email:active,
        .btn-email:focus {
            background-color: rgb(23, 26, 30);
        }
        .btn-email.dropdown-toggle {
            background-color: rgb(63, 69, 71) !important;
        }
        .btn-email.dropdown-toggle:focus,
        .btn-email.dropdown-toggle:hover {
            background-color: rgb(73, 79, 82) !important;
        }
        .btn-email:not([disabled]):not(.disabled).active,
        .btn-email:not([disabled]):not(.disabled):active,
        .show > .btn-email.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(23, 26, 30) !important;
        }
        .btn-email:not([disabled]):not(.disabled).active:focus,
        .btn-email:not([disabled]):not(.disabled):active:focus,
        .show > .btn-email.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .email-ic {
            color: rgb(179, 172, 162) !important;
        }
        .email-ic:focus,
        .email-ic:hover {
            color: rgb(179, 172, 162);
        }
        table.table a.btn.btn-email {
            color: rgb(232, 230, 227);
        }
        .btn-reddit {
            color: rgb(232, 230, 227);
            background-color: rgb(204, 55, 0) !important;
        }
        .btn-reddit:hover {
            background-color: rgb(188, 51, 0);
            color: rgb(232, 230, 227);
        }
        .btn-reddit.focus,
        .btn-reddit:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-reddit.active,
        .btn-reddit:active,
        .btn-reddit:focus {
            background-color: rgb(122, 33, 0);
        }
        .btn-reddit.dropdown-toggle {
            background-color: rgb(204, 55, 0) !important;
        }
        .btn-reddit.dropdown-toggle:focus,
        .btn-reddit.dropdown-toggle:hover {
            background-color: rgb(188, 51, 0) !important;
        }
        .btn-reddit:not([disabled]):not(.disabled).active,
        .btn-reddit:not([disabled]):not(.disabled):active,
        .show > .btn-reddit.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(122, 33, 0) !important;
        }
        .btn-reddit:not([disabled]):not(.disabled).active:focus,
        .btn-reddit:not([disabled]):not(.disabled):active:focus,
        .show > .btn-reddit.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .reddit-ic {
            color: rgb(255, 88, 26) !important;
        }
        .reddit-ic:focus,
        .reddit-ic:hover {
            color: rgb(255, 88, 26);
        }
        table.table a.btn.btn-reddit {
            color: rgb(232, 230, 227);
        }
        .btn-twitch {
            color: rgb(232, 230, 227);
            background-color: rgb(80, 52, 131) !important;
        }
        .btn-twitch:hover {
            background-color: rgb(89, 58, 146);
            color: rgb(232, 230, 227);
        }
        .btn-twitch.focus,
        .btn-twitch:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-twitch.active,
        .btn-twitch:active,
        .btn-twitch:focus {
            background-color: rgb(44, 29, 73);
        }
        .btn-twitch.dropdown-toggle {
            background-color: rgb(80, 52, 131) !important;
        }
        .btn-twitch.dropdown-toggle:focus,
        .btn-twitch.dropdown-toggle:hover {
            background-color: rgb(89, 58, 146) !important;
        }
        .btn-twitch:not([disabled]):not(.disabled).active,
        .btn-twitch:not([disabled]):not(.disabled):active,
        .show > .btn-twitch.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(44, 29, 73) !important;
        }
        .btn-twitch:not([disabled]):not(.disabled).active:focus,
        .btn-twitch:not([disabled]):not(.disabled):active:focus,
        .show > .btn-twitch.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .twitch-ic {
            color: rgb(136, 104, 195) !important;
        }
        .twitch-ic:focus,
        .twitch-ic:hover {
            color: rgb(136, 104, 195);
        }
        table.table a.btn.btn-twitch {
            color: rgb(232, 230, 227);
        }
        .btn-discord {
            color: rgb(232, 230, 227);
            background-color: rgb(33, 53, 125) !important;
        }
        .btn-discord:hover {
            background-color: rgb(30, 49, 113);
            color: rgb(232, 230, 227);
        }
        .btn-discord.focus,
        .btn-discord:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .btn-discord.active,
        .btn-discord:active,
        .btn-discord:focus {
            background-color: rgb(38, 62, 146);
        }
        .btn-discord.dropdown-toggle {
            background-color: rgb(33, 53, 125) !important;
        }
        .btn-discord.dropdown-toggle:focus,
        .btn-discord.dropdown-toggle:hover {
            background-color: rgb(30, 49, 113) !important;
        }
        .btn-discord:not([disabled]):not(.disabled).active,
        .btn-discord:not([disabled]):not(.disabled):active,
        .show > .btn-discord.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(38, 62, 146) !important;
        }
        .btn-discord:not([disabled]):not(.disabled).active:focus,
        .btn-discord:not([disabled]):not(.disabled):active:focus,
        .show > .btn-discord.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .md-pills .nav-link.active:hover,
        .md-tabs {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .discord-ic {
            color: rgb(116, 162, 218) !important;
        }
        .discord-ic:focus,
        .discord-ic:hover {
            color: rgb(116, 162, 218);
        }
        a.btn:not([href]):not([tabindex]),
        a.btn:not([href]):not([tabindex]):focus,
        a.btn:not([href]):not([tabindex]):hover,
        table.table a.btn.btn-discord {
            color: rgb(232, 230, 227);
        }
        .md-tabs {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            border-color: initial;
            background-color: rgb(34, 150, 138);
        }
        .md-tabs .nav-item.disabled .nav-link {
            color: rgb(158, 150, 137);
        }
        .md-tabs .nav-link {
            border-color: initial;
            color: rgb(232, 230, 227);
        }
        .md-tabs .nav-item.open .nav-link,
        .md-tabs .nav-link.active {
            background-color: rgba(0, 0, 0, 0.2);
            color: rgb(232, 230, 227);
        }
        .md-tabs .nav-item.show .nav-link {
            background-color: rgb(34, 150, 138);
            color: rgb(232, 230, 227);
        }
        .md-tabs .nav-item.show .nav-link.dropdown-toggle {
            background-color: rgba(0, 0, 0, 0.2);
        }
        .md-pills {
            border-color: initial;
        }
        .md-pills .show > .nav-link {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
            color: rgb(232, 230, 227);
            background-color: rgb(34, 150, 138);
        }
        .md-pills .nav-link {
            color: rgb(168, 160, 149);
        }
        .md-pills .nav-link.active {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
            color: rgb(232, 230, 227);
            background-color: rgb(34, 150, 138);
        }
        .md-pills .nav-link.active:hover {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .pills-primary .nav-link.active,
        .pills-primary .show > .nav-link,
        .tabs-primary {
            background-color: rgb(9, 67, 162) !important;
        }
        .pills-danger .nav-link.active,
        .pills-danger .show > .nav-link,
        .tabs-danger {
            background-color: rgb(172, 0, 15) !important;
        }
        .pills-warning .nav-link.active,
        .pills-warning .show > .nav-link,
        .tabs-warning {
            background-color: rgb(173, 116, 0) !important;
        }
        .pills-success .nav-link.active,
        .pills-success .show > .nav-link,
        .tabs-success {
            background-color: rgb(0, 160, 65) !important;
        }
        .pills-info .nav-link.active,
        .pills-info .show > .nav-link,
        .tabs-info {
            background-color: rgb(21, 128, 168) !important;
        }
        .pills-default .nav-link.active,
        .pills-default .show > .nav-link,
        .tabs-default {
            background-color: rgb(34, 150, 138) !important;
        }
        .pills-secondary .nav-link.active,
        .pills-secondary .show > .nav-link,
        .tabs-secondary {
            background-color: rgb(101, 43, 130) !important;
        }
        .pills-elegant .nav-link.active,
        .pills-elegant .show > .nav-link,
        .tabs-elegant {
            background-color: rgb(35, 38, 39) !important;
        }
        .pills-unique .nav-link.active,
        .pills-unique .show > .nav-link,
        .tabs-unique {
            background-color: rgb(109, 11, 63) !important;
        }
        .pills-dark-green .nav-link.active,
        .pills-dark-green .show > .nav-link,
        .tabs-dark-green {
            background-color: rgb(45, 114, 48) !important;
        }
        .pills-mdb-color .nav-link.active,
        .pills-mdb-color .show > .nav-link,
        .tabs-mdb-color {
            background-color: rgb(71, 84, 113) !important;
        }
        .pills-red .nav-link.active,
        .pills-red .show > .nav-link,
        .tabs-red {
            background-color: rgb(167, 35, 35) !important;
        }
        .pills-pink .nav-link.active,
        .pills-pink .show > .nav-link,
        .tabs-pink {
            background-color: rgb(161, 16, 65) !important;
        }
        .pills-purple .nav-link.active,
        .pills-purple .show > .nav-link,
        .tabs-purple {
            background-color: rgb(114, 29, 136) !important;
        }
        .pills-deep-purple .nav-link.active,
        .pills-deep-purple .show > .nav-link,
        .tabs-deep-purple {
            background-color: rgb(65, 36, 134) !important;
        }
        .pills-indigo .nav-link.active,
        .pills-indigo .show > .nav-link,
        .tabs-indigo {
            background-color: rgb(50, 65, 145) !important;
        }
        .pills-blue .nav-link.active,
        .pills-blue .show > .nav-link,
        .tabs-blue {
            background-color: rgb(20, 94, 168) !important;
        }
        .pills-light-blue .nav-link.active,
        .pills-light-blue .show > .nav-link,
        .tabs-light-blue {
            background-color: rgb(0, 47, 126) !important;
        }
        .pills-cyan .nav-link.active,
        .pills-cyan .show > .nav-link,
        .tabs-cyan {
            background-color: rgb(0, 150, 170) !important;
        }
        .pills-teal .nav-link.active,
        .pills-teal .show > .nav-link,
        .tabs-teal {
            background-color: rgb(0, 97, 86) !important;
        }
        .pills-green .nav-link.active,
        .pills-green .show > .nav-link,
        .tabs-green {
            background-color: rgb(45, 114, 48) !important;
        }
        .pills-light-green .nav-link.active,
        .pills-light-green .show > .nav-link,
        .tabs-light-green {
            background-color: rgb(113, 147, 49) !important;
        }
        .pills-lime .nav-link.active,
        .pills-lime .show > .nav-link,
        .tabs-lime {
            background-color: rgb(140, 144, 34) !important;
        }
        .pills-yellow .nav-link.active,
        .pills-yellow .show > .nav-link,
        .tabs-yellow {
            background-color: rgb(132, 95, 3) !important;
        }
        .pills-amber .nav-link.active,
        .pills-amber .show > .nav-link,
        .tabs-amber {
            background-color: rgb(204, 128, 0) !important;
        }
        .pills-orange .nav-link.active,
        .pills-orange .show > .nav-link,
        .tabs-orange {
            background-color: rgb(196, 99, 0) !important;
        }
        .pills-deep-orange .nav-link.active,
        .pills-deep-orange .show > .nav-link,
        .tabs-deep-orange {
            background-color: rgb(164, 39, 0) !important;
        }
        .pills-brown .nav-link.active,
        .pills-brown .show > .nav-link,
        .tabs-brown {
            background-color: rgb(97, 68, 58) !important;
        }
        .pills-grey .nav-link.active,
        .pills-grey .show > .nav-link,
        .tabs-grey {
            background-color: rgb(73, 79, 82) !important;
        }
        .pills-blue-grey .nav-link.active,
        .pills-blue-grey .show > .nav-link,
        .tabs-blue-grey {
            background-color: rgb(81, 101, 110) !important;
        }
        .pills-dark .nav-link.active,
        .pills-dark .show > .nav-link,
        .tabs-dark {
            background-color: rgb(25, 27, 28) !important;
        }
        .pills-light .nav-link.active,
        .pills-light .show > .nav-link,
        .tabs-light {
            background-color: rgb(42, 45, 47) !important;
        }
        .pills-white .nav-link.active,
        .pills-white .show > .nav-link,
        .tabs-white {
            background-color: rgb(24, 26, 27) !important;
        }
        .pills-black .nav-link.active,
        .pills-black .show > .nav-link,
        .tabs-black {
            background-color: rgb(0, 0, 0) !important;
        }
        .classic-tabs .nav li a {
            color: rgba(232, 230, 227, 0.7);
        }
        .classic-tabs .nav li a.active {
            border-bottom-color: initial;
            color: rgb(232, 230, 227);
        }
        .classic-tabs .nav.tabs-cyan li a.active {
            border-color: rgb(161, 144, 0);
        }
        .classic-tabs .nav.tabs-orange li a.active {
            border-color: rgb(151, 22, 19);
        }
        .classic-tabs .nav.tabs-grey li a.active {
            border-color: rgb(48, 52, 54);
        }
        .classic-tabs .nav.tabs-pink li a.active {
            border-color: rgb(78, 44, 139);
        }
        .classic-tabs .nav.tabs-green li a.active {
            border-color: rgb(19, 91, 172);
        }
        .classic-tabs .nav.tabs-primary li a.active {
            border-color: rgb(48, 52, 54);
        }
        .classic-tabs .nav.tabs-animated li a.active {
            border-color: initial;
        }
        .classic-tabs .nav.tabs-animated.tabs-cyan .floor {
            background-color: rgb(126, 114, 0);
        }
        .classic-tabs .nav.tabs-animated.tabs-orange .floor {
            background-color: rgb(166, 25, 21);
        }
        .classic-tabs .nav.tabs-animated.tabs-grey .floor {
            background-color: rgb(24, 26, 27);
        }
        .classic-tabs .nav.tabs-animated.tabs-pink .floor {
            background-color: rgb(82, 46, 146);
        }
        .classic-tabs .nav.tabs-animated.tabs-green .floor {
            background-color: rgb(17, 81, 154);
        }
        .classic-tabs .nav.tabs-animated.tabs-primary .floor {
            background-color: rgb(24, 26, 27);
        }
        .card.card-cascade .view.view-cascade {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .card.card-cascade .view.view-cascade.gradient-card-header .btn-floating {
            background-color: rgba(24, 26, 27, 0.2);
        }
        .card.card-cascade.wider {
            box-shadow: none;
            background-color: transparent;
        }
        .card.card-cascade.wider .card-body.card-body-cascade {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
            background-image: initial;
            background-color: rgb(24, 26, 27);
        }
        .card.card-cascade.wider.reverse .card-body.card-body-cascade {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .card.card-cascade.panel-cascade .view {
            color: rgb(232, 230, 227);
        }
        .card.card-cascade.panel-cascade .list-group .list-group-item {
            border-top-color: initial;
            border-right-color: initial;
            border-left-color: initial;
            border-bottom-color: rgb(53, 57, 59);
            color: rgb(181, 175, 166);
        }
        .card.card-cascade.panel-cascade .list-group .list-group-item:hover {
            background-color: rgb(34, 36, 38);
        }
        .card .card-reveal .card-title i,
        .card-wrapper .card-rotating .card-title i {
            color: rgb(171, 163, 152);
        }
        .card-wrapper .avatar img {
            border-color: rgb(48, 52, 54);
            background-image: initial;
            background-color: rgb(24, 26, 27);
        }
        .card-wrapper .card-rotating .face {
            background-image: initial;
            background-color: rgb(24, 26, 27);
        }
        .testimonial-card .avatar {
            border-color: rgb(48, 52, 54);
        }
        .dropdown .dropdown-menu.dropdown-primary .dropdown-item.active,
        .dropdown .dropdown-menu.dropdown-primary .dropdown-item:active,
        .dropdown .dropdown-menu.dropdown-primary .dropdown-item:hover,
        .dropleft .dropdown-menu.dropdown-primary .dropdown-item.active,
        .dropleft .dropdown-menu.dropdown-primary .dropdown-item:active,
        .dropleft .dropdown-menu.dropdown-primary .dropdown-item:hover,
        .dropright .dropdown-menu.dropdown-primary .dropdown-item.active,
        .dropright .dropdown-menu.dropdown-primary .dropdown-item:active,
        .dropright .dropdown-menu.dropdown-primary .dropdown-item:hover,
        .dropup .dropdown-menu.dropdown-primary .dropdown-item.active,
        .dropup .dropdown-menu.dropdown-primary .dropdown-item:active,
        .dropup .dropdown-menu.dropdown-primary .dropdown-item:hover {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(9, 67, 162) !important;
        }
        .dropdown .dropdown-menu.dropdown-primary .dropdown-item.active.disabled,
        .dropdown .dropdown-menu.dropdown-primary .dropdown-item:active.disabled,
        .dropdown .dropdown-menu.dropdown-primary .dropdown-item:hover.disabled,
        .dropleft .dropdown-menu.dropdown-primary .dropdown-item.active.disabled,
        .dropleft .dropdown-menu.dropdown-primary .dropdown-item:active.disabled,
        .dropleft .dropdown-menu.dropdown-primary .dropdown-item:hover.disabled,
        .dropright .dropdown-menu.dropdown-primary .dropdown-item.active.disabled,
        .dropright .dropdown-menu.dropdown-primary .dropdown-item:active.disabled,
        .dropright .dropdown-menu.dropdown-primary .dropdown-item:hover.disabled,
        .dropup .dropdown-menu.dropdown-primary .dropdown-item.active.disabled,
        .dropup .dropdown-menu.dropdown-primary .dropdown-item:active.disabled,
        .dropup .dropdown-menu.dropdown-primary .dropdown-item:hover.disabled {
            background-color: transparent;
            box-shadow: none;
        }
        .dropdown .dropdown-menu.dropdown-danger .dropdown-item.active,
        .dropdown .dropdown-menu.dropdown-danger .dropdown-item:active,
        .dropdown .dropdown-menu.dropdown-danger .dropdown-item:hover,
        .dropleft .dropdown-menu.dropdown-danger .dropdown-item.active,
        .dropleft .dropdown-menu.dropdown-danger .dropdown-item:active,
        .dropleft .dropdown-menu.dropdown-danger .dropdown-item:hover,
        .dropright .dropdown-menu.dropdown-danger .dropdown-item.active,
        .dropright .dropdown-menu.dropdown-danger .dropdown-item:active,
        .dropright .dropdown-menu.dropdown-danger .dropdown-item:hover,
        .dropup .dropdown-menu.dropdown-danger .dropdown-item.active,
        .dropup .dropdown-menu.dropdown-danger .dropdown-item:active,
        .dropup .dropdown-menu.dropdown-danger .dropdown-item:hover {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(163, 0, 0) !important;
        }
        .dropdown .dropdown-menu.dropdown-danger .dropdown-item.active.disabled,
        .dropdown .dropdown-menu.dropdown-danger .dropdown-item:active.disabled,
        .dropdown .dropdown-menu.dropdown-danger .dropdown-item:hover.disabled,
        .dropleft .dropdown-menu.dropdown-danger .dropdown-item.active.disabled,
        .dropleft .dropdown-menu.dropdown-danger .dropdown-item:active.disabled,
        .dropleft .dropdown-menu.dropdown-danger .dropdown-item:hover.disabled,
        .dropright .dropdown-menu.dropdown-danger .dropdown-item.active.disabled,
        .dropright .dropdown-menu.dropdown-danger .dropdown-item:active.disabled,
        .dropright .dropdown-menu.dropdown-danger .dropdown-item:hover.disabled,
        .dropup .dropdown-menu.dropdown-danger .dropdown-item.active.disabled,
        .dropup .dropdown-menu.dropdown-danger .dropdown-item:active.disabled,
        .dropup .dropdown-menu.dropdown-danger .dropdown-item:hover.disabled {
            background-color: transparent;
            box-shadow: none;
        }
        .dropdown .dropdown-menu.dropdown-default .dropdown-item.active,
        .dropdown .dropdown-menu.dropdown-default .dropdown-item:active,
        .dropdown .dropdown-menu.dropdown-default .dropdown-item:hover,
        .dropleft .dropdown-menu.dropdown-default .dropdown-item.active,
        .dropleft .dropdown-menu.dropdown-default .dropdown-item:active,
        .dropleft .dropdown-menu.dropdown-default .dropdown-item:hover,
        .dropright .dropdown-menu.dropdown-default .dropdown-item.active,
        .dropright .dropdown-menu.dropdown-default .dropdown-item:active,
        .dropright .dropdown-menu.dropdown-default .dropdown-item:hover,
        .dropup .dropdown-menu.dropdown-default .dropdown-item.active,
        .dropup .dropdown-menu.dropdown-default .dropdown-item:active,
        .dropup .dropdown-menu.dropdown-default .dropdown-item:hover {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(34, 150, 138) !important;
        }
        .dropdown .dropdown-menu.dropdown-default .dropdown-item.active.disabled,
        .dropdown .dropdown-menu.dropdown-default .dropdown-item:active.disabled,
        .dropdown .dropdown-menu.dropdown-default .dropdown-item:hover.disabled,
        .dropleft .dropdown-menu.dropdown-default .dropdown-item.active.disabled,
        .dropleft .dropdown-menu.dropdown-default .dropdown-item:active.disabled,
        .dropleft .dropdown-menu.dropdown-default .dropdown-item:hover.disabled,
        .dropright .dropdown-menu.dropdown-default .dropdown-item.active.disabled,
        .dropright .dropdown-menu.dropdown-default .dropdown-item:active.disabled,
        .dropright .dropdown-menu.dropdown-default .dropdown-item:hover.disabled,
        .dropup .dropdown-menu.dropdown-default .dropdown-item.active.disabled,
        .dropup .dropdown-menu.dropdown-default .dropdown-item:active.disabled,
        .dropup .dropdown-menu.dropdown-default .dropdown-item:hover.disabled {
            background-color: transparent;
            box-shadow: none;
        }
        .dropdown .dropdown-menu.dropdown-secondary .dropdown-item.active,
        .dropdown .dropdown-menu.dropdown-secondary .dropdown-item:active,
        .dropdown .dropdown-menu.dropdown-secondary .dropdown-item:hover,
        .dropleft .dropdown-menu.dropdown-secondary .dropdown-item.active,
        .dropleft .dropdown-menu.dropdown-secondary .dropdown-item:active,
        .dropleft .dropdown-menu.dropdown-secondary .dropdown-item:hover,
        .dropright .dropdown-menu.dropdown-secondary .dropdown-item.active,
        .dropright .dropdown-menu.dropdown-secondary .dropdown-item:active,
        .dropright .dropdown-menu.dropdown-secondary .dropdown-item:hover,
        .dropup .dropdown-menu.dropdown-secondary .dropdown-item.active,
        .dropup .dropdown-menu.dropdown-secondary .dropdown-item:active,
        .dropup .dropdown-menu.dropdown-secondary .dropdown-item:hover {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(101, 43, 130) !important;
        }
        .dropdown .dropdown-menu.dropdown-secondary .dropdown-item.active.disabled,
        .dropdown .dropdown-menu.dropdown-secondary .dropdown-item:active.disabled,
        .dropdown .dropdown-menu.dropdown-secondary .dropdown-item:hover.disabled,
        .dropleft .dropdown-menu.dropdown-secondary .dropdown-item.active.disabled,
        .dropleft .dropdown-menu.dropdown-secondary .dropdown-item:active.disabled,
        .dropleft .dropdown-menu.dropdown-secondary .dropdown-item:hover.disabled,
        .dropright .dropdown-menu.dropdown-secondary .dropdown-item.active.disabled,
        .dropright .dropdown-menu.dropdown-secondary .dropdown-item:active.disabled,
        .dropright .dropdown-menu.dropdown-secondary .dropdown-item:hover.disabled,
        .dropup .dropdown-menu.dropdown-secondary .dropdown-item.active.disabled,
        .dropup .dropdown-menu.dropdown-secondary .dropdown-item:active.disabled,
        .dropup .dropdown-menu.dropdown-secondary .dropdown-item:hover.disabled {
            background-color: transparent;
            box-shadow: none;
        }
        .dropdown .dropdown-menu.dropdown-success .dropdown-item.active,
        .dropdown .dropdown-menu.dropdown-success .dropdown-item:active,
        .dropdown .dropdown-menu.dropdown-success .dropdown-item:hover,
        .dropleft .dropdown-menu.dropdown-success .dropdown-item.active,
        .dropleft .dropdown-menu.dropdown-success .dropdown-item:active,
        .dropleft .dropdown-menu.dropdown-success .dropdown-item:hover,
        .dropright .dropdown-menu.dropdown-success .dropdown-item.active,
        .dropright .dropdown-menu.dropdown-success .dropdown-item:active,
        .dropright .dropdown-menu.dropdown-success .dropdown-item:hover,
        .dropup .dropdown-menu.dropdown-success .dropdown-item.active,
        .dropup .dropdown-menu.dropdown-success .dropdown-item:active,
        .dropup .dropdown-menu.dropdown-success .dropdown-item:hover {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(0, 160, 65) !important;
        }
        .dropdown .dropdown-menu.dropdown-success .dropdown-item.active.disabled,
        .dropdown .dropdown-menu.dropdown-success .dropdown-item:active.disabled,
        .dropdown .dropdown-menu.dropdown-success .dropdown-item:hover.disabled,
        .dropleft .dropdown-menu.dropdown-success .dropdown-item.active.disabled,
        .dropleft .dropdown-menu.dropdown-success .dropdown-item:active.disabled,
        .dropleft .dropdown-menu.dropdown-success .dropdown-item:hover.disabled,
        .dropright .dropdown-menu.dropdown-success .dropdown-item.active.disabled,
        .dropright .dropdown-menu.dropdown-success .dropdown-item:active.disabled,
        .dropright .dropdown-menu.dropdown-success .dropdown-item:hover.disabled,
        .dropup .dropdown-menu.dropdown-success .dropdown-item.active.disabled,
        .dropup .dropdown-menu.dropdown-success .dropdown-item:active.disabled,
        .dropup .dropdown-menu.dropdown-success .dropdown-item:hover.disabled {
            background-color: transparent;
            box-shadow: none;
        }
        .dropdown .dropdown-menu.dropdown-info .dropdown-item.active,
        .dropdown .dropdown-menu.dropdown-info .dropdown-item:active,
        .dropdown .dropdown-menu.dropdown-info .dropdown-item:hover,
        .dropleft .dropdown-menu.dropdown-info .dropdown-item.active,
        .dropleft .dropdown-menu.dropdown-info .dropdown-item:active,
        .dropleft .dropdown-menu.dropdown-info .dropdown-item:hover,
        .dropright .dropdown-menu.dropdown-info .dropdown-item.active,
        .dropright .dropdown-menu.dropdown-info .dropdown-item:active,
        .dropright .dropdown-menu.dropdown-info .dropdown-item:hover,
        .dropup .dropdown-menu.dropdown-info .dropdown-item.active,
        .dropup .dropdown-menu.dropdown-info .dropdown-item:active,
        .dropup .dropdown-menu.dropdown-info .dropdown-item:hover {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(21, 128, 168) !important;
        }
        .dropdown .dropdown-menu.dropdown-info .dropdown-item.active.disabled,
        .dropdown .dropdown-menu.dropdown-info .dropdown-item:active.disabled,
        .dropdown .dropdown-menu.dropdown-info .dropdown-item:hover.disabled,
        .dropleft .dropdown-menu.dropdown-info .dropdown-item.active.disabled,
        .dropleft .dropdown-menu.dropdown-info .dropdown-item:active.disabled,
        .dropleft .dropdown-menu.dropdown-info .dropdown-item:hover.disabled,
        .dropright .dropdown-menu.dropdown-info .dropdown-item.active.disabled,
        .dropright .dropdown-menu.dropdown-info .dropdown-item:active.disabled,
        .dropright .dropdown-menu.dropdown-info .dropdown-item:hover.disabled,
        .dropup .dropdown-menu.dropdown-info .dropdown-item.active.disabled,
        .dropup .dropdown-menu.dropdown-info .dropdown-item:active.disabled,
        .dropup .dropdown-menu.dropdown-info .dropdown-item:hover.disabled {
            background-color: transparent;
            box-shadow: none;
        }
        .dropdown .dropdown-menu.dropdown-warning .dropdown-item.active,
        .dropdown .dropdown-menu.dropdown-warning .dropdown-item:active,
        .dropdown .dropdown-menu.dropdown-warning .dropdown-item:hover,
        .dropleft .dropdown-menu.dropdown-warning .dropdown-item.active,
        .dropleft .dropdown-menu.dropdown-warning .dropdown-item:active,
        .dropleft .dropdown-menu.dropdown-warning .dropdown-item:hover,
        .dropright .dropdown-menu.dropdown-warning .dropdown-item.active,
        .dropright .dropdown-menu.dropdown-warning .dropdown-item:active,
        .dropright .dropdown-menu.dropdown-warning .dropdown-item:hover,
        .dropup .dropdown-menu.dropdown-warning .dropdown-item.active,
        .dropup .dropdown-menu.dropdown-warning .dropdown-item:active,
        .dropup .dropdown-menu.dropdown-warning .dropdown-item:hover {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(173, 116, 0) !important;
        }
        .dropdown .dropdown-menu.dropdown-warning .dropdown-item.active.disabled,
        .dropdown .dropdown-menu.dropdown-warning .dropdown-item:active.disabled,
        .dropdown .dropdown-menu.dropdown-warning .dropdown-item:hover.disabled,
        .dropleft .dropdown-menu.dropdown-warning .dropdown-item.active.disabled,
        .dropleft .dropdown-menu.dropdown-warning .dropdown-item:active.disabled,
        .dropleft .dropdown-menu.dropdown-warning .dropdown-item:hover.disabled,
        .dropright .dropdown-menu.dropdown-warning .dropdown-item.active.disabled,
        .dropright .dropdown-menu.dropdown-warning .dropdown-item:active.disabled,
        .dropright .dropdown-menu.dropdown-warning .dropdown-item:hover.disabled,
        .dropup .dropdown-menu.dropdown-warning .dropdown-item.active.disabled,
        .dropup .dropdown-menu.dropdown-warning .dropdown-item:active.disabled,
        .dropup .dropdown-menu.dropdown-warning .dropdown-item:hover.disabled {
            background-color: transparent;
            box-shadow: none;
        }
        .dropdown .dropdown-menu.dropdown-dark .dropdown-item.active,
        .dropdown .dropdown-menu.dropdown-dark .dropdown-item:active,
        .dropdown .dropdown-menu.dropdown-dark .dropdown-item:hover,
        .dropleft .dropdown-menu.dropdown-dark .dropdown-item.active,
        .dropleft .dropdown-menu.dropdown-dark .dropdown-item:active,
        .dropleft .dropdown-menu.dropdown-dark .dropdown-item:hover,
        .dropright .dropdown-menu.dropdown-dark .dropdown-item.active,
        .dropright .dropdown-menu.dropdown-dark .dropdown-item:active,
        .dropright .dropdown-menu.dropdown-dark .dropdown-item:hover,
        .dropup .dropdown-menu.dropdown-dark .dropdown-item.active,
        .dropup .dropdown-menu.dropdown-dark .dropdown-item:active,
        .dropup .dropdown-menu.dropdown-dark .dropdown-item:hover {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(35, 38, 39) !important;
        }
        .dropdown .dropdown-menu.dropdown-dark .dropdown-item.active.disabled,
        .dropdown .dropdown-menu.dropdown-dark .dropdown-item:active.disabled,
        .dropdown .dropdown-menu.dropdown-dark .dropdown-item:hover.disabled,
        .dropleft .dropdown-menu.dropdown-dark .dropdown-item.active.disabled,
        .dropleft .dropdown-menu.dropdown-dark .dropdown-item:active.disabled,
        .dropleft .dropdown-menu.dropdown-dark .dropdown-item:hover.disabled,
        .dropright .dropdown-menu.dropdown-dark .dropdown-item.active.disabled,
        .dropright .dropdown-menu.dropdown-dark .dropdown-item:active.disabled,
        .dropright .dropdown-menu.dropdown-dark .dropdown-item:hover.disabled,
        .dropup .dropdown-menu.dropdown-dark .dropdown-item.active.disabled,
        .dropup .dropdown-menu.dropdown-dark .dropdown-item:active.disabled,
        .dropup .dropdown-menu.dropdown-dark .dropdown-item:hover.disabled {
            background-color: transparent;
            box-shadow: none;
        }
        .dropdown .dropdown-menu.dropdown-ins .dropdown-item.active,
        .dropdown .dropdown-menu.dropdown-ins .dropdown-item:active,
        .dropdown .dropdown-menu.dropdown-ins .dropdown-item:hover,
        .dropleft .dropdown-menu.dropdown-ins .dropdown-item.active,
        .dropleft .dropdown-menu.dropdown-ins .dropdown-item:active,
        .dropleft .dropdown-menu.dropdown-ins .dropdown-item:hover,
        .dropright .dropdown-menu.dropdown-ins .dropdown-item.active,
        .dropright .dropdown-menu.dropdown-ins .dropdown-item:active,
        .dropright .dropdown-menu.dropdown-ins .dropdown-item:hover,
        .dropup .dropdown-menu.dropdown-ins .dropdown-item.active,
        .dropup .dropdown-menu.dropdown-ins .dropdown-item:active,
        .dropup .dropdown-menu.dropdown-ins .dropdown-item:hover {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(37, 75, 107) !important;
        }
        .dropdown .dropdown-menu.dropdown-ins .dropdown-item.active.disabled,
        .dropdown .dropdown-menu.dropdown-ins .dropdown-item:active.disabled,
        .dropdown .dropdown-menu.dropdown-ins .dropdown-item:hover.disabled,
        .dropleft .dropdown-menu.dropdown-ins .dropdown-item.active.disabled,
        .dropleft .dropdown-menu.dropdown-ins .dropdown-item:active.disabled,
        .dropleft .dropdown-menu.dropdown-ins .dropdown-item:hover.disabled,
        .dropright .dropdown-menu.dropdown-ins .dropdown-item.active.disabled,
        .dropright .dropdown-menu.dropdown-ins .dropdown-item:active.disabled,
        .dropright .dropdown-menu.dropdown-ins .dropdown-item:hover.disabled,
        .dropup .dropdown-menu.dropdown-ins .dropdown-item.active.disabled,
        .dropup .dropdown-menu.dropdown-ins .dropdown-item:active.disabled,
        .dropup .dropdown-menu.dropdown-ins .dropdown-item:hover.disabled {
            background-color: transparent;
            box-shadow: none;
        }
        .dropdown .dropdown-menu .dropdown-item.disabled,
        .dropleft .dropdown-menu .dropdown-item.disabled,
        .dropright .dropdown-menu .dropdown-item.disabled,
        .dropup .dropdown-menu .dropdown-item.disabled {
            color: rgb(161, 152, 140);
        }
        .dropdown .dropdown-menu .dropdown-item.disabled:active,
        .dropdown .dropdown-menu .dropdown-item.disabled:focus,
        .dropdown .dropdown-menu .dropdown-item.disabled:hover,
        .dropleft .dropdown-menu .dropdown-item.disabled:active,
        .dropleft .dropdown-menu .dropdown-item.disabled:focus,
        .dropleft .dropdown-menu .dropdown-item.disabled:hover,
        .dropright .dropdown-menu .dropdown-item.disabled:active,
        .dropright .dropdown-menu .dropdown-item.disabled:focus,
        .dropright .dropdown-menu .dropdown-item.disabled:hover,
        .dropup .dropdown-menu .dropdown-item.disabled:active,
        .dropup .dropdown-menu .dropdown-item.disabled:focus,
        .dropup .dropdown-menu .dropdown-item.disabled:hover {
            box-shadow: none;
            color: rgb(161, 152, 140) !important;
            background-color: transparent !important;
        }
        .dropdown .dropdown-menu .dropdown-item:active,
        .dropdown .dropdown-menu .dropdown-item:hover,
        .dropleft .dropdown-menu .dropdown-item:active,
        .dropleft .dropdown-menu .dropdown-item:hover,
        .dropright .dropdown-menu .dropdown-item:active,
        .dropright .dropdown-menu .dropdown-item:hover,
        .dropup .dropdown-menu .dropdown-item:active,
        .dropup .dropdown-menu .dropdown-item:hover {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(9, 67, 162);
        }
        .navbar .nav-item.avatar.active {
            background-color: transparent !important;
        }
        .double-nav a {
            color: rgb(232, 230, 227);
        }
        .nav-pills.default-pills .nav-item a {
            color: rgb(168, 160, 149);
        }
        .nav-pills.default-pills .nav-item a.active,
        .nav-pills.default-pills .nav-item a.active:active,
        .nav-pills.default-pills .nav-item a.active:focus,
        .nav-pills.default-pills .nav-item a.active:hover,
        .nav-pills.default-pills .nav-item a:hover {
            background-color: transparent;
            color: rgb(175, 169, 158);
        }
        .nav-pills.default-pills .nav-item a:hover {
            border-left-color: rgb(111, 103, 91);
        }
        .nav-pills.default-pills .nav-item a.active {
            border-left-color: rgb(111, 103, 91);
            box-shadow: none;
        }
        .dotted-scrollspy {
            background-image: initial;
            background-color: rgba(0, 0, 0, 0.55);
        }
        .dotted-scrollspy li a span {
            background-color: rgba(24, 26, 27, 0.54);
        }
        .dotted-scrollspy li a.active span {
            background-image: initial;
            background-color: rgb(24, 26, 27);
        }
        .pswp {
            outline-color: initial;
        }
        .pswp__bg {
            background-image: initial;
            background-color: rgb(0, 0, 0);
        }
        .pswp__img--placeholder--blank {
            background-image: initial;
            background-color: rgb(26, 28, 29);
        }
        .pswp__error-msg {
            color: rgb(200, 195, 188);
        }
        .pswp__error-msg a {
            color: rgb(200, 195, 188);
            text-decoration-color: initial;
        }
        .pswp__button {
            border-color: initial;
            box-shadow: none;
        }
        .pswp__button:active {
            outline-color: initial;
        }
        .pswp__button,
        .pswp__button--arrow--left::before,
        .pswp__button--arrow--right::before {
            background-image: url("https://www.fencingtimelive.com/img/lightbox/default-skin.png");
            background-color: initial;
        }
        @media (-webkit-min-device-pixel-ratio: 1.1),
        (-webkit-min-device-pixel-ratio: 1.09375),
        (-o-min-device-pixel-ratio:35/32),
        (min-resolution: 105dpi),
        (-o-min-device-pixel-ratio:11/10),
        (min-resolution: 1.1dppx) {
            .pswp--svg .pswp__button,
            .pswp--svg .pswp__button--arrow--left::before,
            .pswp--svg .pswp__button--arrow--right::before {
                background-image: url("https://www.fencingtimelive.com/img/lightbox/default-skin.svg");
            }
            .pswp--svg .pswp__button--arrow--left,
            .pswp--svg .pswp__button--arrow--right {
                background-image: initial;
                background-color: initial;
            }
        }
        .pswp__button--arrow--left,
        .pswp__button--arrow--right {
            background-image: initial;
            background-color: initial;
        }
        .pswp__button--arrow--left::before,
        .pswp__button--arrow--right::before {
            background-color: rgba(0, 0, 0, 0.3);
        }
        .pswp__share-modal {
            background-image: initial;
            background-color: rgba(0, 0, 0, 0.5);
        }
        .pswp__share-tooltip {
            background-image: initial;
            background-color: rgb(24, 26, 27);
            box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 5px;
        }
        .pswp__share-tooltip a {
            color: rgb(232, 230, 227);
            text-decoration-color: initial;
        }
        .pswp__share-tooltip a:hover {
            text-decoration-color: initial;
            color: rgb(232, 230, 227);
        }
        a.pswp__share--facebook::before {
            border-color: transparent transparent rgb(48, 52, 54);
        }
        a.pswp__share--facebook:hover {
            background-image: initial;
            background-color: rgb(50, 74, 123);
            color: rgb(232, 230, 227);
        }
        a.pswp__share--facebook:hover::before {
            border-bottom-color: rgb(55, 81, 136);
        }
        a.pswp__share--twitter:hover {
            background-image: initial;
            background-color: rgb(15, 91, 148);
            color: rgb(232, 230, 227);
        }
        a.pswp__share--pinterest:hover {
            background-image: initial;
            background-color: rgb(53, 57, 59);
            color: rgb(220, 68, 73);
        }
        a.pswp__share--download:hover {
            background-image: initial;
            background-color: rgb(43, 47, 49);
        }
        .pswp__counter {
            color: rgb(232, 230, 227);
        }
        .pswp__caption small {
            color: rgb(189, 183, 175);
        }
        .pswp__caption__center {
            color: rgb(200, 195, 188);
        }
        .pswp__preloader--active .pswp__preloader__icn {
            background-image: url("https://www.fencingtimelive.com/img/lightbox/preloader.gif");
            background-color: initial;
        }
        .pswp--css_animation .pswp__preloader__icn {
            background-image: initial;
            background-color: initial;
        }
        .pswp--css_animation .pswp__preloader__donut {
            border-color: rgb(48, 52, 54) rgb(48, 52, 54) transparent transparent;
            background-image: initial;
            background-color: initial;
        }
        #sidenav-overlay,
        .pswp__caption,
        .pswp__top-bar {
            background-color: rgba(0, 0, 0, 0.5);
        }
        .pricing-card .price .version,
        .pswp__ui--fit .pswp__caption,
        .pswp__ui--fit .pswp__top-bar {
            background-color: rgba(0, 0, 0, 0.3);
        }
        .chips .input,
        .pswp--minimal--dark .pswp__top-bar {
            background-image: initial;
            background-color: initial;
        }
        .chip {
            color: rgba(232, 230, 227, 0.6);
            background-color: rgb(33, 36, 37);
        }
        .chip:hover {
            background-color: rgb(42, 45, 47);
        }
        .chip:focus {
            background-color: rgb(61, 66, 69);
        }
        .chips {
            outline-color: initial;
            box-shadow: none;
            border-top-color: initial;
            border-right-color: initial;
            border-left-color: initial;
            border-bottom-color: rgb(60, 65, 68);
        }
        .chips.focus {
            border-bottom-color: rgb(9, 63, 153);
            box-shadow: rgb(9, 67, 162) 0px 1px 0px 0px;
        }
        .chips .tag.selected {
            border-bottom-color: rgb(9, 63, 153);
            color: rgb(232, 230, 227);
        }
        .chips .input {
            border-color: initial;
            outline-color: initial;
            color: rgba(232, 230, 227, 0.6);
        }
        .chips .input:focus {
            border-color: initial !important;
            box-shadow: none !important;
        }
        .form-header {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            color: rgb(232, 230, 227);
        }
        .form-check-input[type="radio"]:not(:checked) + label::after, .form-check-input[type="radio"]:not(:checked) + label::before, label.btn input[type="radio"]:not(:checked) + label::after, label.btn input[type="radio"]:not(:checked) + label::before {
            border-color: rgb(110, 102, 91);
        }
        .form-check-input[type="radio"]:checked + label::before, label.btn input[type="radio"]:checked + label::before {
            border-color: transparent;
        }
        .form-check-input[type="radio"].with-gap:checked + label::after, .form-check-input[type="radio"].with-gap:checked + label::before, .form-check-input[type="radio"]:checked + label::after, label.btn input[type="radio"].with-gap:checked + label::after, label.btn input[type="radio"].with-gap:checked + label::before, label.btn input[type="radio"]:checked + label::after {
            border-color: rgb(9, 63, 153);
        }
        .form-check-input[type="radio"].with-gap:checked + label::after, .form-check-input[type="radio"]:checked + label::after, label.btn input[type="radio"].with-gap:checked + label::after, label.btn input[type="radio"]:checked + label::after {
            background-color: rgb(9, 67, 162);
        }
        .form-check-input[type="radio"].with-gap:disabled:checked + label::before, label.btn input[type="radio"].with-gap:disabled:checked + label::before {
            border-color: rgba(140, 130, 115, 0.46);
        }
        .form-check-input[type="radio"].with-gap:disabled:checked + label::after, label.btn input[type="radio"].with-gap:disabled:checked + label::after {
            border-color: initial;
            background-color: rgba(0, 0, 0, 0.46);
        }
        .form-check-input[type="radio"]:disabled:checked + label::before, .form-check-input[type="radio"]:disabled:not(:checked) + label::before, label.btn input[type="radio"]:disabled:checked + label::before, label.btn input[type="radio"]:disabled:not(:checked) + label::before {
            background-color: transparent;
            border-color: rgba(140, 130, 115, 0.46);
        }
        .form-check-input[type="radio"]:disabled + span, label.btn input[type="radio"]:disabled + span {
            color: rgba(232, 230, 227, 0.46);
        }
        .form-check-input[type="radio"]:disabled:not(:checked) + span::before, label.btn input[type="radio"]:disabled:not(:checked) + span::before {
            border-color: rgba(140, 130, 115, 0.46);
        }
        .form-check-input[type="radio"]:disabled:checked + span::after, label.btn input[type="radio"]:disabled:checked + span::after {
            background-color: rgba(0, 0, 0, 0.46);
            border-color: rgb(67, 72, 75);
        }
        .md-disabled::after {
            background-color: rgba(9, 67, 162, 0.5) !important;
            border-color: rgba(9, 63, 153, 0.2) !important;
        }
        .md-disabled::before {
            border-color: rgba(9, 63, 153, 0.25) !important;
        }
        .form-check-input[type="checkbox"] + label::before, .form-check-input[type="checkbox"]:not(.filled-in) + label::after, label.btn input[type="checkbox"] + label::before, label.btn input[type="checkbox"]:not(.filled-in) + label::after {
            border-color: rgb(81, 88, 91);
        }
        .form-check-input[type="checkbox"]:not(.filled-in) + label::after, label.btn input[type="checkbox"]:not(.filled-in) + label::after {
            border-color: initial;
        }
        .form-check-input[type="checkbox"]:not(:checked):disabled + label::before, label.btn input[type="checkbox"]:not(:checked):disabled + label::before {
            border-color: initial;
            background-color: rgb(61, 66, 69);
        }
        .form-check-input[type="checkbox"]:checked + label::before, label.btn input[type="checkbox"]:checked + label::before {
            border-color: transparent rgb(9, 63, 153) rgb(9, 63, 153) transparent;
        }
        .form-check-input[type="checkbox"]:checked:disabled + label::before, label.btn input[type="checkbox"]:checked:disabled + label::before {
            border-right-color: rgb(67, 72, 75);
            border-bottom-color: rgb(67, 72, 75);
        }
        .form-check-input[type="checkbox"]:indeterminate + label::before, label.btn input[type="checkbox"]:indeterminate + label::before {
            border-top-color: initial;
            border-left-color: initial;
            border-right-color: rgb(9, 63, 153); border-bottom-color: initial;
        }
        .form-check-input[type="checkbox"]:indeterminate:disabled + label::before, label.btn input[type="checkbox"]:indeterminate:disabled + label::before {
            border-right-color: rgba(140, 130, 115, 0.46); background-color: transparent;
        }
        .form-check-input[type="checkbox"].filled-in:not(:checked) + label::before, label.btn input[type="checkbox"].filled-in:not(:checked) + label::before {
            border-color: transparent;
        }
        .form-check-input[type="checkbox"].filled-in:not(:checked) + label::after, label.btn input[type="checkbox"].filled-in:not(:checked) + label::after {
            background-color: transparent;
            border-color: rgb(110, 102, 91);
        }
        .form-check-input[type="checkbox"].filled-in:checked + label::before, label.btn input[type="checkbox"].filled-in:checked + label::before {
            border-color: transparent rgb(48, 52, 54) rgb(48, 52, 54) transparent;
        }
        .form-check-input[type="checkbox"].filled-in:checked + label::after, label.btn input[type="checkbox"].filled-in:checked + label::after {
            border-color: rgb(95, 41, 122);
            background-color: rgb(101, 43, 130);
        }
        .form-check-input[type="checkbox"].filled-in.filled-in-danger:checked + label::after, label.btn input[type="checkbox"].filled-in.filled-in-danger:checked + label::after {
            background-color: rgb(169, 20, 9);
            border-color: rgb(157, 19, 9);
        }
        .form-check-input[type="checkbox"]:disabled:not(:checked) + label::after, .form-check-input[type="checkbox"]:disabled:not(:checked) + label::before, label.btn input[type="checkbox"]:disabled:not(:checked) + label::after, label.btn input[type="checkbox"]:disabled:not(:checked) + label::before {
            background-color: rgb(61, 66, 69);
            border-color: rgb(67, 72, 75);
        }
        .form-check-input[type="checkbox"]:disabled:checked + label::before, label.btn input[type="checkbox"]:disabled:checked + label::before {
            background-color: transparent;
        }
        .form-check-input[type="checkbox"]:disabled:checked + label::after, label.btn input[type="checkbox"]:disabled:checked + label::after {
            background-color: rgb(61, 66, 69);
            border-color: rgb(67, 72, 75);
        }
        .select-wrapper input.select-dropdown {
            background-color: transparent;
            border-top-color: initial;
            border-right-color: initial;
            border-left-color: initial;
            border-bottom-color: rgb(60, 65, 68);
            outline-color: initial;
        }
        .select-wrapper input.select-dropdown:disabled {
            color: rgba(232, 230, 227, 0.3);
            border-bottom-color: rgba(140, 130, 115, 0.2);
        }
        .select-wrapper input.select-dropdown .selected,
        .select-wrapper input.select-dropdown li:focus {
            background-color: rgba(0, 0, 0, 0.15);
        }
        .select-wrapper input.select-dropdown li.active {
            background-image: initial;
            background-color: initial;
        }
        .select-wrapper input.select-dropdown .fab,
        .select-wrapper input.select-dropdown .far,
        .select-wrapper input.select-dropdown .fas {
            color: inherit;
        }
        .select-wrapper input.active {
            box-shadow: rgb(9, 67, 162) 0px 1px 0px 0px;
            border-bottom-color: rgb(9, 63, 153);
        }
        .select-wrapper span.caret {
            color: initial;
        }
        .select-wrapper span.caret.disabled {
            color: rgba(232, 230, 227, 0.3);
        }
        .select-wrapper + label {
            color: rgb(158, 150, 137);
        }
        .select-wrapper + label.active-check {
            color: rgb(75, 160, 244);
        }
        .select-wrapper i,
        .select-wrapper + label.disabled {
            color: rgba(232, 230, 227, 0.3);
        }
        .select-wrapper.md-form > ul li label {
            color: rgb(75, 160, 244);
        }
        .select-wrapper.md-form.colorful-select > ul li.select-toggle-all:hover label {
            color: rgb(232, 230, 227);
        }
        .select-wrapper.md-form.md-outline span.caret {
            color: rgb(181, 175, 166) !important;
        }
        .select-wrapper.md-form.md-outline span.caret.active {
            color: rgb(75, 160, 244) !important;
        }
        .select-wrapper.md-form.md-outline input.select-dropdown {
            color: rgb(181, 175, 166);
        }
        .select-wrapper.md-form.md-outline input.select-dropdown:focus {
            border-color: rgb(9, 63, 153);
            box-shadow: rgb(9, 67, 162) 0px 0px 0px 1px inset;
        }
        .accordion.md-accordion.accordion-blocks .card,
        .dropdown-content,
        .mdb-autocomplete-wrap {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
        }
        .select-wrapper.md-form.md-outline + label {
            color: rgb(158, 150, 137);
            background-image: initial;
            background-color: rgb(24, 26, 27);
        }
        .select-wrapper.md-form.md-outline + label.active {
            color: rgb(75, 160, 244);
        }
        select:disabled {
            color: rgba(232, 230, 227, 0.3);
        }
        .select-dropdown li.disabled,
        .select-dropdown li.disabled > span,
        .select-dropdown li.optgroup {
            color: rgba(232, 230, 227, 0.3);
            background-color: transparent !important;
        }
        .select-dropdown li.optgroup {
            border-top-color: rgb(53, 57, 59);
        }
        .select-dropdown li.optgroup.selected > span {
            color: rgba(232, 230, 227, 0.7);
        }
        .select-dropdown li.optgroup > span {
            color: rgba(232, 230, 227, 0.4);
        }
        .dropdown-content {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
            background-color: rgb(24, 26, 27);
        }
        .dropdown-content li {
            color: rgb(232, 230, 227);
        }
        .dropdown-content li.active,
        .dropdown-content li:hover {
            background-color: rgb(34, 36, 38);
        }
        .dropdown-content li > a,
        .dropdown-content li > span {
            color: rgb(209, 205, 199);
        }
        .colorful-select .dropdown-content li.active span {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            color: rgb(232, 230, 227) !important;
        }
        .colorful-select .dropdown-content li.active span [type="checkbox"]:checked + label::before {
            border-color: transparent rgb(48, 52, 54) rgb(48, 52, 54) transparent;
        }
        .colorful-select .dropdown-content li a:hover,
        .colorful-select .dropdown-content li span:hover {
            box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 17px 0px,
            rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;
            color: rgb(232, 230, 227) !important;
        }
        .colorful-select .dropdown-content li a:hover [type="checkbox"] + label::before, .colorful-select .dropdown-content li span:hover [type="checkbox"] + label::before {
            border-color: rgb(48, 52, 54);
        }
        .colorful-select .dropdown-content li a:hover [type="checkbox"]:checked + label::before, .colorful-select .dropdown-content li span:hover [type="checkbox"]:checked + label::before {
            border-color: transparent rgb(48, 52, 54) rgb(48, 52, 54) transparent;
        }
        .colorful-select .dropdown-content li.disabled.active span,
        .colorful-select .dropdown-content li.optgroup.active span,
        .colorful-select .dropdown-content li:disabled.active span {
            box-shadow: none;
            border-bottom-color: rgba(140, 130, 115, 0.3);
            color: rgba(232, 230, 227, 0.3) !important;
        }
        .colorful-select .dropdown-content li.disabled a:hover,
        .colorful-select .dropdown-content li.disabled span:hover,
        .colorful-select .dropdown-content li.optgroup a:hover,
        .colorful-select .dropdown-content li.optgroup span:hover,
        .colorful-select .dropdown-content li:disabled a:hover,
        .colorful-select .dropdown-content li:disabled span:hover {
            box-shadow: none;
            border-bottom-color: rgba(140, 130, 115, 0.3);
            color: rgba(232, 230, 227, 0.3) !important;
            background-color: rgb(24, 26, 27) !important;
        }
        .dropdown-primary .dropdown-content li a,
        .dropdown-primary .dropdown-content li span:hover,
        .dropdown-primary .dropdown-content li.active {
            background-color: rgb(9, 67, 162) !important;
        }
        .dropdown-primary .dropdown-content li.disabled.active {
            background-color: transparent !important;
        }
        .dropdown-primary .search-wrap input:focus {
            border-bottom-color: rgb(9, 63, 153);
            box-shadow: rgb(9, 67, 162) 0px 1px 0px 0px;
        }
        .dropdown-danger .dropdown-content li a,
        .dropdown-danger .dropdown-content li span:hover,
        .dropdown-danger .dropdown-content li.active {
            background-color: rgb(163, 0, 0) !important;
        }
        .dropdown-danger .dropdown-content li.disabled.active {
            background-color: transparent !important;
        }
        .dropdown-danger .search-wrap input:focus {
            border-bottom-color: rgb(194, 0, 0);
            box-shadow: rgb(163, 0, 0) 0px 1px 0px 0px;
        }
        .dropdown-default .dropdown-content li a,
        .dropdown-default .dropdown-content li span:hover,
        .dropdown-default .dropdown-content li.active {
            background-color: rgb(34, 150, 138) !important;
        }
        .dropdown-default .dropdown-content li.disabled.active {
            background-color: transparent !important;
        }
        .dropdown-default .search-wrap input:focus {
            border-bottom-color: rgb(35, 151, 140);
            box-shadow: rgb(34, 150, 138) 0px 1px 0px 0px;
        }
        .dropdown-secondary .dropdown-content li a,
        .dropdown-secondary .dropdown-content li span:hover,
        .dropdown-secondary .dropdown-content li.active {
            background-color: rgb(101, 43, 130) !important;
        }
        .dropdown-secondary .dropdown-content li.disabled.active {
            background-color: transparent !important;
        }
        .dropdown-secondary .search-wrap input:focus {
            border-bottom-color: rgb(95, 41, 122);
            box-shadow: rgb(101, 43, 130) 0px 1px 0px 0px;
        }
        .dropdown-success .dropdown-content li a,
        .dropdown-success .dropdown-content li span:hover,
        .dropdown-success .dropdown-content li.active {
            background-color: rgb(0, 160, 65) !important;
        }
        .dropdown-success .dropdown-content li.disabled.active {
            background-color: transparent !important;
        }
        .dropdown-success .search-wrap input:focus {
            border-bottom-color: rgb(0, 195, 79);
            box-shadow: rgb(0, 160, 65) 0px 1px 0px 0px;
        }
        .dropdown-info .dropdown-content li a,
        .dropdown-info .dropdown-content li span:hover,
        .dropdown-info .dropdown-content li.active {
            background-color: rgb(21, 128, 168) !important;
        }
        .dropdown-info .dropdown-content li.disabled.active {
            background-color: transparent !important;
        }
        .dropdown-info .search-wrap input:focus {
            border-bottom-color: rgb(19, 116, 152);
            box-shadow: rgb(21, 128, 168) 0px 1px 0px 0px;
        }
        .dropdown-warning .dropdown-content li a,
        .dropdown-warning .dropdown-content li span:hover,
        .dropdown-warning .dropdown-content li.active {
            background-color: rgb(173, 116, 0) !important;
        }
        .dropdown-warning .dropdown-content li.disabled.active {
            background-color: transparent !important;
        }
        .dropdown-warning .search-wrap input:focus {
            border-bottom-color: rgb(163, 109, 0);
            box-shadow: rgb(173, 116, 0) 0px 1px 0px 0px;
        }
        .dropdown-dark .dropdown-content li a,
        .dropdown-dark .dropdown-content li span:hover,
        .dropdown-dark .dropdown-content li.active {
            background-color: rgb(35, 38, 39) !important;
        }
        .dropdown-dark .dropdown-content li.disabled.active {
            background-color: transparent !important;
        }
        .dropdown-dark .search-wrap input:focus {
            border-bottom-color: rgb(125, 116, 103);
            box-shadow: rgb(35, 38, 39) 0px 1px 0px 0px;
        }
        .dropdown-ins .dropdown-content li a,
        .dropdown-ins .dropdown-content li span:hover,
        .dropdown-ins .dropdown-content li.active {
            background-color: rgb(37, 75, 107) !important;
        }
        .dropdown-ins .dropdown-content li.disabled.active,
        .md-dropdown li.disabled.active {
            background-color: transparent !important;
        }
        .dropdown-ins .search-wrap input:focus {
            border-bottom-color: rgb(51, 105, 150);
            box-shadow: rgb(37, 75, 107) 0px 1px 0px 0px;
        }
        .switch label input[type="checkbox"]:checked + .lever {
            background-color: rgb(53, 37, 61);
        }
        .switch label input[type="checkbox"]:checked + .lever::after {
            background-color: rgb(101, 43, 130);
        }
        .switch label input[type="checkbox"]:checked:not(:disabled) ~ .lever:active::after {
            box-shadow: rgba(0, 0, 0, 0.4) 0px 0.0625rem 0.1875rem 0.0625rem,
            rgba(101, 43, 130, 0.1) 0px 0px 0px 0.9375rem;
        }
        .switch label input[type="checkbox"]:not(:disabled) ~ .lever:active::after {
            box-shadow: rgba(0, 0, 0, 0.4) 0px 0.0625rem 0.1875rem 0.0625rem,
            rgba(0, 0, 0, 0.08) 0px 0px 0px 0.9375rem;
        }
        .switch label input[type="checkbox"]:disabled + .lever::after, .switch label input[type="checkbox"]:disabled:checked + .lever::after {
            background-color: rgb(61, 66, 69);
        }
        .switch label .lever {
            background-color: rgb(95, 103, 107);
        }
        .switch label .lever::after {
            background-color: rgb(32, 35, 36);
            box-shadow: rgba(0, 0, 0, 0.4) 0px 0.0625rem 0.1875rem 0.0625rem;
        }
        .range-field input[type="range"] {
            background-color: transparent;
            outline-color: initial;
            border-color: rgb(48, 52, 54);
        }
        .range-field input[type="range"]:focus {
            outline-color: initial;
        }
        .range-field input[type="range"] + .thumb {
            border-color: initial;
            background-color: rgb(9, 67, 162);
        }
        .range-field input[type="range"] + .thumb .value {
            color: rgb(75, 160, 244);
        }
        .range-field input[type="range"] + .thumb.active .value {
            color: rgb(232, 230, 227);
        }
        .range-field input[type="range"]::-webkit-slider-runnable-track {
            background-image: initial;
            background-color: rgb(59, 64, 66); border-color: initial;
        }
        .range-field input[type="range"]::-webkit-slider-thumb {
            border-color: initial;
            background-color: rgb(9, 67, 162);
        }
        .range-field input[type="range"]:focus::-webkit-slider-runnable-track {
            background-image: initial;
            background-color: rgb(53, 57, 59);
        }
        button:focus {
            outline-color: initial !important;
        }
        button.mdb-autocomplete-clear {
            border-color: initial;
            background-image: initial;
            background-color: initial;
        }
        .md-accordion .card,
        .md-accordion .card:first-of-type,
        .md-accordion .card:not(:first-of-type):not(:last-of-type) {
            border-bottom-color: rgb(57, 61, 64);
        }
        button.mdb-autocomplete-clear svg {
            fill: rgb(176, 169, 159);
        }
        .mdb-autocomplete-wrap {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
            background-image: initial;
            background-color: rgb(24, 26, 27);
        }
        .mdb-autocomplete-wrap li:hover {
            background-image: initial;
            background-color: rgb(34, 36, 38);
        }
        .md-accordion .card {
            box-shadow: none;
        }
        .md-accordion .card .card-header {
            border-bottom-color: initial;
            background-image: initial;
            background-color: initial;
        }
        .md-accordion .card .card-body {
            color: rgb(170, 163, 152);
        }
        .accordion-gradient-bcg {
            background-image: linear-gradient(45deg,
            rgba(187, 17, 103, 0.6),
            rgba(8, 18, 150, 0.6) 100%);
            background-color: initial;
        }
        .accordion.md-accordion.accordion-2 .card,
        .accordion.md-accordion.accordion-5 .card {
            background-color: transparent;
        }
        .accordion.md-accordion.accordion-1 .card,
        .accordion.md-accordion.accordion-1 .card .card-header,
        .accordion.md-accordion.accordion-2 .card,
        .accordion.md-accordion.accordion-2 .card .card-header,
        .accordion.md-accordion.accordion-4 .card,
        .accordion.md-accordion.accordion-4 .card .card-header,
        .accordion.md-accordion.accordion-5 .card,
        .accordion.md-accordion.accordion-5 .card .card-header {
            border-color: initial;
        }
        .accordion.md-accordion.accordion-2 .card .card-body {
            border-color: initial;
        }
        .accordion.md-accordion.accordion-5 .card .card-header {
            background-color: rgb(169, 20, 9);
        }
        .accordion.md-accordion.accordion-5 .card .card-header:hover {
            background-color: rgb(55, 72, 80);
        }
        .accordion.md-accordion.accordion-5 .card .card-header .fab,
        .accordion.md-accordion.accordion-5 .card .card-header .far,
        .accordion.md-accordion.accordion-5 .card .card-header .fas {
            background-color: rgb(24, 26, 27);
        }
        .accordion.md-accordion.accordion-blocks .card {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
        }
        #toast-container > div,
        .side-nav,
        .side-nav .logo-wrapper.sn-avatar-wrapper img {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
        }
        .accordion.md-accordion.accordion-blocks .card .card-body {
            border-top-color: rgb(53, 57, 59);
        }
        .sn-bg-1 {
            background-image: url("https://mdbootstrap.com/img/Photos/Others/sidenav1.jpg");
        }
        .sn-bg-2 {
            background-image: url("https://mdbootstrap.com/img/Photos/Others/sidenav2.jpg");
        }
        .sn-bg-3 {
            background-image: url("https://mdbootstrap.com/img/Photos/Others/sidenav3.jpg");
        }
        .sn-bg-4 {
            background-image: url("https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg");
        }
        .side-nav {
            background-color: rgb(36, 39, 41);
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
        }
        .side-nav.wide .logo-wrapper.sn-ad-avatar-wrapper {
            border-bottom-color: rgba(48, 52, 54, 0.65);
        }
        .side-nav.wide .logo-wrapper.sn-ad-avatar-wrapper a {
            color: rgb(232, 230, 227);
        }
        .side-nav.side-nav-light .about p,
        .side-nav.side-nav-light .logo-wrapper.sn-ad-avatar-wrapper,
        .side-nav.side-nav-light .social .fab,
        .side-nav.side-nav-light .social .far,
        .side-nav.side-nav-light .social .fas {
            color: rgb(178, 172, 162);
        }
        .side-nav ul {
            list-style-image: initial;
        }
        .side-nav.side-nav-light {
            background-color: rgb(39, 42, 44);
        }
        .side-nav.side-nav-light .logo-wrapper {
            border-bottom-color: rgba(77, 83, 86, 0.3);
        }
        .side-nav.side-nav-light .about {
            border-bottom-color: rgba(77, 83, 86, 0.3);
        }
        .side-nav.side-nav-light .social {
            border-bottom-color: rgba(77, 83, 86, 0.3);
        }
        .side-nav.side-nav-light .search-form input[type="text"] {
            border-bottom-color: rgba(77, 83, 86, 0.3);
            color: rgb(178, 172, 162) !important;
        }
        .side-nav.side-nav-light .search-form input[type="text"]::-webkit-input-placeholder {
            color: rgb(178, 172, 162) !important;
        }
        .side-nav.side-nav-light .search-form input[type="text"]::placeholder {
            color: rgb(178, 172, 162) !important;
        }
        .side-nav.side-nav-light .collapsible a {
            color: rgb(178, 172, 162);
        }
        .side-nav.side-nav-light .collapsible-body a {
            background-color: rgba(0, 0, 0, 0.1);
        }
        .side-nav.side-nav-light .collapsible li .collapsible-header:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }
        .side-nav.side-nav-light .collapsible li .collapsible-header.active {
            color: rgb(75, 160, 244);
            background-color: transparent;
        }
        .side-nav .collapsible li a:hover {
            background-color: rgba(0, 0, 0, 0.15);
        }
        .side-nav .collapsible > li a.collapsible-header.active,
        .side-nav .collapsible > li a.collapsible-header:hover {
            background-color: rgba(24, 26, 27, 0.15);
        }
        .side-nav .collapsible a {
            color: rgb(232, 230, 227);
        }
        .side-nav .collapsible-body a {
            background-color: rgba(0, 0, 0, 0.15);
        }
        .side-nav .logo-wrapper {
            border-bottom-color: rgba(77, 83, 86, 0.3);
        }
        .side-nav .about, .side-nav .search-form input[type="text"],
        .side-nav .social {
            border-bottom-color: rgba(48, 52, 54, 0.65);
        }
        .side-nav .logo-wrapper.sn-avatar-wrapper img {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
        }
        .side-nav .social .fab,
        .side-nav .social .far,
        .side-nav .social .fas {
            color: rgb(213, 209, 204);
        }
        .side-nav .social .fab:hover,
        .side-nav .social .far:hover,
        .side-nav .social .fas:hover {
            color: rgb(190, 185, 176);
        }
        .side-nav .search-form input[type="text"]::-webkit-input-placeholder {
            color: rgb(232, 230, 227);
        }
        .side-nav .search-form input[type="text"]::placeholder {
            color: rgb(232, 230, 227);
        }
        .collection-card .stripe.dark {
            background-color: rgba(0, 0, 0, 0.7);
        }
        .collection-card .stripe.dark a p {
            color: rgb(221, 218, 214);
        }
        .collection-card .stripe.light {
            background-color: rgba(24, 26, 27, 0.7);
        }
        .collection-card .stripe.light a p {
            color: rgb(190, 185, 176);
        }
        .rating {
            color: rgb(255, 170, 26);
        }
        .cart-modal .table .fa-times {
            color: rgb(75, 160, 244);
        }
        .card.card-ecommerce .card-footer {
            background-color: transparent;
        }
        .card.card-ecommerce .card-footer .discount {
            color: rgb(171, 163, 152);
        }
        .card.card-ecommerce .card-footer a {
            color: rgb(158, 150, 137);
        }
        .card.card-ecommerce .card-footer a:hover {
            color: rgb(255, 55, 55);
        }
        .card.card-ecommerce .card-footer a.active {
            color: rgb(255, 55, 55);
        }
        .carousel-multi-item .carousel-indicators li {
            background-color: rgb(9, 67, 162);
        }
        .carousel-multi-item .carousel-indicators .active {
            background-color: rgb(9, 67, 162);
        }
        .carousel-multi-item .controls-top .btn-floating {
            background-image: initial;
            background-color: rgb(9, 67, 162);
        }
        .md-toast-message a:hover {
            color: rgb(200, 195, 188);
            text-decoration-color: initial;
        }
        .md-toast-close-button {
            text-shadow: rgb(24, 26, 27) 0px 1px 0px;
        }
        .md-toast-close-button:focus,
        .md-toast-close-button:hover {
            text-decoration-color: initial;
        }
        button.md-toast-close-button {
            background-image: initial;
            background-color: initial;
            border-color: initial;
        }
        #toast-container > div {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
        }
        #toast-container > :hover {
            box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 17px 0px,
            rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;
        }
        .md-toast {
            background-color: rgb(2, 2, 3);
        }
        .md-toast-success {
            background-color: rgb(0, 160, 65);
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADsSURBVEhLY2AYBfQMgf///3P8+/evAIgvA/FsIF+BavYDDWMBGroaSMMBiE8VC7AZDrIFaMFnii3AZTjUgsUUWUDA8OdAH6iQbQEhw4HyGsPEcKBXBIC4ARhex4G4BsjmweU1soIFaGg/WtoFZRIZdEvIMhxkCCjXIVsATV6gFGACs4Rsw0EGgIIH3QJYJgHSARQZDrWAB+jawzgs+Q2UO49D7jnRSRGoEFRILcdmEMWGI0cm0JJ2QpYA1RDvcmzJEWhABhD/pqrL0S0CWuABKgnRki9lLseS7g2AlqwHWQSKH4oKLrILpRGhEQCw2LiRUIa4lwAAAABJRU5ErkJggg==") !important;
        }
        .md-toast-error {
            background-color: rgb(172, 0, 15);
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHOSURBVEhLrZa/SgNBEMZzh0WKCClSCKaIYOED+AAKeQQLG8HWztLCImBrYadgIdY+gIKNYkBFSwu7CAoqCgkkoGBI/E28PdbLZmeDLgzZzcx83/zZ2SSXC1j9fr+I1Hq93g2yxH4iwM1vkoBWAdxCmpzTxfkN2RcyZNaHFIkSo10+8kgxkXIURV5HGxTmFuc75B2RfQkpxHG8aAgaAFa0tAHqYFfQ7Iwe2yhODk8+J4C7yAoRTWI3w/4klGRgR4lO7Rpn9+gvMyWp+uxFh8+H+ARlgN1nJuJuQAYvNkEnwGFck18Er4q3egEc/oO+mhLdKgRyhdNFiacC0rlOCbhNVz4H9FnAYgDBvU3QIioZlJFLJtsoHYRDfiZoUyIxqCtRpVlANq0EU4dApjrtgezPFad5S19Wgjkc0hNVnuF4HjVA6C7QrSIbylB+oZe3aHgBsqlNqKYH48jXyJKMuAbiyVJ8KzaB3eRc0pg9VwQ4niFryI68qiOi3AbjwdsfnAtk0bCjTLJKr6mrD9g8iq/S/B81hguOMlQTnVyG40wAcjnmgsCNESDrjme7wfftP4P7SP4N3CJZdvzoNyGq2c/HWOXJGsvVg+RA/k2MC/wN6I2YA2Pt8GkAAAAASUVORK5CYII=") !important;
        }
        .md-toast-info {
            background-color: rgb(21, 128, 168);
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGwSURBVEhLtZa9SgNBEMc9sUxxRcoUKSzSWIhXpFMhhYWFhaBg4yPYiWCXZxBLERsLRS3EQkEfwCKdjWJAwSKCgoKCcudv4O5YLrt7EzgXhiU3/4+b2ckmwVjJSpKkQ6wAi4gwhT+z3wRBcEz0yjSseUTrcRyfsHsXmD0AmbHOC9Ii8VImnuXBPglHpQ5wwSVM7sNnTG7Za4JwDdCjxyAiH3nyA2mtaTJufiDZ5dCaqlItILh1NHatfN5skvjx9Z38m69CgzuXmZgVrPIGE763Jx9qKsRozWYw6xOHdER+nn2KkO+Bb+UV5CBN6WC6QtBgbRVozrahAbmm6HtUsgtPC19tFdxXZYBOfkbmFJ1VaHA1VAHjd0pp70oTZzvR+EVrx2Ygfdsq6eu55BHYR8hlcki+n+kERUFG8BrA0BwjeAv2M8WLQBtcy+SD6fNsmnB3AlBLrgTtVW1c2QN4bVWLATaIS60J2Du5y1TiJgjSBvFVZgTmwCU+dAZFoPxGEEs8nyHC9Bwe2GvEJv2WXZb0vjdyFT4Cxk3e/kIqlOGoVLwwPevpYHT+00T+hWwXDf4AJAOUqWcDhbwAAAAASUVORK5CYII=") !important;
        }
        .md-toast-warning {
            background-color: rgb(173, 116, 0);
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGYSURBVEhL5ZSvTsNQFMbXZGICMYGYmJhAQIJAICYQPAACiSDB8AiICQQJT4CqQEwgJvYASAQCiZiYmJhAIBATCARJy+9rTsldd8sKu1M0+dLb057v6/lbq/2rK0mS/TRNj9cWNAKPYIJII7gIxCcQ51cvqID+GIEX8ASG4B1bK5gIZFeQfoJdEXOfgX4QAQg7kH2A65yQ87lyxb27sggkAzAuFhbbg1K2kgCkB1bVwyIR9m2L7PRPIhDUIXgGtyKw575yz3lTNs6X4JXnjV+LKM/m3MydnTbtOKIjtz6VhCBq4vSm3ncdrD2lk0VgUXSVKjVDJXJzijW1RQdsU7F77He8u68koNZTz8Oz5yGa6J3H3lZ0xYgXBK2QymlWWA+RWnYhskLBv2vmE+hBMCtbA7KX5drWyRT/2JsqZ2IvfB9Y4bWDNMFbJRFmC9E74SoS0CqulwjkC0+5bpcV1CZ8NMej4pjy0U+doDQsGyo1hzVJttIjhQ7GnBtRFN1UarUlH8F3xict+HY07rEzoUGPlWcjRFRr4/gChZgc3ZL2d8oAAAAASUVORK5CYII=") !important;
        }
        .md-toast-progress {
            background-color: rgb(0, 0, 0);
        }
        .md-progress {
            box-shadow: none;
            background-color: rgb(34, 36, 38);
        }
        .md-progress .progress-bar {
            box-shadow: none;
            background-color: rgb(10, 57, 129);
        }
        .md-progress .indeterminate {
            background-color: rgb(6, 66, 115);
        }
        .md-progress .indeterminate::after,
        .md-progress .indeterminate::before {
            background-color: inherit;
        }
        .preloader-wrapper .spinner-layer .gap-patch {
            border-color: inherit;
        }
        .preloader-wrapper .spinner-layer .circle-clipper {
            border-color: inherit;
        }
        .preloader-wrapper .spinner-layer .circle-clipper .circle {
            border-top-color: inherit;
            border-right-color: inherit;
            border-left-color: inherit;
            border-bottom-color: transparent !important;
        }
        .preloader-wrapper .spinner-layer .circle-clipper.left .circle {
            border-right-color: transparent !important;
        }
        .preloader-wrapper .spinner-layer .circle-clipper.right .circle {
            border-left-color: transparent !important;
        }
        .preloader-wrapper .spinner-blue,
        .preloader-wrapper .spinner-blue-only {
            border-color: rgb(9, 63, 153);
        }
        .preloader-wrapper .spinner-red,
        .preloader-wrapper .spinner-red-only {
            border-color: rgb(146, 36, 26);
        }
        .preloader-wrapper .spinner-yellow,
        .preloader-wrapper .spinner-yellow-only {
            border-color: rgb(182, 134, 0);
        }
        .preloader-wrapper .spinner-green,
        .preloader-wrapper .spinner-green-only {
            border-color: rgb(18, 186, 104);
        }
        #mdb-preloader {
            background-color: rgb(0, 0, 0);
        }
        .ps--active-x > .ps__rail-x,
        .ps--active-y > .ps__rail-y {
            background-color: transparent;
        }
        .ps .ps__rail-x.ps--clicking,
        .ps .ps__rail-x:focus,
        .ps .ps__rail-x:hover,
        .ps .ps__rail-y.ps--clicking,
        .ps .ps__rail-y:focus,
        .ps .ps__rail-y:hover {
            background-color: rgb(34, 36, 38);
        }
        .ps__thumb-x,
        .ps__thumb-y {
            background-color: rgb(72, 78, 81);
        }
        .ps__rail-x.ps--clicking .ps__thumb-x,
        .ps__rail-x:focus > .ps__thumb-x,
        .ps__rail-x:hover > .ps__thumb-x {
            background-color: rgb(82, 88, 92);
        }
        .ps__rail-y.ps--clicking .ps__thumb-y,
        .ps__rail-y:focus > .ps__thumb-y,
        .ps__rail-y:hover > .ps__thumb-y {
            background-color: rgb(82, 88, 92);
        }
        .navbar .mega-dropdown .dropdown-menu.mega-menu {
            border-color: initial;
        }
        .navbar .mega-dropdown .dropdown-menu.mega-menu .sub-menu .sub-title,
        .navbar .mega-dropdown .dropdown-menu.mega-menu.v-1 .sub-menu .news-single {
            border-bottom-color: rgb(57, 61, 64);
        }
        .navbar .mega-dropdown .dropdown-menu.mega-menu .sub-menu ul li a:hover {
            background-color: rgba(0, 0, 0, 0.2);
        }
        .navbar .mega-dropdown .dropdown-menu.mega-menu.v-1 .sub-menu .news-title:hover {
            color: rgb(51, 162, 244) !important;
        }
        .navbar .mega-dropdown .dropdown-menu.mega-menu.v-1 .sub-menu .m-sm {
            color: rgb(51, 162, 244) !important;
        }
        .navbar .mega-dropdown .dropdown-menu.mega-menu.v-1 .sub-menu .m-sm:hover {
            color: rgb(51, 162, 244) !important;
        }
        .navbar .mega-dropdown .dropdown-menu.mega-menu.v-2 .sub-menu .news-title,
        .navbar .mega-dropdown .dropdown-menu.mega-menu.v-2 .sub-menu ul li a,
        .navbar .mega-dropdown .dropdown-menu.mega-menu.v-2 .sub-menu ul li a:hover,
        .navbar .mega-dropdown .dropdown-menu.mega-menu.v-3 .sub-menu .news-title,
        .navbar .mega-dropdown .dropdown-menu.mega-menu.v-3 .sub-menu ul li a,
        .navbar .mega-dropdown .dropdown-menu.mega-menu.v-3 .sub-menu ul li a:hover {
            color: rgb(232, 230, 227) !important;
        }
        .navbar .mega-dropdown .dropdown-menu.mega-menu.v-3 .sub-menu .news-title:hover {
            color: rgb(212, 209, 203) !important;
        }
        .navbar .dropdown.multi-level-dropdown .dropdown-menu .dropdown-item:hover {
            box-shadow: none;
            background-color: rgba(0, 0, 0, 0.2) !important;
        }
        .md-inner,
        .md-inner-main {
            background-image: initial !important;
            background-color: rgba(73, 79, 82, 0.9) !important;
        }
        .md-inner-email {
            background-color: rgb(28, 38, 42) !important;
        }
        .test-skin .gradient {
            background-image: linear-gradient(135deg,
            rgb(24, 26, 27) 0px,
            rgb(24, 26, 27) 100%);
            background-color: initial;
        }
        .test-skin .primary-color,
        .test-skin ul.stepper li.active a .circle,
        .test-skin ul.stepper li.completed a .circle,
        ul.stepper li.active a .test-skin .circle,
        ul.stepper li.completed a .test-skin .circle {
            background-color: rgb(24, 26, 27) !important;
        }
        .test-skin .navbar {
            background-color: rgb(24, 26, 27);
            color: rgb(232, 230, 227);
        }
        .test-skin .navbar .navbar-nav .nav-item .dropdown-menu a {
            color: rgb(232, 230, 227);
        }
        .test-skin .navbar .navbar-nav .nav-item .dropdown-menu a:active,
        .test-skin .navbar .navbar-nav .nav-item .dropdown-menu a:focus,
        .test-skin .navbar .navbar-nav .nav-item .dropdown-menu a:hover {
            background-color: rgb(31, 34, 35);
        }
        .test-skin .navbar.double-nav a {
            color: rgb(232, 230, 227);
        }
        .test-skin .navbar form .md-form .form-control {
            color: rgb(232, 230, 227);
        }
        .test-skin .navbar form .md-form .form-control::-webkit-input-placeholder {
            color: rgb(232, 230, 227);
        }
        .test-skin .navbar form .md-form .form-control::placeholder {
            color: rgb(232, 230, 227);
        }
        .test-skin .page-footer,
        .test-skin .side-nav {
            background-color: rgb(24, 26, 27);
        }
        .test-skin .side-nav .logo-wrapper > div {
            background-color: transparent !important;
        }
        .test-skin .side-nav .sn-avatar-wrapper img {
            border-color: rgb(59, 64, 66);
        }
        .test-skin .side-nav .social {
            border-bottom-color: rgba(77, 83, 86, 0.3);
        }
        .test-skin .side-nav .social a:hover .fab,
        .test-skin .side-nav .social a:hover .far,
        .test-skin .side-nav .social a:hover .fas {
            color: rgb(232, 230, 227) !important;
        }
        .test-skin .side-nav .collapsible li {
            background-color: transparent;
        }
        .test-skin .side-nav .collapsible li .collapsible-header {
            color: rgb(232, 230, 227);
        }
        .test-skin .side-nav .collapsible li .collapsible-header.active,
        .test-skin .side-nav .collapsible li .collapsible-header:hover {
            background-color: rgb(24, 26, 27);
        }
        .test-skin .side-nav .collapsible li .collapsible-body a,
        .test-skin .side-nav .collapsible li .collapsible-body a.active,
        .test-skin .side-nav .collapsible li .collapsible-body a:active,
        .test-skin .side-nav .collapsible li .collapsible-body a:hover,
        .test-skin .side-nav .fab,
        .test-skin .side-nav .far,
        .test-skin .side-nav .fas {
            color: rgb(232, 230, 227);
        }
        .test-skin .side-nav .sidenav-bg.mask-light::after,
        .test-skin .side-nav .sidenav-bg.mask-slight::after,
        .test-skin .side-nav .sidenav-bg.mask-strong::after,
        .test-skin .side-nav .sidenav-bg::after {
            background-image: initial;
            background-color: rgb(24, 26, 27);
        }
        .test-skin .btn-primary {
            color: rgb(232, 230, 227);
            background-color: rgb(24, 26, 27) !important;
        }
        .test-skin .btn-primary:hover {
            background-color: rgb(24, 26, 27);
            color: rgb(232, 230, 227);
        }
        .test-skin .btn-primary.focus,
        .test-skin .btn-primary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .test-skin .btn-primary.active,
        .test-skin .btn-primary:active,
        .test-skin .btn-primary:focus {
            background-color: rgb(53, 57, 59);
        }
        .test-skin .btn-primary.dropdown-toggle,
        .test-skin .btn-primary.dropdown-toggle:focus,
        .test-skin .btn-primary.dropdown-toggle:hover {
            background-color: rgb(24, 26, 27) !important;
        }
        .show > .test-skin .btn-primary.dropdown-toggle,
        .test-skin .btn-primary:not([disabled]):not(.disabled).active,
        .test-skin .btn-primary:not([disabled]):not(.disabled):active {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(53, 57, 59) !important;
        }
        .show > .test-skin .btn-primary.dropdown-toggle:focus,
        .test-skin .btn-primary:not([disabled]):not(.disabled).active:focus,
        .test-skin .btn-primary:not([disabled]):not(.disabled):active:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .test-skin .primary-ic {
            color: rgb(232, 230, 227) !important;
        }
        .test-skin .primary-ic:focus,
        .test-skin .primary-ic:hover {
            color: rgb(232, 230, 227);
        }
        .test-skin table.table a.btn.btn-primary {
            color: rgb(232, 230, 227);
        }
        .test-skin .btn-secondary {
            color: rgb(232, 230, 227);
            background-color: rgb(24, 26, 27) !important;
        }
        .test-skin .btn-secondary:hover {
            background-color: rgb(24, 26, 27);
            color: rgb(232, 230, 227);
        }
        .test-skin .btn-secondary.focus,
        .test-skin .btn-secondary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .test-skin .btn-secondary.active,
        .test-skin .btn-secondary:active,
        .test-skin .btn-secondary:focus {
            background-color: rgb(53, 57, 59);
        }
        .test-skin .btn-secondary.dropdown-toggle,
        .test-skin .btn-secondary.dropdown-toggle:focus,
        .test-skin .btn-secondary.dropdown-toggle:hover {
            background-color: rgb(24, 26, 27) !important;
        }
        .show > .test-skin .btn-secondary.dropdown-toggle,
        .test-skin .btn-secondary:not([disabled]):not(.disabled).active,
        .test-skin .btn-secondary:not([disabled]):not(.disabled):active {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(53, 57, 59) !important;
        }
        .show > .test-skin .btn-secondary.dropdown-toggle:focus,
        .test-skin .btn-secondary:not([disabled]):not(.disabled).active:focus,
        .test-skin .btn-secondary:not([disabled]):not(.disabled):active:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .test-skin .secondary-ic {
            color: rgb(232, 230, 227) !important;
        }
        .test-skin .secondary-ic:focus,
        .test-skin .secondary-ic:hover {
            color: rgb(232, 230, 227);
        }
        .test-skin table.table a.btn.btn-secondary {
            color: rgb(232, 230, 227);
        }
        .test-skin .btn-default {
            color: rgb(232, 230, 227);
            background-color: rgb(24, 26, 27) !important;
        }
        .test-skin .btn-default:hover {
            background-color: rgb(24, 26, 27);
            color: rgb(232, 230, 227);
        }
        .test-skin .btn-default.focus,
        .test-skin .btn-default:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .test-skin .btn-default.active,
        .test-skin .btn-default:active,
        .test-skin .btn-default:focus {
            background-color: rgb(53, 57, 59);
        }
        .test-skin .btn-default.dropdown-toggle,
        .test-skin .btn-default.dropdown-toggle:focus,
        .test-skin .btn-default.dropdown-toggle:hover {
            background-color: rgb(24, 26, 27) !important;
        }
        .show > .test-skin .btn-default.dropdown-toggle,
        .test-skin .btn-default:not([disabled]):not(.disabled).active,
        .test-skin .btn-default:not([disabled]):not(.disabled):active {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(53, 57, 59) !important;
        }
        .show > .test-skin .btn-default.dropdown-toggle:focus,
        .test-skin .btn-default:not([disabled]):not(.disabled).active:focus,
        .test-skin .btn-default:not([disabled]):not(.disabled):active:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .test-skin .default-ic {
            color: rgb(232, 230, 227) !important;
        }
        .test-skin .default-ic:focus,
        .test-skin .default-ic:hover {
            color: rgb(232, 230, 227);
        }
        .test-skin a.btn:not([href]):not([tabindex]),
        .test-skin a.btn:not([href]):not([tabindex]):focus,
        .test-skin a.btn:not([href]):not([tabindex]):hover,
        .test-skin table.table a.btn.btn-default {
            color: rgb(232, 230, 227);
        }
        .test-skin .btn-outline-primary {
            border-color: rgb(48, 52, 54) !important;
            background-color: transparent !important;
            color: rgb(232, 230, 227) !important;
        }
        .test-skin .btn-outline-primary.active,
        .test-skin .btn-outline-primary:active,
        .test-skin .btn-outline-primary:active:focus,
        .test-skin .btn-outline-primary:focus,
        .test-skin .btn-outline-primary:hover {
            border-color: rgb(48, 52, 54) !important;
            background-color: transparent !important;
            color: rgb(232, 230, 227) !important;
        }
        .show > .test-skin .btn-outline-primary.dropdown-toggle,
        .test-skin .btn-outline-primary:not([disabled]):not(.disabled).active,
        .test-skin .btn-outline-primary:not([disabled]):not(.disabled):active {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(48, 52, 54) !important;
        }
        .show > .test-skin .btn-outline-primary.dropdown-toggle:focus,
        .test-skin .btn-outline-primary:not([disabled]):not(.disabled).active:focus,
        .test-skin .btn-outline-primary:not([disabled]):not(.disabled):active:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .test-skin .btn-outline-secondary {
            border-color: rgb(48, 52, 54) !important;
            background-color: transparent !important;
            color: rgb(232, 230, 227) !important;
        }
        .test-skin .btn-outline-secondary.active,
        .test-skin .btn-outline-secondary:active,
        .test-skin .btn-outline-secondary:active:focus,
        .test-skin .btn-outline-secondary:focus,
        .test-skin .btn-outline-secondary:hover {
            border-color: rgb(48, 52, 54) !important;
            background-color: transparent !important;
            color: rgb(232, 230, 227) !important;
        }
        .show > .test-skin .btn-outline-secondary.dropdown-toggle,
        .test-skin .btn-outline-secondary:not([disabled]):not(.disabled).active,
        .test-skin .btn-outline-secondary:not([disabled]):not(.disabled):active {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(48, 52, 54) !important;
        }
        .show > .test-skin .btn-outline-secondary.dropdown-toggle:focus,
        .test-skin .btn-outline-secondary:not([disabled]):not(.disabled).active:focus,
        .test-skin .btn-outline-secondary:not([disabled]):not(.disabled):active:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .test-skin .btn-outline-default {
            border-color: rgb(48, 52, 54) !important;
            background-color: transparent !important;
            color: rgb(232, 230, 227) !important;
        }
        .test-skin .btn-outline-default.active,
        .test-skin .btn-outline-default:active,
        .test-skin .btn-outline-default:active:focus,
        .test-skin .btn-outline-default:focus,
        .test-skin .btn-outline-default:hover {
            border-color: rgb(48, 52, 54) !important;
            background-color: transparent !important;
            color: rgb(232, 230, 227) !important;
        }
        .test-skin .md-form .prefix.active, .test-skin .md-outline input[type="date"]:focus:not([readonly]) + label, .test-skin .md-outline input[type="datetime-local"]:focus:not([readonly]) + label, .test-skin .md-outline input[type="email"]:focus:not([readonly]) + label, .test-skin .md-outline input[type="number"]:focus:not([readonly]) + label, .test-skin .md-outline input[type="password"]:focus:not([readonly]) + label, .test-skin .md-outline input[type="search-md"]:focus:not([readonly]) + label, .test-skin .md-outline input[type="search"]:focus:not([readonly]) + label, .test-skin .md-outline input[type="tel"]:focus:not([readonly]) + label, .test-skin .md-outline input[type="text"]:focus:not([readonly]) + label, .test-skin .md-outline input[type="time"]:focus:not([readonly]) + label, .test-skin .md-outline input[type="url"]:focus:not([readonly]) + label,
        .test-skin .md-outline textarea:focus:not([readonly]) + label, .test-skin input[type="email"]:focus:not([readonly]) + label, .test-skin input[type="text"]:focus:not([readonly]) + label, .test-skin input[type="password"]:focus:not([readonly]) + label, .test-skin input[type="number"]:focus:not([readonly]) + label,
        .test-skin textarea.md-textarea:focus:not([readonly]) + label {
            color: rgb(232, 230, 227);
        }
        .show > .test-skin .btn-outline-default.dropdown-toggle,
        .test-skin .btn-outline-default:not([disabled]):not(.disabled).active,
        .test-skin .btn-outline-default:not([disabled]):not(.disabled):active {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(48, 52, 54) !important;
        }
        .show > .test-skin .btn-outline-default.dropdown-toggle:focus,
        .test-skin .btn-outline-default:not([disabled]):not(.disabled).active:focus,
        .test-skin .btn-outline-default:not([disabled]):not(.disabled):active:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .test-skin .card .btn-action {
            background-image: initial;
            background-color: rgb(24, 26, 27);
        }
        .test-skin .card .btn-action:focus,
        .test-skin .card .btn-action:hover {
            background-color: rgb(24, 26, 27) !important;
        }
        .test-skin .card .btn-action.active {
            background-color: rgb(53, 57, 59) !important;
        }
        .test-skin .md-outline input[type="date"]:focus:not([readonly]), .test-skin .md-outline input[type="datetime-local"]:focus:not([readonly]), .test-skin .md-outline input[type="email"]:focus:not([readonly]), .test-skin .md-outline input[type="number"]:focus:not([readonly]), .test-skin .md-outline input[type="password"]:focus:not([readonly]), .test-skin .md-outline input[type="search-md"]:focus:not([readonly]), .test-skin .md-outline input[type="search"]:focus:not([readonly]), .test-skin .md-outline input[type="tel"]:focus:not([readonly]), .test-skin .md-outline input[type="text"]:focus:not([readonly]), .test-skin .md-outline input[type="time"]:focus:not([readonly]), .test-skin .md-outline input[type="url"]:focus:not([readonly]),
        .test-skin .md-outline textarea:focus:not([readonly]) {
            border-color: rgb(48, 52, 54);
            box-shadow: rgb(24, 26, 27) 0px 0px 0px 1px inset;
        }
        .test-skin .md-bg input[type="date"], .test-skin .md-bg input[type="datetime-local"], .test-skin .md-bg input[type="email"], .test-skin .md-bg input[type="number"], .test-skin .md-bg input[type="password"], .test-skin .md-bg input[type="search-md"], .test-skin .md-bg input[type="search"], .test-skin .md-bg input[type="tel"], .test-skin .md-bg input[type="text"], .test-skin .md-bg input[type="time"], .test-skin .md-bg input[type="url"],
        .test-skin .md-bg textarea.md-textarea {
            background-image: linear-gradient(rgb(24, 26, 27),
            rgb(24, 26, 27)),
            linear-gradient(rgb(48, 52, 54),
            rgb(48, 52, 54));
        }
        .test-skin input[type="email"]:focus:not([readonly]), .test-skin input[type="text"]:focus:not([readonly]), .test-skin input[type="password"]:focus:not([readonly]), .test-skin input[type="number"]:focus:not([readonly]),
        .test-skin textarea.md-textarea:focus:not([readonly]) {
            border-color: rgb(48, 52, 54);
            box-shadow: rgb(24, 26, 27) 0px 1px 0px 0px;
        }
        .test-skin input[type="checkbox"].filled-in:checked + label::before, .test-skin input[type="checkbox"]:checked + label::before {
            border-right-color: rgb(48, 52, 54);
            border-bottom-color: rgb(48, 52, 54);
        }
        .test-skin input[type="checkbox"].filled-in:checked + label::after {
            background-color: rgb(24, 26, 27);
            border-color: rgb(48, 52, 54);
        }
        .test-skin .select-wrapper.colorful-select.md-form.md-outline span.caret.active {
            color: rgb(232, 230, 227) !important;
        }
        .test-skin .select-wrapper.colorful-select.md-form.md-outline input.select-dropdown:focus {
            border-color: rgb(48, 52, 54);
            box-shadow: rgb(24, 26, 27) 0px 0px 0px 1px inset;
        }
        .test-skin .select-wrapper.colorful-select.md-form.md-outline + label.active {
            color: rgb(232, 230, 227);
        }
        .test-skin .select-wrapper.colorful-select.md-form .dropdown-content li a,
        .test-skin .select-wrapper.colorful-select.md-form .dropdown-content li span:hover,
        .test-skin .select-wrapper.colorful-select.md-form .dropdown-content li.active {
            background-color: rgb(24, 26, 27) !important;
        }
        .test-skin .select-wrapper.colorful-select.md-form .dropdown-content li.disabled.active {
            background-color: transparent !important;
        }
        .test-skin .card-header,
        .test-skin .carousel-multi-item .carousel-indicators li,
        .test-skin .carousel-multi-item .carousel-indicators li.active,
        .test-skin .carousel-multi-item .controls-top > a,
        .test-skin .form-header,
        .test-skin .top-nav-collapse {
            background-color: rgb(24, 26, 27);
        }
        .test-skin .spinner-primary-color,
        .test-skin .spinner-primary-color-only {
            border-color: rgb(48, 52, 54);
        }
        .test-skin .pagination-primary-color .page-item.active .page-link,
        .test-skin .pagination-primary-color .page-item.active .page-link:focus,
        .test-skin .pagination-primary-color .page-item.active .page-link:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(24, 26, 27);
        }
        .test-skin .pagination-primary-color .page-link {
            color: rgb(232, 230, 227);
        }
        .test-skin .pagination-primary-color .page-link:focus {
            box-shadow: none;
        }
        .white-skin .gradient {
            background-image: linear-gradient(135deg,
            rgb(71, 77, 80) 0px,
            rgb(24, 26, 27) 100%);
            background-color: initial;
        }
        .white-skin .primary-color,
        .white-skin ul.stepper li.active a .circle,
        .white-skin ul.stepper li.completed a .circle,
        ul.stepper li.active a .white-skin .circle,
        ul.stepper li.completed a .white-skin .circle {
            background-color: rgb(9, 67, 162) !important;
        }
        .white-skin .navbar {
            background-color: rgb(24, 26, 27);
            color: rgb(190, 185, 176);
        }
        .white-skin .navbar .navbar-nav .nav-item .dropdown-menu a {
            color: rgb(232, 230, 227);
        }
        .white-skin .navbar .navbar-nav .nav-item .dropdown-menu a:active,
        .white-skin .navbar .navbar-nav .nav-item .dropdown-menu a:focus,
        .white-skin .navbar .navbar-nav .nav-item .dropdown-menu a:hover {
            background-color: rgb(10, 72, 176);
        }
        .white-skin .navbar .navbar-nav .nav-item a,
        .white-skin .navbar.double-nav a {
            color: rgb(190, 185, 176);
        }
        .white-skin .navbar form .md-form .form-control {
            color: rgb(190, 185, 176);
        }
        .white-skin .navbar form .md-form .form-control::-webkit-input-placeholder {
            color: rgb(190, 185, 176);
        }
        .white-skin .navbar form .md-form .form-control::placeholder {
            color: rgb(190, 185, 176);
        }
        .white-skin .navbar.navbar-dark form .md-form .form-control {
            color: rgb(232, 230, 227);
        }
        .white-skin .navbar.navbar-dark form .md-form .form-control::-webkit-input-placeholder {
            color: rgb(232, 230, 227);
        }
        .white-skin .navbar.navbar-dark form .md-form .form-control::placeholder {
            color: rgb(232, 230, 227);
        }
        .white-skin .page-footer {
            background-color: rgb(87, 94, 98);
        }
        .white-skin .side-nav {
            background-color: rgb(27, 30, 31);
        }
        .white-skin .side-nav .logo-wrapper > div {
            background-color: transparent !important;
        }
        .white-skin .side-nav .sn-avatar-wrapper img {
            border-color: rgb(10, 72, 175);
        }
        .white-skin .side-nav .social {
            border-bottom-color: rgba(77, 83, 86, 0.3);
        }
        .white-skin .side-nav .social a .fab,
        .white-skin .side-nav .social a .far,
        .white-skin .side-nav .social a .fas {
            color: rgb(190, 185, 176);
        }
        .white-skin .side-nav .social a:hover .fab,
        .white-skin .side-nav .social a:hover .far,
        .white-skin .side-nav .social a:hover .fas {
            color: rgb(75, 160, 244) !important;
        }
        .white-skin .side-nav .search-form .md-form input {
            border-bottom-color: rgba(77, 83, 86, 0.3);
            color: rgb(190, 185, 176) !important;
        }
        .white-skin .side-nav .search-form .md-form input::-webkit-input-placeholder {
            color: rgba(190, 185, 176, 0.5) !important;
        }
        .white-skin .side-nav .search-form .md-form input::placeholder {
            color: rgba(190, 185, 176, 0.5) !important;
        }
        .white-skin .side-nav .collapsible li {
            background-color: transparent;
        }
        .white-skin .side-nav .collapsible li .collapsible-header {
            color: rgb(190, 185, 176);
        }
        .white-skin .side-nav .collapsible li .collapsible-header.active {
            color: rgb(75, 160, 244);
            background-color: transparent;
        }
        .white-skin .side-nav .collapsible li .collapsible-header:hover {
            background-color: rgba(0, 0, 0, 0.05);
        }
        .white-skin .side-nav .collapsible li .collapsible-body a {
            color: rgb(190, 185, 176);
        }
        .white-skin .side-nav .collapsible li .collapsible-body a.active,
        .white-skin .side-nav .collapsible li .collapsible-body a:active,
        .white-skin .side-nav .collapsible li .collapsible-body a:hover {
            color: rgb(75, 160, 244);
        }
        .white-skin .side-nav .fab,
        .white-skin .side-nav .far,
        .white-skin .side-nav .fas {
            color: rgb(190, 185, 176);
        }
        .white-skin .side-nav .sidenav-bg.mask-strong::after,
        .white-skin .side-nav .sidenav-bg::after {
            background-image: initial;
            background-color: rgba(24, 26, 27, 0.8);
        }
        .white-skin .side-nav .sidenav-bg.mask-light::after {
            background-image: initial;
            background-color: rgba(24, 26, 27, 0.65);
        }
        .white-skin .side-nav .sidenav-bg.mask-slight::after {
            background-image: initial;
            background-color: rgba(24, 26, 27, 0.5);
        }
        .white-skin .btn-primary {
            color: rgb(232, 230, 227);
            background-color: rgb(9, 67, 162) !important;
        }
        .white-skin .btn-primary:hover {
            background-color: rgb(9, 62, 147);
            color: rgb(232, 230, 227);
        }
        .white-skin .btn-primary.focus,
        .white-skin .btn-primary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .white-skin .btn-primary.active,
        .white-skin .btn-primary:active,
        .white-skin .btn-primary:focus {
            background-color: rgb(9, 65, 158);
        }
        .white-skin .btn-primary.dropdown-toggle {
            background-color: rgb(9, 67, 162) !important;
        }
        .white-skin .btn-primary.dropdown-toggle:focus,
        .white-skin .btn-primary.dropdown-toggle:hover {
            background-color: rgb(9, 62, 147) !important;
        }
        .show > .white-skin .btn-primary.dropdown-toggle,
        .white-skin .btn-primary:not([disabled]):not(.disabled).active,
        .white-skin .btn-primary:not([disabled]):not(.disabled):active {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(9, 65, 158) !important;
        }
        .show > .white-skin .btn-primary.dropdown-toggle:focus,
        .white-skin .btn-primary:not([disabled]):not(.disabled).active:focus,
        .white-skin .btn-primary:not([disabled]):not(.disabled):active:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .white-skin .primary-ic {
            color: rgb(75, 160, 244) !important;
        }
        .white-skin .primary-ic:focus,
        .white-skin .primary-ic:hover {
            color: rgb(75, 160, 244);
        }
        .white-skin table.table a.btn.btn-primary {
            color: rgb(232, 230, 227);
        }
        .white-skin .btn-secondary {
            color: rgb(232, 230, 227);
            background-color: rgb(146, 11, 3) !important;
        }
        .white-skin .btn-secondary:hover {
            background-color: rgb(131, 11, 3);
            color: rgb(232, 230, 227);
        }
        .white-skin .btn-secondary.focus,
        .white-skin .btn-secondary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .white-skin .btn-secondary.active,
        .white-skin .btn-secondary:active,
        .white-skin .btn-secondary:focus {
            background-color: rgb(192, 14, 4);
        }
        .white-skin .btn-secondary.dropdown-toggle {
            background-color: rgb(146, 11, 3) !important;
        }
        .white-skin .btn-secondary.dropdown-toggle:focus,
        .white-skin .btn-secondary.dropdown-toggle:hover {
            background-color: rgb(131, 11, 3) !important;
        }
        .show > .white-skin .btn-secondary.dropdown-toggle,
        .white-skin .btn-secondary:not([disabled]):not(.disabled).active,
        .white-skin .btn-secondary:not([disabled]):not(.disabled):active {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(192, 14, 4) !important;
        }
        .show > .white-skin .btn-secondary.dropdown-toggle:focus,
        .white-skin .btn-secondary:not([disabled]):not(.disabled).active:focus,
        .white-skin .btn-secondary:not([disabled]):not(.disabled):active:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .white-skin .secondary-ic {
            color: rgb(252, 102, 93) !important;
        }
        .white-skin .secondary-ic:focus,
        .white-skin .secondary-ic:hover {
            color: rgb(252, 102, 93);
        }
        .white-skin table.table a.btn.btn-secondary {
            color: rgb(232, 230, 227);
        }
        .white-skin .btn-default {
            color: rgb(232, 230, 227);
            background-color: rgb(52, 56, 58) !important;
        }
        .white-skin .btn-default:hover {
            background-color: rgb(62, 67, 69);
            color: rgb(232, 230, 227);
        }
        .white-skin .btn-default.focus,
        .white-skin .btn-default:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .white-skin .btn-default.active,
        .white-skin .btn-default:active,
        .white-skin .btn-default:focus {
            background-color: rgb(14, 15, 15);
        }
        .white-skin .btn-default.dropdown-toggle {
            background-color: rgb(52, 56, 58) !important;
        }
        .white-skin .btn-default.dropdown-toggle:focus,
        .white-skin .btn-default.dropdown-toggle:hover {
            background-color: rgb(62, 67, 69) !important;
        }
        .show > .white-skin .btn-default.dropdown-toggle,
        .white-skin .btn-default:not([disabled]):not(.disabled).active,
        .white-skin .btn-default:not([disabled]):not(.disabled):active {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(14, 15, 15) !important;
        }
        .show > .white-skin .btn-default.dropdown-toggle:focus,
        .white-skin .btn-default:not([disabled]):not(.disabled).active:focus,
        .white-skin .btn-default:not([disabled]):not(.disabled):active:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .white-skin .default-ic {
            color: rgb(188, 183, 174) !important;
        }
        .white-skin .default-ic:focus,
        .white-skin .default-ic:hover {
            color: rgb(188, 183, 174);
        }
        .white-skin a.btn:not([href]):not([tabindex]),
        .white-skin a.btn:not([href]):not([tabindex]):focus,
        .white-skin a.btn:not([href]):not([tabindex]):hover,
        .white-skin table.table a.btn.btn-default {
            color: rgb(232, 230, 227);
        }
        .white-skin .btn-outline-primary {
            border-color: rgb(9, 63, 153) !important;
            background-color: transparent !important;
            color: rgb(75, 160, 244) !important;
        }
        .white-skin .btn-outline-primary.active,
        .white-skin .btn-outline-primary:active,
        .white-skin .btn-outline-primary:active:focus,
        .white-skin .btn-outline-primary:focus,
        .white-skin .btn-outline-primary:hover {
            border-color: rgb(9, 63, 153) !important;
            background-color: transparent !important;
            color: rgb(75, 160, 244) !important;
        }
        .show > .white-skin .btn-outline-primary.dropdown-toggle,
        .white-skin .btn-outline-primary:not([disabled]):not(.disabled).active,
        .white-skin .btn-outline-primary:not([disabled]):not(.disabled):active {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(9, 63, 153) !important;
        }
        .show > .white-skin .btn-outline-primary.dropdown-toggle:focus,
        .white-skin .btn-outline-primary:not([disabled]):not(.disabled).active:focus,
        .white-skin .btn-outline-primary:not([disabled]):not(.disabled):active:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .white-skin .btn-outline-secondary {
            border-color: rgb(148, 11, 3) !important;
            background-color: transparent !important;
            color: rgb(252, 102, 93) !important;
        }
        .white-skin .btn-outline-secondary.active,
        .white-skin .btn-outline-secondary:active,
        .white-skin .btn-outline-secondary:active:focus,
        .white-skin .btn-outline-secondary:focus,
        .white-skin .btn-outline-secondary:hover {
            border-color: rgb(148, 11, 3) !important;
            background-color: transparent !important;
            color: rgb(252, 102, 93) !important;
        }
        .show > .white-skin .btn-outline-secondary.dropdown-toggle,
        .white-skin .btn-outline-secondary:not([disabled]):not(.disabled).active,
        .white-skin .btn-outline-secondary:not([disabled]):not(.disabled):active {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(148, 11, 3) !important;
        }
        .show > .white-skin .btn-outline-secondary.dropdown-toggle:focus,
        .white-skin .btn-outline-secondary:not([disabled]):not(.disabled).active:focus,
        .white-skin .btn-outline-secondary:not([disabled]):not(.disabled):active:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .white-skin .btn-outline-default {
            border-color: rgb(117, 109, 96) !important;
            background-color: transparent !important;
            color: rgb(188, 183, 174) !important;
        }
        .white-skin .btn-outline-default.active,
        .white-skin .btn-outline-default:active,
        .white-skin .btn-outline-default:active:focus,
        .white-skin .btn-outline-default:focus,
        .white-skin .btn-outline-default:hover {
            border-color: rgb(117, 109, 96) !important;
            background-color: transparent !important;
            color: rgb(188, 183, 174) !important;
        }
        .white-skin .md-form .prefix.active, .white-skin .md-outline input[type="date"]:focus:not([readonly]) + label, .white-skin .md-outline input[type="datetime-local"]:focus:not([readonly]) + label, .white-skin .md-outline input[type="email"]:focus:not([readonly]) + label, .white-skin .md-outline input[type="number"]:focus:not([readonly]) + label, .white-skin .md-outline input[type="password"]:focus:not([readonly]) + label, .white-skin .md-outline input[type="search-md"]:focus:not([readonly]) + label, .white-skin .md-outline input[type="search"]:focus:not([readonly]) + label, .white-skin .md-outline input[type="tel"]:focus:not([readonly]) + label, .white-skin .md-outline input[type="text"]:focus:not([readonly]) + label, .white-skin .md-outline input[type="time"]:focus:not([readonly]) + label, .white-skin .md-outline input[type="url"]:focus:not([readonly]) + label,
        .white-skin .md-outline textarea:focus:not([readonly]) + label, .white-skin input[type="email"]:focus:not([readonly]) + label, .white-skin input[type="text"]:focus:not([readonly]) + label, .white-skin input[type="password"]:focus:not([readonly]) + label, .white-skin input[type="number"]:focus:not([readonly]) + label,
        .white-skin textarea.md-textarea:focus:not([readonly]) + label {
            color: rgb(75, 160, 244);
        }
        .show > .white-skin .btn-outline-default.dropdown-toggle,
        .white-skin .btn-outline-default:not([disabled]):not(.disabled).active,
        .white-skin .btn-outline-default:not([disabled]):not(.disabled):active {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(117, 109, 96) !important;
        }
        .show > .white-skin .btn-outline-default.dropdown-toggle:focus,
        .white-skin .btn-outline-default:not([disabled]):not(.disabled).active:focus,
        .white-skin .btn-outline-default:not([disabled]):not(.disabled):active:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .white-skin .card .btn-action {
            background-image: initial;
            background-color: rgb(52, 56, 58);
        }
        .white-skin .card .btn-action:focus,
        .white-skin .card .btn-action:hover {
            background-color: rgb(62, 67, 69) !important;
        }
        .white-skin .card .btn-action.active {
            background-color: rgb(14, 15, 15) !important;
        }
        .white-skin .md-outline input[type="date"]:focus:not([readonly]), .white-skin .md-outline input[type="datetime-local"]:focus:not([readonly]), .white-skin .md-outline input[type="email"]:focus:not([readonly]), .white-skin .md-outline input[type="number"]:focus:not([readonly]), .white-skin .md-outline input[type="password"]:focus:not([readonly]), .white-skin .md-outline input[type="search-md"]:focus:not([readonly]), .white-skin .md-outline input[type="search"]:focus:not([readonly]), .white-skin .md-outline input[type="tel"]:focus:not([readonly]), .white-skin .md-outline input[type="text"]:focus:not([readonly]), .white-skin .md-outline input[type="time"]:focus:not([readonly]), .white-skin .md-outline input[type="url"]:focus:not([readonly]),
        .white-skin .md-outline textarea:focus:not([readonly]) {
            border-color: rgb(9, 63, 153);
            box-shadow: rgb(9, 67, 162) 0px 0px 0px 1px inset;
        }
        .white-skin .md-bg input[type="date"], .white-skin .md-bg input[type="datetime-local"], .white-skin .md-bg input[type="email"], .white-skin .md-bg input[type="number"], .white-skin .md-bg input[type="password"], .white-skin .md-bg input[type="search-md"], .white-skin .md-bg input[type="search"], .white-skin .md-bg input[type="tel"], .white-skin .md-bg input[type="text"], .white-skin .md-bg input[type="time"], .white-skin .md-bg input[type="url"],
        .white-skin .md-bg textarea.md-textarea {
            background-image: linear-gradient(rgb(9, 67, 162),
            rgb(9, 67, 162)),
            linear-gradient(rgb(48, 52, 54),
            rgb(48, 52, 54));
        }
        .white-skin input[type="email"]:focus:not([readonly]), .white-skin input[type="text"]:focus:not([readonly]), .white-skin input[type="password"]:focus:not([readonly]), .white-skin input[type="number"]:focus:not([readonly]),
        .white-skin textarea.md-textarea:focus:not([readonly]) {
            border-color: rgb(9, 63, 153);
            box-shadow: rgb(9, 67, 162) 0px 1px 0px 0px;
        }
        .white-skin input[type="checkbox"]:checked + label::before {
            border-right-color: rgb(9, 63, 153);
            border-bottom-color: rgb(9, 63, 153);
        }
        .white-skin input[type="checkbox"].filled-in:checked + label::before {
            border-right-color: rgb(48, 52, 54);
            border-bottom-color: rgb(48, 52, 54);
        }
        .white-skin input[type="checkbox"].filled-in:checked + label::after {
            background-color: rgb(9, 67, 162);
            border-color: rgb(9, 63, 153);
        }
        .white-skin .select-wrapper.colorful-select.md-form.md-outline span.caret.active {
            color: rgb(75, 160, 244) !important;
        }
        .white-skin .select-wrapper.colorful-select.md-form.md-outline input.select-dropdown:focus {
            border-color: rgb(9, 63, 153);
            box-shadow: rgb(9, 67, 162) 0px 0px 0px 1px inset;
        }
        .white-skin .select-wrapper.colorful-select.md-form.md-outline + label.active {
            color: rgb(75, 160, 244);
        }
        .white-skin .select-wrapper.colorful-select.md-form .dropdown-content li a,
        .white-skin .select-wrapper.colorful-select.md-form .dropdown-content li span:hover,
        .white-skin .select-wrapper.colorful-select.md-form .dropdown-content li.active {
            background-color: rgb(9, 67, 162) !important;
        }
        .white-skin .select-wrapper.colorful-select.md-form .dropdown-content li.disabled.active {
            background-color: transparent !important;
        }
        .white-skin .top-nav-collapse {
            background-color: rgb(24, 26, 27);
        }
        .white-skin .carousel-multi-item .carousel-indicators li,
        .white-skin .carousel-multi-item .carousel-indicators li.active,
        .white-skin .carousel-multi-item .controls-top > a {
            background-color: rgb(9, 67, 162);
        }
        .white-skin .card-header,
        .white-skin .form-header {
            background-color: rgb(9, 63, 156);
        }
        .white-skin .spinner-primary-color,
        .white-skin .spinner-primary-color-only {
            border-color: rgb(9, 63, 153);
        }
        .white-skin .pagination-primary-color .page-item.active .page-link,
        .white-skin .pagination-primary-color .page-item.active .page-link:focus,
        .white-skin .pagination-primary-color .page-item.active .page-link:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(9, 67, 162);
        }
        .white-skin .pagination-primary-color .page-link {
            color: rgb(75, 160, 244);
        }
        .white-skin .pagination-primary-color .page-link:focus {
            box-shadow: none;
        }
        .black-skin .gradient {
            background-image: linear-gradient(135deg,
            rgb(0, 0, 0) 0px,
            rgb(73, 79, 82) 100%);
            background-color: initial;
        }
        .black-skin .primary-color,
        .black-skin ul.stepper li.active a .circle,
        .black-skin ul.stepper li.completed a .circle,
        ul.stepper li.active a .black-skin .circle,
        ul.stepper li.completed a .black-skin .circle {
            background-color: rgb(34, 167, 130) !important;
        }
        .black-skin .navbar {
            background-color: rgb(26, 28, 29);
            color: rgb(232, 230, 227);
        }
        .black-skin .navbar .navbar-nav .nav-item .dropdown-menu a {
            color: rgb(232, 230, 227);
        }
        .black-skin .navbar .navbar-nav .nav-item .dropdown-menu a:active,
        .black-skin .navbar .navbar-nav .nav-item .dropdown-menu a:focus,
        .black-skin .navbar .navbar-nav .nav-item .dropdown-menu a:hover {
            background-color: rgb(30, 150, 117);
        }
        .black-skin .navbar.double-nav a {
            color: rgb(232, 230, 227);
        }
        .black-skin .navbar form .md-form .form-control {
            color: rgb(232, 230, 227);
        }
        .black-skin .navbar form .md-form .form-control::-webkit-input-placeholder {
            color: rgb(232, 230, 227);
        }
        .black-skin .navbar form .md-form .form-control::placeholder {
            color: rgb(232, 230, 227);
        }
        .black-skin .page-footer,
        .black-skin .side-nav {
            background-color: rgb(26, 28, 29);
        }
        .black-skin .side-nav .logo-wrapper > div {
            background-color: transparent !important;
        }
        .black-skin .side-nav .sn-avatar-wrapper img {
            border-color: rgb(34, 169, 132);
        }
        .black-skin .side-nav .social {
            border-bottom-color: rgba(77, 83, 86, 0.3);
        }
        .black-skin .side-nav .social a:hover .fab,
        .black-skin .side-nav .social a:hover .far,
        .black-skin .side-nav .social a:hover .fas {
            color: rgb(66, 217, 176) !important;
        }
        .black-skin .side-nav .collapsible li {
            background-color: transparent;
        }
        .black-skin .side-nav .collapsible li .collapsible-header {
            color: rgb(232, 230, 227);
        }
        .black-skin .side-nav .collapsible li .collapsible-header.active,
        .black-skin .side-nav .collapsible li .collapsible-header:hover {
            background-color: rgb(34, 167, 130);
        }
        .black-skin .side-nav .collapsible li .collapsible-body a {
            color: rgb(232, 230, 227);
        }
        .black-skin .side-nav .collapsible li .collapsible-body a.active,
        .black-skin .side-nav .collapsible li .collapsible-body a:active,
        .black-skin .side-nav .collapsible li .collapsible-body a:hover {
            color: rgb(66, 217, 176);
        }
        .black-skin .side-nav .fab,
        .black-skin .side-nav .far,
        .black-skin .side-nav .fas {
            color: rgb(232, 230, 227);
        }
        .black-skin .side-nav .sidenav-bg.mask-strong::after,
        .black-skin .side-nav .sidenav-bg::after {
            background-image: initial;
            background-color: rgba(0, 0, 0, 0.8);
        }
        .black-skin .side-nav .sidenav-bg.mask-light::after {
            background-image: initial;
            background-color: rgba(0, 0, 0, 0.65);
        }
        .black-skin .side-nav .sidenav-bg.mask-slight::after {
            background-image: initial;
            background-color: rgba(0, 0, 0, 0.5);
        }
        .black-skin .btn-primary {
            color: rgb(232, 230, 227);
            background-color: rgb(34, 167, 130) !important;
        }
        .black-skin .btn-primary:hover {
            background-color: rgb(32, 159, 132);
            color: rgb(232, 230, 227);
        }
        .black-skin .btn-primary.focus,
        .black-skin .btn-primary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .black-skin .btn-primary.active,
        .black-skin .btn-primary:active,
        .black-skin .btn-primary:focus {
            background-color: rgb(20, 99, 78);
        }
        .black-skin .btn-primary.dropdown-toggle {
            background-color: rgb(34, 167, 130) !important;
        }
        .black-skin .btn-primary.dropdown-toggle:focus,
        .black-skin .btn-primary.dropdown-toggle:hover {
            background-color: rgb(32, 159, 132) !important;
        }
        .black-skin .btn-primary:not([disabled]):not(.disabled).active,
        .black-skin .btn-primary:not([disabled]):not(.disabled):active,
        .show > .black-skin .btn-primary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(20, 99, 78) !important;
        }
        .black-skin .btn-primary:not([disabled]):not(.disabled).active:focus,
        .black-skin .btn-primary:not([disabled]):not(.disabled):active:focus,
        .show > .black-skin .btn-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .black-skin .primary-ic {
            color: rgb(66, 217, 176) !important;
        }
        .black-skin .primary-ic:focus,
        .black-skin .primary-ic:hover {
            color: rgb(66, 217, 176);
        }
        .black-skin table.table a.btn.btn-primary {
            color: rgb(232, 230, 227);
        }
        .black-skin .btn-secondary {
            color: rgb(232, 230, 227);
            background-color: rgb(12, 57, 110) !important;
        }
        .black-skin .btn-secondary:hover {
            background-color: rgb(14, 66, 129);
            color: rgb(232, 230, 227);
        }
        .black-skin .btn-secondary.focus,
        .black-skin .btn-secondary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .black-skin .btn-secondary.active,
        .black-skin .btn-secondary:active,
        .black-skin .btn-secondary:focus {
            background-color: rgb(4, 19, 37);
        }
        .black-skin .btn-secondary.dropdown-toggle {
            background-color: rgb(12, 57, 110) !important;
        }
        .black-skin .btn-secondary.dropdown-toggle:focus,
        .black-skin .btn-secondary.dropdown-toggle:hover {
            background-color: rgb(14, 66, 129) !important;
        }
        .black-skin .btn-secondary:not([disabled]):not(.disabled).active,
        .black-skin .btn-secondary:not([disabled]):not(.disabled):active,
        .show > .black-skin .btn-secondary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(4, 19, 37) !important;
        }
        .black-skin .btn-secondary:not([disabled]):not(.disabled).active:focus,
        .black-skin .btn-secondary:not([disabled]):not(.disabled):active:focus,
        .show > .black-skin .btn-secondary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .black-skin .secondary-ic {
            color: rgb(126, 188, 241) !important;
        }
        .black-skin .secondary-ic:focus,
        .black-skin .secondary-ic:hover {
            color: rgb(126, 188, 241);
        }
        .black-skin table.table a.btn.btn-secondary {
            color: rgb(232, 230, 227);
        }
        .black-skin .btn-default {
            color: rgb(232, 230, 227);
            background-color: rgb(26, 28, 29) !important;
        }
        .black-skin .btn-default:hover {
            background-color: rgb(35, 38, 40);
            color: rgb(232, 230, 227);
        }
        .black-skin .btn-default.focus,
        .black-skin .btn-default:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .black-skin .btn-default.active,
        .black-skin .btn-default:active,
        .black-skin .btn-default:focus {
            background-color: rgb(0, 0, 0);
        }
        .black-skin .btn-default.dropdown-toggle {
            background-color: rgb(26, 28, 29) !important;
        }
        .black-skin .btn-default.dropdown-toggle:focus,
        .black-skin .btn-default.dropdown-toggle:hover {
            background-color: rgb(35, 38, 40) !important;
        }
        .black-skin .btn-default:not([disabled]):not(.disabled).active,
        .black-skin .btn-default:not([disabled]):not(.disabled):active,
        .show > .black-skin .btn-default.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(0, 0, 0) !important;
        }
        .black-skin .btn-default:not([disabled]):not(.disabled).active:focus,
        .black-skin .btn-default:not([disabled]):not(.disabled):active:focus,
        .show > .black-skin .btn-default.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .black-skin .default-ic {
            color: rgb(211, 207, 201) !important;
        }
        .black-skin .default-ic:focus,
        .black-skin .default-ic:hover {
            color: rgb(211, 207, 201);
        }
        .black-skin a.btn:not([href]):not([tabindex]),
        .black-skin a.btn:not([href]):not([tabindex]):focus,
        .black-skin a.btn:not([href]):not([tabindex]):hover,
        .black-skin table.table a.btn.btn-default {
            color: rgb(232, 230, 227);
        }
        .black-skin .btn-outline-primary {
            border-color: rgb(30, 150, 117) !important;
            background-color: transparent !important;
            color: rgb(66, 217, 176) !important;
        }
        .black-skin .btn-outline-primary.active,
        .black-skin .btn-outline-primary:active,
        .black-skin .btn-outline-primary:active:focus,
        .black-skin .btn-outline-primary:focus,
        .black-skin .btn-outline-primary:hover {
            border-color: rgb(30, 150, 117) !important;
            background-color: transparent !important;
            color: rgb(66, 217, 176) !important;
        }
        .black-skin .btn-outline-primary:not([disabled]):not(.disabled).active,
        .black-skin .btn-outline-primary:not([disabled]):not(.disabled):active,
        .show > .black-skin .btn-outline-primary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(30, 150, 117) !important;
        }
        .black-skin .btn-outline-primary:not([disabled]):not(.disabled).active:focus,
        .black-skin .btn-outline-primary:not([disabled]):not(.disabled):active:focus,
        .show > .black-skin .btn-outline-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .black-skin .btn-outline-secondary {
            border-color: rgb(21, 97, 189) !important;
            background-color: transparent !important;
            color: rgb(126, 188, 241) !important;
        }
        .black-skin .btn-outline-secondary.active,
        .black-skin .btn-outline-secondary:active,
        .black-skin .btn-outline-secondary:active:focus,
        .black-skin .btn-outline-secondary:focus,
        .black-skin .btn-outline-secondary:hover {
            border-color: rgb(21, 97, 189) !important;
            background-color: transparent !important;
            color: rgb(126, 188, 241) !important;
        }
        .black-skin .btn-outline-secondary:not([disabled]):not(.disabled).active,
        .black-skin .btn-outline-secondary:not([disabled]):not(.disabled):active,
        .show > .black-skin .btn-outline-secondary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(21, 97, 189) !important;
        }
        .black-skin .btn-outline-secondary:not([disabled]):not(.disabled).active:focus,
        .black-skin .btn-outline-secondary:not([disabled]):not(.disabled):active:focus,
        .show > .black-skin .btn-outline-secondary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .black-skin .btn-outline-default {
            border-color: rgb(129, 120, 106) !important;
            background-color: transparent !important;
            color: rgb(211, 207, 201) !important;
        }
        .black-skin .btn-outline-default.active,
        .black-skin .btn-outline-default:active,
        .black-skin .btn-outline-default:active:focus,
        .black-skin .btn-outline-default:focus,
        .black-skin .btn-outline-default:hover {
            border-color: rgb(129, 120, 106) !important;
            background-color: transparent !important;
            color: rgb(211, 207, 201) !important;
        }
        .black-skin .md-form .prefix.active, .black-skin .md-outline input[type="date"]:focus:not([readonly]) + label, .black-skin .md-outline input[type="datetime-local"]:focus:not([readonly]) + label, .black-skin .md-outline input[type="email"]:focus:not([readonly]) + label, .black-skin .md-outline input[type="number"]:focus:not([readonly]) + label, .black-skin .md-outline input[type="password"]:focus:not([readonly]) + label, .black-skin .md-outline input[type="search-md"]:focus:not([readonly]) + label, .black-skin .md-outline input[type="search"]:focus:not([readonly]) + label, .black-skin .md-outline input[type="tel"]:focus:not([readonly]) + label, .black-skin .md-outline input[type="text"]:focus:not([readonly]) + label, .black-skin .md-outline input[type="time"]:focus:not([readonly]) + label, .black-skin .md-outline input[type="url"]:focus:not([readonly]) + label,
        .black-skin .md-outline textarea:focus:not([readonly]) + label, .black-skin input[type="email"]:focus:not([readonly]) + label, .black-skin input[type="text"]:focus:not([readonly]) + label, .black-skin input[type="password"]:focus:not([readonly]) + label, .black-skin input[type="number"]:focus:not([readonly]) + label,
        .black-skin textarea.md-textarea:focus:not([readonly]) + label {
            color: rgb(66, 217, 176);
        }
        .black-skin .btn-outline-default:not([disabled]):not(.disabled).active,
        .black-skin .btn-outline-default:not([disabled]):not(.disabled):active,
        .show > .black-skin .btn-outline-default.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(129, 120, 106) !important;
        }
        .black-skin .btn-outline-default:not([disabled]):not(.disabled).active:focus,
        .black-skin .btn-outline-default:not([disabled]):not(.disabled):active:focus,
        .show > .black-skin .btn-outline-default.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .black-skin .card .btn-action {
            background-image: initial;
            background-color: rgb(26, 28, 29);
        }
        .black-skin .card .btn-action:focus,
        .black-skin .card .btn-action:hover {
            background-color: rgb(35, 38, 40) !important;
        }
        .black-skin .card .btn-action.active {
            background-color: rgb(0, 0, 0) !important;
        }
        .black-skin .md-outline input[type="date"]:focus:not([readonly]), .black-skin .md-outline input[type="datetime-local"]:focus:not([readonly]), .black-skin .md-outline input[type="email"]:focus:not([readonly]), .black-skin .md-outline input[type="number"]:focus:not([readonly]), .black-skin .md-outline input[type="password"]:focus:not([readonly]), .black-skin .md-outline input[type="search-md"]:focus:not([readonly]), .black-skin .md-outline input[type="search"]:focus:not([readonly]), .black-skin .md-outline input[type="tel"]:focus:not([readonly]), .black-skin .md-outline input[type="text"]:focus:not([readonly]), .black-skin .md-outline input[type="time"]:focus:not([readonly]), .black-skin .md-outline input[type="url"]:focus:not([readonly]),
        .black-skin .md-outline textarea:focus:not([readonly]) {
            border-color: rgb(30, 150, 117);
            box-shadow: rgb(34, 167, 130) 0px 0px 0px 1px inset;
        }
        .black-skin .md-bg input[type="date"], .black-skin .md-bg input[type="datetime-local"], .black-skin .md-bg input[type="email"], .black-skin .md-bg input[type="number"], .black-skin .md-bg input[type="password"], .black-skin .md-bg input[type="search-md"], .black-skin .md-bg input[type="search"], .black-skin .md-bg input[type="tel"], .black-skin .md-bg input[type="text"], .black-skin .md-bg input[type="time"], .black-skin .md-bg input[type="url"],
        .black-skin .md-bg textarea.md-textarea {
            background-image: linear-gradient(rgb(34, 167, 130),
            rgb(34, 167, 130)),
            linear-gradient(rgb(48, 52, 54),
            rgb(48, 52, 54));
        }
        .black-skin input[type="email"]:focus:not([readonly]), .black-skin input[type="text"]:focus:not([readonly]), .black-skin input[type="password"]:focus:not([readonly]), .black-skin input[type="number"]:focus:not([readonly]),
        .black-skin textarea.md-textarea:focus:not([readonly]) {
            border-color: rgb(30, 150, 117);
            box-shadow: rgb(34, 167, 130) 0px 1px 0px 0px;
        }
        .black-skin input[type="checkbox"]:checked + label::before {
            border-right-color: rgb(30, 150, 117);
            border-bottom-color: rgb(30, 150, 117);
        }
        .black-skin input[type="checkbox"].filled-in:checked + label::before {
            border-right-color: rgb(48, 52, 54);
            border-bottom-color: rgb(48, 52, 54);
        }
        .black-skin input[type="checkbox"].filled-in:checked + label::after {
            background-color: rgb(34, 167, 130);
            border-color: rgb(30, 150, 117);
        }
        .black-skin .select-wrapper.colorful-select.md-form.md-outline span.caret.active {
            color: rgb(66, 217, 176) !important;
        }
        .black-skin .select-wrapper.colorful-select.md-form.md-outline input.select-dropdown:focus {
            border-color: rgb(30, 150, 117);
            box-shadow: rgb(34, 167, 130) 0px 0px 0px 1px inset;
        }
        .black-skin .select-wrapper.colorful-select.md-form.md-outline + label.active {
            color: rgb(66, 217, 176);
        }
        .black-skin .select-wrapper.colorful-select.md-form .dropdown-content li a,
        .black-skin .select-wrapper.colorful-select.md-form .dropdown-content li span:hover,
        .black-skin .select-wrapper.colorful-select.md-form .dropdown-content li.active {
            background-color: rgb(34, 167, 130) !important;
        }
        .black-skin .select-wrapper.colorful-select.md-form .dropdown-content li.disabled.active {
            background-color: transparent !important;
        }
        .black-skin .top-nav-collapse {
            background-color: rgb(26, 28, 29);
        }
        .black-skin .carousel-multi-item .carousel-indicators li,
        .black-skin .carousel-multi-item .carousel-indicators li.active,
        .black-skin .carousel-multi-item .controls-top > a {
            background-color: rgb(34, 167, 130);
        }
        .black-skin .card-header,
        .black-skin .form-header {
            background-color: rgb(34, 167, 139);
        }
        .black-skin .spinner-primary-color,
        .black-skin .spinner-primary-color-only {
            border-color: rgb(30, 150, 117);
        }
        .black-skin .pagination-primary-color .page-item.active .page-link,
        .black-skin .pagination-primary-color .page-item.active .page-link:focus,
        .black-skin .pagination-primary-color .page-item.active .page-link:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(34, 167, 130);
        }
        .black-skin .pagination-primary-color .page-link {
            color: rgb(66, 217, 176);
        }
        .black-skin .pagination-primary-color .page-link:focus {
            box-shadow: none;
        }
        .cyan-skin .gradient {
            background-image: linear-gradient(135deg,
            rgb(14, 58, 78) 0px,
            rgb(51, 137, 150) 100%);
            background-color: initial;
        }
        .cyan-skin .primary-color,
        .cyan-skin ul.stepper li.active a .circle,
        .cyan-skin ul.stepper li.completed a .circle,
        ul.stepper li.active a .cyan-skin .circle,
        ul.stepper li.completed a .cyan-skin .circle {
            background-color: rgb(63, 138, 134) !important;
        }
        .cyan-skin .navbar {
            background-color: rgb(14, 58, 78);
            color: rgb(232, 230, 227);
        }
        .cyan-skin .navbar .navbar-nav .nav-item .dropdown-menu a {
            color: rgb(232, 230, 227);
        }
        .cyan-skin .navbar .navbar-nav .nav-item .dropdown-menu a:active,
        .cyan-skin .navbar .navbar-nav .nav-item .dropdown-menu a:focus,
        .cyan-skin .navbar .navbar-nav .nav-item .dropdown-menu a:hover {
            background-color: rgb(172, 114, 14);
        }
        .cyan-skin .navbar.double-nav a {
            color: rgb(232, 230, 227);
        }
        .cyan-skin .navbar form .md-form .form-control {
            color: rgb(232, 230, 227);
        }
        .cyan-skin .navbar form .md-form .form-control::-webkit-input-placeholder {
            color: rgb(232, 230, 227);
        }
        .cyan-skin .navbar form .md-form .form-control::placeholder {
            color: rgb(232, 230, 227);
        }
        .cyan-skin .page-footer {
            background-color: rgb(14, 58, 78);
        }
        .cyan-skin .side-nav {
            background-color: rgb(29, 108, 126);
        }
        .cyan-skin .side-nav .logo-wrapper > div {
            background-color: transparent !important;
        }
        .cyan-skin .side-nav .sn-avatar-wrapper img {
            border-color: rgb(170, 113, 14);
        }
        .cyan-skin .side-nav .social {
            border-bottom-color: rgba(77, 83, 86, 0.3);
        }
        .cyan-skin .side-nav .social a:hover .fab,
        .cyan-skin .side-nav .social a:hover .far,
        .cyan-skin .side-nav .social a:hover .fas {
            color: rgb(241, 181, 79) !important;
        }
        .cyan-skin .side-nav .collapsible li {
            background-color: transparent;
        }
        .cyan-skin .side-nav .collapsible li .collapsible-header {
            color: rgb(232, 230, 227);
        }
        .cyan-skin .side-nav .collapsible li .collapsible-header.active,
        .cyan-skin .side-nav .collapsible li .collapsible-header:hover {
            background-color: rgba(23, 52, 66, 0.8);
        }
        .cyan-skin .side-nav .collapsible li .collapsible-body a {
            color: rgb(232, 230, 227);
        }
        .cyan-skin .side-nav .collapsible li .collapsible-body a.active,
        .cyan-skin .side-nav .collapsible li .collapsible-body a:active,
        .cyan-skin .side-nav .collapsible li .collapsible-body a:hover {
            color: rgb(255, 170, 72);
        }
        .cyan-skin .side-nav .fab,
        .cyan-skin .side-nav .far,
        .cyan-skin .side-nav .fas {
            color: rgb(232, 230, 227);
        }
        .cyan-skin .side-nav .sidenav-bg.mask-strong::after,
        .cyan-skin .side-nav .sidenav-bg::after {
            background-image: initial;
            background-color: rgba(17, 62, 77, 0.8);
        }
        .cyan-skin .side-nav .sidenav-bg.mask-light::after {
            background-image: initial;
            background-color: rgba(17, 62, 77, 0.65);
        }
        .cyan-skin .side-nav .sidenav-bg.mask-slight::after {
            background-image: initial;
            background-color: rgba(17, 62, 77, 0.5);
        }
        .cyan-skin .btn-primary {
            color: rgb(232, 230, 227);
            background-color: rgb(164, 88, 0) !important;
        }
        .cyan-skin .btn-primary:hover {
            background-color: rgb(149, 79, 0);
            color: rgb(232, 230, 227);
        }
        .cyan-skin .btn-primary.focus,
        .cyan-skin .btn-primary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .cyan-skin .btn-primary.active,
        .cyan-skin .btn-primary:active,
        .cyan-skin .btn-primary:focus {
            background-color: rgb(175, 94, 0);
        }
        .cyan-skin .btn-primary.dropdown-toggle {
            background-color: rgb(164, 88, 0) !important;
        }
        .cyan-skin .btn-primary.dropdown-toggle:focus,
        .cyan-skin .btn-primary.dropdown-toggle:hover {
            background-color: rgb(149, 79, 0) !important;
        }
        .cyan-skin .btn-primary:not([disabled]):not(.disabled).active,
        .cyan-skin .btn-primary:not([disabled]):not(.disabled):active,
        .show > .cyan-skin .btn-primary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(175, 94, 0) !important;
        }
        .cyan-skin .btn-primary:not([disabled]):not(.disabled).active:focus,
        .cyan-skin .btn-primary:not([disabled]):not(.disabled):active:focus,
        .show > .cyan-skin .btn-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .cyan-skin .primary-ic {
            color: rgb(255, 170, 72) !important;
        }
        .cyan-skin .primary-ic:focus,
        .cyan-skin .primary-ic:hover {
            color: rgb(255, 170, 72);
        }
        .cyan-skin table.table a.btn.btn-primary {
            color: rgb(232, 230, 227);
        }
        .cyan-skin .btn-secondary {
            color: rgb(232, 230, 227);
            background-color: rgb(51, 137, 150) !important;
        }
        .cyan-skin .btn-secondary:hover {
            background-color: rgb(47, 127, 138);
            color: rgb(232, 230, 227);
        }
        .cyan-skin .btn-secondary.focus,
        .cyan-skin .btn-secondary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .cyan-skin .btn-secondary.active,
        .cyan-skin .btn-secondary:active,
        .cyan-skin .btn-secondary:focus {
            background-color: rgb(32, 87, 95);
        }
        .cyan-skin .btn-secondary.dropdown-toggle {
            background-color: rgb(51, 137, 150) !important;
        }
        .cyan-skin .btn-secondary.dropdown-toggle:focus,
        .cyan-skin .btn-secondary.dropdown-toggle:hover {
            background-color: rgb(47, 127, 138) !important;
        }
        .cyan-skin .btn-secondary:not([disabled]):not(.disabled).active,
        .cyan-skin .btn-secondary:not([disabled]):not(.disabled):active,
        .show > .cyan-skin .btn-secondary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(32, 87, 95) !important;
        }
        .cyan-skin .btn-secondary:not([disabled]):not(.disabled).active:focus,
        .cyan-skin .btn-secondary:not([disabled]):not(.disabled):active:focus,
        .show > .cyan-skin .btn-secondary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .cyan-skin .secondary-ic {
            color: rgb(87, 184, 198) !important;
        }
        .cyan-skin .secondary-ic:focus,
        .cyan-skin .secondary-ic:hover {
            color: rgb(87, 184, 198);
        }
        .cyan-skin table.table a.btn.btn-secondary {
            color: rgb(232, 230, 227);
        }
        .cyan-skin .btn-default {
            color: rgb(232, 230, 227);
            background-color: rgb(14, 58, 78) !important;
        }
        .cyan-skin .btn-default:hover {
            background-color: rgb(17, 70, 95);
            color: rgb(232, 230, 227);
        }
        .cyan-skin .btn-default.focus,
        .cyan-skin .btn-default:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .cyan-skin .btn-default.active,
        .cyan-skin .btn-default:active,
        .cyan-skin .btn-default:focus {
            background-color: rgb(2, 6, 8);
        }
        .cyan-skin .btn-default.dropdown-toggle {
            background-color: rgb(14, 58, 78) !important;
        }
        .cyan-skin .btn-default.dropdown-toggle:focus,
        .cyan-skin .btn-default.dropdown-toggle:hover {
            background-color: rgb(17, 70, 95) !important;
        }
        .cyan-skin .btn-default:not([disabled]):not(.disabled).active,
        .cyan-skin .btn-default:not([disabled]):not(.disabled):active,
        .show > .cyan-skin .btn-default.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(2, 6, 8) !important;
        }
        .cyan-skin .btn-default:not([disabled]):not(.disabled).active:focus,
        .cyan-skin .btn-default:not([disabled]):not(.disabled):active:focus,
        .show > .cyan-skin .btn-default.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .cyan-skin .default-ic {
            color: rgb(144, 207, 235) !important;
        }
        .cyan-skin .default-ic:focus,
        .cyan-skin .default-ic:hover {
            color: rgb(144, 207, 235);
        }
        .cyan-skin a.btn:not([href]):not([tabindex]),
        .cyan-skin a.btn:not([href]):not([tabindex]):focus,
        .cyan-skin a.btn:not([href]):not([tabindex]):hover,
        .cyan-skin table.table a.btn.btn-default {
            color: rgb(232, 230, 227);
        }
        .cyan-skin .btn-outline-primary {
            border-color: rgb(159, 85, 0) !important;
            background-color: transparent !important;
            color: rgb(255, 170, 72) !important;
        }
        .cyan-skin .btn-outline-primary.active,
        .cyan-skin .btn-outline-primary:active,
        .cyan-skin .btn-outline-primary:active:focus,
        .cyan-skin .btn-outline-primary:focus,
        .cyan-skin .btn-outline-primary:hover {
            border-color: rgb(159, 85, 0) !important;
            background-color: transparent !important;
            color: rgb(255, 170, 72) !important;
        }
        .cyan-skin .btn-outline-primary:not([disabled]):not(.disabled).active,
        .cyan-skin .btn-outline-primary:not([disabled]):not(.disabled):active,
        .show > .cyan-skin .btn-outline-primary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(159, 85, 0) !important;
        }
        .cyan-skin .btn-outline-primary:not([disabled]):not(.disabled).active:focus,
        .cyan-skin .btn-outline-primary:not([disabled]):not(.disabled):active:focus,
        .show > .cyan-skin .btn-outline-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .cyan-skin .btn-outline-secondary {
            border-color: rgb(45, 121, 132) !important;
            background-color: transparent !important;
            color: rgb(87, 184, 198) !important;
        }
        .cyan-skin .btn-outline-secondary.active,
        .cyan-skin .btn-outline-secondary:active,
        .cyan-skin .btn-outline-secondary:active:focus,
        .cyan-skin .btn-outline-secondary:focus,
        .cyan-skin .btn-outline-secondary:hover {
            border-color: rgb(45, 121, 132) !important;
            background-color: transparent !important;
            color: rgb(87, 184, 198) !important;
        }
        .cyan-skin .btn-outline-secondary:not([disabled]):not(.disabled).active,
        .cyan-skin .btn-outline-secondary:not([disabled]):not(.disabled):active,
        .show > .cyan-skin .btn-outline-secondary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(45, 121, 132) !important;
        }
        .cyan-skin .btn-outline-secondary:not([disabled]):not(.disabled).active:focus,
        .cyan-skin .btn-outline-secondary:not([disabled]):not(.disabled):active:focus,
        .show > .cyan-skin .btn-outline-secondary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .cyan-skin .btn-outline-default {
            border-color: rgb(33, 139, 188) !important;
            background-color: transparent !important;
            color: rgb(144, 207, 235) !important;
        }
        .cyan-skin .btn-outline-default.active,
        .cyan-skin .btn-outline-default:active,
        .cyan-skin .btn-outline-default:active:focus,
        .cyan-skin .btn-outline-default:focus,
        .cyan-skin .btn-outline-default:hover {
            border-color: rgb(33, 139, 188) !important;
            background-color: transparent !important;
            color: rgb(144, 207, 235) !important;
        }
        .cyan-skin .md-form .prefix.active, .cyan-skin .md-outline input[type="date"]:focus:not([readonly]) + label, .cyan-skin .md-outline input[type="datetime-local"]:focus:not([readonly]) + label, .cyan-skin .md-outline input[type="email"]:focus:not([readonly]) + label, .cyan-skin .md-outline input[type="number"]:focus:not([readonly]) + label, .cyan-skin .md-outline input[type="password"]:focus:not([readonly]) + label, .cyan-skin .md-outline input[type="search-md"]:focus:not([readonly]) + label, .cyan-skin .md-outline input[type="search"]:focus:not([readonly]) + label, .cyan-skin .md-outline input[type="tel"]:focus:not([readonly]) + label, .cyan-skin .md-outline input[type="text"]:focus:not([readonly]) + label, .cyan-skin .md-outline input[type="time"]:focus:not([readonly]) + label, .cyan-skin .md-outline input[type="url"]:focus:not([readonly]) + label,
        .cyan-skin .md-outline textarea:focus:not([readonly]) + label, .cyan-skin input[type="email"]:focus:not([readonly]) + label, .cyan-skin input[type="text"]:focus:not([readonly]) + label, .cyan-skin input[type="password"]:focus:not([readonly]) + label, .cyan-skin input[type="number"]:focus:not([readonly]) + label,
        .cyan-skin textarea.md-textarea:focus:not([readonly]) + label {
            color: rgb(241, 181, 79);
        }
        .cyan-skin .btn-outline-default:not([disabled]):not(.disabled).active,
        .cyan-skin .btn-outline-default:not([disabled]):not(.disabled):active,
        .show > .cyan-skin .btn-outline-default.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(33, 139, 188) !important;
        }
        .cyan-skin .btn-outline-default:not([disabled]):not(.disabled).active:focus,
        .cyan-skin .btn-outline-default:not([disabled]):not(.disabled):active:focus,
        .show > .cyan-skin .btn-outline-default.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .cyan-skin .card .btn-action {
            background-image: initial;
            background-color: rgb(14, 58, 78);
        }
        .cyan-skin .card .btn-action:focus,
        .cyan-skin .card .btn-action:hover {
            background-color: rgb(17, 70, 95) !important;
        }
        .cyan-skin .card .btn-action.active {
            background-color: rgb(2, 6, 8) !important;
        }
        .cyan-skin .md-outline input[type="date"]:focus:not([readonly]), .cyan-skin .md-outline input[type="datetime-local"]:focus:not([readonly]), .cyan-skin .md-outline input[type="email"]:focus:not([readonly]), .cyan-skin .md-outline input[type="number"]:focus:not([readonly]), .cyan-skin .md-outline input[type="password"]:focus:not([readonly]), .cyan-skin .md-outline input[type="search-md"]:focus:not([readonly]), .cyan-skin .md-outline input[type="search"]:focus:not([readonly]), .cyan-skin .md-outline input[type="tel"]:focus:not([readonly]), .cyan-skin .md-outline input[type="text"]:focus:not([readonly]), .cyan-skin .md-outline input[type="time"]:focus:not([readonly]), .cyan-skin .md-outline input[type="url"]:focus:not([readonly]),
        .cyan-skin .md-outline textarea:focus:not([readonly]) {
            border-color: rgb(150, 99, 12);
            box-shadow: rgb(158, 104, 13) 0px 0px 0px 1px inset;
        }
        .cyan-skin .md-bg input[type="date"], .cyan-skin .md-bg input[type="datetime-local"], .cyan-skin .md-bg input[type="email"], .cyan-skin .md-bg input[type="number"], .cyan-skin .md-bg input[type="password"], .cyan-skin .md-bg input[type="search-md"], .cyan-skin .md-bg input[type="search"], .cyan-skin .md-bg input[type="tel"], .cyan-skin .md-bg input[type="text"], .cyan-skin .md-bg input[type="time"], .cyan-skin .md-bg input[type="url"],
        .cyan-skin .md-bg textarea.md-textarea {
            background-image: linear-gradient(rgb(158, 104, 13),
            rgb(158, 104, 13)),
            linear-gradient(rgb(48, 52, 54),
            rgb(48, 52, 54));
        }
        .cyan-skin input[type="email"]:focus:not([readonly]), .cyan-skin input[type="text"]:focus:not([readonly]), .cyan-skin input[type="password"]:focus:not([readonly]), .cyan-skin input[type="number"]:focus:not([readonly]),
        .cyan-skin textarea.md-textarea:focus:not([readonly]) {
            border-color: rgb(150, 99, 12);
            box-shadow: rgb(158, 104, 13) 0px 1px 0px 0px;
        }
        .cyan-skin input[type="checkbox"]:checked + label::before {
            border-right-color: rgb(150, 99, 12);
            border-bottom-color: rgb(150, 99, 12);
        }
        .cyan-skin input[type="checkbox"].filled-in:checked + label::before {
            border-right-color: rgb(48, 52, 54);
            border-bottom-color: rgb(48, 52, 54);
        }
        .cyan-skin input[type="checkbox"].filled-in:checked + label::after {
            background-color: rgb(158, 104, 13);
            border-color: rgb(150, 99, 12);
        }
        .cyan-skin .select-wrapper.colorful-select.md-form.md-outline span.caret.active {
            color: rgb(241, 181, 79) !important;
        }
        .cyan-skin .select-wrapper.colorful-select.md-form.md-outline input.select-dropdown:focus {
            border-color: rgb(150, 99, 12);
            box-shadow: rgb(158, 104, 13) 0px 0px 0px 1px inset;
        }
        .cyan-skin .select-wrapper.colorful-select.md-form.md-outline + label.active {
            color: rgb(241, 181, 79);
        }
        .cyan-skin .select-wrapper.colorful-select.md-form .dropdown-content li a,
        .cyan-skin .select-wrapper.colorful-select.md-form .dropdown-content li span:hover,
        .cyan-skin .select-wrapper.colorful-select.md-form .dropdown-content li.active {
            background-color: rgb(158, 104, 13) !important;
        }
        .cyan-skin .select-wrapper.colorful-select.md-form .dropdown-content li.disabled.active {
            background-color: transparent !important;
        }
        .cyan-skin .top-nav-collapse {
            background-color: rgb(14, 58, 78);
        }
        .cyan-skin .carousel-multi-item .carousel-indicators li,
        .cyan-skin .carousel-multi-item .carousel-indicators li.active,
        .cyan-skin .carousel-multi-item .controls-top > a {
            background-color: rgb(158, 104, 13);
        }
        .cyan-skin .card-header,
        .cyan-skin .form-header {
            background-color: rgb(152, 101, 12);
        }
        .cyan-skin .spinner-primary-color,
        .cyan-skin .spinner-primary-color-only {
            border-color: rgb(56, 123, 119);
        }
        .cyan-skin .pagination-primary-color .page-item.active .page-link,
        .cyan-skin .pagination-primary-color .page-item.active .page-link:focus,
        .cyan-skin .pagination-primary-color .page-item.active .page-link:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(63, 138, 134);
        }
        .cyan-skin .pagination-primary-color .page-link {
            color: rgb(99, 184, 178);
        }
        .cyan-skin .pagination-primary-color .page-link:focus {
            box-shadow: none;
        }
        .mdb-skin .gradient {
            background-image: linear-gradient(135deg,
            rgb(11, 26, 42) 0px,
            rgb(35, 94, 147) 100%);
            background-color: initial;
        }
        .mdb-skin .primary-color,
        .mdb-skin ul.stepper li.active a .circle,
        .mdb-skin ul.stepper li.completed a .circle,
        ul.stepper li.active a .mdb-skin .circle,
        ul.stepper li.completed a .mdb-skin .circle {
            background-color: rgb(21, 128, 168) !important;
        }
        .mdb-skin .navbar {
            background-color: rgb(29, 46, 65);
            color: rgb(232, 230, 227);
        }
        .mdb-skin .navbar .navbar-nav .nav-item .dropdown-menu a {
            color: rgb(232, 230, 227);
        }
        .mdb-skin .navbar .navbar-nav .nav-item .dropdown-menu a:active,
        .mdb-skin .navbar .navbar-nav .nav-item .dropdown-menu a:focus,
        .mdb-skin .navbar .navbar-nav .nav-item .dropdown-menu a:hover {
            background-color: rgb(23, 138, 181);
        }
        .mdb-skin .navbar.double-nav a {
            color: rgb(232, 230, 227);
        }
        .mdb-skin .navbar form .md-form .form-control {
            color: rgb(232, 230, 227);
        }
        .mdb-skin .navbar form .md-form .form-control::-webkit-input-placeholder {
            color: rgb(232, 230, 227);
        }
        .mdb-skin .navbar form .md-form .form-control::placeholder {
            color: rgb(232, 230, 227);
        }
        .mdb-skin .page-footer {
            background-color: rgb(29, 46, 65);
        }
        .mdb-skin .side-nav {
            background-color: rgb(27, 55, 78);
        }
        .mdb-skin .side-nav .logo-wrapper > div {
            background-color: transparent !important;
        }
        .mdb-skin .side-nav .sn-avatar-wrapper img {
            border-color: rgb(22, 132, 172);
        }
        .mdb-skin .side-nav .social {
            border-bottom-color: rgba(77, 83, 86, 0.3);
        }
        .mdb-skin .side-nav .social a:hover .fab,
        .mdb-skin .side-nav .social a:hover .far,
        .mdb-skin .side-nav .social a:hover .fas {
            color: rgb(67, 187, 231) !important;
        }
        .mdb-skin .side-nav .collapsible li {
            background-color: transparent;
        }
        .mdb-skin .side-nav .collapsible li .collapsible-header {
            color: rgb(232, 230, 227);
        }
        .mdb-skin .side-nav .collapsible li .collapsible-header.active,
        .mdb-skin .side-nav .collapsible li .collapsible-header:hover {
            background-color: rgba(0, 111, 161, 0.8);
        }
        .mdb-skin .side-nav .collapsible li .collapsible-body a {
            color: rgb(232, 230, 227);
        }
        .mdb-skin .side-nav .collapsible li .collapsible-body a.active,
        .mdb-skin .side-nav .collapsible li .collapsible-body a:active,
        .mdb-skin .side-nav .collapsible li .collapsible-body a:hover {
            color: rgb(98, 212, 255);
        }
        .mdb-skin .side-nav .fab,
        .mdb-skin .side-nav .far,
        .mdb-skin .side-nav .fas {
            color: rgb(232, 230, 227);
        }
        .mdb-skin .side-nav .sidenav-bg.mask-strong::after,
        .mdb-skin .side-nav .sidenav-bg::after {
            background-image: initial;
            background-color: rgba(10, 29, 48, 0.8);
        }
        .mdb-skin .side-nav .sidenav-bg.mask-light::after {
            background-image: initial;
            background-color: rgba(10, 29, 48, 0.65);
        }
        .mdb-skin .side-nav .sidenav-bg.mask-slight::after {
            background-image: initial;
            background-color: rgba(10, 29, 48, 0.5);
        }
        .mdb-skin .btn-primary {
            color: rgb(232, 230, 227);
            background-color: rgb(21, 128, 168) !important;
        }
        .mdb-skin .btn-primary:hover {
            background-color: rgb(20, 117, 154);
            color: rgb(232, 230, 227);
        }
        .mdb-skin .btn-primary.focus,
        .mdb-skin .btn-primary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .mdb-skin .btn-primary.active,
        .mdb-skin .btn-primary:active,
        .mdb-skin .btn-primary:focus {
            background-color: rgb(16, 97, 126);
        }
        .mdb-skin .btn-primary.dropdown-toggle {
            background-color: rgb(21, 128, 168) !important;
        }
        .mdb-skin .btn-primary.dropdown-toggle:focus,
        .mdb-skin .btn-primary.dropdown-toggle:hover {
            background-color: rgb(20, 117, 154) !important;
        }
        .mdb-skin .btn-primary:not([disabled]):not(.disabled).active,
        .mdb-skin .btn-primary:not([disabled]):not(.disabled):active,
        .show > .mdb-skin .btn-primary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(16, 97, 126) !important;
        }
        .mdb-skin .btn-primary:not([disabled]):not(.disabled).active:focus,
        .mdb-skin .btn-primary:not([disabled]):not(.disabled):active:focus,
        .show > .mdb-skin .btn-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .mdb-skin .primary-ic {
            color: rgb(67, 187, 231) !important;
        }
        .mdb-skin .primary-ic:focus,
        .mdb-skin .primary-ic:hover {
            color: rgb(67, 187, 231);
        }
        .mdb-skin table.table a.btn.btn-primary {
            color: rgb(232, 230, 227);
        }
        .mdb-skin .btn-secondary {
            color: rgb(232, 230, 227);
            background-color: rgb(11, 49, 82) !important;
        }
        .mdb-skin .btn-secondary:hover {
            background-color: rgb(14, 59, 100);
            color: rgb(232, 230, 227);
        }
        .mdb-skin .btn-secondary.focus,
        .mdb-skin .btn-secondary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .mdb-skin .btn-secondary.active,
        .mdb-skin .btn-secondary:active,
        .mdb-skin .btn-secondary:focus {
            background-color: rgb(2, 6, 10);
        }
        .mdb-skin .btn-secondary.dropdown-toggle {
            background-color: rgb(11, 49, 82) !important;
        }
        .mdb-skin .btn-secondary.dropdown-toggle:focus,
        .mdb-skin .btn-secondary.dropdown-toggle:hover {
            background-color: rgb(14, 59, 100) !important;
        }
        .mdb-skin .btn-secondary:not([disabled]):not(.disabled).active,
        .mdb-skin .btn-secondary:not([disabled]):not(.disabled):active,
        .show > .mdb-skin .btn-secondary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(2, 6, 10) !important;
        }
        .mdb-skin .btn-secondary:not([disabled]):not(.disabled).active:focus,
        .mdb-skin .btn-secondary:not([disabled]):not(.disabled):active:focus,
        .show > .mdb-skin .btn-secondary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .mdb-skin .secondary-ic {
            color: rgb(148, 200, 240) !important;
        }
        .mdb-skin .secondary-ic:focus,
        .mdb-skin .secondary-ic:hover {
            color: rgb(148, 200, 240);
        }
        .mdb-skin table.table a.btn.btn-secondary {
            color: rgb(232, 230, 227);
        }
        .mdb-skin .btn-default {
            color: rgb(232, 230, 227);
            background-color: rgb(21, 79, 122) !important;
        }
        .mdb-skin .btn-default:hover {
            background-color: rgb(24, 90, 139);
            color: rgb(232, 230, 227);
        }
        .mdb-skin .btn-default.focus,
        .mdb-skin .btn-default:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .mdb-skin .btn-default.active,
        .mdb-skin .btn-default:active,
        .mdb-skin .btn-default:focus {
            background-color: rgb(9, 34, 52);
        }
        .mdb-skin .btn-default.dropdown-toggle {
            background-color: rgb(21, 79, 122) !important;
        }
        .mdb-skin .btn-default.dropdown-toggle:focus,
        .mdb-skin .btn-default.dropdown-toggle:hover {
            background-color: rgb(24, 90, 139) !important;
        }
        .mdb-skin .btn-default:not([disabled]):not(.disabled).active,
        .mdb-skin .btn-default:not([disabled]):not(.disabled):active,
        .show > .mdb-skin .btn-default.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(9, 34, 52) !important;
        }
        .mdb-skin .btn-default:not([disabled]):not(.disabled).active:focus,
        .mdb-skin .btn-default:not([disabled]):not(.disabled):active:focus,
        .show > .mdb-skin .btn-default.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .mdb-skin .default-ic {
            color: rgb(120, 185, 232) !important;
        }
        .mdb-skin .default-ic:focus,
        .mdb-skin .default-ic:hover {
            color: rgb(120, 185, 232);
        }
        .mdb-skin a.btn:not([href]):not([tabindex]),
        .mdb-skin a.btn:not([href]):not([tabindex]):focus,
        .mdb-skin a.btn:not([href]):not([tabindex]):hover,
        .mdb-skin table.table a.btn.btn-default {
            color: rgb(232, 230, 227);
        }
        .mdb-skin .btn-outline-primary {
            border-color: rgb(19, 116, 152) !important;
            background-color: transparent !important;
            color: rgb(67, 187, 231) !important;
        }
        .mdb-skin .btn-outline-primary.active,
        .mdb-skin .btn-outline-primary:active,
        .mdb-skin .btn-outline-primary:active:focus,
        .mdb-skin .btn-outline-primary:focus,
        .mdb-skin .btn-outline-primary:hover {
            border-color: rgb(19, 116, 152) !important;
            background-color: transparent !important;
            color: rgb(67, 187, 231) !important;
        }
        .mdb-skin .btn-outline-primary:not([disabled]):not(.disabled).active,
        .mdb-skin .btn-outline-primary:not([disabled]):not(.disabled):active,
        .show > .mdb-skin .btn-outline-primary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(19, 116, 152) !important;
        }
        .mdb-skin .btn-outline-primary:not([disabled]):not(.disabled).active:focus,
        .mdb-skin .btn-outline-primary:not([disabled]):not(.disabled):active:focus,
        .show > .mdb-skin .btn-outline-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .mdb-skin .btn-outline-secondary {
            border-color: rgb(26, 115, 194) !important;
            background-color: transparent !important;
            color: rgb(148, 200, 240) !important;
        }
        .mdb-skin .btn-outline-secondary.active,
        .mdb-skin .btn-outline-secondary:active,
        .mdb-skin .btn-outline-secondary:active:focus,
        .mdb-skin .btn-outline-secondary:focus,
        .mdb-skin .btn-outline-secondary:hover {
            border-color: rgb(26, 115, 194) !important;
            background-color: transparent !important;
            color: rgb(148, 200, 240) !important;
        }
        .mdb-skin .btn-outline-secondary:not([disabled]):not(.disabled).active,
        .mdb-skin .btn-outline-secondary:not([disabled]):not(.disabled):active,
        .show > .mdb-skin .btn-outline-secondary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(26, 115, 194) !important;
        }
        .mdb-skin .btn-outline-secondary:not([disabled]):not(.disabled).active:focus,
        .mdb-skin .btn-outline-secondary:not([disabled]):not(.disabled):active:focus,
        .show > .mdb-skin .btn-outline-secondary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .mdb-skin .btn-outline-default {
            border-color: rgb(29, 112, 172) !important;
            background-color: transparent !important;
            color: rgb(120, 185, 232) !important;
        }
        .mdb-skin .btn-outline-default.active,
        .mdb-skin .btn-outline-default:active,
        .mdb-skin .btn-outline-default:active:focus,
        .mdb-skin .btn-outline-default:focus,
        .mdb-skin .btn-outline-default:hover {
            border-color: rgb(29, 112, 172) !important;
            background-color: transparent !important;
            color: rgb(120, 185, 232) !important;
        }
        .mdb-skin .md-form .prefix.active, .mdb-skin .md-outline input[type="date"]:focus:not([readonly]) + label, .mdb-skin .md-outline input[type="datetime-local"]:focus:not([readonly]) + label, .mdb-skin .md-outline input[type="email"]:focus:not([readonly]) + label, .mdb-skin .md-outline input[type="number"]:focus:not([readonly]) + label, .mdb-skin .md-outline input[type="password"]:focus:not([readonly]) + label, .mdb-skin .md-outline input[type="search-md"]:focus:not([readonly]) + label, .mdb-skin .md-outline input[type="search"]:focus:not([readonly]) + label, .mdb-skin .md-outline input[type="tel"]:focus:not([readonly]) + label, .mdb-skin .md-outline input[type="text"]:focus:not([readonly]) + label, .mdb-skin .md-outline input[type="time"]:focus:not([readonly]) + label, .mdb-skin .md-outline input[type="url"]:focus:not([readonly]) + label,
        .mdb-skin .md-outline textarea:focus:not([readonly]) + label, .mdb-skin input[type="email"]:focus:not([readonly]) + label, .mdb-skin input[type="text"]:focus:not([readonly]) + label, .mdb-skin input[type="password"]:focus:not([readonly]) + label, .mdb-skin input[type="number"]:focus:not([readonly]) + label,
        .mdb-skin textarea.md-textarea:focus:not([readonly]) + label {
            color: rgb(67, 187, 231);
        }
        .mdb-skin .btn-outline-default:not([disabled]):not(.disabled).active,
        .mdb-skin .btn-outline-default:not([disabled]):not(.disabled):active,
        .show > .mdb-skin .btn-outline-default.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(29, 112, 172) !important;
        }
        .mdb-skin .btn-outline-default:not([disabled]):not(.disabled).active:focus,
        .mdb-skin .btn-outline-default:not([disabled]):not(.disabled):active:focus,
        .show > .mdb-skin .btn-outline-default.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .mdb-skin .card .btn-action {
            background-image: initial;
            background-color: rgb(21, 79, 122);
        }
        .mdb-skin .card .btn-action:focus,
        .mdb-skin .card .btn-action:hover {
            background-color: rgb(24, 90, 139) !important;
        }
        .mdb-skin .card .btn-action.active {
            background-color: rgb(9, 34, 52) !important;
        }
        .mdb-skin .md-outline input[type="date"]:focus:not([readonly]), .mdb-skin .md-outline input[type="datetime-local"]:focus:not([readonly]), .mdb-skin .md-outline input[type="email"]:focus:not([readonly]), .mdb-skin .md-outline input[type="number"]:focus:not([readonly]), .mdb-skin .md-outline input[type="password"]:focus:not([readonly]), .mdb-skin .md-outline input[type="search-md"]:focus:not([readonly]), .mdb-skin .md-outline input[type="search"]:focus:not([readonly]), .mdb-skin .md-outline input[type="tel"]:focus:not([readonly]), .mdb-skin .md-outline input[type="text"]:focus:not([readonly]), .mdb-skin .md-outline input[type="time"]:focus:not([readonly]), .mdb-skin .md-outline input[type="url"]:focus:not([readonly]),
        .mdb-skin .md-outline textarea:focus:not([readonly]) {
            border-color: rgb(19, 116, 152);
            box-shadow: rgb(21, 128, 168) 0px 0px 0px 1px inset;
        }
        .mdb-skin .md-bg input[type="date"], .mdb-skin .md-bg input[type="datetime-local"], .mdb-skin .md-bg input[type="email"], .mdb-skin .md-bg input[type="number"], .mdb-skin .md-bg input[type="password"], .mdb-skin .md-bg input[type="search-md"], .mdb-skin .md-bg input[type="search"], .mdb-skin .md-bg input[type="tel"], .mdb-skin .md-bg input[type="text"], .mdb-skin .md-bg input[type="time"], .mdb-skin .md-bg input[type="url"],
        .mdb-skin .md-bg textarea.md-textarea {
            background-image: linear-gradient(rgb(21, 128, 168),
            rgb(21, 128, 168)),
            linear-gradient(rgb(48, 52, 54),
            rgb(48, 52, 54));
        }
        .mdb-skin input[type="email"]:focus:not([readonly]), .mdb-skin input[type="text"]:focus:not([readonly]), .mdb-skin input[type="password"]:focus:not([readonly]), .mdb-skin input[type="number"]:focus:not([readonly]),
        .mdb-skin textarea.md-textarea:focus:not([readonly]) {
            border-color: rgb(19, 116, 152);
            box-shadow: rgb(21, 128, 168) 0px 1px 0px 0px;
        }
        .mdb-skin input[type="checkbox"]:checked + label::before {
            border-right-color: rgb(19, 116, 152);
            border-bottom-color: rgb(19, 116, 152);
        }
        .mdb-skin input[type="checkbox"].filled-in:checked + label::before {
            border-right-color: rgb(48, 52, 54);
            border-bottom-color: rgb(48, 52, 54);
        }
        .mdb-skin input[type="checkbox"].filled-in:checked + label::after {
            background-color: rgb(21, 128, 168);
            border-color: rgb(19, 116, 152);
        }
        .mdb-skin .select-wrapper.colorful-select.md-form.md-outline span.caret.active {
            color: rgb(67, 187, 231) !important;
        }
        .mdb-skin .select-wrapper.colorful-select.md-form.md-outline input.select-dropdown:focus {
            border-color: rgb(19, 116, 152);
            box-shadow: rgb(21, 128, 168) 0px 0px 0px 1px inset;
        }
        .mdb-skin .select-wrapper.colorful-select.md-form.md-outline + label.active {
            color: rgb(67, 187, 231);
        }
        .mdb-skin .select-wrapper.colorful-select.md-form .dropdown-content li a,
        .mdb-skin .select-wrapper.colorful-select.md-form .dropdown-content li span:hover,
        .mdb-skin .select-wrapper.colorful-select.md-form .dropdown-content li.active {
            background-color: rgb(21, 128, 168) !important;
        }
        .mdb-skin .select-wrapper.colorful-select.md-form .dropdown-content li.disabled.active {
            background-color: transparent !important;
        }
        .mdb-skin .top-nav-collapse {
            background-color: rgb(29, 46, 65);
        }
        .mdb-skin .carousel-multi-item .carousel-indicators li,
        .mdb-skin .carousel-multi-item .carousel-indicators li.active,
        .mdb-skin .carousel-multi-item .controls-top > a {
            background-color: rgb(21, 128, 168);
        }
        .mdb-skin .card-header,
        .mdb-skin .form-header {
            background-color: rgb(21, 124, 162);
        }
        .mdb-skin .spinner-primary-color,
        .mdb-skin .spinner-primary-color-only {
            border-color: rgb(19, 116, 152);
        }
        .mdb-skin .pagination-primary-color .page-item.active .page-link,
        .mdb-skin .pagination-primary-color .page-item.active .page-link:focus,
        .mdb-skin .pagination-primary-color .page-item.active .page-link:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(21, 128, 168);
        }
        .mdb-skin .pagination-primary-color .page-link {
            color: rgb(67, 187, 231);
        }
        .mdb-skin .pagination-primary-color .page-link:focus {
            box-shadow: none;
        }
        .deep-purple-skin .gradient {
            background-image: linear-gradient(135deg,
            rgb(37, 25, 58) 0px,
            rgb(60, 26, 119) 100%);
            background-color: initial;
        }
        .deep-purple-skin .primary-color,
        .deep-purple-skin ul.stepper li.active a .circle,
        .deep-purple-skin ul.stepper li.completed a .circle,
        ul.stepper li.active a .deep-purple-skin .circle,
        ul.stepper li.completed a .deep-purple-skin .circle {
            background-color: rgb(133, 40, 61) !important;
        }
        .deep-purple-skin .navbar {
            background-color: rgb(91, 99, 103);
            color: rgb(232, 230, 227);
        }
        .deep-purple-skin .navbar .navbar-nav .nav-item .dropdown-menu a {
            color: rgb(232, 230, 227);
        }
        .deep-purple-skin .navbar .navbar-nav .nav-item .dropdown-menu a:active,
        .deep-purple-skin .navbar .navbar-nav .nav-item .dropdown-menu a:focus,
        .deep-purple-skin .navbar .navbar-nav .nav-item .dropdown-menu a:hover {
            background-color: rgb(59, 16, 132);
        }
        .deep-purple-skin .navbar.double-nav a {
            color: rgb(232, 230, 227);
        }
        .deep-purple-skin .navbar form .md-form .form-control {
            color: rgb(232, 230, 227);
        }
        .deep-purple-skin .navbar form .md-form .form-control::-webkit-input-placeholder {
            color: rgb(232, 230, 227);
        }
        .deep-purple-skin .navbar form .md-form .form-control::placeholder {
            color: rgb(232, 230, 227);
        }
        .deep-purple-skin .page-footer {
            background-color: rgb(91, 99, 103);
        }
        .deep-purple-skin .side-nav {
            background-color: rgb(44, 37, 76);
        }
        .deep-purple-skin .side-nav .logo-wrapper > div {
            background-color: transparent !important;
        }
        .deep-purple-skin .side-nav .sn-avatar-wrapper img {
            border-color: rgb(65, 18, 148);
        }
        .deep-purple-skin .side-nav .social {
            border-bottom-color: rgba(77, 83, 86, 0.3);
        }
        .deep-purple-skin .side-nav .social a:hover .fab,
        .deep-purple-skin .side-nav .social a:hover .far,
        .deep-purple-skin .side-nav .social a:hover .fas {
            color: rgb(166, 124, 239) !important;
        }
        .deep-purple-skin .side-nav .collapsible li {
            background-color: transparent;
        }
        .deep-purple-skin .side-nav .collapsible li .collapsible-header {
            color: rgb(232, 230, 227);
        }
        .deep-purple-skin .side-nav .collapsible li .collapsible-header.active,
        .deep-purple-skin .side-nav .collapsible li .collapsible-header:hover {
            background-color: rgba(51, 15, 115, 0.5);
        }
        .deep-purple-skin .side-nav .collapsible li .collapsible-body a {
            color: rgb(232, 230, 227);
        }
        .deep-purple-skin .side-nav .collapsible li .collapsible-body a.active,
        .deep-purple-skin .side-nav .collapsible li .collapsible-body a:active,
        .deep-purple-skin .side-nav .collapsible li .collapsible-body a:hover {
            color: rgb(186, 147, 251);
        }
        .deep-purple-skin .side-nav .fab,
        .deep-purple-skin .side-nav .far,
        .deep-purple-skin .side-nav .fas {
            color: rgb(232, 230, 227);
        }
        .deep-purple-skin .side-nav .sidenav-bg.mask-strong::after,
        .deep-purple-skin .side-nav .sidenav-bg::after {
            background-image: initial;
            background-color: rgba(29, 7, 45, 0.88);
        }
        .deep-purple-skin .side-nav .sidenav-bg.mask-light::after {
            background-image: initial;
            background-color: rgba(29, 7, 45, 0.65);
        }
        .deep-purple-skin .side-nav .sidenav-bg.mask-slight::after {
            background-image: initial;
            background-color: rgba(29, 7, 45, 0.5);
        }
        .deep-purple-skin .btn-primary {
            color: rgb(232, 230, 227);
            background-color: rgb(53, 15, 119) !important;
        }
        .deep-purple-skin .btn-primary:hover {
            background-color: rgb(46, 13, 105);
            color: rgb(232, 230, 227);
        }
        .deep-purple-skin .btn-primary.focus,
        .deep-purple-skin .btn-primary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .deep-purple-skin .btn-primary.active,
        .deep-purple-skin .btn-primary:active,
        .deep-purple-skin .btn-primary:focus {
            background-color: rgb(76, 21, 173);
        }
        .deep-purple-skin .btn-primary.dropdown-toggle {
            background-color: rgb(53, 15, 119) !important;
        }
        .deep-purple-skin .btn-primary.dropdown-toggle:focus,
        .deep-purple-skin .btn-primary.dropdown-toggle:hover {
            background-color: rgb(46, 13, 105) !important;
        }
        .deep-purple-skin .btn-primary:not([disabled]):not(.disabled).active,
        .deep-purple-skin .btn-primary:not([disabled]):not(.disabled):active,
        .show > .deep-purple-skin .btn-primary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(76, 21, 173) !important;
        }
        .deep-purple-skin .btn-primary:not([disabled]):not(.disabled).active:focus,
        .deep-purple-skin .btn-primary:not([disabled]):not(.disabled):active:focus,
        .show > .deep-purple-skin .btn-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .deep-purple-skin .primary-ic {
            color: rgb(166, 124, 239) !important;
        }
        .deep-purple-skin .primary-ic:focus,
        .deep-purple-skin .primary-ic:hover {
            color: rgb(166, 124, 239);
        }
        .deep-purple-skin table.table a.btn.btn-primary {
            color: rgb(232, 230, 227);
        }
        .deep-purple-skin .btn-secondary {
            color: rgb(232, 230, 227);
            background-color: rgb(88, 61, 130) !important;
        }
        .deep-purple-skin .btn-secondary:hover {
            background-color: rgb(91, 63, 135);
            color: rgb(232, 230, 227);
        }
        .deep-purple-skin .btn-secondary.focus,
        .deep-purple-skin .btn-secondary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .deep-purple-skin .btn-secondary.active,
        .deep-purple-skin .btn-secondary:active,
        .deep-purple-skin .btn-secondary:focus {
            background-color: rgb(50, 35, 74);
        }
        .deep-purple-skin .btn-secondary.dropdown-toggle {
            background-color: rgb(88, 61, 130) !important;
        }
        .deep-purple-skin .btn-secondary.dropdown-toggle:focus,
        .deep-purple-skin .btn-secondary.dropdown-toggle:hover {
            background-color: rgb(91, 63, 135) !important;
        }
        .deep-purple-skin .btn-secondary:not([disabled]):not(.disabled).active,
        .deep-purple-skin .btn-secondary:not([disabled]):not(.disabled):active,
        .show > .deep-purple-skin .btn-secondary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(50, 35, 74) !important;
        }
        .deep-purple-skin .btn-secondary:not([disabled]):not(.disabled).active:focus,
        .deep-purple-skin .btn-secondary:not([disabled]):not(.disabled):active:focus,
        .show > .deep-purple-skin .btn-secondary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .deep-purple-skin .secondary-ic {
            color: rgb(137, 106, 186) !important;
        }
        .deep-purple-skin .secondary-ic:focus,
        .deep-purple-skin .secondary-ic:hover {
            color: rgb(137, 106, 186);
        }
        .deep-purple-skin table.table a.btn.btn-secondary {
            color: rgb(232, 230, 227);
        }
        .deep-purple-skin .btn-default {
            color: rgb(232, 230, 227);
            background-color: rgb(44, 37, 76) !important;
        }
        .deep-purple-skin .btn-default:hover {
            background-color: rgb(52, 43, 90);
            color: rgb(232, 230, 227);
        }
        .deep-purple-skin .btn-default.focus,
        .deep-purple-skin .btn-default:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .deep-purple-skin .btn-default.active,
        .deep-purple-skin .btn-default:active,
        .deep-purple-skin .btn-default:focus {
            background-color: rgb(12, 10, 21);
        }
        .deep-purple-skin .btn-default.dropdown-toggle {
            background-color: rgb(44, 37, 76) !important;
        }
        .deep-purple-skin .btn-default.dropdown-toggle:focus,
        .deep-purple-skin .btn-default.dropdown-toggle:hover {
            background-color: rgb(52, 43, 90) !important;
        }
        .deep-purple-skin .btn-default:not([disabled]):not(.disabled).active,
        .deep-purple-skin .btn-default:not([disabled]):not(.disabled):active,
        .show > .deep-purple-skin .btn-default.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(12, 10, 21) !important;
        }
        .deep-purple-skin .btn-default:not([disabled]):not(.disabled).active:focus,
        .deep-purple-skin .btn-default:not([disabled]):not(.disabled):active:focus,
        .show > .deep-purple-skin .btn-default.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .deep-purple-skin .default-ic {
            color: rgb(164, 154, 206) !important;
        }
        .deep-purple-skin .default-ic:focus,
        .deep-purple-skin .default-ic:hover {
            color: rgb(164, 154, 206);
        }
        .deep-purple-skin a.btn:not([href]):not([tabindex]),
        .deep-purple-skin a.btn:not([href]):not([tabindex]):focus,
        .deep-purple-skin a.btn:not([href]):not([tabindex]):hover,
        .deep-purple-skin table.table a.btn.btn-default {
            color: rgb(232, 230, 227);
        }
        .deep-purple-skin .btn-outline-primary {
            border-color: rgb(56, 16, 127) !important;
            background-color: transparent !important;
            color: rgb(166, 124, 239) !important;
        }
        .deep-purple-skin .btn-outline-primary.active,
        .deep-purple-skin .btn-outline-primary:active,
        .deep-purple-skin .btn-outline-primary:active:focus,
        .deep-purple-skin .btn-outline-primary:focus,
        .deep-purple-skin .btn-outline-primary:hover {
            border-color: rgb(56, 16, 127) !important;
            background-color: transparent !important;
            color: rgb(166, 124, 239) !important;
        }
        .deep-purple-skin .btn-outline-primary:not([disabled]):not(.disabled).active,
        .deep-purple-skin .btn-outline-primary:not([disabled]):not(.disabled):active,
        .show > .deep-purple-skin .btn-outline-primary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(56, 16, 127) !important;
        }
        .deep-purple-skin .btn-outline-primary:not([disabled]):not(.disabled).active:focus,
        .deep-purple-skin .btn-outline-primary:not([disabled]):not(.disabled):active:focus,
        .show > .deep-purple-skin .btn-outline-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .deep-purple-skin .btn-outline-secondary {
            border-color: rgb(84, 58, 125) !important;
            background-color: transparent !important;
            color: rgb(137, 106, 186) !important;
        }
        .deep-purple-skin .btn-outline-secondary.active,
        .deep-purple-skin .btn-outline-secondary:active,
        .deep-purple-skin .btn-outline-secondary:active:focus,
        .deep-purple-skin .btn-outline-secondary:focus,
        .deep-purple-skin .btn-outline-secondary:hover {
            border-color: rgb(84, 58, 125) !important;
            background-color: transparent !important;
            color: rgb(137, 106, 186) !important;
        }
        .deep-purple-skin .btn-outline-secondary:not([disabled]):not(.disabled).active,
        .deep-purple-skin .btn-outline-secondary:not([disabled]):not(.disabled):active,
        .show > .deep-purple-skin .btn-outline-secondary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(84, 58, 125) !important;
        }
        .deep-purple-skin .btn-outline-secondary:not([disabled]):not(.disabled).active:focus,
        .deep-purple-skin .btn-outline-secondary:not([disabled]):not(.disabled):active:focus,
        .show > .deep-purple-skin .btn-outline-secondary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .deep-purple-skin .btn-outline-default {
            border-color: rgb(83, 69, 143) !important;
            background-color: transparent !important;
            color: rgb(164, 154, 206) !important;
        }
        .deep-purple-skin .btn-outline-default.active,
        .deep-purple-skin .btn-outline-default:active,
        .deep-purple-skin .btn-outline-default:active:focus,
        .deep-purple-skin .btn-outline-default:focus,
        .deep-purple-skin .btn-outline-default:hover {
            border-color: rgb(83, 69, 143) !important;
            background-color: transparent !important;
            color: rgb(164, 154, 206) !important;
        }
        .deep-purple-skin .md-form .prefix.active, .deep-purple-skin .md-outline input[type="date"]:focus:not([readonly]) + label, .deep-purple-skin .md-outline input[type="datetime-local"]:focus:not([readonly]) + label, .deep-purple-skin .md-outline input[type="email"]:focus:not([readonly]) + label, .deep-purple-skin .md-outline input[type="number"]:focus:not([readonly]) + label, .deep-purple-skin .md-outline input[type="password"]:focus:not([readonly]) + label, .deep-purple-skin .md-outline input[type="search-md"]:focus:not([readonly]) + label, .deep-purple-skin .md-outline input[type="search"]:focus:not([readonly]) + label, .deep-purple-skin .md-outline input[type="tel"]:focus:not([readonly]) + label, .deep-purple-skin .md-outline input[type="text"]:focus:not([readonly]) + label, .deep-purple-skin .md-outline input[type="time"]:focus:not([readonly]) + label, .deep-purple-skin .md-outline input[type="url"]:focus:not([readonly]) + label,
        .deep-purple-skin .md-outline textarea:focus:not([readonly]) + label, .deep-purple-skin input[type="email"]:focus:not([readonly]) + label, .deep-purple-skin input[type="text"]:focus:not([readonly]) + label, .deep-purple-skin input[type="password"]:focus:not([readonly]) + label, .deep-purple-skin input[type="number"]:focus:not([readonly]) + label,
        .deep-purple-skin textarea.md-textarea:focus:not([readonly]) + label {
            color: rgb(166, 124, 239);
        }
        .deep-purple-skin .btn-outline-default:not([disabled]):not(.disabled).active,
        .deep-purple-skin .btn-outline-default:not([disabled]):not(.disabled):active,
        .show > .deep-purple-skin .btn-outline-default.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(83, 69, 143) !important;
        }
        .deep-purple-skin .btn-outline-default:not([disabled]):not(.disabled).active:focus,
        .deep-purple-skin .btn-outline-default:not([disabled]):not(.disabled):active:focus,
        .show > .deep-purple-skin .btn-outline-default.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .deep-purple-skin .card .btn-action {
            background-image: initial;
            background-color: rgb(44, 37, 76);
        }
        .deep-purple-skin .card .btn-action:focus,
        .deep-purple-skin .card .btn-action:hover {
            background-color: rgb(52, 43, 90) !important;
        }
        .deep-purple-skin .card .btn-action.active {
            background-color: rgb(12, 10, 21) !important;
        }
        .deep-purple-skin .md-outline input[type="date"]:focus:not([readonly]), .deep-purple-skin .md-outline input[type="datetime-local"]:focus:not([readonly]), .deep-purple-skin .md-outline input[type="email"]:focus:not([readonly]), .deep-purple-skin .md-outline input[type="number"]:focus:not([readonly]), .deep-purple-skin .md-outline input[type="password"]:focus:not([readonly]), .deep-purple-skin .md-outline input[type="search-md"]:focus:not([readonly]), .deep-purple-skin .md-outline input[type="search"]:focus:not([readonly]), .deep-purple-skin .md-outline input[type="tel"]:focus:not([readonly]), .deep-purple-skin .md-outline input[type="text"]:focus:not([readonly]), .deep-purple-skin .md-outline input[type="time"]:focus:not([readonly]), .deep-purple-skin .md-outline input[type="url"]:focus:not([readonly]),
        .deep-purple-skin .md-outline textarea:focus:not([readonly]) {
            border-color: rgb(56, 16, 127);
            box-shadow: rgb(53, 15, 119) 0px 0px 0px 1px inset;
        }
        .deep-purple-skin .md-bg input[type="date"], .deep-purple-skin .md-bg input[type="datetime-local"], .deep-purple-skin .md-bg input[type="email"], .deep-purple-skin .md-bg input[type="number"], .deep-purple-skin .md-bg input[type="password"], .deep-purple-skin .md-bg input[type="search-md"], .deep-purple-skin .md-bg input[type="search"], .deep-purple-skin .md-bg input[type="tel"], .deep-purple-skin .md-bg input[type="text"], .deep-purple-skin .md-bg input[type="time"], .deep-purple-skin .md-bg input[type="url"],
        .deep-purple-skin .md-bg textarea.md-textarea {
            background-image: linear-gradient(rgb(53, 15, 119),
            rgb(53, 15, 119)),
            linear-gradient(rgb(48, 52, 54),
            rgb(48, 52, 54));
        }
        .deep-purple-skin input[type="email"]:focus:not([readonly]), .deep-purple-skin input[type="text"]:focus:not([readonly]), .deep-purple-skin input[type="password"]:focus:not([readonly]), .deep-purple-skin input[type="number"]:focus:not([readonly]),
        .deep-purple-skin textarea.md-textarea:focus:not([readonly]) {
            border-color: rgb(56, 16, 127);
            box-shadow: rgb(53, 15, 119) 0px 1px 0px 0px;
        }
        .deep-purple-skin input[type="checkbox"]:checked + label::before {
            border-right-color: rgb(56, 16, 127);
            border-bottom-color: rgb(56, 16, 127);
        }
        .deep-purple-skin input[type="checkbox"].filled-in:checked + label::before {
            border-right-color: rgb(48, 52, 54);
            border-bottom-color: rgb(48, 52, 54);
        }
        .deep-purple-skin input[type="checkbox"].filled-in:checked + label::after {
            background-color: rgb(53, 15, 119);
            border-color: rgb(56, 16, 127);
        }
        .deep-purple-skin .select-wrapper.colorful-select.md-form.md-outline span.caret.active {
            color: rgb(166, 124, 239) !important;
        }
        .deep-purple-skin .select-wrapper.colorful-select.md-form.md-outline input.select-dropdown:focus {
            border-color: rgb(56, 16, 127);
            box-shadow: rgb(53, 15, 119) 0px 0px 0px 1px inset;
        }
        .deep-purple-skin .select-wrapper.colorful-select.md-form.md-outline + label.active {
            color: rgb(166, 124, 239);
        }
        .deep-purple-skin .select-wrapper.colorful-select.md-form .dropdown-content li a,
        .deep-purple-skin .select-wrapper.colorful-select.md-form .dropdown-content li span:hover,
        .deep-purple-skin .select-wrapper.colorful-select.md-form .dropdown-content li.active {
            background-color: rgb(53, 15, 119) !important;
        }
        .deep-purple-skin .select-wrapper.colorful-select.md-form .dropdown-content li.disabled.active {
            background-color: transparent !important;
        }
        .deep-purple-skin .top-nav-collapse {
            background-color: rgb(91, 99, 103);
        }
        .deep-purple-skin .carousel-multi-item .carousel-indicators li,
        .deep-purple-skin .carousel-multi-item .carousel-indicators li.active,
        .deep-purple-skin .carousel-multi-item .controls-top > a {
            background-color: rgb(53, 15, 119);
        }
        .deep-purple-skin .card-header,
        .deep-purple-skin .form-header {
            background-color: rgb(50, 14, 113);
        }
        .deep-purple-skin .spinner-primary-color,
        .deep-purple-skin .spinner-primary-color-only {
            border-color: rgb(125, 38, 58);
        }
        .deep-purple-skin .pagination-primary-color .page-item.active .page-link,
        .deep-purple-skin .pagination-primary-color .page-item.active .page-link:focus,
        .deep-purple-skin .pagination-primary-color .page-item.active .page-link:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(133, 40, 61);
        }
        .deep-purple-skin .pagination-primary-color .page-link {
            color: rgb(210, 107, 130);
        }
        .deep-purple-skin .pagination-primary-color .page-link:focus {
            box-shadow: none;
        }
        .navy-blue-skin .gradient {
            background-image: linear-gradient(135deg,
            rgb(27, 31, 42) 0px,
            rgb(63, 83, 133) 100%);
            background-color: initial;
        }
        .navy-blue-skin .primary-color,
        .navy-blue-skin ul.stepper li.active a .circle,
        .navy-blue-skin ul.stepper li.completed a .circle,
        ul.stepper li.active a .navy-blue-skin .circle,
        ul.stepper li.completed a .navy-blue-skin .circle {
            background-color: rgb(38, 126, 126) !important;
        }
        .navy-blue-skin .navbar {
            background-color: rgb(42, 47, 64);
            color: rgb(232, 230, 227);
        }
        .navy-blue-skin .navbar .navbar-nav .nav-item .dropdown-menu a {
            color: rgb(232, 230, 227);
        }
        .navy-blue-skin .navbar .navbar-nav .nav-item .dropdown-menu a:active,
        .navy-blue-skin .navbar .navbar-nav .nav-item .dropdown-menu a:focus,
        .navy-blue-skin .navbar .navbar-nav .nav-item .dropdown-menu a:hover {
            background-color: rgb(43, 146, 146);
        }
        .navy-blue-skin .navbar.double-nav a {
            color: rgb(232, 230, 227);
        }
        .navy-blue-skin .navbar form .md-form .form-control {
            color: rgb(232, 230, 227);
        }
        .navy-blue-skin .navbar form .md-form .form-control::-webkit-input-placeholder {
            color: rgb(232, 230, 227);
        }
        .navy-blue-skin .navbar form .md-form .form-control::placeholder {
            color: rgb(232, 230, 227);
        }
        .navy-blue-skin .page-footer {
            background-color: rgb(42, 47, 64);
        }
        .navy-blue-skin .side-nav {
            background-color: rgb(61, 69, 96);
        }
        .navy-blue-skin .side-nav .logo-wrapper > div {
            background-color: transparent !important;
        }
        .navy-blue-skin .side-nav .sn-avatar-wrapper img {
            border-color: rgb(46, 153, 153);
        }
        .navy-blue-skin .side-nav .social {
            border-bottom-color: rgba(77, 83, 86, 0.3);
        }
        .navy-blue-skin .side-nav .social a:hover .fab,
        .navy-blue-skin .side-nav .social a:hover .far,
        .navy-blue-skin .side-nav .social a:hover .fas {
            color: rgb(82, 203, 203) !important;
        }
        .navy-blue-skin .side-nav .collapsible li {
            background-color: transparent;
        }
        .navy-blue-skin .side-nav .collapsible li .collapsible-header {
            color: rgb(232, 230, 227);
        }
        .navy-blue-skin .side-nav .collapsible li .collapsible-header.active,
        .navy-blue-skin .side-nav .collapsible li .collapsible-header:hover {
            background-color: rgba(30, 166, 166, 0.8);
        }
        .navy-blue-skin .side-nav .collapsible li .collapsible-body a {
            color: rgb(232, 230, 227);
        }
        .navy-blue-skin .side-nav .collapsible li .collapsible-body a.active,
        .navy-blue-skin .side-nav .collapsible li .collapsible-body a:active,
        .navy-blue-skin .side-nav .collapsible li .collapsible-body a:hover {
            color: rgb(82, 203, 203);
        }
        .navy-blue-skin .side-nav .fab,
        .navy-blue-skin .side-nav .far,
        .navy-blue-skin .side-nav .fas {
            color: rgb(232, 230, 227);
        }
        .navy-blue-skin .side-nav .sidenav-bg.mask-strong::after,
        .navy-blue-skin .side-nav .sidenav-bg::after {
            background-image: initial;
            background-color: rgba(11, 12, 26, 0.8);
        }
        .navy-blue-skin .side-nav .sidenav-bg.mask-light::after {
            background-image: initial;
            background-color: rgba(11, 12, 26, 0.65);
        }
        .navy-blue-skin .side-nav .sidenav-bg.mask-slight::after {
            background-image: initial;
            background-color: rgba(11, 12, 26, 0.5);
        }
        .navy-blue-skin .btn-primary {
            color: rgb(232, 230, 227);
            background-color: rgb(46, 154, 154) !important;
        }
        .navy-blue-skin .btn-primary:hover {
            background-color: rgb(42, 142, 142);
            color: rgb(232, 230, 227);
        }
        .navy-blue-skin .btn-primary.focus,
        .navy-blue-skin .btn-primary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .navy-blue-skin .btn-primary.active,
        .navy-blue-skin .btn-primary:active,
        .navy-blue-skin .btn-primary:focus {
            background-color: rgb(30, 98, 98);
        }
        .navy-blue-skin .btn-primary.dropdown-toggle {
            background-color: rgb(46, 154, 154) !important;
        }
        .navy-blue-skin .btn-primary.dropdown-toggle:focus,
        .navy-blue-skin .btn-primary.dropdown-toggle:hover {
            background-color: rgb(42, 142, 142) !important;
        }
        .navy-blue-skin .btn-primary:not([disabled]):not(.disabled).active,
        .navy-blue-skin .btn-primary:not([disabled]):not(.disabled):active,
        .show > .navy-blue-skin .btn-primary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(30, 98, 98) !important;
        }
        .navy-blue-skin .btn-primary:not([disabled]):not(.disabled).active:focus,
        .navy-blue-skin .btn-primary:not([disabled]):not(.disabled):active:focus,
        .show > .navy-blue-skin .btn-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .navy-blue-skin .primary-ic {
            color: rgb(82, 203, 203) !important;
        }
        .navy-blue-skin .primary-ic:focus,
        .navy-blue-skin .primary-ic:hover {
            color: rgb(82, 203, 203);
        }
        .navy-blue-skin table.table a.btn.btn-primary {
            color: rgb(232, 230, 227);
        }
        .navy-blue-skin .btn-secondary {
            color: rgb(232, 230, 227);
            background-color: rgb(97, 60, 140) !important;
        }
        .navy-blue-skin .btn-secondary:hover {
            background-color: rgb(89, 56, 129);
            color: rgb(232, 230, 227);
        }
        .navy-blue-skin .btn-secondary.focus,
        .navy-blue-skin .btn-secondary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .navy-blue-skin .btn-secondary.active,
        .navy-blue-skin .btn-secondary:active,
        .navy-blue-skin .btn-secondary:focus {
            background-color: rgb(62, 38, 89);
        }
        .navy-blue-skin .btn-secondary.dropdown-toggle {
            background-color: rgb(97, 60, 140) !important;
        }
        .navy-blue-skin .btn-secondary.dropdown-toggle:focus,
        .navy-blue-skin .btn-secondary.dropdown-toggle:hover {
            background-color: rgb(89, 56, 129) !important;
        }
        .navy-blue-skin .btn-secondary:not([disabled]):not(.disabled).active,
        .navy-blue-skin .btn-secondary:not([disabled]):not(.disabled):active,
        .show > .navy-blue-skin .btn-secondary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(62, 38, 89) !important;
        }
        .navy-blue-skin .btn-secondary:not([disabled]):not(.disabled).active:focus,
        .navy-blue-skin .btn-secondary:not([disabled]):not(.disabled):active:focus,
        .show > .navy-blue-skin .btn-secondary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .navy-blue-skin .secondary-ic {
            color: rgb(138, 98, 187) !important;
        }
        .navy-blue-skin .secondary-ic:focus,
        .navy-blue-skin .secondary-ic:hover {
            color: rgb(138, 98, 187);
        }
        .navy-blue-skin table.table a.btn.btn-secondary {
            color: rgb(232, 230, 227);
        }
        .navy-blue-skin .btn-default {
            color: rgb(232, 230, 227);
            background-color: rgb(33, 44, 69) !important;
        }
        .navy-blue-skin .btn-default:hover {
            background-color: rgb(39, 53, 82);
            color: rgb(232, 230, 227);
        }
        .navy-blue-skin .btn-default.focus,
        .navy-blue-skin .btn-default:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .navy-blue-skin .btn-default.active,
        .navy-blue-skin .btn-default:active,
        .navy-blue-skin .btn-default:focus {
            background-color: rgb(6, 9, 14);
        }
        .navy-blue-skin .btn-default.dropdown-toggle {
            background-color: rgb(33, 44, 69) !important;
        }
        .navy-blue-skin .btn-default.dropdown-toggle:focus,
        .navy-blue-skin .btn-default.dropdown-toggle:hover {
            background-color: rgb(39, 53, 82) !important;
        }
        .navy-blue-skin .btn-default:not([disabled]):not(.disabled).active,
        .navy-blue-skin .btn-default:not([disabled]):not(.disabled):active,
        .show > .navy-blue-skin .btn-default.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(6, 9, 14) !important;
        }
        .navy-blue-skin .btn-default:not([disabled]):not(.disabled).active:focus,
        .navy-blue-skin .btn-default:not([disabled]):not(.disabled):active:focus,
        .show > .navy-blue-skin .btn-default.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .navy-blue-skin .default-ic {
            color: rgb(169, 191, 214) !important;
        }
        .navy-blue-skin .default-ic:focus,
        .navy-blue-skin .default-ic:hover {
            color: rgb(169, 191, 214);
        }
        .navy-blue-skin a.btn:not([href]):not([tabindex]),
        .navy-blue-skin a.btn:not([href]):not([tabindex]):focus,
        .navy-blue-skin a.btn:not([href]):not([tabindex]):hover,
        .navy-blue-skin table.table a.btn.btn-default {
            color: rgb(232, 230, 227);
        }
        .navy-blue-skin .btn-outline-primary {
            border-color: rgb(41, 136, 136) !important;
            background-color: transparent !important;
            color: rgb(82, 203, 203) !important;
        }
        .navy-blue-skin .btn-outline-primary.active,
        .navy-blue-skin .btn-outline-primary:active,
        .navy-blue-skin .btn-outline-primary:active:focus,
        .navy-blue-skin .btn-outline-primary:focus,
        .navy-blue-skin .btn-outline-primary:hover {
            border-color: rgb(41, 136, 136) !important;
            background-color: transparent !important;
            color: rgb(82, 203, 203) !important;
        }
        .navy-blue-skin .btn-outline-primary:not([disabled]):not(.disabled).active,
        .navy-blue-skin .btn-outline-primary:not([disabled]):not(.disabled):active,
        .show > .navy-blue-skin .btn-outline-primary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(41, 136, 136) !important;
        }
        .navy-blue-skin .btn-outline-primary:not([disabled]):not(.disabled).active:focus,
        .navy-blue-skin .btn-outline-primary:not([disabled]):not(.disabled):active:focus,
        .show > .navy-blue-skin .btn-outline-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .navy-blue-skin .btn-outline-secondary {
            border-color: rgb(85, 53, 123) !important;
            background-color: transparent !important;
            color: rgb(138, 98, 187) !important;
        }
        .navy-blue-skin .btn-outline-secondary.active,
        .navy-blue-skin .btn-outline-secondary:active,
        .navy-blue-skin .btn-outline-secondary:active:focus,
        .navy-blue-skin .btn-outline-secondary:focus,
        .navy-blue-skin .btn-outline-secondary:hover {
            border-color: rgb(85, 53, 123) !important;
            background-color: transparent !important;
            color: rgb(138, 98, 187) !important;
        }
        .navy-blue-skin .btn-outline-secondary:not([disabled]):not(.disabled).active,
        .navy-blue-skin .btn-outline-secondary:not([disabled]):not(.disabled):active,
        .show > .navy-blue-skin .btn-outline-secondary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(85, 53, 123) !important;
        }
        .navy-blue-skin .btn-outline-secondary:not([disabled]):not(.disabled).active:focus,
        .navy-blue-skin .btn-outline-secondary:not([disabled]):not(.disabled):active:focus,
        .show > .navy-blue-skin .btn-outline-secondary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .navy-blue-skin .btn-outline-default {
            border-color: rgb(70, 94, 147) !important;
            background-color: transparent !important;
            color: rgb(169, 191, 214) !important;
        }
        .navy-blue-skin .btn-outline-default.active,
        .navy-blue-skin .btn-outline-default:active,
        .navy-blue-skin .btn-outline-default:active:focus,
        .navy-blue-skin .btn-outline-default:focus,
        .navy-blue-skin .btn-outline-default:hover {
            border-color: rgb(70, 94, 147) !important;
            background-color: transparent !important;
            color: rgb(169, 191, 214) !important;
        }
        .navy-blue-skin .md-form .prefix.active, .navy-blue-skin .md-outline input[type="date"]:focus:not([readonly]) + label, .navy-blue-skin .md-outline input[type="datetime-local"]:focus:not([readonly]) + label, .navy-blue-skin .md-outline input[type="email"]:focus:not([readonly]) + label, .navy-blue-skin .md-outline input[type="number"]:focus:not([readonly]) + label, .navy-blue-skin .md-outline input[type="password"]:focus:not([readonly]) + label, .navy-blue-skin .md-outline input[type="search-md"]:focus:not([readonly]) + label, .navy-blue-skin .md-outline input[type="search"]:focus:not([readonly]) + label, .navy-blue-skin .md-outline input[type="tel"]:focus:not([readonly]) + label, .navy-blue-skin .md-outline input[type="text"]:focus:not([readonly]) + label, .navy-blue-skin .md-outline input[type="time"]:focus:not([readonly]) + label, .navy-blue-skin .md-outline input[type="url"]:focus:not([readonly]) + label,
        .navy-blue-skin .md-outline textarea:focus:not([readonly]) + label, .navy-blue-skin input[type="email"]:focus:not([readonly]) + label, .navy-blue-skin input[type="text"]:focus:not([readonly]) + label, .navy-blue-skin input[type="password"]:focus:not([readonly]) + label, .navy-blue-skin input[type="number"]:focus:not([readonly]) + label,
        .navy-blue-skin textarea.md-textarea:focus:not([readonly]) + label {
            color: rgb(82, 203, 203);
        }
        .navy-blue-skin .btn-outline-default:not([disabled]):not(.disabled).active,
        .navy-blue-skin .btn-outline-default:not([disabled]):not(.disabled):active,
        .show > .navy-blue-skin .btn-outline-default.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(70, 94, 147) !important;
        }
        .navy-blue-skin .btn-outline-default:not([disabled]):not(.disabled).active:focus,
        .navy-blue-skin .btn-outline-default:not([disabled]):not(.disabled):active:focus,
        .show > .navy-blue-skin .btn-outline-default.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .navy-blue-skin .card .btn-action {
            background-image: initial;
            background-color: rgb(33, 44, 69);
        }
        .navy-blue-skin .card .btn-action:focus,
        .navy-blue-skin .card .btn-action:hover {
            background-color: rgb(39, 53, 82) !important;
        }
        .navy-blue-skin .card .btn-action.active {
            background-color: rgb(6, 9, 14) !important;
        }
        .navy-blue-skin .md-outline input[type="date"]:focus:not([readonly]), .navy-blue-skin .md-outline input[type="datetime-local"]:focus:not([readonly]), .navy-blue-skin .md-outline input[type="email"]:focus:not([readonly]), .navy-blue-skin .md-outline input[type="number"]:focus:not([readonly]), .navy-blue-skin .md-outline input[type="password"]:focus:not([readonly]), .navy-blue-skin .md-outline input[type="search-md"]:focus:not([readonly]), .navy-blue-skin .md-outline input[type="search"]:focus:not([readonly]), .navy-blue-skin .md-outline input[type="tel"]:focus:not([readonly]), .navy-blue-skin .md-outline input[type="text"]:focus:not([readonly]), .navy-blue-skin .md-outline input[type="time"]:focus:not([readonly]), .navy-blue-skin .md-outline input[type="url"]:focus:not([readonly]),
        .navy-blue-skin .md-outline textarea:focus:not([readonly]) {
            border-color: rgb(41, 136, 136);
            box-shadow: rgb(46, 154, 154) 0px 0px 0px 1px inset;
        }
        .navy-blue-skin .md-bg input[type="date"], .navy-blue-skin .md-bg input[type="datetime-local"], .navy-blue-skin .md-bg input[type="email"], .navy-blue-skin .md-bg input[type="number"], .navy-blue-skin .md-bg input[type="password"], .navy-blue-skin .md-bg input[type="search-md"], .navy-blue-skin .md-bg input[type="search"], .navy-blue-skin .md-bg input[type="tel"], .navy-blue-skin .md-bg input[type="text"], .navy-blue-skin .md-bg input[type="time"], .navy-blue-skin .md-bg input[type="url"],
        .navy-blue-skin .md-bg textarea.md-textarea {
            background-image: linear-gradient(rgb(46, 154, 154),
            rgb(46, 154, 154)),
            linear-gradient(rgb(48, 52, 54),
            rgb(48, 52, 54));
        }
        .navy-blue-skin input[type="email"]:focus:not([readonly]), .navy-blue-skin input[type="text"]:focus:not([readonly]), .navy-blue-skin input[type="password"]:focus:not([readonly]), .navy-blue-skin input[type="number"]:focus:not([readonly]),
        .navy-blue-skin textarea.md-textarea:focus:not([readonly]) {
            border-color: rgb(41, 136, 136);
            box-shadow: rgb(46, 154, 154) 0px 1px 0px 0px;
        }
        .navy-blue-skin input[type="checkbox"]:checked + label::before {
            border-right-color: rgb(41, 136, 136);
            border-bottom-color: rgb(41, 136, 136);
        }
        .navy-blue-skin input[type="checkbox"].filled-in:checked + label::before {
            border-right-color: rgb(48, 52, 54);
            border-bottom-color: rgb(48, 52, 54);
        }
        .navy-blue-skin input[type="checkbox"].filled-in:checked + label::after {
            background-color: rgb(46, 154, 154);
            border-color: rgb(41, 136, 136);
        }
        .navy-blue-skin .select-wrapper.colorful-select.md-form.md-outline span.caret.active {
            color: rgb(82, 203, 203) !important;
        }
        .navy-blue-skin .select-wrapper.colorful-select.md-form.md-outline input.select-dropdown:focus {
            border-color: rgb(41, 136, 136);
            box-shadow: rgb(46, 154, 154) 0px 0px 0px 1px inset;
        }
        .navy-blue-skin .select-wrapper.colorful-select.md-form.md-outline + label.active {
            color: rgb(82, 203, 203);
        }
        .navy-blue-skin .select-wrapper.colorful-select.md-form .dropdown-content li a,
        .navy-blue-skin .select-wrapper.colorful-select.md-form .dropdown-content li span:hover,
        .navy-blue-skin .select-wrapper.colorful-select.md-form .dropdown-content li.active {
            background-color: rgb(46, 154, 154) !important;
        }
        .navy-blue-skin .select-wrapper.colorful-select.md-form .dropdown-content li.disabled.active {
            background-color: transparent !important;
        }
        .navy-blue-skin .top-nav-collapse {
            background-color: rgb(42, 47, 64);
        }
        .navy-blue-skin .carousel-multi-item .carousel-indicators li,
        .navy-blue-skin .carousel-multi-item .carousel-indicators li.active,
        .navy-blue-skin .carousel-multi-item .controls-top > a {
            background-color: rgb(46, 154, 154);
        }
        .navy-blue-skin .card-header,
        .navy-blue-skin .form-header {
            background-color: rgb(45, 149, 149);
        }
        .navy-blue-skin .spinner-primary-color,
        .navy-blue-skin .spinner-primary-color-only {
            border-color: rgb(45, 148, 148);
        }
        .navy-blue-skin .pagination-primary-color .page-item.active .page-link,
        .navy-blue-skin .pagination-primary-color .page-item.active .page-link:focus,
        .navy-blue-skin .pagination-primary-color .page-item.active .page-link:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(38, 126, 126);
        }
        .navy-blue-skin .pagination-primary-color .page-link {
            color: rgb(105, 210, 210);
        }
        .navy-blue-skin .pagination-primary-color .page-link:focus {
            box-shadow: none;
        }
        .pink-skin .gradient {
            background-image: linear-gradient(135deg,
            rgb(103, 34, 72) 0px,
            rgb(115, 13, 65) 100%);
            background-color: initial;
        }
        .pink-skin .primary-color,
        .pink-skin ul.stepper li.active a .circle,
        .pink-skin ul.stepper li.completed a .circle,
        ul.stepper li.active a .pink-skin .circle,
        ul.stepper li.completed a .pink-skin .circle {
            background-color: rgb(133, 54, 70) !important;
        }
        .pink-skin .navbar {
            background-color: rgb(70, 75, 78);
            color: rgb(232, 230, 227);
        }
        .pink-skin .navbar .navbar-nav .nav-item .dropdown-menu a {
            color: rgb(232, 230, 227);
        }
        .pink-skin .navbar .navbar-nav .nav-item .dropdown-menu a:active,
        .pink-skin .navbar .navbar-nav .nav-item .dropdown-menu a:focus,
        .pink-skin .navbar .navbar-nav .nav-item .dropdown-menu a:hover {
            background-color: rgb(81, 88, 91);
        }
        .pink-skin .navbar.double-nav a {
            color: rgb(232, 230, 227);
        }
        .pink-skin .navbar form .md-form .form-control {
            color: rgb(232, 230, 227);
        }
        .pink-skin .navbar form .md-form .form-control::-webkit-input-placeholder {
            color: rgb(232, 230, 227);
        }
        .pink-skin .navbar form .md-form .form-control::placeholder {
            color: rgb(232, 230, 227);
        }
        .pink-skin .page-footer {
            background-color: rgb(70, 75, 78);
        }
        .pink-skin .side-nav {
            background-color: rgb(136, 64, 95);
        }
        .pink-skin .side-nav .logo-wrapper > div {
            background-color: transparent !important;
        }
        .pink-skin .side-nav .sn-avatar-wrapper img {
            border-color: rgb(84, 91, 94);
        }
        .pink-skin .side-nav .social {
            border-bottom-color: rgba(77, 83, 86, 0.3);
        }
        .pink-skin .side-nav .social a:hover .fab,
        .pink-skin .side-nav .social a:hover .far,
        .pink-skin .side-nav .social a:hover .fas {
            color: rgb(176, 169, 159) !important;
        }
        .pink-skin .side-nav .collapsible li {
            background-color: transparent;
        }
        .pink-skin .side-nav .collapsible li .collapsible-header {
            color: rgb(232, 230, 227);
        }
        .pink-skin .side-nav .collapsible li .collapsible-header.active,
        .pink-skin .side-nav .collapsible li .collapsible-header:hover {
            background-color: rgba(0, 0, 0, 0.4);
        }
        .pink-skin .side-nav .collapsible li .collapsible-body a {
            color: rgb(232, 230, 227);
        }
        .pink-skin .side-nav .collapsible li .collapsible-body a.active,
        .pink-skin .side-nav .collapsible li .collapsible-body a:active,
        .pink-skin .side-nav .collapsible li .collapsible-body a:hover {
            color: rgb(255, 149, 221);
        }
        .pink-skin .side-nav .fab,
        .pink-skin .side-nav .far,
        .pink-skin .side-nav .fas {
            color: rgb(232, 230, 227);
        }
        .pink-skin .side-nav .sidenav-bg.mask-strong::after,
        .pink-skin .side-nav .sidenav-bg::after {
            background-image: initial;
            background-color: rgba(122, 38, 70, 0.8);
        }
        .pink-skin .side-nav .sidenav-bg.mask-light::after {
            background-image: initial;
            background-color: rgba(122, 38, 70, 0.65);
        }
        .pink-skin .side-nav .sidenav-bg.mask-slight::after {
            background-image: initial;
            background-color: rgba(122, 38, 70, 0.5);
        }
        .pink-skin .btn-primary {
            color: rgb(232, 230, 227);
            background-color: rgb(77, 25, 46) !important;
        }
        .pink-skin .btn-primary:hover {
            background-color: rgb(92, 30, 54);
            color: rgb(232, 230, 227);
        }
        .pink-skin .btn-primary.focus,
        .pink-skin .btn-primary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .pink-skin .btn-primary.active,
        .pink-skin .btn-primary:active,
        .pink-skin .btn-primary:focus {
            background-color: rgb(15, 5, 9);
        }
        .pink-skin .btn-primary.dropdown-toggle {
            background-color: rgb(77, 25, 46) !important;
        }
        .pink-skin .btn-primary.dropdown-toggle:focus,
        .pink-skin .btn-primary.dropdown-toggle:hover {
            background-color: rgb(92, 30, 54) !important;
        }
        .pink-skin .btn-primary:not([disabled]):not(.disabled).active,
        .pink-skin .btn-primary:not([disabled]):not(.disabled):active,
        .show > .pink-skin .btn-primary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(15, 5, 9) !important;
        }
        .pink-skin .btn-primary:not([disabled]):not(.disabled).active:focus,
        .pink-skin .btn-primary:not([disabled]):not(.disabled):active:focus,
        .show > .pink-skin .btn-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .pink-skin .primary-ic {
            color: rgb(221, 149, 178) !important;
        }
        .pink-skin .primary-ic:focus,
        .pink-skin .primary-ic:hover {
            color: rgb(221, 149, 178);
        }
        .pink-skin table.table a.btn.btn-primary {
            color: rgb(232, 230, 227);
        }
        .pink-skin .btn-secondary {
            color: rgb(232, 230, 227);
            background-color: rgb(137, 21, 72) !important;
        }
        .pink-skin .btn-secondary:hover {
            background-color: rgb(124, 20, 65);
            color: rgb(232, 230, 227);
        }
        .pink-skin .btn-secondary.focus,
        .pink-skin .btn-secondary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .pink-skin .btn-secondary.active,
        .pink-skin .btn-secondary:active,
        .pink-skin .btn-secondary:focus {
            background-color: rgb(158, 25, 83);
        }
        .pink-skin .btn-secondary.dropdown-toggle {
            background-color: rgb(137, 21, 72) !important;
        }
        .pink-skin .btn-secondary.dropdown-toggle:focus,
        .pink-skin .btn-secondary.dropdown-toggle:hover {
            background-color: rgb(124, 20, 65) !important;
        }
        .pink-skin .btn-secondary:not([disabled]):not(.disabled).active,
        .pink-skin .btn-secondary:not([disabled]):not(.disabled):active,
        .show > .pink-skin .btn-secondary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(158, 25, 83) !important;
        }
        .pink-skin .btn-secondary:not([disabled]):not(.disabled).active:focus,
        .pink-skin .btn-secondary:not([disabled]):not(.disabled):active:focus,
        .show > .pink-skin .btn-secondary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .pink-skin .secondary-ic {
            color: rgb(231, 102, 158) !important;
        }
        .pink-skin .secondary-ic:focus,
        .pink-skin .secondary-ic:hover {
            color: rgb(231, 102, 158);
        }
        .pink-skin table.table a.btn.btn-secondary {
            color: rgb(232, 230, 227);
        }
        .pink-skin .btn-default {
            color: rgb(232, 230, 227);
            background-color: rgb(70, 75, 78) !important;
        }
        .pink-skin .btn-default:hover {
            background-color: rgb(79, 86, 89);
            color: rgb(232, 230, 227);
        }
        .pink-skin .btn-default.focus,
        .pink-skin .btn-default:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .pink-skin .btn-default.active,
        .pink-skin .btn-default:active,
        .pink-skin .btn-default:focus {
            background-color: rgb(31, 34, 35);
        }
        .pink-skin .btn-default.dropdown-toggle {
            background-color: rgb(70, 75, 78) !important;
        }
        .pink-skin .btn-default.dropdown-toggle:focus,
        .pink-skin .btn-default.dropdown-toggle:hover {
            background-color: rgb(79, 86, 89) !important;
        }
        .pink-skin .btn-default:not([disabled]):not(.disabled).active,
        .pink-skin .btn-default:not([disabled]):not(.disabled):active,
        .show > .pink-skin .btn-default.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(31, 34, 35) !important;
        }
        .pink-skin .btn-default:not([disabled]):not(.disabled).active:focus,
        .pink-skin .btn-default:not([disabled]):not(.disabled):active:focus,
        .show > .pink-skin .btn-default.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .pink-skin .default-ic {
            color: rgb(174, 167, 156) !important;
        }
        .pink-skin .default-ic:focus,
        .pink-skin .default-ic:hover {
            color: rgb(174, 167, 156);
        }
        .pink-skin a.btn:not([href]):not([tabindex]),
        .pink-skin a.btn:not([href]):not([tabindex]):focus,
        .pink-skin a.btn:not([href]):not([tabindex]):hover,
        .pink-skin table.table a.btn.btn-default {
            color: rgb(232, 230, 227);
        }
        .pink-skin .btn-outline-primary {
            border-color: rgb(164, 53, 97) !important;
            background-color: transparent !important;
            color: rgb(221, 149, 178) !important;
        }
        .pink-skin .btn-outline-primary.active,
        .pink-skin .btn-outline-primary:active,
        .pink-skin .btn-outline-primary:active:focus,
        .pink-skin .btn-outline-primary:focus,
        .pink-skin .btn-outline-primary:hover {
            border-color: rgb(164, 53, 97) !important;
            background-color: transparent !important;
            color: rgb(221, 149, 178) !important;
        }
        .pink-skin .btn-outline-primary:not([disabled]):not(.disabled).active,
        .pink-skin .btn-outline-primary:not([disabled]):not(.disabled):active,
        .show > .pink-skin .btn-outline-primary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(164, 53, 97) !important;
        }
        .pink-skin .btn-outline-primary:not([disabled]):not(.disabled).active:focus,
        .pink-skin .btn-outline-primary:not([disabled]):not(.disabled):active:focus,
        .show > .pink-skin .btn-outline-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .pink-skin .btn-outline-secondary {
            border-color: rgb(135, 21, 70) !important;
            background-color: transparent !important;
            color: rgb(231, 102, 158) !important;
        }
        .pink-skin .btn-outline-secondary.active,
        .pink-skin .btn-outline-secondary:active,
        .pink-skin .btn-outline-secondary:active:focus,
        .pink-skin .btn-outline-secondary:focus,
        .pink-skin .btn-outline-secondary:hover {
            border-color: rgb(135, 21, 70) !important;
            background-color: transparent !important;
            color: rgb(231, 102, 158) !important;
        }
        .pink-skin .btn-outline-secondary:not([disabled]):not(.disabled).active,
        .pink-skin .btn-outline-secondary:not([disabled]):not(.disabled):active,
        .show > .pink-skin .btn-outline-secondary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(135, 21, 70) !important;
        }
        .pink-skin .btn-outline-secondary:not([disabled]):not(.disabled).active:focus,
        .pink-skin .btn-outline-secondary:not([disabled]):not(.disabled):active:focus,
        .show > .pink-skin .btn-outline-secondary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .pink-skin .btn-outline-default {
            border-color: rgb(110, 102, 90) !important;
            background-color: transparent !important;
            color: rgb(174, 167, 156) !important;
        }
        .pink-skin .btn-outline-default.active,
        .pink-skin .btn-outline-default:active,
        .pink-skin .btn-outline-default:active:focus,
        .pink-skin .btn-outline-default:focus,
        .pink-skin .btn-outline-default:hover {
            border-color: rgb(110, 102, 90) !important;
            background-color: transparent !important;
            color: rgb(174, 167, 156) !important;
        }
        .pink-skin .md-form .prefix.active, .pink-skin .md-outline input[type="date"]:focus:not([readonly]) + label, .pink-skin .md-outline input[type="datetime-local"]:focus:not([readonly]) + label, .pink-skin .md-outline input[type="email"]:focus:not([readonly]) + label, .pink-skin .md-outline input[type="number"]:focus:not([readonly]) + label, .pink-skin .md-outline input[type="password"]:focus:not([readonly]) + label, .pink-skin .md-outline input[type="search-md"]:focus:not([readonly]) + label, .pink-skin .md-outline input[type="search"]:focus:not([readonly]) + label, .pink-skin .md-outline input[type="tel"]:focus:not([readonly]) + label, .pink-skin .md-outline input[type="text"]:focus:not([readonly]) + label, .pink-skin .md-outline input[type="time"]:focus:not([readonly]) + label, .pink-skin .md-outline input[type="url"]:focus:not([readonly]) + label,
        .pink-skin .md-outline textarea:focus:not([readonly]) + label, .pink-skin input[type="email"]:focus:not([readonly]) + label, .pink-skin input[type="text"]:focus:not([readonly]) + label, .pink-skin input[type="password"]:focus:not([readonly]) + label, .pink-skin input[type="number"]:focus:not([readonly]) + label,
        .pink-skin textarea.md-textarea:focus:not([readonly]) + label {
            color: rgb(176, 169, 159);
        }
        .pink-skin .btn-outline-default:not([disabled]):not(.disabled).active,
        .pink-skin .btn-outline-default:not([disabled]):not(.disabled):active,
        .show > .pink-skin .btn-outline-default.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(110, 102, 90) !important;
        }
        .pink-skin .btn-outline-default:not([disabled]):not(.disabled).active:focus,
        .pink-skin .btn-outline-default:not([disabled]):not(.disabled):active:focus,
        .show > .pink-skin .btn-outline-default.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .pink-skin .card .btn-action {
            background-image: initial;
            background-color: rgb(70, 75, 78);
        }
        .pink-skin .card .btn-action:focus,
        .pink-skin .card .btn-action:hover {
            background-color: rgb(79, 86, 89) !important;
        }
        .pink-skin .card .btn-action.active {
            background-color: rgb(31, 34, 35) !important;
        }
        .pink-skin .md-outline input[type="date"]:focus:not([readonly]), .pink-skin .md-outline input[type="datetime-local"]:focus:not([readonly]), .pink-skin .md-outline input[type="email"]:focus:not([readonly]), .pink-skin .md-outline input[type="number"]:focus:not([readonly]), .pink-skin .md-outline input[type="password"]:focus:not([readonly]), .pink-skin .md-outline input[type="search-md"]:focus:not([readonly]), .pink-skin .md-outline input[type="search"]:focus:not([readonly]), .pink-skin .md-outline input[type="tel"]:focus:not([readonly]), .pink-skin .md-outline input[type="text"]:focus:not([readonly]), .pink-skin .md-outline input[type="time"]:focus:not([readonly]), .pink-skin .md-outline input[type="url"]:focus:not([readonly]),
        .pink-skin .md-outline textarea:focus:not([readonly]) {
            border-color: rgb(73, 79, 82);
            box-shadow: rgb(74, 80, 83) 0px 0px 0px 1px inset;
        }
        .pink-skin .md-bg input[type="date"], .pink-skin .md-bg input[type="datetime-local"], .pink-skin .md-bg input[type="email"], .pink-skin .md-bg input[type="number"], .pink-skin .md-bg input[type="password"], .pink-skin .md-bg input[type="search-md"], .pink-skin .md-bg input[type="search"], .pink-skin .md-bg input[type="tel"], .pink-skin .md-bg input[type="text"], .pink-skin .md-bg input[type="time"], .pink-skin .md-bg input[type="url"],
        .pink-skin .md-bg textarea.md-textarea {
            background-image: linear-gradient(rgb(74, 80, 83),
            rgb(74, 80, 83)),
            linear-gradient(rgb(48, 52, 54),
            rgb(48, 52, 54));
        }
        .pink-skin input[type="email"]:focus:not([readonly]), .pink-skin input[type="text"]:focus:not([readonly]), .pink-skin input[type="password"]:focus:not([readonly]), .pink-skin input[type="number"]:focus:not([readonly]),
        .pink-skin textarea.md-textarea:focus:not([readonly]) {
            border-color: rgb(73, 79, 82);
            box-shadow: rgb(74, 80, 83) 0px 1px 0px 0px;
        }
        .pink-skin input[type="checkbox"]:checked + label::before {
            border-right-color: rgb(73, 79, 82);
            border-bottom-color: rgb(73, 79, 82);
        }
        .pink-skin input[type="checkbox"].filled-in:checked + label::before {
            border-right-color: rgb(48, 52, 54);
            border-bottom-color: rgb(48, 52, 54);
        }
        .pink-skin input[type="checkbox"].filled-in:checked + label::after {
            background-color: rgb(74, 80, 83);
            border-color: rgb(73, 79, 82);
        }
        .pink-skin .select-wrapper.colorful-select.md-form.md-outline span.caret.active {
            color: rgb(176, 169, 159) !important;
        }
        .pink-skin .select-wrapper.colorful-select.md-form.md-outline input.select-dropdown:focus {
            border-color: rgb(73, 79, 82);
            box-shadow: rgb(74, 80, 83) 0px 0px 0px 1px inset;
        }
        .pink-skin .select-wrapper.colorful-select.md-form.md-outline + label.active {
            color: rgb(176, 169, 159);
        }
        .pink-skin .select-wrapper.colorful-select.md-form .dropdown-content li a,
        .pink-skin .select-wrapper.colorful-select.md-form .dropdown-content li span:hover,
        .pink-skin .select-wrapper.colorful-select.md-form .dropdown-content li.active {
            background-color: rgb(74, 80, 83) !important;
        }
        .pink-skin .select-wrapper.colorful-select.md-form .dropdown-content li.disabled.active {
            background-color: transparent !important;
        }
        .pink-skin .top-nav-collapse {
            background-color: rgb(70, 75, 78);
        }
        .pink-skin .carousel-multi-item .carousel-indicators li,
        .pink-skin .carousel-multi-item .carousel-indicators li.active,
        .pink-skin .carousel-multi-item .controls-top > a {
            background-color: rgb(74, 80, 83);
        }
        .pink-skin .card-header,
        .pink-skin .form-header {
            background-color: rgb(71, 77, 80);
        }
        .pink-skin .spinner-primary-color,
        .pink-skin .spinner-primary-color-only {
            border-color: rgb(121, 49, 64);
        }
        .pink-skin .pagination-primary-color .page-item.active .page-link,
        .pink-skin .pagination-primary-color .page-item.active .page-link:focus,
        .pink-skin .pagination-primary-color .page-item.active .page-link:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(133, 54, 70);
        }
        .pink-skin .pagination-primary-color .page-link {
            color: rgb(194, 105, 123);
        }
        .pink-skin .pagination-primary-color .page-link:focus {
            box-shadow: none;
        }
        .indigo-skin .gradient {
            background-image: linear-gradient(135deg,
            rgb(31, 36, 88) 0px,
            rgb(0, 25, 118) 100%);
            background-color: initial;
        }
        .indigo-skin .primary-color,
        .indigo-skin ul.stepper li.active a .circle,
        .indigo-skin ul.stepper li.completed a .circle,
        ul.stepper li.active a .indigo-skin .circle,
        ul.stepper li.completed a .indigo-skin .circle {
            background-color: rgb(51, 53, 112) !important;
        }
        .indigo-skin .navbar {
            background-color: rgb(73, 77, 95);
            color: rgb(232, 230, 227);
        }
        .indigo-skin .navbar .navbar-nav .nav-item .dropdown-menu a {
            color: rgb(232, 230, 227);
        }
        .indigo-skin .navbar .navbar-nav .nav-item .dropdown-menu a:active,
        .indigo-skin .navbar .navbar-nav .nav-item .dropdown-menu a:focus,
        .indigo-skin .navbar .navbar-nav .nav-item .dropdown-menu a:hover {
            background-color: rgb(157, 2, 41);
        }
        .indigo-skin .navbar.double-nav a {
            color: rgb(232, 230, 227);
        }
        .indigo-skin .navbar form .md-form .form-control {
            color: rgb(232, 230, 227);
        }
        .indigo-skin .navbar form .md-form .form-control::-webkit-input-placeholder {
            color: rgb(232, 230, 227);
        }
        .indigo-skin .navbar form .md-form .form-control::placeholder {
            color: rgb(232, 230, 227);
        }
        .indigo-skin .page-footer {
            background-color: rgb(73, 77, 95);
        }
        .indigo-skin .side-nav {
            background-color: rgb(51, 63, 127);
        }
        .indigo-skin .side-nav .logo-wrapper > div {
            background-color: transparent !important;
        }
        .indigo-skin .side-nav .sn-avatar-wrapper img {
            border-color: rgb(169, 2, 44);
        }
        .indigo-skin .side-nav .social {
            border-bottom-color: rgba(77, 83, 86, 0.3);
        }
        .indigo-skin .side-nav .social a:hover .fab,
        .indigo-skin .side-nav .social a:hover .far,
        .indigo-skin .side-nav .social a:hover .fas {
            color: rgb(253, 98, 137) !important;
        }
        .indigo-skin .side-nav .collapsible li {
            background-color: transparent;
        }
        .indigo-skin .side-nav .collapsible li .collapsible-header {
            color: rgb(232, 230, 227);
        }
        .indigo-skin .side-nav .collapsible li .collapsible-header.active,
        .indigo-skin .side-nav .collapsible li .collapsible-header:hover {
            background-color: rgba(155, 4, 41, 0.8);
        }
        .indigo-skin .side-nav .collapsible li .collapsible-body a {
            color: rgb(232, 230, 227);
        }
        .indigo-skin .side-nav .collapsible li .collapsible-body a.active,
        .indigo-skin .side-nav .collapsible li .collapsible-body a:active,
        .indigo-skin .side-nav .collapsible li .collapsible-body a:hover {
            color: rgb(255, 121, 161);
        }
        .indigo-skin .side-nav .fab,
        .indigo-skin .side-nav .far,
        .indigo-skin .side-nav .fas {
            color: rgb(232, 230, 227);
        }
        .indigo-skin .side-nav .sidenav-bg.mask-strong::after,
        .indigo-skin .side-nav .sidenav-bg::after {
            background-image: initial;
            background-color: rgba(28, 52, 107, 0.8);
        }
        .indigo-skin .side-nav .sidenav-bg.mask-light::after {
            background-image: initial;
            background-color: rgba(28, 52, 107, 0.65);
        }
        .indigo-skin .side-nav .sidenav-bg.mask-slight::after {
            background-image: initial;
            background-color: rgba(28, 52, 107, 0.5);
        }
        .indigo-skin .btn-primary {
            color: rgb(232, 230, 227);
            background-color: rgb(142, 2, 37) !important;
        }
        .indigo-skin .btn-primary:hover {
            background-color: rgb(127, 2, 34);
            color: rgb(232, 230, 227);
        }
        .indigo-skin .btn-primary.focus,
        .indigo-skin .btn-primary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .indigo-skin .btn-primary.active,
        .indigo-skin .btn-primary:active,
        .indigo-skin .btn-primary:focus {
            background-color: rgb(200, 2, 52);
        }
        .indigo-skin .btn-primary.dropdown-toggle {
            background-color: rgb(142, 2, 37) !important;
        }
        .indigo-skin .btn-primary.dropdown-toggle:focus,
        .indigo-skin .btn-primary.dropdown-toggle:hover {
            background-color: rgb(127, 2, 34) !important;
        }
        .indigo-skin .btn-primary:not([disabled]):not(.disabled).active,
        .indigo-skin .btn-primary:not([disabled]):not(.disabled):active,
        .show > .indigo-skin .btn-primary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(200, 2, 52) !important;
        }
        .indigo-skin .btn-primary:not([disabled]):not(.disabled).active:focus,
        .indigo-skin .btn-primary:not([disabled]):not(.disabled):active:focus,
        .show > .indigo-skin .btn-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .indigo-skin .primary-ic {
            color: rgb(253, 98, 137) !important;
        }
        .indigo-skin .primary-ic:focus,
        .indigo-skin .primary-ic:hover {
            color: rgb(253, 98, 137);
        }
        .indigo-skin table.table a.btn.btn-primary {
            color: rgb(232, 230, 227);
        }
        .indigo-skin .btn-secondary {
            color: rgb(232, 230, 227);
            background-color: rgb(48, 78, 139) !important;
        }
        .indigo-skin .btn-secondary:hover {
            background-color: rgb(51, 83, 150);
            color: rgb(232, 230, 227);
        }
        .indigo-skin .btn-secondary.focus,
        .indigo-skin .btn-secondary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .indigo-skin .btn-secondary.active,
        .indigo-skin .btn-secondary:active,
        .indigo-skin .btn-secondary:focus {
            background-color: rgb(27, 44, 78);
        }
        .indigo-skin .btn-secondary.dropdown-toggle {
            background-color: rgb(48, 78, 139) !important;
        }
        .indigo-skin .btn-secondary.dropdown-toggle:focus,
        .indigo-skin .btn-secondary.dropdown-toggle:hover {
            background-color: rgb(51, 83, 150) !important;
        }
        .indigo-skin .btn-secondary:not([disabled]):not(.disabled).active,
        .indigo-skin .btn-secondary:not([disabled]):not(.disabled):active,
        .show > .indigo-skin .btn-secondary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(27, 44, 78) !important;
        }
        .indigo-skin .btn-secondary:not([disabled]):not(.disabled).active:focus,
        .indigo-skin .btn-secondary:not([disabled]):not(.disabled):active:focus,
        .show > .indigo-skin .btn-secondary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .indigo-skin .secondary-ic {
            color: rgb(113, 158, 206) !important;
        }
        .indigo-skin .secondary-ic:focus,
        .indigo-skin .secondary-ic:hover {
            color: rgb(113, 158, 206);
        }
        .indigo-skin table.table a.btn.btn-secondary {
            color: rgb(232, 230, 227);
        }
        .indigo-skin .btn-default {
            color: rgb(232, 230, 227);
            background-color: rgb(73, 77, 95) !important;
        }
        .indigo-skin .btn-default:hover {
            background-color: rgb(66, 71, 87);
            color: rgb(232, 230, 227);
        }
        .indigo-skin .btn-default.focus,
        .indigo-skin .btn-default:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .indigo-skin .btn-default.active,
        .indigo-skin .btn-default:active,
        .indigo-skin .btn-default:focus {
            background-color: rgb(74, 78, 96);
        }
        .indigo-skin .btn-default.dropdown-toggle {
            background-color: rgb(73, 77, 95) !important;
        }
        .indigo-skin .btn-default.dropdown-toggle:focus,
        .indigo-skin .btn-default.dropdown-toggle:hover {
            background-color: rgb(66, 71, 87) !important;
        }
        .indigo-skin .btn-default:not([disabled]):not(.disabled).active,
        .indigo-skin .btn-default:not([disabled]):not(.disabled):active,
        .show > .indigo-skin .btn-default.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(74, 78, 96) !important;
        }
        .indigo-skin .btn-default:not([disabled]):not(.disabled).active:focus,
        .indigo-skin .btn-default:not([disabled]):not(.disabled):active:focus,
        .show > .indigo-skin .btn-default.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .indigo-skin .default-ic {
            color: rgb(170, 163, 152) !important;
        }
        .indigo-skin .default-ic:focus,
        .indigo-skin .default-ic:hover {
            color: rgb(170, 163, 152);
        }
        .indigo-skin a.btn:not([href]):not([tabindex]),
        .indigo-skin a.btn:not([href]):not([tabindex]):focus,
        .indigo-skin a.btn:not([href]):not([tabindex]):hover,
        .indigo-skin table.table a.btn.btn-default {
            color: rgb(232, 230, 227);
        }
        .indigo-skin .btn-outline-primary {
            border-color: rgb(147, 2, 38) !important;
            background-color: transparent !important;
            color: rgb(253, 98, 137) !important;
        }
        .indigo-skin .btn-outline-primary.active,
        .indigo-skin .btn-outline-primary:active,
        .indigo-skin .btn-outline-primary:active:focus,
        .indigo-skin .btn-outline-primary:focus,
        .indigo-skin .btn-outline-primary:hover {
            border-color: rgb(147, 2, 38) !important;
            background-color: transparent !important;
            color: rgb(253, 98, 137) !important;
        }
        .indigo-skin .btn-outline-primary:not([disabled]):not(.disabled).active,
        .indigo-skin .btn-outline-primary:not([disabled]):not(.disabled):active,
        .show > .indigo-skin .btn-outline-primary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(147, 2, 38) !important;
        }
        .indigo-skin .btn-outline-primary:not([disabled]):not(.disabled).active:focus,
        .indigo-skin .btn-outline-primary:not([disabled]):not(.disabled):active:focus,
        .show > .indigo-skin .btn-outline-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .indigo-skin .btn-outline-secondary {
            border-color: rgb(47, 77, 137) !important;
            background-color: transparent !important;
            color: rgb(113, 158, 206) !important;
        }
        .indigo-skin .btn-outline-secondary.active,
        .indigo-skin .btn-outline-secondary:active,
        .indigo-skin .btn-outline-secondary:active:focus,
        .indigo-skin .btn-outline-secondary:focus,
        .indigo-skin .btn-outline-secondary:hover {
            border-color: rgb(47, 77, 137) !important;
            background-color: transparent !important;
            color: rgb(113, 158, 206) !important;
        }
        .indigo-skin .btn-outline-secondary:not([disabled]):not(.disabled).active,
        .indigo-skin .btn-outline-secondary:not([disabled]):not(.disabled):active,
        .show > .indigo-skin .btn-outline-secondary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(47, 77, 137) !important;
        }
        .indigo-skin .btn-outline-secondary:not([disabled]):not(.disabled).active:focus,
        .indigo-skin .btn-outline-secondary:not([disabled]):not(.disabled):active:focus,
        .show > .indigo-skin .btn-outline-secondary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .indigo-skin .btn-outline-default {
            border-color: rgb(76, 82, 85) !important;
            background-color: transparent !important;
            color: rgb(170, 163, 152) !important;
        }
        .indigo-skin .btn-outline-default.active,
        .indigo-skin .btn-outline-default:active,
        .indigo-skin .btn-outline-default:active:focus,
        .indigo-skin .btn-outline-default:focus,
        .indigo-skin .btn-outline-default:hover {
            border-color: rgb(76, 82, 85) !important;
            background-color: transparent !important;
            color: rgb(170, 163, 152) !important;
        }
        .indigo-skin .md-form .prefix.active, .indigo-skin .md-outline input[type="date"]:focus:not([readonly]) + label, .indigo-skin .md-outline input[type="datetime-local"]:focus:not([readonly]) + label, .indigo-skin .md-outline input[type="email"]:focus:not([readonly]) + label, .indigo-skin .md-outline input[type="number"]:focus:not([readonly]) + label, .indigo-skin .md-outline input[type="password"]:focus:not([readonly]) + label, .indigo-skin .md-outline input[type="search-md"]:focus:not([readonly]) + label, .indigo-skin .md-outline input[type="search"]:focus:not([readonly]) + label, .indigo-skin .md-outline input[type="tel"]:focus:not([readonly]) + label, .indigo-skin .md-outline input[type="text"]:focus:not([readonly]) + label, .indigo-skin .md-outline input[type="time"]:focus:not([readonly]) + label, .indigo-skin .md-outline input[type="url"]:focus:not([readonly]) + label,
        .indigo-skin .md-outline textarea:focus:not([readonly]) + label, .indigo-skin input[type="email"]:focus:not([readonly]) + label, .indigo-skin input[type="text"]:focus:not([readonly]) + label, .indigo-skin input[type="password"]:focus:not([readonly]) + label, .indigo-skin input[type="number"]:focus:not([readonly]) + label,
        .indigo-skin textarea.md-textarea:focus:not([readonly]) + label {
            color: rgb(253, 98, 137);
        }
        .indigo-skin .btn-outline-default:not([disabled]):not(.disabled).active,
        .indigo-skin .btn-outline-default:not([disabled]):not(.disabled):active,
        .show > .indigo-skin .btn-outline-default.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(76, 82, 85) !important;
        }
        .indigo-skin .btn-outline-default:not([disabled]):not(.disabled).active:focus,
        .indigo-skin .btn-outline-default:not([disabled]):not(.disabled):active:focus,
        .show > .indigo-skin .btn-outline-default.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .indigo-skin .card .btn-action {
            background-image: initial;
            background-color: rgb(73, 77, 95);
        }
        .indigo-skin .card .btn-action:focus,
        .indigo-skin .card .btn-action:hover {
            background-color: rgb(66, 71, 87) !important;
        }
        .indigo-skin .card .btn-action.active {
            background-color: rgb(74, 78, 96) !important;
        }
        .indigo-skin .md-outline input[type="date"]:focus:not([readonly]), .indigo-skin .md-outline input[type="datetime-local"]:focus:not([readonly]), .indigo-skin .md-outline input[type="email"]:focus:not([readonly]), .indigo-skin .md-outline input[type="number"]:focus:not([readonly]), .indigo-skin .md-outline input[type="password"]:focus:not([readonly]), .indigo-skin .md-outline input[type="search-md"]:focus:not([readonly]), .indigo-skin .md-outline input[type="search"]:focus:not([readonly]), .indigo-skin .md-outline input[type="tel"]:focus:not([readonly]), .indigo-skin .md-outline input[type="text"]:focus:not([readonly]), .indigo-skin .md-outline input[type="time"]:focus:not([readonly]), .indigo-skin .md-outline input[type="url"]:focus:not([readonly]),
        .indigo-skin .md-outline textarea:focus:not([readonly]) {
            border-color: rgb(147, 2, 38);
            box-shadow: rgb(142, 2, 37) 0px 0px 0px 1px inset;
        }
        .indigo-skin .md-bg input[type="date"], .indigo-skin .md-bg input[type="datetime-local"], .indigo-skin .md-bg input[type="email"], .indigo-skin .md-bg input[type="number"], .indigo-skin .md-bg input[type="password"], .indigo-skin .md-bg input[type="search-md"], .indigo-skin .md-bg input[type="search"], .indigo-skin .md-bg input[type="tel"], .indigo-skin .md-bg input[type="text"], .indigo-skin .md-bg input[type="time"], .indigo-skin .md-bg input[type="url"],
        .indigo-skin .md-bg textarea.md-textarea {
            background-image: linear-gradient(rgb(142, 2, 37),
            rgb(142, 2, 37)),
            linear-gradient(rgb(48, 52, 54),
            rgb(48, 52, 54));
        }
        .indigo-skin input[type="email"]:focus:not([readonly]), .indigo-skin input[type="text"]:focus:not([readonly]), .indigo-skin input[type="password"]:focus:not([readonly]), .indigo-skin input[type="number"]:focus:not([readonly]),
        .indigo-skin textarea.md-textarea:focus:not([readonly]) {
            border-color: rgb(147, 2, 38);
            box-shadow: rgb(142, 2, 37) 0px 1px 0px 0px;
        }
        .indigo-skin input[type="checkbox"]:checked + label::before {
            border-right-color: rgb(147, 2, 38);
            border-bottom-color: rgb(147, 2, 38);
        }
        .indigo-skin input[type="checkbox"].filled-in:checked + label::before {
            border-right-color: rgb(48, 52, 54);
            border-bottom-color: rgb(48, 52, 54);
        }
        .indigo-skin input[type="checkbox"].filled-in:checked + label::after {
            background-color: rgb(142, 2, 37);
            border-color: rgb(147, 2, 38);
        }
        .indigo-skin .select-wrapper.colorful-select.md-form.md-outline span.caret.active {
            color: rgb(253, 98, 137) !important;
        }
        .indigo-skin .select-wrapper.colorful-select.md-form.md-outline input.select-dropdown:focus {
            border-color: rgb(147, 2, 38);
            box-shadow: rgb(142, 2, 37) 0px 0px 0px 1px inset;
        }
        .indigo-skin .select-wrapper.colorful-select.md-form.md-outline + label.active {
            color: rgb(253, 98, 137);
        }
        .indigo-skin .select-wrapper.colorful-select.md-form .dropdown-content li a,
        .indigo-skin .select-wrapper.colorful-select.md-form .dropdown-content li span:hover,
        .indigo-skin .select-wrapper.colorful-select.md-form .dropdown-content li.active {
            background-color: rgb(142, 2, 37) !important;
        }
        .indigo-skin .select-wrapper.colorful-select.md-form .dropdown-content li.disabled.active {
            background-color: transparent !important;
        }
        .indigo-skin .top-nav-collapse {
            background-color: rgb(73, 77, 95);
        }
        .indigo-skin .carousel-multi-item .carousel-indicators li,
        .indigo-skin .carousel-multi-item .carousel-indicators li.active,
        .indigo-skin .carousel-multi-item .controls-top > a {
            background-color: rgb(142, 2, 37);
        }
        .indigo-skin .card-header,
        .indigo-skin .form-header {
            background-color: rgb(136, 2, 36);
        }
        .indigo-skin .spinner-primary-color,
        .indigo-skin .spinner-primary-color-only {
            border-color: rgb(49, 52, 109);
        }
        .indigo-skin .pagination-primary-color .page-item.active .page-link,
        .indigo-skin .pagination-primary-color .page-item.active .page-link:focus,
        .indigo-skin .pagination-primary-color .page-item.active .page-link:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(51, 53, 112);
        }
        .indigo-skin .pagination-primary-color .page-link {
            color: rgb(130, 156, 198);
        }
        .indigo-skin .pagination-primary-color .page-link:focus {
            box-shadow: none;
        }
        .light-blue-skin .gradient {
            background-image: linear-gradient(135deg,
            rgb(10, 72, 138) 0px,
            rgb(10, 72, 138) 100%);
            background-color: initial;
        }
        .light-blue-skin .primary-color,
        .light-blue-skin ul.stepper li.active a .circle,
        .light-blue-skin ul.stepper li.completed a .circle,
        ul.stepper li.active a .light-blue-skin .circle,
        ul.stepper li.completed a .light-blue-skin .circle {
            background-color: rgb(49, 97, 125) !important;
        }
        .light-blue-skin .navbar {
            background-color: rgb(50, 74, 102);
            color: rgb(232, 230, 227);
        }
        .light-blue-skin .navbar .navbar-nav .nav-item .dropdown-menu a {
            color: rgb(232, 230, 227);
        }
        .light-blue-skin .navbar .navbar-nav .nav-item .dropdown-menu a:active,
        .light-blue-skin .navbar .navbar-nav .nav-item .dropdown-menu a:focus,
        .light-blue-skin .navbar .navbar-nav .nav-item .dropdown-menu a:hover {
            background-color: rgb(60, 76, 84);
        }
        .light-blue-skin .navbar.double-nav a {
            color: rgb(232, 230, 227);
        }
        .light-blue-skin .navbar form .md-form .form-control {
            color: rgb(232, 230, 227);
        }
        .light-blue-skin .navbar form .md-form .form-control::-webkit-input-placeholder {
            color: rgb(232, 230, 227);
        }
        .light-blue-skin .navbar form .md-form .form-control::placeholder {
            color: rgb(232, 230, 227);
        }
        .light-blue-skin .page-footer {
            background-color: rgb(50, 74, 102);
        }
        .light-blue-skin .side-nav {
            background-color: rgb(38, 83, 129);
        }
        .light-blue-skin .side-nav .logo-wrapper > div {
            background-color: transparent !important;
        }
        .light-blue-skin .side-nav .sn-avatar-wrapper img {
            border-color: rgb(77, 83, 87);
        }
        .light-blue-skin .side-nav .social {
            border-bottom-color: rgba(77, 83, 86, 0.3);
        }
        .light-blue-skin .side-nav .social a:hover .fab,
        .light-blue-skin .side-nav .social a:hover .far,
        .light-blue-skin .side-nav .social a:hover .fas {
            color: rgb(191, 186, 177) !important;
        }
        .light-blue-skin .side-nav .collapsible li {
            background-color: transparent;
        }
        .light-blue-skin .side-nav .collapsible li .collapsible-header {
            color: rgb(232, 230, 227);
        }
        .light-blue-skin .side-nav .collapsible li .collapsible-header.active,
        .light-blue-skin .side-nav .collapsible li .collapsible-header:hover {
            background-color: rgba(23, 43, 69, 0.6);
        }
        .light-blue-skin .side-nav .collapsible li .collapsible-body a {
            color: rgb(232, 230, 227);
        }
        .light-blue-skin .side-nav .collapsible li .collapsible-body a.active,
        .light-blue-skin .side-nav .collapsible li .collapsible-body a:active,
        .light-blue-skin .side-nav .collapsible li .collapsible-body a:hover {
            color: rgb(144, 212, 255);
        }
        .light-blue-skin .side-nav .fab,
        .light-blue-skin .side-nav .far,
        .light-blue-skin .side-nav .fas {
            color: rgb(232, 230, 227);
        }
        .light-blue-skin .side-nav .sidenav-bg.mask-strong::after,
        .light-blue-skin .side-nav .sidenav-bg::after {
            background-image: initial;
            background-color: rgba(61, 99, 136, 0.8);
        }
        .light-blue-skin .side-nav .sidenav-bg.mask-light::after {
            background-image: initial;
            background-color: rgba(61, 99, 136, 0.65);
        }
        .light-blue-skin .side-nav .sidenav-bg.mask-slight::after {
            background-image: initial;
            background-color: rgba(61, 99, 136, 0.5);
        }
        .light-blue-skin .btn-primary {
            color: rgb(232, 230, 227);
            background-color: rgb(160, 0, 26) !important;
        }
        .light-blue-skin .btn-primary:hover {
            background-color: rgb(144, 0, 22);
            color: rgb(232, 230, 227);
        }
        .light-blue-skin .btn-primary.focus,
        .light-blue-skin .btn-primary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .light-blue-skin .btn-primary.active,
        .light-blue-skin .btn-primary:active,
        .light-blue-skin .btn-primary:focus {
            background-color: rgb(182, 0, 29);
        }
        .light-blue-skin .btn-primary.dropdown-toggle {
            background-color: rgb(160, 0, 26) !important;
        }
        .light-blue-skin .btn-primary.dropdown-toggle:focus,
        .light-blue-skin .btn-primary.dropdown-toggle:hover {
            background-color: rgb(144, 0, 22) !important;
        }
        .light-blue-skin .btn-primary:not([disabled]):not(.disabled).active,
        .light-blue-skin .btn-primary:not([disabled]):not(.disabled):active,
        .show > .light-blue-skin .btn-primary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(182, 0, 29) !important;
        }
        .light-blue-skin .btn-primary:not([disabled]):not(.disabled).active:focus,
        .light-blue-skin .btn-primary:not([disabled]):not(.disabled):active:focus,
        .show > .light-blue-skin .btn-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .light-blue-skin .primary-ic {
            color: rgb(255, 77, 106) !important;
        }
        .light-blue-skin .primary-ic:focus,
        .light-blue-skin .primary-ic:hover {
            color: rgb(255, 77, 106);
        }
        .light-blue-skin table.table a.btn.btn-primary {
            color: rgb(232, 230, 227);
        }
        .light-blue-skin .btn-secondary {
            color: rgb(232, 230, 227);
            background-color: rgb(14, 99, 140) !important;
        }
        .light-blue-skin .btn-secondary:hover {
            background-color: rgb(12, 89, 126);
            color: rgb(232, 230, 227);
        }
        .light-blue-skin .btn-secondary.focus,
        .light-blue-skin .btn-secondary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .light-blue-skin .btn-secondary.active,
        .light-blue-skin .btn-secondary:active,
        .light-blue-skin .btn-secondary:focus {
            background-color: rgb(17, 123, 174);
        }
        .light-blue-skin .btn-secondary.dropdown-toggle {
            background-color: rgb(14, 99, 140) !important;
        }
        .light-blue-skin .btn-secondary.dropdown-toggle:focus,
        .light-blue-skin .btn-secondary.dropdown-toggle:hover {
            background-color: rgb(12, 89, 126) !important;
        }
        .light-blue-skin .btn-secondary:not([disabled]):not(.disabled).active,
        .light-blue-skin .btn-secondary:not([disabled]):not(.disabled):active,
        .show > .light-blue-skin .btn-secondary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(17, 123, 174) !important;
        }
        .light-blue-skin .btn-secondary:not([disabled]):not(.disabled).active:focus,
        .light-blue-skin .btn-secondary:not([disabled]):not(.disabled):active:focus,
        .show > .light-blue-skin .btn-secondary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .light-blue-skin .secondary-ic {
            color: rgb(100, 195, 240) !important;
        }
        .light-blue-skin .secondary-ic:focus,
        .light-blue-skin .secondary-ic:hover {
            color: rgb(100, 195, 240);
        }
        .light-blue-skin table.table a.btn.btn-secondary {
            color: rgb(232, 230, 227);
        }
        .light-blue-skin .btn-default {
            color: rgb(232, 230, 227);
            background-color: rgb(36, 58, 85) !important;
        }
        .light-blue-skin .btn-default:hover {
            background-color: rgb(42, 67, 99);
            color: rgb(232, 230, 227);
        }
        .light-blue-skin .btn-default.focus,
        .light-blue-skin .btn-default:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .light-blue-skin .btn-default.active,
        .light-blue-skin .btn-default:active,
        .light-blue-skin .btn-default:focus {
            background-color: rgb(12, 18, 27);
        }
        .light-blue-skin .btn-default.dropdown-toggle {
            background-color: rgb(36, 58, 85) !important;
        }
        .light-blue-skin .btn-default.dropdown-toggle:focus,
        .light-blue-skin .btn-default.dropdown-toggle:hover {
            background-color: rgb(42, 67, 99) !important;
        }
        .light-blue-skin .btn-default:not([disabled]):not(.disabled).active,
        .light-blue-skin .btn-default:not([disabled]):not(.disabled):active,
        .show > .light-blue-skin .btn-default.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(12, 18, 27) !important;
        }
        .light-blue-skin .btn-default:not([disabled]):not(.disabled).active:focus,
        .light-blue-skin .btn-default:not([disabled]):not(.disabled):active:focus,
        .show > .light-blue-skin .btn-default.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .light-blue-skin .default-ic {
            color: rgb(156, 186, 213) !important;
        }
        .light-blue-skin .default-ic:focus,
        .light-blue-skin .default-ic:hover {
            color: rgb(156, 186, 213);
        }
        .light-blue-skin a.btn:not([href]):not([tabindex]),
        .light-blue-skin a.btn:not([href]):not([tabindex]):focus,
        .light-blue-skin a.btn:not([href]):not([tabindex]):hover,
        .light-blue-skin table.table a.btn.btn-default {
            color: rgb(232, 230, 227);
        }
        .light-blue-skin .btn-outline-primary {
            border-color: rgb(156, 0, 25) !important;
            background-color: transparent !important;
            color: rgb(255, 77, 106) !important;
        }
        .light-blue-skin .btn-outline-primary.active,
        .light-blue-skin .btn-outline-primary:active,
        .light-blue-skin .btn-outline-primary:active:focus,
        .light-blue-skin .btn-outline-primary:focus,
        .light-blue-skin .btn-outline-primary:hover {
            border-color: rgb(156, 0, 25) !important;
            background-color: transparent !important;
            color: rgb(255, 77, 106) !important;
        }
        .light-blue-skin .btn-outline-primary:not([disabled]):not(.disabled).active,
        .light-blue-skin .btn-outline-primary:not([disabled]):not(.disabled):active,
        .show > .light-blue-skin .btn-outline-primary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(156, 0, 25) !important;
        }
        .light-blue-skin .btn-outline-primary:not([disabled]):not(.disabled).active:focus,
        .light-blue-skin .btn-outline-primary:not([disabled]):not(.disabled):active:focus,
        .show > .light-blue-skin .btn-outline-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .light-blue-skin .btn-outline-secondary {
            border-color: rgb(14, 99, 140) !important;
            background-color: transparent !important;
            color: rgb(100, 195, 240) !important;
        }
        .light-blue-skin .btn-outline-secondary.active,
        .light-blue-skin .btn-outline-secondary:active,
        .light-blue-skin .btn-outline-secondary:active:focus,
        .light-blue-skin .btn-outline-secondary:focus,
        .light-blue-skin .btn-outline-secondary:hover {
            border-color: rgb(14, 99, 140) !important;
            background-color: transparent !important;
            color: rgb(100, 195, 240) !important;
        }
        .light-blue-skin .btn-outline-secondary:not([disabled]):not(.disabled).active,
        .light-blue-skin .btn-outline-secondary:not([disabled]):not(.disabled):active,
        .show > .light-blue-skin .btn-outline-secondary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(14, 99, 140) !important;
        }
        .light-blue-skin .btn-outline-secondary:not([disabled]):not(.disabled).active:focus,
        .light-blue-skin .btn-outline-secondary:not([disabled]):not(.disabled):active:focus,
        .show > .light-blue-skin .btn-outline-secondary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .light-blue-skin .btn-outline-default {
            border-color: rgb(62, 100, 147) !important;
            background-color: transparent !important;
            color: rgb(156, 186, 213) !important;
        }
        .light-blue-skin .btn-outline-default.active,
        .light-blue-skin .btn-outline-default:active,
        .light-blue-skin .btn-outline-default:active:focus,
        .light-blue-skin .btn-outline-default:focus,
        .light-blue-skin .btn-outline-default:hover {
            border-color: rgb(62, 100, 147) !important;
            background-color: transparent !important;
            color: rgb(156, 186, 213) !important;
        }
        .light-blue-skin .md-form .prefix.active, .light-blue-skin .md-outline input[type="date"]:focus:not([readonly]) + label, .light-blue-skin .md-outline input[type="datetime-local"]:focus:not([readonly]) + label, .light-blue-skin .md-outline input[type="email"]:focus:not([readonly]) + label, .light-blue-skin .md-outline input[type="number"]:focus:not([readonly]) + label, .light-blue-skin .md-outline input[type="password"]:focus:not([readonly]) + label, .light-blue-skin .md-outline input[type="search-md"]:focus:not([readonly]) + label, .light-blue-skin .md-outline input[type="search"]:focus:not([readonly]) + label, .light-blue-skin .md-outline input[type="tel"]:focus:not([readonly]) + label, .light-blue-skin .md-outline input[type="text"]:focus:not([readonly]) + label, .light-blue-skin .md-outline input[type="time"]:focus:not([readonly]) + label, .light-blue-skin .md-outline input[type="url"]:focus:not([readonly]) + label,
        .light-blue-skin .md-outline textarea:focus:not([readonly]) + label, .light-blue-skin input[type="email"]:focus:not([readonly]) + label, .light-blue-skin input[type="text"]:focus:not([readonly]) + label, .light-blue-skin input[type="password"]:focus:not([readonly]) + label, .light-blue-skin input[type="number"]:focus:not([readonly]) + label,
        .light-blue-skin textarea.md-textarea:focus:not([readonly]) + label {
            color: rgb(191, 186, 177);
        }
        .light-blue-skin .btn-outline-default:not([disabled]):not(.disabled).active,
        .light-blue-skin .btn-outline-default:not([disabled]):not(.disabled):active,
        .show > .light-blue-skin .btn-outline-default.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(62, 100, 147) !important;
        }
        .light-blue-skin .btn-outline-default:not([disabled]):not(.disabled).active:focus,
        .light-blue-skin .btn-outline-default:not([disabled]):not(.disabled):active:focus,
        .show > .light-blue-skin .btn-outline-default.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .light-blue-skin .card .btn-action {
            background-image: initial;
            background-color: rgb(36, 58, 85);
        }
        .light-blue-skin .card .btn-action:focus,
        .light-blue-skin .card .btn-action:hover {
            background-color: rgb(42, 67, 99) !important;
        }
        .light-blue-skin .card .btn-action.active {
            background-color: rgb(12, 18, 27) !important;
        }
        .light-blue-skin .md-outline input[type="date"]:focus:not([readonly]), .light-blue-skin .md-outline input[type="datetime-local"]:focus:not([readonly]), .light-blue-skin .md-outline input[type="email"]:focus:not([readonly]), .light-blue-skin .md-outline input[type="number"]:focus:not([readonly]), .light-blue-skin .md-outline input[type="password"]:focus:not([readonly]), .light-blue-skin .md-outline input[type="search-md"]:focus:not([readonly]), .light-blue-skin .md-outline input[type="search"]:focus:not([readonly]), .light-blue-skin .md-outline input[type="tel"]:focus:not([readonly]), .light-blue-skin .md-outline input[type="text"]:focus:not([readonly]), .light-blue-skin .md-outline input[type="time"]:focus:not([readonly]), .light-blue-skin .md-outline input[type="url"]:focus:not([readonly]),
        .light-blue-skin .md-outline textarea:focus:not([readonly]) {
            border-color: rgb(66, 72, 74);
            box-shadow: rgb(54, 68, 75) 0px 0px 0px 1px inset;
        }
        .light-blue-skin .md-bg input[type="date"], .light-blue-skin .md-bg input[type="datetime-local"], .light-blue-skin .md-bg input[type="email"], .light-blue-skin .md-bg input[type="number"], .light-blue-skin .md-bg input[type="password"], .light-blue-skin .md-bg input[type="search-md"], .light-blue-skin .md-bg input[type="search"], .light-blue-skin .md-bg input[type="tel"], .light-blue-skin .md-bg input[type="text"], .light-blue-skin .md-bg input[type="time"], .light-blue-skin .md-bg input[type="url"],
        .light-blue-skin .md-bg textarea.md-textarea {
            background-image: linear-gradient(rgb(54, 68, 75),
            rgb(54, 68, 75)),
            linear-gradient(rgb(48, 52, 54),
            rgb(48, 52, 54));
        }
        .light-blue-skin input[type="email"]:focus:not([readonly]), .light-blue-skin input[type="text"]:focus:not([readonly]), .light-blue-skin input[type="password"]:focus:not([readonly]), .light-blue-skin input[type="number"]:focus:not([readonly]),
        .light-blue-skin textarea.md-textarea:focus:not([readonly]) {
            border-color: rgb(66, 72, 74);
            box-shadow: rgb(54, 68, 75) 0px 1px 0px 0px;
        }
        .light-blue-skin input[type="checkbox"]:checked + label::before {
            border-right-color: rgb(66, 72, 74);
            border-bottom-color: rgb(66, 72, 74);
        }
        .light-blue-skin input[type="checkbox"].filled-in:checked + label::before {
            border-right-color: rgb(48, 52, 54);
            border-bottom-color: rgb(48, 52, 54);
        }
        .light-blue-skin input[type="checkbox"].filled-in:checked + label::after {
            background-color: rgb(54, 68, 75);
            border-color: rgb(66, 72, 74);
        }
        .light-blue-skin .select-wrapper.colorful-select.md-form.md-outline span.caret.active {
            color: rgb(191, 186, 177) !important;
        }
        .light-blue-skin .select-wrapper.colorful-select.md-form.md-outline input.select-dropdown:focus {
            border-color: rgb(66, 72, 74);
            box-shadow: rgb(54, 68, 75) 0px 0px 0px 1px inset;
        }
        .light-blue-skin .select-wrapper.colorful-select.md-form.md-outline + label.active {
            color: rgb(191, 186, 177);
        }
        .light-blue-skin .select-wrapper.colorful-select.md-form .dropdown-content li a,
        .light-blue-skin .select-wrapper.colorful-select.md-form .dropdown-content li span:hover,
        .light-blue-skin .select-wrapper.colorful-select.md-form .dropdown-content li.active {
            background-color: rgb(54, 68, 75) !important;
        }
        .light-blue-skin .select-wrapper.colorful-select.md-form .dropdown-content li.disabled.active {
            background-color: transparent !important;
        }
        .light-blue-skin .top-nav-collapse {
            background-color: rgb(50, 74, 102);
        }
        .light-blue-skin .carousel-multi-item .carousel-indicators li,
        .light-blue-skin .carousel-multi-item .carousel-indicators li.active,
        .light-blue-skin .carousel-multi-item .controls-top > a {
            background-color: rgb(54, 68, 75);
        }
        .light-blue-skin .card-header,
        .light-blue-skin .form-header {
            background-color: rgb(51, 65, 71);
        }
        .light-blue-skin .spinner-primary-color,
        .light-blue-skin .spinner-primary-color-only {
            border-color: rgb(53, 106, 137);
        }
        .light-blue-skin .pagination-primary-color .page-item.active .page-link,
        .light-blue-skin .pagination-primary-color .page-item.active .page-link:focus,
        .light-blue-skin .pagination-primary-color .page-item.active .page-link:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(49, 97, 125);
        }
        .light-blue-skin .pagination-primary-color .page-link {
            color: rgb(109, 165, 198);
        }
        .light-blue-skin .pagination-primary-color .page-link:focus {
            box-shadow: none;
        }
        .grey-skin .gradient {
            background-image: linear-gradient(135deg,
            rgb(42, 46, 47) 0px,
            rgb(75, 81, 84) 100%);
            background-color: initial;
        }
        .grey-skin .primary-color,
        .grey-skin ul.stepper li.active a .circle,
        .grey-skin ul.stepper li.completed a .circle,
        ul.stepper li.active a .grey-skin .circle,
        ul.stepper li.completed a .grey-skin .circle {
            background-color: rgb(32, 35, 36) !important;
        }
        .grey-skin .navbar {
            background-color: rgb(54, 58, 61);
            color: rgb(232, 230, 227);
        }
        .grey-skin .navbar .navbar-nav .nav-item .dropdown-menu a {
            color: rgb(232, 230, 227);
        }
        .grey-skin .navbar .navbar-nav .nav-item .dropdown-menu a:active,
        .grey-skin .navbar .navbar-nav .nav-item .dropdown-menu a:focus,
        .grey-skin .navbar .navbar-nav .nav-item .dropdown-menu a:hover {
            background-color: rgb(15, 94, 143);
        }
        .grey-skin .navbar.double-nav a {
            color: rgb(232, 230, 227);
        }
        .grey-skin .navbar form .md-form .form-control {
            color: rgb(232, 230, 227);
        }
        .grey-skin .navbar form .md-form .form-control::-webkit-input-placeholder {
            color: rgb(232, 230, 227);
        }
        .grey-skin .navbar form .md-form .form-control::placeholder {
            color: rgb(232, 230, 227);
        }
        .grey-skin .page-footer {
            background-color: rgb(54, 58, 61);
        }
        .grey-skin .side-nav {
            background-color: rgb(75, 81, 84);
        }
        .grey-skin .side-nav .logo-wrapper > div {
            background-color: transparent !important;
        }
        .grey-skin .side-nav .sn-avatar-wrapper img {
            border-color: rgb(16, 101, 154);
        }
        .grey-skin .side-nav .social {
            border-bottom-color: rgba(77, 83, 86, 0.3);
        }
        .grey-skin .side-nav .social a:hover .fab,
        .grey-skin .side-nav .social a:hover .far,
        .grey-skin .side-nav .social a:hover .fas {
            color: rgb(112, 191, 240) !important;
        }
        .grey-skin .side-nav .collapsible li {
            background-color: transparent;
        }
        .grey-skin .side-nav .collapsible li .collapsible-header {
            color: rgb(232, 230, 227);
        }
        .grey-skin .side-nav .collapsible li .collapsible-header.active,
        .grey-skin .side-nav .collapsible li .collapsible-header:hover {
            background-color: rgba(0, 0, 0, 0.4);
        }
        .grey-skin .side-nav .collapsible li .collapsible-body a {
            color: rgb(232, 230, 227);
        }
        .grey-skin .side-nav .collapsible li .collapsible-body a.active,
        .grey-skin .side-nav .collapsible li .collapsible-body a:active,
        .grey-skin .side-nav .collapsible li .collapsible-body a:hover {
            color: rgb(150, 213, 251);
        }
        .grey-skin .side-nav .fab,
        .grey-skin .side-nav .far,
        .grey-skin .side-nav .fas {
            color: rgb(232, 230, 227);
        }
        .grey-skin .side-nav .sidenav-bg.mask-strong::after,
        .grey-skin .side-nav .sidenav-bg::after {
            background-image: initial;
            background-color: rgba(91, 99, 102, 0.8);
        }
        .grey-skin .side-nav .sidenav-bg.mask-light::after {
            background-image: initial;
            background-color: rgba(91, 99, 102, 0.65);
        }
        .grey-skin .side-nav .sidenav-bg.mask-slight::after {
            background-image: initial;
            background-color: rgba(91, 99, 102, 0.5);
        }
        .grey-skin .btn-primary {
            color: rgb(232, 230, 227);
            background-color: rgb(15, 103, 157) !important;
        }
        .grey-skin .btn-primary:hover {
            background-color: rgb(14, 94, 144);
            color: rgb(232, 230, 227);
        }
        .grey-skin .btn-primary.focus,
        .grey-skin .btn-primary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .grey-skin .btn-primary.active,
        .grey-skin .btn-primary:active,
        .grey-skin .btn-primary:focus {
            background-color: rgb(14, 98, 150);
        }
        .grey-skin .btn-primary.dropdown-toggle {
            background-color: rgb(15, 103, 157) !important;
        }
        .grey-skin .btn-primary.dropdown-toggle:focus,
        .grey-skin .btn-primary.dropdown-toggle:hover {
            background-color: rgb(14, 94, 144) !important;
        }
        .grey-skin .btn-primary:not([disabled]):not(.disabled).active,
        .grey-skin .btn-primary:not([disabled]):not(.disabled):active,
        .show > .grey-skin .btn-primary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(14, 98, 150) !important;
        }
        .grey-skin .btn-primary:not([disabled]):not(.disabled).active:focus,
        .grey-skin .btn-primary:not([disabled]):not(.disabled):active:focus,
        .show > .grey-skin .btn-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .grey-skin .primary-ic {
            color: rgb(79, 177, 238) !important;
        }
        .grey-skin .primary-ic:focus,
        .grey-skin .primary-ic:hover {
            color: rgb(79, 177, 238);
        }
        .grey-skin table.table a.btn.btn-primary {
            color: rgb(232, 230, 227);
        }
        .grey-skin .btn-secondary {
            color: rgb(232, 230, 227);
            background-color: rgb(94, 102, 106) !important;
        }
        .grey-skin .btn-secondary:hover {
            background-color: rgb(87, 95, 98);
            color: rgb(232, 230, 227);
        }
        .grey-skin .btn-secondary.focus,
        .grey-skin .btn-secondary:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .grey-skin .btn-secondary.active,
        .grey-skin .btn-secondary:active,
        .grey-skin .btn-secondary:focus {
            background-color: rgb(60, 65, 67);
        }
        .grey-skin .btn-secondary.dropdown-toggle {
            background-color: rgb(94, 102, 106) !important;
        }
        .grey-skin .btn-secondary.dropdown-toggle:focus,
        .grey-skin .btn-secondary.dropdown-toggle:hover {
            background-color: rgb(87, 95, 98) !important;
        }
        .grey-skin .btn-secondary:not([disabled]):not(.disabled).active,
        .grey-skin .btn-secondary:not([disabled]):not(.disabled):active,
        .show > .grey-skin .btn-secondary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(60, 65, 67) !important;
        }
        .grey-skin .btn-secondary:not([disabled]):not(.disabled).active:focus,
        .grey-skin .btn-secondary:not([disabled]):not(.disabled):active:focus,
        .show > .grey-skin .btn-secondary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .grey-skin .secondary-ic {
            color: rgb(153, 145, 131) !important;
        }
        .grey-skin .secondary-ic:focus,
        .grey-skin .secondary-ic:hover {
            color: rgb(153, 145, 131);
        }
        .grey-skin table.table a.btn.btn-secondary {
            color: rgb(232, 230, 227);
        }
        .grey-skin .btn-default {
            color: rgb(232, 230, 227);
            background-color: rgb(41, 44, 46) !important;
        }
        .grey-skin .btn-default:hover {
            background-color: rgb(50, 55, 57);
            color: rgb(232, 230, 227);
        }
        .grey-skin .btn-default.focus,
        .grey-skin .btn-default:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .grey-skin .btn-default.active,
        .grey-skin .btn-default:active,
        .grey-skin .btn-default:focus {
            background-color: rgb(2, 2, 3);
        }
        .grey-skin .btn-default.dropdown-toggle {
            background-color: rgb(41, 44, 46) !important;
        }
        .grey-skin .btn-default.dropdown-toggle:focus,
        .grey-skin .btn-default.dropdown-toggle:hover {
            background-color: rgb(50, 55, 57) !important;
        }
        .grey-skin .btn-default:not([disabled]):not(.disabled).active,
        .grey-skin .btn-default:not([disabled]):not(.disabled):active,
        .show > .grey-skin .btn-default.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(2, 2, 3) !important;
        }
        .grey-skin .btn-default:not([disabled]):not(.disabled).active:focus,
        .grey-skin .btn-default:not([disabled]):not(.disabled):active:focus,
        .show > .grey-skin .btn-default.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .grey-skin .default-ic {
            color: rgb(198, 193, 185) !important;
        }
        .grey-skin .default-ic:focus,
        .grey-skin .default-ic:hover {
            color: rgb(198, 193, 185);
        }
        .grey-skin a.btn:not([href]):not([tabindex]),
        .grey-skin a.btn:not([href]):not([tabindex]):focus,
        .grey-skin a.btn:not([href]):not([tabindex]):hover,
        .grey-skin table.table a.btn.btn-default {
            color: rgb(232, 230, 227);
        }
        .grey-skin .btn-outline-primary {
            border-color: rgb(14, 97, 148) !important;
            background-color: transparent !important;
            color: rgb(79, 177, 238) !important;
        }
        .grey-skin .btn-outline-primary.active,
        .grey-skin .btn-outline-primary:active,
        .grey-skin .btn-outline-primary:active:focus,
        .grey-skin .btn-outline-primary:focus,
        .grey-skin .btn-outline-primary:hover {
            border-color: rgb(14, 97, 148) !important;
            background-color: transparent !important;
            color: rgb(79, 177, 238) !important;
        }
        .grey-skin .btn-outline-primary:not([disabled]):not(.disabled).active,
        .grey-skin .btn-outline-primary:not([disabled]):not(.disabled):active,
        .show > .grey-skin .btn-outline-primary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(14, 97, 148) !important;
        }
        .grey-skin .btn-outline-primary:not([disabled]):not(.disabled).active:focus,
        .grey-skin .btn-outline-primary:not([disabled]):not(.disabled):active:focus,
        .show > .grey-skin .btn-outline-primary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .grey-skin .btn-outline-secondary {
            border-color: rgb(83, 90, 94) !important;
            background-color: transparent !important;
            color: rgb(153, 145, 131) !important;
        }
        .grey-skin .btn-outline-secondary.active,
        .grey-skin .btn-outline-secondary:active,
        .grey-skin .btn-outline-secondary:active:focus,
        .grey-skin .btn-outline-secondary:focus,
        .grey-skin .btn-outline-secondary:hover {
            border-color: rgb(83, 90, 94) !important;
            background-color: transparent !important;
            color: rgb(153, 145, 131) !important;
        }
        .grey-skin .btn-outline-secondary:not([disabled]):not(.disabled).active,
        .grey-skin .btn-outline-secondary:not([disabled]):not(.disabled):active,
        .show > .grey-skin .btn-outline-secondary.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(83, 90, 94) !important;
        }
        .grey-skin .btn-outline-secondary:not([disabled]):not(.disabled).active:focus,
        .grey-skin .btn-outline-secondary:not([disabled]):not(.disabled):active:focus,
        .show > .grey-skin .btn-outline-secondary.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .grey-skin .btn-outline-default {
            border-color: rgb(122, 113, 100) !important;
            background-color: transparent !important;
            color: rgb(198, 193, 185) !important;
        }
        .grey-skin .btn-outline-default.active,
        .grey-skin .btn-outline-default:active,
        .grey-skin .btn-outline-default:active:focus,
        .grey-skin .btn-outline-default:focus,
        .grey-skin .btn-outline-default:hover {
            border-color: rgb(122, 113, 100) !important;
            background-color: transparent !important;
            color: rgb(198, 193, 185) !important;
        }
        .grey-skin .md-form .prefix.active, .grey-skin .md-outline input[type="date"]:focus:not([readonly]) + label, .grey-skin .md-outline input[type="datetime-local"]:focus:not([readonly]) + label, .grey-skin .md-outline input[type="email"]:focus:not([readonly]) + label, .grey-skin .md-outline input[type="number"]:focus:not([readonly]) + label, .grey-skin .md-outline input[type="password"]:focus:not([readonly]) + label, .grey-skin .md-outline input[type="search-md"]:focus:not([readonly]) + label, .grey-skin .md-outline input[type="search"]:focus:not([readonly]) + label, .grey-skin .md-outline input[type="tel"]:focus:not([readonly]) + label, .grey-skin .md-outline input[type="text"]:focus:not([readonly]) + label, .grey-skin .md-outline input[type="time"]:focus:not([readonly]) + label, .grey-skin .md-outline input[type="url"]:focus:not([readonly]) + label,
        .grey-skin .md-outline textarea:focus:not([readonly]) + label, .grey-skin input[type="email"]:focus:not([readonly]) + label, .grey-skin input[type="text"]:focus:not([readonly]) + label, .grey-skin input[type="password"]:focus:not([readonly]) + label, .grey-skin input[type="number"]:focus:not([readonly]) + label,
        .grey-skin textarea.md-textarea:focus:not([readonly]) + label {
            color: rgb(112, 191, 240);
        }
        .grey-skin .btn-outline-default:not([disabled]):not(.disabled).active,
        .grey-skin .btn-outline-default:not([disabled]):not(.disabled):active,
        .show > .grey-skin .btn-outline-default.dropdown-toggle {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: transparent !important;
            border-color: rgb(122, 113, 100) !important;
        }
        .grey-skin .btn-outline-default:not([disabled]):not(.disabled).active:focus,
        .grey-skin .btn-outline-default:not([disabled]):not(.disabled):active:focus,
        .show > .grey-skin .btn-outline-default.dropdown-toggle:focus {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .grey-skin .card .btn-action {
            background-image: initial;
            background-color: rgb(41, 44, 46);
        }
        .grey-skin .card .btn-action:focus,
        .grey-skin .card .btn-action:hover {
            background-color: rgb(50, 55, 57) !important;
        }
        .grey-skin .card .btn-action.active {
            background-color: rgb(2, 2, 3) !important;
        }
        .grey-skin .md-outline input[type="date"]:focus:not([readonly]), .grey-skin .md-outline input[type="datetime-local"]:focus:not([readonly]), .grey-skin .md-outline input[type="email"]:focus:not([readonly]), .grey-skin .md-outline input[type="number"]:focus:not([readonly]), .grey-skin .md-outline input[type="password"]:focus:not([readonly]), .grey-skin .md-outline input[type="search-md"]:focus:not([readonly]), .grey-skin .md-outline input[type="search"]:focus:not([readonly]), .grey-skin .md-outline input[type="tel"]:focus:not([readonly]), .grey-skin .md-outline input[type="text"]:focus:not([readonly]), .grey-skin .md-outline input[type="time"]:focus:not([readonly]), .grey-skin .md-outline input[type="url"]:focus:not([readonly]),
        .grey-skin .md-outline textarea:focus:not([readonly]) {
            border-color: rgb(15, 88, 133);
            box-shadow: rgb(14, 85, 129) 0px 0px 0px 1px inset;
        }
        .grey-skin .md-bg input[type="date"], .grey-skin .md-bg input[type="datetime-local"], .grey-skin .md-bg input[type="email"], .grey-skin .md-bg input[type="number"], .grey-skin .md-bg input[type="password"], .grey-skin .md-bg input[type="search-md"], .grey-skin .md-bg input[type="search"], .grey-skin .md-bg input[type="tel"], .grey-skin .md-bg input[type="text"], .grey-skin .md-bg input[type="time"], .grey-skin .md-bg input[type="url"],
        .grey-skin .md-bg textarea.md-textarea {
            background-image: linear-gradient(rgb(14, 85, 129),
            rgb(14, 85, 129)),
            linear-gradient(rgb(48, 52, 54),
            rgb(48, 52, 54));
        }
        .grey-skin input[type="email"]:focus:not([readonly]), .grey-skin input[type="text"]:focus:not([readonly]), .grey-skin input[type="password"]:focus:not([readonly]), .grey-skin input[type="number"]:focus:not([readonly]),
        .grey-skin textarea.md-textarea:focus:not([readonly]) {
            border-color: rgb(15, 88, 133);
            box-shadow: rgb(14, 85, 129) 0px 1px 0px 0px;
        }
        .grey-skin input[type="checkbox"]:checked + label::before {
            border-right-color: rgb(15, 88, 133);
            border-bottom-color: rgb(15, 88, 133);
        }
        .grey-skin input[type="checkbox"].filled-in:checked + label::before {
            border-right-color: rgb(48, 52, 54);
            border-bottom-color: rgb(48, 52, 54);
        }
        .grey-skin input[type="checkbox"].filled-in:checked + label::after {
            background-color: rgb(14, 85, 129);
            border-color: rgb(15, 88, 133);
        }
        .grey-skin .select-wrapper.colorful-select.md-form.md-outline span.caret.active {
            color: rgb(112, 191, 240) !important;
        }
        .grey-skin .select-wrapper.colorful-select.md-form.md-outline input.select-dropdown:focus {
            border-color: rgb(15, 88, 133);
            box-shadow: rgb(14, 85, 129) 0px 0px 0px 1px inset;
        }
        .grey-skin .select-wrapper.colorful-select.md-form.md-outline + label.active {
            color: rgb(112, 191, 240);
        }
        .grey-skin .select-wrapper.colorful-select.md-form .dropdown-content li a,
        .grey-skin .select-wrapper.colorful-select.md-form .dropdown-content li span:hover,
        .grey-skin .select-wrapper.colorful-select.md-form .dropdown-content li.active {
            background-color: rgb(14, 85, 129) !important;
        }
        .grey-skin .select-wrapper.colorful-select.md-form .dropdown-content li.disabled.active {
            background-color: transparent !important;
        }
        .grey-skin .top-nav-collapse {
            background-color: rgb(54, 58, 61);
        }
        .grey-skin .carousel-multi-item .carousel-indicators li,
        .grey-skin .carousel-multi-item .carousel-indicators li.active,
        .grey-skin .carousel-multi-item .controls-top > a {
            background-color: rgb(14, 85, 129);
        }
        .grey-skin .card-header,
        .grey-skin .form-header {
            background-color: rgb(13, 81, 123);
        }
        .grey-skin .spinner-primary-color,
        .grey-skin .spinner-primary-color-only {
            border-color: rgb(126, 117, 103);
        }
        .grey-skin .pagination-primary-color .page-item.active .page-link,
        .grey-skin .pagination-primary-color .page-item.active .page-link:focus,
        .grey-skin .pagination-primary-color .page-item.active .page-link:hover {
            color: rgb(232, 230, 227);
            background-color: rgb(32, 35, 36);
        }
        .grey-skin .pagination-primary-color .page-link {
            color: rgb(205, 200, 194);
        }
        .grey-skin .pagination-primary-color .page-link:focus {
            box-shadow: none;
        }
        .picker__input.picker__input--active {
            border-color: rgb(0, 107, 184);
        }
        .picker {
            color: rgb(232, 230, 227);
        }
        .picker .picker__box {
            background-image: initial;
            background-color: rgb(24, 26, 27);
        }
        @media (min-height: 28.875em) {
            .picker .picker__box {
                border-color: rgb(81, 88, 91) rgb(101, 94, 83) rgb(101, 94, 83);
                box-shadow: rgba(0, 0, 0, 0.24) 0px 0.75rem 2.25rem 1rem;
            }
        }
        .picker--opened .picker__holder {
            background-image: initial;
            background-color: rgba(0, 0, 0, 0.32);
        }
        .datepicker.picker__input.picker__input--active,
        .timepicker.picker__input.picker__input--active {
            border-bottom-color: rgb(7, 63, 104);
        }
        .picker__list {
            list-style-image: initial;
        }
        .picker__list-item {
            border-bottom-color: rgb(58, 62, 65);
            border-top-color: rgb(58, 62, 65);
        }
        .picker__list-item--highlighted,
        .picker__list-item:hover {
            border-color: rgb(0, 107, 184);
        }
        .picker__list-item:hover {
            background-image: initial;
            background-color: rgb(47, 51, 53);
        }
        .picker--focused .picker__list-item--highlighted,
        .picker__list-item--highlighted:hover {
            color: rgb(232, 230, 227);
            background-image: initial;
            background-color: rgb(47, 51, 53);
        }
        .picker--focused .picker__list-item--selected,
        .picker__list-item--selected,
        .picker__list-item--selected:hover {
            background-image: initial;
            background-color: rgb(0, 110, 189);
        }
        .picker--focused .picker__list-item--disabled,
        .picker__list-item--disabled,
        .picker__list-item--disabled:hover {
            background-image: initial;
            background-color: rgb(30, 32, 33);
            color: rgb(211, 207, 201);
            border-color: rgb(58, 62, 65);
        }
        .picker--time .picker__button--clear {
            background-image: initial;
            background-color: initial;
            border-color: initial;
            color: rgb(168, 160, 149);
        }
        .picker--time .picker__button--clear:focus,
        .picker--time .picker__button--clear:hover {
            color: rgb(232, 230, 227);
            background-image: initial;
            background-color: rgb(47, 51, 53);
            border-color: rgb(184, 26, 0);
            outline-color: initial;
        }
        .picker--time .picker__button--clear::before {
            color: rgb(168, 160, 149);
        }
        .picker--time .picker__box {
            background-image: initial;
            background-color: rgb(31, 34, 35);
        }
        .picker__date-display {
            background-color: rgb(9, 67, 162);
        }
        .picker__date-display .clockpicker-display {
            color: rgb(165, 218, 213);
        }
        .picker__date-display .clockpicker-display .clockpicker-display-am-pm .clockpicker-span-am-pm {
            color: rgb(165, 218, 213);
        }
        .clockpicker-display {
            color: rgb(165, 218, 213);
        }
        .clockpicker-display .clockpicker-display-am-pm .clockpicker-span-am-pm {
            color: rgb(165, 218, 213);
        }
        .clockpicker-plate {
            background-color: rgb(34, 36, 38);
        }
        .clockpicker-plate .clockpicker-dial .clockpicker-tick {
            color: rgb(168, 160, 149);
            background-color: rgba(0, 120, 109, 0);
        }
        .clockpicker-plate .clockpicker-dial .clockpicker-tick.active,
        .clockpicker-plate .clockpicker-dial .clockpicker-tick:hover {
            background-color: rgba(0, 120, 109, 0.25);
        }
        .clockpicker-canvas line {
            stroke: rgba(99, 255, 240, 0.25);
        }
        .clockpicker-canvas-bearing {
            stroke: none;
            fill: rgba(208, 204, 197, 0.75);
        }
        .clockpicker-canvas-fg {
            stroke: none;
            fill: rgba(208, 204, 197, 0);
        }
        .clockpicker-canvas-fg.active {
            fill: rgba(208, 204, 197, 0.5);
        }
        .clockpicker-canvas-bg,
        .clockpicker-canvas-bg-trans {
            fill: rgba(99, 255, 240, 0.25);
        }
        .clockpicker-canvas-bg {
            stroke: none;
        }
        .clockpicker-am-pm-block .clockpicker-button.am-button {
            border-color: initial;
        }
        .clockpicker-am-pm-block .clockpicker-button.pm-button {
            border-color: initial;
        }
        .btn-floating.btn-flat {
            color: rgb(232, 230, 227);
            background-image: initial;
            background-color: rgb(9, 67, 162);
        }
        .btn-floating.btn-flat:hover {
            box-shadow: none;
        }
        .btn-floating.btn-flat:focus,
        .btn-floating.btn-flat:hover {
            background-color: rgb(9, 62, 147) !important;
        }
        .btn-floating.btn-flat.active {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
            background-color: rgb(9, 65, 158) !important;
        }
        .picker__footer .clockpicker-button {
            background-color: transparent;
        }
        .picker__footer .clockpicker-button:focus {
            background-color: transparent;
        }
        .picker__footer .clockpicker-button:active {
            background-color: rgba(0, 120, 109, 0.25);
        }
        .darktheme .picker__box {
            background-color: rgb(25, 27, 28);
        }
        .darktheme .picker__box .picker__calendar-container .clockpicker-plate,
        .darktheme .picker__box .picker__date-display {
            background-color: transparent;
        }
        .darktheme .picker__box .picker__calendar-container .clockpicker-plate .clockpicker-tick {
            background-color: rgba(166, 0, 56, 0);
        }
        .darktheme .picker__box .picker__calendar-container .clockpicker-plate .clockpicker-tick.active,
        .darktheme .picker__box .picker__calendar-container .clockpicker-plate .clockpicker-tick:hover,
        .darktheme .picker__box .picker__footer .clockpicker-button:active {
            background-color: rgba(166, 0, 56, 0.25);
        }
        .darktheme .picker__box .picker__calendar-container .clockpicker-plate .clockpicker-canvas line {
            stroke: rgba(255, 70, 133, 0.25);
        }
        .darktheme .picker__box .picker__calendar-container .clockpicker-plate .clockpicker-canvas-bearing {
            fill: rgb(232, 230, 227);
        }
        .darktheme .picker__box .picker__calendar-container .clockpicker-plate .clockpicker-canvas-fg {
            fill: rgba(255, 70, 133, 0);
        }
        .darktheme .picker__box .picker__calendar-container .clockpicker-plate .clockpicker-canvas-fg.active {
            fill: rgba(255, 70, 133, 0.5);
        }
        .darktheme .picker__box .picker__calendar-container .clockpicker-plate .clockpicker-canvas-bg {
            fill: rgba(255, 70, 133, 0.25);
        }
        .darktheme .picker__box .picker__calendar-container .clockpicker-plate .clockpicker-canvas-bg-trans {
            fill: rgba(255, 70, 133, 0.5);
        }
        .picker__box .picker__header .picker__date-display {
            background-color: rgb(9, 67, 162);
        }
        .picker__box .picker__header .picker__date-display .picker__year-display {
            color: rgba(232, 230, 227, 0.4);
        }
        .picker__box .picker__header .picker__select--month,
        .picker__box .picker__header .picker__select--year {
            border-top-color: initial;
            border-right-color: initial;
            border-left-color: initial;
            background-image: initial;
            background-color: initial;
            border-bottom-color: rgb(60, 65, 68);
            outline-color: initial;
        }
        .picker__box .picker__header .picker__select--month:focus,
        .picker__box .picker__header .picker__select--year:focus {
            border-color: rgba(140, 130, 115, 0.05);
        }
        .picker__box .picker__header .picker__nav--next:hover,
        .picker__box .picker__header .picker__nav--prev:hover {
            color: rgb(232, 230, 227);
        }
        .picker__box .picker__table .picker__weekday {
            color: rgb(168, 160, 149);
        }
        .picker__box .picker__table .picker__day--today {
            border-color: transparent;
        }
        .picker__box .picker__table .picker__day.picker__day--today {
            color: rgb(75, 160, 244);
        }
        .picker__box .picker__table .picker__day--disabled::before {
            border-top-color: rgb(72, 78, 81);
        }
        .picker__box .picker__table .picker__day--infocus {
            color: rgb(176, 169, 159);
            border-color: rgb(111, 103, 91);
        }
        .picker__box .picker__table .picker__day--infocus:hover {
            color: rgb(232, 230, 227);
        }
        .picker__box .picker__table .picker__day--outfocus:hover {
            color: rgb(211, 207, 201);
        }
        .picker__box .picker__table .picker--focused,
        .picker__box .picker__table .picker__day--selected,
        .picker__box .picker__table .picker__day--selected:hover {
            background-color: rgb(9, 67, 162);
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .picker__box .picker__table .picker--focused.picker__day--outfocus,
        .picker__box .picker__table .picker__day--selected.picker__day--outfocus,
        .picker__box .picker__table .picker__day--selected:hover.picker__day--outfocus {
            background-color: rgb(30, 33, 34);
        }
        .picker__box .picker__table .picker--focused,
        .picker__box .picker__table .picker__day--disabled,
        .picker__box .picker__table .picker__day--disabled:hover {
            background-image: initial;
            background-color: rgb(30, 32, 33);
            border-color: rgb(51, 55, 57);
            color: rgb(211, 207, 201);
        }
        .picker__box .picker__table .picker__day--highlighted.picker__day--disabled,
        .picker__box .picker__table .picker__day--highlighted.picker__day--disabled:hover {
            background-image: initial;
            background-color: rgb(62, 68, 70);
        }
        .picker__box .picker__footer .picker__button--clear,
        .picker__box .picker__footer .picker__button--close,
        .picker__box .picker__footer .picker__button--today {
            border-color: rgb(48, 52, 54);
            background-image: initial;
            background-color: rgb(24, 26, 27);
        }
        .picker__box .picker__footer .picker__button--clear:hover,
        .picker__box .picker__footer .picker__button--close:hover,
        .picker__box .picker__footer .picker__button--today:hover {
            color: rgb(232, 230, 227);
            background-image: initial;
            background-color: rgb(47, 51, 53);
            border-bottom-color: rgb(6, 73, 120);
        }
        .picker__box .picker__footer .picker__button--clear:focus,
        .picker__box .picker__footer .picker__button--close:focus,
        .picker__box .picker__footer .picker__button--today:focus {
            background-image: initial;
            background-color: rgb(47, 51, 53);
            border-color: rgba(140, 130, 115, 0.05);
            outline-color: initial;
        }
        .picker__box .picker__footer .picker__button--today::before {
            border-top-color: rgb(0, 94, 199);
            border-left-color: transparent;
        }
        .picker__box .picker__footer .picker__button--clear::before {
            border-top-color: rgb(184, 26, 0);
        }
        .picker__box .picker__footer .picker__button--close::before {
            color: rgb(157, 148, 136);
        }
        .picker__box .picker__footer .picker__button--today[disabled],
        .picker__box .picker__footer .picker__button--today[disabled]:hover {
            background-image: initial;
            background-color: rgb(30, 32, 33);
            border-color: rgb(51, 55, 57);
            color: rgb(211, 207, 201);
        }
        .picker__box .picker__footer .picker__button--today[disabled]::before {
            border-top-color: rgb(72, 78, 81);
        }
        .picker__calendar-container thead {
            border-color: initial;
        }
        .mdb-feed .news .excerpt .brief a {
            color: rgb(75, 160, 244);
        }
        .mdb-feed .news .excerpt .brief .date,
        .mdb-feed .news .excerpt .feed-footer .like {
            color: rgb(171, 163, 152);
        }
        .mdb-feed .news .excerpt .feed-footer .like:hover .fab,
        .mdb-feed .news .excerpt .feed-footer .like:hover .far,
        .mdb-feed .news .excerpt .feed-footer .like:hover .fas {
            color: rgb(245, 78, 66);
        }
        .mdb-feed .news .excerpt .feed-footer .like:hover span {
            color: rgb(232, 230, 227);
        }
        .mdb-feed .news .excerpt .feed-footer span a {
            color: rgb(75, 160, 244);
        }
        .mdb-feed .news .excerpt .feed-footer .thumbs .fab,
        .mdb-feed .news .excerpt .feed-footer .thumbs .far,
        .mdb-feed .news .excerpt .feed-footer .thumbs .fas {
            color: rgb(171, 163, 152);
        }
        .mdb-feed .news .excerpt .feed-footer .thumbs .fab:hover,
        .mdb-feed .news .excerpt .feed-footer .thumbs .far:hover,
        .mdb-feed .news .excerpt .feed-footer .thumbs .fas:hover {
            color: rgb(158, 150, 137);
        }
        .mdb-feed .news .excerpt .feed-footer .comment {
            color: rgb(171, 163, 152);
        }
        .card-personal .card-body .card-title.title-one:hover {
            color: rgb(75, 160, 244);
        }
        .card-personal .card-body .card-meta {
            color: rgb(158, 150, 137);
        }
        .card-personal .card-body span:hover {
            color: rgb(75, 160, 244);
        }
        .news-card .content .right-side-meta {
            color: rgb(171, 163, 152);
        }
        .news-card .social-meta .fa-heart-o {
            color: rgba(232, 230, 227, 0.4);
        }
        .news-card .social-meta .fa-heart-o:hover {
            color: rgb(245, 78, 66);
        }
        .news-card .md-form .prefix {
            color: rgba(232, 230, 227, 0.4);
        }
        .news-card .md-form .prefix.active {
            color: rgba(232, 230, 227, 0.4);
        }
        .news-card .md-form .form-control {
            border-bottom-color: rgba(140, 130, 115, 0.1);
        }
        .testimonial-carousel .carousel-control {
            background-image: none;
        }
        .testimonial-carousel .carousel-control::before {
            color: rgba(232, 230, 227, 0.6);
        }
        .testimonial-carousel .carousel-control:hover::before {
            color: rgb(232, 230, 227);
        }
        .testimonial-carousel .testimonial .avatar img {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .magazine-section .single-news {
            border-bottom-color: rgb(57, 61, 64);
        }
        .magazine-section .single-news:last-of-type {
            border-bottom-color: initial;
        }
        .pricing-card .header {
            box-shadow: rgba(0, 0, 0, 0.18) 0px 5px 11px 0px,
            rgba(0, 0, 0, 0.15) 0px 4px 15px 0px;
        }
        .pricing-card .price .version {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 5px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
        }
        .pricing-card .striped li {
            border-bottom-color: rgba(53, 57, 59, 0.3);
        }
        .pricing-card .striped.green-striped li {
            border-color: rgb(38, 144, 102);
        }
        .pricing-card .striped.orange-striped li {
            border-color: rgb(136, 42, 19);
        }
        .pricing-card .striped.purple-striped li {
            border-color: rgb(137, 55, 135);
        }
        .pricing-card .striped.darker-striped li {
            border-bottom-color: rgba(77, 83, 86, 0.3);
        }
        .pricing-card .card-background {
            background-color: rgb(32, 32, 50);
        }
        .card .card-circle {
            border-color: rgb(57, 61, 64);
        }
        .contact-section .contact {
            background-color: rgb(13, 50, 87);
        }
        .contact-section .contact .fab,
        .contact-section .contact .far,
        .contact-section .contact .fas {
            color: rgb(120, 149, 173);
        }
        .bootstrap-table .fixed-table-container .table thead th:focus {
            outline-color: transparent;
        }
        .bootstrap-table .fixed-table-container .table thead th .both {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAAkElEQVQoz7XQMQ5AQBCF4dWQSJxC5wwax1Cq1e7BAdxD5SL+Tq/QCM1oNiJidwox0355mXnG/DrEtIQ6azioNZQxI0ykPhTQIwhCR+BmBYtlK7kLJYwWCcJA9M4qdrZrd8pPjZWPtOqdRQy320YSV17OatFC4euts6z39GYMKRPCTKY9UnPQ6P+GtMRfGtPnBCiqhAeJPmkqAAAAAElFTkSuQmCC");
        }
        .bootstrap-table .fixed-table-container .table thead th .asc {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZ0lEQVQ4y2NgGLKgquEuFxBPAGI2ahhWCsS/gDibUoO0gPgxEP8H4ttArEyuQYxAPBdqEAxPBImTY5gjEL9DM+wTENuQahAvEO9DMwiGdwAxOymGJQLxTyD+jgWDxCMZRsEoGAVoAADeemwtPcZI2wAAAABJRU5ErkJggg==");
        }
        .bootstrap-table .fixed-table-container .table thead th .desc {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAZUlEQVQ4y2NgGAWjYBSggaqGu5FA/BOIv2PBIPFEUgxjB+IdQPwfC94HxLykus4GiD+hGfQOiB3J8SojEE9EM2wuSJzcsFMG4ttQgx4DsRalkZENxL+AuJQaMcsGxBOAmGvopk8AVz1sLZgg0bsAAAAASUVORK5CYII=");
        }
        .bootstrap-table .fixed-table-container .table tbody tr.selected td {
            background-color: rgba(0, 0, 0, 0.07);
        }
        .bootstrap-table .fixed-table-container.fixed-height:not(.has-footer) {
            border-bottom-color: rgb(56, 61, 63);
        }
        .bootstrap-table .fixed-table-container.fixed-height.has-card-view {
            border-top-color: rgb(56, 61, 63);
            border-bottom-color: rgb(56, 61, 63);
        }
        .bootstrap-table .fixed-table-container.fixed-height .fixed-table-border {
            border-left-color: rgb(56, 61, 63);
            border-right-color: rgb(56, 61, 63);
        }
        .bootstrap-table .fixed-table-container.fixed-height .table thead th {
            border-bottom-color: rgb(56, 61, 63);
        }
        .bootstrap-table .fixed-table-container.fixed-height .table-dark thead th {
            border-bottom-color: rgb(122, 113, 100);
        }
        .bootstrap-table .fixed-table-container .fixed-table-body .fixed-table-loading {
            background-image: initial;
            background-color: rgb(24, 26, 27);
        }
        .bootstrap-table .fixed-table-container .fixed-table-body .fixed-table-loading .loading-wrap .animation-dot,
        .bootstrap-table .fixed-table-container .fixed-table-body .fixed-table-loading .loading-wrap .animation-wrap::after,
        .bootstrap-table .fixed-table-container .fixed-table-body .fixed-table-loading .loading-wrap .animation-wrap::before {
            background-image: initial;
            background-color: rgb(28, 30, 31);
        }
        .bootstrap-table .fixed-table-container .fixed-table-body .fixed-table-loading.table-dark {
            background-image: initial;
            background-color: rgb(28, 30, 31);
        }
        .bootstrap-table .fixed-table-container .fixed-table-body .fixed-table-loading.table-dark .animation-dot,
        .bootstrap-table .fixed-table-container .fixed-table-body .fixed-table-loading.table-dark .animation-wrap::after,
        .bootstrap-table .fixed-table-container .fixed-table-body .fixed-table-loading.table-dark .animation-wrap::before {
            background-image: initial;
            background-color: rgb(24, 26, 27);
        }
        .bootstrap-table .fixed-table-pagination > .pagination ul.pagination li.page-intermediate a {
            color: rgb(197, 192, 185);
        }
        .bootstrap-table.fullscreen {
            background-image: initial;
            background-color: rgb(24, 26, 27);
        }
        .ftblue {
            background-color: rgb(60, 86, 126) !important;
        }
        .ftblue-lighter {
            background-color: rgb(43, 72, 115) !important;
        }
        .ftblue-lightest {
            background-color: rgb(37, 40, 41) !important;
        }
        .ftblue-greyer {
            background-color: rgb(58, 73, 95) !important;
        }
        .ftblue-darker {
            background-color: rgb(19, 45, 82) !important;
        }
        .navbar {
            box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 4px 0px,
            rgba(0, 0, 0, 0.12) 0px 2px 10px 0px;
        }
        .ftLiveName {
            color: rgb(255, 255, 26);
        }
        .tournName {
            color: rgb(255, 255, 26);
        }
        .eventName {
            color: rgb(232, 230, 227);
        }
        .eventTime {
            color: rgb(232, 230, 227);
        }
        .nav-link {
            color: rgb(232, 230, 227);
        }
        .nav-link:hover {
            color: rgb(211, 207, 201);
        }
        @media (max-width: 992px) {
            .eventName {
                color: rgb(255, 255, 26);
            }
        }
        .activeTab a {
            background-color: rgb(24, 26, 27);
            color: rgb(232, 230, 227) !important;
        }
        .statusExempt {
            color: rgb(51, 125, 255);
        }
        .statusExcluded {
            color: rgb(232, 230, 227);
            background-color: rgb(0, 0, 0);
        }
        .statusEliminated {
            color: rgb(255, 26, 26);
        }
        .statusAdvanced {
            color: rgb(114, 255, 114);
        }
        .goldMedal {
            background-color: rgb(153, 129, 0);
        }
        .silverMedal {
            color: rgb(232, 230, 227);
            background-color: rgb(91, 99, 103);
        }
        .bronzeMedal {
            color: rgb(232, 230, 227);
            background-color: rgb(133, 100, 49);
        }
        .miniResults th {
            border-color: initial !important;
        }
        .miniResults td {
            border-color: initial !important;
        }
        .filterButtons {
            list-style-image: initial;
        }
        .poolNum {
            color: rgb(232, 230, 227);
        }
        .poolStripTime {
            color: rgb(211, 207, 201);
        }
        .poolHeader {
            color: rgb(255, 236, 67) !important;
            background-color: rgb(60, 86, 126) !important;
        }
        .poolHeader > th {
            border-color: initial !important;
        }
        .poolAffil {
            color: rgb(211, 207, 201);
        }
        .poolPos {
            color: rgb(255, 236, 67) !important;
            background-color: rgb(60, 86, 126) !important;
            border-color: initial !important;
        }
        .poolSep {
            background-color: rgb(60, 86, 126) !important;
            border-color: initial !important;
        }
        .poolScoreFill {
            background-color: rgb(0, 0, 0);
            border-color: initial !important;
        }
        .poolScoreWDX {
            background-color: rgb(91, 99, 103);
            border-color: initial !important;
        }
        .poolScoreV {
            background-color: rgb(20, 82, 0);
        }
        .poolScoreD {
            background-color: rgb(82, 0, 0);
        }
        .poolResultWDX {
            color: rgb(232, 230, 227);
            background-color: rgb(91, 99, 103);
            border-color: initial !important;
        }
        .abcScores {
            color: rgb(232, 230, 227);
        }
        .abcScores td {
            border-color: initial;
        }
        .boutTableHeader {
            color: rgb(255, 236, 67) !important;
            background-color: rgb(60, 86, 126) !important;
        }
        .boutTableHeader > th {
            border-color: initial !important;
        }
        .poolRefsHeader {
            color: rgb(211, 207, 201);
        }
        .poolRefName {
            color: rgb(211, 207, 201);
        }
        .nameHighlight {
            background-color: rgb(153, 153, 0);
        }
        .elimPanel {
            background-color: rgb(55, 55, 6);
            border-color: rgb(108, 80, 42);
        }
        .elimTableau th {
            background-image: initial;
            background-color: rgb(106, 78, 41);
        }
        .tAlt {
            background-color: rgb(70, 65, 14);
        }
        .tYellow {
            background-color: rgb(55, 55, 6);
        }
        .tGreen {
            background-color: rgb(24, 73, 8);
        }
        .tBlue {
            background-color: rgb(46, 50, 51);
        }
        .tRed {
            background-color: rgb(78, 0, 0);
        }
        .tbr {
            border-right-color: rgb(129, 120, 106);
        }
        .tbb {
            border-bottom-color: rgb(129, 120, 106);
        }
        .tbbr {
            border-bottom-color: rgb(129, 120, 106);
            border-right-color: rgb(129, 120, 106);
        }
        .tseed {
            color: rgb(232, 230, 227);
        }
        .tcln {
            color: rgb(51, 125, 255);
        }
        .tcfn {
            color: rgb(51, 125, 255);
        }
        .tcaff {
            color: rgb(211, 207, 201);
        }
        .tref {
            color: rgb(168, 160, 149);
        }
        .tmdl a {
            color: rgb(232, 230, 227);
            text-decoration-color: initial;
        }
        .tmTableHeader {
            color: rgb(255, 236, 67) !important;
            background-color: rgb(60, 86, 126) !important;
        }
        .tmTableHeader > th {
            border-color: initial !important;
        }
        .tmTableFooter {
            color: rgb(255, 236, 67) !important;
            background-color: rgb(60, 86, 126) !important;
        }
        .tmTableFooter > td {
            border-color: initial !important;
        }
        .tmPos {
            color: rgb(255, 236, 67) !important;
            background-color: rgb(60, 86, 126) !important;
            border-color: initial !important;
        }
        .tmName {
            color: rgb(168, 160, 149);
        }
        .tmRefsHeader {
            color: rgb(211, 207, 201);
        }
        .tmRefName {
            color: rgb(211, 207, 201);
        }
        .tmAffil {
            color: rgb(168, 160, 149);
        }
        .scoringMachine {
            background-color: rgb(0, 0, 0);
            color: rgb(232, 230, 227);
        }
        .smFlagBase {
            background-image: url("https://www.fencingtimelive.com/img/smFlags.png");
        }
        .smClock {
            color: rgb(255, 255, 26);
        }
        .smPCard {
            border-color: rgb(48, 52, 54);
        }
        .smGreen {
            background-color: rgb(0, 102, 0);
        }
        .smRed {
            background-color: rgb(204, 0, 0);
        }
        .smWhite {
            background-color: rgb(24, 26, 27);
        }
        .smYellow {
            background-color: rgb(153, 153, 0);
            color: rgb(232, 230, 227);
        }
        .fbIcon {
            color: rgb(126, 167, 209);
        }
        .fbIcon:hover {
            color: rgb(126, 167, 209);
        }
        .twIcon {
            color: rgb(49, 169, 243);
        }
        .twIcon:hover {
            color: rgb(49, 169, 243);
        }
        .ggIcon {
            color: rgb(232, 230, 227);
        }
        .scIcon {
            color: rgb(232, 230, 227);
        }
        .switch label input[type="checkbox"]:checked + .lever::after {
            background-color: rgb(53, 162, 9);
        }
        .switch label input[type="checkbox"]:checked + .lever {
            background-color: rgb(48, 76, 36);
        }
        #smsLangDropdown {
            border-color: rgb(60, 65, 68);
        }
        .circle-icon i {
            box-shadow: rgba(4, 61, 148, 0.41) 0px 8px 19px;
            background-image: initial;
            background-color: rgb(24, 26, 27);
        }
        .circle-icon i:hover {
            background-image: initial;
            background-color: rgb(31, 34, 35);
        }
        .shBannerMobile {
            background-color: rgb(23, 24, 25);
        }
        @media (max-width: 992px) {
            .shText {
                color: rgb(232, 230, 227);
            }
        }
        @media (min-width: 992px) {
            .shText {
                color: rgb(232, 230, 227);
            }
        }
        .flag {
            background-image: url("https://www.fencingtimelive.com/img/ftflags.png");
        }
        [automa-el-list] {
            outline-color: rgb(13, 15, 140);
        }

        /* Override Style */
        .vimvixen-hint {
            background-color: #7b5300 !important;
            border-color: #d8b013 !important;
            color: #f3e8c8 !important;
        }
        #vimvixen-console-frame {
            color-scheme: light !important
        }
        ::placeholder {
            opacity: 0.5 !important;
        }
        #edge-translate-panel-body,
        .MuiTypography-body1,
        .nfe-quote-text {
            color: var(--darkreader-neutral-text) !important;
        }
        gr-main-header {
            background-color: #0f3a48 !important;
        }
        .tou-z65h9k,
        .tou-mignzq,
        .tou-1b6i2ox,
        .tou-lnqlqk {
            background-color: var(--darkreader-neutral-background) !important;
        }
        .tou-75mvi {
            background-color: #032029 !important;
        }
        .tou-ta9e87,
        .tou-1w3fhi0,
        .tou-1b8t2us,
        .tou-py7lfi,
        .tou-1lpmd9d,
        .tou-1frrtv8,
        .tou-17ezmgn {
            background-color: #0a0a0a !important;
        }
        .tou-uknfeu {
            background-color: #231603 !important;
        }
        .tou-6i3zyv {
            background-color: #19576c !important;
        }
        div.mermaid-viewer-control-panel .btn {
        fill: var(--darkreader-neutral-text);
        background-color: var(--darkreader-neutral-background);
        }
        svg g rect.er {
        fill: var(--darkreader-neutral-background) !important;
        }
        svg g rect.er.entityBox {
        fill: var(--darkreader-neutral-background) !important;
        }
        svg g rect.er.attributeBoxOdd {
        fill: var(--darkreader-neutral-background) !important;
        }
        svg g rect.er.attributeBoxEven {
        fill-opacity: 0.8 !important;
        fill: var(--darkreader-selection-background);
        }
        svg rect.er.relationshipLabelBox {
        fill: var(--darkreader-neutral-background) !important;
        }
        svg g g.nodes rect, svg g g.nodes polygon {
        fill: var(--darkreader-neutral-background) !important;
        }
        svg g rect.task {
        fill: var(--darkreader-selection-background) !important;
        }
        svg line.messageLine0, svg line.messageLine1 {
        stroke: var(--darkreader-neutral-text) !important;
        }
        div.mermaid .actor {
        fill: var(--darkreader-neutral-background) !important;
        }
        .google-material-icons {
            font-family: 'Google Material Icons' !important;
        }
        .google-symbols {
            font-family: 'Google Symbols' !important;
        }
        .material-icons-extended {
            font-family: 'Material Icons Extended' !important;
        }
        mitid-authenticators-code-app > .code-app-container {
            padding-top: 1rem;
            background-color: white !important;
        }
        iframe#unpaywall[src$="unpaywall.html"] {
            color-scheme: light !important;
        }
        .oui-icon {
            font-family: 'Oui Icons' !important;
        }
        /* Ethan added */
        .fticon {
            filter: invert(1);
        }
    }
    `);
  injectCSS(`
    .alert {
        border: none;
        background-color: transparent;
    }
    .alert > label, .alert > a {
        display: none;
    }
    * {
      font-family: -apple-system, BlinkMacSystemFont;
    }
    .nav-item .nav-link {
        border-radius: 15px;
    }
    .filterArrow {
            display: none;
        }
    #searchBox {
            border-radius: 19px;
            width: 90% !important;
            max-width: 300px;
        }
    .searchTournNameContainer .btn-danger {
            display: none;
        }
    thead {
            display: none !important;
        }
    .searchTournNameContainer .btn-primary {
        background-color: rgb(0, 136, 255) !important;
        box-shadow: none;
        padding: 0;
        width: 38px;
        height: 38px;
        margin: 0 !important;
        border-radius: 100%;
    }
    .pills-info .nav-item .active {
        background-color: rgb(0, 136, 255) !important;
    }
    @media (prefers-color-scheme: dark) {
        div .nav-item .border {
            border: white 1px solid !important;

        }

        .nav-item {
            color: white !important;
        }

        .flexRow:has(.filterButtons), .alert > .filterButtons {
            border-top: 1px white solid !important;
            padding-top: 5px;
            padding-bottom: 5px;
        }

    }
    .nav-item .border {
        border: black 1px solid !important;

    }

    .nav-item {
        color: black;
    }

    .flexRow:has(.filterButtons), .alert > .filterButtons {
        border-top: 1px black solid;
        padding-top: 5px;
        padding-bottom: 5px;
    }
    body, html {
        background-color: transparent !important;
    }

    `);
}
start();
