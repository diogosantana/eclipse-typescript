/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var ts;
(function (ts) {
    (function (ExitStatus) {
        ExitStatus[ExitStatus["Success"] = 0] = "Success";
        ExitStatus[ExitStatus["DiagnosticsPresent_OutputsSkipped"] = 1] = "DiagnosticsPresent_OutputsSkipped";
        ExitStatus[ExitStatus["DiagnosticsPresent_OutputsGenerated"] = 2] = "DiagnosticsPresent_OutputsGenerated";
    })(ts.ExitStatus || (ts.ExitStatus = {}));
    var ExitStatus = ts.ExitStatus;
    (function (DiagnosticCategory) {
        DiagnosticCategory[DiagnosticCategory["Warning"] = 0] = "Warning";
        DiagnosticCategory[DiagnosticCategory["Error"] = 1] = "Error";
        DiagnosticCategory[DiagnosticCategory["Message"] = 2] = "Message";
    })(ts.DiagnosticCategory || (ts.DiagnosticCategory = {}));
    var DiagnosticCategory = ts.DiagnosticCategory;
})(ts || (ts = {}));
var ts;
(function (ts) {
    function forEach(array, callback) {
        if (array) {
            for (var i = 0, len = array.length; i < len; i++) {
                var result = callback(array[i], i);
                if (result) {
                    return result;
                }
            }
        }
        return undefined;
    }
    ts.forEach = forEach;
    function contains(array, value) {
        if (array) {
            for (var i = 0, len = array.length; i < len; i++) {
                if (array[i] === value) {
                    return true;
                }
            }
        }
        return false;
    }
    ts.contains = contains;
    function indexOf(array, value) {
        if (array) {
            for (var i = 0, len = array.length; i < len; i++) {
                if (array[i] === value) {
                    return i;
                }
            }
        }
        return -1;
    }
    ts.indexOf = indexOf;
    function countWhere(array, predicate) {
        var count = 0;
        if (array) {
            for (var i = 0, len = array.length; i < len; i++) {
                if (predicate(array[i])) {
                    count++;
                }
            }
        }
        return count;
    }
    ts.countWhere = countWhere;
    function filter(array, f) {
        if (array) {
            var result = [];
            for (var i = 0, len = array.length; i < len; i++) {
                var item = array[i];
                if (f(item)) {
                    result.push(item);
                }
            }
        }
        return result;
    }
    ts.filter = filter;
    function map(array, f) {
        if (array) {
            var result = [];
            for (var i = 0, len = array.length; i < len; i++) {
                result.push(f(array[i]));
            }
        }
        return result;
    }
    ts.map = map;
    function concatenate(array1, array2) {
        if (!array2 || !array2.length)
            return array1;
        if (!array1 || !array1.length)
            return array2;
        return array1.concat(array2);
    }
    ts.concatenate = concatenate;
    function deduplicate(array) {
        if (array) {
            var result = [];
            for (var i = 0, len = array.length; i < len; i++) {
                var item = array[i];
                if (!contains(result, item))
                    result.push(item);
            }
        }
        return result;
    }
    ts.deduplicate = deduplicate;
    function sum(array, prop) {
        var result = 0;
        for (var i = 0; i < array.length; i++) {
            result += array[i][prop];
        }
        return result;
    }
    ts.sum = sum;
    function addRange(to, from) {
        for (var i = 0, n = from.length; i < n; i++) {
            to.push(from[i]);
        }
    }
    ts.addRange = addRange;
    function lastOrUndefined(array) {
        if (array.length === 0) {
            return undefined;
        }
        return array[array.length - 1];
    }
    ts.lastOrUndefined = lastOrUndefined;
    function binarySearch(array, value) {
        var low = 0;
        var high = array.length - 1;
        while (low <= high) {
            var middle = low + ((high - low) >> 1);
            var midValue = array[middle];
            if (midValue === value) {
                return middle;
            }
            else if (midValue > value) {
                high = middle - 1;
            }
            else {
                low = middle + 1;
            }
        }
        return ~low;
    }
    ts.binarySearch = binarySearch;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function hasProperty(map, key) {
        return hasOwnProperty.call(map, key);
    }
    ts.hasProperty = hasProperty;
    function getProperty(map, key) {
        return hasOwnProperty.call(map, key) ? map[key] : undefined;
    }
    ts.getProperty = getProperty;
    function isEmpty(map) {
        for (var id in map) {
            if (hasProperty(map, id)) {
                return false;
            }
        }
        return true;
    }
    ts.isEmpty = isEmpty;
    function clone(object) {
        var result = {};
        for (var id in object) {
            result[id] = object[id];
        }
        return result;
    }
    ts.clone = clone;
    function extend(first, second) {
        var result = {};
        for (var id in first) {
            result[id] = first[id];
        }
        for (var id in second) {
            if (!hasProperty(result, id)) {
                result[id] = second[id];
            }
        }
        return result;
    }
    ts.extend = extend;
    function forEachValue(map, callback) {
        var result;
        for (var id in map) {
            if (result = callback(map[id]))
                break;
        }
        return result;
    }
    ts.forEachValue = forEachValue;
    function forEachKey(map, callback) {
        var result;
        for (var id in map) {
            if (result = callback(id))
                break;
        }
        return result;
    }
    ts.forEachKey = forEachKey;
    function lookUp(map, key) {
        return hasProperty(map, key) ? map[key] : undefined;
    }
    ts.lookUp = lookUp;
    function mapToArray(map) {
        var result = [];
        for (var id in map) {
            result.push(map[id]);
        }
        return result;
    }
    ts.mapToArray = mapToArray;
    function copyMap(source, target) {
        for (var p in source) {
            target[p] = source[p];
        }
    }
    ts.copyMap = copyMap;
    function arrayToMap(array, makeKey) {
        var result = {};
        forEach(array, function (value) {
            result[makeKey(value)] = value;
        });
        return result;
    }
    ts.arrayToMap = arrayToMap;
    function formatStringFromArgs(text, args, baseIndex) {
        baseIndex = baseIndex || 0;
        return text.replace(/{(\d+)}/g, function (match, index) { return args[+index + baseIndex]; });
    }
    ts.localizedDiagnosticMessages = undefined;
    function getLocaleSpecificMessage(message) {
        return ts.localizedDiagnosticMessages && ts.localizedDiagnosticMessages[message] ? ts.localizedDiagnosticMessages[message] : message;
    }
    ts.getLocaleSpecificMessage = getLocaleSpecificMessage;
    function createFileDiagnostic(file, start, length, message) {
        Debug.assert(start >= 0, "start must be non-negative, is " + start);
        Debug.assert(length >= 0, "length must be non-negative, is " + length);
        var text = getLocaleSpecificMessage(message.key);
        if (arguments.length > 4) {
            text = formatStringFromArgs(text, arguments, 4);
        }
        return {
            file: file,
            start: start,
            length: length,
            messageText: text,
            category: message.category,
            code: message.code
        };
    }
    ts.createFileDiagnostic = createFileDiagnostic;
    function createCompilerDiagnostic(message) {
        var text = getLocaleSpecificMessage(message.key);
        if (arguments.length > 1) {
            text = formatStringFromArgs(text, arguments, 1);
        }
        return {
            file: undefined,
            start: undefined,
            length: undefined,
            messageText: text,
            category: message.category,
            code: message.code
        };
    }
    ts.createCompilerDiagnostic = createCompilerDiagnostic;
    function chainDiagnosticMessages(details, message) {
        var text = getLocaleSpecificMessage(message.key);
        if (arguments.length > 2) {
            text = formatStringFromArgs(text, arguments, 2);
        }
        return {
            messageText: text,
            category: message.category,
            code: message.code,
            next: details
        };
    }
    ts.chainDiagnosticMessages = chainDiagnosticMessages;
    function concatenateDiagnosticMessageChains(headChain, tailChain) {
        Debug.assert(!headChain.next);
        headChain.next = tailChain;
        return headChain;
    }
    ts.concatenateDiagnosticMessageChains = concatenateDiagnosticMessageChains;
    function compareValues(a, b) {
        if (a === b)
            return 0;
        if (a === undefined)
            return -1;
        if (b === undefined)
            return 1;
        return a < b ? -1 : 1;
    }
    ts.compareValues = compareValues;
    function getDiagnosticFileName(diagnostic) {
        return diagnostic.file ? diagnostic.file.fileName : undefined;
    }
    function compareDiagnostics(d1, d2) {
        return compareValues(getDiagnosticFileName(d1), getDiagnosticFileName(d2)) || compareValues(d1.start, d2.start) || compareValues(d1.length, d2.length) || compareValues(d1.code, d2.code) || compareMessageText(d1.messageText, d2.messageText) || 0;
    }
    ts.compareDiagnostics = compareDiagnostics;
    function compareMessageText(text1, text2) {
        while (text1 && text2) {
            var string1 = typeof text1 === "string" ? text1 : text1.messageText;
            var string2 = typeof text2 === "string" ? text2 : text2.messageText;
            var res = compareValues(string1, string2);
            if (res) {
                return res;
            }
            text1 = typeof text1 === "string" ? undefined : text1.next;
            text2 = typeof text2 === "string" ? undefined : text2.next;
        }
        if (!text1 && !text2) {
            return 0;
        }
        return text1 ? 1 : -1;
    }
    function sortAndDeduplicateDiagnostics(diagnostics) {
        return deduplicateSortedDiagnostics(diagnostics.sort(compareDiagnostics));
    }
    ts.sortAndDeduplicateDiagnostics = sortAndDeduplicateDiagnostics;
    function deduplicateSortedDiagnostics(diagnostics) {
        if (diagnostics.length < 2) {
            return diagnostics;
        }
        var newDiagnostics = [diagnostics[0]];
        var previousDiagnostic = diagnostics[0];
        for (var i = 1; i < diagnostics.length; i++) {
            var currentDiagnostic = diagnostics[i];
            var isDupe = compareDiagnostics(currentDiagnostic, previousDiagnostic) === 0;
            if (!isDupe) {
                newDiagnostics.push(currentDiagnostic);
                previousDiagnostic = currentDiagnostic;
            }
        }
        return newDiagnostics;
    }
    ts.deduplicateSortedDiagnostics = deduplicateSortedDiagnostics;
    function normalizeSlashes(path) {
        return path.replace(/\\/g, "/");
    }
    ts.normalizeSlashes = normalizeSlashes;
    function getRootLength(path) {
        if (path.charCodeAt(0) === 47) {
            if (path.charCodeAt(1) !== 47)
                return 1;
            var p1 = path.indexOf("/", 2);
            if (p1 < 0)
                return 2;
            var p2 = path.indexOf("/", p1 + 1);
            if (p2 < 0)
                return p1 + 1;
            return p2 + 1;
        }
        if (path.charCodeAt(1) === 58) {
            if (path.charCodeAt(2) === 47)
                return 3;
            return 2;
        }
        return 0;
    }
    ts.getRootLength = getRootLength;
    ts.directorySeparator = "/";
    function getNormalizedParts(normalizedSlashedPath, rootLength) {
        var parts = normalizedSlashedPath.substr(rootLength).split(ts.directorySeparator);
        var normalized = [];
        for (var i = 0; i < parts.length; i++) {
            var part = parts[i];
            if (part !== ".") {
                if (part === ".." && normalized.length > 0 && normalized[normalized.length - 1] !== "..") {
                    normalized.pop();
                }
                else {
                    normalized.push(part);
                }
            }
        }
        return normalized;
    }
    function normalizePath(path) {
        var path = normalizeSlashes(path);
        var rootLength = getRootLength(path);
        var normalized = getNormalizedParts(path, rootLength);
        return path.substr(0, rootLength) + normalized.join(ts.directorySeparator);
    }
    ts.normalizePath = normalizePath;
    function getDirectoryPath(path) {
        return path.substr(0, Math.max(getRootLength(path), path.lastIndexOf(ts.directorySeparator)));
    }
    ts.getDirectoryPath = getDirectoryPath;
    function isUrl(path) {
        return path && !isRootedDiskPath(path) && path.indexOf("://") !== -1;
    }
    ts.isUrl = isUrl;
    function isRootedDiskPath(path) {
        return getRootLength(path) !== 0;
    }
    ts.isRootedDiskPath = isRootedDiskPath;
    function normalizedPathComponents(path, rootLength) {
        var normalizedParts = getNormalizedParts(path, rootLength);
        return [path.substr(0, rootLength)].concat(normalizedParts);
    }
    function getNormalizedPathComponents(path, currentDirectory) {
        var path = normalizeSlashes(path);
        var rootLength = getRootLength(path);
        if (rootLength == 0) {
            path = combinePaths(normalizeSlashes(currentDirectory), path);
            rootLength = getRootLength(path);
        }
        return normalizedPathComponents(path, rootLength);
    }
    ts.getNormalizedPathComponents = getNormalizedPathComponents;
    function getNormalizedAbsolutePath(fileName, currentDirectory) {
        return getNormalizedPathFromPathComponents(getNormalizedPathComponents(fileName, currentDirectory));
    }
    ts.getNormalizedAbsolutePath = getNormalizedAbsolutePath;
    function getNormalizedPathFromPathComponents(pathComponents) {
        if (pathComponents && pathComponents.length) {
            return pathComponents[0] + pathComponents.slice(1).join(ts.directorySeparator);
        }
    }
    ts.getNormalizedPathFromPathComponents = getNormalizedPathFromPathComponents;
    function getNormalizedPathComponentsOfUrl(url) {
        var urlLength = url.length;
        var rootLength = url.indexOf("://") + "://".length;
        while (rootLength < urlLength) {
            if (url.charCodeAt(rootLength) === 47) {
                rootLength++;
            }
            else {
                break;
            }
        }
        if (rootLength === urlLength) {
            return [url];
        }
        var indexOfNextSlash = url.indexOf(ts.directorySeparator, rootLength);
        if (indexOfNextSlash !== -1) {
            rootLength = indexOfNextSlash + 1;
            return normalizedPathComponents(url, rootLength);
        }
        else {
            return [url + ts.directorySeparator];
        }
    }
    function getNormalizedPathOrUrlComponents(pathOrUrl, currentDirectory) {
        if (isUrl(pathOrUrl)) {
            return getNormalizedPathComponentsOfUrl(pathOrUrl);
        }
        else {
            return getNormalizedPathComponents(pathOrUrl, currentDirectory);
        }
    }
    function getRelativePathToDirectoryOrUrl(directoryPathOrUrl, relativeOrAbsolutePath, currentDirectory, getCanonicalFileName, isAbsolutePathAnUrl) {
        var pathComponents = getNormalizedPathOrUrlComponents(relativeOrAbsolutePath, currentDirectory);
        var directoryComponents = getNormalizedPathOrUrlComponents(directoryPathOrUrl, currentDirectory);
        if (directoryComponents.length > 1 && directoryComponents[directoryComponents.length - 1] === "") {
            directoryComponents.length--;
        }
        for (var joinStartIndex = 0; joinStartIndex < pathComponents.length && joinStartIndex < directoryComponents.length; joinStartIndex++) {
            if (getCanonicalFileName(directoryComponents[joinStartIndex]) !== getCanonicalFileName(pathComponents[joinStartIndex])) {
                break;
            }
        }
        if (joinStartIndex) {
            var relativePath = "";
            var relativePathComponents = pathComponents.slice(joinStartIndex, pathComponents.length);
            for (; joinStartIndex < directoryComponents.length; joinStartIndex++) {
                if (directoryComponents[joinStartIndex] !== "") {
                    relativePath = relativePath + ".." + ts.directorySeparator;
                }
            }
            return relativePath + relativePathComponents.join(ts.directorySeparator);
        }
        var absolutePath = getNormalizedPathFromPathComponents(pathComponents);
        if (isAbsolutePathAnUrl && isRootedDiskPath(absolutePath)) {
            absolutePath = "file:///" + absolutePath;
        }
        return absolutePath;
    }
    ts.getRelativePathToDirectoryOrUrl = getRelativePathToDirectoryOrUrl;
    function getBaseFileName(path) {
        var i = path.lastIndexOf(ts.directorySeparator);
        return i < 0 ? path : path.substring(i + 1);
    }
    ts.getBaseFileName = getBaseFileName;
    function combinePaths(path1, path2) {
        if (!(path1 && path1.length))
            return path2;
        if (!(path2 && path2.length))
            return path1;
        if (getRootLength(path2) !== 0)
            return path2;
        if (path1.charAt(path1.length - 1) === ts.directorySeparator)
            return path1 + path2;
        return path1 + ts.directorySeparator + path2;
    }
    ts.combinePaths = combinePaths;
    function fileExtensionIs(path, extension) {
        var pathLen = path.length;
        var extLen = extension.length;
        return pathLen > extLen && path.substr(pathLen - extLen, extLen) === extension;
    }
    ts.fileExtensionIs = fileExtensionIs;
    var supportedExtensions = [".d.ts", ".ts", ".js"];
    function removeFileExtension(path) {
        for (var i = 0; i < supportedExtensions.length; i++) {
            var ext = supportedExtensions[i];
            if (fileExtensionIs(path, ext)) {
                return path.substr(0, path.length - ext.length);
            }
        }
        return path;
    }
    ts.removeFileExtension = removeFileExtension;
    var backslashOrDoubleQuote = /[\"\\]/g;
    var escapedCharsRegExp = /[\0-\19\t\v\f\b\0\r\n\u2028\u2029\u0085]/g;
    var escapedCharsMap = {
        "\0": "\\0",
        "\t": "\\t",
        "\v": "\\v",
        "\f": "\\f",
        "\b": "\\b",
        "\r": "\\r",
        "\n": "\\n",
        "\\": "\\\\",
        "\"": "\\\"",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029",
        "\u0085": "\\u0085"
    };
    function escapeString(s) {
        s = backslashOrDoubleQuote.test(s) ? s.replace(backslashOrDoubleQuote, getReplacement) : s;
        s = escapedCharsRegExp.test(s) ? s.replace(escapedCharsRegExp, getReplacement) : s;
        return s;
        function getReplacement(c) {
            return escapedCharsMap[c] || unicodeEscape(c);
        }
        function unicodeEscape(c) {
            var hexCharCode = c.charCodeAt(0).toString(16);
            var paddedHexCode = ("0000" + hexCharCode).slice(-4);
            return "\\u" + paddedHexCode;
        }
    }
    ts.escapeString = escapeString;
    function getDefaultLibFileName(options) {
        return options.target === 2 ? "lib.es6.d.ts" : "lib.d.ts";
    }
    ts.getDefaultLibFileName = getDefaultLibFileName;
    function Symbol(flags, name) {
        this.flags = flags;
        this.name = name;
        this.declarations = undefined;
    }
    function Type(checker, flags) {
        this.flags = flags;
    }
    function Signature(checker) {
    }
    ts.objectAllocator = {
        getNodeConstructor: function (kind) {
            function Node() {
            }
            Node.prototype = {
                kind: kind,
                pos: 0,
                end: 0,
                flags: 0,
                parent: undefined
            };
            return Node;
        },
        getSymbolConstructor: function () { return Symbol; },
        getTypeConstructor: function () { return Type; },
        getSignatureConstructor: function () { return Signature; }
    };
    var Debug;
    (function (Debug) {
        var currentAssertionLevel = 0;
        function shouldAssert(level) {
            return currentAssertionLevel >= level;
        }
        Debug.shouldAssert = shouldAssert;
        function assert(expression, message, verboseDebugInfo) {
            if (!expression) {
                var verboseDebugString = "";
                if (verboseDebugInfo) {
                    verboseDebugString = "\r\nVerbose Debug Information: " + verboseDebugInfo();
                }
                throw new Error("Debug Failure. False expression: " + (message || "") + verboseDebugString);
            }
        }
        Debug.assert = assert;
        function fail(message) {
            Debug.assert(false, message);
        }
        Debug.fail = fail;
    })(Debug = ts.Debug || (ts.Debug = {}));
})(ts || (ts = {}));
var ts;
(function (ts) {
    ts.sys = (function () {
        function getWScriptSystem() {
            var fso = new ActiveXObject("Scripting.FileSystemObject");
            var fileStream = new ActiveXObject("ADODB.Stream");
            fileStream.Type = 2;
            var binaryStream = new ActiveXObject("ADODB.Stream");
            binaryStream.Type = 1;
            var args = [];
            for (var i = 0; i < WScript.Arguments.length; i++) {
                args[i] = WScript.Arguments.Item(i);
            }
            function readFile(fileName, encoding) {
                if (!fso.FileExists(fileName)) {
                    return undefined;
                }
                fileStream.Open();
                try {
                    if (encoding) {
                        fileStream.Charset = encoding;
                        fileStream.LoadFromFile(fileName);
                    }
                    else {
                        fileStream.Charset = "x-ansi";
                        fileStream.LoadFromFile(fileName);
                        var bom = fileStream.ReadText(2) || "";
                        fileStream.Position = 0;
                        fileStream.Charset = bom.length >= 2 && (bom.charCodeAt(0) === 0xFF && bom.charCodeAt(1) === 0xFE || bom.charCodeAt(0) === 0xFE && bom.charCodeAt(1) === 0xFF) ? "unicode" : "utf-8";
                    }
                    return fileStream.ReadText();
                }
                catch (e) {
                    throw e;
                }
                finally {
                    fileStream.Close();
                }
            }
            function writeFile(fileName, data, writeByteOrderMark) {
                fileStream.Open();
                binaryStream.Open();
                try {
                    fileStream.Charset = "utf-8";
                    fileStream.WriteText(data);
                    if (writeByteOrderMark) {
                        fileStream.Position = 0;
                    }
                    else {
                        fileStream.Position = 3;
                    }
                    fileStream.CopyTo(binaryStream);
                    binaryStream.SaveToFile(fileName, 2);
                }
                finally {
                    binaryStream.Close();
                    fileStream.Close();
                }
            }
            function getNames(collection) {
                var result = [];
                for (var e = new Enumerator(collection); !e.atEnd(); e.moveNext()) {
                    result.push(e.item().Name);
                }
                return result.sort();
            }
            function readDirectory(path, extension) {
                var result = [];
                visitDirectory(path);
                return result;
                function visitDirectory(path) {
                    var folder = fso.GetFolder(path || ".");
                    var files = getNames(folder.files);
                    for (var i = 0; i < files.length; i++) {
                        var name = files[i];
                        if (!extension || ts.fileExtensionIs(name, extension)) {
                            result.push(ts.combinePaths(path, name));
                        }
                    }
                    var subfolders = getNames(folder.subfolders);
                    for (var i = 0; i < subfolders.length; i++) {
                        visitDirectory(ts.combinePaths(path, subfolders[i]));
                    }
                }
            }
            return {
                args: args,
                newLine: "\r\n",
                useCaseSensitiveFileNames: false,
                write: function (s) {
                    WScript.StdOut.Write(s);
                },
                readFile: readFile,
                writeFile: writeFile,
                resolvePath: function (path) {
                    return fso.GetAbsolutePathName(path);
                },
                fileExists: function (path) {
                    return fso.FileExists(path);
                },
                directoryExists: function (path) {
                    return fso.FolderExists(path);
                },
                createDirectory: function (directoryName) {
                    if (!this.directoryExists(directoryName)) {
                        fso.CreateFolder(directoryName);
                    }
                },
                getExecutingFilePath: function () {
                    return WScript.ScriptFullName;
                },
                getCurrentDirectory: function () {
                    return new ActiveXObject("WScript.Shell").CurrentDirectory;
                },
                readDirectory: readDirectory,
                exit: function (exitCode) {
                    try {
                        WScript.Quit(exitCode);
                    }
                    catch (e) {
                    }
                }
            };
        }
        function getNodeSystem() {
            var _fs = require("fs");
            var _path = require("path");
            var _os = require('os');
            var platform = _os.platform();
            var useCaseSensitiveFileNames = platform !== "win32" && platform !== "win64" && platform !== "darwin";
            function readFile(fileName, encoding) {
                if (!_fs.existsSync(fileName)) {
                    return undefined;
                }
                var buffer = _fs.readFileSync(fileName);
                var len = buffer.length;
                if (len >= 2 && buffer[0] === 0xFE && buffer[1] === 0xFF) {
                    len &= ~1;
                    for (var i = 0; i < len; i += 2) {
                        var temp = buffer[i];
                        buffer[i] = buffer[i + 1];
                        buffer[i + 1] = temp;
                    }
                    return buffer.toString("utf16le", 2);
                }
                if (len >= 2 && buffer[0] === 0xFF && buffer[1] === 0xFE) {
                    return buffer.toString("utf16le", 2);
                }
                if (len >= 3 && buffer[0] === 0xEF && buffer[1] === 0xBB && buffer[2] === 0xBF) {
                    return buffer.toString("utf8", 3);
                }
                return buffer.toString("utf8");
            }
            function writeFile(fileName, data, writeByteOrderMark) {
                if (writeByteOrderMark) {
                    data = '\uFEFF' + data;
                }
                _fs.writeFileSync(fileName, data, "utf8");
            }
            function readDirectory(path, extension) {
                var result = [];
                visitDirectory(path);
                return result;
                function visitDirectory(path) {
                    var files = _fs.readdirSync(path || ".").sort();
                    var directories = [];
                    for (var i = 0; i < files.length; i++) {
                        var name = ts.combinePaths(path, files[i]);
                        var stat = _fs.lstatSync(name);
                        if (stat.isFile()) {
                            if (!extension || ts.fileExtensionIs(name, extension)) {
                                result.push(name);
                            }
                        }
                        else if (stat.isDirectory()) {
                            directories.push(name);
                        }
                    }
                    for (var i = 0; i < directories.length; i++) {
                        visitDirectory(directories[i]);
                    }
                }
            }
            return {
                args: process.argv.slice(2),
                newLine: _os.EOL,
                useCaseSensitiveFileNames: useCaseSensitiveFileNames,
                write: function (s) {
                    _fs.writeSync(1, s);
                },
                readFile: readFile,
                writeFile: writeFile,
                watchFile: function (fileName, callback) {
                    _fs.watchFile(fileName, { persistent: true, interval: 250 }, fileChanged);
                    return {
                        close: function () {
                            _fs.unwatchFile(fileName, fileChanged);
                        }
                    };
                    function fileChanged(curr, prev) {
                        if (+curr.mtime <= +prev.mtime) {
                            return;
                        }
                        callback(fileName);
                    }
                    ;
                },
                resolvePath: function (path) {
                    return _path.resolve(path);
                },
                fileExists: function (path) {
                    return _fs.existsSync(path);
                },
                directoryExists: function (path) {
                    return _fs.existsSync(path) && _fs.statSync(path).isDirectory();
                },
                createDirectory: function (directoryName) {
                    if (!this.directoryExists(directoryName)) {
                        _fs.mkdirSync(directoryName);
                    }
                },
                getExecutingFilePath: function () {
                    return __filename;
                },
                getCurrentDirectory: function () {
                    return process.cwd();
                },
                readDirectory: readDirectory,
                getMemoryUsage: function () {
                    if (global.gc) {
                        global.gc();
                    }
                    return process.memoryUsage().heapUsed;
                },
                exit: function (exitCode) {
                    process.exit(exitCode);
                }
            };
        }
        if (typeof WScript !== "undefined" && typeof ActiveXObject === "function") {
            return getWScriptSystem();
        }
        else if (typeof module !== "undefined" && module.exports) {
            return getNodeSystem();
        }
        else {
            return undefined;
        }
    })();
})(ts || (ts = {}));
var ts;
(function (ts) {
    ts.Diagnostics = {
        Unterminated_string_literal: { code: 1002, category: 1, key: "Unterminated string literal." },
        Identifier_expected: { code: 1003, category: 1, key: "Identifier expected." },
        _0_expected: { code: 1005, category: 1, key: "'{0}' expected." },
        A_file_cannot_have_a_reference_to_itself: { code: 1006, category: 1, key: "A file cannot have a reference to itself." },
        Trailing_comma_not_allowed: { code: 1009, category: 1, key: "Trailing comma not allowed." },
        Asterisk_Slash_expected: { code: 1010, category: 1, key: "'*/' expected." },
        Unexpected_token: { code: 1012, category: 1, key: "Unexpected token." },
        Catch_clause_parameter_cannot_have_a_type_annotation: { code: 1013, category: 1, key: "Catch clause parameter cannot have a type annotation." },
        A_rest_parameter_must_be_last_in_a_parameter_list: { code: 1014, category: 1, key: "A rest parameter must be last in a parameter list." },
        Parameter_cannot_have_question_mark_and_initializer: { code: 1015, category: 1, key: "Parameter cannot have question mark and initializer." },
        A_required_parameter_cannot_follow_an_optional_parameter: { code: 1016, category: 1, key: "A required parameter cannot follow an optional parameter." },
        An_index_signature_cannot_have_a_rest_parameter: { code: 1017, category: 1, key: "An index signature cannot have a rest parameter." },
        An_index_signature_parameter_cannot_have_an_accessibility_modifier: { code: 1018, category: 1, key: "An index signature parameter cannot have an accessibility modifier." },
        An_index_signature_parameter_cannot_have_a_question_mark: { code: 1019, category: 1, key: "An index signature parameter cannot have a question mark." },
        An_index_signature_parameter_cannot_have_an_initializer: { code: 1020, category: 1, key: "An index signature parameter cannot have an initializer." },
        An_index_signature_must_have_a_type_annotation: { code: 1021, category: 1, key: "An index signature must have a type annotation." },
        An_index_signature_parameter_must_have_a_type_annotation: { code: 1022, category: 1, key: "An index signature parameter must have a type annotation." },
        An_index_signature_parameter_type_must_be_string_or_number: { code: 1023, category: 1, key: "An index signature parameter type must be 'string' or 'number'." },
        A_class_or_interface_declaration_can_only_have_one_extends_clause: { code: 1024, category: 1, key: "A class or interface declaration can only have one 'extends' clause." },
        An_extends_clause_must_precede_an_implements_clause: { code: 1025, category: 1, key: "An 'extends' clause must precede an 'implements' clause." },
        A_class_can_only_extend_a_single_class: { code: 1026, category: 1, key: "A class can only extend a single class." },
        A_class_declaration_can_only_have_one_implements_clause: { code: 1027, category: 1, key: "A class declaration can only have one 'implements' clause." },
        Accessibility_modifier_already_seen: { code: 1028, category: 1, key: "Accessibility modifier already seen." },
        _0_modifier_must_precede_1_modifier: { code: 1029, category: 1, key: "'{0}' modifier must precede '{1}' modifier." },
        _0_modifier_already_seen: { code: 1030, category: 1, key: "'{0}' modifier already seen." },
        _0_modifier_cannot_appear_on_a_class_element: { code: 1031, category: 1, key: "'{0}' modifier cannot appear on a class element." },
        An_interface_declaration_cannot_have_an_implements_clause: { code: 1032, category: 1, key: "An interface declaration cannot have an 'implements' clause." },
        super_must_be_followed_by_an_argument_list_or_member_access: { code: 1034, category: 1, key: "'super' must be followed by an argument list or member access." },
        Only_ambient_modules_can_use_quoted_names: { code: 1035, category: 1, key: "Only ambient modules can use quoted names." },
        Statements_are_not_allowed_in_ambient_contexts: { code: 1036, category: 1, key: "Statements are not allowed in ambient contexts." },
        A_declare_modifier_cannot_be_used_in_an_already_ambient_context: { code: 1038, category: 1, key: "A 'declare' modifier cannot be used in an already ambient context." },
        Initializers_are_not_allowed_in_ambient_contexts: { code: 1039, category: 1, key: "Initializers are not allowed in ambient contexts." },
        _0_modifier_cannot_appear_on_a_module_element: { code: 1044, category: 1, key: "'{0}' modifier cannot appear on a module element." },
        A_declare_modifier_cannot_be_used_with_an_interface_declaration: { code: 1045, category: 1, key: "A 'declare' modifier cannot be used with an interface declaration." },
        A_declare_modifier_is_required_for_a_top_level_declaration_in_a_d_ts_file: { code: 1046, category: 1, key: "A 'declare' modifier is required for a top level declaration in a .d.ts file." },
        A_rest_parameter_cannot_be_optional: { code: 1047, category: 1, key: "A rest parameter cannot be optional." },
        A_rest_parameter_cannot_have_an_initializer: { code: 1048, category: 1, key: "A rest parameter cannot have an initializer." },
        A_set_accessor_must_have_exactly_one_parameter: { code: 1049, category: 1, key: "A 'set' accessor must have exactly one parameter." },
        A_set_accessor_cannot_have_an_optional_parameter: { code: 1051, category: 1, key: "A 'set' accessor cannot have an optional parameter." },
        A_set_accessor_parameter_cannot_have_an_initializer: { code: 1052, category: 1, key: "A 'set' accessor parameter cannot have an initializer." },
        A_set_accessor_cannot_have_rest_parameter: { code: 1053, category: 1, key: "A 'set' accessor cannot have rest parameter." },
        A_get_accessor_cannot_have_parameters: { code: 1054, category: 1, key: "A 'get' accessor cannot have parameters." },
        Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher: { code: 1056, category: 1, key: "Accessors are only available when targeting ECMAScript 5 and higher." },
        Enum_member_must_have_initializer: { code: 1061, category: 1, key: "Enum member must have initializer." },
        An_export_assignment_cannot_be_used_in_an_internal_module: { code: 1063, category: 1, key: "An export assignment cannot be used in an internal module." },
        Ambient_enum_elements_can_only_have_integer_literal_initializers: { code: 1066, category: 1, key: "Ambient enum elements can only have integer literal initializers." },
        Unexpected_token_A_constructor_method_accessor_or_property_was_expected: { code: 1068, category: 1, key: "Unexpected token. A constructor, method, accessor, or property was expected." },
        A_declare_modifier_cannot_be_used_with_an_import_declaration: { code: 1079, category: 1, key: "A 'declare' modifier cannot be used with an import declaration." },
        Invalid_reference_directive_syntax: { code: 1084, category: 1, key: "Invalid 'reference' directive syntax." },
        Octal_literals_are_not_available_when_targeting_ECMAScript_5_and_higher: { code: 1085, category: 1, key: "Octal literals are not available when targeting ECMAScript 5 and higher." },
        An_accessor_cannot_be_declared_in_an_ambient_context: { code: 1086, category: 1, key: "An accessor cannot be declared in an ambient context." },
        _0_modifier_cannot_appear_on_a_constructor_declaration: { code: 1089, category: 1, key: "'{0}' modifier cannot appear on a constructor declaration." },
        _0_modifier_cannot_appear_on_a_parameter: { code: 1090, category: 1, key: "'{0}' modifier cannot appear on a parameter." },
        Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement: { code: 1091, category: 1, key: "Only a single variable declaration is allowed in a 'for...in' statement." },
        Type_parameters_cannot_appear_on_a_constructor_declaration: { code: 1092, category: 1, key: "Type parameters cannot appear on a constructor declaration." },
        Type_annotation_cannot_appear_on_a_constructor_declaration: { code: 1093, category: 1, key: "Type annotation cannot appear on a constructor declaration." },
        An_accessor_cannot_have_type_parameters: { code: 1094, category: 1, key: "An accessor cannot have type parameters." },
        A_set_accessor_cannot_have_a_return_type_annotation: { code: 1095, category: 1, key: "A 'set' accessor cannot have a return type annotation." },
        An_index_signature_must_have_exactly_one_parameter: { code: 1096, category: 1, key: "An index signature must have exactly one parameter." },
        _0_list_cannot_be_empty: { code: 1097, category: 1, key: "'{0}' list cannot be empty." },
        Type_parameter_list_cannot_be_empty: { code: 1098, category: 1, key: "Type parameter list cannot be empty." },
        Type_argument_list_cannot_be_empty: { code: 1099, category: 1, key: "Type argument list cannot be empty." },
        Invalid_use_of_0_in_strict_mode: { code: 1100, category: 1, key: "Invalid use of '{0}' in strict mode." },
        with_statements_are_not_allowed_in_strict_mode: { code: 1101, category: 1, key: "'with' statements are not allowed in strict mode." },
        delete_cannot_be_called_on_an_identifier_in_strict_mode: { code: 1102, category: 1, key: "'delete' cannot be called on an identifier in strict mode." },
        A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement: { code: 1104, category: 1, key: "A 'continue' statement can only be used within an enclosing iteration statement." },
        A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement: { code: 1105, category: 1, key: "A 'break' statement can only be used within an enclosing iteration or switch statement." },
        Jump_target_cannot_cross_function_boundary: { code: 1107, category: 1, key: "Jump target cannot cross function boundary." },
        A_return_statement_can_only_be_used_within_a_function_body: { code: 1108, category: 1, key: "A 'return' statement can only be used within a function body." },
        Expression_expected: { code: 1109, category: 1, key: "Expression expected." },
        Type_expected: { code: 1110, category: 1, key: "Type expected." },
        A_class_member_cannot_be_declared_optional: { code: 1112, category: 1, key: "A class member cannot be declared optional." },
        A_default_clause_cannot_appear_more_than_once_in_a_switch_statement: { code: 1113, category: 1, key: "A 'default' clause cannot appear more than once in a 'switch' statement." },
        Duplicate_label_0: { code: 1114, category: 1, key: "Duplicate label '{0}'" },
        A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement: { code: 1115, category: 1, key: "A 'continue' statement can only jump to a label of an enclosing iteration statement." },
        A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement: { code: 1116, category: 1, key: "A 'break' statement can only jump to a label of an enclosing statement." },
        An_object_literal_cannot_have_multiple_properties_with_the_same_name_in_strict_mode: { code: 1117, category: 1, key: "An object literal cannot have multiple properties with the same name in strict mode." },
        An_object_literal_cannot_have_multiple_get_Slashset_accessors_with_the_same_name: { code: 1118, category: 1, key: "An object literal cannot have multiple get/set accessors with the same name." },
        An_object_literal_cannot_have_property_and_accessor_with_the_same_name: { code: 1119, category: 1, key: "An object literal cannot have property and accessor with the same name." },
        An_export_assignment_cannot_have_modifiers: { code: 1120, category: 1, key: "An export assignment cannot have modifiers." },
        Octal_literals_are_not_allowed_in_strict_mode: { code: 1121, category: 1, key: "Octal literals are not allowed in strict mode." },
        A_tuple_type_element_list_cannot_be_empty: { code: 1122, category: 1, key: "A tuple type element list cannot be empty." },
        Variable_declaration_list_cannot_be_empty: { code: 1123, category: 1, key: "Variable declaration list cannot be empty." },
        Digit_expected: { code: 1124, category: 1, key: "Digit expected." },
        Hexadecimal_digit_expected: { code: 1125, category: 1, key: "Hexadecimal digit expected." },
        Unexpected_end_of_text: { code: 1126, category: 1, key: "Unexpected end of text." },
        Invalid_character: { code: 1127, category: 1, key: "Invalid character." },
        Declaration_or_statement_expected: { code: 1128, category: 1, key: "Declaration or statement expected." },
        Statement_expected: { code: 1129, category: 1, key: "Statement expected." },
        case_or_default_expected: { code: 1130, category: 1, key: "'case' or 'default' expected." },
        Property_or_signature_expected: { code: 1131, category: 1, key: "Property or signature expected." },
        Enum_member_expected: { code: 1132, category: 1, key: "Enum member expected." },
        Type_reference_expected: { code: 1133, category: 1, key: "Type reference expected." },
        Variable_declaration_expected: { code: 1134, category: 1, key: "Variable declaration expected." },
        Argument_expression_expected: { code: 1135, category: 1, key: "Argument expression expected." },
        Property_assignment_expected: { code: 1136, category: 1, key: "Property assignment expected." },
        Expression_or_comma_expected: { code: 1137, category: 1, key: "Expression or comma expected." },
        Parameter_declaration_expected: { code: 1138, category: 1, key: "Parameter declaration expected." },
        Type_parameter_declaration_expected: { code: 1139, category: 1, key: "Type parameter declaration expected." },
        Type_argument_expected: { code: 1140, category: 1, key: "Type argument expected." },
        String_literal_expected: { code: 1141, category: 1, key: "String literal expected." },
        Line_break_not_permitted_here: { code: 1142, category: 1, key: "Line break not permitted here." },
        or_expected: { code: 1144, category: 1, key: "'{' or ';' expected." },
        Modifiers_not_permitted_on_index_signature_members: { code: 1145, category: 1, key: "Modifiers not permitted on index signature members." },
        Declaration_expected: { code: 1146, category: 1, key: "Declaration expected." },
        Import_declarations_in_an_internal_module_cannot_reference_an_external_module: { code: 1147, category: 1, key: "Import declarations in an internal module cannot reference an external module." },
        Cannot_compile_external_modules_unless_the_module_flag_is_provided: { code: 1148, category: 1, key: "Cannot compile external modules unless the '--module' flag is provided." },
        File_name_0_differs_from_already_included_file_name_1_only_in_casing: { code: 1149, category: 1, key: "File name '{0}' differs from already included file name '{1}' only in casing" },
        new_T_cannot_be_used_to_create_an_array_Use_new_Array_T_instead: { code: 1150, category: 1, key: "'new T[]' cannot be used to create an array. Use 'new Array<T>()' instead." },
        var_let_or_const_expected: { code: 1152, category: 1, key: "'var', 'let' or 'const' expected." },
        let_declarations_are_only_available_when_targeting_ECMAScript_6_and_higher: { code: 1153, category: 1, key: "'let' declarations are only available when targeting ECMAScript 6 and higher." },
        const_declarations_are_only_available_when_targeting_ECMAScript_6_and_higher: { code: 1154, category: 1, key: "'const' declarations are only available when targeting ECMAScript 6 and higher." },
        const_declarations_must_be_initialized: { code: 1155, category: 1, key: "'const' declarations must be initialized" },
        const_declarations_can_only_be_declared_inside_a_block: { code: 1156, category: 1, key: "'const' declarations can only be declared inside a block." },
        let_declarations_can_only_be_declared_inside_a_block: { code: 1157, category: 1, key: "'let' declarations can only be declared inside a block." },
        Tagged_templates_are_only_available_when_targeting_ECMAScript_6_and_higher: { code: 1159, category: 1, key: "Tagged templates are only available when targeting ECMAScript 6 and higher." },
        Unterminated_template_literal: { code: 1160, category: 1, key: "Unterminated template literal." },
        Unterminated_regular_expression_literal: { code: 1161, category: 1, key: "Unterminated regular expression literal." },
        An_object_member_cannot_be_declared_optional: { code: 1162, category: 1, key: "An object member cannot be declared optional." },
        yield_expression_must_be_contained_within_a_generator_declaration: { code: 1163, category: 1, key: "'yield' expression must be contained_within a generator declaration." },
        Computed_property_names_are_not_allowed_in_enums: { code: 1164, category: 1, key: "Computed property names are not allowed in enums." },
        Computed_property_names_are_not_allowed_in_an_ambient_context: { code: 1165, category: 1, key: "Computed property names are not allowed in an ambient context." },
        Computed_property_names_are_not_allowed_in_class_property_declarations: { code: 1166, category: 1, key: "Computed property names are not allowed in class property declarations." },
        Computed_property_names_are_only_available_when_targeting_ECMAScript_6_and_higher: { code: 1167, category: 1, key: "Computed property names are only available when targeting ECMAScript 6 and higher." },
        Computed_property_names_are_not_allowed_in_method_overloads: { code: 1168, category: 1, key: "Computed property names are not allowed in method overloads." },
        Computed_property_names_are_not_allowed_in_interfaces: { code: 1169, category: 1, key: "Computed property names are not allowed in interfaces." },
        Computed_property_names_are_not_allowed_in_type_literals: { code: 1170, category: 1, key: "Computed property names are not allowed in type literals." },
        A_comma_expression_is_not_allowed_in_a_computed_property_name: { code: 1171, category: 1, key: "A comma expression is not allowed in a computed property name." },
        extends_clause_already_seen: { code: 1172, category: 1, key: "'extends' clause already seen." },
        extends_clause_must_precede_implements_clause: { code: 1173, category: 1, key: "'extends' clause must precede 'implements' clause." },
        Classes_can_only_extend_a_single_class: { code: 1174, category: 1, key: "Classes can only extend a single class." },
        implements_clause_already_seen: { code: 1175, category: 1, key: "'implements' clause already seen." },
        Interface_declaration_cannot_have_implements_clause: { code: 1176, category: 1, key: "Interface declaration cannot have 'implements' clause." },
        Binary_digit_expected: { code: 1177, category: 1, key: "Binary digit expected." },
        Octal_digit_expected: { code: 1178, category: 1, key: "Octal digit expected." },
        Unexpected_token_expected: { code: 1179, category: 1, key: "Unexpected token. '{' expected." },
        Property_destructuring_pattern_expected: { code: 1180, category: 1, key: "Property destructuring pattern expected." },
        Array_element_destructuring_pattern_expected: { code: 1181, category: 1, key: "Array element destructuring pattern expected." },
        A_destructuring_declaration_must_have_an_initializer: { code: 1182, category: 1, key: "A destructuring declaration must have an initializer." },
        Destructuring_declarations_are_not_allowed_in_ambient_contexts: { code: 1183, category: 1, key: "Destructuring declarations are not allowed in ambient contexts." },
        An_implementation_cannot_be_declared_in_ambient_contexts: { code: 1184, category: 1, key: "An implementation cannot be declared in ambient contexts." },
        Modifiers_cannot_appear_here: { code: 1184, category: 1, key: "Modifiers cannot appear here." },
        Merge_conflict_marker_encountered: { code: 1185, category: 1, key: "Merge conflict marker encountered." },
        A_rest_element_cannot_have_an_initializer: { code: 1186, category: 1, key: "A rest element cannot have an initializer." },
        A_parameter_property_may_not_be_a_binding_pattern: { code: 1187, category: 1, key: "A parameter property may not be a binding pattern." },
        Duplicate_identifier_0: { code: 2300, category: 1, key: "Duplicate identifier '{0}'." },
        Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor: { code: 2301, category: 1, key: "Initializer of instance member variable '{0}' cannot reference identifier '{1}' declared in the constructor." },
        Static_members_cannot_reference_class_type_parameters: { code: 2302, category: 1, key: "Static members cannot reference class type parameters." },
        Circular_definition_of_import_alias_0: { code: 2303, category: 1, key: "Circular definition of import alias '{0}'." },
        Cannot_find_name_0: { code: 2304, category: 1, key: "Cannot find name '{0}'." },
        Module_0_has_no_exported_member_1: { code: 2305, category: 1, key: "Module '{0}' has no exported member '{1}'." },
        File_0_is_not_an_external_module: { code: 2306, category: 1, key: "File '{0}' is not an external module." },
        Cannot_find_external_module_0: { code: 2307, category: 1, key: "Cannot find external module '{0}'." },
        A_module_cannot_have_more_than_one_export_assignment: { code: 2308, category: 1, key: "A module cannot have more than one export assignment." },
        An_export_assignment_cannot_be_used_in_a_module_with_other_exported_elements: { code: 2309, category: 1, key: "An export assignment cannot be used in a module with other exported elements." },
        Type_0_recursively_references_itself_as_a_base_type: { code: 2310, category: 1, key: "Type '{0}' recursively references itself as a base type." },
        A_class_may_only_extend_another_class: { code: 2311, category: 1, key: "A class may only extend another class." },
        An_interface_may_only_extend_a_class_or_another_interface: { code: 2312, category: 1, key: "An interface may only extend a class or another interface." },
        Constraint_of_a_type_parameter_cannot_reference_any_type_parameter_from_the_same_type_parameter_list: { code: 2313, category: 1, key: "Constraint of a type parameter cannot reference any type parameter from the same type parameter list." },
        Generic_type_0_requires_1_type_argument_s: { code: 2314, category: 1, key: "Generic type '{0}' requires {1} type argument(s)." },
        Type_0_is_not_generic: { code: 2315, category: 1, key: "Type '{0}' is not generic." },
        Global_type_0_must_be_a_class_or_interface_type: { code: 2316, category: 1, key: "Global type '{0}' must be a class or interface type." },
        Global_type_0_must_have_1_type_parameter_s: { code: 2317, category: 1, key: "Global type '{0}' must have {1} type parameter(s)." },
        Cannot_find_global_type_0: { code: 2318, category: 1, key: "Cannot find global type '{0}'." },
        Named_properties_0_of_types_1_and_2_are_not_identical: { code: 2319, category: 1, key: "Named properties '{0}' of types '{1}' and '{2}' are not identical." },
        Interface_0_cannot_simultaneously_extend_types_1_and_2: { code: 2320, category: 1, key: "Interface '{0}' cannot simultaneously extend types '{1}' and '{2}'." },
        Excessive_stack_depth_comparing_types_0_and_1: { code: 2321, category: 1, key: "Excessive stack depth comparing types '{0}' and '{1}'." },
        Type_0_is_not_assignable_to_type_1: { code: 2322, category: 1, key: "Type '{0}' is not assignable to type '{1}'." },
        Property_0_is_missing_in_type_1: { code: 2324, category: 1, key: "Property '{0}' is missing in type '{1}'." },
        Property_0_is_private_in_type_1_but_not_in_type_2: { code: 2325, category: 1, key: "Property '{0}' is private in type '{1}' but not in type '{2}'." },
        Types_of_property_0_are_incompatible: { code: 2326, category: 1, key: "Types of property '{0}' are incompatible." },
        Property_0_is_optional_in_type_1_but_required_in_type_2: { code: 2327, category: 1, key: "Property '{0}' is optional in type '{1}' but required in type '{2}'." },
        Types_of_parameters_0_and_1_are_incompatible: { code: 2328, category: 1, key: "Types of parameters '{0}' and '{1}' are incompatible." },
        Index_signature_is_missing_in_type_0: { code: 2329, category: 1, key: "Index signature is missing in type '{0}'." },
        Index_signatures_are_incompatible: { code: 2330, category: 1, key: "Index signatures are incompatible." },
        this_cannot_be_referenced_in_a_module_body: { code: 2331, category: 1, key: "'this' cannot be referenced in a module body." },
        this_cannot_be_referenced_in_current_location: { code: 2332, category: 1, key: "'this' cannot be referenced in current location." },
        this_cannot_be_referenced_in_constructor_arguments: { code: 2333, category: 1, key: "'this' cannot be referenced in constructor arguments." },
        this_cannot_be_referenced_in_a_static_property_initializer: { code: 2334, category: 1, key: "'this' cannot be referenced in a static property initializer." },
        super_can_only_be_referenced_in_a_derived_class: { code: 2335, category: 1, key: "'super' can only be referenced in a derived class." },
        super_cannot_be_referenced_in_constructor_arguments: { code: 2336, category: 1, key: "'super' cannot be referenced in constructor arguments." },
        Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors: { code: 2337, category: 1, key: "Super calls are not permitted outside constructors or in nested functions inside constructors" },
        super_property_access_is_permitted_only_in_a_constructor_member_function_or_member_accessor_of_a_derived_class: { code: 2338, category: 1, key: "'super' property access is permitted only in a constructor, member function, or member accessor of a derived class" },
        Property_0_does_not_exist_on_type_1: { code: 2339, category: 1, key: "Property '{0}' does not exist on type '{1}'." },
        Only_public_and_protected_methods_of_the_base_class_are_accessible_via_the_super_keyword: { code: 2340, category: 1, key: "Only public and protected methods of the base class are accessible via the 'super' keyword" },
        Property_0_is_private_and_only_accessible_within_class_1: { code: 2341, category: 1, key: "Property '{0}' is private and only accessible within class '{1}'." },
        An_index_expression_argument_must_be_of_type_string_number_or_any: { code: 2342, category: 1, key: "An index expression argument must be of type 'string', 'number', or 'any'." },
        Type_0_does_not_satisfy_the_constraint_1: { code: 2344, category: 1, key: "Type '{0}' does not satisfy the constraint '{1}'." },
        Argument_of_type_0_is_not_assignable_to_parameter_of_type_1: { code: 2345, category: 1, key: "Argument of type '{0}' is not assignable to parameter of type '{1}'." },
        Supplied_parameters_do_not_match_any_signature_of_call_target: { code: 2346, category: 1, key: "Supplied parameters do not match any signature of call target." },
        Untyped_function_calls_may_not_accept_type_arguments: { code: 2347, category: 1, key: "Untyped function calls may not accept type arguments." },
        Value_of_type_0_is_not_callable_Did_you_mean_to_include_new: { code: 2348, category: 1, key: "Value of type '{0}' is not callable. Did you mean to include 'new'?" },
        Cannot_invoke_an_expression_whose_type_lacks_a_call_signature: { code: 2349, category: 1, key: "Cannot invoke an expression whose type lacks a call signature." },
        Only_a_void_function_can_be_called_with_the_new_keyword: { code: 2350, category: 1, key: "Only a void function can be called with the 'new' keyword." },
        Cannot_use_new_with_an_expression_whose_type_lacks_a_call_or_construct_signature: { code: 2351, category: 1, key: "Cannot use 'new' with an expression whose type lacks a call or construct signature." },
        Neither_type_0_nor_type_1_is_assignable_to_the_other: { code: 2352, category: 1, key: "Neither type '{0}' nor type '{1}' is assignable to the other." },
        No_best_common_type_exists_among_return_expressions: { code: 2354, category: 1, key: "No best common type exists among return expressions." },
        A_function_whose_declared_type_is_neither_void_nor_any_must_return_a_value_or_consist_of_a_single_throw_statement: { code: 2355, category: 1, key: "A function whose declared type is neither 'void' nor 'any' must return a value or consist of a single 'throw' statement." },
        An_arithmetic_operand_must_be_of_type_any_number_or_an_enum_type: { code: 2356, category: 1, key: "An arithmetic operand must be of type 'any', 'number' or an enum type." },
        The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_property_or_indexer: { code: 2357, category: 1, key: "The operand of an increment or decrement operator must be a variable, property or indexer." },
        The_left_hand_side_of_an_instanceof_expression_must_be_of_type_any_an_object_type_or_a_type_parameter: { code: 2358, category: 1, key: "The left-hand side of an 'instanceof' expression must be of type 'any', an object type or a type parameter." },
        The_right_hand_side_of_an_instanceof_expression_must_be_of_type_any_or_of_a_type_assignable_to_the_Function_interface_type: { code: 2359, category: 1, key: "The right-hand side of an 'instanceof' expression must be of type 'any' or of a type assignable to the 'Function' interface type." },
        The_left_hand_side_of_an_in_expression_must_be_of_types_any_string_or_number: { code: 2360, category: 1, key: "The left-hand side of an 'in' expression must be of types 'any', 'string' or 'number'." },
        The_right_hand_side_of_an_in_expression_must_be_of_type_any_an_object_type_or_a_type_parameter: { code: 2361, category: 1, key: "The right-hand side of an 'in' expression must be of type 'any', an object type or a type parameter" },
        The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type: { code: 2362, category: 1, key: "The left-hand side of an arithmetic operation must be of type 'any', 'number' or an enum type." },
        The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type: { code: 2363, category: 1, key: "The right-hand side of an arithmetic operation must be of type 'any', 'number' or an enum type." },
        Invalid_left_hand_side_of_assignment_expression: { code: 2364, category: 1, key: "Invalid left-hand side of assignment expression." },
        Operator_0_cannot_be_applied_to_types_1_and_2: { code: 2365, category: 1, key: "Operator '{0}' cannot be applied to types '{1}' and '{2}'." },
        Type_parameter_name_cannot_be_0: { code: 2368, category: 1, key: "Type parameter name cannot be '{0}'" },
        A_parameter_property_is_only_allowed_in_a_constructor_implementation: { code: 2369, category: 1, key: "A parameter property is only allowed in a constructor implementation." },
        A_rest_parameter_must_be_of_an_array_type: { code: 2370, category: 1, key: "A rest parameter must be of an array type." },
        A_parameter_initializer_is_only_allowed_in_a_function_or_constructor_implementation: { code: 2371, category: 1, key: "A parameter initializer is only allowed in a function or constructor implementation." },
        Parameter_0_cannot_be_referenced_in_its_initializer: { code: 2372, category: 1, key: "Parameter '{0}' cannot be referenced in its initializer." },
        Initializer_of_parameter_0_cannot_reference_identifier_1_declared_after_it: { code: 2373, category: 1, key: "Initializer of parameter '{0}' cannot reference identifier '{1}' declared after it." },
        Duplicate_string_index_signature: { code: 2374, category: 1, key: "Duplicate string index signature." },
        Duplicate_number_index_signature: { code: 2375, category: 1, key: "Duplicate number index signature." },
        A_super_call_must_be_the_first_statement_in_the_constructor_when_a_class_contains_initialized_properties_or_has_parameter_properties: { code: 2376, category: 1, key: "A 'super' call must be the first statement in the constructor when a class contains initialized properties or has parameter properties." },
        Constructors_for_derived_classes_must_contain_a_super_call: { code: 2377, category: 1, key: "Constructors for derived classes must contain a 'super' call." },
        A_get_accessor_must_return_a_value_or_consist_of_a_single_throw_statement: { code: 2378, category: 1, key: "A 'get' accessor must return a value or consist of a single 'throw' statement." },
        Getter_and_setter_accessors_do_not_agree_in_visibility: { code: 2379, category: 1, key: "Getter and setter accessors do not agree in visibility." },
        get_and_set_accessor_must_have_the_same_type: { code: 2380, category: 1, key: "'get' and 'set' accessor must have the same type." },
        A_signature_with_an_implementation_cannot_use_a_string_literal_type: { code: 2381, category: 1, key: "A signature with an implementation cannot use a string literal type." },
        Specialized_overload_signature_is_not_assignable_to_any_non_specialized_signature: { code: 2382, category: 1, key: "Specialized overload signature is not assignable to any non-specialized signature." },
        Overload_signatures_must_all_be_exported_or_not_exported: { code: 2383, category: 1, key: "Overload signatures must all be exported or not exported." },
        Overload_signatures_must_all_be_ambient_or_non_ambient: { code: 2384, category: 1, key: "Overload signatures must all be ambient or non-ambient." },
        Overload_signatures_must_all_be_public_private_or_protected: { code: 2385, category: 1, key: "Overload signatures must all be public, private or protected." },
        Overload_signatures_must_all_be_optional_or_required: { code: 2386, category: 1, key: "Overload signatures must all be optional or required." },
        Function_overload_must_be_static: { code: 2387, category: 1, key: "Function overload must be static." },
        Function_overload_must_not_be_static: { code: 2388, category: 1, key: "Function overload must not be static." },
        Function_implementation_name_must_be_0: { code: 2389, category: 1, key: "Function implementation name must be '{0}'." },
        Constructor_implementation_is_missing: { code: 2390, category: 1, key: "Constructor implementation is missing." },
        Function_implementation_is_missing_or_not_immediately_following_the_declaration: { code: 2391, category: 1, key: "Function implementation is missing or not immediately following the declaration." },
        Multiple_constructor_implementations_are_not_allowed: { code: 2392, category: 1, key: "Multiple constructor implementations are not allowed." },
        Duplicate_function_implementation: { code: 2393, category: 1, key: "Duplicate function implementation." },
        Overload_signature_is_not_compatible_with_function_implementation: { code: 2394, category: 1, key: "Overload signature is not compatible with function implementation." },
        Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local: { code: 2395, category: 1, key: "Individual declarations in merged declaration {0} must be all exported or all local." },
        Duplicate_identifier_arguments_Compiler_uses_arguments_to_initialize_rest_parameters: { code: 2396, category: 1, key: "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters." },
        Duplicate_identifier_this_Compiler_uses_variable_declaration_this_to_capture_this_reference: { code: 2399, category: 1, key: "Duplicate identifier '_this'. Compiler uses variable declaration '_this' to capture 'this' reference." },
        Expression_resolves_to_variable_declaration_this_that_compiler_uses_to_capture_this_reference: { code: 2400, category: 1, key: "Expression resolves to variable declaration '_this' that compiler uses to capture 'this' reference." },
        Duplicate_identifier_super_Compiler_uses_super_to_capture_base_class_reference: { code: 2401, category: 1, key: "Duplicate identifier '_super'. Compiler uses '_super' to capture base class reference." },
        Expression_resolves_to_super_that_compiler_uses_to_capture_base_class_reference: { code: 2402, category: 1, key: "Expression resolves to '_super' that compiler uses to capture base class reference." },
        Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_type_2: { code: 2403, category: 1, key: "Subsequent variable declarations must have the same type.  Variable '{0}' must be of type '{1}', but here has type '{2}'." },
        The_left_hand_side_of_a_for_in_statement_cannot_use_a_type_annotation: { code: 2404, category: 1, key: "The left-hand side of a 'for...in' statement cannot use a type annotation." },
        The_left_hand_side_of_a_for_in_statement_must_be_of_type_string_or_any: { code: 2405, category: 1, key: "The left-hand side of a 'for...in' statement must be of type 'string' or 'any'." },
        Invalid_left_hand_side_in_for_in_statement: { code: 2406, category: 1, key: "Invalid left-hand side in 'for...in' statement." },
        The_right_hand_side_of_a_for_in_statement_must_be_of_type_any_an_object_type_or_a_type_parameter: { code: 2407, category: 1, key: "The right-hand side of a 'for...in' statement must be of type 'any', an object type or a type parameter." },
        Setters_cannot_return_a_value: { code: 2408, category: 1, key: "Setters cannot return a value." },
        Return_type_of_constructor_signature_must_be_assignable_to_the_instance_type_of_the_class: { code: 2409, category: 1, key: "Return type of constructor signature must be assignable to the instance type of the class" },
        All_symbols_within_a_with_block_will_be_resolved_to_any: { code: 2410, category: 1, key: "All symbols within a 'with' block will be resolved to 'any'." },
        Property_0_of_type_1_is_not_assignable_to_string_index_type_2: { code: 2411, category: 1, key: "Property '{0}' of type '{1}' is not assignable to string index type '{2}'." },
        Property_0_of_type_1_is_not_assignable_to_numeric_index_type_2: { code: 2412, category: 1, key: "Property '{0}' of type '{1}' is not assignable to numeric index type '{2}'." },
        Numeric_index_type_0_is_not_assignable_to_string_index_type_1: { code: 2413, category: 1, key: "Numeric index type '{0}' is not assignable to string index type '{1}'." },
        Class_name_cannot_be_0: { code: 2414, category: 1, key: "Class name cannot be '{0}'" },
        Class_0_incorrectly_extends_base_class_1: { code: 2415, category: 1, key: "Class '{0}' incorrectly extends base class '{1}'." },
        Class_static_side_0_incorrectly_extends_base_class_static_side_1: { code: 2417, category: 1, key: "Class static side '{0}' incorrectly extends base class static side '{1}'." },
        Type_name_0_in_extends_clause_does_not_reference_constructor_function_for_0: { code: 2419, category: 1, key: "Type name '{0}' in extends clause does not reference constructor function for '{0}'." },
        Class_0_incorrectly_implements_interface_1: { code: 2420, category: 1, key: "Class '{0}' incorrectly implements interface '{1}'." },
        A_class_may_only_implement_another_class_or_interface: { code: 2422, category: 1, key: "A class may only implement another class or interface." },
        Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_accessor: { code: 2423, category: 1, key: "Class '{0}' defines instance member function '{1}', but extended class '{2}' defines it as instance member accessor." },
        Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_property: { code: 2424, category: 1, key: "Class '{0}' defines instance member function '{1}', but extended class '{2}' defines it as instance member property." },
        Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_function: { code: 2425, category: 1, key: "Class '{0}' defines instance member property '{1}', but extended class '{2}' defines it as instance member function." },
        Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_function: { code: 2426, category: 1, key: "Class '{0}' defines instance member accessor '{1}', but extended class '{2}' defines it as instance member function." },
        Interface_name_cannot_be_0: { code: 2427, category: 1, key: "Interface name cannot be '{0}'" },
        All_declarations_of_an_interface_must_have_identical_type_parameters: { code: 2428, category: 1, key: "All declarations of an interface must have identical type parameters." },
        Interface_0_incorrectly_extends_interface_1: { code: 2430, category: 1, key: "Interface '{0}' incorrectly extends interface '{1}'." },
        Enum_name_cannot_be_0: { code: 2431, category: 1, key: "Enum name cannot be '{0}'" },
        In_an_enum_with_multiple_declarations_only_one_declaration_can_omit_an_initializer_for_its_first_enum_element: { code: 2432, category: 1, key: "In an enum with multiple declarations, only one declaration can omit an initializer for its first enum element." },
        A_module_declaration_cannot_be_in_a_different_file_from_a_class_or_function_with_which_it_is_merged: { code: 2433, category: 1, key: "A module declaration cannot be in a different file from a class or function with which it is merged" },
        A_module_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged: { code: 2434, category: 1, key: "A module declaration cannot be located prior to a class or function with which it is merged" },
        Ambient_external_modules_cannot_be_nested_in_other_modules: { code: 2435, category: 1, key: "Ambient external modules cannot be nested in other modules." },
        Ambient_external_module_declaration_cannot_specify_relative_module_name: { code: 2436, category: 1, key: "Ambient external module declaration cannot specify relative module name." },
        Module_0_is_hidden_by_a_local_declaration_with_the_same_name: { code: 2437, category: 1, key: "Module '{0}' is hidden by a local declaration with the same name" },
        Import_name_cannot_be_0: { code: 2438, category: 1, key: "Import name cannot be '{0}'" },
        Import_declaration_in_an_ambient_external_module_declaration_cannot_reference_external_module_through_relative_external_module_name: { code: 2439, category: 1, key: "Import declaration in an ambient external module declaration cannot reference external module through relative external module name." },
        Import_declaration_conflicts_with_local_declaration_of_0: { code: 2440, category: 1, key: "Import declaration conflicts with local declaration of '{0}'" },
        Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_an_external_module: { code: 2441, category: 1, key: "Duplicate identifier '{0}'. Compiler reserves name '{1}' in top level scope of an external module." },
        Types_have_separate_declarations_of_a_private_property_0: { code: 2442, category: 1, key: "Types have separate declarations of a private property '{0}'." },
        Property_0_is_protected_but_type_1_is_not_a_class_derived_from_2: { code: 2443, category: 1, key: "Property '{0}' is protected but type '{1}' is not a class derived from '{2}'." },
        Property_0_is_protected_in_type_1_but_public_in_type_2: { code: 2444, category: 1, key: "Property '{0}' is protected in type '{1}' but public in type '{2}'." },
        Property_0_is_protected_and_only_accessible_within_class_1_and_its_subclasses: { code: 2445, category: 1, key: "Property '{0}' is protected and only accessible within class '{1}' and its subclasses." },
        Property_0_is_protected_and_only_accessible_through_an_instance_of_class_1: { code: 2446, category: 1, key: "Property '{0}' is protected and only accessible through an instance of class '{1}'." },
        The_0_operator_is_not_allowed_for_boolean_types_Consider_using_1_instead: { code: 2447, category: 1, key: "The '{0}' operator is not allowed for boolean types. Consider using '{1}' instead." },
        Block_scoped_variable_0_used_before_its_declaration: { code: 2448, category: 1, key: "Block-scoped variable '{0}' used before its declaration." },
        The_operand_of_an_increment_or_decrement_operator_cannot_be_a_constant: { code: 2449, category: 1, key: "The operand of an increment or decrement operator cannot be a constant." },
        Left_hand_side_of_assignment_expression_cannot_be_a_constant: { code: 2450, category: 1, key: "Left-hand side of assignment expression cannot be a constant." },
        Cannot_redeclare_block_scoped_variable_0: { code: 2451, category: 1, key: "Cannot redeclare block-scoped variable '{0}'." },
        An_enum_member_cannot_have_a_numeric_name: { code: 2452, category: 1, key: "An enum member cannot have a numeric name." },
        The_type_argument_for_type_parameter_0_cannot_be_inferred_from_the_usage_Consider_specifying_the_type_arguments_explicitly: { code: 2453, category: 1, key: "The type argument for type parameter '{0}' cannot be inferred from the usage. Consider specifying the type arguments explicitly." },
        Type_argument_candidate_1_is_not_a_valid_type_argument_because_it_is_not_a_supertype_of_candidate_0: { code: 2455, category: 1, key: "Type argument candidate '{1}' is not a valid type argument because it is not a supertype of candidate '{0}'." },
        Type_alias_0_circularly_references_itself: { code: 2456, category: 1, key: "Type alias '{0}' circularly references itself." },
        Type_alias_name_cannot_be_0: { code: 2457, category: 1, key: "Type alias name cannot be '{0}'" },
        An_AMD_module_cannot_have_multiple_name_assignments: { code: 2458, category: 1, key: "An AMD module cannot have multiple name assignments." },
        Type_0_has_no_property_1_and_no_string_index_signature: { code: 2459, category: 1, key: "Type '{0}' has no property '{1}' and no string index signature." },
        Type_0_has_no_property_1: { code: 2460, category: 1, key: "Type '{0}' has no property '{1}'." },
        Type_0_is_not_an_array_type: { code: 2461, category: 1, key: "Type '{0}' is not an array type." },
        A_rest_element_must_be_last_in_an_array_destructuring_pattern: { code: 2462, category: 1, key: "A rest element must be last in an array destructuring pattern" },
        A_binding_pattern_parameter_cannot_be_optional_in_an_implementation_signature: { code: 2463, category: 1, key: "A binding pattern parameter cannot be optional in an implementation signature." },
        A_computed_property_name_must_be_of_type_string_number_or_any: { code: 2464, category: 1, key: "A computed property name must be of type 'string', 'number', or 'any'." },
        this_cannot_be_referenced_in_a_computed_property_name: { code: 2465, category: 1, key: "'this' cannot be referenced in a computed property name." },
        super_cannot_be_referenced_in_a_computed_property_name: { code: 2466, category: 1, key: "'super' cannot be referenced in a computed property name." },
        A_computed_property_name_cannot_reference_a_type_parameter_from_its_containing_type: { code: 2466, category: 1, key: "A computed property name cannot reference a type parameter from its containing type." },
        Spread_operator_in_new_expressions_is_only_available_when_targeting_ECMAScript_6_and_higher: { code: 2468, category: 1, key: "Spread operator in 'new' expressions is only available when targeting ECMAScript 6 and higher." },
        Import_declaration_0_is_using_private_name_1: { code: 4000, category: 1, key: "Import declaration '{0}' is using private name '{1}'." },
        Type_parameter_0_of_exported_class_has_or_is_using_private_name_1: { code: 4002, category: 1, key: "Type parameter '{0}' of exported class has or is using private name '{1}'." },
        Type_parameter_0_of_exported_interface_has_or_is_using_private_name_1: { code: 4004, category: 1, key: "Type parameter '{0}' of exported interface has or is using private name '{1}'." },
        Type_parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1: { code: 4006, category: 1, key: "Type parameter '{0}' of constructor signature from exported interface has or is using private name '{1}'." },
        Type_parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1: { code: 4008, category: 1, key: "Type parameter '{0}' of call signature from exported interface has or is using private name '{1}'." },
        Type_parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1: { code: 4010, category: 1, key: "Type parameter '{0}' of public static method from exported class has or is using private name '{1}'." },
        Type_parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1: { code: 4012, category: 1, key: "Type parameter '{0}' of public method from exported class has or is using private name '{1}'." },
        Type_parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1: { code: 4014, category: 1, key: "Type parameter '{0}' of method from exported interface has or is using private name '{1}'." },
        Type_parameter_0_of_exported_function_has_or_is_using_private_name_1: { code: 4016, category: 1, key: "Type parameter '{0}' of exported function has or is using private name '{1}'." },
        Implements_clause_of_exported_class_0_has_or_is_using_private_name_1: { code: 4019, category: 1, key: "Implements clause of exported class '{0}' has or is using private name '{1}'." },
        Extends_clause_of_exported_class_0_has_or_is_using_private_name_1: { code: 4020, category: 1, key: "Extends clause of exported class '{0}' has or is using private name '{1}'." },
        Extends_clause_of_exported_interface_0_has_or_is_using_private_name_1: { code: 4022, category: 1, key: "Extends clause of exported interface '{0}' has or is using private name '{1}'." },
        Exported_variable_0_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: { code: 4023, category: 1, key: "Exported variable '{0}' has or is using name '{1}' from external module {2} but cannot be named." },
        Exported_variable_0_has_or_is_using_name_1_from_private_module_2: { code: 4024, category: 1, key: "Exported variable '{0}' has or is using name '{1}' from private module '{2}'." },
        Exported_variable_0_has_or_is_using_private_name_1: { code: 4025, category: 1, key: "Exported variable '{0}' has or is using private name '{1}'." },
        Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: { code: 4026, category: 1, key: "Public static property '{0}' of exported class has or is using name '{1}' from external module {2} but cannot be named." },
        Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2: { code: 4027, category: 1, key: "Public static property '{0}' of exported class has or is using name '{1}' from private module '{2}'." },
        Public_static_property_0_of_exported_class_has_or_is_using_private_name_1: { code: 4028, category: 1, key: "Public static property '{0}' of exported class has or is using private name '{1}'." },
        Public_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: { code: 4029, category: 1, key: "Public property '{0}' of exported class has or is using name '{1}' from external module {2} but cannot be named." },
        Public_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2: { code: 4030, category: 1, key: "Public property '{0}' of exported class has or is using name '{1}' from private module '{2}'." },
        Public_property_0_of_exported_class_has_or_is_using_private_name_1: { code: 4031, category: 1, key: "Public property '{0}' of exported class has or is using private name '{1}'." },
        Property_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2: { code: 4032, category: 1, key: "Property '{0}' of exported interface has or is using name '{1}' from private module '{2}'." },
        Property_0_of_exported_interface_has_or_is_using_private_name_1: { code: 4033, category: 1, key: "Property '{0}' of exported interface has or is using private name '{1}'." },
        Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_name_1_from_private_module_2: { code: 4034, category: 1, key: "Parameter '{0}' of public static property setter from exported class has or is using name '{1}' from private module '{2}'." },
        Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_private_name_1: { code: 4035, category: 1, key: "Parameter '{0}' of public static property setter from exported class has or is using private name '{1}'." },
        Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_name_1_from_private_module_2: { code: 4036, category: 1, key: "Parameter '{0}' of public property setter from exported class has or is using name '{1}' from private module '{2}'." },
        Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_private_name_1: { code: 4037, category: 1, key: "Parameter '{0}' of public property setter from exported class has or is using private name '{1}'." },
        Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: { code: 4038, category: 1, key: "Return type of public static property getter from exported class has or is using name '{0}' from external module {1} but cannot be named." },
        Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_private_module_1: { code: 4039, category: 1, key: "Return type of public static property getter from exported class has or is using name '{0}' from private module '{1}'." },
        Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_private_name_0: { code: 4040, category: 1, key: "Return type of public static property getter from exported class has or is using private name '{0}'." },
        Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: { code: 4041, category: 1, key: "Return type of public property getter from exported class has or is using name '{0}' from external module {1} but cannot be named." },
        Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_private_module_1: { code: 4042, category: 1, key: "Return type of public property getter from exported class has or is using name '{0}' from private module '{1}'." },
        Return_type_of_public_property_getter_from_exported_class_has_or_is_using_private_name_0: { code: 4043, category: 1, key: "Return type of public property getter from exported class has or is using private name '{0}'." },
        Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: { code: 4044, category: 1, key: "Return type of constructor signature from exported interface has or is using name '{0}' from private module '{1}'." },
        Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_0: { code: 4045, category: 1, key: "Return type of constructor signature from exported interface has or is using private name '{0}'." },
        Return_type_of_call_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: { code: 4046, category: 1, key: "Return type of call signature from exported interface has or is using name '{0}' from private module '{1}'." },
        Return_type_of_call_signature_from_exported_interface_has_or_is_using_private_name_0: { code: 4047, category: 1, key: "Return type of call signature from exported interface has or is using private name '{0}'." },
        Return_type_of_index_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1: { code: 4048, category: 1, key: "Return type of index signature from exported interface has or is using name '{0}' from private module '{1}'." },
        Return_type_of_index_signature_from_exported_interface_has_or_is_using_private_name_0: { code: 4049, category: 1, key: "Return type of index signature from exported interface has or is using private name '{0}'." },
        Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: { code: 4050, category: 1, key: "Return type of public static method from exported class has or is using name '{0}' from external module {1} but cannot be named." },
        Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_private_module_1: { code: 4051, category: 1, key: "Return type of public static method from exported class has or is using name '{0}' from private module '{1}'." },
        Return_type_of_public_static_method_from_exported_class_has_or_is_using_private_name_0: { code: 4052, category: 1, key: "Return type of public static method from exported class has or is using private name '{0}'." },
        Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: { code: 4053, category: 1, key: "Return type of public method from exported class has or is using name '{0}' from external module {1} but cannot be named." },
        Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_private_module_1: { code: 4054, category: 1, key: "Return type of public method from exported class has or is using name '{0}' from private module '{1}'." },
        Return_type_of_public_method_from_exported_class_has_or_is_using_private_name_0: { code: 4055, category: 1, key: "Return type of public method from exported class has or is using private name '{0}'." },
        Return_type_of_method_from_exported_interface_has_or_is_using_name_0_from_private_module_1: { code: 4056, category: 1, key: "Return type of method from exported interface has or is using name '{0}' from private module '{1}'." },
        Return_type_of_method_from_exported_interface_has_or_is_using_private_name_0: { code: 4057, category: 1, key: "Return type of method from exported interface has or is using private name '{0}'." },
        Return_type_of_exported_function_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named: { code: 4058, category: 1, key: "Return type of exported function has or is using name '{0}' from external module {1} but cannot be named." },
        Return_type_of_exported_function_has_or_is_using_name_0_from_private_module_1: { code: 4059, category: 1, key: "Return type of exported function has or is using name '{0}' from private module '{1}'." },
        Return_type_of_exported_function_has_or_is_using_private_name_0: { code: 4060, category: 1, key: "Return type of exported function has or is using private name '{0}'." },
        Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: { code: 4061, category: 1, key: "Parameter '{0}' of constructor from exported class has or is using name '{1}' from external module {2} but cannot be named." },
        Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_private_module_2: { code: 4062, category: 1, key: "Parameter '{0}' of constructor from exported class has or is using name '{1}' from private module '{2}'." },
        Parameter_0_of_constructor_from_exported_class_has_or_is_using_private_name_1: { code: 4063, category: 1, key: "Parameter '{0}' of constructor from exported class has or is using private name '{1}'." },
        Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2: { code: 4064, category: 1, key: "Parameter '{0}' of constructor signature from exported interface has or is using name '{1}' from private module '{2}'." },
        Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1: { code: 4065, category: 1, key: "Parameter '{0}' of constructor signature from exported interface has or is using private name '{1}'." },
        Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2: { code: 4066, category: 1, key: "Parameter '{0}' of call signature from exported interface has or is using name '{1}' from private module '{2}'." },
        Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1: { code: 4067, category: 1, key: "Parameter '{0}' of call signature from exported interface has or is using private name '{1}'." },
        Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: { code: 4068, category: 1, key: "Parameter '{0}' of public static method from exported class has or is using name '{1}' from external module {2} but cannot be named." },
        Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_private_module_2: { code: 4069, category: 1, key: "Parameter '{0}' of public static method from exported class has or is using name '{1}' from private module '{2}'." },
        Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1: { code: 4070, category: 1, key: "Parameter '{0}' of public static method from exported class has or is using private name '{1}'." },
        Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: { code: 4071, category: 1, key: "Parameter '{0}' of public method from exported class has or is using name '{1}' from external module {2} but cannot be named." },
        Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_private_module_2: { code: 4072, category: 1, key: "Parameter '{0}' of public method from exported class has or is using name '{1}' from private module '{2}'." },
        Parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1: { code: 4073, category: 1, key: "Parameter '{0}' of public method from exported class has or is using private name '{1}'." },
        Parameter_0_of_method_from_exported_interface_has_or_is_using_name_1_from_private_module_2: { code: 4074, category: 1, key: "Parameter '{0}' of method from exported interface has or is using name '{1}' from private module '{2}'." },
        Parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1: { code: 4075, category: 1, key: "Parameter '{0}' of method from exported interface has or is using private name '{1}'." },
        Parameter_0_of_exported_function_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named: { code: 4076, category: 1, key: "Parameter '{0}' of exported function has or is using name '{1}' from external module {2} but cannot be named." },
        Parameter_0_of_exported_function_has_or_is_using_name_1_from_private_module_2: { code: 4077, category: 1, key: "Parameter '{0}' of exported function has or is using name '{1}' from private module '{2}'." },
        Parameter_0_of_exported_function_has_or_is_using_private_name_1: { code: 4078, category: 1, key: "Parameter '{0}' of exported function has or is using private name '{1}'." },
        Exported_type_alias_0_has_or_is_using_private_name_1: { code: 4081, category: 1, key: "Exported type alias '{0}' has or is using private name '{1}'." },
        Enum_declarations_must_all_be_const_or_non_const: { code: 4082, category: 1, key: "Enum declarations must all be const or non-const." },
        In_const_enum_declarations_member_initializer_must_be_constant_expression: { code: 4083, category: 1, key: "In 'const' enum declarations member initializer must be constant expression." },
        const_enums_can_only_be_used_in_property_or_index_access_expressions_or_the_right_hand_side_of_an_import_declaration_or_export_assignment: { code: 4084, category: 1, key: "'const' enums can only be used in property or index access expressions or the right hand side of an import declaration or export assignment." },
        A_const_enum_member_can_only_be_accessed_using_a_string_literal: { code: 4085, category: 1, key: "A const enum member can only be accessed using a string literal." },
        const_enum_member_initializer_was_evaluated_to_a_non_finite_value: { code: 4086, category: 1, key: "'const' enum member initializer was evaluated to a non-finite value." },
        const_enum_member_initializer_was_evaluated_to_disallowed_value_NaN: { code: 4087, category: 1, key: "'const' enum member initializer was evaluated to disallowed value 'NaN'." },
        Property_0_does_not_exist_on_const_enum_1: { code: 4088, category: 1, key: "Property '{0}' does not exist on 'const' enum '{1}'." },
        let_is_not_allowed_to_be_used_as_a_name_in_let_or_const_declarations: { code: 4089, category: 1, key: "'let' is not allowed to be used as a name in 'let' or 'const' declarations." },
        The_current_host_does_not_support_the_0_option: { code: 5001, category: 1, key: "The current host does not support the '{0}' option." },
        Cannot_find_the_common_subdirectory_path_for_the_input_files: { code: 5009, category: 1, key: "Cannot find the common subdirectory path for the input files." },
        Cannot_read_file_0_Colon_1: { code: 5012, category: 1, key: "Cannot read file '{0}': {1}" },
        Unsupported_file_encoding: { code: 5013, category: 1, key: "Unsupported file encoding." },
        Unknown_compiler_option_0: { code: 5023, category: 1, key: "Unknown compiler option '{0}'." },
        Compiler_option_0_requires_a_value_of_type_1: { code: 5024, category: 1, key: "Compiler option '{0}' requires a value of type {1}." },
        Could_not_write_file_0_Colon_1: { code: 5033, category: 1, key: "Could not write file '{0}': {1}" },
        Option_mapRoot_cannot_be_specified_without_specifying_sourcemap_option: { code: 5038, category: 1, key: "Option 'mapRoot' cannot be specified without specifying 'sourcemap' option." },
        Option_sourceRoot_cannot_be_specified_without_specifying_sourcemap_option: { code: 5039, category: 1, key: "Option 'sourceRoot' cannot be specified without specifying 'sourcemap' option." },
        Option_noEmit_cannot_be_specified_with_option_out_or_outDir: { code: 5040, category: 1, key: "Option 'noEmit' cannot be specified with option 'out' or 'outDir'." },
        Option_noEmit_cannot_be_specified_with_option_declaration: { code: 5041, category: 1, key: "Option 'noEmit' cannot be specified with option 'declaration'." },
        Option_project_cannot_be_mixed_with_source_files_on_a_command_line: { code: 5042, category: 1, key: "Option 'project' cannot be mixed with source files on a command line." },
        Concatenate_and_emit_output_to_single_file: { code: 6001, category: 2, key: "Concatenate and emit output to single file." },
        Generates_corresponding_d_ts_file: { code: 6002, category: 2, key: "Generates corresponding '.d.ts' file." },
        Specifies_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations: { code: 6003, category: 2, key: "Specifies the location where debugger should locate map files instead of generated locations." },
        Specifies_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations: { code: 6004, category: 2, key: "Specifies the location where debugger should locate TypeScript files instead of source locations." },
        Watch_input_files: { code: 6005, category: 2, key: "Watch input files." },
        Redirect_output_structure_to_the_directory: { code: 6006, category: 2, key: "Redirect output structure to the directory." },
        Do_not_erase_const_enum_declarations_in_generated_code: { code: 6007, category: 2, key: "Do not erase const enum declarations in generated code." },
        Do_not_emit_outputs_if_any_type_checking_errors_were_reported: { code: 6008, category: 2, key: "Do not emit outputs if any type checking errors were reported." },
        Do_not_emit_comments_to_output: { code: 6009, category: 2, key: "Do not emit comments to output." },
        Do_not_emit_outputs: { code: 6010, category: 2, key: "Do not emit outputs." },
        Specify_ECMAScript_target_version_Colon_ES3_default_ES5_or_ES6_experimental: { code: 6015, category: 2, key: "Specify ECMAScript target version: 'ES3' (default), 'ES5', or 'ES6' (experimental)" },
        Specify_module_code_generation_Colon_commonjs_or_amd: { code: 6016, category: 2, key: "Specify module code generation: 'commonjs' or 'amd'" },
        Print_this_message: { code: 6017, category: 2, key: "Print this message." },
        Print_the_compiler_s_version: { code: 6019, category: 2, key: "Print the compiler's version." },
        Compile_the_project_in_the_given_directory: { code: 6020, category: 2, key: "Compile the project in the given directory." },
        Syntax_Colon_0: { code: 6023, category: 2, key: "Syntax: {0}" },
        options: { code: 6024, category: 2, key: "options" },
        file: { code: 6025, category: 2, key: "file" },
        Examples_Colon_0: { code: 6026, category: 2, key: "Examples: {0}" },
        Options_Colon: { code: 6027, category: 2, key: "Options:" },
        Version_0: { code: 6029, category: 2, key: "Version {0}" },
        Insert_command_line_options_and_files_from_a_file: { code: 6030, category: 2, key: "Insert command line options and files from a file." },
        File_change_detected_Starting_incremental_compilation: { code: 6032, category: 2, key: "File change detected. Starting incremental compilation..." },
        KIND: { code: 6034, category: 2, key: "KIND" },
        FILE: { code: 6035, category: 2, key: "FILE" },
        VERSION: { code: 6036, category: 2, key: "VERSION" },
        LOCATION: { code: 6037, category: 2, key: "LOCATION" },
        DIRECTORY: { code: 6038, category: 2, key: "DIRECTORY" },
        Compilation_complete_Watching_for_file_changes: { code: 6042, category: 2, key: "Compilation complete. Watching for file changes." },
        Generates_corresponding_map_file: { code: 6043, category: 2, key: "Generates corresponding '.map' file." },
        Compiler_option_0_expects_an_argument: { code: 6044, category: 1, key: "Compiler option '{0}' expects an argument." },
        Unterminated_quoted_string_in_response_file_0: { code: 6045, category: 1, key: "Unterminated quoted string in response file '{0}'." },
        Argument_for_module_option_must_be_commonjs_or_amd: { code: 6046, category: 1, key: "Argument for '--module' option must be 'commonjs' or 'amd'." },
        Argument_for_target_option_must_be_es3_es5_or_es6: { code: 6047, category: 1, key: "Argument for '--target' option must be 'es3', 'es5', or 'es6'." },
        Locale_must_be_of_the_form_language_or_language_territory_For_example_0_or_1: { code: 6048, category: 1, key: "Locale must be of the form <language> or <language>-<territory>. For example '{0}' or '{1}'." },
        Unsupported_locale_0: { code: 6049, category: 1, key: "Unsupported locale '{0}'." },
        Unable_to_open_file_0: { code: 6050, category: 1, key: "Unable to open file '{0}'." },
        Corrupted_locale_file_0: { code: 6051, category: 1, key: "Corrupted locale file {0}." },
        Raise_error_on_expressions_and_declarations_with_an_implied_any_type: { code: 6052, category: 2, key: "Raise error on expressions and declarations with an implied 'any' type." },
        File_0_not_found: { code: 6053, category: 1, key: "File '{0}' not found." },
        File_0_must_have_extension_ts_or_d_ts: { code: 6054, category: 1, key: "File '{0}' must have extension '.ts' or '.d.ts'." },
        Suppress_noImplicitAny_errors_for_indexing_objects_lacking_index_signatures: { code: 6055, category: 2, key: "Suppress noImplicitAny errors for indexing objects lacking index signatures." },
        Do_not_emit_declarations_for_code_that_has_an_internal_annotation: { code: 6056, category: 2, key: "Do not emit declarations for code that has an '@internal' annotation." },
        Variable_0_implicitly_has_an_1_type: { code: 7005, category: 1, key: "Variable '{0}' implicitly has an '{1}' type." },
        Parameter_0_implicitly_has_an_1_type: { code: 7006, category: 1, key: "Parameter '{0}' implicitly has an '{1}' type." },
        Member_0_implicitly_has_an_1_type: { code: 7008, category: 1, key: "Member '{0}' implicitly has an '{1}' type." },
        new_expression_whose_target_lacks_a_construct_signature_implicitly_has_an_any_type: { code: 7009, category: 1, key: "'new' expression, whose target lacks a construct signature, implicitly has an 'any' type." },
        _0_which_lacks_return_type_annotation_implicitly_has_an_1_return_type: { code: 7010, category: 1, key: "'{0}', which lacks return-type annotation, implicitly has an '{1}' return type." },
        Function_expression_which_lacks_return_type_annotation_implicitly_has_an_0_return_type: { code: 7011, category: 1, key: "Function expression, which lacks return-type annotation, implicitly has an '{0}' return type." },
        Construct_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: { code: 7013, category: 1, key: "Construct signature, which lacks return-type annotation, implicitly has an 'any' return type." },
        Property_0_implicitly_has_type_any_because_its_set_accessor_lacks_a_type_annotation: { code: 7016, category: 1, key: "Property '{0}' implicitly has type 'any', because its 'set' accessor lacks a type annotation." },
        Index_signature_of_object_type_implicitly_has_an_any_type: { code: 7017, category: 1, key: "Index signature of object type implicitly has an 'any' type." },
        Object_literal_s_property_0_implicitly_has_an_1_type: { code: 7018, category: 1, key: "Object literal's property '{0}' implicitly has an '{1}' type." },
        Rest_parameter_0_implicitly_has_an_any_type: { code: 7019, category: 1, key: "Rest parameter '{0}' implicitly has an 'any[]' type." },
        Call_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type: { code: 7020, category: 1, key: "Call signature, which lacks return-type annotation, implicitly has an 'any' return type." },
        _0_implicitly_has_type_any_because_it_is_referenced_directly_or_indirectly_in_its_own_type_annotation: { code: 7021, category: 1, key: "'{0}' implicitly has type 'any' because it is referenced directly or indirectly in its own type annotation." },
        _0_implicitly_has_type_any_because_it_is_does_not_have_a_type_annotation_and_is_referenced_directly_or_indirectly_in_its_own_initializer: { code: 7022, category: 1, key: "'{0}' implicitly has type 'any' because it is does not have a type annotation and is referenced directly or indirectly in its own initializer." },
        _0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions: { code: 7023, category: 1, key: "'{0}' implicitly has return type 'any' because it does not have a return type annotation and is referenced directly or indirectly in one of its return expressions." },
        Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions: { code: 7024, category: 1, key: "Function implicitly has return type 'any' because it does not have a return type annotation and is referenced directly or indirectly in one of its return expressions." },
        You_cannot_rename_this_element: { code: 8000, category: 1, key: "You cannot rename this element." },
        You_cannot_rename_elements_that_are_defined_in_the_standard_TypeScript_library: { code: 8001, category: 1, key: "You cannot rename elements that are defined in the standard TypeScript library." },
        yield_expressions_are_not_currently_supported: { code: 9000, category: 1, key: "'yield' expressions are not currently supported." },
        Generators_are_not_currently_supported: { code: 9001, category: 1, key: "Generators are not currently supported." },
        The_arguments_object_cannot_be_referenced_in_an_arrow_function_Consider_using_a_standard_function_expression: { code: 9002, category: 1, key: "The 'arguments' object cannot be referenced in an arrow function. Consider using a standard function expression." }
    };
})(ts || (ts = {}));
var ts;
(function (ts) {
    var textToToken = {
        "any": 110,
        "boolean": 111,
        "break": 65,
        "case": 66,
        "catch": 67,
        "class": 68,
        "continue": 70,
        "const": 69,
        "constructor": 112,
        "debugger": 71,
        "declare": 113,
        "default": 72,
        "delete": 73,
        "do": 74,
        "else": 75,
        "enum": 76,
        "export": 77,
        "extends": 78,
        "false": 79,
        "finally": 80,
        "for": 81,
        "function": 82,
        "get": 114,
        "if": 83,
        "implements": 101,
        "import": 84,
        "in": 85,
        "instanceof": 86,
        "interface": 102,
        "let": 103,
        "module": 115,
        "new": 87,
        "null": 88,
        "number": 117,
        "package": 104,
        "private": 105,
        "protected": 106,
        "public": 107,
        "require": 116,
        "return": 89,
        "set": 118,
        "static": 108,
        "string": 119,
        "super": 90,
        "switch": 91,
        "this": 92,
        "throw": 93,
        "true": 94,
        "try": 95,
        "type": 120,
        "typeof": 96,
        "var": 97,
        "void": 98,
        "while": 99,
        "with": 100,
        "yield": 109,
        "{": 14,
        "}": 15,
        "(": 16,
        ")": 17,
        "[": 18,
        "]": 19,
        ".": 20,
        "...": 21,
        ";": 22,
        ",": 23,
        "<": 24,
        ">": 25,
        "<=": 26,
        ">=": 27,
        "==": 28,
        "!=": 29,
        "===": 30,
        "!==": 31,
        "=>": 32,
        "+": 33,
        "-": 34,
        "*": 35,
        "/": 36,
        "%": 37,
        "++": 38,
        "--": 39,
        "<<": 40,
        ">>": 41,
        ">>>": 42,
        "&": 43,
        "|": 44,
        "^": 45,
        "!": 46,
        "~": 47,
        "&&": 48,
        "||": 49,
        "?": 50,
        ":": 51,
        "=": 52,
        "+=": 53,
        "-=": 54,
        "*=": 55,
        "/=": 56,
        "%=": 57,
        "<<=": 58,
        ">>=": 59,
        ">>>=": 60,
        "&=": 61,
        "|=": 62,
        "^=": 63
    };
    var unicodeES3IdentifierStart = [170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 543, 546, 563, 592, 685, 688, 696, 699, 705, 720, 721, 736, 740, 750, 750, 890, 890, 902, 902, 904, 906, 908, 908, 910, 929, 931, 974, 976, 983, 986, 1011, 1024, 1153, 1164, 1220, 1223, 1224, 1227, 1228, 1232, 1269, 1272, 1273, 1329, 1366, 1369, 1369, 1377, 1415, 1488, 1514, 1520, 1522, 1569, 1594, 1600, 1610, 1649, 1747, 1749, 1749, 1765, 1766, 1786, 1788, 1808, 1808, 1810, 1836, 1920, 1957, 2309, 2361, 2365, 2365, 2384, 2384, 2392, 2401, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482, 2482, 2486, 2489, 2524, 2525, 2527, 2529, 2544, 2545, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2649, 2652, 2654, 2654, 2674, 2676, 2693, 2699, 2701, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2749, 2749, 2768, 2768, 2784, 2784, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2870, 2873, 2877, 2877, 2908, 2909, 2911, 2913, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 2997, 2999, 3001, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3123, 3125, 3129, 3168, 3169, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3294, 3294, 3296, 3297, 3333, 3340, 3342, 3344, 3346, 3368, 3370, 3385, 3424, 3425, 3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3585, 3632, 3634, 3635, 3648, 3654, 3713, 3714, 3716, 3716, 3719, 3720, 3722, 3722, 3725, 3725, 3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751, 3751, 3754, 3755, 3757, 3760, 3762, 3763, 3773, 3773, 3776, 3780, 3782, 3782, 3804, 3805, 3840, 3840, 3904, 3911, 3913, 3946, 3976, 3979, 4096, 4129, 4131, 4135, 4137, 4138, 4176, 4181, 4256, 4293, 4304, 4342, 4352, 4441, 4447, 4514, 4520, 4601, 4608, 4614, 4616, 4678, 4680, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4742, 4744, 4744, 4746, 4749, 4752, 4782, 4784, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808, 4814, 4816, 4822, 4824, 4846, 4848, 4878, 4880, 4880, 4882, 4885, 4888, 4894, 4896, 4934, 4936, 4954, 5024, 5108, 5121, 5740, 5743, 5750, 5761, 5786, 5792, 5866, 6016, 6067, 6176, 6263, 6272, 6312, 7680, 7835, 7840, 7929, 7936, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8319, 8319, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8473, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8497, 8499, 8505, 8544, 8579, 12293, 12295, 12321, 12329, 12337, 12341, 12344, 12346, 12353, 12436, 12445, 12446, 12449, 12538, 12540, 12542, 12549, 12588, 12593, 12686, 12704, 12727, 13312, 19893, 19968, 40869, 40960, 42124, 44032, 55203, 63744, 64045, 64256, 64262, 64275, 64279, 64285, 64285, 64287, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65136, 65138, 65140, 65140, 65142, 65276, 65313, 65338, 65345, 65370, 65382, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500,];
    var unicodeES3IdentifierPart = [170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 543, 546, 563, 592, 685, 688, 696, 699, 705, 720, 721, 736, 740, 750, 750, 768, 846, 864, 866, 890, 890, 902, 902, 904, 906, 908, 908, 910, 929, 931, 974, 976, 983, 986, 1011, 1024, 1153, 1155, 1158, 1164, 1220, 1223, 1224, 1227, 1228, 1232, 1269, 1272, 1273, 1329, 1366, 1369, 1369, 1377, 1415, 1425, 1441, 1443, 1465, 1467, 1469, 1471, 1471, 1473, 1474, 1476, 1476, 1488, 1514, 1520, 1522, 1569, 1594, 1600, 1621, 1632, 1641, 1648, 1747, 1749, 1756, 1759, 1768, 1770, 1773, 1776, 1788, 1808, 1836, 1840, 1866, 1920, 1968, 2305, 2307, 2309, 2361, 2364, 2381, 2384, 2388, 2392, 2403, 2406, 2415, 2433, 2435, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482, 2482, 2486, 2489, 2492, 2492, 2494, 2500, 2503, 2504, 2507, 2509, 2519, 2519, 2524, 2525, 2527, 2531, 2534, 2545, 2562, 2562, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2620, 2620, 2622, 2626, 2631, 2632, 2635, 2637, 2649, 2652, 2654, 2654, 2662, 2676, 2689, 2691, 2693, 2699, 2701, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2748, 2757, 2759, 2761, 2763, 2765, 2768, 2768, 2784, 2784, 2790, 2799, 2817, 2819, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2870, 2873, 2876, 2883, 2887, 2888, 2891, 2893, 2902, 2903, 2908, 2909, 2911, 2913, 2918, 2927, 2946, 2947, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 2997, 2999, 3001, 3006, 3010, 3014, 3016, 3018, 3021, 3031, 3031, 3047, 3055, 3073, 3075, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3123, 3125, 3129, 3134, 3140, 3142, 3144, 3146, 3149, 3157, 3158, 3168, 3169, 3174, 3183, 3202, 3203, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3262, 3268, 3270, 3272, 3274, 3277, 3285, 3286, 3294, 3294, 3296, 3297, 3302, 3311, 3330, 3331, 3333, 3340, 3342, 3344, 3346, 3368, 3370, 3385, 3390, 3395, 3398, 3400, 3402, 3405, 3415, 3415, 3424, 3425, 3430, 3439, 3458, 3459, 3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3530, 3530, 3535, 3540, 3542, 3542, 3544, 3551, 3570, 3571, 3585, 3642, 3648, 3662, 3664, 3673, 3713, 3714, 3716, 3716, 3719, 3720, 3722, 3722, 3725, 3725, 3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751, 3751, 3754, 3755, 3757, 3769, 3771, 3773, 3776, 3780, 3782, 3782, 3784, 3789, 3792, 3801, 3804, 3805, 3840, 3840, 3864, 3865, 3872, 3881, 3893, 3893, 3895, 3895, 3897, 3897, 3902, 3911, 3913, 3946, 3953, 3972, 3974, 3979, 3984, 3991, 3993, 4028, 4038, 4038, 4096, 4129, 4131, 4135, 4137, 4138, 4140, 4146, 4150, 4153, 4160, 4169, 4176, 4185, 4256, 4293, 4304, 4342, 4352, 4441, 4447, 4514, 4520, 4601, 4608, 4614, 4616, 4678, 4680, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4742, 4744, 4744, 4746, 4749, 4752, 4782, 4784, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808, 4814, 4816, 4822, 4824, 4846, 4848, 4878, 4880, 4880, 4882, 4885, 4888, 4894, 4896, 4934, 4936, 4954, 4969, 4977, 5024, 5108, 5121, 5740, 5743, 5750, 5761, 5786, 5792, 5866, 6016, 6099, 6112, 6121, 6160, 6169, 6176, 6263, 6272, 6313, 7680, 7835, 7840, 7929, 7936, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8255, 8256, 8319, 8319, 8400, 8412, 8417, 8417, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8473, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8497, 8499, 8505, 8544, 8579, 12293, 12295, 12321, 12335, 12337, 12341, 12344, 12346, 12353, 12436, 12441, 12442, 12445, 12446, 12449, 12542, 12549, 12588, 12593, 12686, 12704, 12727, 13312, 19893, 19968, 40869, 40960, 42124, 44032, 55203, 63744, 64045, 64256, 64262, 64275, 64279, 64285, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65056, 65059, 65075, 65076, 65101, 65103, 65136, 65138, 65140, 65140, 65142, 65276, 65296, 65305, 65313, 65338, 65343, 65343, 65345, 65370, 65381, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500,];
    var unicodeES5IdentifierStart = [170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 705, 710, 721, 736, 740, 748, 748, 750, 750, 880, 884, 886, 887, 890, 893, 902, 902, 904, 906, 908, 908, 910, 929, 931, 1013, 1015, 1153, 1162, 1319, 1329, 1366, 1369, 1369, 1377, 1415, 1488, 1514, 1520, 1522, 1568, 1610, 1646, 1647, 1649, 1747, 1749, 1749, 1765, 1766, 1774, 1775, 1786, 1788, 1791, 1791, 1808, 1808, 1810, 1839, 1869, 1957, 1969, 1969, 1994, 2026, 2036, 2037, 2042, 2042, 2048, 2069, 2074, 2074, 2084, 2084, 2088, 2088, 2112, 2136, 2208, 2208, 2210, 2220, 2308, 2361, 2365, 2365, 2384, 2384, 2392, 2401, 2417, 2423, 2425, 2431, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482, 2482, 2486, 2489, 2493, 2493, 2510, 2510, 2524, 2525, 2527, 2529, 2544, 2545, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2649, 2652, 2654, 2654, 2674, 2676, 2693, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2749, 2749, 2768, 2768, 2784, 2785, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2869, 2873, 2877, 2877, 2908, 2909, 2911, 2913, 2929, 2929, 2947, 2947, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 3001, 3024, 3024, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3123, 3125, 3129, 3133, 3133, 3160, 3161, 3168, 3169, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3261, 3261, 3294, 3294, 3296, 3297, 3313, 3314, 3333, 3340, 3342, 3344, 3346, 3386, 3389, 3389, 3406, 3406, 3424, 3425, 3450, 3455, 3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3585, 3632, 3634, 3635, 3648, 3654, 3713, 3714, 3716, 3716, 3719, 3720, 3722, 3722, 3725, 3725, 3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751, 3751, 3754, 3755, 3757, 3760, 3762, 3763, 3773, 3773, 3776, 3780, 3782, 3782, 3804, 3807, 3840, 3840, 3904, 3911, 3913, 3948, 3976, 3980, 4096, 4138, 4159, 4159, 4176, 4181, 4186, 4189, 4193, 4193, 4197, 4198, 4206, 4208, 4213, 4225, 4238, 4238, 4256, 4293, 4295, 4295, 4301, 4301, 4304, 4346, 4348, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4744, 4746, 4749, 4752, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808, 4822, 4824, 4880, 4882, 4885, 4888, 4954, 4992, 5007, 5024, 5108, 5121, 5740, 5743, 5759, 5761, 5786, 5792, 5866, 5870, 5872, 5888, 5900, 5902, 5905, 5920, 5937, 5952, 5969, 5984, 5996, 5998, 6000, 6016, 6067, 6103, 6103, 6108, 6108, 6176, 6263, 6272, 6312, 6314, 6314, 6320, 6389, 6400, 6428, 6480, 6509, 6512, 6516, 6528, 6571, 6593, 6599, 6656, 6678, 6688, 6740, 6823, 6823, 6917, 6963, 6981, 6987, 7043, 7072, 7086, 7087, 7098, 7141, 7168, 7203, 7245, 7247, 7258, 7293, 7401, 7404, 7406, 7409, 7413, 7414, 7424, 7615, 7680, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8305, 8305, 8319, 8319, 8336, 8348, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8473, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8505, 8508, 8511, 8517, 8521, 8526, 8526, 8544, 8584, 11264, 11310, 11312, 11358, 11360, 11492, 11499, 11502, 11506, 11507, 11520, 11557, 11559, 11559, 11565, 11565, 11568, 11623, 11631, 11631, 11648, 11670, 11680, 11686, 11688, 11694, 11696, 11702, 11704, 11710, 11712, 11718, 11720, 11726, 11728, 11734, 11736, 11742, 11823, 11823, 12293, 12295, 12321, 12329, 12337, 12341, 12344, 12348, 12353, 12438, 12445, 12447, 12449, 12538, 12540, 12543, 12549, 12589, 12593, 12686, 12704, 12730, 12784, 12799, 13312, 19893, 19968, 40908, 40960, 42124, 42192, 42237, 42240, 42508, 42512, 42527, 42538, 42539, 42560, 42606, 42623, 42647, 42656, 42735, 42775, 42783, 42786, 42888, 42891, 42894, 42896, 42899, 42912, 42922, 43000, 43009, 43011, 43013, 43015, 43018, 43020, 43042, 43072, 43123, 43138, 43187, 43250, 43255, 43259, 43259, 43274, 43301, 43312, 43334, 43360, 43388, 43396, 43442, 43471, 43471, 43520, 43560, 43584, 43586, 43588, 43595, 43616, 43638, 43642, 43642, 43648, 43695, 43697, 43697, 43701, 43702, 43705, 43709, 43712, 43712, 43714, 43714, 43739, 43741, 43744, 43754, 43762, 43764, 43777, 43782, 43785, 43790, 43793, 43798, 43808, 43814, 43816, 43822, 43968, 44002, 44032, 55203, 55216, 55238, 55243, 55291, 63744, 64109, 64112, 64217, 64256, 64262, 64275, 64279, 64285, 64285, 64287, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65136, 65140, 65142, 65276, 65313, 65338, 65345, 65370, 65382, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500,];
    var unicodeES5IdentifierPart = [170, 170, 181, 181, 186, 186, 192, 214, 216, 246, 248, 705, 710, 721, 736, 740, 748, 748, 750, 750, 768, 884, 886, 887, 890, 893, 902, 902, 904, 906, 908, 908, 910, 929, 931, 1013, 1015, 1153, 1155, 1159, 1162, 1319, 1329, 1366, 1369, 1369, 1377, 1415, 1425, 1469, 1471, 1471, 1473, 1474, 1476, 1477, 1479, 1479, 1488, 1514, 1520, 1522, 1552, 1562, 1568, 1641, 1646, 1747, 1749, 1756, 1759, 1768, 1770, 1788, 1791, 1791, 1808, 1866, 1869, 1969, 1984, 2037, 2042, 2042, 2048, 2093, 2112, 2139, 2208, 2208, 2210, 2220, 2276, 2302, 2304, 2403, 2406, 2415, 2417, 2423, 2425, 2431, 2433, 2435, 2437, 2444, 2447, 2448, 2451, 2472, 2474, 2480, 2482, 2482, 2486, 2489, 2492, 2500, 2503, 2504, 2507, 2510, 2519, 2519, 2524, 2525, 2527, 2531, 2534, 2545, 2561, 2563, 2565, 2570, 2575, 2576, 2579, 2600, 2602, 2608, 2610, 2611, 2613, 2614, 2616, 2617, 2620, 2620, 2622, 2626, 2631, 2632, 2635, 2637, 2641, 2641, 2649, 2652, 2654, 2654, 2662, 2677, 2689, 2691, 2693, 2701, 2703, 2705, 2707, 2728, 2730, 2736, 2738, 2739, 2741, 2745, 2748, 2757, 2759, 2761, 2763, 2765, 2768, 2768, 2784, 2787, 2790, 2799, 2817, 2819, 2821, 2828, 2831, 2832, 2835, 2856, 2858, 2864, 2866, 2867, 2869, 2873, 2876, 2884, 2887, 2888, 2891, 2893, 2902, 2903, 2908, 2909, 2911, 2915, 2918, 2927, 2929, 2929, 2946, 2947, 2949, 2954, 2958, 2960, 2962, 2965, 2969, 2970, 2972, 2972, 2974, 2975, 2979, 2980, 2984, 2986, 2990, 3001, 3006, 3010, 3014, 3016, 3018, 3021, 3024, 3024, 3031, 3031, 3046, 3055, 3073, 3075, 3077, 3084, 3086, 3088, 3090, 3112, 3114, 3123, 3125, 3129, 3133, 3140, 3142, 3144, 3146, 3149, 3157, 3158, 3160, 3161, 3168, 3171, 3174, 3183, 3202, 3203, 3205, 3212, 3214, 3216, 3218, 3240, 3242, 3251, 3253, 3257, 3260, 3268, 3270, 3272, 3274, 3277, 3285, 3286, 3294, 3294, 3296, 3299, 3302, 3311, 3313, 3314, 3330, 3331, 3333, 3340, 3342, 3344, 3346, 3386, 3389, 3396, 3398, 3400, 3402, 3406, 3415, 3415, 3424, 3427, 3430, 3439, 3450, 3455, 3458, 3459, 3461, 3478, 3482, 3505, 3507, 3515, 3517, 3517, 3520, 3526, 3530, 3530, 3535, 3540, 3542, 3542, 3544, 3551, 3570, 3571, 3585, 3642, 3648, 3662, 3664, 3673, 3713, 3714, 3716, 3716, 3719, 3720, 3722, 3722, 3725, 3725, 3732, 3735, 3737, 3743, 3745, 3747, 3749, 3749, 3751, 3751, 3754, 3755, 3757, 3769, 3771, 3773, 3776, 3780, 3782, 3782, 3784, 3789, 3792, 3801, 3804, 3807, 3840, 3840, 3864, 3865, 3872, 3881, 3893, 3893, 3895, 3895, 3897, 3897, 3902, 3911, 3913, 3948, 3953, 3972, 3974, 3991, 3993, 4028, 4038, 4038, 4096, 4169, 4176, 4253, 4256, 4293, 4295, 4295, 4301, 4301, 4304, 4346, 4348, 4680, 4682, 4685, 4688, 4694, 4696, 4696, 4698, 4701, 4704, 4744, 4746, 4749, 4752, 4784, 4786, 4789, 4792, 4798, 4800, 4800, 4802, 4805, 4808, 4822, 4824, 4880, 4882, 4885, 4888, 4954, 4957, 4959, 4992, 5007, 5024, 5108, 5121, 5740, 5743, 5759, 5761, 5786, 5792, 5866, 5870, 5872, 5888, 5900, 5902, 5908, 5920, 5940, 5952, 5971, 5984, 5996, 5998, 6000, 6002, 6003, 6016, 6099, 6103, 6103, 6108, 6109, 6112, 6121, 6155, 6157, 6160, 6169, 6176, 6263, 6272, 6314, 6320, 6389, 6400, 6428, 6432, 6443, 6448, 6459, 6470, 6509, 6512, 6516, 6528, 6571, 6576, 6601, 6608, 6617, 6656, 6683, 6688, 6750, 6752, 6780, 6783, 6793, 6800, 6809, 6823, 6823, 6912, 6987, 6992, 7001, 7019, 7027, 7040, 7155, 7168, 7223, 7232, 7241, 7245, 7293, 7376, 7378, 7380, 7414, 7424, 7654, 7676, 7957, 7960, 7965, 7968, 8005, 8008, 8013, 8016, 8023, 8025, 8025, 8027, 8027, 8029, 8029, 8031, 8061, 8064, 8116, 8118, 8124, 8126, 8126, 8130, 8132, 8134, 8140, 8144, 8147, 8150, 8155, 8160, 8172, 8178, 8180, 8182, 8188, 8204, 8205, 8255, 8256, 8276, 8276, 8305, 8305, 8319, 8319, 8336, 8348, 8400, 8412, 8417, 8417, 8421, 8432, 8450, 8450, 8455, 8455, 8458, 8467, 8469, 8469, 8473, 8477, 8484, 8484, 8486, 8486, 8488, 8488, 8490, 8493, 8495, 8505, 8508, 8511, 8517, 8521, 8526, 8526, 8544, 8584, 11264, 11310, 11312, 11358, 11360, 11492, 11499, 11507, 11520, 11557, 11559, 11559, 11565, 11565, 11568, 11623, 11631, 11631, 11647, 11670, 11680, 11686, 11688, 11694, 11696, 11702, 11704, 11710, 11712, 11718, 11720, 11726, 11728, 11734, 11736, 11742, 11744, 11775, 11823, 11823, 12293, 12295, 12321, 12335, 12337, 12341, 12344, 12348, 12353, 12438, 12441, 12442, 12445, 12447, 12449, 12538, 12540, 12543, 12549, 12589, 12593, 12686, 12704, 12730, 12784, 12799, 13312, 19893, 19968, 40908, 40960, 42124, 42192, 42237, 42240, 42508, 42512, 42539, 42560, 42607, 42612, 42621, 42623, 42647, 42655, 42737, 42775, 42783, 42786, 42888, 42891, 42894, 42896, 42899, 42912, 42922, 43000, 43047, 43072, 43123, 43136, 43204, 43216, 43225, 43232, 43255, 43259, 43259, 43264, 43309, 43312, 43347, 43360, 43388, 43392, 43456, 43471, 43481, 43520, 43574, 43584, 43597, 43600, 43609, 43616, 43638, 43642, 43643, 43648, 43714, 43739, 43741, 43744, 43759, 43762, 43766, 43777, 43782, 43785, 43790, 43793, 43798, 43808, 43814, 43816, 43822, 43968, 44010, 44012, 44013, 44016, 44025, 44032, 55203, 55216, 55238, 55243, 55291, 63744, 64109, 64112, 64217, 64256, 64262, 64275, 64279, 64285, 64296, 64298, 64310, 64312, 64316, 64318, 64318, 64320, 64321, 64323, 64324, 64326, 64433, 64467, 64829, 64848, 64911, 64914, 64967, 65008, 65019, 65024, 65039, 65056, 65062, 65075, 65076, 65101, 65103, 65136, 65140, 65142, 65276, 65296, 65305, 65313, 65338, 65343, 65343, 65345, 65370, 65382, 65470, 65474, 65479, 65482, 65487, 65490, 65495, 65498, 65500,];
    function lookupInUnicodeMap(code, map) {
        if (code < map[0]) {
            return false;
        }
        var lo = 0;
        var hi = map.length;
        var mid;
        while (lo + 1 < hi) {
            mid = lo + (hi - lo) / 2;
            mid -= mid % 2;
            if (map[mid] <= code && code <= map[mid + 1]) {
                return true;
            }
            if (code < map[mid]) {
                hi = mid;
            }
            else {
                lo = mid + 2;
            }
        }
        return false;
    }
    function isUnicodeIdentifierStart(code, languageVersion) {
        return languageVersion >= 1 ? lookupInUnicodeMap(code, unicodeES5IdentifierStart) : lookupInUnicodeMap(code, unicodeES3IdentifierStart);
    }
    function isUnicodeIdentifierPart(code, languageVersion) {
        return languageVersion >= 1 ? lookupInUnicodeMap(code, unicodeES5IdentifierPart) : lookupInUnicodeMap(code, unicodeES3IdentifierPart);
    }
    function makeReverseMap(source) {
        var result = [];
        for (var name in source) {
            if (source.hasOwnProperty(name)) {
                result[source[name]] = name;
            }
        }
        return result;
    }
    var tokenStrings = makeReverseMap(textToToken);
    function tokenToString(t) {
        return tokenStrings[t];
    }
    ts.tokenToString = tokenToString;
    function computeLineStarts(text) {
        var result = new Array();
        var pos = 0;
        var lineStart = 0;
        while (pos < text.length) {
            var ch = text.charCodeAt(pos++);
            switch (ch) {
                case 13:
                    if (text.charCodeAt(pos) === 10) {
                        pos++;
                    }
                case 10:
                    result.push(lineStart);
                    lineStart = pos;
                    break;
                default:
                    if (ch > 127 && isLineBreak(ch)) {
                        result.push(lineStart);
                        lineStart = pos;
                    }
                    break;
            }
        }
        result.push(lineStart);
        return result;
    }
    ts.computeLineStarts = computeLineStarts;
    function getPositionFromLineAndCharacter(sourceFile, line, character) {
        return computePositionFromLineAndCharacter(getLineStarts(sourceFile), line, character);
    }
    ts.getPositionFromLineAndCharacter = getPositionFromLineAndCharacter;
    function computePositionFromLineAndCharacter(lineStarts, line, character) {
        ts.Debug.assert(line > 0 && line <= lineStarts.length);
        return lineStarts[line - 1] + character - 1;
    }
    ts.computePositionFromLineAndCharacter = computePositionFromLineAndCharacter;
    function getLineStarts(sourceFile) {
        return sourceFile.lineMap || (sourceFile.lineMap = computeLineStarts(sourceFile.text));
    }
    ts.getLineStarts = getLineStarts;
    function computeLineAndCharacterOfPosition(lineStarts, position) {
        var lineNumber = ts.binarySearch(lineStarts, position);
        if (lineNumber < 0) {
            lineNumber = (~lineNumber) - 1;
        }
        return {
            line: lineNumber + 1,
            character: position - lineStarts[lineNumber] + 1
        };
    }
    ts.computeLineAndCharacterOfPosition = computeLineAndCharacterOfPosition;
    function getLineAndCharacterOfPosition(sourceFile, position) {
        return computeLineAndCharacterOfPosition(getLineStarts(sourceFile), position);
    }
    ts.getLineAndCharacterOfPosition = getLineAndCharacterOfPosition;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    function isWhiteSpace(ch) {
        return ch === 32 || ch === 9 || ch === 11 || ch === 12 || ch === 160 || ch === 5760 || ch >= 8192 && ch <= 8203 || ch === 8239 || ch === 8287 || ch === 12288 || ch === 65279;
    }
    ts.isWhiteSpace = isWhiteSpace;
    function isLineBreak(ch) {
        return ch === 10 || ch === 13 || ch === 8232 || ch === 8233 || ch === 133;
    }
    ts.isLineBreak = isLineBreak;
    function isDigit(ch) {
        return ch >= 48 && ch <= 57;
    }
    function isOctalDigit(ch) {
        return ch >= 48 && ch <= 55;
    }
    ts.isOctalDigit = isOctalDigit;
    function skipTrivia(text, pos, stopAfterLineBreak) {
        while (true) {
            var ch = text.charCodeAt(pos);
            switch (ch) {
                case 13:
                    if (text.charCodeAt(pos + 1) === 10) {
                        pos++;
                    }
                case 10:
                    pos++;
                    if (stopAfterLineBreak) {
                        return pos;
                    }
                    continue;
                case 9:
                case 11:
                case 12:
                case 32:
                    pos++;
                    continue;
                case 47:
                    if (text.charCodeAt(pos + 1) === 47) {
                        pos += 2;
                        while (pos < text.length) {
                            if (isLineBreak(text.charCodeAt(pos))) {
                                break;
                            }
                            pos++;
                        }
                        continue;
                    }
                    if (text.charCodeAt(pos + 1) === 42) {
                        pos += 2;
                        while (pos < text.length) {
                            if (text.charCodeAt(pos) === 42 && text.charCodeAt(pos + 1) === 47) {
                                pos += 2;
                                break;
                            }
                            pos++;
                        }
                        continue;
                    }
                    break;
                case 60:
                case 61:
                case 62:
                    if (isConflictMarkerTrivia(text, pos)) {
                        pos = scanConflictMarkerTrivia(text, pos);
                        continue;
                    }
                    break;
                default:
                    if (ch > 127 && (isWhiteSpace(ch) || isLineBreak(ch))) {
                        pos++;
                        continue;
                    }
                    break;
            }
            return pos;
        }
    }
    ts.skipTrivia = skipTrivia;
    var mergeConflictMarkerLength = "<<<<<<<".length;
    function isConflictMarkerTrivia(text, pos) {
        ts.Debug.assert(pos >= 0);
        if (pos === 0 || isLineBreak(text.charCodeAt(pos - 1))) {
            var ch = text.charCodeAt(pos);
            if ((pos + mergeConflictMarkerLength) < text.length) {
                for (var i = 0, n = mergeConflictMarkerLength; i < n; i++) {
                    if (text.charCodeAt(pos + i) !== ch) {
                        return false;
                    }
                }
                return ch === 61 || text.charCodeAt(pos + mergeConflictMarkerLength) === 32;
            }
        }
        return false;
    }
    function scanConflictMarkerTrivia(text, pos, error) {
        if (error) {
            error(ts.Diagnostics.Merge_conflict_marker_encountered, mergeConflictMarkerLength);
        }
        var ch = text.charCodeAt(pos);
        var len = text.length;
        if (ch === 60 || ch === 62) {
            while (pos < len && !isLineBreak(text.charCodeAt(pos))) {
                pos++;
            }
        }
        else {
            ts.Debug.assert(ch === 61);
            while (pos < len) {
                var ch = text.charCodeAt(pos);
                if (ch === 62 && isConflictMarkerTrivia(text, pos)) {
                    break;
                }
                pos++;
            }
        }
        return pos;
    }
    function getCommentRanges(text, pos, trailing) {
        var result;
        var collecting = trailing || pos === 0;
        while (true) {
            var ch = text.charCodeAt(pos);
            switch (ch) {
                case 13:
                    if (text.charCodeAt(pos + 1) === 10)
                        pos++;
                case 10:
                    pos++;
                    if (trailing) {
                        return result;
                    }
                    collecting = true;
                    if (result && result.length) {
                        result[result.length - 1].hasTrailingNewLine = true;
                    }
                    continue;
                case 9:
                case 11:
                case 12:
                case 32:
                    pos++;
                    continue;
                case 47:
                    var nextChar = text.charCodeAt(pos + 1);
                    var hasTrailingNewLine = false;
                    if (nextChar === 47 || nextChar === 42) {
                        var startPos = pos;
                        pos += 2;
                        if (nextChar === 47) {
                            while (pos < text.length) {
                                if (isLineBreak(text.charCodeAt(pos))) {
                                    hasTrailingNewLine = true;
                                    break;
                                }
                                pos++;
                            }
                        }
                        else {
                            while (pos < text.length) {
                                if (text.charCodeAt(pos) === 42 && text.charCodeAt(pos + 1) === 47) {
                                    pos += 2;
                                    break;
                                }
                                pos++;
                            }
                        }
                        if (collecting) {
                            if (!result)
                                result = [];
                            result.push({ pos: startPos, end: pos, hasTrailingNewLine: hasTrailingNewLine });
                        }
                        continue;
                    }
                    break;
                default:
                    if (ch > 127 && (isWhiteSpace(ch) || isLineBreak(ch))) {
                        if (result && result.length && isLineBreak(ch)) {
                            result[result.length - 1].hasTrailingNewLine = true;
                        }
                        pos++;
                        continue;
                    }
                    break;
            }
            return result;
        }
    }
    function getLeadingCommentRanges(text, pos) {
        return getCommentRanges(text, pos, false);
    }
    ts.getLeadingCommentRanges = getLeadingCommentRanges;
    function getTrailingCommentRanges(text, pos) {
        return getCommentRanges(text, pos, true);
    }
    ts.getTrailingCommentRanges = getTrailingCommentRanges;
    function isIdentifierStart(ch, languageVersion) {
        return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch === 36 || ch === 95 || ch > 127 && isUnicodeIdentifierStart(ch, languageVersion);
    }
    ts.isIdentifierStart = isIdentifierStart;
    function isIdentifierPart(ch, languageVersion) {
        return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch >= 48 && ch <= 57 || ch === 36 || ch === 95 || ch > 127 && isUnicodeIdentifierPart(ch, languageVersion);
    }
    ts.isIdentifierPart = isIdentifierPart;
    function createScanner(languageVersion, skipTrivia, text, onError) {
        var pos;
        var len;
        var startPos;
        var tokenPos;
        var token;
        var tokenValue;
        var precedingLineBreak;
        var tokenIsUnterminated;
        function error(message, length) {
            if (onError) {
                onError(message, length || 0);
            }
        }
        function isIdentifierStart(ch) {
            return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch === 36 || ch === 95 || ch > 127 && isUnicodeIdentifierStart(ch, languageVersion);
        }
        function isIdentifierPart(ch) {
            return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch >= 48 && ch <= 57 || ch === 36 || ch === 95 || ch > 127 && isUnicodeIdentifierPart(ch, languageVersion);
        }
        function scanNumber() {
            var start = pos;
            while (isDigit(text.charCodeAt(pos)))
                pos++;
            if (text.charCodeAt(pos) === 46) {
                pos++;
                while (isDigit(text.charCodeAt(pos)))
                    pos++;
            }
            var end = pos;
            if (text.charCodeAt(pos) === 69 || text.charCodeAt(pos) === 101) {
                pos++;
                if (text.charCodeAt(pos) === 43 || text.charCodeAt(pos) === 45)
                    pos++;
                if (isDigit(text.charCodeAt(pos))) {
                    pos++;
                    while (isDigit(text.charCodeAt(pos)))
                        pos++;
                    end = pos;
                }
                else {
                    error(ts.Diagnostics.Digit_expected);
                }
            }
            return +(text.substring(start, end));
        }
        function scanOctalDigits() {
            var start = pos;
            while (isOctalDigit(text.charCodeAt(pos))) {
                pos++;
            }
            return +(text.substring(start, pos));
        }
        function scanHexDigits(count, mustMatchCount) {
            var digits = 0;
            var value = 0;
            while (digits < count || !mustMatchCount) {
                var ch = text.charCodeAt(pos);
                if (ch >= 48 && ch <= 57) {
                    value = value * 16 + ch - 48;
                }
                else if (ch >= 65 && ch <= 70) {
                    value = value * 16 + ch - 65 + 10;
                }
                else if (ch >= 97 && ch <= 102) {
                    value = value * 16 + ch - 97 + 10;
                }
                else {
                    break;
                }
                pos++;
                digits++;
            }
            if (digits < count) {
                value = -1;
            }
            return value;
        }
        function scanString() {
            var quote = text.charCodeAt(pos++);
            var result = "";
            var start = pos;
            while (true) {
                if (pos >= len) {
                    result += text.substring(start, pos);
                    tokenIsUnterminated = true;
                    error(ts.Diagnostics.Unterminated_string_literal);
                    break;
                }
                var ch = text.charCodeAt(pos);
                if (ch === quote) {
                    result += text.substring(start, pos);
                    pos++;
                    break;
                }
                if (ch === 92) {
                    result += text.substring(start, pos);
                    result += scanEscapeSequence();
                    start = pos;
                    continue;
                }
                if (isLineBreak(ch)) {
                    result += text.substring(start, pos);
                    tokenIsUnterminated = true;
                    error(ts.Diagnostics.Unterminated_string_literal);
                    break;
                }
                pos++;
            }
            return result;
        }
        function scanTemplateAndSetTokenValue() {
            var startedWithBacktick = text.charCodeAt(pos) === 96;
            pos++;
            var start = pos;
            var contents = "";
            var resultingToken;
            while (true) {
                if (pos >= len) {
                    contents += text.substring(start, pos);
                    tokenIsUnterminated = true;
                    error(ts.Diagnostics.Unterminated_template_literal);
                    resultingToken = startedWithBacktick ? 10 : 13;
                    break;
                }
                var currChar = text.charCodeAt(pos);
                if (currChar === 96) {
                    contents += text.substring(start, pos);
                    pos++;
                    resultingToken = startedWithBacktick ? 10 : 13;
                    break;
                }
                if (currChar === 36 && pos + 1 < len && text.charCodeAt(pos + 1) === 123) {
                    contents += text.substring(start, pos);
                    pos += 2;
                    resultingToken = startedWithBacktick ? 11 : 12;
                    break;
                }
                if (currChar === 92) {
                    contents += text.substring(start, pos);
                    contents += scanEscapeSequence();
                    start = pos;
                    continue;
                }
                if (currChar === 13) {
                    contents += text.substring(start, pos);
                    pos++;
                    if (pos < len && text.charCodeAt(pos) === 10) {
                        pos++;
                    }
                    contents += "\n";
                    start = pos;
                    continue;
                }
                pos++;
            }
            ts.Debug.assert(resultingToken !== undefined);
            tokenValue = contents;
            return resultingToken;
        }
        function scanEscapeSequence() {
            pos++;
            if (pos >= len) {
                error(ts.Diagnostics.Unexpected_end_of_text);
                return "";
            }
            var ch = text.charCodeAt(pos++);
            switch (ch) {
                case 48:
                    return "\0";
                case 98:
                    return "\b";
                case 116:
                    return "\t";
                case 110:
                    return "\n";
                case 118:
                    return "\v";
                case 102:
                    return "\f";
                case 114:
                    return "\r";
                case 39:
                    return "\'";
                case 34:
                    return "\"";
                case 120:
                case 117:
                    var ch = scanHexDigits(ch === 120 ? 2 : 4, true);
                    if (ch >= 0) {
                        return String.fromCharCode(ch);
                    }
                    else {
                        error(ts.Diagnostics.Hexadecimal_digit_expected);
                        return "";
                    }
                case 13:
                    if (pos < len && text.charCodeAt(pos) === 10) {
                        pos++;
                    }
                case 10:
                case 8232:
                case 8233:
                    return "";
                default:
                    return String.fromCharCode(ch);
            }
        }
        function peekUnicodeEscape() {
            if (pos + 5 < len && text.charCodeAt(pos + 1) === 117) {
                var start = pos;
                pos += 2;
                var value = scanHexDigits(4, true);
                pos = start;
                return value;
            }
            return -1;
        }
        function scanIdentifierParts() {
            var result = "";
            var start = pos;
            while (pos < len) {
                var ch = text.charCodeAt(pos);
                if (isIdentifierPart(ch)) {
                    pos++;
                }
                else if (ch === 92) {
                    ch = peekUnicodeEscape();
                    if (!(ch >= 0 && isIdentifierPart(ch))) {
                        break;
                    }
                    result += text.substring(start, pos);
                    result += String.fromCharCode(ch);
                    pos += 6;
                    start = pos;
                }
                else {
                    break;
                }
            }
            result += text.substring(start, pos);
            return result;
        }
        function getIdentifierToken() {
            var len = tokenValue.length;
            if (len >= 2 && len <= 11) {
                var ch = tokenValue.charCodeAt(0);
                if (ch >= 97 && ch <= 122 && hasOwnProperty.call(textToToken, tokenValue)) {
                    return token = textToToken[tokenValue];
                }
            }
            return token = 64;
        }
        function scanBinaryOrOctalDigits(base) {
            ts.Debug.assert(base !== 2 || base !== 8, "Expected either base 2 or base 8");
            var value = 0;
            var numberOfDigits = 0;
            while (true) {
                var ch = text.charCodeAt(pos);
                var valueOfCh = ch - 48;
                if (!isDigit(ch) || valueOfCh >= base) {
                    break;
                }
                value = value * base + valueOfCh;
                pos++;
                numberOfDigits++;
            }
            if (numberOfDigits === 0) {
                return -1;
            }
            return value;
        }
        function scan() {
            startPos = pos;
            precedingLineBreak = false;
            tokenIsUnterminated = false;
            while (true) {
                tokenPos = pos;
                if (pos >= len) {
                    return token = 1;
                }
                var ch = text.charCodeAt(pos);
                switch (ch) {
                    case 10:
                    case 13:
                        precedingLineBreak = true;
                        if (skipTrivia) {
                            pos++;
                            continue;
                        }
                        else {
                            if (ch === 13 && pos + 1 < len && text.charCodeAt(pos + 1) === 10) {
                                pos += 2;
                            }
                            else {
                                pos++;
                            }
                            return token = 4;
                        }
                    case 9:
                    case 11:
                    case 12:
                    case 32:
                        if (skipTrivia) {
                            pos++;
                            continue;
                        }
                        else {
                            while (pos < len && isWhiteSpace(text.charCodeAt(pos))) {
                                pos++;
                            }
                            return token = 5;
                        }
                    case 33:
                        if (text.charCodeAt(pos + 1) === 61) {
                            if (text.charCodeAt(pos + 2) === 61) {
                                return pos += 3, token = 31;
                            }
                            return pos += 2, token = 29;
                        }
                        return pos++, token = 46;
                    case 34:
                    case 39:
                        tokenValue = scanString();
                        return token = 8;
                    case 96:
                        return token = scanTemplateAndSetTokenValue();
                    case 37:
                        if (text.charCodeAt(pos + 1) === 61) {
                            return pos += 2, token = 57;
                        }
                        return pos++, token = 37;
                    case 38:
                        if (text.charCodeAt(pos + 1) === 38) {
                            return pos += 2, token = 48;
                        }
                        if (text.charCodeAt(pos + 1) === 61) {
                            return pos += 2, token = 61;
                        }
                        return pos++, token = 43;
                    case 40:
                        return pos++, token = 16;
                    case 41:
                        return pos++, token = 17;
                    case 42:
                        if (text.charCodeAt(pos + 1) === 61) {
                            return pos += 2, token = 55;
                        }
                        return pos++, token = 35;
                    case 43:
                        if (text.charCodeAt(pos + 1) === 43) {
                            return pos += 2, token = 38;
                        }
                        if (text.charCodeAt(pos + 1) === 61) {
                            return pos += 2, token = 53;
                        }
                        return pos++, token = 33;
                    case 44:
                        return pos++, token = 23;
                    case 45:
                        if (text.charCodeAt(pos + 1) === 45) {
                            return pos += 2, token = 39;
                        }
                        if (text.charCodeAt(pos + 1) === 61) {
                            return pos += 2, token = 54;
                        }
                        return pos++, token = 34;
                    case 46:
                        if (isDigit(text.charCodeAt(pos + 1))) {
                            tokenValue = "" + scanNumber();
                            return token = 7;
                        }
                        if (text.charCodeAt(pos + 1) === 46 && text.charCodeAt(pos + 2) === 46) {
                            return pos += 3, token = 21;
                        }
                        return pos++, token = 20;
                    case 47:
                        if (text.charCodeAt(pos + 1) === 47) {
                            pos += 2;
                            while (pos < len) {
                                if (isLineBreak(text.charCodeAt(pos))) {
                                    break;
                                }
                                pos++;
                            }
                            if (skipTrivia) {
                                continue;
                            }
                            else {
                                return token = 2;
                            }
                        }
                        if (text.charCodeAt(pos + 1) === 42) {
                            pos += 2;
                            var commentClosed = false;
                            while (pos < len) {
                                var ch = text.charCodeAt(pos);
                                if (ch === 42 && text.charCodeAt(pos + 1) === 47) {
                                    pos += 2;
                                    commentClosed = true;
                                    break;
                                }
                                if (isLineBreak(ch)) {
                                    precedingLineBreak = true;
                                }
                                pos++;
                            }
                            if (!commentClosed) {
                                error(ts.Diagnostics.Asterisk_Slash_expected);
                            }
                            if (skipTrivia) {
                                continue;
                            }
                            else {
                                tokenIsUnterminated = !commentClosed;
                                return token = 3;
                            }
                        }
                        if (text.charCodeAt(pos + 1) === 61) {
                            return pos += 2, token = 56;
                        }
                        return pos++, token = 36;
                    case 48:
                        if (pos + 2 < len && (text.charCodeAt(pos + 1) === 88 || text.charCodeAt(pos + 1) === 120)) {
                            pos += 2;
                            var value = scanHexDigits(1, false);
                            if (value < 0) {
                                error(ts.Diagnostics.Hexadecimal_digit_expected);
                                value = 0;
                            }
                            tokenValue = "" + value;
                            return token = 7;
                        }
                        else if (pos + 2 < len && (text.charCodeAt(pos + 1) === 66 || text.charCodeAt(pos + 1) === 98)) {
                            pos += 2;
                            var value = scanBinaryOrOctalDigits(2);
                            if (value < 0) {
                                error(ts.Diagnostics.Binary_digit_expected);
                                value = 0;
                            }
                            tokenValue = "" + value;
                            return token = 7;
                        }
                        else if (pos + 2 < len && (text.charCodeAt(pos + 1) === 79 || text.charCodeAt(pos + 1) === 111)) {
                            pos += 2;
                            var value = scanBinaryOrOctalDigits(8);
                            if (value < 0) {
                                error(ts.Diagnostics.Octal_digit_expected);
                                value = 0;
                            }
                            tokenValue = "" + value;
                            return token = 7;
                        }
                        if (pos + 1 < len && isOctalDigit(text.charCodeAt(pos + 1))) {
                            tokenValue = "" + scanOctalDigits();
                            return token = 7;
                        }
                    case 49:
                    case 50:
                    case 51:
                    case 52:
                    case 53:
                    case 54:
                    case 55:
                    case 56:
                    case 57:
                        tokenValue = "" + scanNumber();
                        return token = 7;
                    case 58:
                        return pos++, token = 51;
                    case 59:
                        return pos++, token = 22;
                    case 60:
                        if (isConflictMarkerTrivia(text, pos)) {
                            pos = scanConflictMarkerTrivia(text, pos, error);
                            if (skipTrivia) {
                                continue;
                            }
                            else {
                                return token = 6;
                            }
                        }
                        if (text.charCodeAt(pos + 1) === 60) {
                            if (text.charCodeAt(pos + 2) === 61) {
                                return pos += 3, token = 58;
                            }
                            return pos += 2, token = 40;
                        }
                        if (text.charCodeAt(pos + 1) === 61) {
                            return pos += 2, token = 26;
                        }
                        return pos++, token = 24;
                    case 61:
                        if (isConflictMarkerTrivia(text, pos)) {
                            pos = scanConflictMarkerTrivia(text, pos, error);
                            if (skipTrivia) {
                                continue;
                            }
                            else {
                                return token = 6;
                            }
                        }
                        if (text.charCodeAt(pos + 1) === 61) {
                            if (text.charCodeAt(pos + 2) === 61) {
                                return pos += 3, token = 30;
                            }
                            return pos += 2, token = 28;
                        }
                        if (text.charCodeAt(pos + 1) === 62) {
                            return pos += 2, token = 32;
                        }
                        return pos++, token = 52;
                    case 62:
                        if (isConflictMarkerTrivia(text, pos)) {
                            pos = scanConflictMarkerTrivia(text, pos, error);
                            if (skipTrivia) {
                                continue;
                            }
                            else {
                                return token = 6;
                            }
                        }
                        return pos++, token = 25;
                    case 63:
                        return pos++, token = 50;
                    case 91:
                        return pos++, token = 18;
                    case 93:
                        return pos++, token = 19;
                    case 94:
                        if (text.charCodeAt(pos + 1) === 61) {
                            return pos += 2, token = 63;
                        }
                        return pos++, token = 45;
                    case 123:
                        return pos++, token = 14;
                    case 124:
                        if (text.charCodeAt(pos + 1) === 124) {
                            return pos += 2, token = 49;
                        }
                        if (text.charCodeAt(pos + 1) === 61) {
                            return pos += 2, token = 62;
                        }
                        return pos++, token = 44;
                    case 125:
                        return pos++, token = 15;
                    case 126:
                        return pos++, token = 47;
                    case 92:
                        var ch = peekUnicodeEscape();
                        if (ch >= 0 && isIdentifierStart(ch)) {
                            pos += 6;
                            tokenValue = String.fromCharCode(ch) + scanIdentifierParts();
                            return token = getIdentifierToken();
                        }
                        error(ts.Diagnostics.Invalid_character);
                        return pos++, token = 0;
                    default:
                        if (isIdentifierStart(ch)) {
                            pos++;
                            while (pos < len && isIdentifierPart(ch = text.charCodeAt(pos)))
                                pos++;
                            tokenValue = text.substring(tokenPos, pos);
                            if (ch === 92) {
                                tokenValue += scanIdentifierParts();
                            }
                            return token = getIdentifierToken();
                        }
                        else if (isWhiteSpace(ch)) {
                            pos++;
                            continue;
                        }
                        else if (isLineBreak(ch)) {
                            precedingLineBreak = true;
                            pos++;
                            continue;
                        }
                        error(ts.Diagnostics.Invalid_character);
                        return pos++, token = 0;
                }
            }
        }
        function reScanGreaterToken() {
            if (token === 25) {
                if (text.charCodeAt(pos) === 62) {
                    if (text.charCodeAt(pos + 1) === 62) {
                        if (text.charCodeAt(pos + 2) === 61) {
                            return pos += 3, token = 60;
                        }
                        return pos += 2, token = 42;
                    }
                    if (text.charCodeAt(pos + 1) === 61) {
                        return pos += 2, token = 59;
                    }
                    return pos++, token = 41;
                }
                if (text.charCodeAt(pos) === 61) {
                    return pos++, token = 27;
                }
            }
            return token;
        }
        function reScanSlashToken() {
            if (token === 36 || token === 56) {
                var p = tokenPos + 1;
                var inEscape = false;
                var inCharacterClass = false;
                while (true) {
                    if (p >= len) {
                        tokenIsUnterminated = true;
                        error(ts.Diagnostics.Unterminated_regular_expression_literal);
                        break;
                    }
                    var ch = text.charCodeAt(p);
                    if (isLineBreak(ch)) {
                        tokenIsUnterminated = true;
                        error(ts.Diagnostics.Unterminated_regular_expression_literal);
                        break;
                    }
                    if (inEscape) {
                        inEscape = false;
                    }
                    else if (ch === 47 && !inCharacterClass) {
                        p++;
                        break;
                    }
                    else if (ch === 91) {
                        inCharacterClass = true;
                    }
                    else if (ch === 92) {
                        inEscape = true;
                    }
                    else if (ch === 93) {
                        inCharacterClass = false;
                    }
                    p++;
                }
                while (p < len && isIdentifierPart(text.charCodeAt(p))) {
                    p++;
                }
                pos = p;
                tokenValue = text.substring(tokenPos, pos);
                token = 9;
            }
            return token;
        }
        function reScanTemplateToken() {
            ts.Debug.assert(token === 15, "'reScanTemplateToken' should only be called on a '}'");
            pos = tokenPos;
            return token = scanTemplateAndSetTokenValue();
        }
        function speculationHelper(callback, isLookahead) {
            var savePos = pos;
            var saveStartPos = startPos;
            var saveTokenPos = tokenPos;
            var saveToken = token;
            var saveTokenValue = tokenValue;
            var savePrecedingLineBreak = precedingLineBreak;
            var result = callback();
            if (!result || isLookahead) {
                pos = savePos;
                startPos = saveStartPos;
                tokenPos = saveTokenPos;
                token = saveToken;
                tokenValue = saveTokenValue;
                precedingLineBreak = savePrecedingLineBreak;
            }
            return result;
        }
        function lookAhead(callback) {
            return speculationHelper(callback, true);
        }
        function tryScan(callback) {
            return speculationHelper(callback, false);
        }
        function setText(newText) {
            text = newText || "";
            len = text.length;
            setTextPos(0);
        }
        function setTextPos(textPos) {
            pos = textPos;
            startPos = textPos;
            tokenPos = textPos;
            token = 0;
            precedingLineBreak = false;
        }
        setText(text);
        return {
            getStartPos: function () { return startPos; },
            getTextPos: function () { return pos; },
            getToken: function () { return token; },
            getTokenPos: function () { return tokenPos; },
            getTokenText: function () { return text.substring(tokenPos, pos); },
            getTokenValue: function () { return tokenValue; },
            hasPrecedingLineBreak: function () { return precedingLineBreak; },
            isIdentifier: function () { return token === 64 || token > 100; },
            isReservedWord: function () { return token >= 65 && token <= 100; },
            isUnterminated: function () { return tokenIsUnterminated; },
            reScanGreaterToken: reScanGreaterToken,
            reScanSlashToken: reScanSlashToken,
            reScanTemplateToken: reScanTemplateToken,
            scan: scan,
            setText: setText,
            setTextPos: setTextPos,
            tryScan: tryScan,
            lookAhead: lookAhead
        };
    }
    ts.createScanner = createScanner;
})(ts || (ts = {}));
var ts;
(function (ts) {
    function getDeclarationOfKind(symbol, kind) {
        var declarations = symbol.declarations;
        for (var i = 0; i < declarations.length; i++) {
            var declaration = declarations[i];
            if (declaration.kind === kind) {
                return declaration;
            }
        }
        return undefined;
    }
    ts.getDeclarationOfKind = getDeclarationOfKind;
    var stringWriters = [];
    function getSingleLineStringWriter() {
        if (stringWriters.length == 0) {
            var str = "";
            var writeText = function (text) { return str += text; };
            return {
                string: function () { return str; },
                writeKeyword: writeText,
                writeOperator: writeText,
                writePunctuation: writeText,
                writeSpace: writeText,
                writeStringLiteral: writeText,
                writeParameter: writeText,
                writeSymbol: writeText,
                writeLine: function () { return str += " "; },
                increaseIndent: function () {
                },
                decreaseIndent: function () {
                },
                clear: function () { return str = ""; },
                trackSymbol: function () {
                }
            };
        }
        return stringWriters.pop();
    }
    ts.getSingleLineStringWriter = getSingleLineStringWriter;
    function releaseStringWriter(writer) {
        writer.clear();
        stringWriters.push(writer);
    }
    ts.releaseStringWriter = releaseStringWriter;
    function getFullWidth(node) {
        return node.end - node.pos;
    }
    ts.getFullWidth = getFullWidth;
    function containsParseError(node) {
        aggregateChildData(node);
        return (node.parserContextFlags & 32) !== 0;
    }
    ts.containsParseError = containsParseError;
    function aggregateChildData(node) {
        if (!(node.parserContextFlags & 64)) {
            var thisNodeOrAnySubNodesHasError = ((node.parserContextFlags & 16) !== 0) || ts.forEachChild(node, containsParseError);
            if (thisNodeOrAnySubNodesHasError) {
                node.parserContextFlags |= 32;
            }
            node.parserContextFlags |= 64;
        }
    }
    function getSourceFileOfNode(node) {
        while (node && node.kind !== 207) {
            node = node.parent;
        }
        return node;
    }
    ts.getSourceFileOfNode = getSourceFileOfNode;
    function nodePosToString(node) {
        var file = getSourceFileOfNode(node);
        var loc = ts.getLineAndCharacterOfPosition(file, node.pos);
        return file.fileName + "(" + loc.line + "," + loc.character + ")";
    }
    ts.nodePosToString = nodePosToString;
    function getStartPosOfNode(node) {
        return node.pos;
    }
    ts.getStartPosOfNode = getStartPosOfNode;
    function nodeIsMissing(node) {
        if (!node) {
            return true;
        }
        return node.pos === node.end && node.kind !== 1;
    }
    ts.nodeIsMissing = nodeIsMissing;
    function nodeIsPresent(node) {
        return !nodeIsMissing(node);
    }
    ts.nodeIsPresent = nodeIsPresent;
    function getTokenPosOfNode(node, sourceFile) {
        if (nodeIsMissing(node)) {
            return node.pos;
        }
        return ts.skipTrivia((sourceFile || getSourceFileOfNode(node)).text, node.pos);
    }
    ts.getTokenPosOfNode = getTokenPosOfNode;
    function getSourceTextOfNodeFromSourceFile(sourceFile, node) {
        if (nodeIsMissing(node)) {
            return "";
        }
        var text = sourceFile.text;
        return text.substring(ts.skipTrivia(text, node.pos), node.end);
    }
    ts.getSourceTextOfNodeFromSourceFile = getSourceTextOfNodeFromSourceFile;
    function getTextOfNodeFromSourceText(sourceText, node) {
        if (nodeIsMissing(node)) {
            return "";
        }
        return sourceText.substring(ts.skipTrivia(sourceText, node.pos), node.end);
    }
    ts.getTextOfNodeFromSourceText = getTextOfNodeFromSourceText;
    function getTextOfNode(node) {
        return getSourceTextOfNodeFromSourceFile(getSourceFileOfNode(node), node);
    }
    ts.getTextOfNode = getTextOfNode;
    function escapeIdentifier(identifier) {
        return identifier.length >= 2 && identifier.charCodeAt(0) === 95 && identifier.charCodeAt(1) === 95 ? "_" + identifier : identifier;
    }
    ts.escapeIdentifier = escapeIdentifier;
    function unescapeIdentifier(identifier) {
        return identifier.length >= 3 && identifier.charCodeAt(0) === 95 && identifier.charCodeAt(1) === 95 && identifier.charCodeAt(2) === 95 ? identifier.substr(1) : identifier;
    }
    ts.unescapeIdentifier = unescapeIdentifier;
    function declarationNameToString(name) {
        return getFullWidth(name) === 0 ? "(Missing)" : getTextOfNode(name);
    }
    ts.declarationNameToString = declarationNameToString;
    function createDiagnosticForNode(node, message, arg0, arg1, arg2) {
        node = getErrorSpanForNode(node);
        var file = getSourceFileOfNode(node);
        var start = getTokenPosOfNode(node, file);
        var length = node.end - start;
        return ts.createFileDiagnostic(file, start, length, message, arg0, arg1, arg2);
    }
    ts.createDiagnosticForNode = createDiagnosticForNode;
    function createDiagnosticForNodeFromMessageChain(node, messageChain) {
        node = getErrorSpanForNode(node);
        var file = getSourceFileOfNode(node);
        var start = ts.skipTrivia(file.text, node.pos);
        var length = node.end - start;
        return {
            file: file,
            start: start,
            length: length,
            code: messageChain.code,
            category: messageChain.category,
            messageText: messageChain.next ? messageChain : messageChain.messageText
        };
    }
    ts.createDiagnosticForNodeFromMessageChain = createDiagnosticForNodeFromMessageChain;
    function getErrorSpanForNode(node) {
        var errorSpan;
        switch (node.kind) {
            case 188:
            case 146:
            case 191:
            case 192:
            case 195:
            case 194:
            case 206:
                errorSpan = node.name;
                break;
        }
        return errorSpan && errorSpan.pos < errorSpan.end ? errorSpan : node;
    }
    ts.getErrorSpanForNode = getErrorSpanForNode;
    function isExternalModule(file) {
        return file.externalModuleIndicator !== undefined;
    }
    ts.isExternalModule = isExternalModule;
    function isDeclarationFile(file) {
        return (file.flags & 1024) !== 0;
    }
    ts.isDeclarationFile = isDeclarationFile;
    function isConstEnumDeclaration(node) {
        return node.kind === 194 && isConst(node);
    }
    ts.isConstEnumDeclaration = isConstEnumDeclaration;
    function walkUpBindingElementsAndPatterns(node) {
        while (node && (node.kind === 146 || isBindingPattern(node))) {
            node = node.parent;
        }
        return node;
    }
    function getCombinedNodeFlags(node) {
        node = walkUpBindingElementsAndPatterns(node);
        var flags = node.flags;
        if (node.kind === 188) {
            node = node.parent;
        }
        if (node && node.kind === 189) {
            flags |= node.flags;
            node = node.parent;
        }
        if (node && node.kind === 171) {
            flags |= node.flags;
        }
        return flags;
    }
    ts.getCombinedNodeFlags = getCombinedNodeFlags;
    function isConst(node) {
        return !!(getCombinedNodeFlags(node) & 4096);
    }
    ts.isConst = isConst;
    function isLet(node) {
        return !!(getCombinedNodeFlags(node) & 2048);
    }
    ts.isLet = isLet;
    function isPrologueDirective(node) {
        return node.kind === 173 && node.expression.kind === 8;
    }
    ts.isPrologueDirective = isPrologueDirective;
    function getLeadingCommentRangesOfNode(node, sourceFileOfNode) {
        sourceFileOfNode = sourceFileOfNode || getSourceFileOfNode(node);
        if (node.kind === 124 || node.kind === 123) {
            return ts.concatenate(ts.getTrailingCommentRanges(sourceFileOfNode.text, node.pos), ts.getLeadingCommentRanges(sourceFileOfNode.text, node.pos));
        }
        else {
            return ts.getLeadingCommentRanges(sourceFileOfNode.text, node.pos);
        }
    }
    ts.getLeadingCommentRangesOfNode = getLeadingCommentRangesOfNode;
    function getJsDocComments(node, sourceFileOfNode) {
        return ts.filter(getLeadingCommentRangesOfNode(node, sourceFileOfNode), isJsDocComment);
        function isJsDocComment(comment) {
            return sourceFileOfNode.text.charCodeAt(comment.pos + 1) === 42 && sourceFileOfNode.text.charCodeAt(comment.pos + 2) === 42 && sourceFileOfNode.text.charCodeAt(comment.pos + 3) !== 47;
        }
    }
    ts.getJsDocComments = getJsDocComments;
    ts.fullTripleSlashReferencePathRegEx = /^(\/\/\/\s*<reference\s+path\s*=\s*)('|")(.+?)\2.*?\/>/;
    function forEachReturnStatement(body, visitor) {
        return traverse(body);
        function traverse(node) {
            switch (node.kind) {
                case 181:
                    return visitor(node);
                case 170:
                case 174:
                case 175:
                case 176:
                case 177:
                case 178:
                case 182:
                case 183:
                case 200:
                case 201:
                case 184:
                case 186:
                case 203:
                    return ts.forEachChild(node, traverse);
            }
        }
    }
    ts.forEachReturnStatement = forEachReturnStatement;
    function isAnyFunction(node) {
        if (node) {
            switch (node.kind) {
                case 129:
                case 156:
                case 190:
                case 157:
                case 128:
                case 127:
                case 130:
                case 131:
                case 132:
                case 133:
                case 134:
                case 136:
                case 137:
                case 156:
                case 157:
                case 190:
                    return true;
            }
        }
        return false;
    }
    ts.isAnyFunction = isAnyFunction;
    function isFunctionBlock(node) {
        return node && node.kind === 170 && isAnyFunction(node.parent);
    }
    ts.isFunctionBlock = isFunctionBlock;
    function isObjectLiteralMethod(node) {
        return node && node.kind === 128 && node.parent.kind === 148;
    }
    ts.isObjectLiteralMethod = isObjectLiteralMethod;
    function getContainingFunction(node) {
        while (true) {
            node = node.parent;
            if (!node || isAnyFunction(node)) {
                return node;
            }
        }
    }
    ts.getContainingFunction = getContainingFunction;
    function getThisContainer(node, includeArrowFunctions) {
        while (true) {
            node = node.parent;
            if (!node) {
                return undefined;
            }
            switch (node.kind) {
                case 122:
                    if (node.parent.parent.kind === 191) {
                        return node;
                    }
                    node = node.parent;
                    break;
                case 157:
                    if (!includeArrowFunctions) {
                        continue;
                    }
                case 190:
                case 156:
                case 195:
                case 126:
                case 125:
                case 128:
                case 127:
                case 129:
                case 130:
                case 131:
                case 194:
                case 207:
                    return node;
            }
        }
    }
    ts.getThisContainer = getThisContainer;
    function getSuperContainer(node, includeFunctions) {
        while (true) {
            node = node.parent;
            if (!node)
                return node;
            switch (node.kind) {
                case 122:
                    if (node.parent.parent.kind === 191) {
                        return node;
                    }
                    node = node.parent;
                    break;
                case 190:
                case 156:
                case 157:
                    if (!includeFunctions) {
                        continue;
                    }
                case 126:
                case 125:
                case 128:
                case 127:
                case 129:
                case 130:
                case 131:
                    return node;
            }
        }
    }
    ts.getSuperContainer = getSuperContainer;
    function getInvokedExpression(node) {
        if (node.kind === 153) {
            return node.tag;
        }
        return node.expression;
    }
    ts.getInvokedExpression = getInvokedExpression;
    function isExpression(node) {
        switch (node.kind) {
            case 92:
            case 90:
            case 88:
            case 94:
            case 79:
            case 9:
            case 147:
            case 148:
            case 149:
            case 150:
            case 151:
            case 152:
            case 153:
            case 154:
            case 155:
            case 156:
            case 157:
            case 160:
            case 158:
            case 159:
            case 161:
            case 162:
            case 163:
            case 164:
            case 167:
            case 165:
            case 10:
            case 168:
                return true;
            case 121:
                while (node.parent.kind === 121) {
                    node = node.parent;
                }
                return node.parent.kind === 138;
            case 64:
                if (node.parent.kind === 138) {
                    return true;
                }
            case 7:
            case 8:
                var parent = node.parent;
                switch (parent.kind) {
                    case 188:
                    case 124:
                    case 126:
                    case 125:
                    case 206:
                    case 204:
                    case 146:
                        return parent.initializer === node;
                    case 173:
                    case 174:
                    case 175:
                    case 176:
                    case 181:
                    case 182:
                    case 183:
                    case 200:
                    case 185:
                    case 183:
                        return parent.expression === node;
                    case 177:
                        var forStatement = parent;
                        return (forStatement.initializer === node && forStatement.initializer.kind !== 189) || forStatement.condition === node || forStatement.iterator === node;
                    case 178:
                        var forInStatement = parent;
                        return (forInStatement.initializer === node && forInStatement.initializer.kind !== 189) || forInStatement.expression === node;
                    case 154:
                        return node === parent.expression;
                    case 169:
                        return node === parent.expression;
                    case 122:
                        return node === parent.expression;
                    default:
                        if (isExpression(parent)) {
                            return true;
                        }
                }
        }
        return false;
    }
    ts.isExpression = isExpression;
    function isInstantiatedModule(node, preserveConstEnums) {
        var moduleState = ts.getModuleInstanceState(node);
        return moduleState === 1 || (preserveConstEnums && moduleState === 2);
    }
    ts.isInstantiatedModule = isInstantiatedModule;
    function isExternalModuleImportDeclaration(node) {
        return node.kind === 197 && node.moduleReference.kind === 199;
    }
    ts.isExternalModuleImportDeclaration = isExternalModuleImportDeclaration;
    function getExternalModuleImportDeclarationExpression(node) {
        ts.Debug.assert(isExternalModuleImportDeclaration(node));
        return node.moduleReference.expression;
    }
    ts.getExternalModuleImportDeclarationExpression = getExternalModuleImportDeclarationExpression;
    function isInternalModuleImportDeclaration(node) {
        return node.kind === 197 && node.moduleReference.kind !== 199;
    }
    ts.isInternalModuleImportDeclaration = isInternalModuleImportDeclaration;
    function hasDotDotDotToken(node) {
        return node && node.kind === 124 && node.dotDotDotToken !== undefined;
    }
    ts.hasDotDotDotToken = hasDotDotDotToken;
    function hasQuestionToken(node) {
        if (node) {
            switch (node.kind) {
                case 124:
                    return node.questionToken !== undefined;
                case 128:
                case 127:
                    return node.questionToken !== undefined;
                case 205:
                case 204:
                case 126:
                case 125:
                    return node.questionToken !== undefined;
            }
        }
        return false;
    }
    ts.hasQuestionToken = hasQuestionToken;
    function hasRestParameters(s) {
        return s.parameters.length > 0 && s.parameters[s.parameters.length - 1].dotDotDotToken !== undefined;
    }
    ts.hasRestParameters = hasRestParameters;
    function isLiteralKind(kind) {
        return 7 <= kind && kind <= 10;
    }
    ts.isLiteralKind = isLiteralKind;
    function isTextualLiteralKind(kind) {
        return kind === 8 || kind === 10;
    }
    ts.isTextualLiteralKind = isTextualLiteralKind;
    function isTemplateLiteralKind(kind) {
        return 10 <= kind && kind <= 13;
    }
    ts.isTemplateLiteralKind = isTemplateLiteralKind;
    function isBindingPattern(node) {
        return node.kind === 145 || node.kind === 144;
    }
    ts.isBindingPattern = isBindingPattern;
    function isInAmbientContext(node) {
        while (node) {
            if (node.flags & (2 | 1024)) {
                return true;
            }
            node = node.parent;
        }
        return false;
    }
    ts.isInAmbientContext = isInAmbientContext;
    function isDeclaration(node) {
        switch (node.kind) {
            case 123:
            case 124:
            case 188:
            case 146:
            case 126:
            case 125:
            case 204:
            case 205:
            case 206:
            case 128:
            case 127:
            case 190:
            case 130:
            case 131:
            case 129:
            case 191:
            case 192:
            case 193:
            case 194:
            case 195:
            case 197:
                return true;
        }
        return false;
    }
    ts.isDeclaration = isDeclaration;
    function isStatement(n) {
        switch (n.kind) {
            case 180:
            case 179:
            case 187:
            case 175:
            case 173:
            case 172:
            case 178:
            case 177:
            case 174:
            case 184:
            case 181:
            case 183:
            case 93:
            case 186:
            case 171:
            case 176:
            case 182:
            case 198:
                return true;
            default:
                return false;
        }
    }
    ts.isStatement = isStatement;
    function isDeclarationOrFunctionExpressionOrCatchVariableName(name) {
        if (name.kind !== 64 && name.kind !== 8 && name.kind !== 7) {
            return false;
        }
        var parent = name.parent;
        if (isDeclaration(parent) || parent.kind === 156) {
            return parent.name === name;
        }
        if (parent.kind === 203) {
            return parent.name === name;
        }
        return false;
    }
    ts.isDeclarationOrFunctionExpressionOrCatchVariableName = isDeclarationOrFunctionExpressionOrCatchVariableName;
    function getClassBaseTypeNode(node) {
        var heritageClause = getHeritageClause(node.heritageClauses, 78);
        return heritageClause && heritageClause.types.length > 0 ? heritageClause.types[0] : undefined;
    }
    ts.getClassBaseTypeNode = getClassBaseTypeNode;
    function getClassImplementedTypeNodes(node) {
        var heritageClause = getHeritageClause(node.heritageClauses, 101);
        return heritageClause ? heritageClause.types : undefined;
    }
    ts.getClassImplementedTypeNodes = getClassImplementedTypeNodes;
    function getInterfaceBaseTypeNodes(node) {
        var heritageClause = getHeritageClause(node.heritageClauses, 78);
        return heritageClause ? heritageClause.types : undefined;
    }
    ts.getInterfaceBaseTypeNodes = getInterfaceBaseTypeNodes;
    function getHeritageClause(clauses, kind) {
        if (clauses) {
            for (var i = 0, n = clauses.length; i < n; i++) {
                if (clauses[i].token === kind) {
                    return clauses[i];
                }
            }
        }
        return undefined;
    }
    ts.getHeritageClause = getHeritageClause;
    function tryResolveScriptReference(host, sourceFile, reference) {
        if (!host.getCompilerOptions().noResolve) {
            var referenceFileName = ts.isRootedDiskPath(reference.fileName) ? reference.fileName : ts.combinePaths(ts.getDirectoryPath(sourceFile.fileName), reference.fileName);
            referenceFileName = ts.getNormalizedAbsolutePath(referenceFileName, host.getCurrentDirectory());
            return host.getSourceFile(referenceFileName);
        }
    }
    ts.tryResolveScriptReference = tryResolveScriptReference;
    function getAncestor(node, kind) {
        switch (kind) {
            case 191:
                while (node) {
                    switch (node.kind) {
                        case 191:
                            return node;
                        case 194:
                        case 192:
                        case 193:
                        case 195:
                        case 197:
                            return undefined;
                        default:
                            node = node.parent;
                            continue;
                    }
                }
                break;
            default:
                while (node) {
                    if (node.kind === kind) {
                        return node;
                    }
                    node = node.parent;
                }
                break;
        }
        return undefined;
    }
    ts.getAncestor = getAncestor;
    function getFileReferenceFromReferencePath(comment, commentRange) {
        var simpleReferenceRegEx = /^\/\/\/\s*<reference\s+/gim;
        var isNoDefaultLibRegEx = /^(\/\/\/\s*<reference\s+no-default-lib\s*=\s*)('|")(.+?)\2\s*\/>/gim;
        if (simpleReferenceRegEx.exec(comment)) {
            if (isNoDefaultLibRegEx.exec(comment)) {
                return {
                    isNoDefaultLib: true
                };
            }
            else {
                var matchResult = ts.fullTripleSlashReferencePathRegEx.exec(comment);
                if (matchResult) {
                    var start = commentRange.pos;
                    var end = commentRange.end;
                    return {
                        fileReference: {
                            pos: start,
                            end: end,
                            fileName: matchResult[3]
                        },
                        isNoDefaultLib: false
                    };
                }
                else {
                    return {
                        diagnosticMessage: ts.Diagnostics.Invalid_reference_directive_syntax,
                        isNoDefaultLib: false
                    };
                }
            }
        }
        return undefined;
    }
    ts.getFileReferenceFromReferencePath = getFileReferenceFromReferencePath;
    function isKeyword(token) {
        return 65 <= token && token <= 120;
    }
    ts.isKeyword = isKeyword;
    function isTrivia(token) {
        return 2 <= token && token <= 6;
    }
    ts.isTrivia = isTrivia;
    function isModifier(token) {
        switch (token) {
            case 107:
            case 105:
            case 106:
            case 108:
            case 77:
            case 113:
            case 69:
                return true;
        }
        return false;
    }
    ts.isModifier = isModifier;
    function textSpanEnd(span) {
        return span.start + span.length;
    }
    ts.textSpanEnd = textSpanEnd;
    function textSpanIsEmpty(span) {
        return span.length === 0;
    }
    ts.textSpanIsEmpty = textSpanIsEmpty;
    function textSpanContainsPosition(span, position) {
        return position >= span.start && position < textSpanEnd(span);
    }
    ts.textSpanContainsPosition = textSpanContainsPosition;
    function textSpanContainsTextSpan(span, other) {
        return other.start >= span.start && textSpanEnd(other) <= textSpanEnd(span);
    }
    ts.textSpanContainsTextSpan = textSpanContainsTextSpan;
    function textSpanOverlapsWith(span, other) {
        var overlapStart = Math.max(span.start, other.start);
        var overlapEnd = Math.min(textSpanEnd(span), textSpanEnd(other));
        return overlapStart < overlapEnd;
    }
    ts.textSpanOverlapsWith = textSpanOverlapsWith;
    function textSpanOverlap(span1, span2) {
        var overlapStart = Math.max(span1.start, span2.start);
        var overlapEnd = Math.min(textSpanEnd(span1), textSpanEnd(span2));
        if (overlapStart < overlapEnd) {
            return createTextSpanFromBounds(overlapStart, overlapEnd);
        }
        return undefined;
    }
    ts.textSpanOverlap = textSpanOverlap;
    function textSpanIntersectsWithTextSpan(span, other) {
        return other.start <= textSpanEnd(span) && textSpanEnd(other) >= span.start;
    }
    ts.textSpanIntersectsWithTextSpan = textSpanIntersectsWithTextSpan;
    function textSpanIntersectsWith(span, start, length) {
        var end = start + length;
        return start <= textSpanEnd(span) && end >= span.start;
    }
    ts.textSpanIntersectsWith = textSpanIntersectsWith;
    function textSpanIntersectsWithPosition(span, position) {
        return position <= textSpanEnd(span) && position >= span.start;
    }
    ts.textSpanIntersectsWithPosition = textSpanIntersectsWithPosition;
    function textSpanIntersection(span1, span2) {
        var intersectStart = Math.max(span1.start, span2.start);
        var intersectEnd = Math.min(textSpanEnd(span1), textSpanEnd(span2));
        if (intersectStart <= intersectEnd) {
            return createTextSpanFromBounds(intersectStart, intersectEnd);
        }
        return undefined;
    }
    ts.textSpanIntersection = textSpanIntersection;
    function createTextSpan(start, length) {
        if (start < 0) {
            throw new Error("start < 0");
        }
        if (length < 0) {
            throw new Error("length < 0");
        }
        return { start: start, length: length };
    }
    ts.createTextSpan = createTextSpan;
    function createTextSpanFromBounds(start, end) {
        return createTextSpan(start, end - start);
    }
    ts.createTextSpanFromBounds = createTextSpanFromBounds;
    function textChangeRangeNewSpan(range) {
        return createTextSpan(range.span.start, range.newLength);
    }
    ts.textChangeRangeNewSpan = textChangeRangeNewSpan;
    function textChangeRangeIsUnchanged(range) {
        return textSpanIsEmpty(range.span) && range.newLength === 0;
    }
    ts.textChangeRangeIsUnchanged = textChangeRangeIsUnchanged;
    function createTextChangeRange(span, newLength) {
        if (newLength < 0) {
            throw new Error("newLength < 0");
        }
        return { span: span, newLength: newLength };
    }
    ts.createTextChangeRange = createTextChangeRange;
    ts.unchangedTextChangeRange = createTextChangeRange(createTextSpan(0, 0), 0);
    function collapseTextChangeRangesAcrossMultipleVersions(changes) {
        if (changes.length === 0) {
            return ts.unchangedTextChangeRange;
        }
        if (changes.length === 1) {
            return changes[0];
        }
        var change0 = changes[0];
        var oldStartN = change0.span.start;
        var oldEndN = textSpanEnd(change0.span);
        var newEndN = oldStartN + change0.newLength;
        for (var i = 1; i < changes.length; i++) {
            var nextChange = changes[i];
            var oldStart1 = oldStartN;
            var oldEnd1 = oldEndN;
            var newEnd1 = newEndN;
            var oldStart2 = nextChange.span.start;
            var oldEnd2 = textSpanEnd(nextChange.span);
            var newEnd2 = oldStart2 + nextChange.newLength;
            oldStartN = Math.min(oldStart1, oldStart2);
            oldEndN = Math.max(oldEnd1, oldEnd1 + (oldEnd2 - newEnd1));
            newEndN = Math.max(newEnd2, newEnd2 + (newEnd1 - oldEnd2));
        }
        return createTextChangeRange(createTextSpanFromBounds(oldStartN, oldEndN), newEndN - oldStartN);
    }
    ts.collapseTextChangeRangesAcrossMultipleVersions = collapseTextChangeRangesAcrossMultipleVersions;
    function createDiagnosticCollection() {
        var nonFileDiagnostics = [];
        var fileDiagnostics = {};
        var diagnosticsModified = false;
        var modificationCount = 0;
        return {
            add: add,
            getGlobalDiagnostics: getGlobalDiagnostics,
            getDiagnostics: getDiagnostics,
            getModificationCount: getModificationCount
        };
        function getModificationCount() {
            return modificationCount;
        }
        function add(diagnostic) {
            var diagnostics;
            if (diagnostic.file) {
                diagnostics = fileDiagnostics[diagnostic.file.fileName];
                if (!diagnostics) {
                    diagnostics = [];
                    fileDiagnostics[diagnostic.file.fileName] = diagnostics;
                }
            }
            else {
                diagnostics = nonFileDiagnostics;
            }
            diagnostics.push(diagnostic);
            diagnosticsModified = true;
            modificationCount++;
        }
        function getGlobalDiagnostics() {
            sortAndDeduplicate();
            return nonFileDiagnostics;
        }
        function getDiagnostics(fileName) {
            sortAndDeduplicate();
            if (fileName) {
                return fileDiagnostics[fileName] || [];
            }
            var allDiagnostics = [];
            function pushDiagnostic(d) {
                allDiagnostics.push(d);
            }
            ts.forEach(nonFileDiagnostics, pushDiagnostic);
            for (var key in fileDiagnostics) {
                if (ts.hasProperty(fileDiagnostics, key)) {
                    ts.forEach(fileDiagnostics[key], pushDiagnostic);
                }
            }
            return ts.sortAndDeduplicateDiagnostics(allDiagnostics);
        }
        function sortAndDeduplicate() {
            if (!diagnosticsModified) {
                return;
            }
            diagnosticsModified = false;
            nonFileDiagnostics = ts.sortAndDeduplicateDiagnostics(nonFileDiagnostics);
            for (var key in fileDiagnostics) {
                if (ts.hasProperty(fileDiagnostics, key)) {
                    fileDiagnostics[key] = ts.sortAndDeduplicateDiagnostics(fileDiagnostics[key]);
                }
            }
        }
    }
    ts.createDiagnosticCollection = createDiagnosticCollection;
})(ts || (ts = {}));
var ts;
(function (ts) {
    var nodeConstructors = new Array(209);
    ts.parseTime = 0;
    function getNodeConstructor(kind) {
        return nodeConstructors[kind] || (nodeConstructors[kind] = ts.objectAllocator.getNodeConstructor(kind));
    }
    ts.getNodeConstructor = getNodeConstructor;
    function createNode(kind) {
        return new (getNodeConstructor(kind))();
    }
    ts.createNode = createNode;
    function visitNode(cbNode, node) {
        if (node) {
            return cbNode(node);
        }
    }
    function visitNodeArray(cbNodes, nodes) {
        if (nodes) {
            return cbNodes(nodes);
        }
    }
    function visitEachNode(cbNode, nodes) {
        if (nodes) {
            for (var i = 0, len = nodes.length; i < len; i++) {
                var result = cbNode(nodes[i]);
                if (result) {
                    return result;
                }
            }
        }
    }
    function forEachChild(node, cbNode, cbNodeArray) {
        if (!node) {
            return;
        }
        var visitNodes = cbNodeArray ? visitNodeArray : visitEachNode;
        var cbNodes = cbNodeArray || cbNode;
        switch (node.kind) {
            case 121:
                return visitNode(cbNode, node.left) || visitNode(cbNode, node.right);
            case 123:
                return visitNode(cbNode, node.name) || visitNode(cbNode, node.constraint) || visitNode(cbNode, node.expression);
            case 124:
            case 126:
            case 125:
            case 204:
            case 205:
            case 188:
            case 146:
                return visitNodes(cbNodes, node.modifiers) || visitNode(cbNode, node.propertyName) || visitNode(cbNode, node.dotDotDotToken) || visitNode(cbNode, node.name) || visitNode(cbNode, node.questionToken) || visitNode(cbNode, node.type) || visitNode(cbNode, node.initializer);
            case 136:
            case 137:
            case 132:
            case 133:
            case 134:
                return visitNodes(cbNodes, node.modifiers) || visitNodes(cbNodes, node.typeParameters) || visitNodes(cbNodes, node.parameters) || visitNode(cbNode, node.type);
            case 128:
            case 127:
            case 129:
            case 130:
            case 131:
            case 156:
            case 190:
            case 157:
                return visitNodes(cbNodes, node.modifiers) || visitNode(cbNode, node.asteriskToken) || visitNode(cbNode, node.name) || visitNode(cbNode, node.questionToken) || visitNodes(cbNodes, node.typeParameters) || visitNodes(cbNodes, node.parameters) || visitNode(cbNode, node.type) || visitNode(cbNode, node.body);
            case 135:
                return visitNode(cbNode, node.typeName) || visitNodes(cbNodes, node.typeArguments);
            case 138:
                return visitNode(cbNode, node.exprName);
            case 139:
                return visitNodes(cbNodes, node.members);
            case 140:
                return visitNode(cbNode, node.elementType);
            case 141:
                return visitNodes(cbNodes, node.elementTypes);
            case 142:
                return visitNodes(cbNodes, node.types);
            case 143:
                return visitNode(cbNode, node.type);
            case 144:
            case 145:
                return visitNodes(cbNodes, node.elements);
            case 147:
                return visitNodes(cbNodes, node.elements);
            case 148:
                return visitNodes(cbNodes, node.properties);
            case 149:
                return visitNode(cbNode, node.expression) || visitNode(cbNode, node.name);
            case 150:
                return visitNode(cbNode, node.expression) || visitNode(cbNode, node.argumentExpression);
            case 151:
            case 152:
                return visitNode(cbNode, node.expression) || visitNodes(cbNodes, node.typeArguments) || visitNodes(cbNodes, node.arguments);
            case 153:
                return visitNode(cbNode, node.tag) || visitNode(cbNode, node.template);
            case 154:
                return visitNode(cbNode, node.type) || visitNode(cbNode, node.expression);
            case 155:
                return visitNode(cbNode, node.expression);
            case 158:
                return visitNode(cbNode, node.expression);
            case 159:
                return visitNode(cbNode, node.expression);
            case 160:
                return visitNode(cbNode, node.expression);
            case 161:
                return visitNode(cbNode, node.operand);
            case 166:
                return visitNode(cbNode, node.asteriskToken) || visitNode(cbNode, node.expression);
            case 162:
                return visitNode(cbNode, node.operand);
            case 163:
                return visitNode(cbNode, node.left) || visitNode(cbNode, node.right);
            case 164:
                return visitNode(cbNode, node.condition) || visitNode(cbNode, node.whenTrue) || visitNode(cbNode, node.whenFalse);
            case 167:
                return visitNode(cbNode, node.expression);
            case 170:
            case 196:
                return visitNodes(cbNodes, node.statements);
            case 207:
                return visitNodes(cbNodes, node.statements) || visitNode(cbNode, node.endOfFileToken);
            case 171:
                return visitNodes(cbNodes, node.modifiers) || visitNode(cbNode, node.declarationList);
            case 189:
                return visitNodes(cbNodes, node.declarations);
            case 173:
                return visitNode(cbNode, node.expression);
            case 174:
                return visitNode(cbNode, node.expression) || visitNode(cbNode, node.thenStatement) || visitNode(cbNode, node.elseStatement);
            case 175:
                return visitNode(cbNode, node.statement) || visitNode(cbNode, node.expression);
            case 176:
                return visitNode(cbNode, node.expression) || visitNode(cbNode, node.statement);
            case 177:
                return visitNode(cbNode, node.initializer) || visitNode(cbNode, node.condition) || visitNode(cbNode, node.iterator) || visitNode(cbNode, node.statement);
            case 178:
                return visitNode(cbNode, node.initializer) || visitNode(cbNode, node.expression) || visitNode(cbNode, node.statement);
            case 179:
            case 180:
                return visitNode(cbNode, node.label);
            case 181:
                return visitNode(cbNode, node.expression);
            case 182:
                return visitNode(cbNode, node.expression) || visitNode(cbNode, node.statement);
            case 183:
                return visitNode(cbNode, node.expression) || visitNodes(cbNodes, node.clauses);
            case 200:
                return visitNode(cbNode, node.expression) || visitNodes(cbNodes, node.statements);
            case 201:
                return visitNodes(cbNodes, node.statements);
            case 184:
                return visitNode(cbNode, node.label) || visitNode(cbNode, node.statement);
            case 185:
                return visitNode(cbNode, node.expression);
            case 186:
                return visitNode(cbNode, node.tryBlock) || visitNode(cbNode, node.catchClause) || visitNode(cbNode, node.finallyBlock);
            case 203:
                return visitNode(cbNode, node.name) || visitNode(cbNode, node.type) || visitNode(cbNode, node.block);
            case 191:
                return visitNodes(cbNodes, node.modifiers) || visitNode(cbNode, node.name) || visitNodes(cbNodes, node.typeParameters) || visitNodes(cbNodes, node.heritageClauses) || visitNodes(cbNodes, node.members);
            case 192:
                return visitNodes(cbNodes, node.modifiers) || visitNode(cbNode, node.name) || visitNodes(cbNodes, node.typeParameters) || visitNodes(cbNodes, node.heritageClauses) || visitNodes(cbNodes, node.members);
            case 193:
                return visitNodes(cbNodes, node.modifiers) || visitNode(cbNode, node.name) || visitNode(cbNode, node.type);
            case 194:
                return visitNodes(cbNodes, node.modifiers) || visitNode(cbNode, node.name) || visitNodes(cbNodes, node.members);
            case 206:
                return visitNode(cbNode, node.name) || visitNode(cbNode, node.initializer);
            case 195:
                return visitNodes(cbNodes, node.modifiers) || visitNode(cbNode, node.name) || visitNode(cbNode, node.body);
            case 197:
                return visitNodes(cbNodes, node.modifiers) || visitNode(cbNode, node.name) || visitNode(cbNode, node.moduleReference);
            case 198:
                return visitNodes(cbNodes, node.modifiers) || visitNode(cbNode, node.exportName);
            case 165:
                return visitNode(cbNode, node.head) || visitNodes(cbNodes, node.templateSpans);
            case 169:
                return visitNode(cbNode, node.expression) || visitNode(cbNode, node.literal);
            case 122:
                return visitNode(cbNode, node.expression);
            case 202:
                return visitNodes(cbNodes, node.types);
            case 199:
                return visitNode(cbNode, node.expression);
        }
    }
    ts.forEachChild = forEachChild;
    function parsingContextErrors(context) {
        switch (context) {
            case 0: return ts.Diagnostics.Declaration_or_statement_expected;
            case 1: return ts.Diagnostics.Declaration_or_statement_expected;
            case 2: return ts.Diagnostics.Statement_expected;
            case 3: return ts.Diagnostics.case_or_default_expected;
            case 4: return ts.Diagnostics.Statement_expected;
            case 5: return ts.Diagnostics.Property_or_signature_expected;
            case 6: return ts.Diagnostics.Unexpected_token_A_constructor_method_accessor_or_property_was_expected;
            case 7: return ts.Diagnostics.Enum_member_expected;
            case 8: return ts.Diagnostics.Type_reference_expected;
            case 9: return ts.Diagnostics.Variable_declaration_expected;
            case 10: return ts.Diagnostics.Property_destructuring_pattern_expected;
            case 11: return ts.Diagnostics.Array_element_destructuring_pattern_expected;
            case 12: return ts.Diagnostics.Argument_expression_expected;
            case 13: return ts.Diagnostics.Property_assignment_expected;
            case 14: return ts.Diagnostics.Expression_or_comma_expected;
            case 15: return ts.Diagnostics.Parameter_declaration_expected;
            case 16: return ts.Diagnostics.Type_parameter_declaration_expected;
            case 17: return ts.Diagnostics.Type_argument_expected;
            case 18: return ts.Diagnostics.Type_expected;
            case 19: return ts.Diagnostics.Unexpected_token_expected;
        }
    }
    ;
    function modifierToFlag(token) {
        switch (token) {
            case 108: return 128;
            case 107: return 16;
            case 106: return 64;
            case 105: return 32;
            case 77: return 1;
            case 113: return 2;
            case 69: return 4096;
        }
        return 0;
    }
    ts.modifierToFlag = modifierToFlag;
    function fixupParentReferences(sourceFile) {
        var parent = sourceFile;
        forEachChild(sourceFile, visitNode);
        return;
        function visitNode(n) {
            if (n.parent !== parent) {
                n.parent = parent;
                var saveParent = parent;
                parent = n;
                forEachChild(n, visitNode);
                parent = saveParent;
            }
        }
    }
    function shouldCheckNode(node) {
        switch (node.kind) {
            case 8:
            case 7:
            case 64:
                return true;
        }
        return false;
    }
    function moveElementEntirelyPastChangeRange(element, isArray, delta, oldText, newText, aggressiveChecks) {
        if (isArray) {
            visitArray(element);
        }
        else {
            visitNode(element);
        }
        return;
        function visitNode(node) {
            if (aggressiveChecks && shouldCheckNode(node)) {
                var text = oldText.substring(node.pos, node.end);
            }
            node._children = undefined;
            node.pos += delta;
            node.end += delta;
            if (aggressiveChecks && shouldCheckNode(node)) {
                ts.Debug.assert(text === newText.substring(node.pos, node.end));
            }
            forEachChild(node, visitNode, visitArray);
            checkNodePositions(node, aggressiveChecks);
        }
        function visitArray(array) {
            array._children = undefined;
            array.pos += delta;
            array.end += delta;
            for (var i = 0, n = array.length; i < n; i++) {
                visitNode(array[i]);
            }
        }
    }
    function adjustIntersectingElement(element, changeStart, changeRangeOldEnd, changeRangeNewEnd, delta) {
        ts.Debug.assert(element.end >= changeStart, "Adjusting an element that was entirely before the change range");
        ts.Debug.assert(element.pos <= changeRangeOldEnd, "Adjusting an element that was entirely after the change range");
        ts.Debug.assert(element.pos <= element.end);
        element.pos = Math.min(element.pos, changeRangeNewEnd);
        if (element.end >= changeRangeOldEnd) {
            element.end += delta;
        }
        else {
            element.end = Math.min(element.end, changeRangeNewEnd);
        }
        ts.Debug.assert(element.pos <= element.end);
        if (element.parent) {
            ts.Debug.assert(element.pos >= element.parent.pos);
            ts.Debug.assert(element.end <= element.parent.end);
        }
    }
    function checkNodePositions(node, aggressiveChecks) {
        if (aggressiveChecks) {
            var pos = node.pos;
            forEachChild(node, function (child) {
                ts.Debug.assert(child.pos >= pos);
                pos = child.end;
            });
            ts.Debug.assert(pos <= node.end);
        }
    }
    function updateTokenPositionsAndMarkElements(sourceFile, changeStart, changeRangeOldEnd, changeRangeNewEnd, delta, oldText, newText, aggressiveChecks) {
        visitNode(sourceFile);
        return;
        function visitNode(child) {
            ts.Debug.assert(child.pos <= child.end);
            if (child.pos > changeRangeOldEnd) {
                moveElementEntirelyPastChangeRange(child, false, delta, oldText, newText, aggressiveChecks);
                return;
            }
            var fullEnd = child.end;
            if (fullEnd >= changeStart) {
                child.intersectsChange = true;
                child._children = undefined;
                adjustIntersectingElement(child, changeStart, changeRangeOldEnd, changeRangeNewEnd, delta);
                forEachChild(child, visitNode, visitArray);
                checkNodePositions(child, aggressiveChecks);
                return;
            }
            ts.Debug.assert(fullEnd < changeStart);
        }
        function visitArray(array) {
            ts.Debug.assert(array.pos <= array.end);
            if (array.pos > changeRangeOldEnd) {
                moveElementEntirelyPastChangeRange(array, true, delta, oldText, newText, aggressiveChecks);
                return;
            }
            var fullEnd = array.end;
            if (fullEnd >= changeStart) {
                array.intersectsChange = true;
                array._children = undefined;
                adjustIntersectingElement(array, changeStart, changeRangeOldEnd, changeRangeNewEnd, delta);
                for (var i = 0, n = array.length; i < n; i++) {
                    visitNode(array[i]);
                }
                return;
            }
            ts.Debug.assert(fullEnd < changeStart);
        }
    }
    function extendToAffectedRange(sourceFile, changeRange) {
        var maxLookahead = 1;
        var start = changeRange.span.start;
        for (var i = 0; start > 0 && i <= maxLookahead; i++) {
            var nearestNode = findNearestNodeStartingBeforeOrAtPosition(sourceFile, start);
            ts.Debug.assert(nearestNode.pos <= start);
            var position = nearestNode.pos;
            start = Math.max(0, position - 1);
        }
        var finalSpan = ts.createTextSpanFromBounds(start, ts.textSpanEnd(changeRange.span));
        var finalLength = changeRange.newLength + (changeRange.span.start - start);
        return ts.createTextChangeRange(finalSpan, finalLength);
    }
    function findNearestNodeStartingBeforeOrAtPosition(sourceFile, position) {
        var bestResult = sourceFile;
        var lastNodeEntirelyBeforePosition;
        forEachChild(sourceFile, visit);
        if (lastNodeEntirelyBeforePosition) {
            var lastChildOfLastEntireNodeBeforePosition = getLastChild(lastNodeEntirelyBeforePosition);
            if (lastChildOfLastEntireNodeBeforePosition.pos > bestResult.pos) {
                bestResult = lastChildOfLastEntireNodeBeforePosition;
            }
        }
        return bestResult;
        function getLastChild(node) {
            while (true) {
                var lastChild = getLastChildWorker(node);
                if (lastChild) {
                    node = lastChild;
                }
                else {
                    return node;
                }
            }
        }
        function getLastChildWorker(node) {
            var last = undefined;
            forEachChild(node, function (child) {
                if (ts.nodeIsPresent(child)) {
                    last = child;
                }
            });
            return last;
        }
        function visit(child) {
            if (ts.nodeIsMissing(child)) {
                return;
            }
            if (child.pos <= position) {
                if (child.pos >= bestResult.pos) {
                    bestResult = child;
                }
                if (position < child.end) {
                    forEachChild(child, visit);
                    return true;
                }
                else {
                    ts.Debug.assert(child.end <= position);
                    lastNodeEntirelyBeforePosition = child;
                }
            }
            else {
                ts.Debug.assert(child.pos > position);
                return true;
            }
        }
    }
    function checkChangeRange(sourceFile, newText, textChangeRange, aggressiveChecks) {
        var oldText = sourceFile.text;
        if (textChangeRange) {
            ts.Debug.assert((oldText.length - textChangeRange.span.length + textChangeRange.newLength) === newText.length);
            if (aggressiveChecks || ts.Debug.shouldAssert(3)) {
                var oldTextPrefix = oldText.substr(0, textChangeRange.span.start);
                var newTextPrefix = newText.substr(0, textChangeRange.span.start);
                ts.Debug.assert(oldTextPrefix === newTextPrefix);
                var oldTextSuffix = oldText.substring(ts.textSpanEnd(textChangeRange.span), oldText.length);
                var newTextSuffix = newText.substring(ts.textSpanEnd(ts.textChangeRangeNewSpan(textChangeRange)), newText.length);
                ts.Debug.assert(oldTextSuffix === newTextSuffix);
            }
        }
    }
    function updateSourceFile(sourceFile, newText, textChangeRange, aggressiveChecks) {
        aggressiveChecks = aggressiveChecks || ts.Debug.shouldAssert(2);
        checkChangeRange(sourceFile, newText, textChangeRange, aggressiveChecks);
        if (ts.textChangeRangeIsUnchanged(textChangeRange)) {
            return sourceFile;
        }
        if (sourceFile.statements.length === 0) {
            return parseSourceFile(sourceFile.fileName, newText, sourceFile.languageVersion, undefined, true);
        }
        var incrementalSourceFile = sourceFile;
        ts.Debug.assert(!incrementalSourceFile.hasBeenIncrementallyParsed);
        incrementalSourceFile.hasBeenIncrementallyParsed = true;
        var oldText = sourceFile.text;
        var syntaxCursor = createSyntaxCursor(sourceFile);
        var changeRange = extendToAffectedRange(sourceFile, textChangeRange);
        checkChangeRange(sourceFile, newText, changeRange, aggressiveChecks);
        ts.Debug.assert(changeRange.span.start <= textChangeRange.span.start);
        ts.Debug.assert(ts.textSpanEnd(changeRange.span) === ts.textSpanEnd(textChangeRange.span));
        ts.Debug.assert(ts.textSpanEnd(ts.textChangeRangeNewSpan(changeRange)) === ts.textSpanEnd(ts.textChangeRangeNewSpan(textChangeRange)));
        var delta = ts.textChangeRangeNewSpan(changeRange).length - changeRange.span.length;
        updateTokenPositionsAndMarkElements(incrementalSourceFile, changeRange.span.start, ts.textSpanEnd(changeRange.span), ts.textSpanEnd(ts.textChangeRangeNewSpan(changeRange)), delta, oldText, newText, aggressiveChecks);
        var result = parseSourceFile(sourceFile.fileName, newText, sourceFile.languageVersion, syntaxCursor, true);
        return result;
    }
    ts.updateSourceFile = updateSourceFile;
    function isEvalOrArgumentsIdentifier(node) {
        return node.kind === 64 && (node.text === "eval" || node.text === "arguments");
    }
    ts.isEvalOrArgumentsIdentifier = isEvalOrArgumentsIdentifier;
    function isUseStrictPrologueDirective(sourceFile, node) {
        ts.Debug.assert(ts.isPrologueDirective(node));
        var nodeText = ts.getSourceTextOfNodeFromSourceFile(sourceFile, node.expression);
        return nodeText === '"use strict"' || nodeText === "'use strict'";
    }
    function createSyntaxCursor(sourceFile) {
        var currentArray = sourceFile.statements;
        var currentArrayIndex = 0;
        ts.Debug.assert(currentArrayIndex < currentArray.length);
        var current = currentArray[currentArrayIndex];
        var lastQueriedPosition = -1;
        return {
            currentNode: function (position) {
                if (position !== lastQueriedPosition) {
                    if (current && current.end === position && currentArrayIndex < (currentArray.length - 1)) {
                        currentArrayIndex++;
                        current = currentArray[currentArrayIndex];
                    }
                    if (!current || current.pos !== position) {
                        findHighestListElementThatStartsAtPosition(position);
                    }
                }
                lastQueriedPosition = position;
                ts.Debug.assert(!current || current.pos === position);
                return current;
            }
        };
        function findHighestListElementThatStartsAtPosition(position) {
            currentArray = undefined;
            currentArrayIndex = -1;
            current = undefined;
            forEachChild(sourceFile, visitNode, visitArray);
            return;
            function visitNode(node) {
                if (position >= node.pos && position < node.end) {
                    forEachChild(node, visitNode, visitArray);
                    return true;
                }
                return false;
            }
            function visitArray(array) {
                if (position >= array.pos && position < array.end) {
                    for (var i = 0, n = array.length; i < n; i++) {
                        var child = array[i];
                        if (child) {
                            if (child.pos === position) {
                                currentArray = array;
                                currentArrayIndex = i;
                                current = child;
                                return true;
                            }
                            else {
                                if (child.pos < position && position < child.end) {
                                    forEachChild(child, visitNode, visitArray);
                                    return true;
                                }
                            }
                        }
                    }
                }
                return false;
            }
        }
    }
    function createSourceFile(fileName, sourceText, languageVersion, setParentNodes) {
        if (setParentNodes === void 0) { setParentNodes = false; }
        var start = new Date().getTime();
        var result = parseSourceFile(fileName, sourceText, languageVersion, undefined, setParentNodes);
        ts.parseTime += new Date().getTime() - start;
        return result;
    }
    ts.createSourceFile = createSourceFile;
    function parseSourceFile(fileName, sourceText, languageVersion, syntaxCursor, setParentNodes) {
        if (setParentNodes === void 0) { setParentNodes = false; }
        var parsingContext = 0;
        var identifiers = {};
        var identifierCount = 0;
        var nodeCount = 0;
        var token;
        var sourceFile = createNode(207, 0);
        sourceFile.pos = 0;
        sourceFile.end = sourceText.length;
        sourceFile.text = sourceText;
        sourceFile.parseDiagnostics = [];
        sourceFile.bindDiagnostics = [];
        sourceFile.languageVersion = languageVersion;
        sourceFile.fileName = ts.normalizePath(fileName);
        sourceFile.flags = ts.fileExtensionIs(sourceFile.fileName, ".d.ts") ? 1024 : 0;
        var contextFlags = 0;
        var parseErrorBeforeNextFinishedNode = false;
        var scanner = ts.createScanner(languageVersion, true, sourceText, scanError);
        token = nextToken();
        processReferenceComments(sourceFile);
        sourceFile.statements = parseList(0, true, parseSourceElement);
        ts.Debug.assert(token === 1);
        sourceFile.endOfFileToken = parseTokenNode();
        setExternalModuleIndicator(sourceFile);
        sourceFile.nodeCount = nodeCount;
        sourceFile.identifierCount = identifierCount;
        sourceFile.identifiers = identifiers;
        if (setParentNodes) {
            fixupParentReferences(sourceFile);
        }
        syntaxCursor = undefined;
        return sourceFile;
        function setContextFlag(val, flag) {
            if (val) {
                contextFlags |= flag;
            }
            else {
                contextFlags &= ~flag;
            }
        }
        function setStrictModeContext(val) {
            setContextFlag(val, 1);
        }
        function setDisallowInContext(val) {
            setContextFlag(val, 2);
        }
        function setYieldContext(val) {
            setContextFlag(val, 4);
        }
        function setGeneratorParameterContext(val) {
            setContextFlag(val, 8);
        }
        function allowInAnd(func) {
            if (contextFlags & 2) {
                setDisallowInContext(false);
                var result = func();
                setDisallowInContext(true);
                return result;
            }
            return func();
        }
        function disallowInAnd(func) {
            if (contextFlags & 2) {
                return func();
            }
            setDisallowInContext(true);
            var result = func();
            setDisallowInContext(false);
            return result;
        }
        function doInYieldContext(func) {
            if (contextFlags & 4) {
                return func();
            }
            setYieldContext(true);
            var result = func();
            setYieldContext(false);
            return result;
        }
        function doOutsideOfYieldContext(func) {
            if (contextFlags & 4) {
                setYieldContext(false);
                var result = func();
                setYieldContext(true);
                return result;
            }
            return func();
        }
        function inYieldContext() {
            return (contextFlags & 4) !== 0;
        }
        function inStrictModeContext() {
            return (contextFlags & 1) !== 0;
        }
        function inGeneratorParameterContext() {
            return (contextFlags & 8) !== 0;
        }
        function inDisallowInContext() {
            return (contextFlags & 2) !== 0;
        }
        function parseErrorAtCurrentToken(message, arg0) {
            var start = scanner.getTokenPos();
            var length = scanner.getTextPos() - start;
            parseErrorAtPosition(start, length, message, arg0);
        }
        function parseErrorAtPosition(start, length, message, arg0) {
            var lastError = ts.lastOrUndefined(sourceFile.parseDiagnostics);
            if (!lastError || start !== lastError.start) {
                sourceFile.parseDiagnostics.push(ts.createFileDiagnostic(sourceFile, start, length, message, arg0));
            }
            parseErrorBeforeNextFinishedNode = true;
        }
        function scanError(message, length) {
            var pos = scanner.getTextPos();
            parseErrorAtPosition(pos, length || 0, message);
        }
        function getNodePos() {
            return scanner.getStartPos();
        }
        function getNodeEnd() {
            return scanner.getStartPos();
        }
        function nextToken() {
            return token = scanner.scan();
        }
        function getTokenPos(pos) {
            return ts.skipTrivia(sourceText, pos);
        }
        function reScanGreaterToken() {
            return token = scanner.reScanGreaterToken();
        }
        function reScanSlashToken() {
            return token = scanner.reScanSlashToken();
        }
        function reScanTemplateToken() {
            return token = scanner.reScanTemplateToken();
        }
        function speculationHelper(callback, isLookAhead) {
            var saveToken = token;
            var saveParseDiagnosticsLength = sourceFile.parseDiagnostics.length;
            var saveParseErrorBeforeNextFinishedNode = parseErrorBeforeNextFinishedNode;
            var saveContextFlags = contextFlags;
            var result = isLookAhead ? scanner.lookAhead(callback) : scanner.tryScan(callback);
            ts.Debug.assert(saveContextFlags === contextFlags);
            if (!result || isLookAhead) {
                token = saveToken;
                sourceFile.parseDiagnostics.length = saveParseDiagnosticsLength;
                parseErrorBeforeNextFinishedNode = saveParseErrorBeforeNextFinishedNode;
            }
            return result;
        }
        function lookAhead(callback) {
            return speculationHelper(callback, true);
        }
        function tryParse(callback) {
            return speculationHelper(callback, false);
        }
        function isIdentifier() {
            if (token === 64) {
                return true;
            }
            if (token === 109 && inYieldContext()) {
                return false;
            }
            return inStrictModeContext() ? token > 109 : token > 100;
        }
        function parseExpected(kind, diagnosticMessage) {
            if (token === kind) {
                nextToken();
                return true;
            }
            if (diagnosticMessage) {
                parseErrorAtCurrentToken(diagnosticMessage);
            }
            else {
                parseErrorAtCurrentToken(ts.Diagnostics._0_expected, ts.tokenToString(kind));
            }
            return false;
        }
        function parseOptional(t) {
            if (token === t) {
                nextToken();
                return true;
            }
            return false;
        }
        function parseOptionalToken(t) {
            if (token === t) {
                var node = createNode(t);
                nextToken();
                return finishNode(node);
            }
            return undefined;
        }
        function canParseSemicolon() {
            if (token === 22) {
                return true;
            }
            return token === 15 || token === 1 || scanner.hasPrecedingLineBreak();
        }
        function parseSemicolon() {
            if (canParseSemicolon()) {
                if (token === 22) {
                    nextToken();
                }
                return true;
            }
            else {
                return parseExpected(22);
            }
        }
        function createNode(kind, pos) {
            nodeCount++;
            var node = new (nodeConstructors[kind] || (nodeConstructors[kind] = ts.objectAllocator.getNodeConstructor(kind)))();
            if (!(pos >= 0)) {
                pos = scanner.getStartPos();
            }
            node.pos = pos;
            node.end = pos;
            return node;
        }
        function finishNode(node) {
            node.end = scanner.getStartPos();
            if (contextFlags) {
                node.parserContextFlags = contextFlags;
            }
            if (parseErrorBeforeNextFinishedNode) {
                parseErrorBeforeNextFinishedNode = false;
                node.parserContextFlags |= 16;
            }
            return node;
        }
        function createMissingNode(kind, reportAtCurrentPosition, diagnosticMessage, arg0) {
            if (reportAtCurrentPosition) {
                parseErrorAtPosition(scanner.getStartPos(), 0, diagnosticMessage, arg0);
            }
            else {
                parseErrorAtCurrentToken(diagnosticMessage, arg0);
            }
            var result = createNode(kind, scanner.getStartPos());
            result.text = "";
            return finishNode(result);
        }
        function internIdentifier(text) {
            text = ts.escapeIdentifier(text);
            return ts.hasProperty(identifiers, text) ? identifiers[text] : (identifiers[text] = text);
        }
        function createIdentifier(isIdentifier, diagnosticMessage) {
            identifierCount++;
            if (isIdentifier) {
                var node = createNode(64);
                node.text = internIdentifier(scanner.getTokenValue());
                nextToken();
                return finishNode(node);
            }
            return createMissingNode(64, false, diagnosticMessage || ts.Diagnostics.Identifier_expected);
        }
        function parseIdentifier(diagnosticMessage) {
            return createIdentifier(isIdentifier(), diagnosticMessage);
        }
        function parseIdentifierName() {
            return createIdentifier(isIdentifierOrKeyword());
        }
        function isLiteralPropertyName() {
            return isIdentifierOrKeyword() || token === 8 || token === 7;
        }
        function parsePropertyName() {
            if (token === 8 || token === 7) {
                return parseLiteralNode(true);
            }
            if (token === 18) {
                return parseComputedPropertyName();
            }
            return parseIdentifierName();
        }
        function parseComputedPropertyName() {
            var node = createNode(122);
            parseExpected(18);
            var yieldContext = inYieldContext();
            if (inGeneratorParameterContext()) {
                setYieldContext(false);
            }
            node.expression = allowInAnd(parseExpression);
            if (inGeneratorParameterContext()) {
                setYieldContext(yieldContext);
            }
            parseExpected(19);
            return finishNode(node);
        }
        function parseContextualModifier(t) {
            return token === t && tryParse(nextTokenCanFollowModifier);
        }
        function nextTokenCanFollowModifier() {
            nextToken();
            return canFollowModifier();
        }
        function parseAnyContextualModifier() {
            return ts.isModifier(token) && tryParse(nextTokenCanFollowContextualModifier);
        }
        function nextTokenCanFollowContextualModifier() {
            if (token === 69) {
                return nextToken() === 76;
            }
            nextToken();
            return canFollowModifier();
        }
        function canFollowModifier() {
            return token === 18 || token === 14 || token === 35 || isLiteralPropertyName();
        }
        function isListElement(parsingContext, inErrorRecovery) {
            var node = currentNode(parsingContext);
            if (node) {
                return true;
            }
            switch (parsingContext) {
                case 0:
                case 1:
                    return isSourceElement(inErrorRecovery);
                case 2:
                case 4:
                    return isStartOfStatement(inErrorRecovery);
                case 3:
                    return token === 66 || token === 72;
                case 5:
                    return isStartOfTypeMember();
                case 6:
                    return lookAhead(isClassMemberStart);
                case 7:
                    return token === 18 || isLiteralPropertyName();
                case 13:
                    return token === 18 || token === 35 || isLiteralPropertyName();
                case 10:
                    return isLiteralPropertyName();
                case 8:
                    return isIdentifier() && !isNotHeritageClauseTypeName();
                case 9:
                    return isIdentifierOrPattern();
                case 11:
                    return token === 23 || token === 21 || isIdentifierOrPattern();
                case 16:
                    return isIdentifier();
                case 12:
                case 14:
                    return token === 23 || token === 21 || isStartOfExpression();
                case 15:
                    return isStartOfParameter();
                case 17:
                case 18:
                    return token === 23 || isStartOfType();
                case 19:
                    return isHeritageClause();
            }
            ts.Debug.fail("Non-exhaustive case in 'isListElement'.");
        }
        function nextTokenIsIdentifier() {
            nextToken();
            return isIdentifier();
        }
        function isNotHeritageClauseTypeName() {
            if (token === 101 || token === 78) {
                return lookAhead(nextTokenIsIdentifier);
            }
            return false;
        }
        function isListTerminator(kind) {
            if (token === 1) {
                return true;
            }
            switch (kind) {
                case 1:
                case 2:
                case 3:
                case 5:
                case 6:
                case 7:
                case 13:
                case 10:
                    return token === 15;
                case 4:
                    return token === 15 || token === 66 || token === 72;
                case 8:
                    return token === 14 || token === 78 || token === 101;
                case 9:
                    return isVariableDeclaratorListTerminator();
                case 16:
                    return token === 25 || token === 16 || token === 14 || token === 78 || token === 101;
                case 12:
                    return token === 17 || token === 22;
                case 14:
                case 18:
                case 11:
                    return token === 19;
                case 15:
                    return token === 17 || token === 19;
                case 17:
                    return token === 25 || token === 16;
                case 19:
                    return token === 14 || token === 15;
            }
        }
        function isVariableDeclaratorListTerminator() {
            if (canParseSemicolon()) {
                return true;
            }
            if (token === 85) {
                return true;
            }
            if (token === 32) {
                return true;
            }
            return false;
        }
        function isInSomeParsingContext() {
            for (var kind = 0; kind < 20; kind++) {
                if (parsingContext & (1 << kind)) {
                    if (isListElement(kind, true) || isListTerminator(kind)) {
                        return true;
                    }
                }
            }
            return false;
        }
        function parseList(kind, checkForStrictMode, parseElement) {
            var saveParsingContext = parsingContext;
            parsingContext |= 1 << kind;
            var result = [];
            result.pos = getNodePos();
            var savedStrictModeContext = inStrictModeContext();
            while (!isListTerminator(kind)) {
                if (isListElement(kind, false)) {
                    var element = parseListElement(kind, parseElement);
                    result.push(element);
                    if (checkForStrictMode && !inStrictModeContext()) {
                        if (ts.isPrologueDirective(element)) {
                            if (isUseStrictPrologueDirective(sourceFile, element)) {
                                setStrictModeContext(true);
                                checkForStrictMode = false;
                            }
                        }
                        else {
                            checkForStrictMode = false;
                        }
                    }
                    continue;
                }
                if (abortParsingListOrMoveToNextToken(kind)) {
                    break;
                }
            }
            setStrictModeContext(savedStrictModeContext);
            result.end = getNodeEnd();
            parsingContext = saveParsingContext;
            return result;
        }
        function parseListElement(parsingContext, parseElement) {
            var node = currentNode(parsingContext);
            if (node) {
                return consumeNode(node);
            }
            return parseElement();
        }
        function currentNode(parsingContext) {
            if (parseErrorBeforeNextFinishedNode) {
                return undefined;
            }
            if (!syntaxCursor) {
                return undefined;
            }
            var node = syntaxCursor.currentNode(scanner.getStartPos());
            if (ts.nodeIsMissing(node)) {
                return undefined;
            }
            if (node.intersectsChange) {
                return undefined;
            }
            if (ts.containsParseError(node)) {
                return undefined;
            }
            var nodeContextFlags = node.parserContextFlags & 31;
            if (nodeContextFlags !== contextFlags) {
                return undefined;
            }
            if (!canReuseNode(node, parsingContext)) {
                return undefined;
            }
            return node;
        }
        function consumeNode(node) {
            scanner.setTextPos(node.end);
            nextToken();
            return node;
        }
        function canReuseNode(node, parsingContext) {
            switch (parsingContext) {
                case 1:
                    return isReusableModuleElement(node);
                case 6:
                    return isReusableClassMember(node);
                case 3:
                    return isReusableSwitchClause(node);
                case 2:
                case 4:
                    return isReusableStatement(node);
                case 7:
                    return isReusableEnumMember(node);
                case 5:
                    return isReusableTypeMember(node);
                case 9:
                    return isReusableVariableDeclaration(node);
                case 15:
                    return isReusableParameter(node);
                case 19:
                case 8:
                case 16:
                case 18:
                case 17:
                case 12:
                case 13:
            }
            return false;
        }
        function isReusableModuleElement(node) {
            if (node) {
                switch (node.kind) {
                    case 197:
                    case 198:
                    case 191:
                    case 192:
                    case 195:
                    case 194:
                        return true;
                }
                return isReusableStatement(node);
            }
            return false;
        }
        function isReusableClassMember(node) {
            if (node) {
                switch (node.kind) {
                    case 129:
                    case 134:
                    case 128:
                    case 130:
                    case 131:
                    case 126:
                        return true;
                }
            }
            return false;
        }
        function isReusableSwitchClause(node) {
            if (node) {
                switch (node.kind) {
                    case 200:
                    case 201:
                        return true;
                }
            }
            return false;
        }
        function isReusableStatement(node) {
            if (node) {
                switch (node.kind) {
                    case 190:
                    case 171:
                    case 170:
                    case 174:
                    case 173:
                    case 185:
                    case 181:
                    case 183:
                    case 180:
                    case 179:
                    case 178:
                    case 177:
                    case 176:
                    case 182:
                    case 172:
                    case 186:
                    case 184:
                    case 175:
                    case 187:
                        return true;
                }
            }
            return false;
        }
        function isReusableEnumMember(node) {
            return node.kind === 206;
        }
        function isReusableTypeMember(node) {
            if (node) {
                switch (node.kind) {
                    case 133:
                    case 127:
                    case 134:
                    case 125:
                    case 132:
                        return true;
                }
            }
            return false;
        }
        function isReusableVariableDeclaration(node) {
            if (node.kind !== 188) {
                return false;
            }
            var variableDeclarator = node;
            return variableDeclarator.initializer === undefined;
        }
        function isReusableParameter(node) {
            if (node.kind !== 124) {
                return false;
            }
            var parameter = node;
            return parameter.initializer === undefined;
        }
        function abortParsingListOrMoveToNextToken(kind) {
            parseErrorAtCurrentToken(parsingContextErrors(kind));
            if (isInSomeParsingContext()) {
                return true;
            }
            nextToken();
            return false;
        }
        function parseDelimitedList(kind, parseElement, considerSemicolonAsDelimeter) {
            var saveParsingContext = parsingContext;
            parsingContext |= 1 << kind;
            var result = [];
            result.pos = getNodePos();
            var commaStart = -1;
            while (true) {
                if (isListElement(kind, false)) {
                    result.push(parseListElement(kind, parseElement));
                    commaStart = scanner.getTokenPos();
                    if (parseOptional(23)) {
                        continue;
                    }
                    commaStart = -1;
                    if (isListTerminator(kind)) {
                        break;
                    }
                    parseExpected(23);
                    if (considerSemicolonAsDelimeter && token === 22 && !scanner.hasPrecedingLineBreak()) {
                        nextToken();
                    }
                    continue;
                }
                if (isListTerminator(kind)) {
                    break;
                }
                if (abortParsingListOrMoveToNextToken(kind)) {
                    break;
                }
            }
            if (commaStart >= 0) {
                result.hasTrailingComma = true;
            }
            result.end = getNodeEnd();
            parsingContext = saveParsingContext;
            return result;
        }
        function createMissingList() {
            var pos = getNodePos();
            var result = [];
            result.pos = pos;
            result.end = pos;
            return result;
        }
        function parseBracketedList(kind, parseElement, open, close) {
            if (parseExpected(open)) {
                var result = parseDelimitedList(kind, parseElement);
                parseExpected(close);
                return result;
            }
            return createMissingList();
        }
        function parseEntityName(allowReservedWords, diagnosticMessage) {
            var entity = parseIdentifier(diagnosticMessage);
            while (parseOptional(20)) {
                var node = createNode(121, entity.pos);
                node.left = entity;
                node.right = parseRightSideOfDot(allowReservedWords);
                entity = finishNode(node);
            }
            return entity;
        }
        function parseRightSideOfDot(allowIdentifierNames) {
            if (scanner.hasPrecedingLineBreak() && scanner.isReservedWord()) {
                var matchesPattern = lookAhead(nextTokenIsIdentifierOrKeywordOnSameLine);
                if (matchesPattern) {
                    return createMissingNode(64, true, ts.Diagnostics.Identifier_expected);
                }
            }
            return allowIdentifierNames ? parseIdentifierName() : parseIdentifier();
        }
        function parseTokenNode() {
            var node = createNode(token);
            nextToken();
            return finishNode(node);
        }
        function parseTemplateExpression() {
            var template = createNode(165);
            template.head = parseLiteralNode();
            ts.Debug.assert(template.head.kind === 11, "Template head has wrong token kind");
            var templateSpans = [];
            templateSpans.pos = getNodePos();
            do {
                templateSpans.push(parseTemplateSpan());
            } while (templateSpans[templateSpans.length - 1].literal.kind === 12);
            templateSpans.end = getNodeEnd();
            template.templateSpans = templateSpans;
            return finishNode(template);
        }
        function parseTemplateSpan() {
            var span = createNode(169);
            span.expression = allowInAnd(parseExpression);
            var literal;
            if (token === 15) {
                reScanTemplateToken();
                literal = parseLiteralNode();
            }
            else {
                literal = createMissingNode(13, false, ts.Diagnostics._0_expected, ts.tokenToString(15));
            }
            span.literal = literal;
            return finishNode(span);
        }
        function parseLiteralNode(internName) {
            var node = createNode(token);
            var text = scanner.getTokenValue();
            node.text = internName ? internIdentifier(text) : text;
            if (scanner.isUnterminated()) {
                node.isUnterminated = true;
            }
            var tokenPos = scanner.getTokenPos();
            nextToken();
            finishNode(node);
            if (node.kind === 7 && sourceText.charCodeAt(tokenPos) === 48 && ts.isOctalDigit(sourceText.charCodeAt(tokenPos + 1))) {
                node.flags |= 8192;
            }
            return node;
        }
        function parseTypeReference() {
            var node = createNode(135);
            node.typeName = parseEntityName(false, ts.Diagnostics.Type_expected);
            if (!scanner.hasPrecedingLineBreak() && token === 24) {
                node.typeArguments = parseBracketedList(17, parseType, 24, 25);
            }
            return finishNode(node);
        }
        function parseTypeQuery() {
            var node = createNode(138);
            parseExpected(96);
            node.exprName = parseEntityName(true);
            return finishNode(node);
        }
        function parseTypeParameter() {
            var node = createNode(123);
            node.name = parseIdentifier();
            if (parseOptional(78)) {
                if (isStartOfType() || !isStartOfExpression()) {
                    node.constraint = parseType();
                }
                else {
                    node.expression = parseUnaryExpressionOrHigher();
                }
            }
            return finishNode(node);
        }
        function parseTypeParameters() {
            if (token === 24) {
                return parseBracketedList(16, parseTypeParameter, 24, 25);
            }
        }
        function parseParameterType() {
            if (parseOptional(51)) {
                return token === 8 ? parseLiteralNode(true) : parseType();
            }
            return undefined;
        }
        function isStartOfParameter() {
            return token === 21 || isIdentifierOrPattern() || ts.isModifier(token);
        }
        function setModifiers(node, modifiers) {
            if (modifiers) {
                node.flags |= modifiers.flags;
                node.modifiers = modifiers;
            }
        }
        function parseParameter() {
            var node = createNode(124);
            setModifiers(node, parseModifiers());
            node.dotDotDotToken = parseOptionalToken(21);
            node.name = inGeneratorParameterContext() ? doInYieldContext(parseIdentifierOrPattern) : parseIdentifierOrPattern();
            if (ts.getFullWidth(node.name) === 0 && node.flags === 0 && ts.isModifier(token)) {
                nextToken();
            }
            node.questionToken = parseOptionalToken(50);
            node.type = parseParameterType();
            node.initializer = inGeneratorParameterContext() ? doOutsideOfYieldContext(parseParameterInitializer) : parseParameterInitializer();
            return finishNode(node);
        }
        function parseParameterInitializer() {
            return parseInitializer(true);
        }
        function fillSignature(returnToken, yieldAndGeneratorParameterContext, requireCompleteParameterList, signature) {
            var returnTokenRequired = returnToken === 32;
            signature.typeParameters = parseTypeParameters();
            signature.parameters = parseParameterList(yieldAndGeneratorParameterContext, requireCompleteParameterList);
            if (returnTokenRequired) {
                parseExpected(returnToken);
                signature.type = parseType();
            }
            else if (parseOptional(returnToken)) {
                signature.type = parseType();
            }
        }
        function parseParameterList(yieldAndGeneratorParameterContext, requireCompleteParameterList) {
            if (parseExpected(16)) {
                var savedYieldContext = inYieldContext();
                var savedGeneratorParameterContext = inGeneratorParameterContext();
                setYieldContext(yieldAndGeneratorParameterContext);
                setGeneratorParameterContext(yieldAndGeneratorParameterContext);
                var result = parseDelimitedList(15, parseParameter);
                setYieldContext(savedYieldContext);
                setGeneratorParameterContext(savedGeneratorParameterContext);
                if (!parseExpected(17) && requireCompleteParameterList) {
                    return undefined;
                }
                return result;
            }
            return requireCompleteParameterList ? undefined : createMissingList();
        }
        function parseTypeMemberSemicolon() {
            if (parseSemicolon()) {
                return;
            }
            parseOptional(23);
        }
        function parseSignatureMember(kind) {
            var node = createNode(kind);
            if (kind === 133) {
                parseExpected(87);
            }
            fillSignature(51, false, false, node);
            parseTypeMemberSemicolon();
            return finishNode(node);
        }
        function isIndexSignature() {
            if (token !== 18) {
                return false;
            }
            return lookAhead(isUnambiguouslyIndexSignature);
        }
        function isUnambiguouslyIndexSignature() {
            nextToken();
            if (token === 21 || token === 19) {
                return true;
            }
            if (ts.isModifier(token)) {
                nextToken();
                if (isIdentifier()) {
                    return true;
                }
            }
            else if (!isIdentifier()) {
                return false;
            }
            else {
                nextToken();
            }
            if (token === 51 || token === 23) {
                return true;
            }
            if (token !== 50) {
                return false;
            }
            nextToken();
            return token === 51 || token === 23 || token === 19;
        }
        function parseIndexSignatureDeclaration(modifiers) {
            var fullStart = modifiers ? modifiers.pos : scanner.getStartPos();
            var node = createNode(134, fullStart);
            setModifiers(node, modifiers);
            node.parameters = parseBracketedList(15, parseParameter, 18, 19);
            node.type = parseTypeAnnotation();
            parseTypeMemberSemicolon();
            return finishNode(node);
        }
        function parsePropertyOrMethodSignature() {
            var fullStart = scanner.getStartPos();
            var name = parsePropertyName();
            var questionToken = parseOptionalToken(50);
            if (token === 16 || token === 24) {
                var method = createNode(127, fullStart);
                method.name = name;
                method.questionToken = questionToken;
                fillSignature(51, false, false, method);
                parseTypeMemberSemicolon();
                return finishNode(method);
            }
            else {
                var property = createNode(125, fullStart);
                property.name = name;
                property.questionToken = questionToken;
                property.type = parseTypeAnnotation();
                parseTypeMemberSemicolon();
                return finishNode(property);
            }
        }
        function isStartOfTypeMember() {
            switch (token) {
                case 16:
                case 24:
                case 18:
                    return true;
                default:
                    if (ts.isModifier(token)) {
                        var result = lookAhead(isStartOfIndexSignatureDeclaration);
                        if (result) {
                            return result;
                        }
                    }
                    return isLiteralPropertyName() && lookAhead(isTypeMemberWithLiteralPropertyName);
            }
        }
        function isStartOfIndexSignatureDeclaration() {
            while (ts.isModifier(token)) {
                nextToken();
            }
            return isIndexSignature();
        }
        function isTypeMemberWithLiteralPropertyName() {
            nextToken();
            return token === 16 || token === 24 || token === 50 || token === 51 || canParseSemicolon();
        }
        function parseTypeMember() {
            switch (token) {
                case 16:
                case 24:
                    return parseSignatureMember(132);
                case 18:
                    return isIndexSignature() ? parseIndexSignatureDeclaration(undefined) : parsePropertyOrMethodSignature();
                case 87:
                    if (lookAhead(isStartOfConstructSignature)) {
                        return parseSignatureMember(133);
                    }
                case 8:
                case 7:
                    return parsePropertyOrMethodSignature();
                default:
                    if (ts.isModifier(token)) {
                        var result = tryParse(parseIndexSignatureWithModifiers);
                        if (result) {
                            return result;
                        }
                    }
                    if (isIdentifierOrKeyword()) {
                        return parsePropertyOrMethodSignature();
                    }
            }
        }
        function parseIndexSignatureWithModifiers() {
            var modifiers = parseModifiers();
            return isIndexSignature() ? parseIndexSignatureDeclaration(modifiers) : undefined;
        }
        function isStartOfConstructSignature() {
            nextToken();
            return token === 16 || token === 24;
        }
        function parseTypeLiteral() {
            var node = createNode(139);
            node.members = parseObjectTypeMembers();
            return finishNode(node);
        }
        function parseObjectTypeMembers() {
            var members;
            if (parseExpected(14)) {
                members = parseList(5, false, parseTypeMember);
                parseExpected(15);
            }
            else {
                members = createMissingList();
            }
            return members;
        }
        function parseTupleType() {
            var node = createNode(141);
            node.elementTypes = parseBracketedList(18, parseType, 18, 19);
            return finishNode(node);
        }
        function parseParenthesizedType() {
            var node = createNode(143);
            parseExpected(16);
            node.type = parseType();
            parseExpected(17);
            return finishNode(node);
        }
        function parseFunctionOrConstructorType(kind) {
            var node = createNode(kind);
            if (kind === 137) {
                parseExpected(87);
            }
            fillSignature(32, false, false, node);
            return finishNode(node);
        }
        function parseKeywordAndNoDot() {
            var node = parseTokenNode();
            return token === 20 ? undefined : node;
        }
        function parseNonArrayType() {
            switch (token) {
                case 110:
                case 119:
                case 117:
                case 111:
                    var node = tryParse(parseKeywordAndNoDot);
                    return node || parseTypeReference();
                case 98:
                    return parseTokenNode();
                case 96:
                    return parseTypeQuery();
                case 14:
                    return parseTypeLiteral();
                case 18:
                    return parseTupleType();
                case 16:
                    return parseParenthesizedType();
                default:
                    return parseTypeReference();
            }
        }
        function isStartOfType() {
            switch (token) {
                case 110:
                case 119:
                case 117:
                case 111:
                case 98:
                case 96:
                case 14:
                case 18:
                case 24:
                case 87:
                    return true;
                case 16:
                    return lookAhead(isStartOfParenthesizedOrFunctionType);
                default:
                    return isIdentifier();
            }
        }
        function isStartOfParenthesizedOrFunctionType() {
            nextToken();
            return token === 17 || isStartOfParameter() || isStartOfType();
        }
        function parseArrayTypeOrHigher() {
            var type = parseNonArrayType();
            while (!scanner.hasPrecedingLineBreak() && parseOptional(18)) {
                parseExpected(19);
                var node = createNode(140, type.pos);
                node.elementType = type;
                type = finishNode(node);
            }
            return type;
        }
        function parseUnionTypeOrHigher() {
            var type = parseArrayTypeOrHigher();
            if (token === 44) {
                var types = [type];
                types.pos = type.pos;
                while (parseOptional(44)) {
                    types.push(parseArrayTypeOrHigher());
                }
                types.end = getNodeEnd();
                var node = createNode(142, type.pos);
                node.types = types;
                type = finishNode(node);
            }
            return type;
        }
        function isStartOfFunctionType() {
            if (token === 24) {
                return true;
            }
            return token === 16 && lookAhead(isUnambiguouslyStartOfFunctionType);
        }
        function isUnambiguouslyStartOfFunctionType() {
            nextToken();
            if (token === 17 || token === 21) {
                return true;
            }
            if (isIdentifier() || ts.isModifier(token)) {
                nextToken();
                if (token === 51 || token === 23 || token === 50 || token === 52 || isIdentifier() || ts.isModifier(token)) {
                    return true;
                }
                if (token === 17) {
                    nextToken();
                    if (token === 32) {
                        return true;
                    }
                }
            }
            return false;
        }
        function parseType() {
            var savedYieldContext = inYieldContext();
            var savedGeneratorParameterContext = inGeneratorParameterContext();
            setYieldContext(false);
            setGeneratorParameterContext(false);
            var result = parseTypeWorker();
            setYieldContext(savedYieldContext);
            setGeneratorParameterContext(savedGeneratorParameterContext);
            return result;
        }
        function parseTypeWorker() {
            if (isStartOfFunctionType()) {
                return parseFunctionOrConstructorType(136);
            }
            if (token === 87) {
                return parseFunctionOrConstructorType(137);
            }
            return parseUnionTypeOrHigher();
        }
        function parseTypeAnnotation() {
            return parseOptional(51) ? parseType() : undefined;
        }
        function isStartOfExpression() {
            switch (token) {
                case 92:
                case 90:
                case 88:
                case 94:
                case 79:
                case 7:
                case 8:
                case 10:
                case 11:
                case 16:
                case 18:
                case 14:
                case 82:
                case 87:
                case 36:
                case 56:
                case 33:
                case 34:
                case 47:
                case 46:
                case 73:
                case 96:
                case 98:
                case 38:
                case 39:
                case 24:
                case 64:
                case 109:
                    return true;
                default:
                    if (isBinaryOperator()) {
                        return true;
                    }
                    return isIdentifier();
            }
        }
        function isStartOfExpressionStatement() {
            return token !== 14 && token !== 82 && isStartOfExpression();
        }
        function parseExpression() {
            var expr = parseAssignmentExpressionOrHigher();
            while (parseOptional(23)) {
                expr = makeBinaryExpression(expr, 23, parseAssignmentExpressionOrHigher());
            }
            return expr;
        }
        function parseInitializer(inParameter) {
            if (token !== 52) {
                if (scanner.hasPrecedingLineBreak() || (inParameter && token === 14) || !isStartOfExpression()) {
                    return undefined;
                }
            }
            parseExpected(52);
            return parseAssignmentExpressionOrHigher();
        }
        function parseAssignmentExpressionOrHigher() {
            if (isYieldExpression()) {
                return parseYieldExpression();
            }
            var arrowExpression = tryParseParenthesizedArrowFunctionExpression();
            if (arrowExpression) {
                return arrowExpression;
            }
            var expr = parseBinaryExpressionOrHigher(0);
            if (expr.kind === 64 && token === 32) {
                return parseSimpleArrowFunctionExpression(expr);
            }
            if (isLeftHandSideExpression(expr) && isAssignmentOperator(reScanGreaterToken())) {
                var operator = token;
                nextToken();
                return makeBinaryExpression(expr, operator, parseAssignmentExpressionOrHigher());
            }
            return parseConditionalExpressionRest(expr);
        }
        function isYieldExpression() {
            if (token === 109) {
                if (inYieldContext()) {
                    return true;
                }
                if (inStrictModeContext()) {
                    return true;
                }
                return lookAhead(nextTokenIsIdentifierOnSameLine);
            }
            return false;
        }
        function nextTokenIsIdentifierOnSameLine() {
            nextToken();
            return !scanner.hasPrecedingLineBreak() && isIdentifier();
        }
        function parseYieldExpression() {
            var node = createNode(166);
            nextToken();
            if (!scanner.hasPrecedingLineBreak() && (token === 35 || isStartOfExpression())) {
                node.asteriskToken = parseOptionalToken(35);
                node.expression = parseAssignmentExpressionOrHigher();
                return finishNode(node);
            }
            else {
                return finishNode(node);
            }
        }
        function parseSimpleArrowFunctionExpression(identifier) {
            ts.Debug.assert(token === 32, "parseSimpleArrowFunctionExpression should only have been called if we had a =>");
            var node = createNode(157, identifier.pos);
            var parameter = createNode(124, identifier.pos);
            parameter.name = identifier;
            finishNode(parameter);
            node.parameters = [parameter];
            node.parameters.pos = parameter.pos;
            node.parameters.end = parameter.end;
            parseExpected(32);
            node.body = parseArrowFunctionExpressionBody();
            return finishNode(node);
        }
        function tryParseParenthesizedArrowFunctionExpression() {
            var triState = isParenthesizedArrowFunctionExpression();
            if (triState === 0) {
                return undefined;
            }
            var arrowFunction = triState === 1 ? parseParenthesizedArrowFunctionExpressionHead(true) : tryParse(parsePossibleParenthesizedArrowFunctionExpressionHead);
            if (!arrowFunction) {
                return undefined;
            }
            if (parseExpected(32) || token === 14) {
                arrowFunction.body = parseArrowFunctionExpressionBody();
            }
            else {
                arrowFunction.body = parseIdentifier();
            }
            return finishNode(arrowFunction);
        }
        function isParenthesizedArrowFunctionExpression() {
            if (token === 16 || token === 24) {
                return lookAhead(isParenthesizedArrowFunctionExpressionWorker);
            }
            if (token === 32) {
                return 1;
            }
            return 0;
        }
        function isParenthesizedArrowFunctionExpressionWorker() {
            var first = token;
            var second = nextToken();
            if (first === 16) {
                if (second === 17) {
                    var third = nextToken();
                    switch (third) {
                        case 32:
                        case 51:
                        case 14:
                            return 1;
                        default:
                            return 0;
                    }
                }
                if (second === 21) {
                    return 1;
                }
                if (!isIdentifier()) {
                    return 0;
                }
                if (nextToken() === 51) {
                    return 1;
                }
                return 2;
            }
            else {
                ts.Debug.assert(first === 24);
                if (!isIdentifier()) {
                    return 0;
                }
                return 2;
            }
        }
        function parsePossibleParenthesizedArrowFunctionExpressionHead() {
            return parseParenthesizedArrowFunctionExpressionHead(false);
        }
        function parseParenthesizedArrowFunctionExpressionHead(allowAmbiguity) {
            var node = createNode(157);
            fillSignature(51, false, !allowAmbiguity, node);
            if (!node.parameters) {
                return undefined;
            }
            if (!allowAmbiguity && token !== 32 && token !== 14) {
                return undefined;
            }
            return node;
        }
        function parseArrowFunctionExpressionBody() {
            if (token === 14) {
                return parseFunctionBlock(false, false);
            }
            if (isStartOfStatement(true) && !isStartOfExpressionStatement() && token !== 82) {
                return parseFunctionBlock(false, true);
            }
            return parseAssignmentExpressionOrHigher();
        }
        function parseConditionalExpressionRest(leftOperand) {
            if (!parseOptional(50)) {
                return leftOperand;
            }
            var node = createNode(164, leftOperand.pos);
            node.condition = leftOperand;
            node.whenTrue = allowInAnd(parseAssignmentExpressionOrHigher);
            parseExpected(51);
            node.whenFalse = parseAssignmentExpressionOrHigher();
            return finishNode(node);
        }
        function parseBinaryExpressionOrHigher(precedence) {
            var leftOperand = parseUnaryExpressionOrHigher();
            return parseBinaryExpressionRest(precedence, leftOperand);
        }
        function parseBinaryExpressionRest(precedence, leftOperand) {
            while (true) {
                reScanGreaterToken();
                var newPrecedence = getBinaryOperatorPrecedence();
                if (newPrecedence <= precedence) {
                    break;
                }
                if (token === 85 && inDisallowInContext()) {
                    break;
                }
                var operator = token;
                nextToken();
                leftOperand = makeBinaryExpression(leftOperand, operator, parseBinaryExpressionOrHigher(newPrecedence));
            }
            return leftOperand;
        }
        function isBinaryOperator() {
            if (inDisallowInContext() && token === 85) {
                return false;
            }
            return getBinaryOperatorPrecedence() > 0;
        }
        function getBinaryOperatorPrecedence() {
            switch (token) {
                case 49:
                    return 1;
                case 48:
                    return 2;
                case 44:
                    return 3;
                case 45:
                    return 4;
                case 43:
                    return 5;
                case 28:
                case 29:
                case 30:
                case 31:
                    return 6;
                case 24:
                case 25:
                case 26:
                case 27:
                case 86:
                case 85:
                    return 7;
                case 40:
                case 41:
                case 42:
                    return 8;
                case 33:
                case 34:
                    return 9;
                case 35:
                case 36:
                case 37:
                    return 10;
            }
            return -1;
        }
        function makeBinaryExpression(left, operator, right) {
            var node = createNode(163, left.pos);
            node.left = left;
            node.operator = operator;
            node.right = right;
            return finishNode(node);
        }
        function parsePrefixUnaryExpression() {
            var node = createNode(161);
            node.operator = token;
            nextToken();
            node.operand = parseUnaryExpressionOrHigher();
            return finishNode(node);
        }
        function parseDeleteExpression() {
            var node = createNode(158);
            nextToken();
            node.expression = parseUnaryExpressionOrHigher();
            return finishNode(node);
        }
        function parseTypeOfExpression() {
            var node = createNode(159);
            nextToken();
            node.expression = parseUnaryExpressionOrHigher();
            return finishNode(node);
        }
        function parseVoidExpression() {
            var node = createNode(160);
            nextToken();
            node.expression = parseUnaryExpressionOrHigher();
            return finishNode(node);
        }
        function parseUnaryExpressionOrHigher() {
            switch (token) {
                case 33:
                case 34:
                case 47:
                case 46:
                case 38:
                case 39:
                    return parsePrefixUnaryExpression();
                case 73:
                    return parseDeleteExpression();
                case 96:
                    return parseTypeOfExpression();
                case 98:
                    return parseVoidExpression();
                case 24:
                    return parseTypeAssertion();
                default:
                    return parsePostfixExpressionOrHigher();
            }
        }
        function parsePostfixExpressionOrHigher() {
            var expression = parseLeftHandSideExpressionOrHigher();
            ts.Debug.assert(isLeftHandSideExpression(expression));
            if ((token === 38 || token === 39) && !scanner.hasPrecedingLineBreak()) {
                var node = createNode(162, expression.pos);
                node.operand = expression;
                node.operator = token;
                nextToken();
                return finishNode(node);
            }
            return expression;
        }
        function parseLeftHandSideExpressionOrHigher() {
            var expression = token === 90 ? parseSuperExpression() : parseMemberExpressionOrHigher();
            return parseCallExpressionRest(expression);
        }
        function parseMemberExpressionOrHigher() {
            var expression = parsePrimaryExpression();
            return parseMemberExpressionRest(expression);
        }
        function parseSuperExpression() {
            var expression = parseTokenNode();
            if (token === 16 || token === 20) {
                return expression;
            }
            var node = createNode(149, expression.pos);
            node.expression = expression;
            parseExpected(20, ts.Diagnostics.super_must_be_followed_by_an_argument_list_or_member_access);
            node.name = parseRightSideOfDot(true);
            return finishNode(node);
        }
        function parseTypeAssertion() {
            var node = createNode(154);
            parseExpected(24);
            node.type = parseType();
            parseExpected(25);
            node.expression = parseUnaryExpressionOrHigher();
            return finishNode(node);
        }
        function parseMemberExpressionRest(expression) {
            while (true) {
                var dotOrBracketStart = scanner.getTokenPos();
                if (parseOptional(20)) {
                    var propertyAccess = createNode(149, expression.pos);
                    propertyAccess.expression = expression;
                    propertyAccess.name = parseRightSideOfDot(true);
                    expression = finishNode(propertyAccess);
                    continue;
                }
                if (parseOptional(18)) {
                    var indexedAccess = createNode(150, expression.pos);
                    indexedAccess.expression = expression;
                    if (token !== 19) {
                        indexedAccess.argumentExpression = allowInAnd(parseExpression);
                        if (indexedAccess.argumentExpression.kind === 8 || indexedAccess.argumentExpression.kind === 7) {
                            var literal = indexedAccess.argumentExpression;
                            literal.text = internIdentifier(literal.text);
                        }
                    }
                    parseExpected(19);
                    expression = finishNode(indexedAccess);
                    continue;
                }
                if (token === 10 || token === 11) {
                    var tagExpression = createNode(153, expression.pos);
                    tagExpression.tag = expression;
                    tagExpression.template = token === 10 ? parseLiteralNode() : parseTemplateExpression();
                    expression = finishNode(tagExpression);
                    continue;
                }
                return expression;
            }
        }
        function parseCallExpressionRest(expression) {
            while (true) {
                expression = parseMemberExpressionRest(expression);
                if (token === 24) {
                    var typeArguments = tryParse(parseTypeArgumentsInExpression);
                    if (!typeArguments) {
                        return expression;
                    }
                    var callExpr = createNode(151, expression.pos);
                    callExpr.expression = expression;
                    callExpr.typeArguments = typeArguments;
                    callExpr.arguments = parseArgumentList();
                    expression = finishNode(callExpr);
                    continue;
                }
                else if (token === 16) {
                    var callExpr = createNode(151, expression.pos);
                    callExpr.expression = expression;
                    callExpr.arguments = parseArgumentList();
                    expression = finishNode(callExpr);
                    continue;
                }
                return expression;
            }
        }
        function parseArgumentList() {
            parseExpected(16);
            var result = parseDelimitedList(12, parseArgumentExpression);
            parseExpected(17);
            return result;
        }
        function parseTypeArgumentsInExpression() {
            if (!parseOptional(24)) {
                return undefined;
            }
            var typeArguments = parseDelimitedList(17, parseType);
            if (!parseExpected(25)) {
                return undefined;
            }
            return typeArguments && canFollowTypeArgumentsInExpression() ? typeArguments : undefined;
        }
        function canFollowTypeArgumentsInExpression() {
            switch (token) {
                case 16:
                case 20:
                case 17:
                case 19:
                case 51:
                case 22:
                case 23:
                case 50:
                case 28:
                case 30:
                case 29:
                case 31:
                case 48:
                case 49:
                case 45:
                case 43:
                case 44:
                case 15:
                case 1:
                    return true;
                default:
                    return false;
            }
        }
        function parsePrimaryExpression() {
            switch (token) {
                case 7:
                case 8:
                case 10:
                    return parseLiteralNode();
                case 92:
                case 90:
                case 88:
                case 94:
                case 79:
                    return parseTokenNode();
                case 16:
                    return parseParenthesizedExpression();
                case 18:
                    return parseArrayLiteralExpression();
                case 14:
                    return parseObjectLiteralExpression();
                case 82:
                    return parseFunctionExpression();
                case 87:
                    return parseNewExpression();
                case 36:
                case 56:
                    if (reScanSlashToken() === 9) {
                        return parseLiteralNode();
                    }
                    break;
                case 11:
                    return parseTemplateExpression();
            }
            return parseIdentifier(ts.Diagnostics.Expression_expected);
        }
        function parseParenthesizedExpression() {
            var node = createNode(155);
            parseExpected(16);
            node.expression = allowInAnd(parseExpression);
            parseExpected(17);
            return finishNode(node);
        }
        function parseSpreadElement() {
            var node = createNode(167);
            parseExpected(21);
            node.expression = parseAssignmentExpressionOrHigher();
            return finishNode(node);
        }
        function parseArgumentOrArrayLiteralElement() {
            return token === 21 ? parseSpreadElement() : token === 23 ? createNode(168) : parseAssignmentExpressionOrHigher();
        }
        function parseArgumentExpression() {
            return allowInAnd(parseArgumentOrArrayLiteralElement);
        }
        function parseArrayLiteralExpression() {
            var node = createNode(147);
            parseExpected(18);
            if (scanner.hasPrecedingLineBreak())
                node.flags |= 256;
            node.elements = parseDelimitedList(14, parseArgumentOrArrayLiteralElement);
            parseExpected(19);
            return finishNode(node);
        }
        function tryParseAccessorDeclaration(fullStart, modifiers) {
            if (parseContextualModifier(114)) {
                return parseAccessorDeclaration(130, fullStart, modifiers);
            }
            else if (parseContextualModifier(118)) {
                return parseAccessorDeclaration(131, fullStart, modifiers);
            }
            return undefined;
        }
        function parseObjectLiteralElement() {
            var fullStart = scanner.getStartPos();
            var modifiers = parseModifiers();
            var accessor = tryParseAccessorDeclaration(fullStart, modifiers);
            if (accessor) {
                return accessor;
            }
            var asteriskToken = parseOptionalToken(35);
            var tokenIsIdentifier = isIdentifier();
            var nameToken = token;
            var propertyName = parsePropertyName();
            var questionToken = parseOptionalToken(50);
            if (asteriskToken || token === 16 || token === 24) {
                return parseMethodDeclaration(fullStart, modifiers, asteriskToken, propertyName, questionToken);
            }
            if ((token === 23 || token === 15) && tokenIsIdentifier) {
                var shorthandDeclaration = createNode(205, fullStart);
                shorthandDeclaration.name = propertyName;
                shorthandDeclaration.questionToken = questionToken;
                return finishNode(shorthandDeclaration);
            }
            else {
                var propertyAssignment = createNode(204, fullStart);
                propertyAssignment.name = propertyName;
                propertyAssignment.questionToken = questionToken;
                parseExpected(51);
                propertyAssignment.initializer = allowInAnd(parseAssignmentExpressionOrHigher);
                return finishNode(propertyAssignment);
            }
        }
        function parseObjectLiteralExpression() {
            var node = createNode(148);
            parseExpected(14);
            if (scanner.hasPrecedingLineBreak()) {
                node.flags |= 256;
            }
            node.properties = parseDelimitedList(13, parseObjectLiteralElement, true);
            parseExpected(15);
            return finishNode(node);
        }
        function parseFunctionExpression() {
            var node = createNode(156);
            parseExpected(82);
            node.asteriskToken = parseOptionalToken(35);
            node.name = node.asteriskToken ? doInYieldContext(parseOptionalIdentifier) : parseOptionalIdentifier();
            fillSignature(51, !!node.asteriskToken, false, node);
            node.body = parseFunctionBlock(!!node.asteriskToken, false);
            return finishNode(node);
        }
        function parseOptionalIdentifier() {
            return isIdentifier() ? parseIdentifier() : undefined;
        }
        function parseNewExpression() {
            var node = createNode(152);
            parseExpected(87);
            node.expression = parseMemberExpressionOrHigher();
            node.typeArguments = tryParse(parseTypeArgumentsInExpression);
            if (node.typeArguments || token === 16) {
                node.arguments = parseArgumentList();
            }
            return finishNode(node);
        }
        function parseBlock(ignoreMissingOpenBrace, checkForStrictMode, diagnosticMessage) {
            var node = createNode(170);
            if (parseExpected(14, diagnosticMessage) || ignoreMissingOpenBrace) {
                node.statements = parseList(2, checkForStrictMode, parseStatement);
                parseExpected(15);
            }
            else {
                node.statements = createMissingList();
            }
            return finishNode(node);
        }
        function parseFunctionBlock(allowYield, ignoreMissingOpenBrace, diagnosticMessage) {
            var savedYieldContext = inYieldContext();
            setYieldContext(allowYield);
            var block = parseBlock(ignoreMissingOpenBrace, true, diagnosticMessage);
            setYieldContext(savedYieldContext);
            return block;
        }
        function parseEmptyStatement() {
            var node = createNode(172);
            parseExpected(22);
            return finishNode(node);
        }
        function parseIfStatement() {
            var node = createNode(174);
            parseExpected(83);
            parseExpected(16);
            node.expression = allowInAnd(parseExpression);
            parseExpected(17);
            node.thenStatement = parseStatement();
            node.elseStatement = parseOptional(75) ? parseStatement() : undefined;
            return finishNode(node);
        }
        function parseDoStatement() {
            var node = createNode(175);
            parseExpected(74);
            node.statement = parseStatement();
            parseExpected(99);
            parseExpected(16);
            node.expression = allowInAnd(parseExpression);
            parseExpected(17);
            parseOptional(22);
            return finishNode(node);
        }
        function parseWhileStatement() {
            var node = createNode(176);
            parseExpected(99);
            parseExpected(16);
            node.expression = allowInAnd(parseExpression);
            parseExpected(17);
            node.statement = parseStatement();
            return finishNode(node);
        }
        function parseForOrForInStatement() {
            var pos = getNodePos();
            parseExpected(81);
            parseExpected(16);
            var initializer = undefined;
            if (token !== 22) {
                if (token === 97 || token === 103 || token === 69) {
                    initializer = parseVariableDeclarationList(true);
                }
                else {
                    initializer = disallowInAnd(parseExpression);
                }
            }
            var forOrForInStatement;
            if (parseOptional(85)) {
                var forInStatement = createNode(178, pos);
                forInStatement.initializer = initializer;
                forInStatement.expression = allowInAnd(parseExpression);
                parseExpected(17);
                forOrForInStatement = forInStatement;
            }
            else {
                var forStatement = createNode(177, pos);
                forStatement.initializer = initializer;
                parseExpected(22);
                if (token !== 22 && token !== 17) {
                    forStatement.condition = allowInAnd(parseExpression);
                }
                parseExpected(22);
                if (token !== 17) {
                    forStatement.iterator = allowInAnd(parseExpression);
                }
                parseExpected(17);
                forOrForInStatement = forStatement;
            }
            forOrForInStatement.statement = parseStatement();
            return finishNode(forOrForInStatement);
        }
        function parseBreakOrContinueStatement(kind) {
            var node = createNode(kind);
            parseExpected(kind === 180 ? 65 : 70);
            if (!canParseSemicolon()) {
                node.label = parseIdentifier();
            }
            parseSemicolon();
            return finishNode(node);
        }
        function parseReturnStatement() {
            var node = createNode(181);
            parseExpected(89);
            if (!canParseSemicolon()) {
                node.expression = allowInAnd(parseExpression);
            }
            parseSemicolon();
            return finishNode(node);
        }
        function parseWithStatement() {
            var node = createNode(182);
            parseExpected(100);
            parseExpected(16);
            node.expression = allowInAnd(parseExpression);
            parseExpected(17);
            node.statement = parseStatement();
            return finishNode(node);
        }
        function parseCaseClause() {
            var node = createNode(200);
            parseExpected(66);
            node.expression = allowInAnd(parseExpression);
            parseExpected(51);
            node.statements = parseList(4, false, parseStatement);
            return finishNode(node);
        }
        function parseDefaultClause() {
            var node = createNode(201);
            parseExpected(72);
            parseExpected(51);
            node.statements = parseList(4, false, parseStatement);
            return finishNode(node);
        }
        function parseCaseOrDefaultClause() {
            return token === 66 ? parseCaseClause() : parseDefaultClause();
        }
        function parseSwitchStatement() {
            var node = createNode(183);
            parseExpected(91);
            parseExpected(16);
            node.expression = allowInAnd(parseExpression);
            parseExpected(17);
            parseExpected(14);
            node.clauses = parseList(3, false, parseCaseOrDefaultClause);
            parseExpected(15);
            return finishNode(node);
        }
        function parseThrowStatement() {
            var node = createNode(185);
            parseExpected(93);
            node.expression = scanner.hasPrecedingLineBreak() ? undefined : allowInAnd(parseExpression);
            parseSemicolon();
            return finishNode(node);
        }
        function parseTryStatement() {
            var node = createNode(186);
            parseExpected(95);
            node.tryBlock = parseBlock(false, false);
            node.catchClause = token === 67 ? parseCatchClause() : undefined;
            if (!node.catchClause || token === 80) {
                parseExpected(80);
                node.finallyBlock = parseBlock(false, false);
            }
            return finishNode(node);
        }
        function parseCatchClause() {
            var result = createNode(203);
            parseExpected(67);
            parseExpected(16);
            result.name = parseIdentifier();
            result.type = parseTypeAnnotation();
            parseExpected(17);
            result.block = parseBlock(false, false);
            return finishNode(result);
        }
        function parseDebuggerStatement() {
            var node = createNode(187);
            parseExpected(71);
            parseSemicolon();
            return finishNode(node);
        }
        function parseExpressionOrLabeledStatement() {
            var fullStart = scanner.getStartPos();
            var expression = allowInAnd(parseExpression);
            if (expression.kind === 64 && parseOptional(51)) {
                var labeledStatement = createNode(184, fullStart);
                labeledStatement.label = expression;
                labeledStatement.statement = parseStatement();
                return finishNode(labeledStatement);
            }
            else {
                var expressionStatement = createNode(173, fullStart);
                expressionStatement.expression = expression;
                parseSemicolon();
                return finishNode(expressionStatement);
            }
        }
        function isStartOfStatement(inErrorRecovery) {
            if (ts.isModifier(token)) {
                var result = lookAhead(parseVariableStatementOrFunctionDeclarationWithModifiers);
                if (result) {
                    return true;
                }
            }
            switch (token) {
                case 22:
                    return !inErrorRecovery;
                case 14:
                case 97:
                case 103:
                case 82:
                case 83:
                case 74:
                case 99:
                case 81:
                case 70:
                case 65:
                case 89:
                case 100:
                case 91:
                case 93:
                case 95:
                case 71:
                case 67:
                case 80:
                    return true;
                case 69:
                    var isConstEnum = lookAhead(nextTokenIsEnumKeyword);
                    return !isConstEnum;
                case 102:
                case 68:
                case 115:
                case 76:
                case 120:
                    if (isDeclarationStart()) {
                        return false;
                    }
                case 107:
                case 105:
                case 106:
                case 108:
                    if (lookAhead(nextTokenIsIdentifierOrKeywordOnSameLine)) {
                        return false;
                    }
                default:
                    return isStartOfExpression();
            }
        }
        function nextTokenIsEnumKeyword() {
            nextToken();
            return token === 76;
        }
        function nextTokenIsIdentifierOrKeywordOnSameLine() {
            nextToken();
            return isIdentifierOrKeyword() && !scanner.hasPrecedingLineBreak();
        }
        function parseStatement() {
            switch (token) {
                case 14:
                    return parseBlock(false, false);
                case 97:
                case 69:
                    return parseVariableStatement(scanner.getStartPos(), undefined);
                case 82:
                    return parseFunctionDeclaration(scanner.getStartPos(), undefined);
                case 22:
                    return parseEmptyStatement();
                case 83:
                    return parseIfStatement();
                case 74:
                    return parseDoStatement();
                case 99:
                    return parseWhileStatement();
                case 81:
                    return parseForOrForInStatement();
                case 70:
                    return parseBreakOrContinueStatement(179);
                case 65:
                    return parseBreakOrContinueStatement(180);
                case 89:
                    return parseReturnStatement();
                case 100:
                    return parseWithStatement();
                case 91:
                    return parseSwitchStatement();
                case 93:
                    return parseThrowStatement();
                case 95:
                case 67:
                case 80:
                    return parseTryStatement();
                case 71:
                    return parseDebuggerStatement();
                case 103:
                    if (isLetDeclaration()) {
                        return parseVariableStatement(scanner.getStartPos(), undefined);
                    }
                default:
                    if (ts.isModifier(token)) {
                        var result = tryParse(parseVariableStatementOrFunctionDeclarationWithModifiers);
                        if (result) {
                            return result;
                        }
                    }
                    return parseExpressionOrLabeledStatement();
            }
        }
        function parseVariableStatementOrFunctionDeclarationWithModifiers() {
            var start = scanner.getStartPos();
            var modifiers = parseModifiers();
            switch (token) {
                case 69:
                    var nextTokenIsEnum = lookAhead(nextTokenIsEnumKeyword);
                    if (nextTokenIsEnum) {
                        return undefined;
                    }
                    return parseVariableStatement(start, modifiers);
                case 103:
                    if (!isLetDeclaration()) {
                        return undefined;
                    }
                    return parseVariableStatement(start, modifiers);
                case 97:
                    return parseVariableStatement(start, modifiers);
                case 82:
                    return parseFunctionDeclaration(start, modifiers);
            }
            return undefined;
        }
        function parseFunctionBlockOrSemicolon(isGenerator, diagnosticMessage) {
            if (token !== 14 && canParseSemicolon()) {
                parseSemicolon();
                return;
            }
            return parseFunctionBlock(isGenerator, false, diagnosticMessage);
        }
        function parseArrayBindingElement() {
            if (token === 23) {
                return createNode(168);
            }
            var node = createNode(146);
            node.dotDotDotToken = parseOptionalToken(21);
            node.name = parseIdentifierOrPattern();
            node.initializer = parseInitializer(false);
            return finishNode(node);
        }
        function parseObjectBindingElement() {
            var node = createNode(146);
            var id = parsePropertyName();
            if (id.kind === 64 && token !== 51) {
                node.name = id;
            }
            else {
                parseExpected(51);
                node.propertyName = id;
                node.name = parseIdentifierOrPattern();
            }
            node.initializer = parseInitializer(false);
            return finishNode(node);
        }
        function parseObjectBindingPattern() {
            var node = createNode(144);
            parseExpected(14);
            node.elements = parseDelimitedList(10, parseObjectBindingElement);
            parseExpected(15);
            return finishNode(node);
        }
        function parseArrayBindingPattern() {
            var node = createNode(145);
            parseExpected(18);
            node.elements = parseDelimitedList(11, parseArrayBindingElement);
            parseExpected(19);
            return finishNode(node);
        }
        function isIdentifierOrPattern() {
            return token === 14 || token === 18 || isIdentifier();
        }
        function parseIdentifierOrPattern() {
            if (token === 18) {
                return parseArrayBindingPattern();
            }
            if (token === 14) {
                return parseObjectBindingPattern();
            }
            return parseIdentifier();
        }
        function parseVariableDeclaration() {
            var node = createNode(188);
            node.name = parseIdentifierOrPattern();
            node.type = parseTypeAnnotation();
            node.initializer = parseInitializer(false);
            return finishNode(node);
        }
        function parseVariableDeclarationList(disallowIn) {
            var node = createNode(189);
            switch (token) {
                case 97:
                    break;
                case 103:
                    node.flags |= 2048;
                    break;
                case 69:
                    node.flags |= 4096;
                    break;
                default:
                    ts.Debug.fail();
            }
            nextToken();
            var savedDisallowIn = inDisallowInContext();
            setDisallowInContext(disallowIn);
            node.declarations = parseDelimitedList(9, parseVariableDeclaration);
            setDisallowInContext(savedDisallowIn);
            return finishNode(node);
        }
        function parseVariableStatement(fullStart, modifiers) {
            var node = createNode(171, fullStart);
            setModifiers(node, modifiers);
            node.declarationList = parseVariableDeclarationList(false);
            parseSemicolon();
            return finishNode(node);
        }
        function parseFunctionDeclaration(fullStart, modifiers) {
            var node = createNode(190, fullStart);
            setModifiers(node, modifiers);
            parseExpected(82);
            node.asteriskToken = parseOptionalToken(35);
            node.name = parseIdentifier();
            fillSignature(51, !!node.asteriskToken, false, node);
            node.body = parseFunctionBlockOrSemicolon(!!node.asteriskToken, ts.Diagnostics.or_expected);
            return finishNode(node);
        }
        function parseConstructorDeclaration(pos, modifiers) {
            var node = createNode(129, pos);
            setModifiers(node, modifiers);
            parseExpected(112);
            fillSignature(51, false, false, node);
            node.body = parseFunctionBlockOrSemicolon(false, ts.Diagnostics.or_expected);
            return finishNode(node);
        }
        function parseMethodDeclaration(fullStart, modifiers, asteriskToken, name, questionToken, diagnosticMessage) {
            var method = createNode(128, fullStart);
            setModifiers(method, modifiers);
            method.asteriskToken = asteriskToken;
            method.name = name;
            method.questionToken = questionToken;
            fillSignature(51, !!asteriskToken, false, method);
            method.body = parseFunctionBlockOrSemicolon(!!asteriskToken, diagnosticMessage);
            return finishNode(method);
        }
        function parsePropertyOrMethodDeclaration(fullStart, modifiers) {
            var asteriskToken = parseOptionalToken(35);
            var name = parsePropertyName();
            var questionToken = parseOptionalToken(50);
            if (asteriskToken || token === 16 || token === 24) {
                return parseMethodDeclaration(fullStart, modifiers, asteriskToken, name, questionToken, ts.Diagnostics.or_expected);
            }
            else {
                var property = createNode(126, fullStart);
                setModifiers(property, modifiers);
                property.name = name;
                property.questionToken = questionToken;
                property.type = parseTypeAnnotation();
                property.initializer = allowInAnd(parseNonParameterInitializer);
                parseSemicolon();
                return finishNode(property);
            }
        }
        function parseNonParameterInitializer() {
            return parseInitializer(false);
        }
        function parseAccessorDeclaration(kind, fullStart, modifiers) {
            var node = createNode(kind, fullStart);
            setModifiers(node, modifiers);
            node.name = parsePropertyName();
            fillSignature(51, false, false, node);
            node.body = parseFunctionBlockOrSemicolon(false);
            return finishNode(node);
        }
        function isClassMemberStart() {
            var idToken;
            while (ts.isModifier(token)) {
                idToken = token;
                nextToken();
            }
            if (token === 35) {
                return true;
            }
            if (isLiteralPropertyName()) {
                idToken = token;
                nextToken();
            }
            if (token === 18) {
                return true;
            }
            if (idToken !== undefined) {
                if (!ts.isKeyword(idToken) || idToken === 118 || idToken === 114) {
                    return true;
                }
                switch (token) {
                    case 16:
                    case 24:
                    case 51:
                    case 52:
                    case 50:
                        return true;
                    default:
                        return canParseSemicolon();
                }
            }
            return false;
        }
        function parseModifiers() {
            var flags = 0;
            var modifiers;
            while (true) {
                var modifierStart = scanner.getStartPos();
                var modifierKind = token;
                if (!parseAnyContextualModifier()) {
                    break;
                }
                if (!modifiers) {
                    modifiers = [];
                    modifiers.pos = modifierStart;
                }
                flags |= modifierToFlag(modifierKind);
                modifiers.push(finishNode(createNode(modifierKind, modifierStart)));
            }
            if (modifiers) {
                modifiers.flags = flags;
                modifiers.end = scanner.getStartPos();
            }
            return modifiers;
        }
        function parseClassElement() {
            var fullStart = getNodePos();
            var modifiers = parseModifiers();
            var accessor = tryParseAccessorDeclaration(fullStart, modifiers);
            if (accessor) {
                return accessor;
            }
            if (token === 112) {
                return parseConstructorDeclaration(fullStart, modifiers);
            }
            if (isIndexSignature()) {
                return parseIndexSignatureDeclaration(modifiers);
            }
            if (isIdentifierOrKeyword() || token === 8 || token === 7 || token === 35 || token === 18) {
                return parsePropertyOrMethodDeclaration(fullStart, modifiers);
            }
            ts.Debug.fail("Should not have attempted to parse class member declaration.");
        }
        function parseClassDeclaration(fullStart, modifiers) {
            var node = createNode(191, fullStart);
            setModifiers(node, modifiers);
            parseExpected(68);
            node.name = parseIdentifier();
            node.typeParameters = parseTypeParameters();
            node.heritageClauses = parseHeritageClauses(true);
            if (parseExpected(14)) {
                node.members = inGeneratorParameterContext() ? doOutsideOfYieldContext(parseClassMembers) : parseClassMembers();
                parseExpected(15);
            }
            else {
                node.members = createMissingList();
            }
            return finishNode(node);
        }
        function parseHeritageClauses(isClassHeritageClause) {
            if (isHeritageClause()) {
                return isClassHeritageClause && inGeneratorParameterContext() ? doOutsideOfYieldContext(parseHeritageClausesWorker) : parseHeritageClausesWorker();
            }
            return undefined;
        }
        function parseHeritageClausesWorker() {
            return parseList(19, false, parseHeritageClause);
        }
        function parseHeritageClause() {
            if (token === 78 || token === 101) {
                var node = createNode(202);
                node.token = token;
                nextToken();
                node.types = parseDelimitedList(8, parseTypeReference);
                return finishNode(node);
            }
            return undefined;
        }
        function isHeritageClause() {
            return token === 78 || token === 101;
        }
        function parseClassMembers() {
            return parseList(6, false, parseClassElement);
        }
        function parseInterfaceDeclaration(fullStart, modifiers) {
            var node = createNode(192, fullStart);
            setModifiers(node, modifiers);
            parseExpected(102);
            node.name = parseIdentifier();
            node.typeParameters = parseTypeParameters();
            node.heritageClauses = parseHeritageClauses(false);
            node.members = parseObjectTypeMembers();
            return finishNode(node);
        }
        function parseTypeAliasDeclaration(fullStart, modifiers) {
            var node = createNode(193, fullStart);
            setModifiers(node, modifiers);
            parseExpected(120);
            node.name = parseIdentifier();
            parseExpected(52);
            node.type = parseType();
            parseSemicolon();
            return finishNode(node);
        }
        function parseEnumMember() {
            var node = createNode(206, scanner.getStartPos());
            node.name = parsePropertyName();
            node.initializer = allowInAnd(parseNonParameterInitializer);
            return finishNode(node);
        }
        function parseEnumDeclaration(fullStart, modifiers) {
            var node = createNode(194, fullStart);
            setModifiers(node, modifiers);
            parseExpected(76);
            node.name = parseIdentifier();
            if (parseExpected(14)) {
                node.members = parseDelimitedList(7, parseEnumMember);
                parseExpected(15);
            }
            else {
                node.members = createMissingList();
            }
            return finishNode(node);
        }
        function parseModuleBlock() {
            var node = createNode(196, scanner.getStartPos());
            if (parseExpected(14)) {
                node.statements = parseList(1, false, parseModuleElement);
                parseExpected(15);
            }
            else {
                node.statements = createMissingList();
            }
            return finishNode(node);
        }
        function parseInternalModuleTail(fullStart, modifiers, flags) {
            var node = createNode(195, fullStart);
            setModifiers(node, modifiers);
            node.flags |= flags;
            node.name = parseIdentifier();
            node.body = parseOptional(20) ? parseInternalModuleTail(getNodePos(), undefined, 1) : parseModuleBlock();
            return finishNode(node);
        }
        function parseAmbientExternalModuleDeclaration(fullStart, modifiers) {
            var node = createNode(195, fullStart);
            setModifiers(node, modifiers);
            node.name = parseLiteralNode(true);
            node.body = parseModuleBlock();
            return finishNode(node);
        }
        function parseModuleDeclaration(fullStart, modifiers) {
            parseExpected(115);
            return token === 8 ? parseAmbientExternalModuleDeclaration(fullStart, modifiers) : parseInternalModuleTail(fullStart, modifiers, modifiers ? modifiers.flags : 0);
        }
        function isExternalModuleReference() {
            return token === 116 && lookAhead(nextTokenIsOpenParen);
        }
        function nextTokenIsOpenParen() {
            return nextToken() === 16;
        }
        function parseImportDeclaration(fullStart, modifiers) {
            var node = createNode(197, fullStart);
            setModifiers(node, modifiers);
            parseExpected(84);
            node.name = parseIdentifier();
            parseExpected(52);
            node.moduleReference = parseModuleReference();
            parseSemicolon();
            return finishNode(node);
        }
        function parseModuleReference() {
            return isExternalModuleReference() ? parseExternalModuleReference() : parseEntityName(false);
        }
        function parseExternalModuleReference() {
            var node = createNode(199);
            parseExpected(116);
            parseExpected(16);
            node.expression = parseExpression();
            if (node.expression.kind === 8) {
                internIdentifier(node.expression.text);
            }
            parseExpected(17);
            return finishNode(node);
        }
        function parseExportAssignmentTail(fullStart, modifiers) {
            var node = createNode(198, fullStart);
            setModifiers(node, modifiers);
            node.exportName = parseIdentifier();
            parseSemicolon();
            return finishNode(node);
        }
        function isLetDeclaration() {
            return inStrictModeContext() || lookAhead(nextTokenIsIdentifierOnSameLine);
        }
        function isDeclarationStart() {
            switch (token) {
                case 97:
                case 69:
                case 82:
                    return true;
                case 103:
                    return isLetDeclaration();
                case 68:
                case 102:
                case 76:
                case 84:
                case 120:
                    return lookAhead(nextTokenIsIdentifierOrKeyword);
                case 115:
                    return lookAhead(nextTokenIsIdentifierOrKeywordOrStringLiteral);
                case 77:
                    return lookAhead(nextTokenIsEqualsTokenOrDeclarationStart);
                case 113:
                case 107:
                case 105:
                case 106:
                case 108:
                    return lookAhead(nextTokenIsDeclarationStart);
            }
        }
        function isIdentifierOrKeyword() {
            return token >= 64;
        }
        function nextTokenIsIdentifierOrKeyword() {
            nextToken();
            return isIdentifierOrKeyword();
        }
        function nextTokenIsIdentifierOrKeywordOrStringLiteral() {
            nextToken();
            return isIdentifierOrKeyword() || token === 8;
        }
        function nextTokenIsEqualsTokenOrDeclarationStart() {
            nextToken();
            return token === 52 || isDeclarationStart();
        }
        function nextTokenIsDeclarationStart() {
            nextToken();
            return isDeclarationStart();
        }
        function parseDeclaration() {
            var fullStart = getNodePos();
            var modifiers = parseModifiers();
            if (token === 77) {
                nextToken();
                if (parseOptional(52)) {
                    return parseExportAssignmentTail(fullStart, modifiers);
                }
            }
            switch (token) {
                case 97:
                case 103:
                case 69:
                    return parseVariableStatement(fullStart, modifiers);
                case 82:
                    return parseFunctionDeclaration(fullStart, modifiers);
                case 68:
                    return parseClassDeclaration(fullStart, modifiers);
                case 102:
                    return parseInterfaceDeclaration(fullStart, modifiers);
                case 120:
                    return parseTypeAliasDeclaration(fullStart, modifiers);
                case 76:
                    return parseEnumDeclaration(fullStart, modifiers);
                case 115:
                    return parseModuleDeclaration(fullStart, modifiers);
                case 84:
                    return parseImportDeclaration(fullStart, modifiers);
                default:
                    ts.Debug.fail("Mismatch between isDeclarationStart and parseDeclaration");
            }
        }
        function isSourceElement(inErrorRecovery) {
            return isDeclarationStart() || isStartOfStatement(inErrorRecovery);
        }
        function parseSourceElement() {
            return parseSourceElementOrModuleElement();
        }
        function parseModuleElement() {
            return parseSourceElementOrModuleElement();
        }
        function parseSourceElementOrModuleElement() {
            return isDeclarationStart() ? parseDeclaration() : parseStatement();
        }
        function processReferenceComments(sourceFile) {
            var triviaScanner = ts.createScanner(sourceFile.languageVersion, false, sourceText);
            var referencedFiles = [];
            var amdDependencies = [];
            var amdModuleName;
            while (true) {
                var kind = triviaScanner.scan();
                if (kind === 5 || kind === 4 || kind === 3) {
                    continue;
                }
                if (kind !== 2) {
                    break;
                }
                var range = { pos: triviaScanner.getTokenPos(), end: triviaScanner.getTextPos() };
                var comment = sourceText.substring(range.pos, range.end);
                var referencePathMatchResult = ts.getFileReferenceFromReferencePath(comment, range);
                if (referencePathMatchResult) {
                    var fileReference = referencePathMatchResult.fileReference;
                    sourceFile.hasNoDefaultLib = referencePathMatchResult.isNoDefaultLib;
                    var diagnosticMessage = referencePathMatchResult.diagnosticMessage;
                    if (fileReference) {
                        referencedFiles.push(fileReference);
                    }
                    if (diagnosticMessage) {
                        sourceFile.parseDiagnostics.push(ts.createFileDiagnostic(sourceFile, range.pos, range.end - range.pos, diagnosticMessage));
                    }
                }
                else {
                    var amdModuleNameRegEx = /^\/\/\/\s*<amd-module\s+name\s*=\s*('|")(.+?)\1/gim;
                    var amdModuleNameMatchResult = amdModuleNameRegEx.exec(comment);
                    if (amdModuleNameMatchResult) {
                        if (amdModuleName) {
                            sourceFile.parseDiagnostics.push(ts.createFileDiagnostic(sourceFile, range.pos, range.end - range.pos, ts.Diagnostics.An_AMD_module_cannot_have_multiple_name_assignments));
                        }
                        amdModuleName = amdModuleNameMatchResult[2];
                    }
                    var amdDependencyRegEx = /^\/\/\/\s*<amd-dependency\s/gim;
                    var pathRegex = /\spath\s*=\s*('|")(.+?)\1/gim;
                    var nameRegex = /\sname\s*=\s*('|")(.+?)\1/gim;
                    var amdDependencyMatchResult = amdDependencyRegEx.exec(comment);
                    if (amdDependencyMatchResult) {
                        var pathMatchResult = pathRegex.exec(comment);
                        var nameMatchResult = nameRegex.exec(comment);
                        if (pathMatchResult) {
                            var amdDependency = { path: pathMatchResult[2], name: nameMatchResult ? nameMatchResult[2] : undefined };
                            amdDependencies.push(amdDependency);
                        }
                    }
                }
            }
            sourceFile.referencedFiles = referencedFiles;
            sourceFile.amdDependencies = amdDependencies;
            sourceFile.amdModuleName = amdModuleName;
        }
        function setExternalModuleIndicator(sourceFile) {
            sourceFile.externalModuleIndicator = ts.forEach(sourceFile.statements, function (node) { return node.flags & 1 || node.kind === 197 && node.moduleReference.kind === 199 || node.kind === 198 ? node : undefined; });
        }
    }
    function isLeftHandSideExpression(expr) {
        if (expr) {
            switch (expr.kind) {
                case 149:
                case 150:
                case 152:
                case 151:
                case 153:
                case 147:
                case 155:
                case 148:
                case 156:
                case 64:
                case 9:
                case 7:
                case 8:
                case 10:
                case 165:
                case 79:
                case 88:
                case 92:
                case 94:
                case 90:
                    return true;
            }
        }
        return false;
    }
    ts.isLeftHandSideExpression = isLeftHandSideExpression;
    function isAssignmentOperator(token) {
        return token >= 52 && token <= 63;
    }
    ts.isAssignmentOperator = isAssignmentOperator;
})(ts || (ts = {}));
var ts;
(function (ts) {
    ts.bindTime = 0;
    function getModuleInstanceState(node) {
        if (node.kind === 192 || node.kind === 193) {
            return 0;
        }
        else if (ts.isConstEnumDeclaration(node)) {
            return 2;
        }
        else if (node.kind === 197 && !(node.flags & 1)) {
            return 0;
        }
        else if (node.kind === 196) {
            var state = 0;
            ts.forEachChild(node, function (n) {
                switch (getModuleInstanceState(n)) {
                    case 0:
                        return false;
                    case 2:
                        state = 2;
                        return false;
                    case 1:
                        state = 1;
                        return true;
                }
            });
            return state;
        }
        else if (node.kind === 195) {
            return getModuleInstanceState(node.body);
        }
        else {
            return 1;
        }
    }
    ts.getModuleInstanceState = getModuleInstanceState;
    function hasDynamicName(declaration) {
        return declaration.name && declaration.name.kind === 122;
    }
    ts.hasDynamicName = hasDynamicName;
    function bindSourceFile(file) {
        var start = new Date().getTime();
        bindSourceFileWorker(file);
        ts.bindTime += new Date().getTime() - start;
    }
    ts.bindSourceFile = bindSourceFile;
    function bindSourceFileWorker(file) {
        var parent;
        var container;
        var blockScopeContainer;
        var lastContainer;
        var symbolCount = 0;
        var Symbol = ts.objectAllocator.getSymbolConstructor();
        if (!file.locals) {
            file.locals = {};
            container = blockScopeContainer = file;
            bind(file);
            file.symbolCount = symbolCount;
        }
        function createSymbol(flags, name) {
            symbolCount++;
            return new Symbol(flags, name);
        }
        function addDeclarationToSymbol(symbol, node, symbolKind) {
            symbol.flags |= symbolKind;
            if (!symbol.declarations)
                symbol.declarations = [];
            symbol.declarations.push(node);
            if (symbolKind & 1952 && !symbol.exports)
                symbol.exports = {};
            if (symbolKind & 6240 && !symbol.members)
                symbol.members = {};
            node.symbol = symbol;
            if (symbolKind & 107455 && !symbol.valueDeclaration)
                symbol.valueDeclaration = node;
        }
        function getDeclarationName(node) {
            if (node.name) {
                if (node.kind === 195 && node.name.kind === 8) {
                    return '"' + node.name.text + '"';
                }
                ts.Debug.assert(!hasDynamicName(node));
                return node.name.text;
            }
            switch (node.kind) {
                case 137:
                case 129:
                    return "__constructor";
                case 136:
                case 132:
                    return "__call";
                case 133:
                    return "__new";
                case 134:
                    return "__index";
            }
        }
        function getDisplayName(node) {
            return node.name ? ts.declarationNameToString(node.name) : getDeclarationName(node);
        }
        function declareSymbol(symbols, parent, node, includes, excludes) {
            ts.Debug.assert(!hasDynamicName(node));
            var name = getDeclarationName(node);
            if (name !== undefined) {
                var symbol = ts.hasProperty(symbols, name) ? symbols[name] : (symbols[name] = createSymbol(0, name));
                if (symbol.flags & excludes) {
                    if (node.name) {
                        node.name.parent = node;
                    }
                    var message = symbol.flags & 2 ? ts.Diagnostics.Cannot_redeclare_block_scoped_variable_0 : ts.Diagnostics.Duplicate_identifier_0;
                    ts.forEach(symbol.declarations, function (declaration) {
                        file.bindDiagnostics.push(ts.createDiagnosticForNode(declaration.name, message, getDisplayName(declaration)));
                    });
                    file.bindDiagnostics.push(ts.createDiagnosticForNode(node.name, message, getDisplayName(node)));
                    symbol = createSymbol(0, name);
                }
            }
            else {
                symbol = createSymbol(0, "__missing");
            }
            addDeclarationToSymbol(symbol, node, includes);
            symbol.parent = parent;
            if (node.kind === 191 && symbol.exports) {
                var prototypeSymbol = createSymbol(4 | 134217728, "prototype");
                if (ts.hasProperty(symbol.exports, prototypeSymbol.name)) {
                    if (node.name) {
                        node.name.parent = node;
                    }
                    file.bindDiagnostics.push(ts.createDiagnosticForNode(symbol.exports[prototypeSymbol.name].declarations[0], ts.Diagnostics.Duplicate_identifier_0, prototypeSymbol.name));
                }
                symbol.exports[prototypeSymbol.name] = prototypeSymbol;
                prototypeSymbol.parent = symbol;
            }
            return symbol;
        }
        function isAmbientContext(node) {
            while (node) {
                if (node.flags & 2)
                    return true;
                node = node.parent;
            }
            return false;
        }
        function declareModuleMember(node, symbolKind, symbolExcludes) {
            var exportKind = 0;
            if (symbolKind & 107455) {
                exportKind |= 1048576;
            }
            if (symbolKind & 793056) {
                exportKind |= 2097152;
            }
            if (symbolKind & 1536) {
                exportKind |= 4194304;
            }
            if (ts.getCombinedNodeFlags(node) & 1 || (node.kind !== 197 && isAmbientContext(container))) {
                if (exportKind) {
                    var local = declareSymbol(container.locals, undefined, node, exportKind, symbolExcludes);
                    local.exportSymbol = declareSymbol(container.symbol.exports, container.symbol, node, symbolKind, symbolExcludes);
                    node.localSymbol = local;
                }
                else {
                    declareSymbol(container.symbol.exports, container.symbol, node, symbolKind, symbolExcludes);
                }
            }
            else {
                declareSymbol(container.locals, undefined, node, symbolKind, symbolExcludes);
            }
        }
        function bindChildren(node, symbolKind, isBlockScopeContainer) {
            if (symbolKind & 255504) {
                node.locals = {};
            }
            var saveParent = parent;
            var saveContainer = container;
            var savedBlockScopeContainer = blockScopeContainer;
            parent = node;
            if (symbolKind & 262128) {
                container = node;
                if (lastContainer) {
                    lastContainer.nextContainer = container;
                }
                lastContainer = container;
            }
            if (isBlockScopeContainer) {
                blockScopeContainer = node;
            }
            ts.forEachChild(node, bind);
            container = saveContainer;
            parent = saveParent;
            blockScopeContainer = savedBlockScopeContainer;
        }
        function bindDeclaration(node, symbolKind, symbolExcludes, isBlockScopeContainer) {
            switch (container.kind) {
                case 195:
                    declareModuleMember(node, symbolKind, symbolExcludes);
                    break;
                case 207:
                    if (ts.isExternalModule(container)) {
                        declareModuleMember(node, symbolKind, symbolExcludes);
                        break;
                    }
                case 136:
                case 137:
                case 132:
                case 133:
                case 134:
                case 128:
                case 127:
                case 129:
                case 130:
                case 131:
                case 190:
                case 156:
                case 157:
                    declareSymbol(container.locals, undefined, node, symbolKind, symbolExcludes);
                    break;
                case 191:
                    if (node.flags & 128) {
                        declareSymbol(container.symbol.exports, container.symbol, node, symbolKind, symbolExcludes);
                        break;
                    }
                case 139:
                case 148:
                case 192:
                    declareSymbol(container.symbol.members, container.symbol, node, symbolKind, symbolExcludes);
                    break;
                case 194:
                    declareSymbol(container.symbol.exports, container.symbol, node, symbolKind, symbolExcludes);
                    break;
            }
            bindChildren(node, symbolKind, isBlockScopeContainer);
        }
        function bindModuleDeclaration(node) {
            if (node.name.kind === 8) {
                bindDeclaration(node, 512, 106639, true);
            }
            else {
                var state = getModuleInstanceState(node);
                if (state === 0) {
                    bindDeclaration(node, 1024, 0, true);
                }
                else {
                    bindDeclaration(node, 512, 106639, true);
                    if (state === 2) {
                        node.symbol.constEnumOnlyModule = true;
                    }
                    else if (node.symbol.constEnumOnlyModule) {
                        node.symbol.constEnumOnlyModule = false;
                    }
                }
            }
        }
        function bindFunctionOrConstructorType(node) {
            var symbol = createSymbol(131072, getDeclarationName(node));
            addDeclarationToSymbol(symbol, node, 131072);
            bindChildren(node, 131072, false);
            var typeLiteralSymbol = createSymbol(2048, "__type");
            addDeclarationToSymbol(typeLiteralSymbol, node, 2048);
            typeLiteralSymbol.members = {};
            typeLiteralSymbol.members[node.kind === 136 ? "__call" : "__new"] = symbol;
        }
        function bindAnonymousDeclaration(node, symbolKind, name, isBlockScopeContainer) {
            var symbol = createSymbol(symbolKind, name);
            addDeclarationToSymbol(symbol, node, symbolKind);
            bindChildren(node, symbolKind, isBlockScopeContainer);
        }
        function bindCatchVariableDeclaration(node) {
            var symbol = createSymbol(1, node.name.text || "__missing");
            addDeclarationToSymbol(symbol, node, 1);
            var saveParent = parent;
            var savedBlockScopeContainer = blockScopeContainer;
            parent = blockScopeContainer = node;
            ts.forEachChild(node, bind);
            parent = saveParent;
            blockScopeContainer = savedBlockScopeContainer;
        }
        function bindBlockScopedVariableDeclaration(node) {
            switch (blockScopeContainer.kind) {
                case 195:
                    declareModuleMember(node, 2, 107455);
                    break;
                case 207:
                    if (ts.isExternalModule(container)) {
                        declareModuleMember(node, 2, 107455);
                        break;
                    }
                default:
                    if (!blockScopeContainer.locals) {
                        blockScopeContainer.locals = {};
                    }
                    declareSymbol(blockScopeContainer.locals, undefined, node, 2, 107455);
            }
            bindChildren(node, 2, false);
        }
        function getDestructuringParameterName(node) {
            return "__" + ts.indexOf(node.parent.parameters, node);
        }
        function bind(node) {
            node.parent = parent;
            switch (node.kind) {
                case 123:
                    bindDeclaration(node, 262144, 530912, false);
                    break;
                case 124:
                    bindParameter(node);
                    break;
                case 188:
                case 146:
                    if (ts.isBindingPattern(node.name)) {
                        bindChildren(node, 0, false);
                    }
                    else if (ts.getCombinedNodeFlags(node) & 6144) {
                        bindBlockScopedVariableDeclaration(node);
                    }
                    else {
                        bindDeclaration(node, 1, 107454, false);
                    }
                    break;
                case 126:
                case 125:
                    bindPropertyOrMethodOrAccessor(node, 4 | (node.questionToken ? 536870912 : 0), 107455, false);
                    break;
                case 204:
                case 205:
                    bindPropertyOrMethodOrAccessor(node, 4, 107455, false);
                    break;
                case 206:
                    bindPropertyOrMethodOrAccessor(node, 8, 107455, false);
                    break;
                case 132:
                case 133:
                case 134:
                    bindDeclaration(node, 131072, 0, false);
                    break;
                case 128:
                case 127:
                    bindPropertyOrMethodOrAccessor(node, 8192 | (node.questionToken ? 536870912 : 0), ts.isObjectLiteralMethod(node) ? 107455 : 99263, true);
                    break;
                case 190:
                    bindDeclaration(node, 16, 106927, true);
                    break;
                case 129:
                    bindDeclaration(node, 16384, 0, true);
                    break;
                case 130:
                    bindPropertyOrMethodOrAccessor(node, 32768, 41919, true);
                    break;
                case 131:
                    bindPropertyOrMethodOrAccessor(node, 65536, 74687, true);
                    break;
                case 136:
                case 137:
                    bindFunctionOrConstructorType(node);
                    break;
                case 139:
                    bindAnonymousDeclaration(node, 2048, "__type", false);
                    break;
                case 148:
                    bindAnonymousDeclaration(node, 4096, "__object", false);
                    break;
                case 156:
                case 157:
                    bindAnonymousDeclaration(node, 16, "__function", true);
                    break;
                case 203:
                    bindCatchVariableDeclaration(node);
                    break;
                case 191:
                    bindDeclaration(node, 32, 899583, false);
                    break;
                case 192:
                    bindDeclaration(node, 64, 792992, false);
                    break;
                case 193:
                    bindDeclaration(node, 524288, 793056, false);
                    break;
                case 194:
                    if (ts.isConst(node)) {
                        bindDeclaration(node, 128, 899967, false);
                    }
                    else {
                        bindDeclaration(node, 256, 899327, false);
                    }
                    break;
                case 195:
                    bindModuleDeclaration(node);
                    break;
                case 197:
                    bindDeclaration(node, 8388608, 8388608, false);
                    break;
                case 207:
                    if (ts.isExternalModule(node)) {
                        bindAnonymousDeclaration(node, 512, '"' + ts.removeFileExtension(node.fileName) + '"', true);
                        break;
                    }
                case 170:
                case 203:
                case 177:
                case 178:
                case 183:
                    bindChildren(node, 0, true);
                    break;
                default:
                    var saveParent = parent;
                    parent = node;
                    ts.forEachChild(node, bind);
                    parent = saveParent;
            }
        }
        function bindParameter(node) {
            if (ts.isBindingPattern(node.name)) {
                bindAnonymousDeclaration(node, 1, getDestructuringParameterName(node), false);
            }
            else {
                bindDeclaration(node, 1, 107455, false);
            }
            if (node.flags & 112 && node.parent.kind === 129 && node.parent.parent.kind === 191) {
                var classDeclaration = node.parent.parent;
                declareSymbol(classDeclaration.symbol.members, classDeclaration.symbol, node, 4, 107455);
            }
        }
        function bindPropertyOrMethodOrAccessor(node, symbolKind, symbolExcludes, isBlockScopeContainer) {
            if (hasDynamicName(node)) {
                bindAnonymousDeclaration(node, symbolKind, "__computed", isBlockScopeContainer);
            }
            else {
                bindDeclaration(node, symbolKind, symbolExcludes, isBlockScopeContainer);
            }
        }
    }
})(ts || (ts = {}));
var ts;
(function (ts) {
    var nextSymbolId = 1;
    var nextNodeId = 1;
    var nextMergeId = 1;
    ts.checkTime = 0;
    function createTypeChecker(host, produceDiagnostics) {
        var Symbol = ts.objectAllocator.getSymbolConstructor();
        var Type = ts.objectAllocator.getTypeConstructor();
        var Signature = ts.objectAllocator.getSignatureConstructor();
        var typeCount = 0;
        var emptyArray = [];
        var emptySymbols = {};
        var compilerOptions = host.getCompilerOptions();
        var languageVersion = compilerOptions.target || 0;
        var emitResolver = createResolver();
        var checker = {
            getNodeCount: function () { return ts.sum(host.getSourceFiles(), "nodeCount"); },
            getIdentifierCount: function () { return ts.sum(host.getSourceFiles(), "identifierCount"); },
            getSymbolCount: function () { return ts.sum(host.getSourceFiles(), "symbolCount"); },
            getTypeCount: function () { return typeCount; },
            isUndefinedSymbol: function (symbol) { return symbol === undefinedSymbol; },
            isArgumentsSymbol: function (symbol) { return symbol === argumentsSymbol; },
            getDiagnostics: getDiagnostics,
            getGlobalDiagnostics: getGlobalDiagnostics,
            getTypeOfSymbolAtLocation: getTypeOfSymbolAtLocation,
            getDeclaredTypeOfSymbol: getDeclaredTypeOfSymbol,
            getPropertiesOfType: getPropertiesOfType,
            getPropertyOfType: getPropertyOfType,
            getSignaturesOfType: getSignaturesOfType,
            getIndexTypeOfType: getIndexTypeOfType,
            getReturnTypeOfSignature: getReturnTypeOfSignature,
            getSymbolsInScope: getSymbolsInScope,
            getSymbolAtLocation: getSymbolAtLocation,
            getShorthandAssignmentValueSymbol: getShorthandAssignmentValueSymbol,
            getTypeAtLocation: getTypeAtLocation,
            typeToString: typeToString,
            getSymbolDisplayBuilder: getSymbolDisplayBuilder,
            symbolToString: symbolToString,
            getAugmentedPropertiesOfType: getAugmentedPropertiesOfType,
            getRootSymbols: getRootSymbols,
            getContextualType: getContextualType,
            getFullyQualifiedName: getFullyQualifiedName,
            getResolvedSignature: getResolvedSignature,
            getConstantValue: getConstantValue,
            isValidPropertyAccess: isValidPropertyAccess,
            getSignatureFromDeclaration: getSignatureFromDeclaration,
            isImplementationOfOverload: isImplementationOfOverload,
            getAliasedSymbol: resolveImport,
            getEmitResolver: getEmitResolver
        };
        var undefinedSymbol = createSymbol(4 | 67108864, "undefined");
        var argumentsSymbol = createSymbol(4 | 67108864, "arguments");
        var unknownSymbol = createSymbol(4 | 67108864, "unknown");
        var resolvingSymbol = createSymbol(67108864, "__resolving__");
        var anyType = createIntrinsicType(1, "any");
        var stringType = createIntrinsicType(2, "string");
        var numberType = createIntrinsicType(4, "number");
        var booleanType = createIntrinsicType(8, "boolean");
        var voidType = createIntrinsicType(16, "void");
        var undefinedType = createIntrinsicType(32 | 262144, "undefined");
        var nullType = createIntrinsicType(64 | 262144, "null");
        var unknownType = createIntrinsicType(1, "unknown");
        var resolvingType = createIntrinsicType(1, "__resolving__");
        var emptyObjectType = createAnonymousType(undefined, emptySymbols, emptyArray, emptyArray, undefined, undefined);
        var anyFunctionType = createAnonymousType(undefined, emptySymbols, emptyArray, emptyArray, undefined, undefined);
        var noConstraintType = createAnonymousType(undefined, emptySymbols, emptyArray, emptyArray, undefined, undefined);
        var inferenceFailureType = createAnonymousType(undefined, emptySymbols, emptyArray, emptyArray, undefined, undefined);
        var anySignature = createSignature(undefined, undefined, emptyArray, anyType, 0, false, false);
        var unknownSignature = createSignature(undefined, undefined, emptyArray, unknownType, 0, false, false);
        var globals = {};
        var globalArraySymbol;
        var globalObjectType;
        var globalFunctionType;
        var globalArrayType;
        var globalStringType;
        var globalNumberType;
        var globalBooleanType;
        var globalRegExpType;
        var globalTemplateStringsArrayType;
        var anyArrayType;
        var tupleTypes = {};
        var unionTypes = {};
        var stringLiteralTypes = {};
        var emitExtends = false;
        var mergedSymbols = [];
        var symbolLinks = [];
        var nodeLinks = [];
        var potentialThisCollisions = [];
        var diagnostics = ts.createDiagnosticCollection();
        var primitiveTypeInfo = {
            "string": {
                type: stringType,
                flags: 258
            },
            "number": {
                type: numberType,
                flags: 132
            },
            "boolean": {
                type: booleanType,
                flags: 8
            }
        };
        function getEmitResolver(sourceFile) {
            getDiagnostics(sourceFile);
            return emitResolver;
        }
        function error(location, message, arg0, arg1, arg2) {
            var diagnostic = location ? ts.createDiagnosticForNode(location, message, arg0, arg1, arg2) : ts.createCompilerDiagnostic(message, arg0, arg1, arg2);
            diagnostics.add(diagnostic);
        }
        function createSymbol(flags, name) {
            return new Symbol(flags, name);
        }
        function getExcludedSymbolFlags(flags) {
            var result = 0;
            if (flags & 2)
                result |= 107455;
            if (flags & 1)
                result |= 107454;
            if (flags & 4)
                result |= 107455;
            if (flags & 8)
                result |= 107455;
            if (flags & 16)
                result |= 106927;
            if (flags & 32)
                result |= 899583;
            if (flags & 64)
                result |= 792992;
            if (flags & 256)
                result |= 899327;
            if (flags & 128)
                result |= 899967;
            if (flags & 512)
                result |= 106639;
            if (flags & 8192)
                result |= 99263;
            if (flags & 32768)
                result |= 41919;
            if (flags & 65536)
                result |= 74687;
            if (flags & 262144)
                result |= 530912;
            if (flags & 524288)
                result |= 793056;
            if (flags & 8388608)
                result |= 8388608;
            return result;
        }
        function recordMergedSymbol(target, source) {
            if (!source.mergeId)
                source.mergeId = nextMergeId++;
            mergedSymbols[source.mergeId] = target;
        }
        function cloneSymbol(symbol) {
            var result = createSymbol(symbol.flags | 33554432, symbol.name);
            result.declarations = symbol.declarations.slice(0);
            result.parent = symbol.parent;
            if (symbol.valueDeclaration)
                result.valueDeclaration = symbol.valueDeclaration;
            if (symbol.constEnumOnlyModule)
                result.constEnumOnlyModule = true;
            if (symbol.members)
                result.members = cloneSymbolTable(symbol.members);
            if (symbol.exports)
                result.exports = cloneSymbolTable(symbol.exports);
            recordMergedSymbol(result, symbol);
            return result;
        }
        function extendSymbol(target, source) {
            if (!(target.flags & getExcludedSymbolFlags(source.flags))) {
                if (source.flags & 512 && target.flags & 512 && target.constEnumOnlyModule && !source.constEnumOnlyModule) {
                    target.constEnumOnlyModule = false;
                }
                target.flags |= source.flags;
                if (!target.valueDeclaration && source.valueDeclaration)
                    target.valueDeclaration = source.valueDeclaration;
                ts.forEach(source.declarations, function (node) {
                    target.declarations.push(node);
                });
                if (source.members) {
                    if (!target.members)
                        target.members = {};
                    extendSymbolTable(target.members, source.members);
                }
                if (source.exports) {
                    if (!target.exports)
                        target.exports = {};
                    extendSymbolTable(target.exports, source.exports);
                }
                recordMergedSymbol(target, source);
            }
            else {
                var message = target.flags & 2 || source.flags & 2 ? ts.Diagnostics.Cannot_redeclare_block_scoped_variable_0 : ts.Diagnostics.Duplicate_identifier_0;
                ts.forEach(source.declarations, function (node) {
                    error(node.name ? node.name : node, message, symbolToString(source));
                });
                ts.forEach(target.declarations, function (node) {
                    error(node.name ? node.name : node, message, symbolToString(source));
                });
            }
        }
        function cloneSymbolTable(symbolTable) {
            var result = {};
            for (var id in symbolTable) {
                if (ts.hasProperty(symbolTable, id)) {
                    result[id] = symbolTable[id];
                }
            }
            return result;
        }
        function extendSymbolTable(target, source) {
            for (var id in source) {
                if (ts.hasProperty(source, id)) {
                    if (!ts.hasProperty(target, id)) {
                        target[id] = source[id];
                    }
                    else {
                        var symbol = target[id];
                        if (!(symbol.flags & 33554432)) {
                            target[id] = symbol = cloneSymbol(symbol);
                        }
                        extendSymbol(symbol, source[id]);
                    }
                }
            }
        }
        function getSymbolLinks(symbol) {
            if (symbol.flags & 67108864)
                return symbol;
            if (!symbol.id)
                symbol.id = nextSymbolId++;
            return symbolLinks[symbol.id] || (symbolLinks[symbol.id] = {});
        }
        function getNodeLinks(node) {
            if (!node.id)
                node.id = nextNodeId++;
            return nodeLinks[node.id] || (nodeLinks[node.id] = {});
        }
        function getSourceFile(node) {
            return ts.getAncestor(node, 207);
        }
        function isGlobalSourceFile(node) {
            return node.kind === 207 && !ts.isExternalModule(node);
        }
        function getSymbol(symbols, name, meaning) {
            if (meaning && ts.hasProperty(symbols, name)) {
                var symbol = symbols[name];
                ts.Debug.assert((symbol.flags & 16777216) === 0, "Should never get an instantiated symbol here.");
                if (symbol.flags & meaning) {
                    return symbol;
                }
                if (symbol.flags & 8388608) {
                    var target = resolveImport(symbol);
                    if (target === unknownSymbol || target.flags & meaning) {
                        return symbol;
                    }
                }
            }
        }
        function isDefinedBefore(node1, node2) {
            var file1 = ts.getSourceFileOfNode(node1);
            var file2 = ts.getSourceFileOfNode(node2);
            if (file1 === file2) {
                return node1.pos <= node2.pos;
            }
            if (!compilerOptions.out) {
                return true;
            }
            var sourceFiles = host.getSourceFiles();
            return sourceFiles.indexOf(file1) <= sourceFiles.indexOf(file2);
        }
        function resolveName(location, name, meaning, nameNotFoundMessage, nameArg) {
            var result;
            var lastLocation;
            var propertyWithInvalidInitializer;
            var errorLocation = location;
            loop: while (location) {
                if (location.locals && !isGlobalSourceFile(location)) {
                    if (result = getSymbol(location.locals, name, meaning)) {
                        break loop;
                    }
                }
                switch (location.kind) {
                    case 207:
                        if (!ts.isExternalModule(location))
                            break;
                    case 195:
                        if (result = getSymbol(getSymbolOfNode(location).exports, name, meaning & 8914931)) {
                            break loop;
                        }
                        break;
                    case 194:
                        if (result = getSymbol(getSymbolOfNode(location).exports, name, meaning & 8)) {
                            break loop;
                        }
                        break;
                    case 126:
                    case 125:
                        if (location.parent.kind === 191 && !(location.flags & 128)) {
                            var ctor = findConstructorDeclaration(location.parent);
                            if (ctor && ctor.locals) {
                                if (getSymbol(ctor.locals, name, meaning & 107455)) {
                                    propertyWithInvalidInitializer = location;
                                }
                            }
                        }
                        break;
                    case 191:
                    case 192:
                        if (result = getSymbol(getSymbolOfNode(location).members, name, meaning & 793056)) {
                            if (lastLocation && lastLocation.flags & 128) {
                                error(errorLocation, ts.Diagnostics.Static_members_cannot_reference_class_type_parameters);
                                return undefined;
                            }
                            break loop;
                        }
                        break;
                    case 122:
                        var grandparent = location.parent.parent;
                        if (grandparent.kind === 191 || grandparent.kind === 192) {
                            if (result = getSymbol(getSymbolOfNode(grandparent).members, name, meaning & 793056)) {
                                error(errorLocation, ts.Diagnostics.A_computed_property_name_cannot_reference_a_type_parameter_from_its_containing_type);
                                return undefined;
                            }
                        }
                        break;
                    case 128:
                    case 127:
                    case 129:
                    case 130:
                    case 131:
                    case 190:
                    case 157:
                        if (name === "arguments") {
                            result = argumentsSymbol;
                            break loop;
                        }
                        break;
                    case 156:
                        if (name === "arguments") {
                            result = argumentsSymbol;
                            break loop;
                        }
                        var id = location.name;
                        if (id && name === id.text) {
                            result = location.symbol;
                            break loop;
                        }
                        break;
                    case 203:
                        var id = location.name;
                        if (name === id.text) {
                            result = location.symbol;
                            break loop;
                        }
                        break;
                }
                lastLocation = location;
                location = location.parent;
            }
            if (!result) {
                result = getSymbol(globals, name, meaning);
            }
            if (!result) {
                if (nameNotFoundMessage) {
                    error(errorLocation, nameNotFoundMessage, typeof nameArg === "string" ? nameArg : ts.declarationNameToString(nameArg));
                }
                return undefined;
            }
            if (nameNotFoundMessage) {
                if (propertyWithInvalidInitializer) {
                    var propertyName = propertyWithInvalidInitializer.name;
                    error(errorLocation, ts.Diagnostics.Initializer_of_instance_member_variable_0_cannot_reference_identifier_1_declared_in_the_constructor, ts.declarationNameToString(propertyName), typeof nameArg === "string" ? nameArg : ts.declarationNameToString(nameArg));
                    return undefined;
                }
                if (result.flags & 2) {
                    var declaration = ts.forEach(result.declarations, function (d) { return ts.getCombinedNodeFlags(d) & 6144 ? d : undefined; });
                    ts.Debug.assert(declaration !== undefined, "Block-scoped variable declaration is undefined");
                    if (!isDefinedBefore(declaration, errorLocation)) {
                        error(errorLocation, ts.Diagnostics.Block_scoped_variable_0_used_before_its_declaration, ts.declarationNameToString(declaration.name));
                    }
                }
            }
            return result;
        }
        function resolveImport(symbol) {
            ts.Debug.assert((symbol.flags & 8388608) !== 0, "Should only get Imports here.");
            var links = getSymbolLinks(symbol);
            if (!links.target) {
                links.target = resolvingSymbol;
                var node = ts.getDeclarationOfKind(symbol, 197);
                if (node.moduleReference.kind === 199) {
                    if (node.moduleReference.expression.kind !== 8) {
                        grammarErrorOnNode(node.moduleReference.expression, ts.Diagnostics.String_literal_expected);
                    }
                }
                var target = node.moduleReference.kind === 199 ? resolveExternalModuleName(node, ts.getExternalModuleImportDeclarationExpression(node)) : getSymbolOfPartOfRightHandSideOfImport(node.moduleReference, node);
                if (links.target === resolvingSymbol) {
                    links.target = target || unknownSymbol;
                }
                else {
                    error(node, ts.Diagnostics.Circular_definition_of_import_alias_0, symbolToString(symbol));
                }
            }
            else if (links.target === resolvingSymbol) {
                links.target = unknownSymbol;
            }
            return links.target;
        }
        function getSymbolOfPartOfRightHandSideOfImport(entityName, importDeclaration) {
            if (!importDeclaration) {
                importDeclaration = ts.getAncestor(entityName, 197);
                ts.Debug.assert(importDeclaration !== undefined);
            }
            if (entityName.kind === 64 && isRightSideOfQualifiedNameOrPropertyAccess(entityName)) {
                entityName = entityName.parent;
            }
            if (entityName.kind === 64 || entityName.parent.kind === 121) {
                return resolveEntityName(importDeclaration, entityName, 1536);
            }
            else {
                ts.Debug.assert(entityName.parent.kind === 197);
                return resolveEntityName(importDeclaration, entityName, 107455 | 793056 | 1536);
            }
        }
        function getFullyQualifiedName(symbol) {
            return symbol.parent ? getFullyQualifiedName(symbol.parent) + "." + symbolToString(symbol) : symbolToString(symbol);
        }
        function resolveEntityName(location, name, meaning) {
            if (ts.getFullWidth(name) === 0) {
                return undefined;
            }
            if (name.kind === 64) {
                var symbol = resolveName(location, name.text, meaning, ts.Diagnostics.Cannot_find_name_0, name);
                if (!symbol) {
                    return;
                }
            }
            else if (name.kind === 121) {
                var namespace = resolveEntityName(location, name.left, 1536);
                if (!namespace || namespace === unknownSymbol || ts.getFullWidth(name.right) === 0)
                    return;
                var symbol = getSymbol(namespace.exports, name.right.text, meaning);
                if (!symbol) {
                    error(location, ts.Diagnostics.Module_0_has_no_exported_member_1, getFullyQualifiedName(namespace), ts.declarationNameToString(name.right));
                    return;
                }
            }
            ts.Debug.assert((symbol.flags & 16777216) === 0, "Should never get an instantiated symbol here.");
            return symbol.flags & meaning ? symbol : resolveImport(symbol);
        }
        function isExternalModuleNameRelative(moduleName) {
            return moduleName.substr(0, 2) === "./" || moduleName.substr(0, 3) === "../" || moduleName.substr(0, 2) === ".\\" || moduleName.substr(0, 3) === "..\\";
        }
        function resolveExternalModuleName(location, moduleReferenceExpression) {
            if (moduleReferenceExpression.kind !== 8) {
                return;
            }
            var moduleReferenceLiteral = moduleReferenceExpression;
            var searchPath = ts.getDirectoryPath(getSourceFile(location).fileName);
            var moduleName = ts.escapeIdentifier(moduleReferenceLiteral.text);
            if (!moduleName)
                return;
            var isRelative = isExternalModuleNameRelative(moduleName);
            if (!isRelative) {
                var symbol = getSymbol(globals, '"' + moduleName + '"', 512);
                if (symbol) {
                    return getResolvedExportSymbol(symbol);
                }
            }
            while (true) {
                var fileName = ts.normalizePath(ts.combinePaths(searchPath, moduleName));
                var sourceFile = host.getSourceFile(fileName + ".ts") || host.getSourceFile(fileName + ".d.ts");
                if (sourceFile || isRelative)
                    break;
                var parentPath = ts.getDirectoryPath(searchPath);
                if (parentPath === searchPath)
                    break;
                searchPath = parentPath;
            }
            if (sourceFile) {
                if (sourceFile.symbol) {
                    return getResolvedExportSymbol(sourceFile.symbol);
                }
                error(moduleReferenceLiteral, ts.Diagnostics.File_0_is_not_an_external_module, sourceFile.fileName);
                return;
            }
            error(moduleReferenceLiteral, ts.Diagnostics.Cannot_find_external_module_0, moduleName);
        }
        function getResolvedExportSymbol(moduleSymbol) {
            var symbol = getExportAssignmentSymbol(moduleSymbol);
            if (symbol) {
                if (symbol.flags & (107455 | 793056 | 1536)) {
                    return symbol;
                }
                if (symbol.flags & 8388608) {
                    return resolveImport(symbol);
                }
            }
            return moduleSymbol;
        }
        function getExportAssignmentSymbol(symbol) {
            checkTypeOfExportAssignmentSymbol(symbol);
            var symbolLinks = getSymbolLinks(symbol);
            return symbolLinks.exportAssignSymbol === unknownSymbol ? undefined : symbolLinks.exportAssignSymbol;
        }
        function checkTypeOfExportAssignmentSymbol(containerSymbol) {
            var symbolLinks = getSymbolLinks(containerSymbol);
            if (!symbolLinks.exportAssignSymbol) {
                var exportInformation = collectExportInformationForSourceFileOrModule(containerSymbol);
                if (exportInformation.exportAssignments.length) {
                    if (exportInformation.exportAssignments.length > 1) {
                        ts.forEach(exportInformation.exportAssignments, function (node) { return error(node, ts.Diagnostics.A_module_cannot_have_more_than_one_export_assignment); });
                    }
                    var node = exportInformation.exportAssignments[0];
                    if (exportInformation.hasExportedMember) {
                        error(node, ts.Diagnostics.An_export_assignment_cannot_be_used_in_a_module_with_other_exported_elements);
                    }
                    if (node.exportName.text) {
                        var meaning = 107455 | 793056 | 1536;
                        var exportSymbol = resolveName(node, node.exportName.text, meaning, ts.Diagnostics.Cannot_find_name_0, node.exportName);
                    }
                }
                symbolLinks.exportAssignSymbol = exportSymbol || unknownSymbol;
            }
        }
        function collectExportInformationForSourceFileOrModule(symbol) {
            var seenExportedMember = false;
            var result = [];
            ts.forEach(symbol.declarations, function (declaration) {
                var block = (declaration.kind === 207 ? declaration : declaration.body);
                ts.forEach(block.statements, function (node) {
                    if (node.kind === 198) {
                        result.push(node);
                    }
                    else {
                        seenExportedMember = seenExportedMember || (node.flags & 1) !== 0;
                    }
                });
            });
            return {
                hasExportedMember: seenExportedMember,
                exportAssignments: result
            };
        }
        function getMergedSymbol(symbol) {
            var merged;
            return symbol && symbol.mergeId && (merged = mergedSymbols[symbol.mergeId]) ? merged : symbol;
        }
        function getSymbolOfNode(node) {
            return getMergedSymbol(node.symbol);
        }
        function getParentOfSymbol(symbol) {
            return getMergedSymbol(symbol.parent);
        }
        function getExportSymbolOfValueSymbolIfExported(symbol) {
            return symbol && (symbol.flags & 1048576) !== 0 ? getMergedSymbol(symbol.exportSymbol) : symbol;
        }
        function symbolIsValue(symbol) {
            if (symbol.flags & 16777216) {
                return symbolIsValue(getSymbolLinks(symbol).target);
            }
            if (symbol.flags & 107455) {
                return true;
            }
            if (symbol.flags & 8388608) {
                return (resolveImport(symbol).flags & 107455) !== 0;
            }
            return false;
        }
        function findConstructorDeclaration(node) {
            var members = node.members;
            for (var i = 0; i < members.length; i++) {
                var member = members[i];
                if (member.kind === 129 && ts.nodeIsPresent(member.body)) {
                    return member;
                }
            }
        }
        function createType(flags) {
            var result = new Type(checker, flags);
            result.id = typeCount++;
            return result;
        }
        function createIntrinsicType(kind, intrinsicName) {
            var type = createType(kind);
            type.intrinsicName = intrinsicName;
            return type;
        }
        function createObjectType(kind, symbol) {
            var type = createType(kind);
            type.symbol = symbol;
            return type;
        }
        function isReservedMemberName(name) {
            return name.charCodeAt(0) === 95 && name.charCodeAt(1) === 95 && name.charCodeAt(2) !== 95;
        }
        function getNamedMembers(members) {
            var result;
            for (var id in members) {
                if (ts.hasProperty(members, id)) {
                    if (!isReservedMemberName(id)) {
                        if (!result)
                            result = [];
                        var symbol = members[id];
                        if (symbolIsValue(symbol)) {
                            result.push(symbol);
                        }
                    }
                }
            }
            return result || emptyArray;
        }
        function setObjectTypeMembers(type, members, callSignatures, constructSignatures, stringIndexType, numberIndexType) {
            type.members = members;
            type.properties = getNamedMembers(members);
            type.callSignatures = callSignatures;
            type.constructSignatures = constructSignatures;
            if (stringIndexType)
                type.stringIndexType = stringIndexType;
            if (numberIndexType)
                type.numberIndexType = numberIndexType;
            return type;
        }
        function createAnonymousType(symbol, members, callSignatures, constructSignatures, stringIndexType, numberIndexType) {
            return setObjectTypeMembers(createObjectType(32768, symbol), members, callSignatures, constructSignatures, stringIndexType, numberIndexType);
        }
        function forEachSymbolTableInScope(enclosingDeclaration, callback) {
            var result;
            for (var location = enclosingDeclaration; location; location = location.parent) {
                if (location.locals && !isGlobalSourceFile(location)) {
                    if (result = callback(location.locals)) {
                        return result;
                    }
                }
                switch (location.kind) {
                    case 207:
                        if (!ts.isExternalModule(location)) {
                            break;
                        }
                    case 195:
                        if (result = callback(getSymbolOfNode(location).exports)) {
                            return result;
                        }
                        break;
                    case 191:
                    case 192:
                        if (result = callback(getSymbolOfNode(location).members)) {
                            return result;
                        }
                        break;
                }
            }
            return callback(globals);
        }
        function getQualifiedLeftMeaning(rightMeaning) {
            return rightMeaning === 107455 ? 107455 : 1536;
        }
        function getAccessibleSymbolChain(symbol, enclosingDeclaration, meaning, useOnlyExternalAliasing) {
            function getAccessibleSymbolChainFromSymbolTable(symbols) {
                function canQualifySymbol(symbolFromSymbolTable, meaning) {
                    if (!needsQualification(symbolFromSymbolTable, enclosingDeclaration, meaning)) {
                        return true;
                    }
                    var accessibleParent = getAccessibleSymbolChain(symbolFromSymbolTable.parent, enclosingDeclaration, getQualifiedLeftMeaning(meaning), useOnlyExternalAliasing);
                    return !!accessibleParent;
                }
                function isAccessible(symbolFromSymbolTable, resolvedAliasSymbol) {
                    if (symbol === (resolvedAliasSymbol || symbolFromSymbolTable)) {
                        return !ts.forEach(symbolFromSymbolTable.declarations, hasExternalModuleSymbol) && canQualifySymbol(symbolFromSymbolTable, meaning);
                    }
                }
                if (isAccessible(ts.lookUp(symbols, symbol.name))) {
                    return [symbol];
                }
                return ts.forEachValue(symbols, function (symbolFromSymbolTable) {
                    if (symbolFromSymbolTable.flags & 8388608) {
                        if (!useOnlyExternalAliasing || ts.forEach(symbolFromSymbolTable.declarations, ts.isExternalModuleImportDeclaration)) {
                            var resolvedImportedSymbol = resolveImport(symbolFromSymbolTable);
                            if (isAccessible(symbolFromSymbolTable, resolveImport(symbolFromSymbolTable))) {
                                return [symbolFromSymbolTable];
                            }
                            var accessibleSymbolsFromExports = resolvedImportedSymbol.exports ? getAccessibleSymbolChainFromSymbolTable(resolvedImportedSymbol.exports) : undefined;
                            if (accessibleSymbolsFromExports && canQualifySymbol(symbolFromSymbolTable, getQualifiedLeftMeaning(meaning))) {
                                return [symbolFromSymbolTable].concat(accessibleSymbolsFromExports);
                            }
                        }
                    }
                });
            }
            if (symbol) {
                return forEachSymbolTableInScope(enclosingDeclaration, getAccessibleSymbolChainFromSymbolTable);
            }
        }
        function needsQualification(symbol, enclosingDeclaration, meaning) {
            var qualify = false;
            forEachSymbolTableInScope(enclosingDeclaration, function (symbolTable) {
                if (!ts.hasProperty(symbolTable, symbol.name)) {
                    return false;
                }
                var symbolFromSymbolTable = symbolTable[symbol.name];
                if (symbolFromSymbolTable === symbol) {
                    return true;
                }
                symbolFromSymbolTable = (symbolFromSymbolTable.flags & 8388608) ? resolveImport(symbolFromSymbolTable) : symbolFromSymbolTable;
                if (symbolFromSymbolTable.flags & meaning) {
                    qualify = true;
                    return true;
                }
                return false;
            });
            return qualify;
        }
        function isSymbolAccessible(symbol, enclosingDeclaration, meaning) {
            if (symbol && enclosingDeclaration && !(symbol.flags & 262144)) {
                var initialSymbol = symbol;
                var meaningToLook = meaning;
                while (symbol) {
                    var accessibleSymbolChain = getAccessibleSymbolChain(symbol, enclosingDeclaration, meaningToLook, false);
                    if (accessibleSymbolChain) {
                        var hasAccessibleDeclarations = hasVisibleDeclarations(accessibleSymbolChain[0]);
                        if (!hasAccessibleDeclarations) {
                            return {
                                accessibility: 1,
                                errorSymbolName: symbolToString(initialSymbol, enclosingDeclaration, meaning),
                                errorModuleName: symbol !== initialSymbol ? symbolToString(symbol, enclosingDeclaration, 1536) : undefined
                            };
                        }
                        return hasAccessibleDeclarations;
                    }
                    meaningToLook = getQualifiedLeftMeaning(meaning);
                    symbol = getParentOfSymbol(symbol);
                }
                var symbolExternalModule = ts.forEach(initialSymbol.declarations, getExternalModuleContainer);
                if (symbolExternalModule) {
                    var enclosingExternalModule = getExternalModuleContainer(enclosingDeclaration);
                    if (symbolExternalModule !== enclosingExternalModule) {
                        return {
                            accessibility: 2,
                            errorSymbolName: symbolToString(initialSymbol, enclosingDeclaration, meaning),
                            errorModuleName: symbolToString(symbolExternalModule)
                        };
                    }
                }
                return {
                    accessibility: 1,
                    errorSymbolName: symbolToString(initialSymbol, enclosingDeclaration, meaning)
                };
            }
            return { accessibility: 0 };
            function getExternalModuleContainer(declaration) {
                for (; declaration; declaration = declaration.parent) {
                    if (hasExternalModuleSymbol(declaration)) {
                        return getSymbolOfNode(declaration);
                    }
                }
            }
        }
        function hasExternalModuleSymbol(declaration) {
            return (declaration.kind === 195 && declaration.name.kind === 8) || (declaration.kind === 207 && ts.isExternalModule(declaration));
        }
        function hasVisibleDeclarations(symbol) {
            var aliasesToMakeVisible;
            if (ts.forEach(symbol.declarations, function (declaration) { return !getIsDeclarationVisible(declaration); })) {
                return undefined;
            }
            return { accessibility: 0, aliasesToMakeVisible: aliasesToMakeVisible };
            function getIsDeclarationVisible(declaration) {
                if (!isDeclarationVisible(declaration)) {
                    if (declaration.kind === 197 && !(declaration.flags & 1) && isDeclarationVisible(declaration.parent)) {
                        getNodeLinks(declaration).isVisible = true;
                        if (aliasesToMakeVisible) {
                            if (!ts.contains(aliasesToMakeVisible, declaration)) {
                                aliasesToMakeVisible.push(declaration);
                            }
                        }
                        else {
                            aliasesToMakeVisible = [declaration];
                        }
                        return true;
                    }
                    return false;
                }
                return true;
            }
        }
        function isEntityNameVisible(entityName, enclosingDeclaration) {
            var meaning;
            if (entityName.parent.kind === 138) {
                meaning = 107455 | 1048576;
            }
            else if (entityName.kind === 121 || entityName.parent.kind === 197) {
                meaning = 1536;
            }
            else {
                meaning = 793056;
            }
            var firstIdentifier = getFirstIdentifier(entityName);
            var symbol = resolveName(enclosingDeclaration, firstIdentifier.text, meaning, undefined, undefined);
            return (symbol && hasVisibleDeclarations(symbol)) || {
                accessibility: 1,
                errorSymbolName: ts.getTextOfNode(firstIdentifier),
                errorNode: firstIdentifier
            };
        }
        function writeKeyword(writer, kind) {
            writer.writeKeyword(ts.tokenToString(kind));
        }
        function writePunctuation(writer, kind) {
            writer.writePunctuation(ts.tokenToString(kind));
        }
        function writeSpace(writer) {
            writer.writeSpace(" ");
        }
        function symbolToString(symbol, enclosingDeclaration, meaning) {
            var writer = ts.getSingleLineStringWriter();
            getSymbolDisplayBuilder().buildSymbolDisplay(symbol, writer, enclosingDeclaration, meaning);
            var result = writer.string();
            ts.releaseStringWriter(writer);
            return result;
        }
        function typeToString(type, enclosingDeclaration, flags) {
            var writer = ts.getSingleLineStringWriter();
            getSymbolDisplayBuilder().buildTypeDisplay(type, writer, enclosingDeclaration, flags);
            var result = writer.string();
            ts.releaseStringWriter(writer);
            var maxLength = compilerOptions.noErrorTruncation || flags & 4 ? undefined : 100;
            if (maxLength && result.length >= maxLength) {
                result = result.substr(0, maxLength - "...".length) + "...";
            }
            return result;
        }
        function getTypeAliasForTypeLiteral(type) {
            if (type.symbol && type.symbol.flags & 2048) {
                var node = type.symbol.declarations[0].parent;
                while (node.kind === 143) {
                    node = node.parent;
                }
                if (node.kind === 193) {
                    return getSymbolOfNode(node);
                }
            }
            return undefined;
        }
        var _displayBuilder;
        function getSymbolDisplayBuilder() {
            function appendSymbolNameOnly(symbol, writer) {
                if (symbol.declarations && symbol.declarations.length > 0) {
                    var declaration = symbol.declarations[0];
                    if (declaration.name) {
                        writer.writeSymbol(ts.declarationNameToString(declaration.name), symbol);
                        return;
                    }
                }
                writer.writeSymbol(symbol.name, symbol);
            }
            function buildSymbolDisplay(symbol, writer, enclosingDeclaration, meaning, flags, typeFlags) {
                var parentSymbol;
                function appendParentTypeArgumentsAndSymbolName(symbol) {
                    if (parentSymbol) {
                        if (flags & 1) {
                            if (symbol.flags & 16777216) {
                                buildDisplayForTypeArgumentsAndDelimiters(getTypeParametersOfClassOrInterface(parentSymbol), symbol.mapper, writer, enclosingDeclaration);
                            }
                            else {
                                buildTypeParameterDisplayFromSymbol(parentSymbol, writer, enclosingDeclaration);
                            }
                        }
                        writePunctuation(writer, 20);
                    }
                    parentSymbol = symbol;
                    appendSymbolNameOnly(symbol, writer);
                }
                writer.trackSymbol(symbol, enclosingDeclaration, meaning);
                function walkSymbol(symbol, meaning) {
                    if (symbol) {
                        var accessibleSymbolChain = getAccessibleSymbolChain(symbol, enclosingDeclaration, meaning, !!(flags & 2));
                        if (!accessibleSymbolChain || needsQualification(accessibleSymbolChain[0], enclosingDeclaration, accessibleSymbolChain.length === 1 ? meaning : getQualifiedLeftMeaning(meaning))) {
                            walkSymbol(getParentOfSymbol(accessibleSymbolChain ? accessibleSymbolChain[0] : symbol), getQualifiedLeftMeaning(meaning));
                        }
                        if (accessibleSymbolChain) {
                            for (var i = 0, n = accessibleSymbolChain.length; i < n; i++) {
                                appendParentTypeArgumentsAndSymbolName(accessibleSymbolChain[i]);
                            }
                        }
                        else {
                            if (!parentSymbol && ts.forEach(symbol.declarations, hasExternalModuleSymbol)) {
                                return;
                            }
                            if (symbol.flags & 2048 || symbol.flags & 4096) {
                                return;
                            }
                            appendParentTypeArgumentsAndSymbolName(symbol);
                        }
                    }
                }
                var isTypeParameter = symbol.flags & 262144;
                var typeFormatFlag = 128 & typeFlags;
                if (!isTypeParameter && (enclosingDeclaration || typeFormatFlag)) {
                    walkSymbol(symbol, meaning);
                    return;
                }
                return appendParentTypeArgumentsAndSymbolName(symbol);
            }
            function buildTypeDisplay(type, writer, enclosingDeclaration, globalFlags, typeStack) {
                var globalFlagsToPass = globalFlags & 16;
                return writeType(type, globalFlags);
                function writeType(type, flags) {
                    if (type.flags & 127) {
                        writer.writeKeyword(!(globalFlags & 16) && (type.flags & 1) ? "any" : type.intrinsicName);
                    }
                    else if (type.flags & 4096) {
                        writeTypeReference(type, flags);
                    }
                    else if (type.flags & (1024 | 2048 | 128 | 512)) {
                        buildSymbolDisplay(type.symbol, writer, enclosingDeclaration, 793056, 0, flags);
                    }
                    else if (type.flags & 8192) {
                        writeTupleType(type);
                    }
                    else if (type.flags & 16384) {
                        writeUnionType(type, flags);
                    }
                    else if (type.flags & 32768) {
                        writeAnonymousType(type, flags);
                    }
                    else if (type.flags & 256) {
                        writer.writeStringLiteral(type.text);
                    }
                    else {
                        writePunctuation(writer, 14);
                        writeSpace(writer);
                        writePunctuation(writer, 21);
                        writeSpace(writer);
                        writePunctuation(writer, 15);
                    }
                }
                function writeTypeList(types, union) {
                    for (var i = 0; i < types.length; i++) {
                        if (i > 0) {
                            if (union) {
                                writeSpace(writer);
                            }
                            writePunctuation(writer, union ? 44 : 23);
                            writeSpace(writer);
                        }
                        writeType(types[i], union ? 64 : 0);
                    }
                }
                function writeTypeReference(type, flags) {
                    if (type.target === globalArrayType && !(flags & 1)) {
                        writeType(type.typeArguments[0], 64);
                        writePunctuation(writer, 18);
                        writePunctuation(writer, 19);
                    }
                    else {
                        buildSymbolDisplay(type.target.symbol, writer, enclosingDeclaration, 793056);
                        writePunctuation(writer, 24);
                        writeTypeList(type.typeArguments, false);
                        writePunctuation(writer, 25);
                    }
                }
                function writeTupleType(type) {
                    writePunctuation(writer, 18);
                    writeTypeList(type.elementTypes, false);
                    writePunctuation(writer, 19);
                }
                function writeUnionType(type, flags) {
                    if (flags & 64) {
                        writePunctuation(writer, 16);
                    }
                    writeTypeList(type.types, true);
                    if (flags & 64) {
                        writePunctuation(writer, 17);
                    }
                }
                function writeAnonymousType(type, flags) {
                    if (type.symbol && type.symbol.flags & (32 | 384 | 512)) {
                        writeTypeofSymbol(type, flags);
                    }
                    else if (shouldWriteTypeOfFunctionSymbol()) {
                        writeTypeofSymbol(type, flags);
                    }
                    else if (typeStack && ts.contains(typeStack, type)) {
                        var typeAlias = getTypeAliasForTypeLiteral(type);
                        if (typeAlias) {
                            buildSymbolDisplay(typeAlias, writer, enclosingDeclaration, 793056, 0, flags);
                        }
                        else {
                            writeKeyword(writer, 110);
                        }
                    }
                    else {
                        if (!typeStack) {
                            typeStack = [];
                        }
                        typeStack.push(type);
                        writeLiteralType(type, flags);
                        typeStack.pop();
                    }
                    function shouldWriteTypeOfFunctionSymbol() {
                        if (type.symbol) {
                            var isStaticMethodSymbol = !!(type.symbol.flags & 8192 && ts.forEach(type.symbol.declarations, function (declaration) { return declaration.flags & 128; }));
                            var isNonLocalFunctionSymbol = !!(type.symbol.flags & 16) && (type.symbol.parent || ts.forEach(type.symbol.declarations, function (declaration) { return declaration.parent.kind === 207 || declaration.parent.kind === 196; }));
                            if (isStaticMethodSymbol || isNonLocalFunctionSymbol) {
                                return !!(flags & 2) || (typeStack && ts.contains(typeStack, type));
                            }
                        }
                    }
                }
                function writeTypeofSymbol(type, typeFormatFlags) {
                    writeKeyword(writer, 96);
                    writeSpace(writer);
                    buildSymbolDisplay(type.symbol, writer, enclosingDeclaration, 107455, 0, typeFormatFlags);
                }
                function getIndexerParameterName(type, indexKind, fallbackName) {
                    var declaration = getIndexDeclarationOfSymbol(type.symbol, indexKind);
                    if (!declaration) {
                        return fallbackName;
                    }
                    ts.Debug.assert(declaration.parameters.length !== 0);
                    return ts.declarationNameToString(declaration.parameters[0].name);
                }
                function writeLiteralType(type, flags) {
                    var resolved = resolveObjectOrUnionTypeMembers(type);
                    if (!resolved.properties.length && !resolved.stringIndexType && !resolved.numberIndexType) {
                        if (!resolved.callSignatures.length && !resolved.constructSignatures.length) {
                            writePunctuation(writer, 14);
                            writePunctuation(writer, 15);
                            return;
                        }
                        if (resolved.callSignatures.length === 1 && !resolved.constructSignatures.length) {
                            if (flags & 64) {
                                writePunctuation(writer, 16);
                            }
                            buildSignatureDisplay(resolved.callSignatures[0], writer, enclosingDeclaration, globalFlagsToPass | 8, typeStack);
                            if (flags & 64) {
                                writePunctuation(writer, 17);
                            }
                            return;
                        }
                        if (resolved.constructSignatures.length === 1 && !resolved.callSignatures.length) {
                            if (flags & 64) {
                                writePunctuation(writer, 16);
                            }
                            writeKeyword(writer, 87);
                            writeSpace(writer);
                            buildSignatureDisplay(resolved.constructSignatures[0], writer, enclosingDeclaration, globalFlagsToPass | 8, typeStack);
                            if (flags & 64) {
                                writePunctuation(writer, 17);
                            }
                            return;
                        }
                    }
                    writePunctuation(writer, 14);
                    writer.writeLine();
                    writer.increaseIndent();
                    for (var i = 0; i < resolved.callSignatures.length; i++) {
                        buildSignatureDisplay(resolved.callSignatures[i], writer, enclosingDeclaration, globalFlagsToPass, typeStack);
                        writePunctuation(writer, 22);
                        writer.writeLine();
                    }
                    for (var i = 0; i < resolved.constructSignatures.length; i++) {
                        writeKeyword(writer, 87);
                        writeSpace(writer);
                        buildSignatureDisplay(resolved.constructSignatures[i], writer, enclosingDeclaration, globalFlagsToPass, typeStack);
                        writePunctuation(writer, 22);
                        writer.writeLine();
                    }
                    if (resolved.stringIndexType) {
                        writePunctuation(writer, 18);
                        writer.writeParameter(getIndexerParameterName(resolved, 0, "x"));
                        writePunctuation(writer, 51);
                        writeSpace(writer);
                        writeKeyword(writer, 119);
                        writePunctuation(writer, 19);
                        writePunctuation(writer, 51);
                        writeSpace(writer);
                        writeType(resolved.stringIndexType, 0);
                        writePunctuation(writer, 22);
                        writer.writeLine();
                    }
                    if (resolved.numberIndexType) {
                        writePunctuation(writer, 18);
                        writer.writeParameter(getIndexerParameterName(resolved, 1, "x"));
                        writePunctuation(writer, 51);
                        writeSpace(writer);
                        writeKeyword(writer, 117);
                        writePunctuation(writer, 19);
                        writePunctuation(writer, 51);
                        writeSpace(writer);
                        writeType(resolved.numberIndexType, 0);
                        writePunctuation(writer, 22);
                        writer.writeLine();
                    }
                    for (var i = 0; i < resolved.properties.length; i++) {
                        var p = resolved.properties[i];
                        var t = getTypeOfSymbol(p);
                        if (p.flags & (16 | 8192) && !getPropertiesOfObjectType(t).length) {
                            var signatures = getSignaturesOfType(t, 0);
                            for (var j = 0; j < signatures.length; j++) {
                                buildSymbolDisplay(p, writer);
                                if (p.flags & 536870912) {
                                    writePunctuation(writer, 50);
                                }
                                buildSignatureDisplay(signatures[j], writer, enclosingDeclaration, globalFlagsToPass, typeStack);
                                writePunctuation(writer, 22);
                                writer.writeLine();
                            }
                        }
                        else {
                            buildSymbolDisplay(p, writer);
                            if (p.flags & 536870912) {
                                writePunctuation(writer, 50);
                            }
                            writePunctuation(writer, 51);
                            writeSpace(writer);
                            writeType(t, 0);
                            writePunctuation(writer, 22);
                            writer.writeLine();
                        }
                    }
                    writer.decreaseIndent();
                    writePunctuation(writer, 15);
                }
            }
            function buildTypeParameterDisplayFromSymbol(symbol, writer, enclosingDeclaraiton, flags) {
                var targetSymbol = getTargetSymbol(symbol);
                if (targetSymbol.flags & 32 || targetSymbol.flags & 64) {
                    buildDisplayForTypeParametersAndDelimiters(getTypeParametersOfClassOrInterface(symbol), writer, enclosingDeclaraiton, flags);
                }
            }
            function buildTypeParameterDisplay(tp, writer, enclosingDeclaration, flags, typeStack) {
                appendSymbolNameOnly(tp.symbol, writer);
                var constraint = getConstraintOfTypeParameter(tp);
                if (constraint) {
                    writeSpace(writer);
                    writeKeyword(writer, 78);
                    writeSpace(writer);
                    buildTypeDisplay(constraint, writer, enclosingDeclaration, flags, typeStack);
                }
            }
            function buildParameterDisplay(p, writer, enclosingDeclaration, flags, typeStack) {
                if (ts.hasDotDotDotToken(p.valueDeclaration)) {
                    writePunctuation(writer, 21);
                }
                appendSymbolNameOnly(p, writer);
                if (ts.hasQuestionToken(p.valueDeclaration) || p.valueDeclaration.initializer) {
                    writePunctuation(writer, 50);
                }
                writePunctuation(writer, 51);
                writeSpace(writer);
                buildTypeDisplay(getTypeOfSymbol(p), writer, enclosingDeclaration, flags, typeStack);
            }
            function buildDisplayForTypeParametersAndDelimiters(typeParameters, writer, enclosingDeclaration, flags, typeStack) {
                if (typeParameters && typeParameters.length) {
                    writePunctuation(writer, 24);
                    for (var i = 0; i < typeParameters.length; i++) {
                        if (i > 0) {
                            writePunctuation(writer, 23);
                            writeSpace(writer);
                        }
                        buildTypeParameterDisplay(typeParameters[i], writer, enclosingDeclaration, flags, typeStack);
                    }
                    writePunctuation(writer, 25);
                }
            }
            function buildDisplayForTypeArgumentsAndDelimiters(typeParameters, mapper, writer, enclosingDeclaration, flags, typeStack) {
                if (typeParameters && typeParameters.length) {
                    writePunctuation(writer, 24);
                    for (var i = 0; i < typeParameters.length; i++) {
                        if (i > 0) {
                            writePunctuation(writer, 23);
                            writeSpace(writer);
                        }
                        buildTypeDisplay(mapper(typeParameters[i]), writer, enclosingDeclaration, 0);
                    }
                    writePunctuation(writer, 25);
                }
            }
            function buildDisplayForParametersAndDelimiters(parameters, writer, enclosingDeclaration, flags, typeStack) {
                writePunctuation(writer, 16);
                for (var i = 0; i < parameters.length; i++) {
                    if (i > 0) {
                        writePunctuation(writer, 23);
                        writeSpace(writer);
                    }
                    buildParameterDisplay(parameters[i], writer, enclosingDeclaration, flags, typeStack);
                }
                writePunctuation(writer, 17);
            }
            function buildReturnTypeDisplay(signature, writer, enclosingDeclaration, flags, typeStack) {
                if (flags & 8) {
                    writeSpace(writer);
                    writePunctuation(writer, 32);
                }
                else {
                    writePunctuation(writer, 51);
                }
                writeSpace(writer);
                buildTypeDisplay(getReturnTypeOfSignature(signature), writer, enclosingDeclaration, flags, typeStack);
            }
            function buildSignatureDisplay(signature, writer, enclosingDeclaration, flags, typeStack) {
                if (signature.target && (flags & 32)) {
                    buildDisplayForTypeArgumentsAndDelimiters(signature.target.typeParameters, signature.mapper, writer, enclosingDeclaration);
                }
                else {
                    buildDisplayForTypeParametersAndDelimiters(signature.typeParameters, writer, enclosingDeclaration, flags, typeStack);
                }
                buildDisplayForParametersAndDelimiters(signature.parameters, writer, enclosingDeclaration, flags, typeStack);
                buildReturnTypeDisplay(signature, writer, enclosingDeclaration, flags, typeStack);
            }
            return _displayBuilder || (_displayBuilder = {
                symbolToString: symbolToString,
                typeToString: typeToString,
                buildSymbolDisplay: buildSymbolDisplay,
                buildTypeDisplay: buildTypeDisplay,
                buildTypeParameterDisplay: buildTypeParameterDisplay,
                buildParameterDisplay: buildParameterDisplay,
                buildDisplayForParametersAndDelimiters: buildDisplayForParametersAndDelimiters,
                buildDisplayForTypeParametersAndDelimiters: buildDisplayForTypeParametersAndDelimiters,
                buildDisplayForTypeArgumentsAndDelimiters: buildDisplayForTypeArgumentsAndDelimiters,
                buildTypeParameterDisplayFromSymbol: buildTypeParameterDisplayFromSymbol,
                buildSignatureDisplay: buildSignatureDisplay,
                buildReturnTypeDisplay: buildReturnTypeDisplay
            });
        }
        function isDeclarationVisible(node) {
            function getContainingExternalModule(node) {
                for (; node; node = node.parent) {
                    if (node.kind === 195) {
                        if (node.name.kind === 8) {
                            return node;
                        }
                    }
                    else if (node.kind === 207) {
                        return ts.isExternalModule(node) ? node : undefined;
                    }
                }
                ts.Debug.fail("getContainingModule cant reach here");
            }
            function isUsedInExportAssignment(node) {
                var externalModule = getContainingExternalModule(node);
                if (externalModule) {
                    var externalModuleSymbol = getSymbolOfNode(externalModule);
                    var exportAssignmentSymbol = getExportAssignmentSymbol(externalModuleSymbol);
                    var resolvedExportSymbol;
                    var symbolOfNode = getSymbolOfNode(node);
                    if (isSymbolUsedInExportAssignment(symbolOfNode)) {
                        return true;
                    }
                    if (symbolOfNode.flags & 8388608) {
                        return isSymbolUsedInExportAssignment(resolveImport(symbolOfNode));
                    }
                }
                function isSymbolUsedInExportAssignment(symbol) {
                    if (exportAssignmentSymbol === symbol) {
                        return true;
                    }
                    if (exportAssignmentSymbol && !!(exportAssignmentSymbol.flags & 8388608)) {
                        resolvedExportSymbol = resolvedExportSymbol || resolveImport(exportAssignmentSymbol);
                        if (resolvedExportSymbol === symbol) {
                            return true;
                        }
                        return ts.forEach(resolvedExportSymbol.declarations, function (current) {
                            while (current) {
                                if (current === node) {
                                    return true;
                                }
                                current = current.parent;
                            }
                        });
                    }
                }
            }
            function determineIfDeclarationIsVisible() {
                switch (node.kind) {
                    case 188:
                    case 146:
                    case 195:
                    case 191:
                    case 192:
                    case 193:
                    case 190:
                    case 194:
                    case 197:
                        var parent = getDeclarationContainer(node);
                        if (!(ts.getCombinedNodeFlags(node) & 1) && !(node.kind !== 197 && parent.kind !== 207 && ts.isInAmbientContext(parent))) {
                            return isGlobalSourceFile(parent) || isUsedInExportAssignment(node);
                        }
                        return isDeclarationVisible(parent);
                    case 126:
                    case 125:
                    case 130:
                    case 131:
                    case 128:
                    case 127:
                        if (node.flags & (32 | 64)) {
                            return false;
                        }
                    case 129:
                    case 133:
                    case 132:
                    case 134:
                    case 124:
                    case 196:
                    case 136:
                    case 137:
                    case 139:
                    case 135:
                    case 140:
                    case 141:
                    case 142:
                    case 143:
                        return isDeclarationVisible(node.parent);
                    case 123:
                    case 207:
                        return true;
                    default:
                        ts.Debug.fail("isDeclarationVisible unknown: SyntaxKind: " + node.kind);
                }
            }
            if (node) {
                var links = getNodeLinks(node);
                if (links.isVisible === undefined) {
                    links.isVisible = !!determineIfDeclarationIsVisible();
                }
                return links.isVisible;
            }
        }
        function getRootDeclaration(node) {
            while (node.kind === 146) {
                node = node.parent.parent;
            }
            return node;
        }
        function getDeclarationContainer(node) {
            node = getRootDeclaration(node);
            return node.kind === 188 ? node.parent.parent.parent : node.parent;
        }
        function getTypeOfPrototypeProperty(prototype) {
            var classType = getDeclaredTypeOfSymbol(prototype.parent);
            return classType.typeParameters ? createTypeReference(classType, ts.map(classType.typeParameters, function (_) { return anyType; })) : classType;
        }
        function getTypeOfPropertyOfType(type, name) {
            var prop = getPropertyOfType(type, name);
            return prop ? getTypeOfSymbol(prop) : undefined;
        }
        function getTypeForBindingElement(declaration) {
            var pattern = declaration.parent;
            var parentType = getTypeForVariableLikeDeclaration(pattern.parent);
            if (parentType === unknownType) {
                return unknownType;
            }
            if (!parentType || parentType === anyType) {
                if (declaration.initializer) {
                    return checkExpressionCached(declaration.initializer);
                }
                return parentType;
            }
            if (pattern.kind === 144) {
                var name = declaration.propertyName || declaration.name;
                var type = getTypeOfPropertyOfType(parentType, name.text) || isNumericLiteralName(name.text) && getIndexTypeOfType(parentType, 1) || getIndexTypeOfType(parentType, 0);
                if (!type) {
                    error(name, ts.Diagnostics.Type_0_has_no_property_1_and_no_string_index_signature, typeToString(parentType), ts.declarationNameToString(name));
                    return unknownType;
                }
            }
            else {
                if (!isTypeAssignableTo(parentType, anyArrayType)) {
                    error(pattern, ts.Diagnostics.Type_0_is_not_an_array_type, typeToString(parentType));
                    return unknownType;
                }
                if (!declaration.dotDotDotToken) {
                    var propName = "" + ts.indexOf(pattern.elements, declaration);
                    var type = isTupleLikeType(parentType) ? getTypeOfPropertyOfType(parentType, propName) : getIndexTypeOfType(parentType, 1);
                    if (!type) {
                        error(declaration, ts.Diagnostics.Type_0_has_no_property_1, typeToString(parentType), propName);
                        return unknownType;
                    }
                }
                else {
                    var type = createArrayType(getIndexTypeOfType(parentType, 1));
                }
            }
            return type;
        }
        function getTypeForVariableLikeDeclaration(declaration) {
            if (declaration.parent.parent.kind === 178) {
                return anyType;
            }
            if (ts.isBindingPattern(declaration.parent)) {
                return getTypeForBindingElement(declaration);
            }
            if (declaration.type) {
                return getTypeFromTypeNode(declaration.type);
            }
            if (declaration.kind === 124) {
                var func = declaration.parent;
                if (func.kind === 131 && !ts.hasDynamicName(func)) {
                    var getter = ts.getDeclarationOfKind(declaration.parent.symbol, 130);
                    if (getter) {
                        return getReturnTypeOfSignature(getSignatureFromDeclaration(getter));
                    }
                }
                var type = getContextuallyTypedParameterType(declaration);
                if (type) {
                    return type;
                }
            }
            if (declaration.initializer) {
                return checkExpressionCached(declaration.initializer);
            }
            if (declaration.kind === 205) {
                return checkIdentifier(declaration.name);
            }
            return undefined;
        }
        function getTypeFromBindingElement(element) {
            if (element.initializer) {
                return getWidenedType(checkExpressionCached(element.initializer));
            }
            if (ts.isBindingPattern(element.name)) {
                return getTypeFromBindingPattern(element.name);
            }
            return anyType;
        }
        function getTypeFromObjectBindingPattern(pattern) {
            var members = {};
            ts.forEach(pattern.elements, function (e) {
                var flags = 4 | 67108864 | (e.initializer ? 536870912 : 0);
                var name = e.propertyName || e.name;
                var symbol = createSymbol(flags, name.text);
                symbol.type = getTypeFromBindingElement(e);
                members[symbol.name] = symbol;
            });
            return createAnonymousType(undefined, members, emptyArray, emptyArray, undefined, undefined);
        }
        function getTypeFromArrayBindingPattern(pattern) {
            var hasSpreadElement = false;
            var elementTypes = [];
            ts.forEach(pattern.elements, function (e) {
                elementTypes.push(e.kind === 168 || e.dotDotDotToken ? anyType : getTypeFromBindingElement(e));
                if (e.dotDotDotToken) {
                    hasSpreadElement = true;
                }
            });
            return !elementTypes.length ? anyArrayType : hasSpreadElement ? createArrayType(getUnionType(elementTypes)) : createTupleType(elementTypes);
        }
        function getTypeFromBindingPattern(pattern) {
            return pattern.kind === 144 ? getTypeFromObjectBindingPattern(pattern) : getTypeFromArrayBindingPattern(pattern);
        }
        function getWidenedTypeForVariableLikeDeclaration(declaration, reportErrors) {
            var type = getTypeForVariableLikeDeclaration(declaration);
            if (type) {
                if (reportErrors) {
                    reportErrorsFromWidening(declaration, type);
                }
                return declaration.kind !== 204 ? getWidenedType(type) : type;
            }
            if (ts.isBindingPattern(declaration.name)) {
                return getTypeFromBindingPattern(declaration.name);
            }
            type = declaration.dotDotDotToken ? anyArrayType : anyType;
            if (reportErrors && compilerOptions.noImplicitAny) {
                var root = getRootDeclaration(declaration);
                if (!isPrivateWithinAmbient(root) && !(root.kind === 124 && isPrivateWithinAmbient(root.parent))) {
                    reportImplicitAnyError(declaration, type);
                }
            }
            return type;
        }
        function getTypeOfVariableOrParameterOrProperty(symbol) {
            var links = getSymbolLinks(symbol);
            if (!links.type) {
                if (symbol.flags & 134217728) {
                    return links.type = getTypeOfPrototypeProperty(symbol);
                }
                var declaration = symbol.valueDeclaration;
                if (declaration.kind === 203) {
                    return links.type = anyType;
                }
                links.type = resolvingType;
                var type = getWidenedTypeForVariableLikeDeclaration(declaration, true);
                if (links.type === resolvingType) {
                    links.type = type;
                }
            }
            else if (links.type === resolvingType) {
                links.type = anyType;
                if (compilerOptions.noImplicitAny) {
                    var diagnostic = symbol.valueDeclaration.type ? ts.Diagnostics._0_implicitly_has_type_any_because_it_is_referenced_directly_or_indirectly_in_its_own_type_annotation : ts.Diagnostics._0_implicitly_has_type_any_because_it_is_does_not_have_a_type_annotation_and_is_referenced_directly_or_indirectly_in_its_own_initializer;
                    error(symbol.valueDeclaration, diagnostic, symbolToString(symbol));
                }
            }
            return links.type;
        }
        function getSetAccessorTypeAnnotationNode(accessor) {
            return accessor && accessor.parameters.length > 0 && accessor.parameters[0].type;
        }
        function getAnnotatedAccessorType(accessor) {
            if (accessor) {
                if (accessor.kind === 130) {
                    return accessor.type && getTypeFromTypeNode(accessor.type);
                }
                else {
                    var setterTypeAnnotation = getSetAccessorTypeAnnotationNode(accessor);
                    return setterTypeAnnotation && getTypeFromTypeNode(setterTypeAnnotation);
                }
            }
            return undefined;
        }
        function getTypeOfAccessors(symbol) {
            var links = getSymbolLinks(symbol);
            checkAndStoreTypeOfAccessors(symbol, links);
            return links.type;
        }
        function checkAndStoreTypeOfAccessors(symbol, links) {
            links = links || getSymbolLinks(symbol);
            if (!links.type) {
                links.type = resolvingType;
                var getter = ts.getDeclarationOfKind(symbol, 130);
                var setter = ts.getDeclarationOfKind(symbol, 131);
                var type;
                var getterReturnType = getAnnotatedAccessorType(getter);
                if (getterReturnType) {
                    type = getterReturnType;
                }
                else {
                    var setterParameterType = getAnnotatedAccessorType(setter);
                    if (setterParameterType) {
                        type = setterParameterType;
                    }
                    else {
                        if (getter && getter.body) {
                            type = getReturnTypeFromBody(getter);
                        }
                        else {
                            if (compilerOptions.noImplicitAny) {
                                error(setter, ts.Diagnostics.Property_0_implicitly_has_type_any_because_its_set_accessor_lacks_a_type_annotation, symbolToString(symbol));
                            }
                            type = anyType;
                        }
                    }
                }
                if (links.type === resolvingType) {
                    links.type = type;
                }
            }
            else if (links.type === resolvingType) {
                links.type = anyType;
                if (compilerOptions.noImplicitAny) {
                    var getter = ts.getDeclarationOfKind(symbol, 130);
                    error(getter, ts.Diagnostics._0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions, symbolToString(symbol));
                }
            }
        }
        function getTypeOfFuncClassEnumModule(symbol) {
            var links = getSymbolLinks(symbol);
            if (!links.type) {
                links.type = createObjectType(32768, symbol);
            }
            return links.type;
        }
        function getTypeOfEnumMember(symbol) {
            var links = getSymbolLinks(symbol);
            if (!links.type) {
                links.type = getDeclaredTypeOfEnum(getParentOfSymbol(symbol));
            }
            return links.type;
        }
        function getTypeOfImport(symbol) {
            var links = getSymbolLinks(symbol);
            if (!links.type) {
                links.type = getTypeOfSymbol(resolveImport(symbol));
            }
            return links.type;
        }
        function getTypeOfInstantiatedSymbol(symbol) {
            var links = getSymbolLinks(symbol);
            if (!links.type) {
                links.type = instantiateType(getTypeOfSymbol(links.target), links.mapper);
            }
            return links.type;
        }
        function getTypeOfSymbol(symbol) {
            if (symbol.flags & 16777216) {
                return getTypeOfInstantiatedSymbol(symbol);
            }
            if (symbol.flags & (3 | 4)) {
                return getTypeOfVariableOrParameterOrProperty(symbol);
            }
            if (symbol.flags & (16 | 8192 | 32 | 384 | 512)) {
                return getTypeOfFuncClassEnumModule(symbol);
            }
            if (symbol.flags & 8) {
                return getTypeOfEnumMember(symbol);
            }
            if (symbol.flags & 98304) {
                return getTypeOfAccessors(symbol);
            }
            if (symbol.flags & 8388608) {
                return getTypeOfImport(symbol);
            }
            return unknownType;
        }
        function getTargetType(type) {
            return type.flags & 4096 ? type.target : type;
        }
        function hasBaseType(type, checkBase) {
            return check(type);
            function check(type) {
                var target = getTargetType(type);
                return target === checkBase || ts.forEach(target.baseTypes, check);
            }
        }
        function getTypeParametersOfClassOrInterface(symbol) {
            var result;
            ts.forEach(symbol.declarations, function (node) {
                if (node.kind === 192 || node.kind === 191) {
                    var declaration = node;
                    if (declaration.typeParameters && declaration.typeParameters.length) {
                        ts.forEach(declaration.typeParameters, function (node) {
                            var tp = getDeclaredTypeOfTypeParameter(getSymbolOfNode(node));
                            if (!result) {
                                result = [tp];
                            }
                            else if (!ts.contains(result, tp)) {
                                result.push(tp);
                            }
                        });
                    }
                }
            });
            return result;
        }
        function getDeclaredTypeOfClass(symbol) {
            var links = getSymbolLinks(symbol);
            if (!links.declaredType) {
                var type = links.declaredType = createObjectType(1024, symbol);
                var typeParameters = getTypeParametersOfClassOrInterface(symbol);
                if (typeParameters) {
                    type.flags |= 4096;
                    type.typeParameters = typeParameters;
                    type.instantiations = {};
                    type.instantiations[getTypeListId(type.typeParameters)] = type;
                    type.target = type;
                    type.typeArguments = type.typeParameters;
                }
                type.baseTypes = [];
                var declaration = ts.getDeclarationOfKind(symbol, 191);
                var baseTypeNode = ts.getClassBaseTypeNode(declaration);
                if (baseTypeNode) {
                    var baseType = getTypeFromTypeReferenceNode(baseTypeNode);
                    if (baseType !== unknownType) {
                        if (getTargetType(baseType).flags & 1024) {
                            if (type !== baseType && !hasBaseType(baseType, type)) {
                                type.baseTypes.push(baseType);
                            }
                            else {
                                error(declaration, ts.Diagnostics.Type_0_recursively_references_itself_as_a_base_type, typeToString(type, undefined, 1));
                            }
                        }
                        else {
                            error(baseTypeNode, ts.Diagnostics.A_class_may_only_extend_another_class);
                        }
                    }
                }
                type.declaredProperties = getNamedMembers(symbol.members);
                type.declaredCallSignatures = emptyArray;
                type.declaredConstructSignatures = emptyArray;
                type.declaredStringIndexType = getIndexTypeOfSymbol(symbol, 0);
                type.declaredNumberIndexType = getIndexTypeOfSymbol(symbol, 1);
            }
            return links.declaredType;
        }
        function getDeclaredTypeOfInterface(symbol) {
            var links = getSymbolLinks(symbol);
            if (!links.declaredType) {
                var type = links.declaredType = createObjectType(2048, symbol);
                var typeParameters = getTypeParametersOfClassOrInterface(symbol);
                if (typeParameters) {
                    type.flags |= 4096;
                    type.typeParameters = typeParameters;
                    type.instantiations = {};
                    type.instantiations[getTypeListId(type.typeParameters)] = type;
                    type.target = type;
                    type.typeArguments = type.typeParameters;
                }
                type.baseTypes = [];
                ts.forEach(symbol.declarations, function (declaration) {
                    if (declaration.kind === 192 && ts.getInterfaceBaseTypeNodes(declaration)) {
                        ts.forEach(ts.getInterfaceBaseTypeNodes(declaration), function (node) {
                            var baseType = getTypeFromTypeReferenceNode(node);
                            if (baseType !== unknownType) {
                                if (getTargetType(baseType).flags & (1024 | 2048)) {
                                    if (type !== baseType && !hasBaseType(baseType, type)) {
                                        type.baseTypes.push(baseType);
                                    }
                                    else {
                                        error(declaration, ts.Diagnostics.Type_0_recursively_references_itself_as_a_base_type, typeToString(type, undefined, 1));
                                    }
                                }
                                else {
                                    error(node, ts.Diagnostics.An_interface_may_only_extend_a_class_or_another_interface);
                                }
                            }
                        });
                    }
                });
                type.declaredProperties = getNamedMembers(symbol.members);
                type.declaredCallSignatures = getSignaturesOfSymbol(symbol.members["__call"]);
                type.declaredConstructSignatures = getSignaturesOfSymbol(symbol.members["__new"]);
                type.declaredStringIndexType = getIndexTypeOfSymbol(symbol, 0);
                type.declaredNumberIndexType = getIndexTypeOfSymbol(symbol, 1);
            }
            return links.declaredType;
        }
        function getDeclaredTypeOfTypeAlias(symbol) {
            var links = getSymbolLinks(symbol);
            if (!links.declaredType) {
                links.declaredType = resolvingType;
                var declaration = ts.getDeclarationOfKind(symbol, 193);
                var type = getTypeFromTypeNode(declaration.type);
                if (links.declaredType === resolvingType) {
                    links.declaredType = type;
                }
            }
            else if (links.declaredType === resolvingType) {
                links.declaredType = unknownType;
                var declaration = ts.getDeclarationOfKind(symbol, 193);
                error(declaration.name, ts.Diagnostics.Type_alias_0_circularly_references_itself, symbolToString(symbol));
            }
            return links.declaredType;
        }
        function getDeclaredTypeOfEnum(symbol) {
            var links = getSymbolLinks(symbol);
            if (!links.declaredType) {
                var type = createType(128);
                type.symbol = symbol;
                links.declaredType = type;
            }
            return links.declaredType;
        }
        function getDeclaredTypeOfTypeParameter(symbol) {
            var links = getSymbolLinks(symbol);
            if (!links.declaredType) {
                var type = createType(512);
                type.symbol = symbol;
                if (!ts.getDeclarationOfKind(symbol, 123).constraint) {
                    type.constraint = noConstraintType;
                }
                links.declaredType = type;
            }
            return links.declaredType;
        }
        function getDeclaredTypeOfImport(symbol) {
            var links = getSymbolLinks(symbol);
            if (!links.declaredType) {
                links.declaredType = getDeclaredTypeOfSymbol(resolveImport(symbol));
            }
            return links.declaredType;
        }
        function getDeclaredTypeOfSymbol(symbol) {
            ts.Debug.assert((symbol.flags & 16777216) === 0);
            if (symbol.flags & 32) {
                return getDeclaredTypeOfClass(symbol);
            }
            if (symbol.flags & 64) {
                return getDeclaredTypeOfInterface(symbol);
            }
            if (symbol.flags & 524288) {
                return getDeclaredTypeOfTypeAlias(symbol);
            }
            if (symbol.flags & 384) {
                return getDeclaredTypeOfEnum(symbol);
            }
            if (symbol.flags & 262144) {
                return getDeclaredTypeOfTypeParameter(symbol);
            }
            if (symbol.flags & 8388608) {
                return getDeclaredTypeOfImport(symbol);
            }
            return unknownType;
        }
        function createSymbolTable(symbols) {
            var result = {};
            for (var i = 0; i < symbols.length; i++) {
                var symbol = symbols[i];
                result[symbol.name] = symbol;
            }
            return result;
        }
        function createInstantiatedSymbolTable(symbols, mapper) {
            var result = {};
            for (var i = 0; i < symbols.length; i++) {
                var symbol = symbols[i];
                result[symbol.name] = instantiateSymbol(symbol, mapper);
            }
            return result;
        }
        function addInheritedMembers(symbols, baseSymbols) {
            for (var i = 0; i < baseSymbols.length; i++) {
                var s = baseSymbols[i];
                if (!ts.hasProperty(symbols, s.name)) {
                    symbols[s.name] = s;
                }
            }
        }
        function addInheritedSignatures(signatures, baseSignatures) {
            if (baseSignatures) {
                for (var i = 0; i < baseSignatures.length; i++) {
                    signatures.push(baseSignatures[i]);
                }
            }
        }
        function resolveClassOrInterfaceMembers(type) {
            var members = type.symbol.members;
            var callSignatures = type.declaredCallSignatures;
            var constructSignatures = type.declaredConstructSignatures;
            var stringIndexType = type.declaredStringIndexType;
            var numberIndexType = type.declaredNumberIndexType;
            if (type.baseTypes.length) {
                members = createSymbolTable(type.declaredProperties);
                ts.forEach(type.baseTypes, function (baseType) {
                    addInheritedMembers(members, getPropertiesOfObjectType(baseType));
                    callSignatures = ts.concatenate(callSignatures, getSignaturesOfType(baseType, 0));
                    constructSignatures = ts.concatenate(constructSignatures, getSignaturesOfType(baseType, 1));
                    stringIndexType = stringIndexType || getIndexTypeOfType(baseType, 0);
                    numberIndexType = numberIndexType || getIndexTypeOfType(baseType, 1);
                });
            }
            setObjectTypeMembers(type, members, callSignatures, constructSignatures, stringIndexType, numberIndexType);
        }
        function resolveTypeReferenceMembers(type) {
            var target = type.target;
            var mapper = createTypeMapper(target.typeParameters, type.typeArguments);
            var members = createInstantiatedSymbolTable(target.declaredProperties, mapper);
            var callSignatures = instantiateList(target.declaredCallSignatures, mapper, instantiateSignature);
            var constructSignatures = instantiateList(target.declaredConstructSignatures, mapper, instantiateSignature);
            var stringIndexType = target.declaredStringIndexType ? instantiateType(target.declaredStringIndexType, mapper) : undefined;
            var numberIndexType = target.declaredNumberIndexType ? instantiateType(target.declaredNumberIndexType, mapper) : undefined;
            ts.forEach(target.baseTypes, function (baseType) {
                var instantiatedBaseType = instantiateType(baseType, mapper);
                addInheritedMembers(members, getPropertiesOfObjectType(instantiatedBaseType));
                callSignatures = ts.concatenate(callSignatures, getSignaturesOfType(instantiatedBaseType, 0));
                constructSignatures = ts.concatenate(constructSignatures, getSignaturesOfType(instantiatedBaseType, 1));
                stringIndexType = stringIndexType || getIndexTypeOfType(instantiatedBaseType, 0);
                numberIndexType = numberIndexType || getIndexTypeOfType(instantiatedBaseType, 1);
            });
            setObjectTypeMembers(type, members, callSignatures, constructSignatures, stringIndexType, numberIndexType);
        }
        function createSignature(declaration, typeParameters, parameters, resolvedReturnType, minArgumentCount, hasRestParameter, hasStringLiterals) {
            var sig = new Signature(checker);
            sig.declaration = declaration;
            sig.typeParameters = typeParameters;
            sig.parameters = parameters;
            sig.resolvedReturnType = resolvedReturnType;
            sig.minArgumentCount = minArgumentCount;
            sig.hasRestParameter = hasRestParameter;
            sig.hasStringLiterals = hasStringLiterals;
            return sig;
        }
        function cloneSignature(sig) {
            return createSignature(sig.declaration, sig.typeParameters, sig.parameters, sig.resolvedReturnType, sig.minArgumentCount, sig.hasRestParameter, sig.hasStringLiterals);
        }
        function getDefaultConstructSignatures(classType) {
            if (classType.baseTypes.length) {
                var baseType = classType.baseTypes[0];
                var baseSignatures = getSignaturesOfType(getTypeOfSymbol(baseType.symbol), 1);
                return ts.map(baseSignatures, function (baseSignature) {
                    var signature = baseType.flags & 4096 ? getSignatureInstantiation(baseSignature, baseType.typeArguments) : cloneSignature(baseSignature);
                    signature.typeParameters = classType.typeParameters;
                    signature.resolvedReturnType = classType;
                    return signature;
                });
            }
            return [createSignature(undefined, classType.typeParameters, emptyArray, classType, 0, false, false)];
        }
        function createTupleTypeMemberSymbols(memberTypes) {
            var members = {};
            for (var i = 0; i < memberTypes.length; i++) {
                var symbol = createSymbol(4 | 67108864, "" + i);
                symbol.type = memberTypes[i];
                members[i] = symbol;
            }
            return members;
        }
        function resolveTupleTypeMembers(type) {
            var arrayType = resolveObjectOrUnionTypeMembers(createArrayType(getUnionType(type.elementTypes)));
            var members = createTupleTypeMemberSymbols(type.elementTypes);
            addInheritedMembers(members, arrayType.properties);
            setObjectTypeMembers(type, members, arrayType.callSignatures, arrayType.constructSignatures, arrayType.stringIndexType, arrayType.numberIndexType);
        }
        function signatureListsIdentical(s, t) {
            if (s.length !== t.length) {
                return false;
            }
            for (var i = 0; i < s.length; i++) {
                if (!compareSignatures(s[i], t[i], false, compareTypes)) {
                    return false;
                }
            }
            return true;
        }
        function getUnionSignatures(types, kind) {
            var signatureLists = ts.map(types, function (t) { return getSignaturesOfType(t, kind); });
            var signatures = signatureLists[0];
            for (var i = 0; i < signatures.length; i++) {
                if (signatures[i].typeParameters) {
                    return emptyArray;
                }
            }
            for (var i = 1; i < signatureLists.length; i++) {
                if (!signatureListsIdentical(signatures, signatureLists[i])) {
                    return emptyArray;
                }
            }
            var result = ts.map(signatures, cloneSignature);
            for (var i = 0; i < result.length; i++) {
                var s = result[i];
                s.resolvedReturnType = undefined;
                s.unionSignatures = ts.map(signatureLists, function (signatures) { return signatures[i]; });
            }
            return result;
        }
        function getUnionIndexType(types, kind) {
            var indexTypes = [];
            for (var i = 0; i < types.length; i++) {
                var indexType = getIndexTypeOfType(types[i], kind);
                if (!indexType) {
                    return undefined;
                }
                indexTypes.push(indexType);
            }
            return getUnionType(indexTypes);
        }
        function resolveUnionTypeMembers(type) {
            var callSignatures = getUnionSignatures(type.types, 0);
            var constructSignatures = getUnionSignatures(type.types, 1);
            var stringIndexType = getUnionIndexType(type.types, 0);
            var numberIndexType = getUnionIndexType(type.types, 1);
            setObjectTypeMembers(type, emptySymbols, callSignatures, constructSignatures, stringIndexType, numberIndexType);
        }
        function resolveAnonymousTypeMembers(type) {
            var symbol = type.symbol;
            if (symbol.flags & 2048) {
                var members = symbol.members;
                var callSignatures = getSignaturesOfSymbol(members["__call"]);
                var constructSignatures = getSignaturesOfSymbol(members["__new"]);
                var stringIndexType = getIndexTypeOfSymbol(symbol, 0);
                var numberIndexType = getIndexTypeOfSymbol(symbol, 1);
            }
            else {
                var members = emptySymbols;
                var callSignatures = emptyArray;
                var constructSignatures = emptyArray;
                if (symbol.flags & 1952) {
                    members = symbol.exports;
                }
                if (symbol.flags & (16 | 8192)) {
                    callSignatures = getSignaturesOfSymbol(symbol);
                }
                if (symbol.flags & 32) {
                    var classType = getDeclaredTypeOfClass(symbol);
                    constructSignatures = getSignaturesOfSymbol(symbol.members["__constructor"]);
                    if (!constructSignatures.length) {
                        constructSignatures = getDefaultConstructSignatures(classType);
                    }
                    if (classType.baseTypes.length) {
                        members = createSymbolTable(getNamedMembers(members));
                        addInheritedMembers(members, getPropertiesOfObjectType(getTypeOfSymbol(classType.baseTypes[0].symbol)));
                    }
                }
                var stringIndexType = undefined;
                var numberIndexType = (symbol.flags & 384) ? stringType : undefined;
            }
            setObjectTypeMembers(type, members, callSignatures, constructSignatures, stringIndexType, numberIndexType);
        }
        function resolveObjectOrUnionTypeMembers(type) {
            if (!type.members) {
                if (type.flags & (1024 | 2048)) {
                    resolveClassOrInterfaceMembers(type);
                }
                else if (type.flags & 32768) {
                    resolveAnonymousTypeMembers(type);
                }
                else if (type.flags & 8192) {
                    resolveTupleTypeMembers(type);
                }
                else if (type.flags & 16384) {
                    resolveUnionTypeMembers(type);
                }
                else {
                    resolveTypeReferenceMembers(type);
                }
            }
            return type;
        }
        function getPropertiesOfObjectType(type) {
            if (type.flags & 48128) {
                return resolveObjectOrUnionTypeMembers(type).properties;
            }
            return emptyArray;
        }
        function getPropertyOfObjectType(type, name) {
            if (type.flags & 48128) {
                var resolved = resolveObjectOrUnionTypeMembers(type);
                if (ts.hasProperty(resolved.members, name)) {
                    var symbol = resolved.members[name];
                    if (symbolIsValue(symbol)) {
                        return symbol;
                    }
                }
            }
        }
        function getPropertiesOfUnionType(type) {
            var result = [];
            ts.forEach(getPropertiesOfType(type.types[0]), function (prop) {
                var unionProp = getPropertyOfUnionType(type, prop.name);
                if (unionProp) {
                    result.push(unionProp);
                }
            });
            return result;
        }
        function getPropertiesOfType(type) {
            if (type.flags & 16384) {
                return getPropertiesOfUnionType(type);
            }
            return getPropertiesOfObjectType(getApparentType(type));
        }
        function getApparentType(type) {
            if (type.flags & 512) {
                do {
                    type = getConstraintOfTypeParameter(type);
                } while (type && type.flags & 512);
                if (!type) {
                    type = emptyObjectType;
                }
            }
            if (type.flags & 258) {
                type = globalStringType;
            }
            else if (type.flags & 132) {
                type = globalNumberType;
            }
            else if (type.flags & 8) {
                type = globalBooleanType;
            }
            return type;
        }
        function createUnionProperty(unionType, name) {
            var types = unionType.types;
            var props;
            for (var i = 0; i < types.length; i++) {
                var type = getApparentType(types[i]);
                if (type !== unknownType) {
                    var prop = getPropertyOfType(type, name);
                    if (!prop) {
                        return undefined;
                    }
                    if (!props) {
                        props = [prop];
                    }
                    else {
                        props.push(prop);
                    }
                }
            }
            var propTypes = [];
            var declarations = [];
            for (var i = 0; i < props.length; i++) {
                var prop = props[i];
                if (prop.declarations) {
                    declarations.push.apply(declarations, prop.declarations);
                }
                propTypes.push(getTypeOfSymbol(prop));
            }
            var result = createSymbol(4 | 67108864 | 268435456, name);
            result.unionType = unionType;
            result.declarations = declarations;
            result.type = getUnionType(propTypes);
            return result;
        }
        function getPropertyOfUnionType(type, name) {
            var properties = type.resolvedProperties || (type.resolvedProperties = {});
            if (ts.hasProperty(properties, name)) {
                return properties[name];
            }
            var property = createUnionProperty(type, name);
            if (property) {
                properties[name] = property;
            }
            return property;
        }
        function getPropertyOfType(type, name) {
            if (type.flags & 16384) {
                return getPropertyOfUnionType(type, name);
            }
            if (!(type.flags & 48128)) {
                type = getApparentType(type);
                if (!(type.flags & 48128)) {
                    return undefined;
                }
            }
            var resolved = resolveObjectOrUnionTypeMembers(type);
            if (ts.hasProperty(resolved.members, name)) {
                var symbol = resolved.members[name];
                if (symbolIsValue(symbol)) {
                    return symbol;
                }
            }
            if (resolved === anyFunctionType || resolved.callSignatures.length || resolved.constructSignatures.length) {
                var symbol = getPropertyOfObjectType(globalFunctionType, name);
                if (symbol)
                    return symbol;
            }
            return getPropertyOfObjectType(globalObjectType, name);
        }
        function getSignaturesOfObjectOrUnionType(type, kind) {
            if (type.flags & (48128 | 16384)) {
                var resolved = resolveObjectOrUnionTypeMembers(type);
                return kind === 0 ? resolved.callSignatures : resolved.constructSignatures;
            }
            return emptyArray;
        }
        function getSignaturesOfType(type, kind) {
            return getSignaturesOfObjectOrUnionType(getApparentType(type), kind);
        }
        function getIndexTypeOfObjectOrUnionType(type, kind) {
            if (type.flags & (48128 | 16384)) {
                var resolved = resolveObjectOrUnionTypeMembers(type);
                return kind === 0 ? resolved.stringIndexType : resolved.numberIndexType;
            }
        }
        function getIndexTypeOfType(type, kind) {
            return getIndexTypeOfObjectOrUnionType(getApparentType(type), kind);
        }
        function getTypeParametersFromDeclaration(typeParameterDeclarations) {
            var result = [];
            ts.forEach(typeParameterDeclarations, function (node) {
                var tp = getDeclaredTypeOfTypeParameter(node.symbol);
                if (!ts.contains(result, tp)) {
                    result.push(tp);
                }
            });
            return result;
        }
        function getSignatureFromDeclaration(declaration) {
            var links = getNodeLinks(declaration);
            if (!links.resolvedSignature) {
                var classType = declaration.kind === 129 ? getDeclaredTypeOfClass(declaration.parent.symbol) : undefined;
                var typeParameters = classType ? classType.typeParameters : declaration.typeParameters ? getTypeParametersFromDeclaration(declaration.typeParameters) : undefined;
                var parameters = [];
                var hasStringLiterals = false;
                var minArgumentCount = -1;
                for (var i = 0, n = declaration.parameters.length; i < n; i++) {
                    var param = declaration.parameters[i];
                    parameters.push(param.symbol);
                    if (param.type && param.type.kind === 8) {
                        hasStringLiterals = true;
                    }
                    if (minArgumentCount < 0) {
                        if (param.initializer || param.questionToken || param.dotDotDotToken) {
                            minArgumentCount = i;
                        }
                    }
                }
                if (minArgumentCount < 0) {
                    minArgumentCount = declaration.parameters.length;
                }
                var returnType;
                if (classType) {
                    returnType = classType;
                }
                else if (declaration.type) {
                    returnType = getTypeFromTypeNode(declaration.type);
                }
                else {
                    if (declaration.kind === 130 && !ts.hasDynamicName(declaration)) {
                        var setter = ts.getDeclarationOfKind(declaration.symbol, 131);
                        returnType = getAnnotatedAccessorType(setter);
                    }
                    if (!returnType && ts.nodeIsMissing(declaration.body)) {
                        returnType = anyType;
                    }
                }
                links.resolvedSignature = createSignature(declaration, typeParameters, parameters, returnType, minArgumentCount, ts.hasRestParameters(declaration), hasStringLiterals);
            }
            return links.resolvedSignature;
        }
        function getSignaturesOfSymbol(symbol) {
            if (!symbol)
                return emptyArray;
            var result = [];
            for (var i = 0, len = symbol.declarations.length; i < len; i++) {
                var node = symbol.declarations[i];
                switch (node.kind) {
                    case 136:
                    case 137:
                    case 190:
                    case 128:
                    case 127:
                    case 129:
                    case 132:
                    case 133:
                    case 134:
                    case 130:
                    case 131:
                    case 156:
                    case 157:
                        if (i > 0 && node.body) {
                            var previous = symbol.declarations[i - 1];
                            if (node.parent === previous.parent && node.kind === previous.kind && node.pos === previous.end) {
                                break;
                            }
                        }
                        result.push(getSignatureFromDeclaration(node));
                }
            }
            return result;
        }
        function getReturnTypeOfSignature(signature) {
            if (!signature.resolvedReturnType) {
                signature.resolvedReturnType = resolvingType;
                if (signature.target) {
                    var type = instantiateType(getReturnTypeOfSignature(signature.target), signature.mapper);
                }
                else if (signature.unionSignatures) {
                    var type = getUnionType(ts.map(signature.unionSignatures, getReturnTypeOfSignature));
                }
                else {
                    var type = getReturnTypeFromBody(signature.declaration);
                }
                if (signature.resolvedReturnType === resolvingType) {
                    signature.resolvedReturnType = type;
                }
            }
            else if (signature.resolvedReturnType === resolvingType) {
                signature.resolvedReturnType = anyType;
                if (compilerOptions.noImplicitAny) {
                    var declaration = signature.declaration;
                    if (declaration.name) {
                        error(declaration.name, ts.Diagnostics._0_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions, ts.declarationNameToString(declaration.name));
                    }
                    else {
                        error(declaration, ts.Diagnostics.Function_implicitly_has_return_type_any_because_it_does_not_have_a_return_type_annotation_and_is_referenced_directly_or_indirectly_in_one_of_its_return_expressions);
                    }
                }
            }
            return signature.resolvedReturnType;
        }
        function getRestTypeOfSignature(signature) {
            if (signature.hasRestParameter) {
                var type = getTypeOfSymbol(signature.parameters[signature.parameters.length - 1]);
                if (type.flags & 4096 && type.target === globalArrayType) {
                    return type.typeArguments[0];
                }
            }
            return anyType;
        }
        function getSignatureInstantiation(signature, typeArguments) {
            return instantiateSignature(signature, createTypeMapper(signature.typeParameters, typeArguments), true);
        }
        function getErasedSignature(signature) {
            if (!signature.typeParameters)
                return signature;
            if (!signature.erasedSignatureCache) {
                if (signature.target) {
                    signature.erasedSignatureCache = instantiateSignature(getErasedSignature(signature.target), signature.mapper);
                }
                else {
                    signature.erasedSignatureCache = instantiateSignature(signature, createTypeEraser(signature.typeParameters), true);
                }
            }
            return signature.erasedSignatureCache;
        }
        function getOrCreateTypeFromSignature(signature) {
            if (!signature.isolatedSignatureType) {
                var isConstructor = signature.declaration.kind === 129 || signature.declaration.kind === 133;
                var type = createObjectType(32768 | 65536);
                type.members = emptySymbols;
                type.properties = emptyArray;
                type.callSignatures = !isConstructor ? [signature] : emptyArray;
                type.constructSignatures = isConstructor ? [signature] : emptyArray;
                signature.isolatedSignatureType = type;
            }
            return signature.isolatedSignatureType;
        }
        function getIndexSymbol(symbol) {
            return symbol.members["__index"];
        }
        function getIndexDeclarationOfSymbol(symbol, kind) {
            var syntaxKind = kind === 1 ? 117 : 119;
            var indexSymbol = getIndexSymbol(symbol);
            if (indexSymbol) {
                var len = indexSymbol.declarations.length;
                for (var i = 0; i < len; i++) {
                    var node = indexSymbol.declarations[i];
                    if (node.parameters.length === 1) {
                        var parameter = node.parameters[0];
                        if (parameter && parameter.type && parameter.type.kind === syntaxKind) {
                            return node;
                        }
                    }
                }
            }
            return undefined;
        }
        function getIndexTypeOfSymbol(symbol, kind) {
            var declaration = getIndexDeclarationOfSymbol(symbol, kind);
            return declaration ? declaration.type ? getTypeFromTypeNode(declaration.type) : anyType : undefined;
        }
        function getConstraintOfTypeParameter(type) {
            if (!type.constraint) {
                if (type.target) {
                    var targetConstraint = getConstraintOfTypeParameter(type.target);
                    type.constraint = targetConstraint ? instantiateType(targetConstraint, type.mapper) : noConstraintType;
                }
                else {
                    type.constraint = getTypeFromTypeNode(ts.getDeclarationOfKind(type.symbol, 123).constraint);
                }
            }
            return type.constraint === noConstraintType ? undefined : type.constraint;
        }
        function getTypeListId(types) {
            switch (types.length) {
                case 1:
                    return "" + types[0].id;
                case 2:
                    return types[0].id + "," + types[1].id;
                default:
                    var result = "";
                    for (var i = 0; i < types.length; i++) {
                        if (i > 0)
                            result += ",";
                        result += types[i].id;
                    }
                    return result;
            }
        }
        function getWideningFlagsOfTypes(types) {
            var result = 0;
            for (var i = 0; i < types.length; i++) {
                result |= types[i].flags;
            }
            return result & 786432;
        }
        function createTypeReference(target, typeArguments) {
            var id = getTypeListId(typeArguments);
            var type = target.instantiations[id];
            if (!type) {
                var flags = 4096 | getWideningFlagsOfTypes(typeArguments);
                type = target.instantiations[id] = createObjectType(flags, target.symbol);
                type.target = target;
                type.typeArguments = typeArguments;
            }
            return type;
        }
        function isTypeParameterReferenceIllegalInConstraint(typeReferenceNode, typeParameterSymbol) {
            var links = getNodeLinks(typeReferenceNode);
            if (links.isIllegalTypeReferenceInConstraint !== undefined) {
                return links.isIllegalTypeReferenceInConstraint;
            }
            var currentNode = typeReferenceNode;
            while (!ts.forEach(typeParameterSymbol.declarations, function (d) { return d.parent === currentNode.parent; })) {
                currentNode = currentNode.parent;
            }
            links.isIllegalTypeReferenceInConstraint = currentNode.kind === 123;
            return links.isIllegalTypeReferenceInConstraint;
        }
        function checkTypeParameterHasIllegalReferencesInConstraint(typeParameter) {
            var typeParameterSymbol;
            function check(n) {
                if (n.kind === 135 && n.typeName.kind === 64) {
                    var links = getNodeLinks(n);
                    if (links.isIllegalTypeReferenceInConstraint === undefined) {
                        var symbol = resolveName(typeParameter, n.typeName.text, 793056, undefined, undefined);
                        if (symbol && (symbol.flags & 262144)) {
                            links.isIllegalTypeReferenceInConstraint = ts.forEach(symbol.declarations, function (d) { return d.parent == typeParameter.parent; });
                        }
                    }
                    if (links.isIllegalTypeReferenceInConstraint) {
                        error(typeParameter, ts.Diagnostics.Constraint_of_a_type_parameter_cannot_reference_any_type_parameter_from_the_same_type_parameter_list);
                    }
                }
                ts.forEachChild(n, check);
            }
            if (typeParameter.constraint) {
                typeParameterSymbol = getSymbolOfNode(typeParameter);
                check(typeParameter.constraint);
            }
        }
        function getTypeFromTypeReferenceNode(node) {
            var links = getNodeLinks(node);
            if (!links.resolvedType) {
                var symbol = resolveEntityName(node, node.typeName, 793056);
                if (symbol) {
                    var type;
                    if ((symbol.flags & 262144) && isTypeParameterReferenceIllegalInConstraint(node, symbol)) {
                        type = unknownType;
                    }
                    else {
                        type = getDeclaredTypeOfSymbol(symbol);
                        if (type.flags & (1024 | 2048) && type.flags & 4096) {
                            var typeParameters = type.typeParameters;
                            if (node.typeArguments && node.typeArguments.length === typeParameters.length) {
                                type = createTypeReference(type, ts.map(node.typeArguments, getTypeFromTypeNode));
                            }
                            else {
                                error(node, ts.Diagnostics.Generic_type_0_requires_1_type_argument_s, typeToString(type, undefined, 1), typeParameters.length);
                                type = undefined;
                            }
                        }
                        else {
                            if (node.typeArguments) {
                                error(node, ts.Diagnostics.Type_0_is_not_generic, typeToString(type));
                                type = undefined;
                            }
                        }
                    }
                }
                links.resolvedType = type || unknownType;
            }
            return links.resolvedType;
        }
        function getTypeFromTypeQueryNode(node) {
            var links = getNodeLinks(node);
            if (!links.resolvedType) {
                links.resolvedType = getWidenedType(checkExpressionOrQualifiedName(node.exprName));
            }
            return links.resolvedType;
        }
        function getTypeOfGlobalSymbol(symbol, arity) {
            function getTypeDeclaration(symbol) {
                var declarations = symbol.declarations;
                for (var i = 0; i < declarations.length; i++) {
                    var declaration = declarations[i];
                    switch (declaration.kind) {
                        case 191:
                        case 192:
                        case 194:
                            return declaration;
                    }
                }
            }
            if (!symbol) {
                return emptyObjectType;
            }
            var type = getDeclaredTypeOfSymbol(symbol);
            if (!(type.flags & 48128)) {
                error(getTypeDeclaration(symbol), ts.Diagnostics.Global_type_0_must_be_a_class_or_interface_type, symbol.name);
                return emptyObjectType;
            }
            if ((type.typeParameters ? type.typeParameters.length : 0) !== arity) {
                error(getTypeDeclaration(symbol), ts.Diagnostics.Global_type_0_must_have_1_type_parameter_s, symbol.name, arity);
                return emptyObjectType;
            }
            return type;
        }
        function getGlobalSymbol(name) {
            return resolveName(undefined, name, 793056, ts.Diagnostics.Cannot_find_global_type_0, name);
        }
        function getGlobalType(name) {
            return getTypeOfGlobalSymbol(getGlobalSymbol(name), 0);
        }
        function createArrayType(elementType) {
            var arrayType = globalArrayType || getDeclaredTypeOfSymbol(globalArraySymbol);
            return arrayType !== emptyObjectType ? createTypeReference(arrayType, [elementType]) : emptyObjectType;
        }
        function getTypeFromArrayTypeNode(node) {
            var links = getNodeLinks(node);
            if (!links.resolvedType) {
                links.resolvedType = createArrayType(getTypeFromTypeNode(node.elementType));
            }
            return links.resolvedType;
        }
        function createTupleType(elementTypes) {
            var id = getTypeListId(elementTypes);
            var type = tupleTypes[id];
            if (!type) {
                type = tupleTypes[id] = createObjectType(8192);
                type.elementTypes = elementTypes;
            }
            return type;
        }
        function getTypeFromTupleTypeNode(node) {
            var links = getNodeLinks(node);
            if (!links.resolvedType) {
                links.resolvedType = createTupleType(ts.map(node.elementTypes, getTypeFromTypeNode));
            }
            return links.resolvedType;
        }
        function addTypeToSortedSet(sortedSet, type) {
            if (type.flags & 16384) {
                addTypesToSortedSet(sortedSet, type.types);
            }
            else {
                var i = 0;
                var id = type.id;
                while (i < sortedSet.length && sortedSet[i].id < id) {
                    i++;
                }
                if (i === sortedSet.length || sortedSet[i].id !== id) {
                    sortedSet.splice(i, 0, type);
                }
            }
        }
        function addTypesToSortedSet(sortedTypes, types) {
            for (var i = 0, len = types.length; i < len; i++) {
                addTypeToSortedSet(sortedTypes, types[i]);
            }
        }
        function isSubtypeOfAny(candidate, types) {
            for (var i = 0, len = types.length; i < len; i++) {
                if (candidate !== types[i] && isTypeSubtypeOf(candidate, types[i])) {
                    return true;
                }
            }
            return false;
        }
        function removeSubtypes(types) {
            var i = types.length;
            while (i > 0) {
                i--;
                if (isSubtypeOfAny(types[i], types)) {
                    types.splice(i, 1);
                }
            }
        }
        function containsAnyType(types) {
            for (var i = 0; i < types.length; i++) {
                if (types[i].flags & 1) {
                    return true;
                }
            }
            return false;
        }
        function removeAllButLast(types, typeToRemove) {
            var i = types.length;
            while (i > 0 && types.length > 1) {
                i--;
                if (types[i] === typeToRemove) {
                    types.splice(i, 1);
                }
            }
        }
        function getUnionType(types, noSubtypeReduction) {
            if (types.length === 0) {
                return emptyObjectType;
            }
            var sortedTypes = [];
            addTypesToSortedSet(sortedTypes, types);
            if (noSubtypeReduction) {
                if (containsAnyType(sortedTypes)) {
                    return anyType;
                }
                removeAllButLast(sortedTypes, undefinedType);
                removeAllButLast(sortedTypes, nullType);
            }
            else {
                removeSubtypes(sortedTypes);
            }
            if (sortedTypes.length === 1) {
                return sortedTypes[0];
            }
            var id = getTypeListId(sortedTypes);
            var type = unionTypes[id];
            if (!type) {
                type = unionTypes[id] = createObjectType(16384 | getWideningFlagsOfTypes(sortedTypes));
                type.types = sortedTypes;
            }
            return type;
        }
        function getTypeFromUnionTypeNode(node) {
            var links = getNodeLinks(node);
            if (!links.resolvedType) {
                links.resolvedType = getUnionType(ts.map(node.types, getTypeFromTypeNode), true);
            }
            return links.resolvedType;
        }
        function getTypeFromTypeLiteralOrFunctionOrConstructorTypeNode(node) {
            var links = getNodeLinks(node);
            if (!links.resolvedType) {
                links.resolvedType = createObjectType(32768, node.symbol);
            }
            return links.resolvedType;
        }
        function getStringLiteralType(node) {
            if (ts.hasProperty(stringLiteralTypes, node.text)) {
                return stringLiteralTypes[node.text];
            }
            var type = stringLiteralTypes[node.text] = createType(256);
            type.text = ts.getTextOfNode(node);
            return type;
        }
        function getTypeFromStringLiteral(node) {
            var links = getNodeLinks(node);
            if (!links.resolvedType) {
                links.resolvedType = getStringLiteralType(node);
            }
            return links.resolvedType;
        }
        function getTypeFromTypeNode(node) {
            switch (node.kind) {
                case 110:
                    return anyType;
                case 119:
                    return stringType;
                case 117:
                    return numberType;
                case 111:
                    return booleanType;
                case 98:
                    return voidType;
                case 8:
                    return getTypeFromStringLiteral(node);
                case 135:
                    return getTypeFromTypeReferenceNode(node);
                case 138:
                    return getTypeFromTypeQueryNode(node);
                case 140:
                    return getTypeFromArrayTypeNode(node);
                case 141:
                    return getTypeFromTupleTypeNode(node);
                case 142:
                    return getTypeFromUnionTypeNode(node);
                case 143:
                    return getTypeFromTypeNode(node.type);
                case 136:
                case 137:
                case 139:
                    return getTypeFromTypeLiteralOrFunctionOrConstructorTypeNode(node);
                case 64:
                case 121:
                    var symbol = getSymbolInfo(node);
                    return symbol && getDeclaredTypeOfSymbol(symbol);
                default:
                    return unknownType;
            }
        }
        function instantiateList(items, mapper, instantiator) {
            if (items && items.length) {
                var result = [];
                for (var i = 0; i < items.length; i++) {
                    result.push(instantiator(items[i], mapper));
                }
                return result;
            }
            return items;
        }
        function createUnaryTypeMapper(source, target) {
            return function (t) { return t === source ? target : t; };
        }
        function createBinaryTypeMapper(source1, target1, source2, target2) {
            return function (t) { return t === source1 ? target1 : t === source2 ? target2 : t; };
        }
        function createTypeMapper(sources, targets) {
            switch (sources.length) {
                case 1: return createUnaryTypeMapper(sources[0], targets[0]);
                case 2: return createBinaryTypeMapper(sources[0], targets[0], sources[1], targets[1]);
            }
            return function (t) {
                for (var i = 0; i < sources.length; i++) {
                    if (t === sources[i])
                        return targets[i];
                }
                return t;
            };
        }
        function createUnaryTypeEraser(source) {
            return function (t) { return t === source ? anyType : t; };
        }
        function createBinaryTypeEraser(source1, source2) {
            return function (t) { return t === source1 || t === source2 ? anyType : t; };
        }
        function createTypeEraser(sources) {
            switch (sources.length) {
                case 1: return createUnaryTypeEraser(sources[0]);
                case 2: return createBinaryTypeEraser(sources[0], sources[1]);
            }
            return function (t) {
                for (var i = 0; i < sources.length; i++) {
                    if (t === sources[i])
                        return anyType;
                }
                return t;
            };
        }
        function createInferenceMapper(context) {
            return function (t) {
                for (var i = 0; i < context.typeParameters.length; i++) {
                    if (t === context.typeParameters[i]) {
                        return getInferredType(context, i);
                    }
                }
                return t;
            };
        }
        function identityMapper(type) {
            return type;
        }
        function combineTypeMappers(mapper1, mapper2) {
            return function (t) { return mapper2(mapper1(t)); };
        }
        function instantiateTypeParameter(typeParameter, mapper) {
            var result = createType(512);
            result.symbol = typeParameter.symbol;
            if (typeParameter.constraint) {
                result.constraint = instantiateType(typeParameter.constraint, mapper);
            }
            else {
                result.target = typeParameter;
                result.mapper = mapper;
            }
            return result;
        }
        function instantiateSignature(signature, mapper, eraseTypeParameters) {
            if (signature.typeParameters && !eraseTypeParameters) {
                var freshTypeParameters = instantiateList(signature.typeParameters, mapper, instantiateTypeParameter);
                mapper = combineTypeMappers(createTypeMapper(signature.typeParameters, freshTypeParameters), mapper);
            }
            var result = createSignature(signature.declaration, freshTypeParameters, instantiateList(signature.parameters, mapper, instantiateSymbol), signature.resolvedReturnType ? instantiateType(signature.resolvedReturnType, mapper) : undefined, signature.minArgumentCount, signature.hasRestParameter, signature.hasStringLiterals);
            result.target = signature;
            result.mapper = mapper;
            return result;
        }
        function instantiateSymbol(symbol, mapper) {
            if (symbol.flags & 16777216) {
                var links = getSymbolLinks(symbol);
                symbol = links.target;
                mapper = combineTypeMappers(links.mapper, mapper);
            }
            var result = createSymbol(16777216 | 67108864 | symbol.flags, symbol.name);
            result.declarations = symbol.declarations;
            result.parent = symbol.parent;
            result.target = symbol;
            result.mapper = mapper;
            if (symbol.valueDeclaration) {
                result.valueDeclaration = symbol.valueDeclaration;
            }
            return result;
        }
        function instantiateAnonymousType(type, mapper) {
            var result = createObjectType(32768, type.symbol);
            result.properties = instantiateList(getPropertiesOfObjectType(type), mapper, instantiateSymbol);
            result.members = createSymbolTable(result.properties);
            result.callSignatures = instantiateList(getSignaturesOfType(type, 0), mapper, instantiateSignature);
            result.constructSignatures = instantiateList(getSignaturesOfType(type, 1), mapper, instantiateSignature);
            var stringIndexType = getIndexTypeOfType(type, 0);
            var numberIndexType = getIndexTypeOfType(type, 1);
            if (stringIndexType)
                result.stringIndexType = instantiateType(stringIndexType, mapper);
            if (numberIndexType)
                result.numberIndexType = instantiateType(numberIndexType, mapper);
            return result;
        }
        function instantiateType(type, mapper) {
            if (mapper !== identityMapper) {
                if (type.flags & 512) {
                    return mapper(type);
                }
                if (type.flags & 32768) {
                    return type.symbol && type.symbol.flags & (16 | 8192 | 2048 | 4096) ? instantiateAnonymousType(type, mapper) : type;
                }
                if (type.flags & 4096) {
                    return createTypeReference(type.target, instantiateList(type.typeArguments, mapper, instantiateType));
                }
                if (type.flags & 8192) {
                    return createTupleType(instantiateList(type.elementTypes, mapper, instantiateType));
                }
                if (type.flags & 16384) {
                    return getUnionType(instantiateList(type.types, mapper, instantiateType), true);
                }
            }
            return type;
        }
        function isContextSensitive(node) {
            ts.Debug.assert(node.kind !== 128 || ts.isObjectLiteralMethod(node));
            switch (node.kind) {
                case 156:
                case 157:
                    return isContextSensitiveFunctionLikeDeclaration(node);
                case 148:
                    return ts.forEach(node.properties, isContextSensitive);
                case 147:
                    return ts.forEach(node.elements, isContextSensitive);
                case 164:
                    return isContextSensitive(node.whenTrue) || isContextSensitive(node.whenFalse);
                case 163:
                    return node.operator === 49 && (isContextSensitive(node.left) || isContextSensitive(node.right));
                case 204:
                    return isContextSensitive(node.initializer);
                case 128:
                case 127:
                    return isContextSensitiveFunctionLikeDeclaration(node);
                case 155:
                    return isContextSensitive(node.expression);
            }
            return false;
        }
        function isContextSensitiveFunctionLikeDeclaration(node) {
            return !node.typeParameters && node.parameters.length && !ts.forEach(node.parameters, function (p) { return p.type; });
        }
        function getTypeWithoutConstructors(type) {
            if (type.flags & 48128) {
                var resolved = resolveObjectOrUnionTypeMembers(type);
                if (resolved.constructSignatures.length) {
                    var result = createObjectType(32768, type.symbol);
                    result.members = resolved.members;
                    result.properties = resolved.properties;
                    result.callSignatures = resolved.callSignatures;
                    result.constructSignatures = emptyArray;
                    type = result;
                }
            }
            return type;
        }
        var subtypeRelation = {};
        var assignableRelation = {};
        var identityRelation = {};
        function isTypeIdenticalTo(source, target) {
            return checkTypeRelatedTo(source, target, identityRelation, undefined);
        }
        function compareTypes(source, target) {
            return checkTypeRelatedTo(source, target, identityRelation, undefined) ? -1 : 0;
        }
        function isTypeSubtypeOf(source, target) {
            return checkTypeSubtypeOf(source, target, undefined);
        }
        function isTypeAssignableTo(source, target) {
            return checkTypeAssignableTo(source, target, undefined);
        }
        function checkTypeSubtypeOf(source, target, errorNode, headMessage, containingMessageChain) {
            return checkTypeRelatedTo(source, target, subtypeRelation, errorNode, headMessage, containingMessageChain);
        }
        function checkTypeAssignableTo(source, target, errorNode, headMessage) {
            return checkTypeRelatedTo(source, target, assignableRelation, errorNode, headMessage);
        }
        function isSignatureAssignableTo(source, target) {
            var sourceType = getOrCreateTypeFromSignature(source);
            var targetType = getOrCreateTypeFromSignature(target);
            return checkTypeRelatedTo(sourceType, targetType, assignableRelation, undefined);
        }
        function checkTypeRelatedTo(source, target, relation, errorNode, headMessage, containingMessageChain) {
            var errorInfo;
            var sourceStack;
            var targetStack;
            var maybeStack;
            var expandingFlags;
            var depth = 0;
            var overflow = false;
            ts.Debug.assert(relation !== identityRelation || !errorNode, "no error reporting in identity checking");
            var result = isRelatedTo(source, target, errorNode !== undefined, headMessage);
            if (overflow) {
                error(errorNode, ts.Diagnostics.Excessive_stack_depth_comparing_types_0_and_1, typeToString(source), typeToString(target));
            }
            else if (errorInfo) {
                if (errorInfo.next === undefined) {
                    errorInfo = undefined;
                    isRelatedTo(source, target, errorNode !== undefined, headMessage, true);
                }
                if (containingMessageChain) {
                    errorInfo = ts.concatenateDiagnosticMessageChains(containingMessageChain, errorInfo);
                }
                diagnostics.add(ts.createDiagnosticForNodeFromMessageChain(errorNode, errorInfo));
            }
            return result !== 0;
            function reportError(message, arg0, arg1, arg2) {
                errorInfo = ts.chainDiagnosticMessages(errorInfo, message, arg0, arg1, arg2);
            }
            function isRelatedTo(source, target, reportErrors, headMessage, elaborateErrors) {
                if (elaborateErrors === void 0) { elaborateErrors = false; }
                var result;
                if (source === target)
                    return -1;
                if (relation !== identityRelation) {
                    if (target.flags & 1)
                        return -1;
                    if (source === undefinedType)
                        return -1;
                    if (source === nullType && target !== undefinedType)
                        return -1;
                    if (source.flags & 128 && target === numberType)
                        return -1;
                    if (source.flags & 256 && target === stringType)
                        return -1;
                    if (relation === assignableRelation) {
                        if (source.flags & 1)
                            return -1;
                        if (source === numberType && target.flags & 128)
                            return -1;
                    }
                }
                if (source.flags & 16384 || target.flags & 16384) {
                    if (relation === identityRelation) {
                        if (source.flags & 16384 && target.flags & 16384) {
                            if (result = unionTypeRelatedToUnionType(source, target)) {
                                if (result &= unionTypeRelatedToUnionType(target, source)) {
                                    return result;
                                }
                            }
                        }
                        else if (source.flags & 16384) {
                            if (result = unionTypeRelatedToType(source, target, reportErrors)) {
                                return result;
                            }
                        }
                        else {
                            if (result = unionTypeRelatedToType(target, source, reportErrors)) {
                                return result;
                            }
                        }
                    }
                    else {
                        if (source.flags & 16384) {
                            if (result = unionTypeRelatedToType(source, target, reportErrors)) {
                                return result;
                            }
                        }
                        else {
                            if (result = typeRelatedToUnionType(source, target, reportErrors)) {
                                return result;
                            }
                        }
                    }
                }
                else if (source.flags & 512 && target.flags & 512) {
                    if (result = typeParameterRelatedTo(source, target, reportErrors)) {
                        return result;
                    }
                }
                else {
                    var saveErrorInfo = errorInfo;
                    if (source.flags & 4096 && target.flags & 4096 && source.target === target.target) {
                        if (result = typesRelatedTo(source.typeArguments, target.typeArguments, reportErrors)) {
                            return result;
                        }
                    }
                    var reportStructuralErrors = reportErrors && errorInfo === saveErrorInfo;
                    var sourceOrApparentType = relation === identityRelation ? source : getApparentType(source);
                    if (sourceOrApparentType.flags & 48128 && target.flags & 48128 && (result = objectTypeRelatedTo(sourceOrApparentType, target, reportStructuralErrors, elaborateErrors))) {
                        errorInfo = saveErrorInfo;
                        return result;
                    }
                }
                if (reportErrors) {
                    headMessage = headMessage || ts.Diagnostics.Type_0_is_not_assignable_to_type_1;
                    var sourceType = typeToString(source);
                    var targetType = typeToString(target);
                    if (sourceType === targetType) {
                        sourceType = typeToString(source, undefined, 128);
                        targetType = typeToString(target, undefined, 128);
                    }
                    reportError(headMessage, sourceType, targetType);
                }
                return 0;
            }
            function unionTypeRelatedToUnionType(source, target) {
                var result = -1;
                var sourceTypes = source.types;
                for (var i = 0, len = sourceTypes.length; i < len; i++) {
                    var related = typeRelatedToUnionType(sourceTypes[i], target, false);
                    if (!related) {
                        return 0;
                    }
                    result &= related;
                }
                return result;
            }
            function typeRelatedToUnionType(source, target, reportErrors) {
                var targetTypes = target.types;
                for (var i = 0, len = targetTypes.length; i < len; i++) {
                    var related = isRelatedTo(source, targetTypes[i], reportErrors && i === len - 1);
                    if (related) {
                        return related;
                    }
                }
                return 0;
            }
            function unionTypeRelatedToType(source, target, reportErrors) {
                var result = -1;
                var sourceTypes = source.types;
                for (var i = 0, len = sourceTypes.length; i < len; i++) {
                    var related = isRelatedTo(sourceTypes[i], target, reportErrors);
                    if (!related) {
                        return 0;
                    }
                    result &= related;
                }
                return result;
            }
            function typesRelatedTo(sources, targets, reportErrors) {
                var result = -1;
                for (var i = 0, len = sources.length; i < len; i++) {
                    var related = isRelatedTo(sources[i], targets[i], reportErrors);
                    if (!related) {
                        return 0;
                    }
                    result &= related;
                }
                return result;
            }
            function typeParameterRelatedTo(source, target, reportErrors) {
                if (relation === identityRelation) {
                    if (source.symbol.name !== target.symbol.name) {
                        return 0;
                    }
                    if (source.constraint === target.constraint) {
                        return -1;
                    }
                    if (source.constraint === noConstraintType || target.constraint === noConstraintType) {
                        return 0;
                    }
                    return isRelatedTo(source.constraint, target.constraint, reportErrors);
                }
                else {
                    while (true) {
                        var constraint = getConstraintOfTypeParameter(source);
                        if (constraint === target)
                            return -1;
                        if (!(constraint && constraint.flags & 512))
                            break;
                        source = constraint;
                    }
                    return 0;
                }
            }
            function objectTypeRelatedTo(source, target, reportErrors, elaborateErrors) {
                if (elaborateErrors === void 0) { elaborateErrors = false; }
                if (overflow) {
                    return 0;
                }
                var id = relation !== identityRelation || source.id < target.id ? source.id + "," + target.id : target.id + "," + source.id;
                var related = relation[id];
                if (related !== undefined) {
                    if (!elaborateErrors || (related === 3)) {
                        return related === 1 ? -1 : 0;
                    }
                }
                if (depth > 0) {
                    for (var i = 0; i < depth; i++) {
                        if (maybeStack[i][id]) {
                            return 1;
                        }
                    }
                    if (depth === 100) {
                        overflow = true;
                        return 0;
                    }
                }
                else {
                    sourceStack = [];
                    targetStack = [];
                    maybeStack = [];
                    expandingFlags = 0;
                }
                sourceStack[depth] = source;
                targetStack[depth] = target;
                maybeStack[depth] = {};
                maybeStack[depth][id] = 1;
                depth++;
                var saveExpandingFlags = expandingFlags;
                if (!(expandingFlags & 1) && isDeeplyNestedGeneric(source, sourceStack))
                    expandingFlags |= 1;
                if (!(expandingFlags & 2) && isDeeplyNestedGeneric(target, targetStack))
                    expandingFlags |= 2;
                if (expandingFlags === 3) {
                    var result = 1;
                }
                else {
                    var result = propertiesRelatedTo(source, target, reportErrors);
                    if (result) {
                        result &= signaturesRelatedTo(source, target, 0, reportErrors);
                        if (result) {
                            result &= signaturesRelatedTo(source, target, 1, reportErrors);
                            if (result) {
                                result &= stringIndexTypesRelatedTo(source, target, reportErrors);
                                if (result) {
                                    result &= numberIndexTypesRelatedTo(source, target, reportErrors);
                                }
                            }
                        }
                    }
                }
                expandingFlags = saveExpandingFlags;
                depth--;
                if (result) {
                    var maybeCache = maybeStack[depth];
                    var destinationCache = (result === -1 || depth === 0) ? relation : maybeStack[depth - 1];
                    ts.copyMap(maybeCache, destinationCache);
                }
                else {
                    relation[id] = reportErrors ? 3 : 2;
                }
                return result;
            }
            function isDeeplyNestedGeneric(type, stack) {
                if (type.flags & 4096 && depth >= 10) {
                    var target = type.target;
                    var count = 0;
                    for (var i = 0; i < depth; i++) {
                        var t = stack[i];
                        if (t.flags & 4096 && t.target === target) {
                            count++;
                            if (count >= 10)
                                return true;
                        }
                    }
                }
                return false;
            }
            function propertiesRelatedTo(source, target, reportErrors) {
                if (relation === identityRelation) {
                    return propertiesIdenticalTo(source, target);
                }
                var result = -1;
                var properties = getPropertiesOfObjectType(target);
                var requireOptionalProperties = relation === subtypeRelation && !(source.flags & 131072);
                for (var i = 0; i < properties.length; i++) {
                    var targetProp = properties[i];
                    var sourceProp = getPropertyOfType(source, targetProp.name);
                    if (sourceProp !== targetProp) {
                        if (!sourceProp) {
                            if (!(targetProp.flags & 536870912) || requireOptionalProperties) {
                                if (reportErrors) {
                                    reportError(ts.Diagnostics.Property_0_is_missing_in_type_1, symbolToString(targetProp), typeToString(source));
                                }
                                return 0;
                            }
                        }
                        else if (!(targetProp.flags & 134217728)) {
                            var sourceFlags = getDeclarationFlagsFromSymbol(sourceProp);
                            var targetFlags = getDeclarationFlagsFromSymbol(targetProp);
                            if (sourceFlags & 32 || targetFlags & 32) {
                                if (sourceProp.valueDeclaration !== targetProp.valueDeclaration) {
                                    if (reportErrors) {
                                        if (sourceFlags & 32 && targetFlags & 32) {
                                            reportError(ts.Diagnostics.Types_have_separate_declarations_of_a_private_property_0, symbolToString(targetProp));
                                        }
                                        else {
                                            reportError(ts.Diagnostics.Property_0_is_private_in_type_1_but_not_in_type_2, symbolToString(targetProp), typeToString(sourceFlags & 32 ? source : target), typeToString(sourceFlags & 32 ? target : source));
                                        }
                                    }
                                    return 0;
                                }
                            }
                            else if (targetFlags & 64) {
                                var sourceDeclaredInClass = sourceProp.parent && sourceProp.parent.flags & 32;
                                var sourceClass = sourceDeclaredInClass ? getDeclaredTypeOfSymbol(sourceProp.parent) : undefined;
                                var targetClass = getDeclaredTypeOfSymbol(targetProp.parent);
                                if (!sourceClass || !hasBaseType(sourceClass, targetClass)) {
                                    if (reportErrors) {
                                        reportError(ts.Diagnostics.Property_0_is_protected_but_type_1_is_not_a_class_derived_from_2, symbolToString(targetProp), typeToString(sourceClass || source), typeToString(targetClass));
                                    }
                                    return 0;
                                }
                            }
                            else if (sourceFlags & 64) {
                                if (reportErrors) {
                                    reportError(ts.Diagnostics.Property_0_is_protected_in_type_1_but_public_in_type_2, symbolToString(targetProp), typeToString(source), typeToString(target));
                                }
                                return 0;
                            }
                            var related = isRelatedTo(getTypeOfSymbol(sourceProp), getTypeOfSymbol(targetProp), reportErrors);
                            if (!related) {
                                if (reportErrors) {
                                    reportError(ts.Diagnostics.Types_of_property_0_are_incompatible, symbolToString(targetProp));
                                }
                                return 0;
                            }
                            result &= related;
                            if (sourceProp.flags & 536870912 && !(targetProp.flags & 536870912)) {
                                if (reportErrors) {
                                    reportError(ts.Diagnostics.Property_0_is_optional_in_type_1_but_required_in_type_2, symbolToString(targetProp), typeToString(source), typeToString(target));
                                }
                                return 0;
                            }
                        }
                    }
                }
                return result;
            }
            function propertiesIdenticalTo(source, target) {
                var sourceProperties = getPropertiesOfObjectType(source);
                var targetProperties = getPropertiesOfObjectType(target);
                if (sourceProperties.length !== targetProperties.length) {
                    return 0;
                }
                var result = -1;
                for (var i = 0, len = sourceProperties.length; i < len; ++i) {
                    var sourceProp = sourceProperties[i];
                    var targetProp = getPropertyOfObjectType(target, sourceProp.name);
                    if (!targetProp) {
                        return 0;
                    }
                    var related = compareProperties(sourceProp, targetProp, isRelatedTo);
                    if (!related) {
                        return 0;
                    }
                    result &= related;
                }
                return result;
            }
            function signaturesRelatedTo(source, target, kind, reportErrors) {
                if (relation === identityRelation) {
                    return signaturesIdenticalTo(source, target, kind);
                }
                if (target === anyFunctionType || source === anyFunctionType) {
                    return -1;
                }
                var sourceSignatures = getSignaturesOfType(source, kind);
                var targetSignatures = getSignaturesOfType(target, kind);
                var result = -1;
                var saveErrorInfo = errorInfo;
                outer: for (var i = 0; i < targetSignatures.length; i++) {
                    var t = targetSignatures[i];
                    if (!t.hasStringLiterals || target.flags & 65536) {
                        var localErrors = reportErrors;
                        for (var j = 0; j < sourceSignatures.length; j++) {
                            var s = sourceSignatures[j];
                            if (!s.hasStringLiterals || source.flags & 65536) {
                                var related = signatureRelatedTo(s, t, localErrors);
                                if (related) {
                                    result &= related;
                                    errorInfo = saveErrorInfo;
                                    continue outer;
                                }
                                localErrors = false;
                            }
                        }
                        return 0;
                    }
                }
                return result;
            }
            function signatureRelatedTo(source, target, reportErrors) {
                if (source === target) {
                    return -1;
                }
                if (!target.hasRestParameter && source.minArgumentCount > target.parameters.length) {
                    return 0;
                }
                var sourceMax = source.parameters.length;
                var targetMax = target.parameters.length;
                var checkCount;
                if (source.hasRestParameter && target.hasRestParameter) {
                    checkCount = sourceMax > targetMax ? sourceMax : targetMax;
                    sourceMax--;
                    targetMax--;
                }
                else if (source.hasRestParameter) {
                    sourceMax--;
                    checkCount = targetMax;
                }
                else if (target.hasRestParameter) {
                    targetMax--;
                    checkCount = sourceMax;
                }
                else {
                    checkCount = sourceMax < targetMax ? sourceMax : targetMax;
                }
                source = getErasedSignature(source);
                target = getErasedSignature(target);
                var result = -1;
                for (var i = 0; i < checkCount; i++) {
                    var s = i < sourceMax ? getTypeOfSymbol(source.parameters[i]) : getRestTypeOfSignature(source);
                    var t = i < targetMax ? getTypeOfSymbol(target.parameters[i]) : getRestTypeOfSignature(target);
                    var saveErrorInfo = errorInfo;
                    var related = isRelatedTo(s, t, reportErrors);
                    if (!related) {
                        related = isRelatedTo(t, s, false);
                        if (!related) {
                            if (reportErrors) {
                                reportError(ts.Diagnostics.Types_of_parameters_0_and_1_are_incompatible, source.parameters[i < sourceMax ? i : sourceMax].name, target.parameters[i < targetMax ? i : targetMax].name);
                            }
                            return 0;
                        }
                        errorInfo = saveErrorInfo;
                    }
                    result &= related;
                }
                var t = getReturnTypeOfSignature(target);
                if (t === voidType)
                    return result;
                var s = getReturnTypeOfSignature(source);
                return result & isRelatedTo(s, t, reportErrors);
            }
            function signaturesIdenticalTo(source, target, kind) {
                var sourceSignatures = getSignaturesOfType(source, kind);
                var targetSignatures = getSignaturesOfType(target, kind);
                if (sourceSignatures.length !== targetSignatures.length) {
                    return 0;
                }
                var result = -1;
                for (var i = 0, len = sourceSignatures.length; i < len; ++i) {
                    var related = compareSignatures(sourceSignatures[i], targetSignatures[i], true, isRelatedTo);
                    if (!related) {
                        return 0;
                    }
                    result &= related;
                }
                return result;
            }
            function stringIndexTypesRelatedTo(source, target, reportErrors) {
                if (relation === identityRelation) {
                    return indexTypesIdenticalTo(0, source, target);
                }
                var targetType = getIndexTypeOfType(target, 0);
                if (targetType) {
                    var sourceType = getIndexTypeOfType(source, 0);
                    if (!sourceType) {
                        if (reportErrors) {
                            reportError(ts.Diagnostics.Index_signature_is_missing_in_type_0, typeToString(source));
                        }
                        return 0;
                    }
                    var related = isRelatedTo(sourceType, targetType, reportErrors);
                    if (!related) {
                        if (reportErrors) {
                            reportError(ts.Diagnostics.Index_signatures_are_incompatible);
                        }
                        return 0;
                    }
                    return related;
                }
                return -1;
            }
            function numberIndexTypesRelatedTo(source, target, reportErrors) {
                if (relation === identityRelation) {
                    return indexTypesIdenticalTo(1, source, target);
                }
                var targetType = getIndexTypeOfType(target, 1);
                if (targetType) {
                    var sourceStringType = getIndexTypeOfType(source, 0);
                    var sourceNumberType = getIndexTypeOfType(source, 1);
                    if (!(sourceStringType || sourceNumberType)) {
                        if (reportErrors) {
                            reportError(ts.Diagnostics.Index_signature_is_missing_in_type_0, typeToString(source));
                        }
                        return 0;
                    }
                    if (sourceStringType && sourceNumberType) {
                        var related = isRelatedTo(sourceStringType, targetType, false) || isRelatedTo(sourceNumberType, targetType, reportErrors);
                    }
                    else {
                        var related = isRelatedTo(sourceStringType || sourceNumberType, targetType, reportErrors);
                    }
                    if (!related) {
                        if (reportErrors) {
                            reportError(ts.Diagnostics.Index_signatures_are_incompatible);
                        }
                        return 0;
                    }
                    return related;
                }
                return -1;
            }
            function indexTypesIdenticalTo(indexKind, source, target) {
                var targetType = getIndexTypeOfType(target, indexKind);
                var sourceType = getIndexTypeOfType(source, indexKind);
                if (!sourceType && !targetType) {
                    return -1;
                }
                if (sourceType && targetType) {
                    return isRelatedTo(sourceType, targetType);
                }
                return 0;
            }
        }
        function isPropertyIdenticalTo(sourceProp, targetProp) {
            return compareProperties(sourceProp, targetProp, compareTypes) !== 0;
        }
        function compareProperties(sourceProp, targetProp, compareTypes) {
            if (sourceProp === targetProp) {
                return -1;
            }
            var sourcePropAccessibility = getDeclarationFlagsFromSymbol(sourceProp) & (32 | 64);
            var targetPropAccessibility = getDeclarationFlagsFromSymbol(targetProp) & (32 | 64);
            if (sourcePropAccessibility !== targetPropAccessibility) {
                return 0;
            }
            if (sourcePropAccessibility) {
                if (getTargetSymbol(sourceProp) !== getTargetSymbol(targetProp)) {
                    return 0;
                }
            }
            else {
                if ((sourceProp.flags & 536870912) !== (targetProp.flags & 536870912)) {
                    return 0;
                }
            }
            return compareTypes(getTypeOfSymbol(sourceProp), getTypeOfSymbol(targetProp));
        }
        function compareSignatures(source, target, compareReturnTypes, compareTypes) {
            if (source === target) {
                return -1;
            }
            if (source.parameters.length !== target.parameters.length || source.minArgumentCount !== target.minArgumentCount || source.hasRestParameter !== target.hasRestParameter) {
                return 0;
            }
            var result = -1;
            if (source.typeParameters && target.typeParameters) {
                if (source.typeParameters.length !== target.typeParameters.length) {
                    return 0;
                }
                for (var i = 0, len = source.typeParameters.length; i < len; ++i) {
                    var related = compareTypes(source.typeParameters[i], target.typeParameters[i]);
                    if (!related) {
                        return 0;
                    }
                    result &= related;
                }
            }
            else if (source.typeParameters || target.typeParameters) {
                return 0;
            }
            source = getErasedSignature(source);
            target = getErasedSignature(target);
            for (var i = 0, len = source.parameters.length; i < len; i++) {
                var s = source.hasRestParameter && i === len - 1 ? getRestTypeOfSignature(source) : getTypeOfSymbol(source.parameters[i]);
                var t = target.hasRestParameter && i === len - 1 ? getRestTypeOfSignature(target) : getTypeOfSymbol(target.parameters[i]);
                var related = compareTypes(s, t);
                if (!related) {
                    return 0;
                }
                result &= related;
            }
            if (compareReturnTypes) {
                result &= compareTypes(getReturnTypeOfSignature(source), getReturnTypeOfSignature(target));
            }
            return result;
        }
        function isSupertypeOfEach(candidate, types) {
            for (var i = 0, len = types.length; i < len; i++) {
                if (candidate !== types[i] && !isTypeSubtypeOf(types[i], candidate))
                    return false;
            }
            return true;
        }
        function getCommonSupertype(types) {
            return ts.forEach(types, function (t) { return isSupertypeOfEach(t, types) ? t : undefined; });
        }
        function reportNoCommonSupertypeError(types, errorLocation, errorMessageChainHead) {
            var bestSupertype;
            var bestSupertypeDownfallType;
            var bestSupertypeScore = 0;
            for (var i = 0; i < types.length; i++) {
                var score = 0;
                var downfallType = undefined;
                for (var j = 0; j < types.length; j++) {
                    if (isTypeSubtypeOf(types[j], types[i])) {
                        score++;
                    }
                    else if (!downfallType) {
                        downfallType = types[j];
                    }
                }
                if (score > bestSupertypeScore) {
                    bestSupertype = types[i];
                    bestSupertypeDownfallType = downfallType;
                    bestSupertypeScore = score;
                }
                if (bestSupertypeScore === types.length - 1) {
                    break;
                }
            }
            checkTypeSubtypeOf(bestSupertypeDownfallType, bestSupertype, errorLocation, ts.Diagnostics.Type_argument_candidate_1_is_not_a_valid_type_argument_because_it_is_not_a_supertype_of_candidate_0, errorMessageChainHead);
        }
        function isArrayType(type) {
            return type.flags & 4096 && type.target === globalArrayType;
        }
        function isTupleLikeType(type) {
            return !!getPropertyOfType(type, "0");
        }
        function getWidenedTypeOfObjectLiteral(type) {
            var properties = getPropertiesOfObjectType(type);
            var members = {};
            ts.forEach(properties, function (p) {
                var propType = getTypeOfSymbol(p);
                var widenedType = getWidenedType(propType);
                if (propType !== widenedType) {
                    var symbol = createSymbol(p.flags | 67108864, p.name);
                    symbol.declarations = p.declarations;
                    symbol.parent = p.parent;
                    symbol.type = widenedType;
                    symbol.target = p;
                    if (p.valueDeclaration)
                        symbol.valueDeclaration = p.valueDeclaration;
                    p = symbol;
                }
                members[p.name] = p;
            });
            var stringIndexType = getIndexTypeOfType(type, 0);
            var numberIndexType = getIndexTypeOfType(type, 1);
            if (stringIndexType)
                stringIndexType = getWidenedType(stringIndexType);
            if (numberIndexType)
                numberIndexType = getWidenedType(numberIndexType);
            return createAnonymousType(type.symbol, members, emptyArray, emptyArray, stringIndexType, numberIndexType);
        }
        function getWidenedType(type) {
            if (type.flags & 786432) {
                if (type.flags & (32 | 64)) {
                    return anyType;
                }
                if (type.flags & 131072) {
                    return getWidenedTypeOfObjectLiteral(type);
                }
                if (type.flags & 16384) {
                    return getUnionType(ts.map(type.types, getWidenedType));
                }
                if (isArrayType(type)) {
                    return createArrayType(getWidenedType(type.typeArguments[0]));
                }
            }
            return type;
        }
        function reportWideningErrorsInType(type) {
            if (type.flags & 16384) {
                var errorReported = false;
                ts.forEach(type.types, function (t) {
                    if (reportWideningErrorsInType(t)) {
                        errorReported = true;
                    }
                });
                return errorReported;
            }
            if (isArrayType(type)) {
                return reportWideningErrorsInType(type.typeArguments[0]);
            }
            if (type.flags & 131072) {
                var errorReported = false;
                ts.forEach(getPropertiesOfObjectType(type), function (p) {
                    var t = getTypeOfSymbol(p);
                    if (t.flags & 262144) {
                        if (!reportWideningErrorsInType(t)) {
                            error(p.valueDeclaration, ts.Diagnostics.Object_literal_s_property_0_implicitly_has_an_1_type, p.name, typeToString(getWidenedType(t)));
                        }
                        errorReported = true;
                    }
                });
                return errorReported;
            }
            return false;
        }
        function reportImplicitAnyError(declaration, type) {
            var typeAsString = typeToString(getWidenedType(type));
            switch (declaration.kind) {
                case 126:
                case 125:
                    var diagnostic = ts.Diagnostics.Member_0_implicitly_has_an_1_type;
                    break;
                case 124:
                    var diagnostic = declaration.dotDotDotToken ? ts.Diagnostics.Rest_parameter_0_implicitly_has_an_any_type : ts.Diagnostics.Parameter_0_implicitly_has_an_1_type;
                    break;
                case 190:
                case 128:
                case 127:
                case 130:
                case 131:
                case 156:
                case 157:
                    if (!declaration.name) {
                        error(declaration, ts.Diagnostics.Function_expression_which_lacks_return_type_annotation_implicitly_has_an_0_return_type, typeAsString);
                        return;
                    }
                    var diagnostic = ts.Diagnostics._0_which_lacks_return_type_annotation_implicitly_has_an_1_return_type;
                    break;
                default:
                    var diagnostic = ts.Diagnostics.Variable_0_implicitly_has_an_1_type;
            }
            error(declaration, diagnostic, ts.declarationNameToString(declaration.name), typeAsString);
        }
        function reportErrorsFromWidening(declaration, type) {
            if (produceDiagnostics && compilerOptions.noImplicitAny && type.flags & 262144) {
                if (!reportWideningErrorsInType(type)) {
                    reportImplicitAnyError(declaration, type);
                }
            }
        }
        function forEachMatchingParameterType(source, target, callback) {
            var sourceMax = source.parameters.length;
            var targetMax = target.parameters.length;
            var count;
            if (source.hasRestParameter && target.hasRestParameter) {
                count = sourceMax > targetMax ? sourceMax : targetMax;
                sourceMax--;
                targetMax--;
            }
            else if (source.hasRestParameter) {
                sourceMax--;
                count = targetMax;
            }
            else if (target.hasRestParameter) {
                targetMax--;
                count = sourceMax;
            }
            else {
                count = sourceMax < targetMax ? sourceMax : targetMax;
            }
            for (var i = 0; i < count; i++) {
                var s = i < sourceMax ? getTypeOfSymbol(source.parameters[i]) : getRestTypeOfSignature(source);
                var t = i < targetMax ? getTypeOfSymbol(target.parameters[i]) : getRestTypeOfSignature(target);
                callback(s, t);
            }
        }
        function createInferenceContext(typeParameters, inferUnionTypes) {
            var inferences = [];
            for (var i = 0; i < typeParameters.length; i++) {
                inferences.push({ primary: undefined, secondary: undefined });
            }
            return {
                typeParameters: typeParameters,
                inferUnionTypes: inferUnionTypes,
                inferenceCount: 0,
                inferences: inferences,
                inferredTypes: new Array(typeParameters.length)
            };
        }
        function inferTypes(context, source, target) {
            var sourceStack;
            var targetStack;
            var depth = 0;
            var inferiority = 0;
            inferFromTypes(source, target);
            function isInProcess(source, target) {
                for (var i = 0; i < depth; i++) {
                    if (source === sourceStack[i] && target === targetStack[i])
                        return true;
                }
                return false;
            }
            function isWithinDepthLimit(type, stack) {
                if (depth >= 5) {
                    var target = type.target;
                    var count = 0;
                    for (var i = 0; i < depth; i++) {
                        var t = stack[i];
                        if (t.flags & 4096 && t.target === target)
                            count++;
                    }
                    return count < 5;
                }
                return true;
            }
            function inferFromTypes(source, target) {
                if (source === anyFunctionType) {
                    return;
                }
                if (target.flags & 512) {
                    var typeParameters = context.typeParameters;
                    for (var i = 0; i < typeParameters.length; i++) {
                        if (target === typeParameters[i]) {
                            var inferences = context.inferences[i];
                            var candidates = inferiority ? inferences.secondary || (inferences.secondary = []) : inferences.primary || (inferences.primary = []);
                            if (!ts.contains(candidates, source))
                                candidates.push(source);
                            break;
                        }
                    }
                }
                else if (source.flags & 4096 && target.flags & 4096 && source.target === target.target) {
                    var sourceTypes = source.typeArguments;
                    var targetTypes = target.typeArguments;
                    for (var i = 0; i < sourceTypes.length; i++) {
                        inferFromTypes(sourceTypes[i], targetTypes[i]);
                    }
                }
                else if (target.flags & 16384) {
                    var targetTypes = target.types;
                    var typeParameterCount = 0;
                    var typeParameter;
                    for (var i = 0; i < targetTypes.length; i++) {
                        var t = targetTypes[i];
                        if (t.flags & 512 && ts.contains(context.typeParameters, t)) {
                            typeParameter = t;
                            typeParameterCount++;
                        }
                        else {
                            inferFromTypes(source, t);
                        }
                    }
                    if (typeParameterCount === 1) {
                        inferiority++;
                        inferFromTypes(source, typeParameter);
                        inferiority--;
                    }
                }
                else if (source.flags & 16384) {
                    var sourceTypes = source.types;
                    for (var i = 0; i < sourceTypes.length; i++) {
                        inferFromTypes(sourceTypes[i], target);
                    }
                }
                else if (source.flags & 48128 && (target.flags & (4096 | 8192) || (target.flags & 32768) && target.symbol && target.symbol.flags & (8192 | 2048))) {
                    if (!isInProcess(source, target) && isWithinDepthLimit(source, sourceStack) && isWithinDepthLimit(target, targetStack)) {
                        if (depth === 0) {
                            sourceStack = [];
                            targetStack = [];
                        }
                        sourceStack[depth] = source;
                        targetStack[depth] = target;
                        depth++;
                        inferFromProperties(source, target);
                        inferFromSignatures(source, target, 0);
                        inferFromSignatures(source, target, 1);
                        inferFromIndexTypes(source, target, 0, 0);
                        inferFromIndexTypes(source, target, 1, 1);
                        inferFromIndexTypes(source, target, 0, 1);
                        depth--;
                    }
                }
            }
            function inferFromProperties(source, target) {
                var properties = getPropertiesOfObjectType(target);
                for (var i = 0; i < properties.length; i++) {
                    var targetProp = properties[i];
                    var sourceProp = getPropertyOfObjectType(source, targetProp.name);
                    if (sourceProp) {
                        inferFromTypes(getTypeOfSymbol(sourceProp), getTypeOfSymbol(targetProp));
                    }
                }
            }
            function inferFromSignatures(source, target, kind) {
                var sourceSignatures = getSignaturesOfType(source, kind);
                var targetSignatures = getSignaturesOfType(target, kind);
                var sourceLen = sourceSignatures.length;
                var targetLen = targetSignatures.length;
                var len = sourceLen < targetLen ? sourceLen : targetLen;
                for (var i = 0; i < len; i++) {
                    inferFromSignature(getErasedSignature(sourceSignatures[sourceLen - len + i]), getErasedSignature(targetSignatures[targetLen - len + i]));
                }
            }
            function inferFromSignature(source, target) {
                forEachMatchingParameterType(source, target, inferFromTypes);
                inferFromTypes(getReturnTypeOfSignature(source), getReturnTypeOfSignature(target));
            }
            function inferFromIndexTypes(source, target, sourceKind, targetKind) {
                var targetIndexType = getIndexTypeOfType(target, targetKind);
                if (targetIndexType) {
                    var sourceIndexType = getIndexTypeOfType(source, sourceKind);
                    if (sourceIndexType) {
                        inferFromTypes(sourceIndexType, targetIndexType);
                    }
                }
            }
        }
        function getInferenceCandidates(context, index) {
            var inferences = context.inferences[index];
            return inferences.primary || inferences.secondary || emptyArray;
        }
        function getInferredType(context, index) {
            var inferredType = context.inferredTypes[index];
            if (!inferredType) {
                var inferences = getInferenceCandidates(context, index);
                if (inferences.length) {
                    var unionOrSuperType = context.inferUnionTypes ? getUnionType(inferences) : getCommonSupertype(inferences);
                    inferredType = unionOrSuperType ? getWidenedType(unionOrSuperType) : inferenceFailureType;
                }
                else {
                    inferredType = emptyObjectType;
                }
                if (inferredType !== inferenceFailureType) {
                    var constraint = getConstraintOfTypeParameter(context.typeParameters[index]);
                    inferredType = constraint && !isTypeAssignableTo(inferredType, constraint) ? constraint : inferredType;
                }
                context.inferredTypes[index] = inferredType;
            }
            return inferredType;
        }
        function getInferredTypes(context) {
            for (var i = 0; i < context.inferredTypes.length; i++) {
                getInferredType(context, i);
            }
            return context.inferredTypes;
        }
        function hasAncestor(node, kind) {
            return ts.getAncestor(node, kind) !== undefined;
        }
        function getResolvedSymbol(node) {
            var links = getNodeLinks(node);
            if (!links.resolvedSymbol) {
                links.resolvedSymbol = (ts.getFullWidth(node) > 0 && resolveName(node, node.text, 107455 | 1048576, ts.Diagnostics.Cannot_find_name_0, node)) || unknownSymbol;
            }
            return links.resolvedSymbol;
        }
        function isInTypeQuery(node) {
            while (node) {
                switch (node.kind) {
                    case 138:
                        return true;
                    case 64:
                    case 121:
                        node = node.parent;
                        continue;
                    default:
                        return false;
                }
            }
            ts.Debug.fail("should not get here");
        }
        function removeTypesFromUnionType(type, typeKind, isOfTypeKind) {
            if (type.flags & 16384) {
                var types = type.types;
                if (ts.forEach(types, function (t) { return !!(t.flags & typeKind) === isOfTypeKind; })) {
                    var narrowedType = getUnionType(ts.filter(types, function (t) { return !(t.flags & typeKind) === isOfTypeKind; }));
                    if (narrowedType !== emptyObjectType) {
                        return narrowedType;
                    }
                }
            }
            return type;
        }
        function hasInitializer(node) {
            return !!(node.initializer || ts.isBindingPattern(node.parent) && hasInitializer(node.parent.parent));
        }
        function isVariableAssignedWithin(symbol, node) {
            var links = getNodeLinks(node);
            if (links.assignmentChecks) {
                var cachedResult = links.assignmentChecks[symbol.id];
                if (cachedResult !== undefined) {
                    return cachedResult;
                }
            }
            else {
                links.assignmentChecks = {};
            }
            return links.assignmentChecks[symbol.id] = isAssignedIn(node);
            function isAssignedInBinaryExpression(node) {
                if (node.operator >= 52 && node.operator <= 63) {
                    var n = node.left;
                    while (n.kind === 155) {
                        n = n.expression;
                    }
                    if (n.kind === 64 && getResolvedSymbol(n) === symbol) {
                        return true;
                    }
                }
                return ts.forEachChild(node, isAssignedIn);
            }
            function isAssignedInVariableDeclaration(node) {
                if (!ts.isBindingPattern(node.name) && getSymbolOfNode(node) === symbol && hasInitializer(node)) {
                    return true;
                }
                return ts.forEachChild(node, isAssignedIn);
            }
            function isAssignedIn(node) {
                switch (node.kind) {
                    case 163:
                        return isAssignedInBinaryExpression(node);
                    case 188:
                    case 146:
                        return isAssignedInVariableDeclaration(node);
                    case 144:
                    case 145:
                    case 147:
                    case 148:
                    case 149:
                    case 150:
                    case 151:
                    case 152:
                    case 154:
                    case 155:
                    case 161:
                    case 158:
                    case 159:
                    case 160:
                    case 162:
                    case 164:
                    case 167:
                    case 170:
                    case 171:
                    case 173:
                    case 174:
                    case 175:
                    case 176:
                    case 177:
                    case 178:
                    case 181:
                    case 182:
                    case 183:
                    case 200:
                    case 201:
                    case 184:
                    case 185:
                    case 186:
                    case 203:
                        return ts.forEachChild(node, isAssignedIn);
                }
                return false;
            }
        }
        function resolveLocation(node) {
            var containerNodes = [];
            for (var parent = node.parent; parent; parent = parent.parent) {
                if ((ts.isExpression(parent) || ts.isObjectLiteralMethod(node)) && isContextSensitive(parent)) {
                    containerNodes.unshift(parent);
                }
            }
            ts.forEach(containerNodes, function (node) {
                getTypeOfNode(node);
            });
        }
        function getSymbolAtLocation(node) {
            resolveLocation(node);
            return getSymbolInfo(node);
        }
        function getTypeAtLocation(node) {
            resolveLocation(node);
            return getTypeOfNode(node);
        }
        function getTypeOfSymbolAtLocation(symbol, node) {
            resolveLocation(node);
            return getNarrowedTypeOfSymbol(symbol, node);
        }
        function getNarrowedTypeOfSymbol(symbol, node) {
            var type = getTypeOfSymbol(symbol);
            if (node && symbol.flags & 3 && type.flags & (1 | 48128 | 16384 | 512)) {
                loop: while (node.parent) {
                    var child = node;
                    node = node.parent;
                    var narrowedType = type;
                    switch (node.kind) {
                        case 174:
                            if (child !== node.expression) {
                                narrowedType = narrowType(type, node.expression, child === node.thenStatement);
                            }
                            break;
                        case 164:
                            if (child !== node.condition) {
                                narrowedType = narrowType(type, node.condition, child === node.whenTrue);
                            }
                            break;
                        case 163:
                            if (child === node.right) {
                                if (node.operator === 48) {
                                    narrowedType = narrowType(type, node.left, true);
                                }
                                else if (node.operator === 49) {
                                    narrowedType = narrowType(type, node.left, false);
                                }
                            }
                            break;
                        case 207:
                        case 195:
                        case 190:
                        case 128:
                        case 127:
                        case 130:
                        case 131:
                        case 129:
                            break loop;
                    }
                    if (narrowedType !== type) {
                        if (isVariableAssignedWithin(symbol, node)) {
                            break;
                        }
                        type = narrowedType;
                    }
                }
            }
            return type;
            function narrowTypeByEquality(type, expr, assumeTrue) {
                if (expr.left.kind !== 159 || expr.right.kind !== 8) {
                    return type;
                }
                var left = expr.left;
                var right = expr.right;
                if (left.expression.kind !== 64 || getResolvedSymbol(left.expression) !== symbol) {
                    return type;
                }
                var typeInfo = primitiveTypeInfo[right.text];
                if (expr.operator === 31) {
                    assumeTrue = !assumeTrue;
                }
                if (assumeTrue) {
                    if (!typeInfo) {
                        return removeTypesFromUnionType(type, 258 | 132 | 8, true);
                    }
                    if (isTypeSubtypeOf(typeInfo.type, type)) {
                        return typeInfo.type;
                    }
                    return removeTypesFromUnionType(type, typeInfo.flags, false);
                }
                else {
                    if (typeInfo) {
                        return removeTypesFromUnionType(type, typeInfo.flags, true);
                    }
                    return type;
                }
            }
            function narrowTypeByAnd(type, expr, assumeTrue) {
                if (assumeTrue) {
                    return narrowType(narrowType(type, expr.left, true), expr.right, true);
                }
                else {
                    return getUnionType([
                        narrowType(type, expr.left, false),
                        narrowType(narrowType(type, expr.left, true), expr.right, false)
                    ]);
                }
            }
            function narrowTypeByOr(type, expr, assumeTrue) {
                if (assumeTrue) {
                    return getUnionType([
                        narrowType(type, expr.left, true),
                        narrowType(narrowType(type, expr.left, false), expr.right, true)
                    ]);
                }
                else {
                    return narrowType(narrowType(type, expr.left, false), expr.right, false);
                }
            }
            function narrowTypeByInstanceof(type, expr, assumeTrue) {
                if (type.flags & 1 || !assumeTrue || expr.left.kind !== 64 || getResolvedSymbol(expr.left) !== symbol) {
                    return type;
                }
                var rightType = checkExpression(expr.right);
                if (!isTypeSubtypeOf(rightType, globalFunctionType)) {
                    return type;
                }
                var prototypeProperty = getPropertyOfType(rightType, "prototype");
                if (!prototypeProperty) {
                    return type;
                }
                var targetType = getTypeOfSymbol(prototypeProperty);
                if (isTypeSubtypeOf(targetType, type)) {
                    return targetType;
                }
                if (type.flags & 16384) {
                    return getUnionType(ts.filter(type.types, function (t) { return isTypeSubtypeOf(t, targetType); }));
                }
                return type;
            }
            function narrowType(type, expr, assumeTrue) {
                switch (expr.kind) {
                    case 155:
                        return narrowType(type, expr.expression, assumeTrue);
                    case 163:
                        var operator = expr.operator;
                        if (operator === 30 || operator === 31) {
                            return narrowTypeByEquality(type, expr, assumeTrue);
                        }
                        else if (operator === 48) {
                            return narrowTypeByAnd(type, expr, assumeTrue);
                        }
                        else if (operator === 49) {
                            return narrowTypeByOr(type, expr, assumeTrue);
                        }
                        else if (operator === 86) {
                            return narrowTypeByInstanceof(type, expr, assumeTrue);
                        }
                        break;
                    case 161:
                        if (expr.operator === 46) {
                            return narrowType(type, expr.operand, !assumeTrue);
                        }
                        break;
                }
                return type;
            }
        }
        function markLinkedImportsAsReferenced(node) {
            var nodeLinks = getNodeLinks(node);
            while (nodeLinks.importOnRightSide) {
                var rightSide = nodeLinks.importOnRightSide;
                nodeLinks.importOnRightSide = undefined;
                getSymbolLinks(rightSide).referenced = true;
                ts.Debug.assert((rightSide.flags & 8388608) !== 0);
                nodeLinks = getNodeLinks(ts.getDeclarationOfKind(rightSide, 197));
            }
        }
        function checkIdentifier(node) {
            var symbol = getResolvedSymbol(node);
            if (symbol === argumentsSymbol && ts.getContainingFunction(node).kind === 157) {
                error(node, ts.Diagnostics.The_arguments_object_cannot_be_referenced_in_an_arrow_function_Consider_using_a_standard_function_expression);
            }
            if (symbol.flags & 8388608) {
                var symbolLinks = getSymbolLinks(symbol);
                if (!symbolLinks.referenced) {
                    var importOrExportAssignment = getLeftSideOfImportOrExportAssignment(node);
                    if (!importOrExportAssignment || (importOrExportAssignment.flags & 1) || (importOrExportAssignment.kind === 198)) {
                        symbolLinks.referenced = !isInTypeQuery(node) && !isConstEnumOrConstEnumOnlyModule(resolveImport(symbol));
                    }
                    else {
                        var nodeLinks = getNodeLinks(importOrExportAssignment);
                        ts.Debug.assert(!nodeLinks.importOnRightSide);
                        nodeLinks.importOnRightSide = symbol;
                    }
                }
                if (symbolLinks.referenced) {
                    markLinkedImportsAsReferenced(ts.getDeclarationOfKind(symbol, 197));
                }
            }
            checkCollisionWithCapturedSuperVariable(node, node);
            checkCollisionWithCapturedThisVariable(node, node);
            return getNarrowedTypeOfSymbol(getExportSymbolOfValueSymbolIfExported(symbol), node);
        }
        function captureLexicalThis(node, container) {
            var classNode = container.parent && container.parent.kind === 191 ? container.parent : undefined;
            getNodeLinks(node).flags |= 2;
            if (container.kind === 126 || container.kind === 129) {
                getNodeLinks(classNode).flags |= 4;
            }
            else {
                getNodeLinks(container).flags |= 4;
            }
        }
        function checkThisExpression(node) {
            var container = ts.getThisContainer(node, true);
            var needToCaptureLexicalThis = false;
            if (container.kind === 157) {
                container = ts.getThisContainer(container, false);
                needToCaptureLexicalThis = (languageVersion < 2);
            }
            switch (container.kind) {
                case 195:
                    error(node, ts.Diagnostics.this_cannot_be_referenced_in_a_module_body);
                    break;
                case 194:
                    error(node, ts.Diagnostics.this_cannot_be_referenced_in_current_location);
                    break;
                case 129:
                    if (isInConstructorArgumentInitializer(node, container)) {
                        error(node, ts.Diagnostics.this_cannot_be_referenced_in_constructor_arguments);
                    }
                    break;
                case 126:
                case 125:
                    if (container.flags & 128) {
                        error(node, ts.Diagnostics.this_cannot_be_referenced_in_a_static_property_initializer);
                    }
                    break;
                case 122:
                    error(node, ts.Diagnostics.this_cannot_be_referenced_in_a_computed_property_name);
                    break;
            }
            if (needToCaptureLexicalThis) {
                captureLexicalThis(node, container);
            }
            var classNode = container.parent && container.parent.kind === 191 ? container.parent : undefined;
            if (classNode) {
                var symbol = getSymbolOfNode(classNode);
                return container.flags & 128 ? getTypeOfSymbol(symbol) : getDeclaredTypeOfSymbol(symbol);
            }
            return anyType;
        }
        function isInConstructorArgumentInitializer(node, constructorDecl) {
            for (var n = node; n && n !== constructorDecl; n = n.parent) {
                if (n.kind === 124) {
                    return true;
                }
            }
            return false;
        }
        function checkSuperExpression(node) {
            var isCallExpression = node.parent.kind === 151 && node.parent.expression === node;
            var enclosingClass = ts.getAncestor(node, 191);
            var baseClass;
            if (enclosingClass && ts.getClassBaseTypeNode(enclosingClass)) {
                var classType = getDeclaredTypeOfSymbol(getSymbolOfNode(enclosingClass));
                baseClass = classType.baseTypes.length && classType.baseTypes[0];
            }
            if (!baseClass) {
                error(node, ts.Diagnostics.super_can_only_be_referenced_in_a_derived_class);
                return unknownType;
            }
            var container = ts.getSuperContainer(node, true);
            if (container) {
                var canUseSuperExpression = false;
                if (isCallExpression) {
                    canUseSuperExpression = container.kind === 129;
                }
                else {
                    var needToCaptureLexicalThis = false;
                    while (container && container.kind === 157) {
                        container = ts.getSuperContainer(container, true);
                        needToCaptureLexicalThis = true;
                    }
                    if (container && container.parent && container.parent.kind === 191) {
                        if (container.flags & 128) {
                            canUseSuperExpression = container.kind === 128 || container.kind === 127 || container.kind === 130 || container.kind === 131;
                        }
                        else {
                            canUseSuperExpression = container.kind === 128 || container.kind === 127 || container.kind === 130 || container.kind === 131 || container.kind === 126 || container.kind === 125 || container.kind === 129;
                        }
                    }
                }
                if (canUseSuperExpression) {
                    var returnType;
                    if ((container.flags & 128) || isCallExpression) {
                        getNodeLinks(node).flags |= 32;
                        returnType = getTypeOfSymbol(baseClass.symbol);
                    }
                    else {
                        getNodeLinks(node).flags |= 16;
                        returnType = baseClass;
                    }
                    if (container.kind === 129 && isInConstructorArgumentInitializer(node, container)) {
                        error(node, ts.Diagnostics.super_cannot_be_referenced_in_constructor_arguments);
                        returnType = unknownType;
                    }
                    if (!isCallExpression && needToCaptureLexicalThis) {
                        captureLexicalThis(node.parent, container);
                    }
                    return returnType;
                }
            }
            if (container.kind === 122) {
                error(node, ts.Diagnostics.super_cannot_be_referenced_in_a_computed_property_name);
            }
            else if (isCallExpression) {
                error(node, ts.Diagnostics.Super_calls_are_not_permitted_outside_constructors_or_in_nested_functions_inside_constructors);
            }
            else {
                error(node, ts.Diagnostics.super_property_access_is_permitted_only_in_a_constructor_member_function_or_member_accessor_of_a_derived_class);
            }
            return unknownType;
        }
        function getContextuallyTypedParameterType(parameter) {
            if (isFunctionExpressionOrArrowFunction(parameter.parent)) {
                var func = parameter.parent;
                if (isContextSensitive(func)) {
                    var contextualSignature = getContextualSignature(func);
                    if (contextualSignature) {
                        var funcHasRestParameters = ts.hasRestParameters(func);
                        var len = func.parameters.length - (funcHasRestParameters ? 1 : 0);
                        var indexOfParameter = ts.indexOf(func.parameters, parameter);
                        if (indexOfParameter < len) {
                            return getTypeAtPosition(contextualSignature, indexOfParameter);
                        }
                        if (indexOfParameter === (func.parameters.length - 1) && funcHasRestParameters && contextualSignature.hasRestParameter && func.parameters.length >= contextualSignature.parameters.length) {
                            return getTypeOfSymbol(contextualSignature.parameters[contextualSignature.parameters.length - 1]);
                        }
                    }
                }
            }
            return undefined;
        }
        function getContextualTypeForInitializerExpression(node) {
            var declaration = node.parent;
            if (node === declaration.initializer) {
                if (declaration.type) {
                    return getTypeFromTypeNode(declaration.type);
                }
                if (declaration.kind === 124) {
                    var type = getContextuallyTypedParameterType(declaration);
                    if (type) {
                        return type;
                    }
                }
                if (ts.isBindingPattern(declaration.name)) {
                    return getTypeFromBindingPattern(declaration.name);
                }
            }
            return undefined;
        }
        function getContextualTypeForReturnExpression(node) {
            var func = ts.getContainingFunction(node);
            if (func) {
                if (func.type || func.kind === 129 || func.kind === 130 && getSetAccessorTypeAnnotationNode(ts.getDeclarationOfKind(func.symbol, 131))) {
                    return getReturnTypeOfSignature(getSignatureFromDeclaration(func));
                }
                var signature = getContextualSignatureForFunctionLikeDeclaration(func);
                if (signature) {
                    return getReturnTypeOfSignature(signature);
                }
            }
            return undefined;
        }
        function getContextualTypeForArgument(callTarget, arg) {
            var args = getEffectiveCallArguments(callTarget);
            var argIndex = ts.indexOf(args, arg);
            if (argIndex >= 0) {
                var signature = getResolvedSignature(callTarget);
                return getTypeAtPosition(signature, argIndex);
            }
            return undefined;
        }
        function getContextualTypeForSubstitutionExpression(template, substitutionExpression) {
            if (template.parent.kind === 153) {
                return getContextualTypeForArgument(template.parent, substitutionExpression);
            }
            return undefined;
        }
        function getContextualTypeForBinaryOperand(node) {
            var binaryExpression = node.parent;
            var operator = binaryExpression.operator;
            if (operator >= 52 && operator <= 63) {
                if (node === binaryExpression.right) {
                    return checkExpression(binaryExpression.left);
                }
            }
            else if (operator === 49) {
                var type = getContextualType(binaryExpression);
                if (!type && node === binaryExpression.right) {
                    type = checkExpression(binaryExpression.left);
                }
                return type;
            }
            return undefined;
        }
        function applyToContextualType(type, mapper) {
            if (!(type.flags & 16384)) {
                return mapper(type);
            }
            var types = type.types;
            var mappedType;
            var mappedTypes;
            for (var i = 0; i < types.length; i++) {
                var t = mapper(types[i]);
                if (t) {
                    if (!mappedType) {
                        mappedType = t;
                    }
                    else if (!mappedTypes) {
                        mappedTypes = [mappedType, t];
                    }
                    else {
                        mappedTypes.push(t);
                    }
                }
            }
            return mappedTypes ? getUnionType(mappedTypes) : mappedType;
        }
        function getTypeOfPropertyOfContextualType(type, name) {
            return applyToContextualType(type, function (t) {
                var prop = getPropertyOfObjectType(t, name);
                return prop ? getTypeOfSymbol(prop) : undefined;
            });
        }
        function getIndexTypeOfContextualType(type, kind) {
            return applyToContextualType(type, function (t) { return getIndexTypeOfObjectOrUnionType(t, kind); });
        }
        function contextualTypeIsTupleLikeType(type) {
            return !!(type.flags & 16384 ? ts.forEach(type.types, isTupleLikeType) : isTupleLikeType(type));
        }
        function contextualTypeHasIndexSignature(type, kind) {
            return !!(type.flags & 16384 ? ts.forEach(type.types, function (t) { return getIndexTypeOfObjectOrUnionType(t, kind); }) : getIndexTypeOfObjectOrUnionType(type, kind));
        }
        function getContextualTypeForObjectLiteralMethod(node) {
            ts.Debug.assert(ts.isObjectLiteralMethod(node));
            if (isInsideWithStatementBody(node)) {
                return undefined;
            }
            return getContextualTypeForObjectLiteralElement(node);
        }
        function getContextualTypeForObjectLiteralElement(element) {
            var objectLiteral = element.parent;
            var type = getContextualType(objectLiteral);
            if (type) {
                if (!ts.hasDynamicName(element)) {
                    var symbolName = getSymbolOfNode(element).name;
                    var propertyType = getTypeOfPropertyOfContextualType(type, symbolName);
                    if (propertyType) {
                        return propertyType;
                    }
                }
                return isNumericName(element.name) && getIndexTypeOfContextualType(type, 1) || getIndexTypeOfContextualType(type, 0);
            }
            return undefined;
        }
        function getContextualTypeForElementExpression(node) {
            var arrayLiteral = node.parent;
            var type = getContextualType(arrayLiteral);
            if (type) {
                var index = ts.indexOf(arrayLiteral.elements, node);
                return getTypeOfPropertyOfContextualType(type, "" + index) || getIndexTypeOfContextualType(type, 1);
            }
            return undefined;
        }
        function getContextualTypeForConditionalOperand(node) {
            var conditional = node.parent;
            return node === conditional.whenTrue || node === conditional.whenFalse ? getContextualType(conditional) : undefined;
        }
        function getContextualType(node) {
            if (isInsideWithStatementBody(node)) {
                return undefined;
            }
            if (node.contextualType) {
                return node.contextualType;
            }
            var parent = node.parent;
            switch (parent.kind) {
                case 188:
                case 124:
                case 126:
                case 125:
                case 146:
                    return getContextualTypeForInitializerExpression(node);
                case 157:
                case 181:
                    return getContextualTypeForReturnExpression(node);
                case 151:
                case 152:
                    return getContextualTypeForArgument(parent, node);
                case 154:
                    return getTypeFromTypeNode(parent.type);
                case 163:
                    return getContextualTypeForBinaryOperand(node);
                case 204:
                    return getContextualTypeForObjectLiteralElement(parent);
                case 147:
                    return getContextualTypeForElementExpression(node);
                case 164:
                    return getContextualTypeForConditionalOperand(node);
                case 169:
                    ts.Debug.assert(parent.parent.kind === 165);
                    return getContextualTypeForSubstitutionExpression(parent.parent, node);
                case 155:
                    return getContextualType(parent);
            }
            return undefined;
        }
        function getNonGenericSignature(type) {
            var signatures = getSignaturesOfObjectOrUnionType(type, 0);
            if (signatures.length === 1) {
                var signature = signatures[0];
                if (!signature.typeParameters) {
                    return signature;
                }
            }
        }
        function isFunctionExpressionOrArrowFunction(node) {
            return node.kind === 156 || node.kind === 157;
        }
        function getContextualSignatureForFunctionLikeDeclaration(node) {
            return isFunctionExpressionOrArrowFunction(node) ? getContextualSignature(node) : undefined;
        }
        function getContextualSignature(node) {
            ts.Debug.assert(node.kind !== 128 || ts.isObjectLiteralMethod(node));
            var type = ts.isObjectLiteralMethod(node) ? getContextualTypeForObjectLiteralMethod(node) : getContextualType(node);
            if (!type) {
                return undefined;
            }
            if (!(type.flags & 16384)) {
                return getNonGenericSignature(type);
            }
            var signatureList;
            var types = type.types;
            for (var i = 0; i < types.length; i++) {
                if (signatureList && getSignaturesOfObjectOrUnionType(types[i], 0).length > 1) {
                    return undefined;
                }
                var signature = getNonGenericSignature(types[i]);
                if (signature) {
                    if (!signatureList) {
                        signatureList = [signature];
                    }
                    else if (!compareSignatures(signatureList[0], signature, false, compareTypes)) {
                        return undefined;
                    }
                    else {
                        signatureList.push(signature);
                    }
                }
            }
            var result;
            if (signatureList) {
                result = cloneSignature(signatureList[0]);
                result.resolvedReturnType = undefined;
                result.unionSignatures = signatureList;
            }
            return result;
        }
        function isInferentialContext(mapper) {
            return mapper && mapper !== identityMapper;
        }
        function isAssignmentTarget(node) {
            var parent = node.parent;
            if (parent.kind === 163 && parent.operator === 52 && parent.left === node) {
                return true;
            }
            if (parent.kind === 204) {
                return isAssignmentTarget(parent.parent);
            }
            if (parent.kind === 147) {
                return isAssignmentTarget(parent);
            }
            return false;
        }
        function checkSpreadElementExpression(node, contextualMapper) {
            var type = checkExpressionCached(node.expression, contextualMapper);
            if (!isTypeAssignableTo(type, anyArrayType)) {
                error(node.expression, ts.Diagnostics.Type_0_is_not_an_array_type, typeToString(type));
                return unknownType;
            }
            return type;
        }
        function checkArrayLiteral(node, contextualMapper) {
            var elements = node.elements;
            if (!elements.length) {
                return createArrayType(undefinedType);
            }
            var hasSpreadElement = false;
            var elementTypes = [];
            ts.forEach(elements, function (e) {
                var type = checkExpression(e, contextualMapper);
                if (e.kind === 167) {
                    elementTypes.push(getIndexTypeOfType(type, 1) || anyType);
                    hasSpreadElement = true;
                }
                else {
                    elementTypes.push(type);
                }
            });
            if (!hasSpreadElement) {
                var contextualType = getContextualType(node);
                if (contextualType && contextualTypeIsTupleLikeType(contextualType) || isAssignmentTarget(node)) {
                    return createTupleType(elementTypes);
                }
            }
            return createArrayType(getUnionType(elementTypes));
        }
        function isNumericName(name) {
            return name.kind === 122 ? isNumericComputedName(name) : isNumericLiteralName(name.text);
        }
        function isNumericComputedName(name) {
            return isTypeOfKind(checkComputedPropertyName(name), 1 | 132);
        }
        function isNumericLiteralName(name) {
            return (+name).toString() === name;
        }
        function checkComputedPropertyName(node) {
            var links = getNodeLinks(node.expression);
            if (!links.resolvedType) {
                links.resolvedType = checkExpression(node.expression);
                if (!isTypeOfKind(links.resolvedType, 1 | 132 | 258)) {
                    error(node, ts.Diagnostics.A_computed_property_name_must_be_of_type_string_number_or_any);
                }
            }
            return links.resolvedType;
        }
        function checkObjectLiteral(node, contextualMapper) {
            checkGrammarObjectLiteralExpression(node);
            var propertiesTable = {};
            var propertiesArray = [];
            var contextualType = getContextualType(node);
            var typeFlags;
            for (var i = 0; i < node.properties.length; i++) {
                var memberDecl = node.properties[i];
                var member = memberDecl.symbol;
                if (memberDecl.kind === 204 || memberDecl.kind === 205 || ts.isObjectLiteralMethod(memberDecl)) {
                    if (memberDecl.kind === 204) {
                        var type = checkPropertyAssignment(memberDecl, contextualMapper);
                    }
                    else if (memberDecl.kind === 128) {
                        var type = checkObjectLiteralMethod(memberDecl, contextualMapper);
                    }
                    else {
                        ts.Debug.assert(memberDecl.kind === 205);
                        var type = memberDecl.name.kind === 122 ? unknownType : checkExpression(memberDecl.name, contextualMapper);
                    }
                    typeFlags |= type.flags;
                    var prop = createSymbol(4 | 67108864 | member.flags, member.name);
                    prop.declarations = member.declarations;
                    prop.parent = member.parent;
                    if (member.valueDeclaration) {
                        prop.valueDeclaration = member.valueDeclaration;
                    }
                    prop.type = type;
                    prop.target = member;
                    member = prop;
                }
                else {
                    ts.Debug.assert(memberDecl.kind === 130 || memberDecl.kind === 131);
                    checkAccessorDeclaration(memberDecl);
                }
                if (!ts.hasDynamicName(memberDecl)) {
                    propertiesTable[member.name] = member;
                }
                propertiesArray.push(member);
            }
            var stringIndexType = getIndexType(0);
            var numberIndexType = getIndexType(1);
            var result = createAnonymousType(node.symbol, propertiesTable, emptyArray, emptyArray, stringIndexType, numberIndexType);
            result.flags |= 131072 | 524288 | (typeFlags & 262144);
            return result;
            function getIndexType(kind) {
                if (contextualType && contextualTypeHasIndexSignature(contextualType, kind)) {
                    var propTypes = [];
                    for (var i = 0; i < propertiesArray.length; i++) {
                        var propertyDecl = node.properties[i];
                        if (kind === 0 || isNumericName(propertyDecl.name)) {
                            var type = getTypeOfSymbol(propertiesArray[i]);
                            if (!ts.contains(propTypes, type)) {
                                propTypes.push(type);
                            }
                        }
                    }
                    var result = propTypes.length ? getUnionType(propTypes) : undefinedType;
                    typeFlags |= result.flags;
                    return result;
                }
                return undefined;
            }
        }
        function getDeclarationKindFromSymbol(s) {
            return s.valueDeclaration ? s.valueDeclaration.kind : 126;
        }
        function getDeclarationFlagsFromSymbol(s) {
            return s.valueDeclaration ? ts.getCombinedNodeFlags(s.valueDeclaration) : s.flags & 134217728 ? 16 | 128 : 0;
        }
        function checkClassPropertyAccess(node, left, type, prop) {
            var flags = getDeclarationFlagsFromSymbol(prop);
            if (!(flags & (32 | 64))) {
                return;
            }
            var enclosingClassDeclaration = ts.getAncestor(node, 191);
            var enclosingClass = enclosingClassDeclaration ? getDeclaredTypeOfSymbol(getSymbolOfNode(enclosingClassDeclaration)) : undefined;
            var declaringClass = getDeclaredTypeOfSymbol(prop.parent);
            if (flags & 32) {
                if (declaringClass !== enclosingClass) {
                    error(node, ts.Diagnostics.Property_0_is_private_and_only_accessible_within_class_1, symbolToString(prop), typeToString(declaringClass));
                }
                return;
            }
            if (left.kind === 90) {
                return;
            }
            if (!enclosingClass || !hasBaseType(enclosingClass, declaringClass)) {
                error(node, ts.Diagnostics.Property_0_is_protected_and_only_accessible_within_class_1_and_its_subclasses, symbolToString(prop), typeToString(declaringClass));
                return;
            }
            if (flags & 128) {
                return;
            }
            if (!(getTargetType(type).flags & (1024 | 2048) && hasBaseType(type, enclosingClass))) {
                error(node, ts.Diagnostics.Property_0_is_protected_and_only_accessible_through_an_instance_of_class_1, symbolToString(prop), typeToString(enclosingClass));
            }
        }
        function checkPropertyAccessExpression(node) {
            return checkPropertyAccessExpressionOrQualifiedName(node, node.expression, node.name);
        }
        function checkQualifiedName(node) {
            return checkPropertyAccessExpressionOrQualifiedName(node, node.left, node.right);
        }
        function checkPropertyAccessExpressionOrQualifiedName(node, left, right) {
            var type = checkExpressionOrQualifiedName(left);
            if (type === unknownType)
                return type;
            if (type !== anyType) {
                var apparentType = getApparentType(getWidenedType(type));
                if (apparentType === unknownType) {
                    return unknownType;
                }
                var prop = getPropertyOfType(apparentType, right.text);
                if (!prop) {
                    if (right.text) {
                        error(right, ts.Diagnostics.Property_0_does_not_exist_on_type_1, ts.declarationNameToString(right), typeToString(type));
                    }
                    return unknownType;
                }
                getNodeLinks(node).resolvedSymbol = prop;
                if (prop.parent && prop.parent.flags & 32) {
                    if (left.kind === 90 && getDeclarationKindFromSymbol(prop) !== 128) {
                        error(right, ts.Diagnostics.Only_public_and_protected_methods_of_the_base_class_are_accessible_via_the_super_keyword);
                    }
                    else {
                        checkClassPropertyAccess(node, left, type, prop);
                    }
                }
                return getTypeOfSymbol(prop);
            }
            return anyType;
        }
        function isValidPropertyAccess(node, propertyName) {
            var left = node.kind === 149 ? node.expression : node.left;
            var type = checkExpressionOrQualifiedName(left);
            if (type !== unknownType && type !== anyType) {
                var prop = getPropertyOfType(getWidenedType(type), propertyName);
                if (prop && prop.parent && prop.parent.flags & 32) {
                    if (left.kind === 90 && getDeclarationKindFromSymbol(prop) !== 128) {
                        return false;
                    }
                    else {
                        var modificationCount = diagnostics.getModificationCount();
                        checkClassPropertyAccess(node, left, type, prop);
                        return diagnostics.getModificationCount() === modificationCount;
                    }
                }
            }
            return true;
        }
        function checkIndexedAccess(node) {
            if (!node.argumentExpression) {
                var sourceFile = getSourceFile(node);
                if (node.parent.kind === 152 && node.parent.expression === node) {
                    var start = ts.skipTrivia(sourceFile.text, node.expression.end);
                    var end = node.end;
                    grammarErrorAtPos(sourceFile, start, end - start, ts.Diagnostics.new_T_cannot_be_used_to_create_an_array_Use_new_Array_T_instead);
                }
                else {
                    var start = node.end - "]".length;
                    var end = node.end;
                    grammarErrorAtPos(sourceFile, start, end - start, ts.Diagnostics.Expression_expected);
                }
            }
            var objectType = getApparentType(checkExpression(node.expression));
            var indexType = node.argumentExpression ? checkExpression(node.argumentExpression) : unknownType;
            if (objectType === unknownType) {
                return unknownType;
            }
            var isConstEnum = isConstEnumObjectType(objectType);
            if (isConstEnum && (!node.argumentExpression || node.argumentExpression.kind !== 8)) {
                error(node.argumentExpression, ts.Diagnostics.A_const_enum_member_can_only_be_accessed_using_a_string_literal);
                return unknownType;
            }
            if (node.argumentExpression) {
                if (node.argumentExpression.kind === 8 || node.argumentExpression.kind === 7) {
                    var name = node.argumentExpression.text;
                    var prop = getPropertyOfType(objectType, name);
                    if (prop) {
                        getNodeLinks(node).resolvedSymbol = prop;
                        return getTypeOfSymbol(prop);
                    }
                    else if (isConstEnum) {
                        error(node.argumentExpression, ts.Diagnostics.Property_0_does_not_exist_on_const_enum_1, name, symbolToString(objectType.symbol));
                        return unknownType;
                    }
                }
            }
            if (isTypeOfKind(indexType, 1 | 258 | 132)) {
                if (isTypeOfKind(indexType, 1 | 132)) {
                    var numberIndexType = getIndexTypeOfType(objectType, 1);
                    if (numberIndexType) {
                        return numberIndexType;
                    }
                }
                var stringIndexType = getIndexTypeOfType(objectType, 0);
                if (stringIndexType) {
                    return stringIndexType;
                }
                if (compilerOptions.noImplicitAny && !compilerOptions.suppressImplicitAnyIndexErrors && objectType !== anyType) {
                    error(node, ts.Diagnostics.Index_signature_of_object_type_implicitly_has_an_any_type);
                }
                return anyType;
            }
            error(node, ts.Diagnostics.An_index_expression_argument_must_be_of_type_string_number_or_any);
            return unknownType;
        }
        function resolveUntypedCall(node) {
            if (node.kind === 153) {
                checkExpression(node.template);
            }
            else {
                ts.forEach(node.arguments, function (argument) {
                    checkExpression(argument);
                });
            }
            return anySignature;
        }
        function resolveErrorCall(node) {
            resolveUntypedCall(node);
            return unknownSignature;
        }
        function reorderCandidates(signatures, result) {
            var lastParent;
            var lastSymbol;
            var cutoffIndex = 0;
            var index;
            var specializedIndex = -1;
            var spliceIndex;
            ts.Debug.assert(!result.length);
            for (var i = 0; i < signatures.length; i++) {
                var signature = signatures[i];
                var symbol = signature.declaration && getSymbolOfNode(signature.declaration);
                var parent = signature.declaration && signature.declaration.parent;
                if (!lastSymbol || symbol === lastSymbol) {
                    if (lastParent && parent === lastParent) {
                        index++;
                    }
                    else {
                        lastParent = parent;
                        index = cutoffIndex;
                    }
                }
                else {
                    index = cutoffIndex = result.length;
                    lastParent = parent;
                }
                lastSymbol = symbol;
                if (signature.hasStringLiterals) {
                    specializedIndex++;
                    spliceIndex = specializedIndex;
                    cutoffIndex++;
                }
                else {
                    spliceIndex = index;
                }
                result.splice(spliceIndex, 0, signature);
            }
        }
        function getSpreadArgumentIndex(args) {
            for (var i = 0; i < args.length; i++) {
                if (args[i].kind === 167) {
                    return i;
                }
            }
            return -1;
        }
        function hasCorrectArity(node, args, signature) {
            var adjustedArgCount;
            var typeArguments;
            var callIsIncomplete;
            if (node.kind === 153) {
                var tagExpression = node;
                adjustedArgCount = args.length;
                typeArguments = undefined;
                if (tagExpression.template.kind === 165) {
                    var templateExpression = tagExpression.template;
                    var lastSpan = ts.lastOrUndefined(templateExpression.templateSpans);
                    ts.Debug.assert(lastSpan !== undefined);
                    callIsIncomplete = ts.getFullWidth(lastSpan.literal) === 0 || !!lastSpan.literal.isUnterminated;
                }
                else {
                    var templateLiteral = tagExpression.template;
                    ts.Debug.assert(templateLiteral.kind === 10);
                    callIsIncomplete = !!templateLiteral.isUnterminated;
                }
            }
            else {
                var callExpression = node;
                if (!callExpression.arguments) {
                    ts.Debug.assert(callExpression.kind === 152);
                    return signature.minArgumentCount === 0;
                }
                adjustedArgCount = callExpression.arguments.hasTrailingComma ? args.length + 1 : args.length;
                callIsIncomplete = callExpression.arguments.end === callExpression.end;
                typeArguments = callExpression.typeArguments;
            }
            var hasRightNumberOfTypeArgs = !typeArguments || (signature.typeParameters && typeArguments.length === signature.typeParameters.length);
            if (!hasRightNumberOfTypeArgs) {
                return false;
            }
            var spreadArgIndex = getSpreadArgumentIndex(args);
            if (spreadArgIndex >= 0) {
                return signature.hasRestParameter && spreadArgIndex >= signature.parameters.length - 1;
            }
            if (!signature.hasRestParameter && adjustedArgCount > signature.parameters.length) {
                return false;
            }
            var hasEnoughArguments = adjustedArgCount >= signature.minArgumentCount;
            return callIsIncomplete || hasEnoughArguments;
        }
        function getSingleCallSignature(type) {
            if (type.flags & 48128) {
                var resolved = resolveObjectOrUnionTypeMembers(type);
                if (resolved.callSignatures.length === 1 && resolved.constructSignatures.length === 0 && resolved.properties.length === 0 && !resolved.stringIndexType && !resolved.numberIndexType) {
                    return resolved.callSignatures[0];
                }
            }
            return undefined;
        }
        function instantiateSignatureInContextOf(signature, contextualSignature, contextualMapper) {
            var context = createInferenceContext(signature.typeParameters, true);
            forEachMatchingParameterType(contextualSignature, signature, function (source, target) {
                inferTypes(context, instantiateType(source, contextualMapper), target);
            });
            return getSignatureInstantiation(signature, getInferredTypes(context));
        }
        function inferTypeArguments(signature, args, excludeArgument) {
            var typeParameters = signature.typeParameters;
            var context = createInferenceContext(typeParameters, false);
            var inferenceMapper = createInferenceMapper(context);
            for (var i = 0; i < args.length; i++) {
                var arg = args[i];
                if (arg.kind !== 168) {
                    var paramType = getTypeAtPosition(signature, arg.kind === 167 ? -1 : i);
                    if (i === 0 && args[i].parent.kind === 153) {
                        var argType = globalTemplateStringsArrayType;
                    }
                    else {
                        var mapper = excludeArgument && excludeArgument[i] !== undefined ? identityMapper : inferenceMapper;
                        var argType = checkExpressionWithContextualType(arg, paramType, mapper);
                    }
                    inferTypes(context, argType, paramType);
                }
            }
            if (excludeArgument) {
                for (var i = 0; i < args.length; i++) {
                    if (excludeArgument[i] === false) {
                        var arg = args[i];
                        var paramType = getTypeAtPosition(signature, arg.kind === 167 ? -1 : i);
                        inferTypes(context, checkExpressionWithContextualType(arg, paramType, inferenceMapper), paramType);
                    }
                }
            }
            var inferredTypes = getInferredTypes(context);
            context.failedTypeParameterIndex = ts.indexOf(inferredTypes, inferenceFailureType);
            for (var i = 0; i < inferredTypes.length; i++) {
                if (inferredTypes[i] === inferenceFailureType) {
                    inferredTypes[i] = unknownType;
                }
            }
            return context;
        }
        function checkTypeArguments(signature, typeArguments, typeArgumentResultTypes, reportErrors) {
            var typeParameters = signature.typeParameters;
            var typeArgumentsAreAssignable = true;
            for (var i = 0; i < typeParameters.length; i++) {
                var typeArgNode = typeArguments[i];
                var typeArgument = getTypeFromTypeNode(typeArgNode);
                typeArgumentResultTypes[i] = typeArgument;
                if (typeArgumentsAreAssignable) {
                    var constraint = getConstraintOfTypeParameter(typeParameters[i]);
                    if (constraint) {
                        typeArgumentsAreAssignable = checkTypeAssignableTo(typeArgument, constraint, reportErrors ? typeArgNode : undefined, ts.Diagnostics.Type_0_does_not_satisfy_the_constraint_1);
                    }
                }
            }
            return typeArgumentsAreAssignable;
        }
        function checkApplicableSignature(node, args, signature, relation, excludeArgument, reportErrors) {
            for (var i = 0; i < args.length; i++) {
                var arg = args[i];
                if (arg.kind !== 168) {
                    var paramType = getTypeAtPosition(signature, arg.kind === 167 ? -1 : i);
                    var argType = i === 0 && node.kind === 153 ? globalTemplateStringsArrayType : arg.kind === 8 && !reportErrors ? getStringLiteralType(arg) : checkExpressionWithContextualType(arg, paramType, excludeArgument && excludeArgument[i] ? identityMapper : undefined);
                    if (!checkTypeRelatedTo(argType, paramType, relation, reportErrors ? arg : undefined, ts.Diagnostics.Argument_of_type_0_is_not_assignable_to_parameter_of_type_1)) {
                        return false;
                    }
                }
            }
            return true;
        }
        function getEffectiveCallArguments(node) {
            var args;
            if (node.kind === 153) {
                var template = node.template;
                args = [template];
                if (template.kind === 165) {
                    ts.forEach(template.templateSpans, function (span) {
                        args.push(span.expression);
                    });
                }
            }
            else {
                args = node.arguments || emptyArray;
            }
            return args;
        }
        function getEffectiveTypeArguments(callExpression) {
            if (callExpression.expression.kind === 90) {
                var containingClass = ts.getAncestor(callExpression, 191);
                var baseClassTypeNode = containingClass && ts.getClassBaseTypeNode(containingClass);
                return baseClassTypeNode && baseClassTypeNode.typeArguments;
            }
            else {
                return callExpression.typeArguments;
            }
        }
        function resolveCall(node, signatures, candidatesOutArray) {
            var isTaggedTemplate = node.kind === 153;
            var typeArguments;
            if (!isTaggedTemplate) {
                typeArguments = getEffectiveTypeArguments(node);
                if (node.expression.kind !== 90) {
                    ts.forEach(typeArguments, checkSourceElement);
                }
            }
            var candidates = candidatesOutArray || [];
            reorderCandidates(signatures, candidates);
            if (!candidates.length) {
                error(node, ts.Diagnostics.Supplied_parameters_do_not_match_any_signature_of_call_target);
                return resolveErrorCall(node);
            }
            var args = getEffectiveCallArguments(node);
            var excludeArgument;
            for (var i = isTaggedTemplate ? 1 : 0; i < args.length; i++) {
                if (isContextSensitive(args[i])) {
                    if (!excludeArgument) {
                        excludeArgument = new Array(args.length);
                    }
                    excludeArgument[i] = true;
                }
            }
            var candidateForArgumentError;
            var candidateForTypeArgumentError;
            var resultOfFailedInference;
            var result;
            if (candidates.length > 1) {
                result = chooseOverload(candidates, subtypeRelation);
            }
            if (!result) {
                candidateForArgumentError = undefined;
                candidateForTypeArgumentError = undefined;
                resultOfFailedInference = undefined;
                result = chooseOverload(candidates, assignableRelation);
            }
            if (result) {
                return result;
            }
            if (candidateForArgumentError) {
                checkApplicableSignature(node, args, candidateForArgumentError, assignableRelation, undefined, true);
            }
            else if (candidateForTypeArgumentError) {
                if (!isTaggedTemplate && node.typeArguments) {
                    checkTypeArguments(candidateForTypeArgumentError, node.typeArguments, [], true);
                }
                else {
                    ts.Debug.assert(resultOfFailedInference.failedTypeParameterIndex >= 0);
                    var failedTypeParameter = candidateForTypeArgumentError.typeParameters[resultOfFailedInference.failedTypeParameterIndex];
                    var inferenceCandidates = getInferenceCandidates(resultOfFailedInference, resultOfFailedInference.failedTypeParameterIndex);
                    var diagnosticChainHead = ts.chainDiagnosticMessages(undefined, ts.Diagnostics.The_type_argument_for_type_parameter_0_cannot_be_inferred_from_the_usage_Consider_specifying_the_type_arguments_explicitly, typeToString(failedTypeParameter));
                    reportNoCommonSupertypeError(inferenceCandidates, node.expression || node.tag, diagnosticChainHead);
                }
            }
            else {
                error(node, ts.Diagnostics.Supplied_parameters_do_not_match_any_signature_of_call_target);
            }
            if (!produceDiagnostics) {
                for (var i = 0, n = candidates.length; i < n; i++) {
                    if (hasCorrectArity(node, args, candidates[i])) {
                        return candidates[i];
                    }
                }
            }
            return resolveErrorCall(node);
            function chooseOverload(candidates, relation) {
                for (var i = 0; i < candidates.length; i++) {
                    if (!hasCorrectArity(node, args, candidates[i])) {
                        continue;
                    }
                    var originalCandidate = candidates[i];
                    var inferenceResult;
                    while (true) {
                        var candidate = originalCandidate;
                        if (candidate.typeParameters) {
                            var typeArgumentTypes;
                            var typeArgumentsAreValid;
                            if (typeArguments) {
                                typeArgumentTypes = new Array(candidate.typeParameters.length);
                                typeArgumentsAreValid = checkTypeArguments(candidate, typeArguments, typeArgumentTypes, false);
                            }
                            else {
                                inferenceResult = inferTypeArguments(candidate, args, excludeArgument);
                                typeArgumentsAreValid = inferenceResult.failedTypeParameterIndex < 0;
                                typeArgumentTypes = inferenceResult.inferredTypes;
                            }
                            if (!typeArgumentsAreValid) {
                                break;
                            }
                            candidate = getSignatureInstantiation(candidate, typeArgumentTypes);
                        }
                        if (!checkApplicableSignature(node, args, candidate, relation, excludeArgument, false)) {
                            break;
                        }
                        var index = excludeArgument ? ts.indexOf(excludeArgument, true) : -1;
                        if (index < 0) {
                            return candidate;
                        }
                        excludeArgument[index] = false;
                    }
                    if (originalCandidate.typeParameters) {
                        var instantiatedCandidate = candidate;
                        if (typeArgumentsAreValid) {
                            candidateForArgumentError = instantiatedCandidate;
                        }
                        else {
                            candidateForTypeArgumentError = originalCandidate;
                            if (!typeArguments) {
                                resultOfFailedInference = inferenceResult;
                            }
                        }
                    }
                    else {
                        ts.Debug.assert(originalCandidate === candidate);
                        candidateForArgumentError = originalCandidate;
                    }
                }
                return undefined;
            }
        }
        function resolveCallExpression(node, candidatesOutArray) {
            if (node.expression.kind === 90) {
                var superType = checkSuperExpression(node.expression);
                if (superType !== unknownType) {
                    return resolveCall(node, getSignaturesOfType(superType, 1), candidatesOutArray);
                }
                return resolveUntypedCall(node);
            }
            var funcType = checkExpression(node.expression);
            var apparentType = getApparentType(funcType);
            if (apparentType === unknownType) {
                return resolveErrorCall(node);
            }
            var callSignatures = getSignaturesOfType(apparentType, 0);
            var constructSignatures = getSignaturesOfType(apparentType, 1);
            if (funcType === anyType || (!callSignatures.length && !constructSignatures.length && !(funcType.flags & 16384) && isTypeAssignableTo(funcType, globalFunctionType))) {
                if (node.typeArguments) {
                    error(node, ts.Diagnostics.Untyped_function_calls_may_not_accept_type_arguments);
                }
                return resolveUntypedCall(node);
            }
            if (!callSignatures.length) {
                if (constructSignatures.length) {
                    error(node, ts.Diagnostics.Value_of_type_0_is_not_callable_Did_you_mean_to_include_new, typeToString(funcType));
                }
                else {
                    error(node, ts.Diagnostics.Cannot_invoke_an_expression_whose_type_lacks_a_call_signature);
                }
                return resolveErrorCall(node);
            }
            return resolveCall(node, callSignatures, candidatesOutArray);
        }
        function resolveNewExpression(node, candidatesOutArray) {
            if (node.arguments && languageVersion < 2) {
                var spreadIndex = getSpreadArgumentIndex(node.arguments);
                if (spreadIndex >= 0) {
                    error(node.arguments[spreadIndex], ts.Diagnostics.Spread_operator_in_new_expressions_is_only_available_when_targeting_ECMAScript_6_and_higher);
                }
            }
            var expressionType = checkExpression(node.expression);
            if (expressionType === anyType) {
                if (node.typeArguments) {
                    error(node, ts.Diagnostics.Untyped_function_calls_may_not_accept_type_arguments);
                }
                return resolveUntypedCall(node);
            }
            expressionType = getApparentType(expressionType);
            if (expressionType === unknownType) {
                return resolveErrorCall(node);
            }
            var constructSignatures = getSignaturesOfType(expressionType, 1);
            if (constructSignatures.length) {
                return resolveCall(node, constructSignatures, candidatesOutArray);
            }
            var callSignatures = getSignaturesOfType(expressionType, 0);
            if (callSignatures.length) {
                var signature = resolveCall(node, callSignatures, candidatesOutArray);
                if (getReturnTypeOfSignature(signature) !== voidType) {
                    error(node, ts.Diagnostics.Only_a_void_function_can_be_called_with_the_new_keyword);
                }
                return signature;
            }
            error(node, ts.Diagnostics.Cannot_use_new_with_an_expression_whose_type_lacks_a_call_or_construct_signature);
            return resolveErrorCall(node);
        }
        function resolveTaggedTemplateExpression(node, candidatesOutArray) {
            var tagType = checkExpression(node.tag);
            var apparentType = getApparentType(tagType);
            if (apparentType === unknownType) {
                return resolveErrorCall(node);
            }
            var callSignatures = getSignaturesOfType(apparentType, 0);
            if (tagType === anyType || (!callSignatures.length && !(tagType.flags & 16384) && isTypeAssignableTo(tagType, globalFunctionType))) {
                return resolveUntypedCall(node);
            }
            if (!callSignatures.length) {
                error(node, ts.Diagnostics.Cannot_invoke_an_expression_whose_type_lacks_a_call_signature);
                return resolveErrorCall(node);
            }
            return resolveCall(node, callSignatures, candidatesOutArray);
        }
        function getResolvedSignature(node, candidatesOutArray) {
            var links = getNodeLinks(node);
            if (!links.resolvedSignature || candidatesOutArray) {
                links.resolvedSignature = anySignature;
                if (node.kind === 151) {
                    links.resolvedSignature = resolveCallExpression(node, candidatesOutArray);
                }
                else if (node.kind === 152) {
                    links.resolvedSignature = resolveNewExpression(node, candidatesOutArray);
                }
                else if (node.kind === 153) {
                    links.resolvedSignature = resolveTaggedTemplateExpression(node, candidatesOutArray);
                }
                else {
                    ts.Debug.fail("Branch in 'getResolvedSignature' should be unreachable.");
                }
            }
            return links.resolvedSignature;
        }
        function checkCallExpression(node) {
            checkGrammarTypeArguments(node, node.typeArguments) || checkGrammarArguments(node, node.arguments);
            var signature = getResolvedSignature(node);
            if (node.expression.kind === 90) {
                return voidType;
            }
            if (node.kind === 152) {
                var declaration = signature.declaration;
                if (declaration && declaration.kind !== 129 && declaration.kind !== 133 && declaration.kind !== 137) {
                    if (compilerOptions.noImplicitAny) {
                        error(node, ts.Diagnostics.new_expression_whose_target_lacks_a_construct_signature_implicitly_has_an_any_type);
                    }
                    return anyType;
                }
            }
            return getReturnTypeOfSignature(signature);
        }
        function checkTaggedTemplateExpression(node) {
            if (languageVersion < 2) {
                grammarErrorOnFirstToken(node.template, ts.Diagnostics.Tagged_templates_are_only_available_when_targeting_ECMAScript_6_and_higher);
            }
            return getReturnTypeOfSignature(getResolvedSignature(node));
        }
        function checkTypeAssertion(node) {
            var exprType = checkExpression(node.expression);
            var targetType = getTypeFromTypeNode(node.type);
            if (produceDiagnostics && targetType !== unknownType) {
                var widenedType = getWidenedType(exprType);
                if (!(isTypeAssignableTo(targetType, widenedType))) {
                    checkTypeAssignableTo(exprType, targetType, node, ts.Diagnostics.Neither_type_0_nor_type_1_is_assignable_to_the_other);
                }
            }
            return targetType;
        }
        function getTypeAtPosition(signature, pos) {
            if (pos >= 0) {
                return signature.hasRestParameter ? pos < signature.parameters.length - 1 ? getTypeOfSymbol(signature.parameters[pos]) : getRestTypeOfSignature(signature) : pos < signature.parameters.length ? getTypeOfSymbol(signature.parameters[pos]) : anyType;
            }
            return signature.hasRestParameter ? getTypeOfSymbol(signature.parameters[signature.parameters.length - 1]) : anyArrayType;
        }
        function assignContextualParameterTypes(signature, context, mapper) {
            var len = signature.parameters.length - (signature.hasRestParameter ? 1 : 0);
            for (var i = 0; i < len; i++) {
                var parameter = signature.parameters[i];
                var links = getSymbolLinks(parameter);
                links.type = instantiateType(getTypeAtPosition(context, i), mapper);
            }
            if (signature.hasRestParameter && context.hasRestParameter && signature.parameters.length >= context.parameters.length) {
                var parameter = signature.parameters[signature.parameters.length - 1];
                var links = getSymbolLinks(parameter);
                links.type = instantiateType(getTypeOfSymbol(context.parameters[context.parameters.length - 1]), mapper);
            }
        }
        function getReturnTypeFromBody(func, contextualMapper) {
            var contextualSignature = getContextualSignatureForFunctionLikeDeclaration(func);
            if (!func.body) {
                return unknownType;
            }
            if (func.body.kind !== 170) {
                var type = checkExpressionCached(func.body, contextualMapper);
            }
            else {
                var types = checkAndAggregateReturnExpressionTypes(func.body, contextualMapper);
                if (types.length === 0) {
                    return voidType;
                }
                var type = contextualSignature ? getUnionType(types) : getCommonSupertype(types);
                if (!type) {
                    error(func, ts.Diagnostics.No_best_common_type_exists_among_return_expressions);
                    return unknownType;
                }
            }
            if (!contextualSignature) {
                reportErrorsFromWidening(func, type);
            }
            return getWidenedType(type);
        }
        function checkAndAggregateReturnExpressionTypes(body, contextualMapper) {
            var aggregatedTypes = [];
            ts.forEachReturnStatement(body, function (returnStatement) {
                var expr = returnStatement.expression;
                if (expr) {
                    var type = checkExpressionCached(expr, contextualMapper);
                    if (!ts.contains(aggregatedTypes, type)) {
                        aggregatedTypes.push(type);
                    }
                }
            });
            return aggregatedTypes;
        }
        function bodyContainsAReturnStatement(funcBody) {
            return ts.forEachReturnStatement(funcBody, function (returnStatement) {
                return true;
            });
        }
        function bodyContainsSingleThrowStatement(body) {
            return (body.statements.length === 1) && (body.statements[0].kind === 185);
        }
        function checkIfNonVoidFunctionHasReturnExpressionsOrSingleThrowStatment(func, returnType) {
            if (!produceDiagnostics) {
                return;
            }
            if (returnType === voidType || returnType === anyType) {
                return;
            }
            if (ts.nodeIsMissing(func.body) || func.body.kind !== 170) {
                return;
            }
            var bodyBlock = func.body;
            if (bodyContainsAReturnStatement(bodyBlock)) {
                return;
            }
            if (bodyContainsSingleThrowStatement(bodyBlock)) {
                return;
            }
            error(func.type, ts.Diagnostics.A_function_whose_declared_type_is_neither_void_nor_any_must_return_a_value_or_consist_of_a_single_throw_statement);
        }
        function checkFunctionExpressionOrObjectLiteralMethod(node, contextualMapper) {
            ts.Debug.assert(node.kind !== 128 || ts.isObjectLiteralMethod(node));
            var hasGrammarError = checkGrammarFunctionLikeDeclaration(node);
            if (!hasGrammarError && node.kind === 156) {
                checkGrammarFunctionName(node.name) || checkGrammarForGenerator(node);
            }
            if (contextualMapper === identityMapper && isContextSensitive(node)) {
                return anyFunctionType;
            }
            var links = getNodeLinks(node);
            var type = getTypeOfSymbol(node.symbol);
            if (!(links.flags & 64)) {
                var contextualSignature = getContextualSignature(node);
                if (!(links.flags & 64)) {
                    links.flags |= 64;
                    if (contextualSignature) {
                        var signature = getSignaturesOfType(type, 0)[0];
                        if (isContextSensitive(node)) {
                            assignContextualParameterTypes(signature, contextualSignature, contextualMapper || identityMapper);
                        }
                        if (!node.type) {
                            signature.resolvedReturnType = resolvingType;
                            var returnType = getReturnTypeFromBody(node, contextualMapper);
                            if (signature.resolvedReturnType === resolvingType) {
                                signature.resolvedReturnType = returnType;
                            }
                        }
                    }
                    checkSignatureDeclaration(node);
                }
            }
            if (produceDiagnostics && node.kind !== 128 && node.kind !== 127) {
                checkCollisionWithCapturedSuperVariable(node, node.name);
                checkCollisionWithCapturedThisVariable(node, node.name);
            }
            return type;
        }
        function checkFunctionExpressionOrObjectLiteralMethodBody(node) {
            ts.Debug.assert(node.kind !== 128 || ts.isObjectLiteralMethod(node));
            if (node.type) {
                checkIfNonVoidFunctionHasReturnExpressionsOrSingleThrowStatment(node, getTypeFromTypeNode(node.type));
            }
            if (node.body) {
                if (node.body.kind === 170) {
                    checkSourceElement(node.body);
                }
                else {
                    var exprType = checkExpression(node.body);
                    if (node.type) {
                        checkTypeAssignableTo(exprType, getTypeFromTypeNode(node.type), node.body, undefined);
                    }
                    checkFunctionExpressionBodies(node.body);
                }
            }
        }
        function checkArithmeticOperandType(operand, type, diagnostic) {
            if (!isTypeOfKind(type, 1 | 132)) {
                error(operand, diagnostic);
                return false;
            }
            return true;
        }
        function checkReferenceExpression(n, invalidReferenceMessage, constantVarianleMessage) {
            function findSymbol(n) {
                var symbol = getNodeLinks(n).resolvedSymbol;
                return symbol && getExportSymbolOfValueSymbolIfExported(symbol);
            }
            function isReferenceOrErrorExpression(n) {
                switch (n.kind) {
                    case 64:
                        var symbol = findSymbol(n);
                        return !symbol || symbol === unknownSymbol || symbol === argumentsSymbol || (symbol.flags & 3) !== 0;
                    case 149:
                        var symbol = findSymbol(n);
                        return !symbol || symbol === unknownSymbol || (symbol.flags & ~8) !== 0;
                    case 150:
                        return true;
                    case 155:
                        return isReferenceOrErrorExpression(n.expression);
                    default:
                        return false;
                }
            }
            function isConstVariableReference(n) {
                switch (n.kind) {
                    case 64:
                    case 149:
                        var symbol = findSymbol(n);
                        return symbol && (symbol.flags & 3) !== 0 && (getDeclarationFlagsFromSymbol(symbol) & 4096) !== 0;
                    case 150:
                        var index = n.argumentExpression;
                        var symbol = findSymbol(n.expression);
                        if (symbol && index && index.kind === 8) {
                            var name = index.text;
                            var prop = getPropertyOfType(getTypeOfSymbol(symbol), name);
                            return prop && (prop.flags & 3) !== 0 && (getDeclarationFlagsFromSymbol(prop) & 4096) !== 0;
                        }
                        return false;
                    case 155:
                        return isConstVariableReference(n.expression);
                    default:
                        return false;
                }
            }
            if (!isReferenceOrErrorExpression(n)) {
                error(n, invalidReferenceMessage);
                return false;
            }
            if (isConstVariableReference(n)) {
                error(n, constantVarianleMessage);
                return false;
            }
            return true;
        }
        function checkDeleteExpression(node) {
            if (node.parserContextFlags & 1 && node.expression.kind === 64) {
                grammarErrorOnNode(node.expression, ts.Diagnostics.delete_cannot_be_called_on_an_identifier_in_strict_mode);
            }
            var operandType = checkExpression(node.expression);
            return booleanType;
        }
        function checkTypeOfExpression(node) {
            var operandType = checkExpression(node.expression);
            return stringType;
        }
        function checkVoidExpression(node) {
            var operandType = checkExpression(node.expression);
            return undefinedType;
        }
        function checkPrefixUnaryExpression(node) {
            if ((node.operator === 38 || node.operator === 39)) {
                checkGrammarEvalOrArgumentsInStrictMode(node, node.operand);
            }
            var operandType = checkExpression(node.operand);
            switch (node.operator) {
                case 33:
                case 34:
                case 47:
                    return numberType;
                case 46:
                    return booleanType;
                case 38:
                case 39:
                    var ok = checkArithmeticOperandType(node.operand, operandType, ts.Diagnostics.An_arithmetic_operand_must_be_of_type_any_number_or_an_enum_type);
                    if (ok) {
                        checkReferenceExpression(node.operand, ts.Diagnostics.The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_property_or_indexer, ts.Diagnostics.The_operand_of_an_increment_or_decrement_operator_cannot_be_a_constant);
                    }
                    return numberType;
            }
            return unknownType;
        }
        function checkPostfixUnaryExpression(node) {
            checkGrammarEvalOrArgumentsInStrictMode(node, node.operand);
            var operandType = checkExpression(node.operand);
            var ok = checkArithmeticOperandType(node.operand, operandType, ts.Diagnostics.An_arithmetic_operand_must_be_of_type_any_number_or_an_enum_type);
            if (ok) {
                checkReferenceExpression(node.operand, ts.Diagnostics.The_operand_of_an_increment_or_decrement_operator_must_be_a_variable_property_or_indexer, ts.Diagnostics.The_operand_of_an_increment_or_decrement_operator_cannot_be_a_constant);
            }
            return numberType;
        }
        function isTypeOfKind(type, kind) {
            if (type.flags & kind) {
                return true;
            }
            if (type.flags & 16384) {
                var types = type.types;
                for (var i = 0; i < types.length; i++) {
                    if (!(types[i].flags & kind)) {
                        return false;
                    }
                }
                return true;
            }
            return false;
        }
        function isConstEnumObjectType(type) {
            return type.flags & (48128 | 32768) && type.symbol && isConstEnumSymbol(type.symbol);
        }
        function isConstEnumSymbol(symbol) {
            return (symbol.flags & 128) !== 0;
        }
        function checkInstanceOfExpression(node, leftType, rightType) {
            if (isTypeOfKind(leftType, 510)) {
                error(node.left, ts.Diagnostics.The_left_hand_side_of_an_instanceof_expression_must_be_of_type_any_an_object_type_or_a_type_parameter);
            }
            if (!(rightType.flags & 1 || isTypeSubtypeOf(rightType, globalFunctionType))) {
                error(node.right, ts.Diagnostics.The_right_hand_side_of_an_instanceof_expression_must_be_of_type_any_or_of_a_type_assignable_to_the_Function_interface_type);
            }
            return booleanType;
        }
        function checkInExpression(node, leftType, rightType) {
            if (!isTypeOfKind(leftType, 1 | 258 | 132)) {
                error(node.left, ts.Diagnostics.The_left_hand_side_of_an_in_expression_must_be_of_types_any_string_or_number);
            }
            if (!isTypeOfKind(rightType, 1 | 48128 | 512)) {
                error(node.right, ts.Diagnostics.The_right_hand_side_of_an_in_expression_must_be_of_type_any_an_object_type_or_a_type_parameter);
            }
            return booleanType;
        }
        function checkObjectLiteralAssignment(node, sourceType, contextualMapper) {
            var properties = node.properties;
            for (var i = 0; i < properties.length; i++) {
                var p = properties[i];
                if (p.kind === 204 || p.kind === 205) {
                    var name = p.name;
                    var type = sourceType.flags & 1 ? sourceType : getTypeOfPropertyOfType(sourceType, name.text) || isNumericLiteralName(name.text) && getIndexTypeOfType(sourceType, 1) || getIndexTypeOfType(sourceType, 0);
                    if (type) {
                        checkDestructuringAssignment(p.initializer || name, type);
                    }
                    else {
                        error(name, ts.Diagnostics.Type_0_has_no_property_1_and_no_string_index_signature, typeToString(sourceType), ts.declarationNameToString(name));
                    }
                }
                else {
                    error(p, ts.Diagnostics.Property_assignment_expected);
                }
            }
            return sourceType;
        }
        function checkArrayLiteralAssignment(node, sourceType, contextualMapper) {
            if (!isTypeAssignableTo(sourceType, anyArrayType)) {
                error(node, ts.Diagnostics.Type_0_is_not_an_array_type, typeToString(sourceType));
                return sourceType;
            }
            var elements = node.elements;
            for (var i = 0; i < elements.length; i++) {
                var e = elements[i];
                if (e.kind !== 168) {
                    if (e.kind !== 167) {
                        var propName = "" + i;
                        var type = sourceType.flags & 1 ? sourceType : isTupleLikeType(sourceType) ? getTypeOfPropertyOfType(sourceType, propName) : getIndexTypeOfType(sourceType, 1);
                        if (type) {
                            checkDestructuringAssignment(e, type, contextualMapper);
                        }
                        else {
                            error(e, ts.Diagnostics.Type_0_has_no_property_1, typeToString(sourceType), propName);
                        }
                    }
                    else {
                        if (i === elements.length - 1) {
                            checkReferenceAssignment(e.expression, sourceType, contextualMapper);
                        }
                        else {
                            error(e, ts.Diagnostics.A_rest_element_must_be_last_in_an_array_destructuring_pattern);
                        }
                    }
                }
            }
            return sourceType;
        }
        function checkDestructuringAssignment(target, sourceType, contextualMapper) {
            if (target.kind === 163 && target.operator === 52) {
                checkBinaryExpression(target, contextualMapper);
                target = target.left;
            }
            if (target.kind === 148) {
                return checkObjectLiteralAssignment(target, sourceType, contextualMapper);
            }
            if (target.kind === 147) {
                return checkArrayLiteralAssignment(target, sourceType, contextualMapper);
            }
            return checkReferenceAssignment(target, sourceType, contextualMapper);
        }
        function checkReferenceAssignment(target, sourceType, contextualMapper) {
            var targetType = checkExpression(target, contextualMapper);
            if (checkReferenceExpression(target, ts.Diagnostics.Invalid_left_hand_side_of_assignment_expression, ts.Diagnostics.Left_hand_side_of_assignment_expression_cannot_be_a_constant)) {
                checkTypeAssignableTo(sourceType, targetType, target, undefined);
            }
            return sourceType;
        }
        function checkBinaryExpression(node, contextualMapper) {
            if (ts.isLeftHandSideExpression(node.left) && ts.isAssignmentOperator(node.operator)) {
                checkGrammarEvalOrArgumentsInStrictMode(node, node.left);
            }
            var operator = node.operator;
            if (operator === 52 && (node.left.kind === 148 || node.left.kind === 147)) {
                return checkDestructuringAssignment(node.left, checkExpression(node.right, contextualMapper), contextualMapper);
            }
            var leftType = checkExpression(node.left, contextualMapper);
            var rightType = checkExpression(node.right, contextualMapper);
            switch (operator) {
                case 35:
                case 55:
                case 36:
                case 56:
                case 37:
                case 57:
                case 34:
                case 54:
                case 40:
                case 58:
                case 41:
                case 59:
                case 42:
                case 60:
                case 44:
                case 62:
                case 45:
                case 63:
                case 43:
                case 61:
                    if (leftType.flags & (32 | 64))
                        leftType = rightType;
                    if (rightType.flags & (32 | 64))
                        rightType = leftType;
                    var suggestedOperator;
                    if ((leftType.flags & 8) && (rightType.flags & 8) && (suggestedOperator = getSuggestedBooleanOperator(node.operator)) !== undefined) {
                        error(node, ts.Diagnostics.The_0_operator_is_not_allowed_for_boolean_types_Consider_using_1_instead, ts.tokenToString(node.operator), ts.tokenToString(suggestedOperator));
                    }
                    else {
                        var leftOk = checkArithmeticOperandType(node.left, leftType, ts.Diagnostics.The_left_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type);
                        var rightOk = checkArithmeticOperandType(node.right, rightType, ts.Diagnostics.The_right_hand_side_of_an_arithmetic_operation_must_be_of_type_any_number_or_an_enum_type);
                        if (leftOk && rightOk) {
                            checkAssignmentOperator(numberType);
                        }
                    }
                    return numberType;
                case 33:
                case 53:
                    if (leftType.flags & (32 | 64))
                        leftType = rightType;
                    if (rightType.flags & (32 | 64))
                        rightType = leftType;
                    var resultType;
                    if (isTypeOfKind(leftType, 132) && isTypeOfKind(rightType, 132)) {
                        resultType = numberType;
                    }
                    else if (isTypeOfKind(leftType, 258) || isTypeOfKind(rightType, 258)) {
                        resultType = stringType;
                    }
                    else if (leftType.flags & 1 || rightType.flags & 1) {
                        resultType = anyType;
                    }
                    if (!resultType) {
                        reportOperatorError();
                        return anyType;
                    }
                    if (operator === 53) {
                        checkAssignmentOperator(resultType);
                    }
                    return resultType;
                case 28:
                case 29:
                case 30:
                case 31:
                case 24:
                case 25:
                case 26:
                case 27:
                    if (!isTypeAssignableTo(leftType, rightType) && !isTypeAssignableTo(rightType, leftType)) {
                        reportOperatorError();
                    }
                    return booleanType;
                case 86:
                    return checkInstanceOfExpression(node, leftType, rightType);
                case 85:
                    return checkInExpression(node, leftType, rightType);
                case 48:
                    return rightType;
                case 49:
                    return getUnionType([leftType, rightType]);
                case 52:
                    checkAssignmentOperator(rightType);
                    return rightType;
                case 23:
                    return rightType;
            }
            function getSuggestedBooleanOperator(operator) {
                switch (operator) {
                    case 44:
                    case 62:
                        return 49;
                    case 45:
                    case 63:
                        return 31;
                    case 43:
                    case 61:
                        return 48;
                    default:
                        return undefined;
                }
            }
            function checkAssignmentOperator(valueType) {
                if (produceDiagnostics && operator >= 52 && operator <= 63) {
                    var ok = checkReferenceExpression(node.left, ts.Diagnostics.Invalid_left_hand_side_of_assignment_expression, ts.Diagnostics.Left_hand_side_of_assignment_expression_cannot_be_a_constant);
                    if (ok) {
                        checkTypeAssignableTo(valueType, leftType, node.left, undefined);
                    }
                }
            }
            function reportOperatorError() {
                error(node, ts.Diagnostics.Operator_0_cannot_be_applied_to_types_1_and_2, ts.tokenToString(node.operator), typeToString(leftType), typeToString(rightType));
            }
        }
        function checkYieldExpression(node) {
            if (!(node.parserContextFlags & 4)) {
                grammarErrorOnFirstToken(node, ts.Diagnostics.yield_expression_must_be_contained_within_a_generator_declaration);
            }
            else {
                grammarErrorOnFirstToken(node, ts.Diagnostics.yield_expressions_are_not_currently_supported);
            }
        }
        function checkConditionalExpression(node, contextualMapper) {
            checkExpression(node.condition);
            var type1 = checkExpression(node.whenTrue, contextualMapper);
            var type2 = checkExpression(node.whenFalse, contextualMapper);
            return getUnionType([type1, type2]);
        }
        function checkTemplateExpression(node) {
            ts.forEach(node.templateSpans, function (templateSpan) {
                checkExpression(templateSpan.expression);
            });
            return stringType;
        }
        function checkExpressionWithContextualType(node, contextualType, contextualMapper) {
            var saveContextualType = node.contextualType;
            node.contextualType = contextualType;
            var result = checkExpression(node, contextualMapper);
            node.contextualType = saveContextualType;
            return result;
        }
        function checkExpressionCached(node, contextualMapper) {
            var links = getNodeLinks(node);
            if (!links.resolvedType) {
                links.resolvedType = checkExpression(node, contextualMapper);
            }
            return links.resolvedType;
        }
        function checkPropertyAssignment(node, contextualMapper) {
            if (ts.hasDynamicName(node)) {
                checkComputedPropertyName(node.name);
            }
            return checkExpression(node.initializer, contextualMapper);
        }
        function checkObjectLiteralMethod(node, contextualMapper) {
            checkGrammarMethod(node);
            if (ts.hasDynamicName(node)) {
                checkComputedPropertyName(node.name);
            }
            var uninstantiatedType = checkFunctionExpressionOrObjectLiteralMethod(node, contextualMapper);
            return instantiateTypeWithSingleGenericCallSignature(node, uninstantiatedType, contextualMapper);
        }
        function instantiateTypeWithSingleGenericCallSignature(node, type, contextualMapper) {
            if (contextualMapper && contextualMapper !== identityMapper) {
                var signature = getSingleCallSignature(type);
                if (signature && signature.typeParameters) {
                    var contextualType = getContextualType(node);
                    if (contextualType) {
                        var contextualSignature = getSingleCallSignature(contextualType);
                        if (contextualSignature && !contextualSignature.typeParameters) {
                            return getOrCreateTypeFromSignature(instantiateSignatureInContextOf(signature, contextualSignature, contextualMapper));
                        }
                    }
                }
            }
            return type;
        }
        function checkExpression(node, contextualMapper) {
            return checkExpressionOrQualifiedName(node, contextualMapper);
        }
        function checkExpressionOrQualifiedName(node, contextualMapper) {
            var type;
            if (node.kind == 121) {
                type = checkQualifiedName(node);
            }
            else {
                var uninstantiatedType = checkExpressionWorker(node, contextualMapper);
                type = instantiateTypeWithSingleGenericCallSignature(node, uninstantiatedType, contextualMapper);
            }
            if (isConstEnumObjectType(type)) {
                var ok = (node.parent.kind === 149 && node.parent.expression === node) || (node.parent.kind === 150 && node.parent.expression === node) || ((node.kind === 64 || node.kind === 121) && isInRightSideOfImportOrExportAssignment(node));
                if (!ok) {
                    error(node, ts.Diagnostics.const_enums_can_only_be_used_in_property_or_index_access_expressions_or_the_right_hand_side_of_an_import_declaration_or_export_assignment);
                }
            }
            return type;
        }
        function checkNumericLiteral(node) {
            checkGrammarNumbericLiteral(node);
            return numberType;
        }
        function checkExpressionWorker(node, contextualMapper) {
            switch (node.kind) {
                case 64:
                    return checkIdentifier(node);
                case 92:
                    return checkThisExpression(node);
                case 90:
                    return checkSuperExpression(node);
                case 88:
                    return nullType;
                case 94:
                case 79:
                    return booleanType;
                case 7:
                    return checkNumericLiteral(node);
                case 165:
                    return checkTemplateExpression(node);
                case 8:
                case 10:
                    return stringType;
                case 9:
                    return globalRegExpType;
                case 147:
                    return checkArrayLiteral(node, contextualMapper);
                case 148:
                    return checkObjectLiteral(node, contextualMapper);
                case 149:
                    return checkPropertyAccessExpression(node);
                case 150:
                    return checkIndexedAccess(node);
                case 151:
                case 152:
                    return checkCallExpression(node);
                case 153:
                    return checkTaggedTemplateExpression(node);
                case 154:
                    return checkTypeAssertion(node);
                case 155:
                    return checkExpression(node.expression, contextualMapper);
                case 156:
                case 157:
                    return checkFunctionExpressionOrObjectLiteralMethod(node, contextualMapper);
                case 159:
                    return checkTypeOfExpression(node);
                case 158:
                    return checkDeleteExpression(node);
                case 160:
                    return checkVoidExpression(node);
                case 161:
                    return checkPrefixUnaryExpression(node);
                case 162:
                    return checkPostfixUnaryExpression(node);
                case 163:
                    return checkBinaryExpression(node, contextualMapper);
                case 164:
                    return checkConditionalExpression(node, contextualMapper);
                case 167:
                    return checkSpreadElementExpression(node, contextualMapper);
                case 168:
                    return undefinedType;
                case 166:
                    checkYieldExpression(node);
                    return unknownType;
            }
            return unknownType;
        }
        function checkTypeParameter(node) {
            if (node.expression) {
                grammarErrorOnFirstToken(node.expression, ts.Diagnostics.Type_expected);
            }
            checkSourceElement(node.constraint);
            if (produceDiagnostics) {
                checkTypeParameterHasIllegalReferencesInConstraint(node);
                checkTypeNameIsReserved(node.name, ts.Diagnostics.Type_parameter_name_cannot_be_0);
            }
        }
        function checkParameter(node) {
            checkGrammarModifiers(node) || checkGrammarEvalOrArgumentsInStrictMode(node, node.name);
            checkVariableLikeDeclaration(node);
            var func = ts.getContainingFunction(node);
            if (node.flags & 112) {
                func = ts.getContainingFunction(node);
                if (!(func.kind === 129 && ts.nodeIsPresent(func.body))) {
                    error(node, ts.Diagnostics.A_parameter_property_is_only_allowed_in_a_constructor_implementation);
                }
            }
            if (node.questionToken && ts.isBindingPattern(node.name) && func.body) {
                error(node, ts.Diagnostics.A_binding_pattern_parameter_cannot_be_optional_in_an_implementation_signature);
            }
            if (node.dotDotDotToken) {
                if (!isArrayType(getTypeOfSymbol(node.symbol))) {
                    error(node, ts.Diagnostics.A_rest_parameter_must_be_of_an_array_type);
                }
            }
        }
        function checkSignatureDeclaration(node) {
            if (node.kind === 134) {
                checkGrammarIndexSignature(node);
            }
            else if (node.kind === 136 || node.kind === 190 || node.kind === 137 || node.kind === 132 || node.kind === 129 || node.kind === 133) {
                checkGrammarFunctionLikeDeclaration(node);
            }
            checkTypeParameters(node.typeParameters);
            ts.forEach(node.parameters, checkParameter);
            if (node.type) {
                checkSourceElement(node.type);
            }
            if (produceDiagnostics) {
                checkCollisionWithArgumentsInGeneratedCode(node);
                if (compilerOptions.noImplicitAny && !node.type) {
                    switch (node.kind) {
                        case 133:
                            error(node, ts.Diagnostics.Construct_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type);
                            break;
                        case 132:
                            error(node, ts.Diagnostics.Call_signature_which_lacks_return_type_annotation_implicitly_has_an_any_return_type);
                            break;
                    }
                }
            }
            checkSpecializedSignatureDeclaration(node);
        }
        function checkTypeForDuplicateIndexSignatures(node) {
            if (node.kind === 192) {
                var nodeSymbol = getSymbolOfNode(node);
                if (nodeSymbol.declarations.length > 0 && nodeSymbol.declarations[0] !== node) {
                    return;
                }
            }
            var indexSymbol = getIndexSymbol(getSymbolOfNode(node));
            if (indexSymbol) {
                var seenNumericIndexer = false;
                var seenStringIndexer = false;
                for (var i = 0, len = indexSymbol.declarations.length; i < len; ++i) {
                    var declaration = indexSymbol.declarations[i];
                    if (declaration.parameters.length === 1 && declaration.parameters[0].type) {
                        switch (declaration.parameters[0].type.kind) {
                            case 119:
                                if (!seenStringIndexer) {
                                    seenStringIndexer = true;
                                }
                                else {
                                    error(declaration, ts.Diagnostics.Duplicate_string_index_signature);
                                }
                                break;
                            case 117:
                                if (!seenNumericIndexer) {
                                    seenNumericIndexer = true;
                                }
                                else {
                                    error(declaration, ts.Diagnostics.Duplicate_number_index_signature);
                                }
                                break;
                        }
                    }
                }
            }
        }
        function checkPropertyDeclaration(node) {
            checkGrammarModifiers(node) || checkGrammarProperty(node);
            checkVariableLikeDeclaration(node);
        }
        function checkMethodDeclaration(node) {
            checkGrammarMethod(node) || checkGrammarComputedPropertyName(node.name);
            checkFunctionLikeDeclaration(node);
        }
        function checkConstructorDeclaration(node) {
            checkSignatureDeclaration(node);
            checkGrammarConstructorTypeParameters(node) || checkGrammarConstructorTypeAnnotation(node);
            checkSourceElement(node.body);
            var symbol = getSymbolOfNode(node);
            var firstDeclaration = ts.getDeclarationOfKind(symbol, node.kind);
            if (node === firstDeclaration) {
                checkFunctionOrConstructorSymbol(symbol);
            }
            if (ts.nodeIsMissing(node.body)) {
                return;
            }
            if (!produceDiagnostics) {
                return;
            }
            function isSuperCallExpression(n) {
                return n.kind === 151 && n.expression.kind === 90;
            }
            function containsSuperCall(n) {
                if (isSuperCallExpression(n)) {
                    return true;
                }
                switch (n.kind) {
                    case 156:
                    case 190:
                    case 157:
                    case 148: return false;
                    default: return ts.forEachChild(n, containsSuperCall);
                }
            }
            function markThisReferencesAsErrors(n) {
                if (n.kind === 92) {
                    error(n, ts.Diagnostics.this_cannot_be_referenced_in_current_location);
                }
                else if (n.kind !== 156 && n.kind !== 190) {
                    ts.forEachChild(n, markThisReferencesAsErrors);
                }
            }
            function isInstancePropertyWithInitializer(n) {
                return n.kind === 126 && !(n.flags & 128) && !!n.initializer;
            }
            if (ts.getClassBaseTypeNode(node.parent)) {
                if (containsSuperCall(node.body)) {
                    var superCallShouldBeFirst = ts.forEach(node.parent.members, isInstancePropertyWithInitializer) || ts.forEach(node.parameters, function (p) { return p.flags & (16 | 32 | 64); });
                    if (superCallShouldBeFirst) {
                        var statements = node.body.statements;
                        if (!statements.length || statements[0].kind !== 173 || !isSuperCallExpression(statements[0].expression)) {
                            error(node, ts.Diagnostics.A_super_call_must_be_the_first_statement_in_the_constructor_when_a_class_contains_initialized_properties_or_has_parameter_properties);
                        }
                        else {
                            markThisReferencesAsErrors(statements[0].expression);
                        }
                    }
                }
                else {
                    error(node, ts.Diagnostics.Constructors_for_derived_classes_must_contain_a_super_call);
                }
            }
        }
        function checkAccessorDeclaration(node) {
            if (produceDiagnostics) {
                checkGrammarFunctionLikeDeclaration(node) || checkGrammarAccessor(node) || checkGrammarComputedPropertyName(node.name);
                if (node.kind === 130) {
                    if (!ts.isInAmbientContext(node) && ts.nodeIsPresent(node.body) && !(bodyContainsAReturnStatement(node.body) || bodyContainsSingleThrowStatement(node.body))) {
                        error(node.name, ts.Diagnostics.A_get_accessor_must_return_a_value_or_consist_of_a_single_throw_statement);
                    }
                }
                if (!ts.hasDynamicName(node)) {
                    var otherKind = node.kind === 130 ? 131 : 130;
                    var otherAccessor = ts.getDeclarationOfKind(node.symbol, otherKind);
                    if (otherAccessor) {
                        if (((node.flags & 112) !== (otherAccessor.flags & 112))) {
                            error(node.name, ts.Diagnostics.Getter_and_setter_accessors_do_not_agree_in_visibility);
                        }
                        var currentAccessorType = getAnnotatedAccessorType(node);
                        var otherAccessorType = getAnnotatedAccessorType(otherAccessor);
                        if (currentAccessorType && otherAccessorType) {
                            if (!isTypeIdenticalTo(currentAccessorType, otherAccessorType)) {
                                error(node, ts.Diagnostics.get_and_set_accessor_must_have_the_same_type);
                            }
                        }
                    }
                }
                checkAndStoreTypeOfAccessors(getSymbolOfNode(node));
            }
            checkFunctionLikeDeclaration(node);
        }
        function checkTypeReference(node) {
            checkGrammarTypeArguments(node, node.typeArguments);
            var type = getTypeFromTypeReferenceNode(node);
            if (type !== unknownType && node.typeArguments) {
                var len = node.typeArguments.length;
                for (var i = 0; i < len; i++) {
                    checkSourceElement(node.typeArguments[i]);
                    var constraint = getConstraintOfTypeParameter(type.target.typeParameters[i]);
                    if (produceDiagnostics && constraint) {
                        var typeArgument = type.typeArguments[i];
                        checkTypeAssignableTo(typeArgument, constraint, node, ts.Diagnostics.Type_0_does_not_satisfy_the_constraint_1);
                    }
                }
            }
        }
        function checkTypeQuery(node) {
            getTypeFromTypeQueryNode(node);
        }
        function checkTypeLiteral(node) {
            ts.forEach(node.members, checkSourceElement);
            if (produceDiagnostics) {
                var type = getTypeFromTypeLiteralOrFunctionOrConstructorTypeNode(node);
                checkIndexConstraints(type);
                checkTypeForDuplicateIndexSignatures(node);
            }
        }
        function checkArrayType(node) {
            checkSourceElement(node.elementType);
        }
        function checkTupleType(node) {
            var hasErrorFromDisallowedTrailingComma = checkGrammarForDisallowedTrailingComma(node.elementTypes);
            if (!hasErrorFromDisallowedTrailingComma && node.elementTypes.length === 0) {
                grammarErrorOnNode(node, ts.Diagnostics.A_tuple_type_element_list_cannot_be_empty);
            }
            ts.forEach(node.elementTypes, checkSourceElement);
        }
        function checkUnionType(node) {
            ts.forEach(node.types, checkSourceElement);
        }
        function isPrivateWithinAmbient(node) {
            return (node.flags & 32) && ts.isInAmbientContext(node);
        }
        function checkSpecializedSignatureDeclaration(signatureDeclarationNode) {
            if (!produceDiagnostics) {
                return;
            }
            var signature = getSignatureFromDeclaration(signatureDeclarationNode);
            if (!signature.hasStringLiterals) {
                return;
            }
            if (ts.nodeIsPresent(signatureDeclarationNode.body)) {
                error(signatureDeclarationNode, ts.Diagnostics.A_signature_with_an_implementation_cannot_use_a_string_literal_type);
                return;
            }
            var signaturesToCheck;
            if (!signatureDeclarationNode.name && signatureDeclarationNode.parent && signatureDeclarationNode.parent.kind === 192) {
                ts.Debug.assert(signatureDeclarationNode.kind === 132 || signatureDeclarationNode.kind === 133);
                var signatureKind = signatureDeclarationNode.kind === 132 ? 0 : 1;
                var containingSymbol = getSymbolOfNode(signatureDeclarationNode.parent);
                var containingType = getDeclaredTypeOfSymbol(containingSymbol);
                signaturesToCheck = getSignaturesOfType(containingType, signatureKind);
            }
            else {
                signaturesToCheck = getSignaturesOfSymbol(getSymbolOfNode(signatureDeclarationNode));
            }
            for (var i = 0; i < signaturesToCheck.length; i++) {
                var otherSignature = signaturesToCheck[i];
                if (!otherSignature.hasStringLiterals && isSignatureAssignableTo(signature, otherSignature)) {
                    return;
                }
            }
            error(signatureDeclarationNode, ts.Diagnostics.Specialized_overload_signature_is_not_assignable_to_any_non_specialized_signature);
        }
        function getEffectiveDeclarationFlags(n, flagsToCheck) {
            var flags = ts.getCombinedNodeFlags(n);
            if (n.parent.kind !== 192 && ts.isInAmbientContext(n)) {
                if (!(flags & 2)) {
                    flags |= 1;
                }
                flags |= 2;
            }
            return flags & flagsToCheck;
        }
        function checkFunctionOrConstructorSymbol(symbol) {
            if (!produceDiagnostics) {
                return;
            }
            function getCanonicalOverload(overloads, implementation) {
                var implementationSharesContainerWithFirstOverload = implementation !== undefined && implementation.parent === overloads[0].parent;
                return implementationSharesContainerWithFirstOverload ? implementation : overloads[0];
            }
            function checkFlagAgreementBetweenOverloads(overloads, implementation, flagsToCheck, someOverloadFlags, allOverloadFlags) {
                var someButNotAllOverloadFlags = someOverloadFlags ^ allOverloadFlags;
                if (someButNotAllOverloadFlags !== 0) {
                    var canonicalFlags = getEffectiveDeclarationFlags(getCanonicalOverload(overloads, implementation), flagsToCheck);
                    ts.forEach(overloads, function (o) {
                        var deviation = getEffectiveDeclarationFlags(o, flagsToCheck) ^ canonicalFlags;
                        if (deviation & 1) {
                            error(o.name, ts.Diagnostics.Overload_signatures_must_all_be_exported_or_not_exported);
                        }
                        else if (deviation & 2) {
                            error(o.name, ts.Diagnostics.Overload_signatures_must_all_be_ambient_or_non_ambient);
                        }
                        else if (deviation & (32 | 64)) {
                            error(o.name, ts.Diagnostics.Overload_signatures_must_all_be_public_private_or_protected);
                        }
                    });
                }
            }
            function checkQuestionTokenAgreementBetweenOverloads(overloads, implementation, someHaveQuestionToken, allHaveQuestionToken) {
                if (someHaveQuestionToken !== allHaveQuestionToken) {
                    var canonicalHasQuestionToken = ts.hasQuestionToken(getCanonicalOverload(overloads, implementation));
                    ts.forEach(overloads, function (o) {
                        var deviation = ts.hasQuestionToken(o) !== canonicalHasQuestionToken;
                        if (deviation) {
                            error(o.name, ts.Diagnostics.Overload_signatures_must_all_be_optional_or_required);
                        }
                    });
                }
            }
            var flagsToCheck = 1 | 2 | 32 | 64;
            var someNodeFlags = 0;
            var allNodeFlags = flagsToCheck;
            var someHaveQuestionToken = false;
            var allHaveQuestionToken = true;
            var hasOverloads = false;
            var bodyDeclaration;
            var lastSeenNonAmbientDeclaration;
            var previousDeclaration;
            var declarations = symbol.declarations;
            var isConstructor = (symbol.flags & 16384) !== 0;
            function reportImplementationExpectedError(node) {
                if (node.name && ts.getFullWidth(node.name) === 0) {
                    return;
                }
                var seen = false;
                var subsequentNode = ts.forEachChild(node.parent, function (c) {
                    if (seen) {
                        return c;
                    }
                    else {
                        seen = c === node;
                    }
                });
                if (subsequentNode) {
                    if (subsequentNode.kind === node.kind) {
                        var errorNode = subsequentNode.name || subsequentNode;
                        if (node.name && subsequentNode.name && node.name.text === subsequentNode.name.text) {
                            ts.Debug.assert(node.kind === 128 || node.kind === 127);
                            ts.Debug.assert((node.flags & 128) !== (subsequentNode.flags & 128));
                            var diagnostic = node.flags & 128 ? ts.Diagnostics.Function_overload_must_be_static : ts.Diagnostics.Function_overload_must_not_be_static;
                            error(errorNode, diagnostic);
                            return;
                        }
                        else if (ts.nodeIsPresent(subsequentNode.body)) {
                            error(errorNode, ts.Diagnostics.Function_implementation_name_must_be_0, ts.declarationNameToString(node.name));
                            return;
                        }
                    }
                }
                var errorNode = node.name || node;
                if (isConstructor) {
                    error(errorNode, ts.Diagnostics.Constructor_implementation_is_missing);
                }
                else {
                    error(errorNode, ts.Diagnostics.Function_implementation_is_missing_or_not_immediately_following_the_declaration);
                }
            }
            var isExportSymbolInsideModule = symbol.parent && symbol.parent.flags & 1536;
            var duplicateFunctionDeclaration = false;
            var multipleConstructorImplementation = false;
            for (var i = 0; i < declarations.length; i++) {
                var node = declarations[i];
                var inAmbientContext = ts.isInAmbientContext(node);
                var inAmbientContextOrInterface = node.parent.kind === 192 || node.parent.kind === 139 || inAmbientContext;
                if (inAmbientContextOrInterface) {
                    previousDeclaration = undefined;
                }
                if (node.kind === 190 || node.kind === 128 || node.kind === 127 || node.kind === 129) {
                    var currentNodeFlags = getEffectiveDeclarationFlags(node, flagsToCheck);
                    someNodeFlags |= currentNodeFlags;
                    allNodeFlags &= currentNodeFlags;
                    someHaveQuestionToken = someHaveQuestionToken || ts.hasQuestionToken(node);
                    allHaveQuestionToken = allHaveQuestionToken && ts.hasQuestionToken(node);
                    if (ts.nodeIsPresent(node.body) && bodyDeclaration) {
                        if (isConstructor) {
                            multipleConstructorImplementation = true;
                        }
                        else {
                            duplicateFunctionDeclaration = true;
                        }
                    }
                    else if (!isExportSymbolInsideModule && previousDeclaration && previousDeclaration.parent === node.parent && previousDeclaration.end !== node.pos) {
                        reportImplementationExpectedError(previousDeclaration);
                    }
                    if (ts.nodeIsPresent(node.body)) {
                        if (!bodyDeclaration) {
                            bodyDeclaration = node;
                        }
                    }
                    else {
                        hasOverloads = true;
                    }
                    previousDeclaration = node;
                    if (!inAmbientContextOrInterface) {
                        lastSeenNonAmbientDeclaration = node;
                    }
                }
            }
            if (multipleConstructorImplementation) {
                ts.forEach(declarations, function (declaration) {
                    error(declaration, ts.Diagnostics.Multiple_constructor_implementations_are_not_allowed);
                });
            }
            if (duplicateFunctionDeclaration) {
                ts.forEach(declarations, function (declaration) {
                    error(declaration.name, ts.Diagnostics.Duplicate_function_implementation);
                });
            }
            if (!isExportSymbolInsideModule && lastSeenNonAmbientDeclaration && !lastSeenNonAmbientDeclaration.body) {
                reportImplementationExpectedError(lastSeenNonAmbientDeclaration);
            }
            if (hasOverloads) {
                checkFlagAgreementBetweenOverloads(declarations, bodyDeclaration, flagsToCheck, someNodeFlags, allNodeFlags);
                checkQuestionTokenAgreementBetweenOverloads(declarations, bodyDeclaration, someHaveQuestionToken, allHaveQuestionToken);
                if (bodyDeclaration) {
                    var signatures = getSignaturesOfSymbol(symbol);
                    var bodySignature = getSignatureFromDeclaration(bodyDeclaration);
                    if (!bodySignature.hasStringLiterals) {
                        for (var i = 0, len = signatures.length; i < len; ++i) {
                            if (!signatures[i].hasStringLiterals && !isSignatureAssignableTo(bodySignature, signatures[i])) {
                                error(signatures[i].declaration, ts.Diagnostics.Overload_signature_is_not_compatible_with_function_implementation);
                                break;
                            }
                        }
                    }
                }
            }
        }
        function checkExportsOnMergedDeclarations(node) {
            if (!produceDiagnostics) {
                return;
            }
            var symbol;
            var symbol = node.localSymbol;
            if (!symbol) {
                symbol = getSymbolOfNode(node);
                if (!(symbol.flags & 7340032)) {
                    return;
                }
            }
            if (ts.getDeclarationOfKind(symbol, node.kind) !== node) {
                return;
            }
            var exportedDeclarationSpaces = 0;
            var nonExportedDeclarationSpaces = 0;
            ts.forEach(symbol.declarations, function (d) {
                var declarationSpaces = getDeclarationSpaces(d);
                if (getEffectiveDeclarationFlags(d, 1)) {
                    exportedDeclarationSpaces |= declarationSpaces;
                }
                else {
                    nonExportedDeclarationSpaces |= declarationSpaces;
                }
            });
            var commonDeclarationSpace = exportedDeclarationSpaces & nonExportedDeclarationSpaces;
            if (commonDeclarationSpace) {
                ts.forEach(symbol.declarations, function (d) {
                    if (getDeclarationSpaces(d) & commonDeclarationSpace) {
                        error(d.name, ts.Diagnostics.Individual_declarations_in_merged_declaration_0_must_be_all_exported_or_all_local, ts.declarationNameToString(d.name));
                    }
                });
            }
            function getDeclarationSpaces(d) {
                switch (d.kind) {
                    case 192:
                        return 2097152;
                    case 195:
                        return d.name.kind === 8 || ts.getModuleInstanceState(d) !== 0 ? 4194304 | 1048576 : 4194304;
                    case 191:
                    case 194:
                        return 2097152 | 1048576;
                    case 197:
                        var result = 0;
                        var target = resolveImport(getSymbolOfNode(d));
                        ts.forEach(target.declarations, function (d) {
                            result |= getDeclarationSpaces(d);
                        });
                        return result;
                    default:
                        return 1048576;
                }
            }
        }
        function checkFunctionDeclaration(node) {
            if (produceDiagnostics) {
                checkFunctionLikeDeclaration(node) || checkGrammarDisallowedModifiersInBlockOrObjectLiteralExpression(node) || checkGrammarFunctionName(node.name) || checkGrammarForGenerator(node);
                checkCollisionWithCapturedSuperVariable(node, node.name);
                checkCollisionWithCapturedThisVariable(node, node.name);
                checkCollisionWithRequireExportsInGeneratedCode(node, node.name);
            }
        }
        function checkFunctionLikeDeclaration(node) {
            checkSignatureDeclaration(node);
            if (ts.hasDynamicName(node)) {
                checkComputedPropertyName(node.name);
            }
            else {
                var symbol = getSymbolOfNode(node);
                var localSymbol = node.localSymbol || symbol;
                var firstDeclaration = ts.getDeclarationOfKind(localSymbol, node.kind);
                if (node === firstDeclaration) {
                    checkFunctionOrConstructorSymbol(localSymbol);
                }
                if (symbol.parent) {
                    if (ts.getDeclarationOfKind(symbol, node.kind) === node) {
                        checkFunctionOrConstructorSymbol(symbol);
                    }
                }
            }
            checkSourceElement(node.body);
            if (node.type && !isAccessor(node.kind)) {
                checkIfNonVoidFunctionHasReturnExpressionsOrSingleThrowStatment(node, getTypeFromTypeNode(node.type));
            }
            if (compilerOptions.noImplicitAny && ts.nodeIsMissing(node.body) && !node.type && !isPrivateWithinAmbient(node)) {
                reportImplicitAnyError(node, anyType);
            }
        }
        function checkBlock(node) {
            if (node.kind === 170) {
                checkGrammarForStatementInAmbientContext(node);
            }
            ts.forEach(node.statements, checkSourceElement);
            if (ts.isFunctionBlock(node) || node.kind === 196) {
                checkFunctionExpressionBodies(node);
            }
        }
        function checkCollisionWithArgumentsInGeneratedCode(node) {
            if (!ts.hasRestParameters(node) || ts.isInAmbientContext(node) || ts.nodeIsMissing(node.body)) {
                return;
            }
            ts.forEach(node.parameters, function (p) {
                if (p.name && !ts.isBindingPattern(p.name) && p.name.text === argumentsSymbol.name) {
                    error(p, ts.Diagnostics.Duplicate_identifier_arguments_Compiler_uses_arguments_to_initialize_rest_parameters);
                }
            });
        }
        function needCollisionCheckForIdentifier(node, identifier, name) {
            if (!(identifier && identifier.text === name)) {
                return false;
            }
            if (node.kind === 126 || node.kind === 125 || node.kind === 128 || node.kind === 127 || node.kind === 130 || node.kind === 131) {
                return false;
            }
            if (ts.isInAmbientContext(node)) {
                return false;
            }
            var root = getRootDeclaration(node);
            if (root.kind === 124 && ts.nodeIsMissing(root.parent.body)) {
                return false;
            }
            return true;
        }
        function checkCollisionWithCapturedThisVariable(node, name) {
            if (needCollisionCheckForIdentifier(node, name, "_this")) {
                potentialThisCollisions.push(node);
            }
        }
        function checkIfThisIsCapturedInEnclosingScope(node) {
            var current = node;
            while (current) {
                if (getNodeCheckFlags(current) & 4) {
                    var isDeclaration = node.kind !== 64;
                    if (isDeclaration) {
                        error(node.name, ts.Diagnostics.Duplicate_identifier_this_Compiler_uses_variable_declaration_this_to_capture_this_reference);
                    }
                    else {
                        error(node, ts.Diagnostics.Expression_resolves_to_variable_declaration_this_that_compiler_uses_to_capture_this_reference);
                    }
                    return;
                }
                current = current.parent;
            }
        }
        function checkCollisionWithCapturedSuperVariable(node, name) {
            if (!needCollisionCheckForIdentifier(node, name, "_super")) {
                return;
            }
            var enclosingClass = ts.getAncestor(node, 191);
            if (!enclosingClass || ts.isInAmbientContext(enclosingClass)) {
                return;
            }
            if (ts.getClassBaseTypeNode(enclosingClass)) {
                var isDeclaration = node.kind !== 64;
                if (isDeclaration) {
                    error(node, ts.Diagnostics.Duplicate_identifier_super_Compiler_uses_super_to_capture_base_class_reference);
                }
                else {
                    error(node, ts.Diagnostics.Expression_resolves_to_super_that_compiler_uses_to_capture_base_class_reference);
                }
            }
        }
        function checkCollisionWithRequireExportsInGeneratedCode(node, name) {
            if (!needCollisionCheckForIdentifier(node, name, "require") && !needCollisionCheckForIdentifier(node, name, "exports")) {
                return;
            }
            if (node.kind === 195 && ts.getModuleInstanceState(node) !== 1) {
                return;
            }
            var parent = getDeclarationContainer(node);
            if (parent.kind === 207 && ts.isExternalModule(parent)) {
                error(name, ts.Diagnostics.Duplicate_identifier_0_Compiler_reserves_name_1_in_top_level_scope_of_an_external_module, ts.declarationNameToString(name), ts.declarationNameToString(name));
            }
        }
        function checkCollisionWithConstDeclarations(node) {
            if (node.initializer && (ts.getCombinedNodeFlags(node) & 6144) === 0) {
                var symbol = getSymbolOfNode(node);
                if (symbol.flags & 1) {
                    var localDeclarationSymbol = resolveName(node, node.name.text, 3, undefined, undefined);
                    if (localDeclarationSymbol && localDeclarationSymbol !== symbol && localDeclarationSymbol.flags & 2) {
                        if (getDeclarationFlagsFromSymbol(localDeclarationSymbol) & 4096) {
                            error(node, ts.Diagnostics.Cannot_redeclare_block_scoped_variable_0, symbolToString(localDeclarationSymbol));
                        }
                    }
                }
            }
        }
        function isParameterDeclaration(node) {
            while (node.kind === 146) {
                node = node.parent.parent;
            }
            return node.kind === 124;
        }
        function checkParameterInitializer(node) {
            if (getRootDeclaration(node).kind === 124) {
                var func = ts.getContainingFunction(node);
                visit(node.initializer);
            }
            function visit(n) {
                if (n.kind === 64) {
                    var referencedSymbol = getNodeLinks(n).resolvedSymbol;
                    if (referencedSymbol && referencedSymbol !== unknownSymbol && getSymbol(func.locals, referencedSymbol.name, 107455) === referencedSymbol) {
                        if (referencedSymbol.valueDeclaration.kind === 124) {
                            if (referencedSymbol.valueDeclaration === node) {
                                error(n, ts.Diagnostics.Parameter_0_cannot_be_referenced_in_its_initializer, ts.declarationNameToString(node.name));
                                return;
                            }
                            if (referencedSymbol.valueDeclaration.pos < node.pos) {
                                return;
                            }
                        }
                        error(n, ts.Diagnostics.Initializer_of_parameter_0_cannot_reference_identifier_1_declared_after_it, ts.declarationNameToString(node.name), ts.declarationNameToString(n));
                    }
                }
                else {
                    ts.forEachChild(n, visit);
                }
            }
        }
        function checkVariableLikeDeclaration(node) {
            checkSourceElement(node.type);
            if (ts.hasDynamicName(node)) {
                checkComputedPropertyName(node.name);
                if (node.initializer) {
                    checkExpressionCached(node.initializer);
                }
                return;
            }
            if (ts.isBindingPattern(node.name)) {
                ts.forEach(node.name.elements, checkSourceElement);
            }
            if (node.initializer && getRootDeclaration(node).kind === 124 && ts.nodeIsMissing(ts.getContainingFunction(node).body)) {
                error(node, ts.Diagnostics.A_parameter_initializer_is_only_allowed_in_a_function_or_constructor_implementation);
                return;
            }
            if (ts.isBindingPattern(node.name)) {
                if (node.initializer) {
                    checkTypeAssignableTo(checkExpressionCached(node.initializer), getWidenedTypeForVariableLikeDeclaration(node), node, undefined);
                    checkParameterInitializer(node);
                }
                return;
            }
            var symbol = getSymbolOfNode(node);
            var type = getTypeOfVariableOrParameterOrProperty(symbol);
            if (node === symbol.valueDeclaration) {
                if (node.initializer) {
                    checkTypeAssignableTo(checkExpressionCached(node.initializer), type, node, undefined);
                    checkParameterInitializer(node);
                }
            }
            else {
                var declarationType = getWidenedTypeForVariableLikeDeclaration(node);
                if (type !== unknownType && declarationType !== unknownType && !isTypeIdenticalTo(type, declarationType)) {
                    error(node.name, ts.Diagnostics.Subsequent_variable_declarations_must_have_the_same_type_Variable_0_must_be_of_type_1_but_here_has_type_2, ts.declarationNameToString(node.name), typeToString(type), typeToString(declarationType));
                }
                if (node.initializer) {
                    checkTypeAssignableTo(checkExpressionCached(node.initializer), declarationType, node, undefined);
                }
            }
            if (node.kind !== 126 && node.kind !== 125) {
                checkExportsOnMergedDeclarations(node);
                checkCollisionWithConstDeclarations(node);
                checkCollisionWithCapturedSuperVariable(node, node.name);
                checkCollisionWithCapturedThisVariable(node, node.name);
                checkCollisionWithRequireExportsInGeneratedCode(node, node.name);
            }
        }
        function checkVariableDeclaration(node) {
            checkGrammarVariableDeclaration(node);
            return checkVariableLikeDeclaration(node);
        }
        function checkBindingElement(node) {
            checkGrammarBindingElement(node);
            return checkVariableLikeDeclaration(node);
        }
        function checkVariableStatement(node) {
            checkGrammarDisallowedModifiersInBlockOrObjectLiteralExpression(node) || checkGrammarModifiers(node) || checkGrammarVariableDeclarationList(node.declarationList) || checkGrammarForDisallowedLetOrConstStatement(node);
            ts.forEach(node.declarationList.declarations, checkSourceElement);
        }
        function checkGrammarDisallowedModifiersInBlockOrObjectLiteralExpression(node) {
            if (node.modifiers) {
                if (inBlockOrObjectLiteralExpression(node)) {
                    return grammarErrorOnFirstToken(node, ts.Diagnostics.Modifiers_cannot_appear_here);
                }
            }
        }
        function inBlockOrObjectLiteralExpression(node) {
            while (node) {
                if (node.kind === 170 || node.kind === 148) {
                    return true;
                }
                node = node.parent;
            }
        }
        function checkExpressionStatement(node) {
            checkGrammarForStatementInAmbientContext(node);
            checkExpression(node.expression);
        }
        function checkIfStatement(node) {
            checkGrammarForStatementInAmbientContext(node);
            checkExpression(node.expression);
            checkSourceElement(node.thenStatement);
            checkSourceElement(node.elseStatement);
        }
        function checkDoStatement(node) {
            checkGrammarForStatementInAmbientContext(node);
            checkSourceElement(node.statement);
            checkExpression(node.expression);
        }
        function checkWhileStatement(node) {
            checkGrammarForStatementInAmbientContext(node);
            checkExpression(node.expression);
            checkSourceElement(node.statement);
        }
        function checkForStatement(node) {
            if (!checkGrammarForStatementInAmbientContext(node)) {
                if (node.initializer && node.initializer.kind == 189) {
                    checkGrammarVariableDeclarationList(node.initializer);
                }
            }
            if (node.initializer) {
                if (node.initializer.kind === 189) {
                    ts.forEach(node.initializer.declarations, checkVariableDeclaration);
                }
                else {
                    checkExpression(node.initializer);
                }
            }
            if (node.condition)
                checkExpression(node.condition);
            if (node.iterator)
                checkExpression(node.iterator);
            checkSourceElement(node.statement);
        }
        function checkForInStatement(node) {
            if (!checkGrammarForStatementInAmbientContext(node)) {
                if (node.initializer.kind === 189) {
                    var variableList = node.initializer;
                    if (!checkGrammarVariableDeclarationList(variableList)) {
                        if (variableList.declarations.length > 1) {
                            grammarErrorOnFirstToken(variableList.declarations[1], ts.Diagnostics.Only_a_single_variable_declaration_is_allowed_in_a_for_in_statement);
                        }
                    }
                }
            }
            if (node.initializer.kind === 189) {
                var variableDeclarationList = node.initializer;
                if (variableDeclarationList.declarations.length >= 1) {
                    var decl = variableDeclarationList.declarations[0];
                    checkVariableDeclaration(decl);
                    if (decl.type) {
                        error(decl, ts.Diagnostics.The_left_hand_side_of_a_for_in_statement_cannot_use_a_type_annotation);
                    }
                }
            }
            else {
                var varExpr = node.initializer;
                var exprType = checkExpression(varExpr);
                if (exprType !== anyType && exprType !== stringType) {
                    error(varExpr, ts.Diagnostics.The_left_hand_side_of_a_for_in_statement_must_be_of_type_string_or_any);
                }
                else {
                    checkReferenceExpression(varExpr, ts.Diagnostics.Invalid_left_hand_side_in_for_in_statement, ts.Diagnostics.Left_hand_side_of_assignment_expression_cannot_be_a_constant);
                }
            }
            var exprType = checkExpression(node.expression);
            if (!isTypeOfKind(exprType, 1 | 48128 | 512)) {
                error(node.expression, ts.Diagnostics.The_right_hand_side_of_a_for_in_statement_must_be_of_type_any_an_object_type_or_a_type_parameter);
            }
            checkSourceElement(node.statement);
        }
        function checkBreakOrContinueStatement(node) {
            checkGrammarForStatementInAmbientContext(node) || checkGrammarBreakOrContinueStatement(node);
        }
        function isGetAccessorWithAnnotatatedSetAccessor(node) {
            return !!(node.kind === 130 && getSetAccessorTypeAnnotationNode(ts.getDeclarationOfKind(node.symbol, 131)));
        }
        function checkReturnStatement(node) {
            if (!checkGrammarForStatementInAmbientContext(node)) {
                var functionBlock = ts.getContainingFunction(node);
                if (!functionBlock) {
                    grammarErrorOnFirstToken(node, ts.Diagnostics.A_return_statement_can_only_be_used_within_a_function_body);
                }
            }
            if (node.expression) {
                var func = ts.getContainingFunction(node);
                if (func) {
                    var returnType = getReturnTypeOfSignature(getSignatureFromDeclaration(func));
                    var exprType = checkExpressionCached(node.expression);
                    if (func.kind === 131) {
                        error(node.expression, ts.Diagnostics.Setters_cannot_return_a_value);
                    }
                    else {
                        if (func.kind === 129) {
                            if (!isTypeAssignableTo(exprType, returnType)) {
                                error(node.expression, ts.Diagnostics.Return_type_of_constructor_signature_must_be_assignable_to_the_instance_type_of_the_class);
                            }
                        }
                        else if (func.type || isGetAccessorWithAnnotatatedSetAccessor(func)) {
                            checkTypeAssignableTo(exprType, returnType, node.expression, undefined);
                        }
                    }
                }
            }
        }
        function checkWithStatement(node) {
            if (!checkGrammarForStatementInAmbientContext(node)) {
                if (node.parserContextFlags & 1) {
                    grammarErrorOnFirstToken(node, ts.Diagnostics.with_statements_are_not_allowed_in_strict_mode);
                }
            }
            checkExpression(node.expression);
            error(node.expression, ts.Diagnostics.All_symbols_within_a_with_block_will_be_resolved_to_any);
        }
        function checkSwitchStatement(node) {
            checkGrammarForStatementInAmbientContext(node);
            var firstDefaultClause;
            var hasDuplicateDefaultClause = false;
            var expressionType = checkExpression(node.expression);
            ts.forEach(node.clauses, function (clause) {
                if (clause.kind === 201 && !hasDuplicateDefaultClause) {
                    if (firstDefaultClause === undefined) {
                        firstDefaultClause = clause;
                    }
                    else {
                        var sourceFile = ts.getSourceFileOfNode(node);
                        var start = ts.skipTrivia(sourceFile.text, clause.pos);
                        var end = clause.statements.length > 0 ? clause.statements[0].pos : clause.end;
                        grammarErrorAtPos(sourceFile, start, end - start, ts.Diagnostics.A_default_clause_cannot_appear_more_than_once_in_a_switch_statement);
                        hasDuplicateDefaultClause = true;
                    }
                }
                if (produceDiagnostics && clause.kind === 200) {
                    var caseClause = clause;
                    var caseType = checkExpression(caseClause.expression);
                    if (!isTypeAssignableTo(expressionType, caseType)) {
                        checkTypeAssignableTo(caseType, expressionType, caseClause.expression, undefined);
                    }
                }
                ts.forEach(clause.statements, checkSourceElement);
            });
        }
        function checkLabeledStatement(node) {
            if (!checkGrammarForStatementInAmbientContext(node)) {
                var current = node.parent;
                while (current) {
                    if (ts.isAnyFunction(current)) {
                        break;
                    }
                    if (current.kind === 184 && current.label.text === node.label.text) {
                        var sourceFile = ts.getSourceFileOfNode(node);
                        grammarErrorOnNode(node.label, ts.Diagnostics.Duplicate_label_0, ts.getTextOfNodeFromSourceText(sourceFile.text, node.label));
                        break;
                    }
                    current = current.parent;
                }
            }
            checkSourceElement(node.statement);
        }
        function checkThrowStatement(node) {
            if (!checkGrammarForStatementInAmbientContext(node)) {
                if (node.expression === undefined) {
                    grammarErrorAfterFirstToken(node, ts.Diagnostics.Line_break_not_permitted_here);
                }
            }
            if (node.expression) {
                checkExpression(node.expression);
            }
        }
        function checkTryStatement(node) {
            checkGrammarForStatementInAmbientContext(node);
            checkBlock(node.tryBlock);
            var catchClause = node.catchClause;
            if (catchClause) {
                if (catchClause.type) {
                    var sourceFile = ts.getSourceFileOfNode(node);
                    var colonStart = ts.skipTrivia(sourceFile.text, catchClause.name.end);
                    grammarErrorAtPos(sourceFile, colonStart, ":".length, ts.Diagnostics.Catch_clause_parameter_cannot_have_a_type_annotation);
                }
                checkGrammarEvalOrArgumentsInStrictMode(node, catchClause.name);
                checkBlock(catchClause.block);
            }
            if (node.finallyBlock)
                checkBlock(node.finallyBlock);
        }
        function checkIndexConstraints(type) {
            var declaredNumberIndexer = getIndexDeclarationOfSymbol(type.symbol, 1);
            var declaredStringIndexer = getIndexDeclarationOfSymbol(type.symbol, 0);
            var stringIndexType = getIndexTypeOfType(type, 0);
            var numberIndexType = getIndexTypeOfType(type, 1);
            if (stringIndexType || numberIndexType) {
                ts.forEach(getPropertiesOfObjectType(type), function (prop) {
                    var propType = getTypeOfSymbol(prop);
                    checkIndexConstraintForProperty(prop, propType, type, declaredStringIndexer, stringIndexType, 0);
                    checkIndexConstraintForProperty(prop, propType, type, declaredNumberIndexer, numberIndexType, 1);
                });
                if (type.flags & 1024 && type.symbol.valueDeclaration.kind === 191) {
                    var classDeclaration = type.symbol.valueDeclaration;
                    for (var i = 0; i < classDeclaration.members.length; i++) {
                        var member = classDeclaration.members[i];
                        if (!(member.flags & 128) && ts.hasDynamicName(member)) {
                            var propType = getTypeOfSymbol(member.symbol);
                            checkIndexConstraintForProperty(member.symbol, propType, type, declaredStringIndexer, stringIndexType, 0);
                            checkIndexConstraintForProperty(member.symbol, propType, type, declaredNumberIndexer, numberIndexType, 1);
                        }
                    }
                }
            }
            var errorNode;
            if (stringIndexType && numberIndexType) {
                errorNode = declaredNumberIndexer || declaredStringIndexer;
                if (!errorNode && (type.flags & 2048)) {
                    var someBaseTypeHasBothIndexers = ts.forEach(type.baseTypes, function (base) { return getIndexTypeOfType(base, 0) && getIndexTypeOfType(base, 1); });
                    errorNode = someBaseTypeHasBothIndexers ? undefined : type.symbol.declarations[0];
                }
            }
            if (errorNode && !isTypeAssignableTo(numberIndexType, stringIndexType)) {
                error(errorNode, ts.Diagnostics.Numeric_index_type_0_is_not_assignable_to_string_index_type_1, typeToString(numberIndexType), typeToString(stringIndexType));
            }
            function checkIndexConstraintForProperty(prop, propertyType, containingType, indexDeclaration, indexType, indexKind) {
                if (!indexType) {
                    return;
                }
                if (indexKind === 1 && !isNumericName(prop.valueDeclaration.name)) {
                    return;
                }
                var errorNode;
                if (prop.valueDeclaration.name.kind === 122 || prop.parent === containingType.symbol) {
                    errorNode = prop.valueDeclaration;
                }
                else if (indexDeclaration) {
                    errorNode = indexDeclaration;
                }
                else if (containingType.flags & 2048) {
                    var someBaseClassHasBothPropertyAndIndexer = ts.forEach(containingType.baseTypes, function (base) { return getPropertyOfObjectType(base, prop.name) && getIndexTypeOfType(base, indexKind); });
                    errorNode = someBaseClassHasBothPropertyAndIndexer ? undefined : containingType.symbol.declarations[0];
                }
                if (errorNode && !isTypeAssignableTo(propertyType, indexType)) {
                    var errorMessage = indexKind === 0 ? ts.Diagnostics.Property_0_of_type_1_is_not_assignable_to_string_index_type_2 : ts.Diagnostics.Property_0_of_type_1_is_not_assignable_to_numeric_index_type_2;
                    error(errorNode, errorMessage, symbolToString(prop), typeToString(propertyType), typeToString(indexType));
                }
            }
        }
        function checkTypeNameIsReserved(name, message) {
            switch (name.text) {
                case "any":
                case "number":
                case "boolean":
                case "string":
                case "void":
                    error(name, message, name.text);
            }
        }
        function checkTypeParameters(typeParameterDeclarations) {
            if (typeParameterDeclarations) {
                for (var i = 0; i < typeParameterDeclarations.length; i++) {
                    var node = typeParameterDeclarations[i];
                    checkTypeParameter(node);
                    if (produceDiagnostics) {
                        for (var j = 0; j < i; j++) {
                            if (typeParameterDeclarations[j].symbol === node.symbol) {
                                error(node.name, ts.Diagnostics.Duplicate_identifier_0, ts.declarationNameToString(node.name));
                            }
                        }
                    }
                }
            }
        }
        function checkClassDeclaration(node) {
            checkGrammarClassDeclarationHeritageClauses(node);
            checkTypeNameIsReserved(node.name, ts.Diagnostics.Class_name_cannot_be_0);
            checkTypeParameters(node.typeParameters);
            checkCollisionWithCapturedThisVariable(node, node.name);
            checkCollisionWithRequireExportsInGeneratedCode(node, node.name);
            checkExportsOnMergedDeclarations(node);
            var symbol = getSymbolOfNode(node);
            var type = getDeclaredTypeOfSymbol(symbol);
            var staticType = getTypeOfSymbol(symbol);
            var baseTypeNode = ts.getClassBaseTypeNode(node);
            if (baseTypeNode) {
                emitExtends = emitExtends || !ts.isInAmbientContext(node);
                checkTypeReference(baseTypeNode);
            }
            if (type.baseTypes.length) {
                if (produceDiagnostics) {
                    var baseType = type.baseTypes[0];
                    checkTypeAssignableTo(type, baseType, node.name, ts.Diagnostics.Class_0_incorrectly_extends_base_class_1);
                    var staticBaseType = getTypeOfSymbol(baseType.symbol);
                    checkTypeAssignableTo(staticType, getTypeWithoutConstructors(staticBaseType), node.name, ts.Diagnostics.Class_static_side_0_incorrectly_extends_base_class_static_side_1);
                    if (baseType.symbol !== resolveEntityName(node, baseTypeNode.typeName, 107455)) {
                        error(baseTypeNode, ts.Diagnostics.Type_name_0_in_extends_clause_does_not_reference_constructor_function_for_0, typeToString(baseType));
                    }
                    checkKindsOfPropertyMemberOverrides(type, baseType);
                }
                checkExpressionOrQualifiedName(baseTypeNode.typeName);
            }
            var implementedTypeNodes = ts.getClassImplementedTypeNodes(node);
            if (implementedTypeNodes) {
                ts.forEach(implementedTypeNodes, function (typeRefNode) {
                    checkTypeReference(typeRefNode);
                    if (produceDiagnostics) {
                        var t = getTypeFromTypeReferenceNode(typeRefNode);
                        if (t !== unknownType) {
                            var declaredType = (t.flags & 4096) ? t.target : t;
                            if (declaredType.flags & (1024 | 2048)) {
                                checkTypeAssignableTo(type, t, node.name, ts.Diagnostics.Class_0_incorrectly_implements_interface_1);
                            }
                            else {
                                error(typeRefNode, ts.Diagnostics.A_class_may_only_implement_another_class_or_interface);
                            }
                        }
                    }
                });
            }
            ts.forEach(node.members, checkSourceElement);
            if (produceDiagnostics) {
                checkIndexConstraints(type);
                checkTypeForDuplicateIndexSignatures(node);
            }
        }
        function getTargetSymbol(s) {
            return s.flags & 16777216 ? getSymbolLinks(s).target : s;
        }
        function checkKindsOfPropertyMemberOverrides(type, baseType) {
            var baseProperties = getPropertiesOfObjectType(baseType);
            for (var i = 0, len = baseProperties.length; i < len; ++i) {
                var base = getTargetSymbol(baseProperties[i]);
                if (base.flags & 134217728) {
                    continue;
                }
                var derived = getTargetSymbol(getPropertyOfObjectType(type, base.name));
                if (derived) {
                    var baseDeclarationFlags = getDeclarationFlagsFromSymbol(base);
                    var derivedDeclarationFlags = getDeclarationFlagsFromSymbol(derived);
                    if ((baseDeclarationFlags & 32) || (derivedDeclarationFlags & 32)) {
                        continue;
                    }
                    if ((baseDeclarationFlags & 128) !== (derivedDeclarationFlags & 128)) {
                        continue;
                    }
                    if ((base.flags & derived.flags & 8192) || ((base.flags & 98308) && (derived.flags & 98308))) {
                        continue;
                    }
                    var errorMessage;
                    if (base.flags & 8192) {
                        if (derived.flags & 98304) {
                            errorMessage = ts.Diagnostics.Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_accessor;
                        }
                        else {
                            ts.Debug.assert((derived.flags & 4) !== 0);
                            errorMessage = ts.Diagnostics.Class_0_defines_instance_member_function_1_but_extended_class_2_defines_it_as_instance_member_property;
                        }
                    }
                    else if (base.flags & 4) {
                        ts.Debug.assert((derived.flags & 8192) !== 0);
                        errorMessage = ts.Diagnostics.Class_0_defines_instance_member_property_1_but_extended_class_2_defines_it_as_instance_member_function;
                    }
                    else {
                        ts.Debug.assert((base.flags & 98304) !== 0);
                        ts.Debug.assert((derived.flags & 8192) !== 0);
                        errorMessage = ts.Diagnostics.Class_0_defines_instance_member_accessor_1_but_extended_class_2_defines_it_as_instance_member_function;
                    }
                    error(derived.valueDeclaration.name, errorMessage, typeToString(baseType), symbolToString(base), typeToString(type));
                }
            }
        }
        function isAccessor(kind) {
            return kind === 130 || kind === 131;
        }
        function areTypeParametersIdentical(list1, list2) {
            if (!list1 && !list2) {
                return true;
            }
            if (!list1 || !list2 || list1.length !== list2.length) {
                return false;
            }
            for (var i = 0, len = list1.length; i < len; i++) {
                var tp1 = list1[i];
                var tp2 = list2[i];
                if (tp1.name.text !== tp2.name.text) {
                    return false;
                }
                if (!tp1.constraint && !tp2.constraint) {
                    continue;
                }
                if (!tp1.constraint || !tp2.constraint) {
                    return false;
                }
                if (!isTypeIdenticalTo(getTypeFromTypeNode(tp1.constraint), getTypeFromTypeNode(tp2.constraint))) {
                    return false;
                }
            }
            return true;
        }
        function checkInheritedPropertiesAreIdentical(type, typeNode) {
            if (!type.baseTypes.length || type.baseTypes.length === 1) {
                return true;
            }
            var seen = {};
            ts.forEach(type.declaredProperties, function (p) {
                seen[p.name] = { prop: p, containingType: type };
            });
            var ok = true;
            for (var i = 0, len = type.baseTypes.length; i < len; ++i) {
                var base = type.baseTypes[i];
                var properties = getPropertiesOfObjectType(base);
                for (var j = 0, proplen = properties.length; j < proplen; ++j) {
                    var prop = properties[j];
                    if (!ts.hasProperty(seen, prop.name)) {
                        seen[prop.name] = { prop: prop, containingType: base };
                    }
                    else {
                        var existing = seen[prop.name];
                        var isInheritedProperty = existing.containingType !== type;
                        if (isInheritedProperty && !isPropertyIdenticalTo(existing.prop, prop)) {
                            ok = false;
                            var typeName1 = typeToString(existing.containingType);
                            var typeName2 = typeToString(base);
                            var errorInfo = ts.chainDiagnosticMessages(undefined, ts.Diagnostics.Named_properties_0_of_types_1_and_2_are_not_identical, prop.name, typeName1, typeName2);
                            errorInfo = ts.chainDiagnosticMessages(errorInfo, ts.Diagnostics.Interface_0_cannot_simultaneously_extend_types_1_and_2, typeToString(type), typeName1, typeName2);
                            diagnostics.add(ts.createDiagnosticForNodeFromMessageChain(typeNode, errorInfo));
                        }
                    }
                }
            }
            return ok;
        }
        function checkInterfaceDeclaration(node) {
            checkGrammarModifiers(node) || checkGrammarInterfaceDeclaration(node);
            checkTypeParameters(node.typeParameters);
            if (produceDiagnostics) {
                checkTypeNameIsReserved(node.name, ts.Diagnostics.Interface_name_cannot_be_0);
                checkExportsOnMergedDeclarations(node);
                var symbol = getSymbolOfNode(node);
                var firstInterfaceDecl = ts.getDeclarationOfKind(symbol, 192);
                if (symbol.declarations.length > 1) {
                    if (node !== firstInterfaceDecl && !areTypeParametersIdentical(firstInterfaceDecl.typeParameters, node.typeParameters)) {
                        error(node.name, ts.Diagnostics.All_declarations_of_an_interface_must_have_identical_type_parameters);
                    }
                }
                if (node === firstInterfaceDecl) {
                    var type = getDeclaredTypeOfSymbol(symbol);
                    if (checkInheritedPropertiesAreIdentical(type, node.name)) {
                        ts.forEach(type.baseTypes, function (baseType) {
                            checkTypeAssignableTo(type, baseType, node.name, ts.Diagnostics.Interface_0_incorrectly_extends_interface_1);
                        });
                        checkIndexConstraints(type);
                    }
                }
            }
            ts.forEach(ts.getInterfaceBaseTypeNodes(node), checkTypeReference);
            ts.forEach(node.members, checkSourceElement);
            if (produceDiagnostics) {
                checkTypeForDuplicateIndexSignatures(node);
            }
        }
        function checkTypeAliasDeclaration(node) {
            checkGrammarModifiers(node);
            checkTypeNameIsReserved(node.name, ts.Diagnostics.Type_alias_name_cannot_be_0);
            checkSourceElement(node.type);
        }
        function computeEnumMemberValues(node) {
            var nodeLinks = getNodeLinks(node);
            if (!(nodeLinks.flags & 128)) {
                var enumSymbol = getSymbolOfNode(node);
                var enumType = getDeclaredTypeOfSymbol(enumSymbol);
                var autoValue = 0;
                var ambient = ts.isInAmbientContext(node);
                var enumIsConst = ts.isConst(node);
                ts.forEach(node.members, function (member) {
                    if (member.name.kind !== 122 && isNumericLiteralName(member.name.text)) {
                        error(member.name, ts.Diagnostics.An_enum_member_cannot_have_a_numeric_name);
                    }
                    var initializer = member.initializer;
                    if (initializer) {
                        autoValue = getConstantValueForEnumMemberInitializer(initializer, enumIsConst);
                        if (autoValue === undefined) {
                            if (enumIsConst) {
                                error(initializer, ts.Diagnostics.In_const_enum_declarations_member_initializer_must_be_constant_expression);
                            }
                            else if (!ambient) {
                                checkTypeAssignableTo(checkExpression(initializer), enumType, initializer, undefined);
                            }
                        }
                        else if (enumIsConst) {
                            if (isNaN(autoValue)) {
                                error(initializer, ts.Diagnostics.const_enum_member_initializer_was_evaluated_to_disallowed_value_NaN);
                            }
                            else if (!isFinite(autoValue)) {
                                error(initializer, ts.Diagnostics.const_enum_member_initializer_was_evaluated_to_a_non_finite_value);
                            }
                        }
                    }
                    else if (ambient && !enumIsConst) {
                        autoValue = undefined;
                    }
                    if (autoValue !== undefined) {
                        getNodeLinks(member).enumMemberValue = autoValue++;
                    }
                });
                nodeLinks.flags |= 128;
            }
            function getConstantValueForEnumMemberInitializer(initializer, enumIsConst) {
                return evalConstant(initializer);
                function evalConstant(e) {
                    switch (e.kind) {
                        case 161:
                            var value = evalConstant(e.operand);
                            if (value === undefined) {
                                return undefined;
                            }
                            switch (e.operator) {
                                case 33: return value;
                                case 34: return -value;
                                case 47: return enumIsConst ? ~value : undefined;
                            }
                            return undefined;
                        case 163:
                            if (!enumIsConst) {
                                return undefined;
                            }
                            var left = evalConstant(e.left);
                            if (left === undefined) {
                                return undefined;
                            }
                            var right = evalConstant(e.right);
                            if (right === undefined) {
                                return undefined;
                            }
                            switch (e.operator) {
                                case 44: return left | right;
                                case 43: return left & right;
                                case 41: return left >> right;
                                case 42: return left >>> right;
                                case 40: return left << right;
                                case 45: return left ^ right;
                                case 35: return left * right;
                                case 36: return left / right;
                                case 33: return left + right;
                                case 34: return left - right;
                                case 37: return left % right;
                            }
                            return undefined;
                        case 7:
                            return +e.text;
                        case 155:
                            return enumIsConst ? evalConstant(e.expression) : undefined;
                        case 64:
                        case 150:
                        case 149:
                            if (!enumIsConst) {
                                return undefined;
                            }
                            var member = initializer.parent;
                            var currentType = getTypeOfSymbol(getSymbolOfNode(member.parent));
                            var enumType;
                            var propertyName;
                            if (e.kind === 64) {
                                enumType = currentType;
                                propertyName = e.text;
                            }
                            else {
                                if (e.kind === 150) {
                                    if (e.argumentExpression === undefined || e.argumentExpression.kind !== 8) {
                                        return undefined;
                                    }
                                    var enumType = getTypeOfNode(e.expression);
                                    propertyName = e.argumentExpression.text;
                                }
                                else {
                                    var enumType = getTypeOfNode(e.expression);
                                    propertyName = e.name.text;
                                }
                                if (enumType !== currentType) {
                                    return undefined;
                                }
                            }
                            if (propertyName === undefined) {
                                return undefined;
                            }
                            var property = getPropertyOfObjectType(enumType, propertyName);
                            if (!property || !(property.flags & 8)) {
                                return undefined;
                            }
                            var propertyDecl = property.valueDeclaration;
                            if (member === propertyDecl) {
                                return undefined;
                            }
                            if (!isDefinedBefore(propertyDecl, member)) {
                                return undefined;
                            }
                            return getNodeLinks(propertyDecl).enumMemberValue;
                    }
                }
            }
        }
        function checkEnumDeclaration(node) {
            if (!produceDiagnostics) {
                return;
            }
            checkGrammarModifiers(node) || checkGrammarEnumDeclaration(node);
            checkTypeNameIsReserved(node.name, ts.Diagnostics.Enum_name_cannot_be_0);
            checkCollisionWithCapturedThisVariable(node, node.name);
            checkCollisionWithRequireExportsInGeneratedCode(node, node.name);
            checkExportsOnMergedDeclarations(node);
            computeEnumMemberValues(node);
            var enumSymbol = getSymbolOfNode(node);
            var firstDeclaration = ts.getDeclarationOfKind(enumSymbol, node.kind);
            if (node === firstDeclaration) {
                if (enumSymbol.declarations.length > 1) {
                    var enumIsConst = ts.isConst(node);
                    ts.forEach(enumSymbol.declarations, function (decl) {
                        if (ts.isConstEnumDeclaration(decl) !== enumIsConst) {
                            error(decl.name, ts.Diagnostics.Enum_declarations_must_all_be_const_or_non_const);
                        }
                    });
                }
                var seenEnumMissingInitialInitializer = false;
                ts.forEach(enumSymbol.declarations, function (declaration) {
                    if (declaration.kind !== 194) {
                        return false;
                    }
                    var enumDeclaration = declaration;
                    if (!enumDeclaration.members.length) {
                        return false;
                    }
                    var firstEnumMember = enumDeclaration.members[0];
                    if (!firstEnumMember.initializer) {
                        if (seenEnumMissingInitialInitializer) {
                            error(firstEnumMember.name, ts.Diagnostics.In_an_enum_with_multiple_declarations_only_one_declaration_can_omit_an_initializer_for_its_first_enum_element);
                        }
                        else {
                            seenEnumMissingInitialInitializer = true;
                        }
                    }
                });
            }
        }
        function getFirstNonAmbientClassOrFunctionDeclaration(symbol) {
            var declarations = symbol.declarations;
            for (var i = 0; i < declarations.length; i++) {
                var declaration = declarations[i];
                if ((declaration.kind === 191 || (declaration.kind === 190 && ts.nodeIsPresent(declaration.body))) && !ts.isInAmbientContext(declaration)) {
                    return declaration;
                }
            }
            return undefined;
        }
        function checkModuleDeclaration(node) {
            if (produceDiagnostics) {
                if (!checkGrammarModifiers(node)) {
                    if (!ts.isInAmbientContext(node) && node.name.kind === 8) {
                        grammarErrorOnNode(node.name, ts.Diagnostics.Only_ambient_modules_can_use_quoted_names);
                    }
                    else if (node.name.kind === 64 && node.body.kind === 196) {
                        var statements = node.body.statements;
                        for (var i = 0, n = statements.length; i < n; i++) {
                            var statement = statements[i];
                            if (statement.kind === 198) {
                                grammarErrorOnNode(statement, ts.Diagnostics.An_export_assignment_cannot_be_used_in_an_internal_module);
                            }
                            else if (ts.isExternalModuleImportDeclaration(statement)) {
                                grammarErrorOnNode(ts.getExternalModuleImportDeclarationExpression(statement), ts.Diagnostics.Import_declarations_in_an_internal_module_cannot_reference_an_external_module);
                            }
                        }
                    }
                }
                checkCollisionWithCapturedThisVariable(node, node.name);
                checkCollisionWithRequireExportsInGeneratedCode(node, node.name);
                checkExportsOnMergedDeclarations(node);
                var symbol = getSymbolOfNode(node);
                if (symbol.flags & 512 && symbol.declarations.length > 1 && !ts.isInAmbientContext(node) && ts.isInstantiatedModule(node, compilerOptions.preserveConstEnums)) {
                    var classOrFunc = getFirstNonAmbientClassOrFunctionDeclaration(symbol);
                    if (classOrFunc) {
                        if (ts.getSourceFileOfNode(node) !== ts.getSourceFileOfNode(classOrFunc)) {
                            error(node.name, ts.Diagnostics.A_module_declaration_cannot_be_in_a_different_file_from_a_class_or_function_with_which_it_is_merged);
                        }
                        else if (node.pos < classOrFunc.pos) {
                            error(node.name, ts.Diagnostics.A_module_declaration_cannot_be_located_prior_to_a_class_or_function_with_which_it_is_merged);
                        }
                    }
                }
                if (node.name.kind === 8) {
                    if (!isGlobalSourceFile(node.parent)) {
                        error(node.name, ts.Diagnostics.Ambient_external_modules_cannot_be_nested_in_other_modules);
                    }
                    if (isExternalModuleNameRelative(node.name.text)) {
                        error(node.name, ts.Diagnostics.Ambient_external_module_declaration_cannot_specify_relative_module_name);
                    }
                }
            }
            checkSourceElement(node.body);
        }
        function getFirstIdentifier(node) {
            while (node.kind === 121) {
                node = node.left;
            }
            return node;
        }
        function checkImportDeclaration(node) {
            checkGrammarModifiers(node);
            checkCollisionWithCapturedThisVariable(node, node.name);
            checkCollisionWithRequireExportsInGeneratedCode(node, node.name);
            var symbol = getSymbolOfNode(node);
            var target;
            if (ts.isInternalModuleImportDeclaration(node)) {
                target = resolveImport(symbol);
                if (target !== unknownSymbol) {
                    if (target.flags & 107455) {
                        var moduleName = getFirstIdentifier(node.moduleReference);
                        if (resolveEntityName(node, moduleName, 107455 | 1536).flags & 1536) {
                            checkExpressionOrQualifiedName(node.moduleReference);
                        }
                        else {
                            error(moduleName, ts.Diagnostics.Module_0_is_hidden_by_a_local_declaration_with_the_same_name, ts.declarationNameToString(moduleName));
                        }
                    }
                    if (target.flags & 793056) {
                        checkTypeNameIsReserved(node.name, ts.Diagnostics.Import_name_cannot_be_0);
                    }
                }
            }
            else {
                if (node.parent.kind === 207) {
                    target = resolveImport(symbol);
                }
                else if (node.parent.kind === 196 && node.parent.parent.name.kind === 8) {
                    if (ts.getExternalModuleImportDeclarationExpression(node).kind === 8) {
                        if (isExternalModuleNameRelative(ts.getExternalModuleImportDeclarationExpression(node).text)) {
                            error(node, ts.Diagnostics.Import_declaration_in_an_ambient_external_module_declaration_cannot_reference_external_module_through_relative_external_module_name);
                            target = unknownSymbol;
                        }
                        else {
                            target = resolveImport(symbol);
                        }
                    }
                    else {
                        target = unknownSymbol;
                    }
                }
                else {
                    target = unknownSymbol;
                }
            }
            if (target !== unknownSymbol) {
                var excludedMeanings = (symbol.flags & 107455 ? 107455 : 0) | (symbol.flags & 793056 ? 793056 : 0) | (symbol.flags & 1536 ? 1536 : 0);
                if (target.flags & excludedMeanings) {
                    error(node, ts.Diagnostics.Import_declaration_conflicts_with_local_declaration_of_0, symbolToString(symbol));
                }
            }
        }
        function checkExportAssignment(node) {
            if (!checkGrammarModifiers(node) && (node.flags & 243)) {
                grammarErrorOnFirstToken(node, ts.Diagnostics.An_export_assignment_cannot_have_modifiers);
            }
            var container = node.parent;
            if (container.kind !== 207) {
                container = container.parent;
            }
            checkTypeOfExportAssignmentSymbol(getSymbolOfNode(container));
        }
        function checkSourceElement(node) {
            if (!node)
                return;
            switch (node.kind) {
                case 123:
                    return checkTypeParameter(node);
                case 124:
                    return checkParameter(node);
                case 126:
                case 125:
                    return checkPropertyDeclaration(node);
                case 136:
                case 137:
                case 132:
                case 133:
                    return checkSignatureDeclaration(node);
                case 134:
                    return checkSignatureDeclaration(node);
                case 128:
                case 127:
                    return checkMethodDeclaration(node);
                case 129:
                    return checkConstructorDeclaration(node);
                case 130:
                case 131:
                    return checkAccessorDeclaration(node);
                case 135:
                    return checkTypeReference(node);
                case 138:
                    return checkTypeQuery(node);
                case 139:
                    return checkTypeLiteral(node);
                case 140:
                    return checkArrayType(node);
                case 141:
                    return checkTupleType(node);
                case 142:
                    return checkUnionType(node);
                case 143:
                    return checkSourceElement(node.type);
                case 190:
                    return checkFunctionDeclaration(node);
                case 170:
                case 196:
                    return checkBlock(node);
                case 171:
                    return checkVariableStatement(node);
                case 173:
                    return checkExpressionStatement(node);
                case 174:
                    return checkIfStatement(node);
                case 175:
                    return checkDoStatement(node);
                case 176:
                    return checkWhileStatement(node);
                case 177:
                    return checkForStatement(node);
                case 178:
                    return checkForInStatement(node);
                case 179:
                case 180:
                    return checkBreakOrContinueStatement(node);
                case 181:
                    return checkReturnStatement(node);
                case 182:
                    return checkWithStatement(node);
                case 183:
                    return checkSwitchStatement(node);
                case 184:
                    return checkLabeledStatement(node);
                case 185:
                    return checkThrowStatement(node);
                case 186:
                    return checkTryStatement(node);
                case 188:
                    return checkVariableDeclaration(node);
                case 146:
                    return checkBindingElement(node);
                case 191:
                    return checkClassDeclaration(node);
                case 192:
                    return checkInterfaceDeclaration(node);
                case 193:
                    return checkTypeAliasDeclaration(node);
                case 194:
                    return checkEnumDeclaration(node);
                case 195:
                    return checkModuleDeclaration(node);
                case 197:
                    return checkImportDeclaration(node);
                case 198:
                    return checkExportAssignment(node);
                case 172:
                    checkGrammarForStatementInAmbientContext(node);
                    return;
                case 187:
                    checkGrammarForStatementInAmbientContext(node);
                    return;
            }
        }
        function checkFunctionExpressionBodies(node) {
            switch (node.kind) {
                case 156:
                case 157:
                    ts.forEach(node.parameters, checkFunctionExpressionBodies);
                    checkFunctionExpressionOrObjectLiteralMethodBody(node);
                    break;
                case 128:
                case 127:
                    ts.forEach(node.parameters, checkFunctionExpressionBodies);
                    if (ts.isObjectLiteralMethod(node)) {
                        checkFunctionExpressionOrObjectLiteralMethodBody(node);
                    }
                    break;
                case 129:
                case 130:
                case 131:
                case 190:
                    ts.forEach(node.parameters, checkFunctionExpressionBodies);
                    break;
                case 182:
                    checkFunctionExpressionBodies(node.expression);
                    break;
                case 124:
                case 126:
                case 125:
                case 144:
                case 145:
                case 146:
                case 147:
                case 148:
                case 204:
                case 149:
                case 150:
                case 151:
                case 152:
                case 153:
                case 165:
                case 169:
                case 154:
                case 155:
                case 159:
                case 160:
                case 158:
                case 161:
                case 162:
                case 163:
                case 164:
                case 167:
                case 170:
                case 196:
                case 171:
                case 173:
                case 174:
                case 175:
                case 176:
                case 177:
                case 178:
                case 179:
                case 180:
                case 181:
                case 183:
                case 200:
                case 201:
                case 184:
                case 185:
                case 186:
                case 203:
                case 188:
                case 189:
                case 191:
                case 194:
                case 206:
                case 207:
                    ts.forEachChild(node, checkFunctionExpressionBodies);
                    break;
            }
        }
        function checkSourceFile(node) {
            var start = new Date().getTime();
            checkSourceFileWorker(node);
            ts.checkTime += new Date().getTime() - start;
        }
        function checkSourceFileWorker(node) {
            var links = getNodeLinks(node);
            if (!(links.flags & 1)) {
                checkGrammarSourceFile(node);
                emitExtends = false;
                potentialThisCollisions.length = 0;
                ts.forEach(node.statements, checkSourceElement);
                checkFunctionExpressionBodies(node);
                if (ts.isExternalModule(node)) {
                    var symbol = getExportAssignmentSymbol(node.symbol);
                    if (symbol && symbol.flags & 8388608) {
                        getSymbolLinks(symbol).referenced = true;
                        markLinkedImportsAsReferenced(ts.getDeclarationOfKind(symbol, 197));
                    }
                }
                if (potentialThisCollisions.length) {
                    ts.forEach(potentialThisCollisions, checkIfThisIsCapturedInEnclosingScope);
                    potentialThisCollisions.length = 0;
                }
                if (emitExtends) {
                    links.flags |= 8;
                }
                links.flags |= 1;
            }
        }
        function getDiagnostics(sourceFile) {
            throwIfNonDiagnosticsProducing();
            if (sourceFile) {
                checkSourceFile(sourceFile);
                return diagnostics.getDiagnostics(sourceFile.fileName);
            }
            ts.forEach(host.getSourceFiles(), checkSourceFile);
            return diagnostics.getDiagnostics();
        }
        function getGlobalDiagnostics() {
            throwIfNonDiagnosticsProducing();
            return diagnostics.getGlobalDiagnostics();
        }
        function throwIfNonDiagnosticsProducing() {
            if (!produceDiagnostics) {
                throw new Error("Trying to get diagnostics from a type checker that does not produce them.");
            }
        }
        function isInsideWithStatementBody(node) {
            if (node) {
                while (node.parent) {
                    if (node.parent.kind === 182 && node.parent.statement === node) {
                        return true;
                    }
                    node = node.parent;
                }
            }
            return false;
        }
        function getSymbolsInScope(location, meaning) {
            var symbols = {};
            var memberFlags = 0;
            function copySymbol(symbol, meaning) {
                if (symbol.flags & meaning) {
                    var id = symbol.name;
                    if (!isReservedMemberName(id) && !ts.hasProperty(symbols, id)) {
                        symbols[id] = symbol;
                    }
                }
            }
            function copySymbols(source, meaning) {
                if (meaning) {
                    for (var id in source) {
                        if (ts.hasProperty(source, id)) {
                            copySymbol(source[id], meaning);
                        }
                    }
                }
            }
            if (isInsideWithStatementBody(location)) {
                return [];
            }
            while (location) {
                if (location.locals && !isGlobalSourceFile(location)) {
                    copySymbols(location.locals, meaning);
                }
                switch (location.kind) {
                    case 207:
                        if (!ts.isExternalModule(location))
                            break;
                    case 195:
                        copySymbols(getSymbolOfNode(location).exports, meaning & 8914931);
                        break;
                    case 194:
                        copySymbols(getSymbolOfNode(location).exports, meaning & 8);
                        break;
                    case 191:
                    case 192:
                        if (!(memberFlags & 128)) {
                            copySymbols(getSymbolOfNode(location).members, meaning & 793056);
                        }
                        break;
                    case 156:
                        if (location.name) {
                            copySymbol(location.symbol, meaning);
                        }
                        break;
                    case 203:
                        if (location.name.text) {
                            copySymbol(location.symbol, meaning);
                        }
                        break;
                }
                memberFlags = location.flags;
                location = location.parent;
            }
            copySymbols(globals, meaning);
            return ts.mapToArray(symbols);
        }
        function isTypeDeclarationName(name) {
            return name.kind == 64 && isTypeDeclaration(name.parent) && name.parent.name === name;
        }
        function isTypeDeclaration(node) {
            switch (node.kind) {
                case 123:
                case 191:
                case 192:
                case 193:
                case 194:
                    return true;
            }
        }
        function isTypeReferenceIdentifier(entityName) {
            var node = entityName;
            while (node.parent && node.parent.kind === 121)
                node = node.parent;
            return node.parent && node.parent.kind === 135;
        }
        function isTypeNode(node) {
            if (135 <= node.kind && node.kind <= 143) {
                return true;
            }
            switch (node.kind) {
                case 110:
                case 117:
                case 119:
                case 111:
                    return true;
                case 98:
                    return node.parent.kind !== 160;
                case 8:
                    return node.parent.kind === 124;
                case 64:
                    if (node.parent.kind === 121 && node.parent.right === node) {
                        node = node.parent;
                    }
                case 121:
                    ts.Debug.assert(node.kind === 64 || node.kind === 121, "'node' was expected to be a qualified name or identifier in 'isTypeNode'.");
                    var parent = node.parent;
                    if (parent.kind === 138) {
                        return false;
                    }
                    if (135 <= parent.kind && parent.kind <= 143) {
                        return true;
                    }
                    switch (parent.kind) {
                        case 123:
                            return node === parent.constraint;
                        case 126:
                        case 125:
                        case 124:
                        case 188:
                            return node === parent.type;
                        case 190:
                        case 156:
                        case 157:
                        case 129:
                        case 128:
                        case 127:
                        case 130:
                        case 131:
                            return node === parent.type;
                        case 132:
                        case 133:
                        case 134:
                            return node === parent.type;
                        case 154:
                            return node === parent.type;
                        case 151:
                        case 152:
                            return parent.typeArguments && ts.indexOf(parent.typeArguments, node) >= 0;
                        case 153:
                            return false;
                    }
            }
            return false;
        }
        function getLeftSideOfImportOrExportAssignment(nodeOnRightSide) {
            while (nodeOnRightSide.parent.kind === 121) {
                nodeOnRightSide = nodeOnRightSide.parent;
            }
            if (nodeOnRightSide.parent.kind === 197) {
                return nodeOnRightSide.parent.moduleReference === nodeOnRightSide && nodeOnRightSide.parent;
            }
            if (nodeOnRightSide.parent.kind === 198) {
                return nodeOnRightSide.parent.exportName === nodeOnRightSide && nodeOnRightSide.parent;
            }
            return undefined;
        }
        function isInRightSideOfImportOrExportAssignment(node) {
            return getLeftSideOfImportOrExportAssignment(node) !== undefined;
        }
        function isRightSideOfQualifiedNameOrPropertyAccess(node) {
            return (node.parent.kind === 121 && node.parent.right === node) || (node.parent.kind === 149 && node.parent.name === node);
        }
        function getSymbolOfEntityNameOrPropertyAccessExpression(entityName) {
            if (ts.isDeclarationOrFunctionExpressionOrCatchVariableName(entityName)) {
                return getSymbolOfNode(entityName.parent);
            }
            if (entityName.parent.kind === 198) {
                return resolveEntityName(entityName.parent.parent, entityName, 107455 | 793056 | 1536 | 8388608);
            }
            if (entityName.kind !== 149) {
                if (isInRightSideOfImportOrExportAssignment(entityName)) {
                    return getSymbolOfPartOfRightHandSideOfImport(entityName);
                }
            }
            if (isRightSideOfQualifiedNameOrPropertyAccess(entityName)) {
                entityName = entityName.parent;
            }
            if (ts.isExpression(entityName)) {
                if (ts.getFullWidth(entityName) === 0) {
                    return undefined;
                }
                if (entityName.kind === 64) {
                    var meaning = 107455 | 8388608;
                    return resolveEntityName(entityName, entityName, meaning);
                }
                else if (entityName.kind === 149) {
                    var symbol = getNodeLinks(entityName).resolvedSymbol;
                    if (!symbol) {
                        checkPropertyAccessExpression(entityName);
                    }
                    return getNodeLinks(entityName).resolvedSymbol;
                }
                else if (entityName.kind === 121) {
                    var symbol = getNodeLinks(entityName).resolvedSymbol;
                    if (!symbol) {
                        checkQualifiedName(entityName);
                    }
                    return getNodeLinks(entityName).resolvedSymbol;
                }
            }
            else if (isTypeReferenceIdentifier(entityName)) {
                var meaning = entityName.parent.kind === 135 ? 793056 : 1536;
                meaning |= 8388608;
                return resolveEntityName(entityName, entityName, meaning);
            }
            return undefined;
        }
        function getSymbolInfo(node) {
            if (isInsideWithStatementBody(node)) {
                return undefined;
            }
            if (ts.isDeclarationOrFunctionExpressionOrCatchVariableName(node)) {
                return getSymbolOfNode(node.parent);
            }
            if (node.kind === 64 && isInRightSideOfImportOrExportAssignment(node)) {
                return node.parent.kind === 198 ? getSymbolOfEntityNameOrPropertyAccessExpression(node) : getSymbolOfPartOfRightHandSideOfImport(node);
            }
            switch (node.kind) {
                case 64:
                case 149:
                case 121:
                    return getSymbolOfEntityNameOrPropertyAccessExpression(node);
                case 92:
                case 90:
                    var type = checkExpression(node);
                    return type.symbol;
                case 112:
                    var constructorDeclaration = node.parent;
                    if (constructorDeclaration && constructorDeclaration.kind === 129) {
                        return constructorDeclaration.parent.symbol;
                    }
                    return undefined;
                case 8:
                    if (ts.isExternalModuleImportDeclaration(node.parent.parent) && ts.getExternalModuleImportDeclarationExpression(node.parent.parent) === node) {
                        var importSymbol = getSymbolOfNode(node.parent.parent);
                        var moduleType = getTypeOfSymbol(importSymbol);
                        return moduleType ? moduleType.symbol : undefined;
                    }
                case 7:
                    if (node.parent.kind == 150 && node.parent.argumentExpression === node) {
                        var objectType = checkExpression(node.parent.expression);
                        if (objectType === unknownType)
                            return undefined;
                        var apparentType = getApparentType(objectType);
                        if (apparentType === unknownType)
                            return undefined;
                        return getPropertyOfType(apparentType, node.text);
                    }
                    break;
            }
            return undefined;
        }
        function getShorthandAssignmentValueSymbol(location) {
            if (location && location.kind === 205) {
                return resolveEntityName(location, location.name, 107455);
            }
            return undefined;
        }
        function getTypeOfNode(node) {
            if (isInsideWithStatementBody(node)) {
                return unknownType;
            }
            if (ts.isExpression(node)) {
                return getTypeOfExpression(node);
            }
            if (isTypeNode(node)) {
                return getTypeFromTypeNode(node);
            }
            if (isTypeDeclaration(node)) {
                var symbol = getSymbolOfNode(node);
                return getDeclaredTypeOfSymbol(symbol);
            }
            if (isTypeDeclarationName(node)) {
                var symbol = getSymbolInfo(node);
                return symbol && getDeclaredTypeOfSymbol(symbol);
            }
            if (ts.isDeclaration(node)) {
                var symbol = getSymbolOfNode(node);
                return getTypeOfSymbol(symbol);
            }
            if (ts.isDeclarationOrFunctionExpressionOrCatchVariableName(node)) {
                var symbol = getSymbolInfo(node);
                return symbol && getTypeOfSymbol(symbol);
            }
            if (isInRightSideOfImportOrExportAssignment(node)) {
                var symbol = getSymbolInfo(node);
                var declaredType = symbol && getDeclaredTypeOfSymbol(symbol);
                return declaredType !== unknownType ? declaredType : getTypeOfSymbol(symbol);
            }
            return unknownType;
        }
        function getTypeOfExpression(expr) {
            if (isRightSideOfQualifiedNameOrPropertyAccess(expr)) {
                expr = expr.parent;
            }
            return checkExpression(expr);
        }
        function getAugmentedPropertiesOfType(type) {
            var type = getApparentType(type);
            var propsByName = createSymbolTable(getPropertiesOfType(type));
            if (getSignaturesOfType(type, 0).length || getSignaturesOfType(type, 1).length) {
                ts.forEach(getPropertiesOfType(globalFunctionType), function (p) {
                    if (!ts.hasProperty(propsByName, p.name)) {
                        propsByName[p.name] = p;
                    }
                });
            }
            return getNamedMembers(propsByName);
        }
        function getRootSymbols(symbol) {
            if (symbol.flags & 268435456) {
                var symbols = [];
                var name = symbol.name;
                ts.forEach(getSymbolLinks(symbol).unionType.types, function (t) {
                    symbols.push(getPropertyOfType(t, name));
                });
                return symbols;
            }
            else if (symbol.flags & 67108864) {
                var target = getSymbolLinks(symbol).target;
                if (target) {
                    return [target];
                }
            }
            return [symbol];
        }
        function isExternalModuleSymbol(symbol) {
            return symbol.flags & 512 && symbol.declarations.length === 1 && symbol.declarations[0].kind === 207;
        }
        function isNodeDescendentOf(node, ancestor) {
            while (node) {
                if (node === ancestor)
                    return true;
                node = node.parent;
            }
            return false;
        }
        function isUniqueLocalName(name, container) {
            for (var node = container; isNodeDescendentOf(node, container); node = node.nextContainer) {
                if (node.locals && ts.hasProperty(node.locals, name)) {
                    var symbolWithRelevantName = node.locals[name];
                    if (symbolWithRelevantName.flags & (107455 | 1048576)) {
                        return false;
                    }
                    if (symbolWithRelevantName.flags & 8388608) {
                        var importDeclarationWithRelevantName = ts.getDeclarationOfKind(symbolWithRelevantName, 197);
                        if (isReferencedImportDeclaration(importDeclarationWithRelevantName)) {
                            return false;
                        }
                    }
                }
            }
            return true;
        }
        function getLocalNameOfContainer(container) {
            var links = getNodeLinks(container);
            if (!links.localModuleName) {
                var prefix = "";
                var name = ts.unescapeIdentifier(container.name.text);
                while (!isUniqueLocalName(ts.escapeIdentifier(prefix + name), container)) {
                    prefix += "_";
                }
                links.localModuleName = prefix + ts.getTextOfNode(container.name);
            }
            return links.localModuleName;
        }
        function getLocalNameForSymbol(symbol, location) {
            var node = location;
            while (node) {
                if ((node.kind === 195 || node.kind === 194) && getSymbolOfNode(node) === symbol) {
                    return getLocalNameOfContainer(node);
                }
                node = node.parent;
            }
            ts.Debug.fail("getLocalNameForSymbol failed");
        }
        function getExpressionNamePrefix(node) {
            var symbol = getNodeLinks(node).resolvedSymbol;
            if (symbol) {
                var exportSymbol = getExportSymbolOfValueSymbolIfExported(symbol);
                if (symbol !== exportSymbol && !(exportSymbol.flags & 944)) {
                    symbol = exportSymbol;
                }
                if (symbol.parent) {
                    return isExternalModuleSymbol(symbol.parent) ? "exports" : getLocalNameForSymbol(getParentOfSymbol(symbol), node.parent);
                }
            }
        }
        function getExportAssignmentName(node) {
            var symbol = getExportAssignmentSymbol(getSymbolOfNode(node));
            return symbol && symbolIsValue(symbol) && !isConstEnumSymbol(symbol) ? symbolToString(symbol) : undefined;
        }
        function isTopLevelValueImportWithEntityName(node) {
            if (node.parent.kind !== 207 || !ts.isInternalModuleImportDeclaration(node)) {
                return false;
            }
            return isImportResolvedToValue(getSymbolOfNode(node));
        }
        function isImportResolvedToValue(symbol) {
            var target = resolveImport(symbol);
            return target !== unknownSymbol && target.flags & 107455 && !isConstEnumOrConstEnumOnlyModule(target);
        }
        function isConstEnumOrConstEnumOnlyModule(s) {
            return isConstEnumSymbol(s) || s.constEnumOnlyModule;
        }
        function isReferencedImportDeclaration(node) {
            var symbol = getSymbolOfNode(node);
            if (getSymbolLinks(symbol).referenced) {
                return true;
            }
            if (node.flags & 1) {
                return isImportResolvedToValue(symbol);
            }
            return false;
        }
        function isImplementationOfOverload(node) {
            if (ts.nodeIsPresent(node.body)) {
                var symbol = getSymbolOfNode(node);
                var signaturesOfSymbol = getSignaturesOfSymbol(symbol);
                return signaturesOfSymbol.length > 1 || (signaturesOfSymbol.length === 1 && signaturesOfSymbol[0].declaration !== node);
            }
            return false;
        }
        function getNodeCheckFlags(node) {
            return getNodeLinks(node).flags;
        }
        function getEnumMemberValue(node) {
            computeEnumMemberValues(node.parent);
            return getNodeLinks(node).enumMemberValue;
        }
        function getConstantValue(node) {
            if (node.kind === 206) {
                return getEnumMemberValue(node);
            }
            var symbol = getNodeLinks(node).resolvedSymbol;
            if (symbol && (symbol.flags & 8)) {
                var declaration = symbol.valueDeclaration;
                var constantValue;
                if (declaration.kind === 206) {
                    return getEnumMemberValue(declaration);
                }
            }
            return undefined;
        }
        function writeTypeOfDeclaration(declaration, enclosingDeclaration, flags, writer) {
            var symbol = getSymbolOfNode(declaration);
            var type = symbol && !(symbol.flags & (2048 | 131072)) ? getTypeOfSymbol(symbol) : unknownType;
            getSymbolDisplayBuilder().buildTypeDisplay(type, writer, enclosingDeclaration, flags);
        }
        function writeReturnTypeOfSignatureDeclaration(signatureDeclaration, enclosingDeclaration, flags, writer) {
            var signature = getSignatureFromDeclaration(signatureDeclaration);
            getSymbolDisplayBuilder().buildTypeDisplay(getReturnTypeOfSignature(signature), writer, enclosingDeclaration, flags);
        }
        function isUnknownIdentifier(location, name) {
            return !resolveName(location, name, 107455, undefined, undefined);
        }
        function createResolver() {
            return {
                getLocalNameOfContainer: getLocalNameOfContainer,
                getExpressionNamePrefix: getExpressionNamePrefix,
                getExportAssignmentName: getExportAssignmentName,
                isReferencedImportDeclaration: isReferencedImportDeclaration,
                getNodeCheckFlags: getNodeCheckFlags,
                isTopLevelValueImportWithEntityName: isTopLevelValueImportWithEntityName,
                isDeclarationVisible: isDeclarationVisible,
                isImplementationOfOverload: isImplementationOfOverload,
                writeTypeOfDeclaration: writeTypeOfDeclaration,
                writeReturnTypeOfSignatureDeclaration: writeReturnTypeOfSignatureDeclaration,
                isSymbolAccessible: isSymbolAccessible,
                isEntityNameVisible: isEntityNameVisible,
                getConstantValue: getConstantValue,
                isUnknownIdentifier: isUnknownIdentifier
            };
        }
        function initializeTypeChecker() {
            ts.forEach(host.getSourceFiles(), function (file) {
                ts.bindSourceFile(file);
            });
            ts.forEach(host.getSourceFiles(), function (file) {
                if (!ts.isExternalModule(file)) {
                    extendSymbolTable(globals, file.locals);
                }
            });
            getSymbolLinks(undefinedSymbol).type = undefinedType;
            getSymbolLinks(argumentsSymbol).type = getGlobalType("IArguments");
            getSymbolLinks(unknownSymbol).type = unknownType;
            globals[undefinedSymbol.name] = undefinedSymbol;
            globalArraySymbol = getGlobalSymbol("Array");
            globalArrayType = getTypeOfGlobalSymbol(globalArraySymbol, 1);
            globalObjectType = getGlobalType("Object");
            globalFunctionType = getGlobalType("Function");
            globalStringType = getGlobalType("String");
            globalNumberType = getGlobalType("Number");
            globalBooleanType = getGlobalType("Boolean");
            globalRegExpType = getGlobalType("RegExp");
            globalTemplateStringsArrayType = languageVersion >= 2 ? getGlobalType("TemplateStringsArray") : unknownType;
            anyArrayType = createArrayType(anyType);
        }
        function checkGrammarModifiers(node) {
            switch (node.kind) {
                case 130:
                case 131:
                case 129:
                case 126:
                case 125:
                case 128:
                case 127:
                case 134:
                case 191:
                case 192:
                case 195:
                case 194:
                case 198:
                case 171:
                case 190:
                case 193:
                case 197:
                case 124:
                    break;
                default:
                    return false;
            }
            if (!node.modifiers) {
                return;
            }
            var lastStatic, lastPrivate, lastProtected, lastDeclare;
            var flags = 0;
            for (var i = 0, n = node.modifiers.length; i < n; i++) {
                var modifier = node.modifiers[i];
                switch (modifier.kind) {
                    case 107:
                    case 106:
                    case 105:
                        var text;
                        if (modifier.kind === 107) {
                            text = "public";
                        }
                        else if (modifier.kind === 106) {
                            text = "protected";
                            lastProtected = modifier;
                        }
                        else {
                            text = "private";
                            lastPrivate = modifier;
                        }
                        if (flags & 112) {
                            return grammarErrorOnNode(modifier, ts.Diagnostics.Accessibility_modifier_already_seen);
                        }
                        else if (flags & 128) {
                            return grammarErrorOnNode(modifier, ts.Diagnostics._0_modifier_must_precede_1_modifier, text, "static");
                        }
                        else if (node.parent.kind === 196 || node.parent.kind === 207) {
                            return grammarErrorOnNode(modifier, ts.Diagnostics._0_modifier_cannot_appear_on_a_module_element, text);
                        }
                        flags |= ts.modifierToFlag(modifier.kind);
                        break;
                    case 108:
                        if (flags & 128) {
                            return grammarErrorOnNode(modifier, ts.Diagnostics._0_modifier_already_seen, "static");
                        }
                        else if (node.parent.kind === 196 || node.parent.kind === 207) {
                            return grammarErrorOnNode(modifier, ts.Diagnostics._0_modifier_cannot_appear_on_a_module_element, "static");
                        }
                        else if (node.kind === 124) {
                            return grammarErrorOnNode(modifier, ts.Diagnostics._0_modifier_cannot_appear_on_a_parameter, "static");
                        }
                        flags |= 128;
                        lastStatic = modifier;
                        break;
                    case 77:
                        if (flags & 1) {
                            return grammarErrorOnNode(modifier, ts.Diagnostics._0_modifier_already_seen, "export");
                        }
                        else if (flags & 2) {
                            return grammarErrorOnNode(modifier, ts.Diagnostics._0_modifier_must_precede_1_modifier, "export", "declare");
                        }
                        else if (node.parent.kind === 191) {
                            return grammarErrorOnNode(modifier, ts.Diagnostics._0_modifier_cannot_appear_on_a_class_element, "export");
                        }
                        else if (node.kind === 124) {
                            return grammarErrorOnNode(modifier, ts.Diagnostics._0_modifier_cannot_appear_on_a_parameter, "export");
                        }
                        flags |= 1;
                        break;
                    case 113:
                        if (flags & 2) {
                            return grammarErrorOnNode(modifier, ts.Diagnostics._0_modifier_already_seen, "declare");
                        }
                        else if (node.parent.kind === 191) {
                            return grammarErrorOnNode(modifier, ts.Diagnostics._0_modifier_cannot_appear_on_a_class_element, "declare");
                        }
                        else if (node.kind === 124) {
                            return grammarErrorOnNode(modifier, ts.Diagnostics._0_modifier_cannot_appear_on_a_parameter, "declare");
                        }
                        else if (ts.isInAmbientContext(node.parent) && node.parent.kind === 196) {
                            return grammarErrorOnNode(modifier, ts.Diagnostics.A_declare_modifier_cannot_be_used_in_an_already_ambient_context);
                        }
                        flags |= 2;
                        lastDeclare = modifier;
                        break;
                }
            }
            if (node.kind === 129) {
                if (flags & 128) {
                    return grammarErrorOnNode(lastStatic, ts.Diagnostics._0_modifier_cannot_appear_on_a_constructor_declaration, "static");
                }
                else if (flags & 64) {
                    return grammarErrorOnNode(lastProtected, ts.Diagnostics._0_modifier_cannot_appear_on_a_constructor_declaration, "protected");
                }
                else if (flags & 32) {
                    return grammarErrorOnNode(lastPrivate, ts.Diagnostics._0_modifier_cannot_appear_on_a_constructor_declaration, "private");
                }
            }
            else if (node.kind === 197 && flags & 2) {
                return grammarErrorOnNode(lastDeclare, ts.Diagnostics.A_declare_modifier_cannot_be_used_with_an_import_declaration, "declare");
            }
            else if (node.kind === 192 && flags & 2) {
                return grammarErrorOnNode(lastDeclare, ts.Diagnostics.A_declare_modifier_cannot_be_used_with_an_interface_declaration, "declare");
            }
            else if (node.kind === 124 && (flags & 112) && ts.isBindingPattern(node.name)) {
                return grammarErrorOnNode(node, ts.Diagnostics.A_parameter_property_may_not_be_a_binding_pattern);
            }
        }
        function checkGrammarForDisallowedTrailingComma(list) {
            if (list && list.hasTrailingComma) {
                var start = list.end - ",".length;
                var end = list.end;
                var sourceFile = ts.getSourceFileOfNode(list[0]);
                return grammarErrorAtPos(sourceFile, start, end - start, ts.Diagnostics.Trailing_comma_not_allowed);
            }
        }
        function checkGrammarTypeParameterList(node, typeParameters) {
            if (checkGrammarForDisallowedTrailingComma(typeParameters)) {
                return true;
            }
            if (typeParameters && typeParameters.length === 0) {
                var start = typeParameters.pos - "<".length;
                var sourceFile = ts.getSourceFileOfNode(node);
                var end = ts.skipTrivia(sourceFile.text, typeParameters.end) + ">".length;
                return grammarErrorAtPos(sourceFile, start, end - start, ts.Diagnostics.Type_parameter_list_cannot_be_empty);
            }
        }
        function checkGrammarParameterList(parameters) {
            if (checkGrammarForDisallowedTrailingComma(parameters)) {
                return true;
            }
            var seenOptionalParameter = false;
            var parameterCount = parameters.length;
            for (var i = 0; i < parameterCount; i++) {
                var parameter = parameters[i];
                if (parameter.dotDotDotToken) {
                    if (i !== (parameterCount - 1)) {
                        return grammarErrorOnNode(parameter.dotDotDotToken, ts.Diagnostics.A_rest_parameter_must_be_last_in_a_parameter_list);
                    }
                    if (parameter.questionToken) {
                        return grammarErrorOnNode(parameter.questionToken, ts.Diagnostics.A_rest_parameter_cannot_be_optional);
                    }
                    if (parameter.initializer) {
                        return grammarErrorOnNode(parameter.name, ts.Diagnostics.A_rest_parameter_cannot_have_an_initializer);
                    }
                }
                else if (parameter.questionToken || parameter.initializer) {
                    seenOptionalParameter = true;
                    if (parameter.questionToken && parameter.initializer) {
                        return grammarErrorOnNode(parameter.name, ts.Diagnostics.Parameter_cannot_have_question_mark_and_initializer);
                    }
                }
                else {
                    if (seenOptionalParameter) {
                        return grammarErrorOnNode(parameter.name, ts.Diagnostics.A_required_parameter_cannot_follow_an_optional_parameter);
                    }
                }
            }
        }
        function checkGrammarFunctionLikeDeclaration(node) {
            return checkGrammarModifiers(node) || checkGrammarTypeParameterList(node, node.typeParameters) || checkGrammarParameterList(node.parameters);
        }
        function checkGrammarIndexSignatureParameters(node) {
            var parameter = node.parameters[0];
            if (node.parameters.length !== 1) {
                if (parameter) {
                    return grammarErrorOnNode(parameter.name, ts.Diagnostics.An_index_signature_must_have_exactly_one_parameter);
                }
                else {
                    return grammarErrorOnNode(node, ts.Diagnostics.An_index_signature_must_have_exactly_one_parameter);
                }
            }
            else if (parameter.dotDotDotToken) {
                return grammarErrorOnNode(parameter.dotDotDotToken, ts.Diagnostics.An_index_signature_cannot_have_a_rest_parameter);
            }
            else if (parameter.flags & 243) {
                return grammarErrorOnNode(parameter.name, ts.Diagnostics.An_index_signature_parameter_cannot_have_an_accessibility_modifier);
            }
            else if (parameter.questionToken) {
                return grammarErrorOnNode(parameter.questionToken, ts.Diagnostics.An_index_signature_parameter_cannot_have_a_question_mark);
            }
            else if (parameter.initializer) {
                return grammarErrorOnNode(parameter.name, ts.Diagnostics.An_index_signature_parameter_cannot_have_an_initializer);
            }
            else if (!parameter.type) {
                return grammarErrorOnNode(parameter.name, ts.Diagnostics.An_index_signature_parameter_must_have_a_type_annotation);
            }
            else if (parameter.type.kind !== 119 && parameter.type.kind !== 117) {
                return grammarErrorOnNode(parameter.name, ts.Diagnostics.An_index_signature_parameter_type_must_be_string_or_number);
            }
            else if (!node.type) {
                return grammarErrorOnNode(node, ts.Diagnostics.An_index_signature_must_have_a_type_annotation);
            }
        }
        function checkGrammarForIndexSignatureModifier(node) {
            if (node.flags & 243) {
                grammarErrorOnFirstToken(node, ts.Diagnostics.Modifiers_not_permitted_on_index_signature_members);
            }
        }
        function checkGrammarIndexSignature(node) {
            checkGrammarModifiers(node) || checkGrammarIndexSignatureParameters(node) || checkGrammarForIndexSignatureModifier(node);
        }
        function checkGrammarForAtLeastOneTypeArgument(node, typeArguments) {
            if (typeArguments && typeArguments.length === 0) {
                var sourceFile = ts.getSourceFileOfNode(node);
                var start = typeArguments.pos - "<".length;
                var end = ts.skipTrivia(sourceFile.text, typeArguments.end) + ">".length;
                return grammarErrorAtPos(sourceFile, start, end - start, ts.Diagnostics.Type_argument_list_cannot_be_empty);
            }
        }
        function checkGrammarTypeArguments(node, typeArguments) {
            return checkGrammarForDisallowedTrailingComma(typeArguments) || checkGrammarForAtLeastOneTypeArgument(node, typeArguments);
        }
        function checkGrammarForOmittedArgument(node, arguments) {
            if (arguments) {
                var sourceFile = ts.getSourceFileOfNode(node);
                for (var i = 0, n = arguments.length; i < n; i++) {
                    var arg = arguments[i];
                    if (arg.kind === 168) {
                        return grammarErrorAtPos(sourceFile, arg.pos, 0, ts.Diagnostics.Argument_expression_expected);
                    }
                }
            }
        }
        function checkGrammarArguments(node, arguments) {
            return checkGrammarForDisallowedTrailingComma(arguments) || checkGrammarForOmittedArgument(node, arguments);
        }
        function checkGrammarHeritageClause(node) {
            var types = node.types;
            if (checkGrammarForDisallowedTrailingComma(types)) {
                return true;
            }
            if (types && types.length === 0) {
                var listType = ts.tokenToString(node.token);
                var sourceFile = ts.getSourceFileOfNode(node);
                return grammarErrorAtPos(sourceFile, types.pos, 0, ts.Diagnostics._0_list_cannot_be_empty, listType);
            }
        }
        function checkGrammarClassDeclarationHeritageClauses(node) {
            var seenExtendsClause = false;
            var seenImplementsClause = false;
            if (!checkGrammarModifiers(node) && node.heritageClauses) {
                for (var i = 0, n = node.heritageClauses.length; i < n; i++) {
                    ts.Debug.assert(i <= 2);
                    var heritageClause = node.heritageClauses[i];
                    if (heritageClause.token === 78) {
                        if (seenExtendsClause) {
                            return grammarErrorOnFirstToken(heritageClause, ts.Diagnostics.extends_clause_already_seen);
                        }
                        if (seenImplementsClause) {
                            return grammarErrorOnFirstToken(heritageClause, ts.Diagnostics.extends_clause_must_precede_implements_clause);
                        }
                        if (heritageClause.types.length > 1) {
                            return grammarErrorOnFirstToken(heritageClause.types[1], ts.Diagnostics.Classes_can_only_extend_a_single_class);
                        }
                        seenExtendsClause = true;
                    }
                    else {
                        ts.Debug.assert(heritageClause.token === 101);
                        if (seenImplementsClause) {
                            return grammarErrorOnFirstToken(heritageClause, ts.Diagnostics.implements_clause_already_seen);
                        }
                        seenImplementsClause = true;
                    }
                    checkGrammarHeritageClause(heritageClause);
                }
            }
        }
        function checkGrammarInterfaceDeclaration(node) {
            var seenExtendsClause = false;
            if (node.heritageClauses) {
                for (var i = 0, n = node.heritageClauses.length; i < n; i++) {
                    ts.Debug.assert(i <= 1);
                    var heritageClause = node.heritageClauses[i];
                    if (heritageClause.token === 78) {
                        if (seenExtendsClause) {
                            return grammarErrorOnFirstToken(heritageClause, ts.Diagnostics.extends_clause_already_seen);
                        }
                        seenExtendsClause = true;
                    }
                    else {
                        ts.Debug.assert(heritageClause.token === 101);
                        return grammarErrorOnFirstToken(heritageClause, ts.Diagnostics.Interface_declaration_cannot_have_implements_clause);
                    }
                    checkGrammarHeritageClause(heritageClause);
                }
            }
            return false;
        }
        function checkGrammarComputedPropertyName(node) {
            if (node.kind !== 122) {
                return false;
            }
            var computedPropertyName = node;
            if (languageVersion < 2) {
                return grammarErrorOnNode(node, ts.Diagnostics.Computed_property_names_are_only_available_when_targeting_ECMAScript_6_and_higher);
            }
            else if (computedPropertyName.expression.kind === 163 && computedPropertyName.expression.operator === 23) {
                return grammarErrorOnNode(computedPropertyName.expression, ts.Diagnostics.A_comma_expression_is_not_allowed_in_a_computed_property_name);
            }
        }
        function checkGrammarForGenerator(node) {
            if (node.asteriskToken) {
                return grammarErrorOnNode(node.asteriskToken, ts.Diagnostics.Generators_are_not_currently_supported);
            }
        }
        function checkGrammarFunctionName(name) {
            return checkGrammarEvalOrArgumentsInStrictMode(name, name);
        }
        function checkGrammarForInvalidQuestionMark(node, questionToken, message) {
            if (questionToken) {
                return grammarErrorOnNode(questionToken, message);
            }
        }
        function checkGrammarObjectLiteralExpression(node) {
            var seen = {};
            var Property = 1;
            var GetAccessor = 2;
            var SetAccesor = 4;
            var GetOrSetAccessor = GetAccessor | SetAccesor;
            var inStrictMode = (node.parserContextFlags & 1) !== 0;
            for (var i = 0, n = node.properties.length; i < n; i++) {
                var prop = node.properties[i];
                var name = prop.name;
                if (prop.kind === 168 || name.kind === 122) {
                    checkGrammarComputedPropertyName(name);
                    continue;
                }
                var currentKind;
                if (prop.kind === 204 || prop.kind === 205) {
                    checkGrammarForInvalidQuestionMark(prop, prop.questionToken, ts.Diagnostics.An_object_member_cannot_be_declared_optional);
                    if (name.kind === 7) {
                        checkGrammarNumbericLiteral(name);
                    }
                    currentKind = Property;
                }
                else if (prop.kind === 128) {
                    currentKind = Property;
                }
                else if (prop.kind === 130) {
                    currentKind = GetAccessor;
                }
                else if (prop.kind === 131) {
                    currentKind = SetAccesor;
                }
                else {
                    ts.Debug.fail("Unexpected syntax kind:" + prop.kind);
                }
                if (!ts.hasProperty(seen, name.text)) {
                    seen[name.text] = currentKind;
                }
                else {
                    var existingKind = seen[name.text];
                    if (currentKind === Property && existingKind === Property) {
                        if (inStrictMode) {
                            grammarErrorOnNode(name, ts.Diagnostics.An_object_literal_cannot_have_multiple_properties_with_the_same_name_in_strict_mode);
                        }
                    }
                    else if ((currentKind & GetOrSetAccessor) && (existingKind & GetOrSetAccessor)) {
                        if (existingKind !== GetOrSetAccessor && currentKind !== existingKind) {
                            seen[name.text] = currentKind | existingKind;
                        }
                        else {
                            return grammarErrorOnNode(name, ts.Diagnostics.An_object_literal_cannot_have_multiple_get_Slashset_accessors_with_the_same_name);
                        }
                    }
                    else {
                        return grammarErrorOnNode(name, ts.Diagnostics.An_object_literal_cannot_have_property_and_accessor_with_the_same_name);
                    }
                }
            }
        }
        function checkGrammarAccessor(accessor) {
            var kind = accessor.kind;
            if (languageVersion < 1) {
                return grammarErrorOnNode(accessor.name, ts.Diagnostics.Accessors_are_only_available_when_targeting_ECMAScript_5_and_higher);
            }
            else if (ts.isInAmbientContext(accessor)) {
                return grammarErrorOnNode(accessor.name, ts.Diagnostics.An_accessor_cannot_be_declared_in_an_ambient_context);
            }
            else if (accessor.body === undefined) {
                return grammarErrorAtPos(ts.getSourceFileOfNode(accessor), accessor.end - 1, ";".length, ts.Diagnostics._0_expected, "{");
            }
            else if (accessor.typeParameters) {
                return grammarErrorOnNode(accessor.name, ts.Diagnostics.An_accessor_cannot_have_type_parameters);
            }
            else if (kind === 130 && accessor.parameters.length) {
                return grammarErrorOnNode(accessor.name, ts.Diagnostics.A_get_accessor_cannot_have_parameters);
            }
            else if (kind === 131) {
                if (accessor.type) {
                    return grammarErrorOnNode(accessor.name, ts.Diagnostics.A_set_accessor_cannot_have_a_return_type_annotation);
                }
                else if (accessor.parameters.length !== 1) {
                    return grammarErrorOnNode(accessor.name, ts.Diagnostics.A_set_accessor_must_have_exactly_one_parameter);
                }
                else {
                    var parameter = accessor.parameters[0];
                    if (parameter.dotDotDotToken) {
                        return grammarErrorOnNode(parameter.dotDotDotToken, ts.Diagnostics.A_set_accessor_cannot_have_rest_parameter);
                    }
                    else if (parameter.flags & 243) {
                        return grammarErrorOnNode(accessor.name, ts.Diagnostics.A_parameter_property_is_only_allowed_in_a_constructor_implementation);
                    }
                    else if (parameter.questionToken) {
                        return grammarErrorOnNode(parameter.questionToken, ts.Diagnostics.A_set_accessor_cannot_have_an_optional_parameter);
                    }
                    else if (parameter.initializer) {
                        return grammarErrorOnNode(accessor.name, ts.Diagnostics.A_set_accessor_parameter_cannot_have_an_initializer);
                    }
                }
            }
        }
        function checkGrammarForDisallowedComputedProperty(node, message) {
            if (node.kind === 122) {
                return grammarErrorOnNode(node, message);
            }
        }
        function checkGrammarMethod(node) {
            if (checkGrammarDisallowedModifiersInBlockOrObjectLiteralExpression(node) || checkGrammarFunctionLikeDeclaration(node) || checkGrammarForGenerator(node)) {
                return true;
            }
            if (node.parent.kind === 148) {
                if (checkGrammarForInvalidQuestionMark(node, node.questionToken, ts.Diagnostics.A_class_member_cannot_be_declared_optional)) {
                    return true;
                }
                else if (node.body === undefined) {
                    return grammarErrorAtPos(getSourceFile(node), node.end - 1, ";".length, ts.Diagnostics._0_expected, "{");
                }
            }
            if (node.parent.kind === 191) {
                if (checkGrammarForInvalidQuestionMark(node, node.questionToken, ts.Diagnostics.A_class_member_cannot_be_declared_optional)) {
                    return true;
                }
                if (ts.isInAmbientContext(node)) {
                    return checkGrammarForDisallowedComputedProperty(node.name, ts.Diagnostics.Computed_property_names_are_not_allowed_in_an_ambient_context);
                }
                else if (!node.body) {
                    return checkGrammarForDisallowedComputedProperty(node.name, ts.Diagnostics.Computed_property_names_are_not_allowed_in_method_overloads);
                }
            }
            else if (node.parent.kind === 192) {
                return checkGrammarForDisallowedComputedProperty(node.name, ts.Diagnostics.Computed_property_names_are_not_allowed_in_interfaces);
            }
            else if (node.parent.kind === 139) {
                return checkGrammarForDisallowedComputedProperty(node.name, ts.Diagnostics.Computed_property_names_are_not_allowed_in_type_literals);
            }
        }
        function isIterationStatement(node, lookInLabeledStatements) {
            switch (node.kind) {
                case 177:
                case 178:
                case 175:
                case 176:
                    return true;
                case 184:
                    return lookInLabeledStatements && isIterationStatement(node.statement, lookInLabeledStatements);
            }
            return false;
        }
        function checkGrammarBreakOrContinueStatement(node) {
            var current = node;
            while (current) {
                if (ts.isAnyFunction(current)) {
                    return grammarErrorOnNode(node, ts.Diagnostics.Jump_target_cannot_cross_function_boundary);
                }
                switch (current.kind) {
                    case 184:
                        if (node.label && current.label.text === node.label.text) {
                            var isMisplacedContinueLabel = node.kind === 179 && !isIterationStatement(current.statement, true);
                            if (isMisplacedContinueLabel) {
                                return grammarErrorOnNode(node, ts.Diagnostics.A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement);
                            }
                            return false;
                        }
                        break;
                    case 183:
                        if (node.kind === 180 && !node.label) {
                            return false;
                        }
                        break;
                    default:
                        if (isIterationStatement(current, false) && !node.label) {
                            return false;
                        }
                        break;
                }
                current = current.parent;
            }
            if (node.label) {
                var message = node.kind === 180 ? ts.Diagnostics.A_break_statement_can_only_jump_to_a_label_of_an_enclosing_statement : ts.Diagnostics.A_continue_statement_can_only_jump_to_a_label_of_an_enclosing_iteration_statement;
                return grammarErrorOnNode(node, message);
            }
            else {
                var message = node.kind === 180 ? ts.Diagnostics.A_break_statement_can_only_be_used_within_an_enclosing_iteration_or_switch_statement : ts.Diagnostics.A_continue_statement_can_only_be_used_within_an_enclosing_iteration_statement;
                return grammarErrorOnNode(node, message);
            }
        }
        function checkGrammarBindingElement(node) {
            if (node.dotDotDotToken) {
                var elements = node.parent.elements;
                if (node !== elements[elements.length - 1]) {
                    return grammarErrorOnNode(node, ts.Diagnostics.A_rest_element_must_be_last_in_an_array_destructuring_pattern);
                }
                if (node.initializer) {
                    return grammarErrorAtPos(ts.getSourceFileOfNode(node), node.initializer.pos - 1, 1, ts.Diagnostics.A_rest_element_cannot_have_an_initializer);
                }
            }
            return checkGrammarEvalOrArgumentsInStrictMode(node, node.name);
        }
        function checkGrammarVariableDeclaration(node) {
            if (ts.isInAmbientContext(node)) {
                if (ts.isBindingPattern(node.name)) {
                    return grammarErrorOnNode(node, ts.Diagnostics.Destructuring_declarations_are_not_allowed_in_ambient_contexts);
                }
                if (node.initializer) {
                    return grammarErrorAtPos(ts.getSourceFileOfNode(node), node.initializer.pos - 1, 1, ts.Diagnostics.Initializers_are_not_allowed_in_ambient_contexts);
                }
            }
            else {
                if (!node.initializer) {
                    if (ts.isBindingPattern(node.name) && !ts.isBindingPattern(node.parent)) {
                        return grammarErrorOnNode(node, ts.Diagnostics.A_destructuring_declaration_must_have_an_initializer);
                    }
                    if (ts.isConst(node)) {
                        return grammarErrorOnNode(node, ts.Diagnostics.const_declarations_must_be_initialized);
                    }
                }
            }
            var checkLetConstNames = languageVersion >= 2 && (ts.isLet(node) || ts.isConst(node));
            return (checkLetConstNames && checkGrammarNameInLetOrConstDeclarations(node.name)) || checkGrammarEvalOrArgumentsInStrictMode(node, node.name);
        }
        function checkGrammarNameInLetOrConstDeclarations(name) {
            if (name.kind === 64) {
                if (name.text === "let") {
                    return grammarErrorOnNode(name, ts.Diagnostics.let_is_not_allowed_to_be_used_as_a_name_in_let_or_const_declarations);
                }
            }
            else {
                var elements = name.elements;
                for (var i = 0; i < elements.length; ++i) {
                    checkGrammarNameInLetOrConstDeclarations(elements[i].name);
                }
            }
        }
        function checkGrammarVariableDeclarationList(declarationList) {
            var declarations = declarationList.declarations;
            if (checkGrammarForDisallowedTrailingComma(declarationList.declarations)) {
                return true;
            }
            if (!declarationList.declarations.length) {
                return grammarErrorAtPos(ts.getSourceFileOfNode(declarationList), declarations.pos, declarations.end - declarations.pos, ts.Diagnostics.Variable_declaration_list_cannot_be_empty);
            }
            if (languageVersion < 2) {
                if (ts.isLet(declarationList)) {
                    return grammarErrorOnFirstToken(declarationList, ts.Diagnostics.let_declarations_are_only_available_when_targeting_ECMAScript_6_and_higher);
                }
                else if (ts.isConst(declarationList)) {
                    return grammarErrorOnFirstToken(declarationList, ts.Diagnostics.const_declarations_are_only_available_when_targeting_ECMAScript_6_and_higher);
                }
            }
        }
        function allowLetAndConstDeclarations(parent) {
            switch (parent.kind) {
                case 174:
                case 175:
                case 176:
                case 182:
                case 177:
                case 178:
                    return false;
                case 184:
                    return allowLetAndConstDeclarations(parent.parent);
            }
            return true;
        }
        function checkGrammarForDisallowedLetOrConstStatement(node) {
            if (!allowLetAndConstDeclarations(node.parent)) {
                if (ts.isLet(node.declarationList)) {
                    return grammarErrorOnNode(node, ts.Diagnostics.let_declarations_can_only_be_declared_inside_a_block);
                }
                else if (ts.isConst(node.declarationList)) {
                    return grammarErrorOnNode(node, ts.Diagnostics.const_declarations_can_only_be_declared_inside_a_block);
                }
            }
        }
        function isIntegerLiteral(expression) {
            if (expression.kind === 161) {
                var unaryExpression = expression;
                if (unaryExpression.operator === 33 || unaryExpression.operator === 34) {
                    expression = unaryExpression.operand;
                }
            }
            if (expression.kind === 7) {
                return /^[0-9]+([eE]\+?[0-9]+)?$/.test(expression.text);
            }
            return false;
        }
        function checkGrammarEnumDeclaration(enumDecl) {
            var enumIsConst = (enumDecl.flags & 4096) !== 0;
            var hasError = false;
            if (!enumIsConst) {
                var inConstantEnumMemberSection = true;
                var inAmbientContext = ts.isInAmbientContext(enumDecl);
                for (var i = 0, n = enumDecl.members.length; i < n; i++) {
                    var node = enumDecl.members[i];
                    if (node.name.kind === 122) {
                        hasError = grammarErrorOnNode(node.name, ts.Diagnostics.Computed_property_names_are_not_allowed_in_enums);
                    }
                    else if (inAmbientContext) {
                        if (node.initializer && !isIntegerLiteral(node.initializer)) {
                            hasError = grammarErrorOnNode(node.name, ts.Diagnostics.Ambient_enum_elements_can_only_have_integer_literal_initializers) || hasError;
                        }
                    }
                    else if (node.initializer) {
                        inConstantEnumMemberSection = isIntegerLiteral(node.initializer);
                    }
                    else if (!inConstantEnumMemberSection) {
                        hasError = grammarErrorOnNode(node.name, ts.Diagnostics.Enum_member_must_have_initializer) || hasError;
                    }
                }
            }
            return hasError;
        }
        function hasParseDiagnostics(sourceFile) {
            return sourceFile.parseDiagnostics.length > 0;
        }
        function scanToken(scanner, pos) {
            scanner.setTextPos(pos);
            scanner.scan();
            var start = scanner.getTokenPos();
            return start;
        }
        function grammarErrorOnFirstToken(node, message, arg0, arg1, arg2) {
            var sourceFile = ts.getSourceFileOfNode(node);
            if (!hasParseDiagnostics(sourceFile)) {
                var scanner = ts.createScanner(languageVersion, true, sourceFile.text);
                var start = scanToken(scanner, node.pos);
                diagnostics.add(ts.createFileDiagnostic(sourceFile, start, scanner.getTextPos() - start, message, arg0, arg1, arg2));
                return true;
            }
        }
        function grammarErrorAtPos(sourceFile, start, length, message, arg0, arg1, arg2) {
            if (!hasParseDiagnostics(sourceFile)) {
                diagnostics.add(ts.createFileDiagnostic(sourceFile, start, length, message, arg0, arg1, arg2));
                return true;
            }
        }
        function grammarErrorOnNode(node, message, arg0, arg1, arg2) {
            var sourceFile = ts.getSourceFileOfNode(node);
            if (!hasParseDiagnostics(sourceFile)) {
                var span = ts.getErrorSpanForNode(node);
                var start = span.end > span.pos ? ts.skipTrivia(sourceFile.text, span.pos) : span.pos;
                diagnostics.add(ts.createFileDiagnostic(sourceFile, start, span.end - start, message, arg0, arg1, arg2));
                return true;
            }
        }
        function checkGrammarEvalOrArgumentsInStrictMode(contextNode, identifier) {
            if (contextNode && (contextNode.parserContextFlags & 1) && ts.isEvalOrArgumentsIdentifier(identifier)) {
                var name = ts.declarationNameToString(identifier);
                return grammarErrorOnNode(identifier, ts.Diagnostics.Invalid_use_of_0_in_strict_mode, name);
            }
        }
        function checkGrammarConstructorTypeParameters(node) {
            if (node.typeParameters) {
                return grammarErrorAtPos(ts.getSourceFileOfNode(node), node.typeParameters.pos, node.typeParameters.end - node.typeParameters.pos, ts.Diagnostics.Type_parameters_cannot_appear_on_a_constructor_declaration);
            }
        }
        function checkGrammarConstructorTypeAnnotation(node) {
            if (node.type) {
                return grammarErrorOnNode(node.type, ts.Diagnostics.Type_annotation_cannot_appear_on_a_constructor_declaration);
            }
        }
        function checkGrammarProperty(node) {
            if (node.parent.kind === 191) {
                if (checkGrammarForInvalidQuestionMark(node, node.questionToken, ts.Diagnostics.A_class_member_cannot_be_declared_optional) || checkGrammarForDisallowedComputedProperty(node.name, ts.Diagnostics.Computed_property_names_are_not_allowed_in_class_property_declarations)) {
                    return true;
                }
            }
            else if (node.parent.kind === 192) {
                if (checkGrammarForDisallowedComputedProperty(node.name, ts.Diagnostics.Computed_property_names_are_not_allowed_in_interfaces)) {
                    return true;
                }
            }
            else if (node.parent.kind === 139) {
                if (checkGrammarForDisallowedComputedProperty(node.name, ts.Diagnostics.Computed_property_names_are_not_allowed_in_type_literals)) {
                    return true;
                }
            }
            if (ts.isInAmbientContext(node) && node.initializer) {
                return grammarErrorOnFirstToken(node.initializer, ts.Diagnostics.Initializers_are_not_allowed_in_ambient_contexts);
            }
        }
        function checkGrammarTopLevelElementForRequiredDeclareModifier(node) {
            if (node.kind === 192 || node.kind === 197 || node.kind === 198 || (node.flags & 2)) {
                return false;
            }
            return grammarErrorOnFirstToken(node, ts.Diagnostics.A_declare_modifier_is_required_for_a_top_level_declaration_in_a_d_ts_file);
        }
        function checkGrammarTopLevelElementsForRequiredDeclareModifier(file) {
            for (var i = 0, n = file.statements.length; i < n; i++) {
                var decl = file.statements[i];
                if (ts.isDeclaration(decl) || decl.kind === 171) {
                    if (checkGrammarTopLevelElementForRequiredDeclareModifier(decl)) {
                        return true;
                    }
                }
            }
        }
        function checkGrammarSourceFile(node) {
            return ts.isInAmbientContext(node) && checkGrammarTopLevelElementsForRequiredDeclareModifier(node);
        }
        function checkGrammarForStatementInAmbientContext(node) {
            if (ts.isInAmbientContext(node)) {
                if (isAccessor(node.parent.kind)) {
                    return getNodeLinks(node).hasReportedStatementInAmbientContext = true;
                }
                var links = getNodeLinks(node);
                if (!links.hasReportedStatementInAmbientContext && ts.isAnyFunction(node.parent)) {
                    return getNodeLinks(node).hasReportedStatementInAmbientContext = grammarErrorOnFirstToken(node, ts.Diagnostics.An_implementation_cannot_be_declared_in_ambient_contexts);
                }
                if (node.parent.kind === 170 || node.parent.kind === 196 || node.parent.kind === 207) {
                    var links = getNodeLinks(node.parent);
                    if (!links.hasReportedStatementInAmbientContext) {
                        return links.hasReportedStatementInAmbientContext = grammarErrorOnFirstToken(node, ts.Diagnostics.Statements_are_not_allowed_in_ambient_contexts);
                    }
                }
                else {
                }
            }
        }
        function checkGrammarNumbericLiteral(node) {
            if (node.flags & 8192) {
                if (node.parserContextFlags & 1) {
                    return grammarErrorOnNode(node, ts.Diagnostics.Octal_literals_are_not_allowed_in_strict_mode);
                }
                else if (languageVersion >= 1) {
                    return grammarErrorOnNode(node, ts.Diagnostics.Octal_literals_are_not_available_when_targeting_ECMAScript_5_and_higher);
                }
            }
        }
        function grammarErrorAfterFirstToken(node, message, arg0, arg1, arg2) {
            var sourceFile = ts.getSourceFileOfNode(node);
            if (!hasParseDiagnostics(sourceFile)) {
                var scanner = ts.createScanner(languageVersion, true, sourceFile.text);
                scanToken(scanner, node.pos);
                diagnostics.add(ts.createFileDiagnostic(sourceFile, scanner.getTextPos(), 0, message, arg0, arg1, arg2));
                return true;
            }
        }
        initializeTypeChecker();
        return checker;
    }
    ts.createTypeChecker = createTypeChecker;
})(ts || (ts = {}));
var ts;
(function (ts) {
    var indentStrings = ["", "    "];
    function getIndentString(level) {
        if (indentStrings[level] === undefined) {
            indentStrings[level] = getIndentString(level - 1) + indentStrings[1];
        }
        return indentStrings[level];
    }
    ts.getIndentString = getIndentString;
    function getIndentSize() {
        return indentStrings[1].length;
    }
    function shouldEmitToOwnFile(sourceFile, compilerOptions) {
        if (!ts.isDeclarationFile(sourceFile)) {
            if ((ts.isExternalModule(sourceFile) || !compilerOptions.out) && !ts.fileExtensionIs(sourceFile.fileName, ".js")) {
                return true;
            }
            return false;
        }
        return false;
    }
    ts.shouldEmitToOwnFile = shouldEmitToOwnFile;
    function isExternalModuleOrDeclarationFile(sourceFile) {
        return ts.isExternalModule(sourceFile) || ts.isDeclarationFile(sourceFile);
    }
    ts.isExternalModuleOrDeclarationFile = isExternalModuleOrDeclarationFile;
    function createTextWriter(newLine) {
        var output = "";
        var indent = 0;
        var lineStart = true;
        var lineCount = 0;
        var linePos = 0;
        function write(s) {
            if (s && s.length) {
                if (lineStart) {
                    output += getIndentString(indent);
                    lineStart = false;
                }
                output += s;
            }
        }
        function rawWrite(s) {
            if (s !== undefined) {
                if (lineStart) {
                    lineStart = false;
                }
                output += s;
            }
        }
        function writeLiteral(s) {
            if (s && s.length) {
                write(s);
                var lineStartsOfS = ts.computeLineStarts(s);
                if (lineStartsOfS.length > 1) {
                    lineCount = lineCount + lineStartsOfS.length - 1;
                    linePos = output.length - s.length + lineStartsOfS[lineStartsOfS.length - 1];
                }
            }
        }
        function writeLine() {
            if (!lineStart) {
                output += newLine;
                lineCount++;
                linePos = output.length;
                lineStart = true;
            }
        }
        function writeTextOfNode(sourceFile, node) {
            write(ts.getSourceTextOfNodeFromSourceFile(sourceFile, node));
        }
        return {
            write: write,
            rawWrite: rawWrite,
            writeTextOfNode: writeTextOfNode,
            writeLiteral: writeLiteral,
            writeLine: writeLine,
            increaseIndent: function () { return indent++; },
            decreaseIndent: function () { return indent--; },
            getIndent: function () { return indent; },
            getTextPos: function () { return output.length; },
            getLine: function () { return lineCount + 1; },
            getColumn: function () { return lineStart ? indent * getIndentSize() + 1 : output.length - linePos + 1; },
            getText: function () { return output; }
        };
    }
    function getLineOfLocalPosition(currentSourceFile, pos) {
        return ts.getLineAndCharacterOfPosition(currentSourceFile, pos).line;
    }
    function emitNewLineBeforeLeadingComments(currentSourceFile, writer, node, leadingComments) {
        if (leadingComments && leadingComments.length && node.pos !== leadingComments[0].pos && getLineOfLocalPosition(currentSourceFile, node.pos) !== getLineOfLocalPosition(currentSourceFile, leadingComments[0].pos)) {
            writer.writeLine();
        }
    }
    function emitComments(currentSourceFile, writer, comments, trailingSeparator, newLine, writeComment) {
        var emitLeadingSpace = !trailingSeparator;
        ts.forEach(comments, function (comment) {
            if (emitLeadingSpace) {
                writer.write(" ");
                emitLeadingSpace = false;
            }
            writeComment(currentSourceFile, writer, comment, newLine);
            if (comment.hasTrailingNewLine) {
                writer.writeLine();
            }
            else if (trailingSeparator) {
                writer.write(" ");
            }
            else {
                emitLeadingSpace = true;
            }
        });
    }
    function writeCommentRange(currentSourceFile, writer, comment, newLine) {
        if (currentSourceFile.text.charCodeAt(comment.pos + 1) === 42) {
            var firstCommentLineAndCharacter = ts.getLineAndCharacterOfPosition(currentSourceFile, comment.pos);
            var lastLine = ts.getLineStarts(currentSourceFile).length;
            var firstCommentLineIndent;
            for (var pos = comment.pos, currentLine = firstCommentLineAndCharacter.line; pos < comment.end; currentLine++) {
                var nextLineStart = currentLine === lastLine ? (comment.end + 1) : ts.getPositionFromLineAndCharacter(currentSourceFile, currentLine + 1, 1);
                if (pos !== comment.pos) {
                    if (firstCommentLineIndent === undefined) {
                        firstCommentLineIndent = calculateIndent(ts.getPositionFromLineAndCharacter(currentSourceFile, firstCommentLineAndCharacter.line, 1), comment.pos);
                    }
                    var currentWriterIndentSpacing = writer.getIndent() * getIndentSize();
                    var spacesToEmit = currentWriterIndentSpacing - firstCommentLineIndent + calculateIndent(pos, nextLineStart);
                    if (spacesToEmit > 0) {
                        var numberOfSingleSpacesToEmit = spacesToEmit % getIndentSize();
                        var indentSizeSpaceString = getIndentString((spacesToEmit - numberOfSingleSpacesToEmit) / getIndentSize());
                        writer.rawWrite(indentSizeSpaceString);
                        while (numberOfSingleSpacesToEmit) {
                            writer.rawWrite(" ");
                            numberOfSingleSpacesToEmit--;
                        }
                    }
                    else {
                        writer.rawWrite("");
                    }
                }
                writeTrimmedCurrentLine(pos, nextLineStart);
                pos = nextLineStart;
            }
        }
        else {
            writer.write(currentSourceFile.text.substring(comment.pos, comment.end));
        }
        function writeTrimmedCurrentLine(pos, nextLineStart) {
            var end = Math.min(comment.end, nextLineStart - 1);
            var currentLineText = currentSourceFile.text.substring(pos, end).replace(/^\s+|\s+$/g, '');
            if (currentLineText) {
                writer.write(currentLineText);
                if (end !== comment.end) {
                    writer.writeLine();
                }
            }
            else {
                writer.writeLiteral(newLine);
            }
        }
        function calculateIndent(pos, end) {
            var currentLineIndent = 0;
            for (; pos < end && ts.isWhiteSpace(currentSourceFile.text.charCodeAt(pos)); pos++) {
                if (currentSourceFile.text.charCodeAt(pos) === 9) {
                    currentLineIndent += getIndentSize() - (currentLineIndent % getIndentSize());
                }
                else {
                    currentLineIndent++;
                }
            }
            return currentLineIndent;
        }
    }
    function getFirstConstructorWithBody(node) {
        return ts.forEach(node.members, function (member) {
            if (member.kind === 129 && ts.nodeIsPresent(member.body)) {
                return member;
            }
        });
    }
    function getAllAccessorDeclarations(node, accessor) {
        var firstAccessor;
        var getAccessor;
        var setAccessor;
        if (accessor.name.kind === 122) {
            firstAccessor = accessor;
            if (accessor.kind === 130) {
                getAccessor = accessor;
            }
            else if (accessor.kind === 131) {
                setAccessor = accessor;
            }
            else {
                ts.Debug.fail("Accessor has wrong kind");
            }
        }
        else {
            ts.forEach(node.members, function (member) {
                if ((member.kind === 130 || member.kind === 131) && member.name.text === accessor.name.text && (member.flags & 128) === (accessor.flags & 128)) {
                    if (!firstAccessor) {
                        firstAccessor = member;
                    }
                    if (member.kind === 130 && !getAccessor) {
                        getAccessor = member;
                    }
                    if (member.kind === 131 && !setAccessor) {
                        setAccessor = member;
                    }
                }
            });
        }
        return {
            firstAccessor: firstAccessor,
            getAccessor: getAccessor,
            setAccessor: setAccessor
        };
    }
    function getSourceFilePathInNewDir(sourceFile, host, newDirPath) {
        var sourceFilePath = ts.getNormalizedAbsolutePath(sourceFile.fileName, host.getCurrentDirectory());
        sourceFilePath = sourceFilePath.replace(host.getCommonSourceDirectory(), "");
        return ts.combinePaths(newDirPath, sourceFilePath);
    }
    function getOwnEmitOutputFilePath(sourceFile, host, extension) {
        var compilerOptions = host.getCompilerOptions();
        if (compilerOptions.outDir) {
            var emitOutputFilePathWithoutExtension = ts.removeFileExtension(getSourceFilePathInNewDir(sourceFile, host, compilerOptions.outDir));
        }
        else {
            var emitOutputFilePathWithoutExtension = ts.removeFileExtension(sourceFile.fileName);
        }
        return emitOutputFilePathWithoutExtension + extension;
    }
    function writeFile(host, diagnostics, fileName, data, writeByteOrderMark) {
        host.writeFile(fileName, data, writeByteOrderMark, function (hostErrorMessage) {
            diagnostics.push(ts.createCompilerDiagnostic(ts.Diagnostics.Could_not_write_file_0_Colon_1, fileName, hostErrorMessage));
        });
    }
    function emitDeclarations(host, resolver, diagnostics, jsFilePath, root) {
        var newLine = host.getNewLine();
        var compilerOptions = host.getCompilerOptions();
        var languageVersion = compilerOptions.target || 0;
        var write;
        var writeLine;
        var increaseIndent;
        var decreaseIndent;
        var writeTextOfNode;
        var writer = createAndSetNewTextWriterWithSymbolWriter();
        var enclosingDeclaration;
        var currentSourceFile;
        var reportedDeclarationError = false;
        var emitJsDocComments = compilerOptions.removeComments ? function (declaration) {
        } : writeJsDocComments;
        var emit = compilerOptions.stripInternal ? stripInternal : emitNode;
        var aliasDeclarationEmitInfo = [];
        var referencePathsOutput = "";
        if (root) {
            if (!compilerOptions.noResolve) {
                var addedGlobalFileReference = false;
                ts.forEach(root.referencedFiles, function (fileReference) {
                    var referencedFile = ts.tryResolveScriptReference(host, root, fileReference);
                    if (referencedFile && ((referencedFile.flags & 1024) || shouldEmitToOwnFile(referencedFile, compilerOptions) || !addedGlobalFileReference)) {
                        writeReferencePath(referencedFile);
                        if (!isExternalModuleOrDeclarationFile(referencedFile)) {
                            addedGlobalFileReference = true;
                        }
                    }
                });
            }
            emitSourceFile(root);
        }
        else {
            var emittedReferencedFiles = [];
            ts.forEach(host.getSourceFiles(), function (sourceFile) {
                if (!isExternalModuleOrDeclarationFile(sourceFile)) {
                    if (!compilerOptions.noResolve) {
                        ts.forEach(sourceFile.referencedFiles, function (fileReference) {
                            var referencedFile = ts.tryResolveScriptReference(host, sourceFile, fileReference);
                            if (referencedFile && (isExternalModuleOrDeclarationFile(referencedFile) && !ts.contains(emittedReferencedFiles, referencedFile))) {
                                writeReferencePath(referencedFile);
                                emittedReferencedFiles.push(referencedFile);
                            }
                        });
                    }
                    emitSourceFile(sourceFile);
                }
            });
        }
        return {
            reportedDeclarationError: reportedDeclarationError,
            aliasDeclarationEmitInfo: aliasDeclarationEmitInfo,
            synchronousDeclarationOutput: writer.getText(),
            referencePathsOutput: referencePathsOutput
        };
        function hasInternalAnnotation(range) {
            var text = currentSourceFile.text;
            var comment = text.substring(range.pos, range.end);
            return comment.indexOf("@internal") >= 0;
        }
        function stripInternal(node) {
            if (node) {
                var leadingCommentRanges = ts.getLeadingCommentRanges(currentSourceFile.text, node.pos);
                if (ts.forEach(leadingCommentRanges, hasInternalAnnotation)) {
                    return;
                }
                emitNode(node);
            }
        }
        function createAndSetNewTextWriterWithSymbolWriter() {
            var writer = createTextWriter(newLine);
            writer.trackSymbol = trackSymbol;
            writer.writeKeyword = writer.write;
            writer.writeOperator = writer.write;
            writer.writePunctuation = writer.write;
            writer.writeSpace = writer.write;
            writer.writeStringLiteral = writer.writeLiteral;
            writer.writeParameter = writer.write;
            writer.writeSymbol = writer.write;
            setWriter(writer);
            return writer;
        }
        function setWriter(newWriter) {
            writer = newWriter;
            write = newWriter.write;
            writeTextOfNode = newWriter.writeTextOfNode;
            writeLine = newWriter.writeLine;
            increaseIndent = newWriter.increaseIndent;
            decreaseIndent = newWriter.decreaseIndent;
        }
        function writeAsychronousImportDeclarations(importDeclarations) {
            var oldWriter = writer;
            ts.forEach(importDeclarations, function (aliasToWrite) {
                var aliasEmitInfo = ts.forEach(aliasDeclarationEmitInfo, function (declEmitInfo) { return declEmitInfo.declaration === aliasToWrite ? declEmitInfo : undefined; });
                if (aliasEmitInfo) {
                    createAndSetNewTextWriterWithSymbolWriter();
                    for (var declarationIndent = aliasEmitInfo.indent; declarationIndent; declarationIndent--) {
                        increaseIndent();
                    }
                    writeImportDeclaration(aliasToWrite);
                    aliasEmitInfo.asynchronousOutput = writer.getText();
                }
            });
            setWriter(oldWriter);
        }
        function handleSymbolAccessibilityError(symbolAccesibilityResult) {
            if (symbolAccesibilityResult.accessibility === 0) {
                if (symbolAccesibilityResult && symbolAccesibilityResult.aliasesToMakeVisible) {
                    writeAsychronousImportDeclarations(symbolAccesibilityResult.aliasesToMakeVisible);
                }
            }
            else {
                reportedDeclarationError = true;
                var errorInfo = writer.getSymbolAccessibilityDiagnostic(symbolAccesibilityResult);
                if (errorInfo) {
                    if (errorInfo.typeName) {
                        diagnostics.push(ts.createDiagnosticForNode(symbolAccesibilityResult.errorNode || errorInfo.errorNode, errorInfo.diagnosticMessage, ts.getSourceTextOfNodeFromSourceFile(currentSourceFile, errorInfo.typeName), symbolAccesibilityResult.errorSymbolName, symbolAccesibilityResult.errorModuleName));
                    }
                    else {
                        diagnostics.push(ts.createDiagnosticForNode(symbolAccesibilityResult.errorNode || errorInfo.errorNode, errorInfo.diagnosticMessage, symbolAccesibilityResult.errorSymbolName, symbolAccesibilityResult.errorModuleName));
                    }
                }
            }
        }
        function trackSymbol(symbol, enclosingDeclaration, meaning) {
            handleSymbolAccessibilityError(resolver.isSymbolAccessible(symbol, enclosingDeclaration, meaning));
        }
        function writeTypeOfDeclaration(declaration, type, getSymbolAccessibilityDiagnostic) {
            writer.getSymbolAccessibilityDiagnostic = getSymbolAccessibilityDiagnostic;
            write(": ");
            if (type) {
                emitType(type);
            }
            else {
                resolver.writeTypeOfDeclaration(declaration, enclosingDeclaration, 2, writer);
            }
        }
        function writeReturnTypeAtSignature(signature, getSymbolAccessibilityDiagnostic) {
            writer.getSymbolAccessibilityDiagnostic = getSymbolAccessibilityDiagnostic;
            write(": ");
            if (signature.type) {
                emitType(signature.type);
            }
            else {
                resolver.writeReturnTypeOfSignatureDeclaration(signature, enclosingDeclaration, 2, writer);
            }
        }
        function emitLines(nodes) {
            for (var i = 0, n = nodes.length; i < n; i++) {
                emit(nodes[i]);
            }
        }
        function emitSeparatedList(nodes, separator, eachNodeEmitFn) {
            var currentWriterPos = writer.getTextPos();
            for (var i = 0, n = nodes.length; i < n; i++) {
                if (currentWriterPos !== writer.getTextPos()) {
                    write(separator);
                }
                currentWriterPos = writer.getTextPos();
                eachNodeEmitFn(nodes[i]);
            }
        }
        function emitCommaList(nodes, eachNodeEmitFn) {
            emitSeparatedList(nodes, ", ", eachNodeEmitFn);
        }
        function writeJsDocComments(declaration) {
            if (declaration) {
                var jsDocComments = ts.getJsDocComments(declaration, currentSourceFile);
                emitNewLineBeforeLeadingComments(currentSourceFile, writer, declaration, jsDocComments);
                emitComments(currentSourceFile, writer, jsDocComments, true, newLine, writeCommentRange);
            }
        }
        function emitTypeWithNewGetSymbolAccessibilityDiagnostic(type, getSymbolAccessibilityDiagnostic) {
            writer.getSymbolAccessibilityDiagnostic = getSymbolAccessibilityDiagnostic;
            emitType(type);
        }
        function emitType(type) {
            switch (type.kind) {
                case 110:
                case 119:
                case 117:
                case 111:
                case 98:
                case 8:
                    return writeTextOfNode(currentSourceFile, type);
                case 135:
                    return emitTypeReference(type);
                case 138:
                    return emitTypeQuery(type);
                case 140:
                    return emitArrayType(type);
                case 141:
                    return emitTupleType(type);
                case 142:
                    return emitUnionType(type);
                case 143:
                    return emitParenType(type);
                case 136:
                case 137:
                    return emitSignatureDeclarationWithJsDocComments(type);
                case 139:
                    return emitTypeLiteral(type);
                case 64:
                    return emitEntityName(type);
                case 121:
                    return emitEntityName(type);
                default:
                    ts.Debug.fail("Unknown type annotation: " + type.kind);
            }
            function emitEntityName(entityName) {
                var visibilityResult = resolver.isEntityNameVisible(entityName, entityName.parent.kind === 197 ? entityName.parent : enclosingDeclaration);
                handleSymbolAccessibilityError(visibilityResult);
                writeEntityName(entityName);
                function writeEntityName(entityName) {
                    if (entityName.kind === 64) {
                        writeTextOfNode(currentSourceFile, entityName);
                    }
                    else {
                        var qualifiedName = entityName;
                        writeEntityName(qualifiedName.left);
                        write(".");
                        writeTextOfNode(currentSourceFile, qualifiedName.right);
                    }
                }
            }
            function emitTypeReference(type) {
                emitEntityName(type.typeName);
                if (type.typeArguments) {
                    write("<");
                    emitCommaList(type.typeArguments, emitType);
                    write(">");
                }
            }
            function emitTypeQuery(type) {
                write("typeof ");
                emitEntityName(type.exprName);
            }
            function emitArrayType(type) {
                emitType(type.elementType);
                write("[]");
            }
            function emitTupleType(type) {
                write("[");
                emitCommaList(type.elementTypes, emitType);
                write("]");
            }
            function emitUnionType(type) {
                emitSeparatedList(type.types, " | ", emitType);
            }
            function emitParenType(type) {
                write("(");
                emitType(type.type);
                write(")");
            }
            function emitTypeLiteral(type) {
                write("{");
                if (type.members.length) {
                    writeLine();
                    increaseIndent();
                    emitLines(type.members);
                    decreaseIndent();
                }
                write("}");
            }
        }
        function emitSourceFile(node) {
            currentSourceFile = node;
            enclosingDeclaration = node;
            emitLines(node.statements);
        }
        function emitExportAssignment(node) {
            write("export = ");
            writeTextOfNode(currentSourceFile, node.exportName);
            write(";");
            writeLine();
        }
        function emitModuleElementDeclarationFlags(node) {
            if (node.parent === currentSourceFile) {
                if (node.flags & 1) {
                    write("export ");
                }
                if (node.kind !== 192) {
                    write("declare ");
                }
            }
        }
        function emitClassMemberDeclarationFlags(node) {
            if (node.flags & 32) {
                write("private ");
            }
            else if (node.flags & 64) {
                write("protected ");
            }
            if (node.flags & 128) {
                write("static ");
            }
        }
        function emitImportDeclaration(node) {
            var nodeEmitInfo = {
                declaration: node,
                outputPos: writer.getTextPos(),
                indent: writer.getIndent(),
                hasWritten: resolver.isDeclarationVisible(node)
            };
            aliasDeclarationEmitInfo.push(nodeEmitInfo);
            if (nodeEmitInfo.hasWritten) {
                writeImportDeclaration(node);
            }
        }
        function writeImportDeclaration(node) {
            emitJsDocComments(node);
            if (node.flags & 1) {
                write("export ");
            }
            write("import ");
            writeTextOfNode(currentSourceFile, node.name);
            write(" = ");
            if (ts.isInternalModuleImportDeclaration(node)) {
                emitTypeWithNewGetSymbolAccessibilityDiagnostic(node.moduleReference, getImportEntityNameVisibilityError);
                write(";");
            }
            else {
                write("require(");
                writeTextOfNode(currentSourceFile, ts.getExternalModuleImportDeclarationExpression(node));
                write(");");
            }
            writer.writeLine();
            function getImportEntityNameVisibilityError(symbolAccesibilityResult) {
                return {
                    diagnosticMessage: ts.Diagnostics.Import_declaration_0_is_using_private_name_1,
                    errorNode: node,
                    typeName: node.name
                };
            }
        }
        function emitModuleDeclaration(node) {
            if (resolver.isDeclarationVisible(node)) {
                emitJsDocComments(node);
                emitModuleElementDeclarationFlags(node);
                write("module ");
                writeTextOfNode(currentSourceFile, node.name);
                while (node.body.kind !== 196) {
                    node = node.body;
                    write(".");
                    writeTextOfNode(currentSourceFile, node.name);
                }
                var prevEnclosingDeclaration = enclosingDeclaration;
                enclosingDeclaration = node;
                write(" {");
                writeLine();
                increaseIndent();
                emitLines(node.body.statements);
                decreaseIndent();
                write("}");
                writeLine();
                enclosingDeclaration = prevEnclosingDeclaration;
            }
        }
        function emitTypeAliasDeclaration(node) {
            if (resolver.isDeclarationVisible(node)) {
                emitJsDocComments(node);
                emitModuleElementDeclarationFlags(node);
                write("type ");
                writeTextOfNode(currentSourceFile, node.name);
                write(" = ");
                emitTypeWithNewGetSymbolAccessibilityDiagnostic(node.type, getTypeAliasDeclarationVisibilityError);
                write(";");
                writeLine();
            }
            function getTypeAliasDeclarationVisibilityError(symbolAccesibilityResult) {
                return {
                    diagnosticMessage: ts.Diagnostics.Exported_type_alias_0_has_or_is_using_private_name_1,
                    errorNode: node.type,
                    typeName: node.name
                };
            }
        }
        function emitEnumDeclaration(node) {
            if (resolver.isDeclarationVisible(node)) {
                emitJsDocComments(node);
                emitModuleElementDeclarationFlags(node);
                if (ts.isConst(node)) {
                    write("const ");
                }
                write("enum ");
                writeTextOfNode(currentSourceFile, node.name);
                write(" {");
                writeLine();
                increaseIndent();
                emitLines(node.members);
                decreaseIndent();
                write("}");
                writeLine();
            }
        }
        function emitEnumMemberDeclaration(node) {
            emitJsDocComments(node);
            writeTextOfNode(currentSourceFile, node.name);
            var enumMemberValue = resolver.getConstantValue(node);
            if (enumMemberValue !== undefined) {
                write(" = ");
                write(enumMemberValue.toString());
            }
            write(",");
            writeLine();
        }
        function isPrivateMethodTypeParameter(node) {
            return node.parent.kind === 128 && (node.parent.flags & 32);
        }
        function emitTypeParameters(typeParameters) {
            function emitTypeParameter(node) {
                increaseIndent();
                emitJsDocComments(node);
                decreaseIndent();
                writeTextOfNode(currentSourceFile, node.name);
                if (node.constraint && !isPrivateMethodTypeParameter(node)) {
                    write(" extends ");
                    if (node.parent.kind === 136 || node.parent.kind === 137 || (node.parent.parent && node.parent.parent.kind === 139)) {
                        ts.Debug.assert(node.parent.kind === 128 || node.parent.kind === 127 || node.parent.kind === 136 || node.parent.kind === 137 || node.parent.kind === 132 || node.parent.kind === 133);
                        emitType(node.constraint);
                    }
                    else {
                        emitTypeWithNewGetSymbolAccessibilityDiagnostic(node.constraint, getTypeParameterConstraintVisibilityError);
                    }
                }
                function getTypeParameterConstraintVisibilityError(symbolAccesibilityResult) {
                    var diagnosticMessage;
                    switch (node.parent.kind) {
                        case 191:
                            diagnosticMessage = ts.Diagnostics.Type_parameter_0_of_exported_class_has_or_is_using_private_name_1;
                            break;
                        case 192:
                            diagnosticMessage = ts.Diagnostics.Type_parameter_0_of_exported_interface_has_or_is_using_private_name_1;
                            break;
                        case 133:
                            diagnosticMessage = ts.Diagnostics.Type_parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1;
                            break;
                        case 132:
                            diagnosticMessage = ts.Diagnostics.Type_parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1;
                            break;
                        case 128:
                        case 127:
                            if (node.parent.flags & 128) {
                                diagnosticMessage = ts.Diagnostics.Type_parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1;
                            }
                            else if (node.parent.parent.kind === 191) {
                                diagnosticMessage = ts.Diagnostics.Type_parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1;
                            }
                            else {
                                diagnosticMessage = ts.Diagnostics.Type_parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1;
                            }
                            break;
                        case 190:
                            diagnosticMessage = ts.Diagnostics.Type_parameter_0_of_exported_function_has_or_is_using_private_name_1;
                            break;
                        default:
                            ts.Debug.fail("This is unknown parent for type parameter: " + node.parent.kind);
                    }
                    return {
                        diagnosticMessage: diagnosticMessage,
                        errorNode: node,
                        typeName: node.name
                    };
                }
            }
            if (typeParameters) {
                write("<");
                emitCommaList(typeParameters, emitTypeParameter);
                write(">");
            }
        }
        function emitHeritageClause(typeReferences, isImplementsList) {
            if (typeReferences) {
                write(isImplementsList ? " implements " : " extends ");
                emitCommaList(typeReferences, emitTypeOfTypeReference);
            }
            function emitTypeOfTypeReference(node) {
                emitTypeWithNewGetSymbolAccessibilityDiagnostic(node, getHeritageClauseVisibilityError);
                function getHeritageClauseVisibilityError(symbolAccesibilityResult) {
                    var diagnosticMessage;
                    if (node.parent.parent.kind === 191) {
                        diagnosticMessage = isImplementsList ? ts.Diagnostics.Implements_clause_of_exported_class_0_has_or_is_using_private_name_1 : ts.Diagnostics.Extends_clause_of_exported_class_0_has_or_is_using_private_name_1;
                    }
                    else {
                        diagnosticMessage = ts.Diagnostics.Extends_clause_of_exported_interface_0_has_or_is_using_private_name_1;
                    }
                    return {
                        diagnosticMessage: diagnosticMessage,
                        errorNode: node,
                        typeName: node.parent.parent.name
                    };
                }
            }
        }
        function emitClassDeclaration(node) {
            function emitParameterProperties(constructorDeclaration) {
                if (constructorDeclaration) {
                    ts.forEach(constructorDeclaration.parameters, function (param) {
                        if (param.flags & 112) {
                            emitPropertyDeclaration(param);
                        }
                    });
                }
            }
            if (resolver.isDeclarationVisible(node)) {
                emitJsDocComments(node);
                emitModuleElementDeclarationFlags(node);
                write("class ");
                writeTextOfNode(currentSourceFile, node.name);
                var prevEnclosingDeclaration = enclosingDeclaration;
                enclosingDeclaration = node;
                emitTypeParameters(node.typeParameters);
                var baseTypeNode = ts.getClassBaseTypeNode(node);
                if (baseTypeNode) {
                    emitHeritageClause([baseTypeNode], false);
                }
                emitHeritageClause(ts.getClassImplementedTypeNodes(node), true);
                write(" {");
                writeLine();
                increaseIndent();
                emitParameterProperties(getFirstConstructorWithBody(node));
                emitLines(node.members);
                decreaseIndent();
                write("}");
                writeLine();
                enclosingDeclaration = prevEnclosingDeclaration;
            }
        }
        function emitInterfaceDeclaration(node) {
            if (resolver.isDeclarationVisible(node)) {
                emitJsDocComments(node);
                emitModuleElementDeclarationFlags(node);
                write("interface ");
                writeTextOfNode(currentSourceFile, node.name);
                var prevEnclosingDeclaration = enclosingDeclaration;
                enclosingDeclaration = node;
                emitTypeParameters(node.typeParameters);
                emitHeritageClause(ts.getInterfaceBaseTypeNodes(node), false);
                write(" {");
                writeLine();
                increaseIndent();
                emitLines(node.members);
                decreaseIndent();
                write("}");
                writeLine();
                enclosingDeclaration = prevEnclosingDeclaration;
            }
        }
        function emitPropertyDeclaration(node) {
            if (ts.hasDynamicName(node)) {
                return;
            }
            emitJsDocComments(node);
            emitClassMemberDeclarationFlags(node);
            emitVariableDeclaration(node);
            write(";");
            writeLine();
        }
        function emitVariableDeclaration(node) {
            if (node.kind !== 188 || resolver.isDeclarationVisible(node)) {
                writeTextOfNode(currentSourceFile, node.name);
                if ((node.kind === 126 || node.kind === 125) && ts.hasQuestionToken(node)) {
                    write("?");
                }
                if ((node.kind === 126 || node.kind === 125) && node.parent.kind === 139) {
                    emitTypeOfVariableDeclarationFromTypeLiteral(node);
                }
                else if (!(node.flags & 32)) {
                    writeTypeOfDeclaration(node, node.type, getVariableDeclarationTypeVisibilityError);
                }
            }
            function getVariableDeclarationTypeVisibilityError(symbolAccesibilityResult) {
                var diagnosticMessage;
                if (node.kind === 188) {
                    diagnosticMessage = symbolAccesibilityResult.errorModuleName ? symbolAccesibilityResult.accessibility === 2 ? ts.Diagnostics.Exported_variable_0_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named : ts.Diagnostics.Exported_variable_0_has_or_is_using_name_1_from_private_module_2 : ts.Diagnostics.Exported_variable_0_has_or_is_using_private_name_1;
                }
                else if (node.kind === 126 || node.kind === 125) {
                    if (node.flags & 128) {
                        diagnosticMessage = symbolAccesibilityResult.errorModuleName ? symbolAccesibilityResult.accessibility === 2 ? ts.Diagnostics.Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named : ts.Diagnostics.Public_static_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2 : ts.Diagnostics.Public_static_property_0_of_exported_class_has_or_is_using_private_name_1;
                    }
                    else if (node.parent.kind === 191) {
                        diagnosticMessage = symbolAccesibilityResult.errorModuleName ? symbolAccesibilityResult.accessibility === 2 ? ts.Diagnostics.Public_property_0_of_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named : ts.Diagnostics.Public_property_0_of_exported_class_has_or_is_using_name_1_from_private_module_2 : ts.Diagnostics.Public_property_0_of_exported_class_has_or_is_using_private_name_1;
                    }
                    else {
                        diagnosticMessage = symbolAccesibilityResult.errorModuleName ? ts.Diagnostics.Property_0_of_exported_interface_has_or_is_using_name_1_from_private_module_2 : ts.Diagnostics.Property_0_of_exported_interface_has_or_is_using_private_name_1;
                    }
                }
                return diagnosticMessage !== undefined ? {
                    diagnosticMessage: diagnosticMessage,
                    errorNode: node,
                    typeName: node.name
                } : undefined;
            }
        }
        function emitTypeOfVariableDeclarationFromTypeLiteral(node) {
            if (node.type) {
                write(": ");
                emitType(node.type);
            }
        }
        function emitVariableStatement(node) {
            var hasDeclarationWithEmit = ts.forEach(node.declarationList.declarations, function (varDeclaration) { return resolver.isDeclarationVisible(varDeclaration); });
            if (hasDeclarationWithEmit) {
                emitJsDocComments(node);
                emitModuleElementDeclarationFlags(node);
                if (ts.isLet(node.declarationList)) {
                    write("let ");
                }
                else if (ts.isConst(node.declarationList)) {
                    write("const ");
                }
                else {
                    write("var ");
                }
                emitCommaList(node.declarationList.declarations, emitVariableDeclaration);
                write(";");
                writeLine();
            }
        }
        function emitAccessorDeclaration(node) {
            if (ts.hasDynamicName(node)) {
                return;
            }
            var accessors = getAllAccessorDeclarations(node.parent, node);
            if (node === accessors.firstAccessor) {
                emitJsDocComments(accessors.getAccessor);
                emitJsDocComments(accessors.setAccessor);
                emitClassMemberDeclarationFlags(node);
                writeTextOfNode(currentSourceFile, node.name);
                if (!(node.flags & 32)) {
                    var accessorWithTypeAnnotation = node;
                    var type = getTypeAnnotationFromAccessor(node);
                    if (!type) {
                        var anotherAccessor = node.kind === 130 ? accessors.setAccessor : accessors.getAccessor;
                        type = getTypeAnnotationFromAccessor(anotherAccessor);
                        if (type) {
                            accessorWithTypeAnnotation = anotherAccessor;
                        }
                    }
                    writeTypeOfDeclaration(node, type, getAccessorDeclarationTypeVisibilityError);
                }
                write(";");
                writeLine();
            }
            function getTypeAnnotationFromAccessor(accessor) {
                if (accessor) {
                    return accessor.kind === 130 ? accessor.type : accessor.parameters.length > 0 ? accessor.parameters[0].type : undefined;
                }
            }
            function getAccessorDeclarationTypeVisibilityError(symbolAccesibilityResult) {
                var diagnosticMessage;
                if (accessorWithTypeAnnotation.kind === 131) {
                    if (accessorWithTypeAnnotation.parent.flags & 128) {
                        diagnosticMessage = symbolAccesibilityResult.errorModuleName ? ts.Diagnostics.Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_name_1_from_private_module_2 : ts.Diagnostics.Parameter_0_of_public_static_property_setter_from_exported_class_has_or_is_using_private_name_1;
                    }
                    else {
                        diagnosticMessage = symbolAccesibilityResult.errorModuleName ? ts.Diagnostics.Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_name_1_from_private_module_2 : ts.Diagnostics.Parameter_0_of_public_property_setter_from_exported_class_has_or_is_using_private_name_1;
                    }
                    return {
                        diagnosticMessage: diagnosticMessage,
                        errorNode: accessorWithTypeAnnotation.parameters[0],
                        typeName: accessorWithTypeAnnotation.name
                    };
                }
                else {
                    if (accessorWithTypeAnnotation.flags & 128) {
                        diagnosticMessage = symbolAccesibilityResult.errorModuleName ? symbolAccesibilityResult.accessibility === 2 ? ts.Diagnostics.Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named : ts.Diagnostics.Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_name_0_from_private_module_1 : ts.Diagnostics.Return_type_of_public_static_property_getter_from_exported_class_has_or_is_using_private_name_0;
                    }
                    else {
                        diagnosticMessage = symbolAccesibilityResult.errorModuleName ? symbolAccesibilityResult.accessibility === 2 ? ts.Diagnostics.Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named : ts.Diagnostics.Return_type_of_public_property_getter_from_exported_class_has_or_is_using_name_0_from_private_module_1 : ts.Diagnostics.Return_type_of_public_property_getter_from_exported_class_has_or_is_using_private_name_0;
                    }
                    return {
                        diagnosticMessage: diagnosticMessage,
                        errorNode: accessorWithTypeAnnotation.name,
                        typeName: undefined
                    };
                }
            }
        }
        function emitFunctionDeclaration(node) {
            if (ts.hasDynamicName(node)) {
                return;
            }
            if ((node.kind !== 190 || resolver.isDeclarationVisible(node)) && !resolver.isImplementationOfOverload(node)) {
                emitJsDocComments(node);
                if (node.kind === 190) {
                    emitModuleElementDeclarationFlags(node);
                }
                else if (node.kind === 128) {
                    emitClassMemberDeclarationFlags(node);
                }
                if (node.kind === 190) {
                    write("function ");
                    writeTextOfNode(currentSourceFile, node.name);
                }
                else if (node.kind === 129) {
                    write("constructor");
                }
                else {
                    writeTextOfNode(currentSourceFile, node.name);
                    if (ts.hasQuestionToken(node)) {
                        write("?");
                    }
                }
                emitSignatureDeclaration(node);
            }
        }
        function emitSignatureDeclarationWithJsDocComments(node) {
            emitJsDocComments(node);
            emitSignatureDeclaration(node);
        }
        function emitSignatureDeclaration(node) {
            if (node.kind === 133 || node.kind === 137) {
                write("new ");
            }
            emitTypeParameters(node.typeParameters);
            if (node.kind === 134) {
                write("[");
            }
            else {
                write("(");
            }
            var prevEnclosingDeclaration = enclosingDeclaration;
            enclosingDeclaration = node;
            emitCommaList(node.parameters, emitParameterDeclaration);
            if (node.kind === 134) {
                write("]");
            }
            else {
                write(")");
            }
            var isFunctionTypeOrConstructorType = node.kind === 136 || node.kind === 137;
            if (isFunctionTypeOrConstructorType || node.parent.kind === 139) {
                if (node.type) {
                    write(isFunctionTypeOrConstructorType ? " => " : ": ");
                    emitType(node.type);
                }
            }
            else if (node.kind !== 129 && !(node.flags & 32)) {
                writeReturnTypeAtSignature(node, getReturnTypeVisibilityError);
            }
            enclosingDeclaration = prevEnclosingDeclaration;
            if (!isFunctionTypeOrConstructorType) {
                write(";");
                writeLine();
            }
            function getReturnTypeVisibilityError(symbolAccesibilityResult) {
                var diagnosticMessage;
                switch (node.kind) {
                    case 133:
                        diagnosticMessage = symbolAccesibilityResult.errorModuleName ? ts.Diagnostics.Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1 : ts.Diagnostics.Return_type_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_0;
                        break;
                    case 132:
                        diagnosticMessage = symbolAccesibilityResult.errorModuleName ? ts.Diagnostics.Return_type_of_call_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1 : ts.Diagnostics.Return_type_of_call_signature_from_exported_interface_has_or_is_using_private_name_0;
                        break;
                    case 134:
                        diagnosticMessage = symbolAccesibilityResult.errorModuleName ? ts.Diagnostics.Return_type_of_index_signature_from_exported_interface_has_or_is_using_name_0_from_private_module_1 : ts.Diagnostics.Return_type_of_index_signature_from_exported_interface_has_or_is_using_private_name_0;
                        break;
                    case 128:
                    case 127:
                        if (node.flags & 128) {
                            diagnosticMessage = symbolAccesibilityResult.errorModuleName ? symbolAccesibilityResult.accessibility === 2 ? ts.Diagnostics.Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named : ts.Diagnostics.Return_type_of_public_static_method_from_exported_class_has_or_is_using_name_0_from_private_module_1 : ts.Diagnostics.Return_type_of_public_static_method_from_exported_class_has_or_is_using_private_name_0;
                        }
                        else if (node.parent.kind === 191) {
                            diagnosticMessage = symbolAccesibilityResult.errorModuleName ? symbolAccesibilityResult.accessibility === 2 ? ts.Diagnostics.Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named : ts.Diagnostics.Return_type_of_public_method_from_exported_class_has_or_is_using_name_0_from_private_module_1 : ts.Diagnostics.Return_type_of_public_method_from_exported_class_has_or_is_using_private_name_0;
                        }
                        else {
                            diagnosticMessage = symbolAccesibilityResult.errorModuleName ? ts.Diagnostics.Return_type_of_method_from_exported_interface_has_or_is_using_name_0_from_private_module_1 : ts.Diagnostics.Return_type_of_method_from_exported_interface_has_or_is_using_private_name_0;
                        }
                        break;
                    case 190:
                        diagnosticMessage = symbolAccesibilityResult.errorModuleName ? symbolAccesibilityResult.accessibility === 2 ? ts.Diagnostics.Return_type_of_exported_function_has_or_is_using_name_0_from_external_module_1_but_cannot_be_named : ts.Diagnostics.Return_type_of_exported_function_has_or_is_using_name_0_from_private_module_1 : ts.Diagnostics.Return_type_of_exported_function_has_or_is_using_private_name_0;
                        break;
                    default:
                        ts.Debug.fail("This is unknown kind for signature: " + node.kind);
                }
                return {
                    diagnosticMessage: diagnosticMessage,
                    errorNode: node.name || node
                };
            }
        }
        function emitParameterDeclaration(node) {
            increaseIndent();
            emitJsDocComments(node);
            if (node.dotDotDotToken) {
                write("...");
            }
            if (ts.isBindingPattern(node.name)) {
                write("_" + ts.indexOf(node.parent.parameters, node));
            }
            else {
                writeTextOfNode(currentSourceFile, node.name);
            }
            if (node.initializer || ts.hasQuestionToken(node)) {
                write("?");
            }
            decreaseIndent();
            if (node.parent.kind === 136 || node.parent.kind === 137 || node.parent.parent.kind === 139) {
                emitTypeOfVariableDeclarationFromTypeLiteral(node);
            }
            else if (!(node.parent.flags & 32)) {
                writeTypeOfDeclaration(node, node.type, getParameterDeclarationTypeVisibilityError);
            }
            function getParameterDeclarationTypeVisibilityError(symbolAccesibilityResult) {
                var diagnosticMessage;
                switch (node.parent.kind) {
                    case 129:
                        diagnosticMessage = symbolAccesibilityResult.errorModuleName ? symbolAccesibilityResult.accessibility === 2 ? ts.Diagnostics.Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named : ts.Diagnostics.Parameter_0_of_constructor_from_exported_class_has_or_is_using_name_1_from_private_module_2 : ts.Diagnostics.Parameter_0_of_constructor_from_exported_class_has_or_is_using_private_name_1;
                        break;
                    case 133:
                        diagnosticMessage = symbolAccesibilityResult.errorModuleName ? ts.Diagnostics.Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2 : ts.Diagnostics.Parameter_0_of_constructor_signature_from_exported_interface_has_or_is_using_private_name_1;
                        break;
                    case 132:
                        diagnosticMessage = symbolAccesibilityResult.errorModuleName ? ts.Diagnostics.Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_name_1_from_private_module_2 : ts.Diagnostics.Parameter_0_of_call_signature_from_exported_interface_has_or_is_using_private_name_1;
                        break;
                    case 128:
                    case 127:
                        if (node.parent.flags & 128) {
                            diagnosticMessage = symbolAccesibilityResult.errorModuleName ? symbolAccesibilityResult.accessibility === 2 ? ts.Diagnostics.Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named : ts.Diagnostics.Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_name_1_from_private_module_2 : ts.Diagnostics.Parameter_0_of_public_static_method_from_exported_class_has_or_is_using_private_name_1;
                        }
                        else if (node.parent.parent.kind === 191) {
                            diagnosticMessage = symbolAccesibilityResult.errorModuleName ? symbolAccesibilityResult.accessibility === 2 ? ts.Diagnostics.Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named : ts.Diagnostics.Parameter_0_of_public_method_from_exported_class_has_or_is_using_name_1_from_private_module_2 : ts.Diagnostics.Parameter_0_of_public_method_from_exported_class_has_or_is_using_private_name_1;
                        }
                        else {
                            diagnosticMessage = symbolAccesibilityResult.errorModuleName ? ts.Diagnostics.Parameter_0_of_method_from_exported_interface_has_or_is_using_name_1_from_private_module_2 : ts.Diagnostics.Parameter_0_of_method_from_exported_interface_has_or_is_using_private_name_1;
                        }
                        break;
                    case 190:
                        diagnosticMessage = symbolAccesibilityResult.errorModuleName ? symbolAccesibilityResult.accessibility === 2 ? ts.Diagnostics.Parameter_0_of_exported_function_has_or_is_using_name_1_from_external_module_2_but_cannot_be_named : ts.Diagnostics.Parameter_0_of_exported_function_has_or_is_using_name_1_from_private_module_2 : ts.Diagnostics.Parameter_0_of_exported_function_has_or_is_using_private_name_1;
                        break;
                    default:
                        ts.Debug.fail("This is unknown parent for parameter: " + node.parent.kind);
                }
                return {
                    diagnosticMessage: diagnosticMessage,
                    errorNode: node,
                    typeName: node.name
                };
            }
        }
        function emitNode(node) {
            switch (node.kind) {
                case 129:
                case 190:
                case 128:
                case 127:
                    return emitFunctionDeclaration(node);
                case 133:
                case 132:
                case 134:
                    return emitSignatureDeclarationWithJsDocComments(node);
                case 130:
                case 131:
                    return emitAccessorDeclaration(node);
                case 171:
                    return emitVariableStatement(node);
                case 126:
                case 125:
                    return emitPropertyDeclaration(node);
                case 192:
                    return emitInterfaceDeclaration(node);
                case 191:
                    return emitClassDeclaration(node);
                case 193:
                    return emitTypeAliasDeclaration(node);
                case 206:
                    return emitEnumMemberDeclaration(node);
                case 194:
                    return emitEnumDeclaration(node);
                case 195:
                    return emitModuleDeclaration(node);
                case 197:
                    return emitImportDeclaration(node);
                case 198:
                    return emitExportAssignment(node);
                case 207:
                    return emitSourceFile(node);
            }
        }
        function writeReferencePath(referencedFile) {
            var declFileName = referencedFile.flags & 1024 ? referencedFile.fileName : shouldEmitToOwnFile(referencedFile, compilerOptions) ? getOwnEmitOutputFilePath(referencedFile, host, ".d.ts") : ts.removeFileExtension(compilerOptions.out) + ".d.ts";
            declFileName = ts.getRelativePathToDirectoryOrUrl(ts.getDirectoryPath(ts.normalizeSlashes(jsFilePath)), declFileName, host.getCurrentDirectory(), host.getCanonicalFileName, false);
            referencePathsOutput += "/// <reference path=\"" + declFileName + "\" />" + newLine;
        }
    }
    function getDeclarationDiagnostics(host, resolver, targetSourceFile) {
        var diagnostics = [];
        var jsFilePath = getOwnEmitOutputFilePath(targetSourceFile, host, ".js");
        emitDeclarations(host, resolver, diagnostics, jsFilePath, targetSourceFile);
        return diagnostics;
    }
    ts.getDeclarationDiagnostics = getDeclarationDiagnostics;
    function emitFiles(resolver, host, targetSourceFile) {
        var compilerOptions = host.getCompilerOptions();
        var languageVersion = compilerOptions.target || 0;
        var sourceMapDataList = compilerOptions.sourceMap ? [] : undefined;
        var diagnostics = [];
        var newLine = host.getNewLine();
        if (targetSourceFile === undefined) {
            ts.forEach(host.getSourceFiles(), function (sourceFile) {
                if (shouldEmitToOwnFile(sourceFile, compilerOptions)) {
                    var jsFilePath = getOwnEmitOutputFilePath(sourceFile, host, ".js");
                    emitFile(jsFilePath, sourceFile);
                }
            });
            if (compilerOptions.out) {
                emitFile(compilerOptions.out);
            }
        }
        else {
            if (shouldEmitToOwnFile(targetSourceFile, compilerOptions)) {
                var jsFilePath = getOwnEmitOutputFilePath(targetSourceFile, host, ".js");
                emitFile(jsFilePath, targetSourceFile);
            }
            else if (!ts.isDeclarationFile(targetSourceFile) && compilerOptions.out) {
                emitFile(compilerOptions.out);
            }
        }
        diagnostics = ts.sortAndDeduplicateDiagnostics(diagnostics);
        return {
            emitSkipped: false,
            diagnostics: diagnostics,
            sourceMaps: sourceMapDataList
        };
        function emitJavaScript(jsFilePath, root) {
            var writer = createTextWriter(newLine);
            var write = writer.write;
            var writeTextOfNode = writer.writeTextOfNode;
            var writeLine = writer.writeLine;
            var increaseIndent = writer.increaseIndent;
            var decreaseIndent = writer.decreaseIndent;
            var currentSourceFile;
            var extendsEmitted = false;
            var tempCount = 0;
            var tempVariables;
            var tempParameters;
            var writeEmittedFiles = writeJavaScriptFile;
            var emitLeadingComments = compilerOptions.removeComments ? function (node) {
            } : emitLeadingDeclarationComments;
            var emitTrailingComments = compilerOptions.removeComments ? function (node) {
            } : emitTrailingDeclarationComments;
            var emitLeadingCommentsOfPosition = compilerOptions.removeComments ? function (pos) {
            } : emitLeadingCommentsOfLocalPosition;
            var detachedCommentsInfo;
            var emitDetachedComments = compilerOptions.removeComments ? function (node) {
            } : emitDetachedCommentsAtPosition;
            var emitPinnedOrTripleSlashComments = compilerOptions.removeComments ? function (node) {
            } : emitPinnedOrTripleSlashCommentsOfNode;
            var writeComment = writeCommentRange;
            var emit = emitNode;
            var emitStart = function (node) {
            };
            var emitEnd = function (node) {
            };
            var emitToken = emitTokenText;
            var scopeEmitStart = function (scopeDeclaration, scopeName) {
            };
            var scopeEmitEnd = function () {
            };
            var sourceMapData;
            if (compilerOptions.sourceMap) {
                initializeEmitterWithSourceMaps();
            }
            if (root) {
                emit(root);
            }
            else {
                ts.forEach(host.getSourceFiles(), function (sourceFile) {
                    if (!isExternalModuleOrDeclarationFile(sourceFile)) {
                        emit(sourceFile);
                    }
                });
            }
            writeLine();
            writeEmittedFiles(writer.getText(), compilerOptions.emitBOM);
            return;
            function initializeEmitterWithSourceMaps() {
                var sourceMapDir;
                var sourceMapSourceIndex = -1;
                var sourceMapNameIndexMap = {};
                var sourceMapNameIndices = [];
                function getSourceMapNameIndex() {
                    return sourceMapNameIndices.length ? sourceMapNameIndices[sourceMapNameIndices.length - 1] : -1;
                }
                var lastRecordedSourceMapSpan;
                var lastEncodedSourceMapSpan = {
                    emittedLine: 1,
                    emittedColumn: 1,
                    sourceLine: 1,
                    sourceColumn: 1,
                    sourceIndex: 0
                };
                var lastEncodedNameIndex = 0;
                function encodeLastRecordedSourceMapSpan() {
                    if (!lastRecordedSourceMapSpan || lastRecordedSourceMapSpan === lastEncodedSourceMapSpan) {
                        return;
                    }
                    var prevEncodedEmittedColumn = lastEncodedSourceMapSpan.emittedColumn;
                    if (lastEncodedSourceMapSpan.emittedLine == lastRecordedSourceMapSpan.emittedLine) {
                        if (sourceMapData.sourceMapMappings) {
                            sourceMapData.sourceMapMappings += ",";
                        }
                    }
                    else {
                        for (var encodedLine = lastEncodedSourceMapSpan.emittedLine; encodedLine < lastRecordedSourceMapSpan.emittedLine; encodedLine++) {
                            sourceMapData.sourceMapMappings += ";";
                        }
                        prevEncodedEmittedColumn = 1;
                    }
                    sourceMapData.sourceMapMappings += base64VLQFormatEncode(lastRecordedSourceMapSpan.emittedColumn - prevEncodedEmittedColumn);
                    sourceMapData.sourceMapMappings += base64VLQFormatEncode(lastRecordedSourceMapSpan.sourceIndex - lastEncodedSourceMapSpan.sourceIndex);
                    sourceMapData.sourceMapMappings += base64VLQFormatEncode(lastRecordedSourceMapSpan.sourceLine - lastEncodedSourceMapSpan.sourceLine);
                    sourceMapData.sourceMapMappings += base64VLQFormatEncode(lastRecordedSourceMapSpan.sourceColumn - lastEncodedSourceMapSpan.sourceColumn);
                    if (lastRecordedSourceMapSpan.nameIndex >= 0) {
                        sourceMapData.sourceMapMappings += base64VLQFormatEncode(lastRecordedSourceMapSpan.nameIndex - lastEncodedNameIndex);
                        lastEncodedNameIndex = lastRecordedSourceMapSpan.nameIndex;
                    }
                    lastEncodedSourceMapSpan = lastRecordedSourceMapSpan;
                    sourceMapData.sourceMapDecodedMappings.push(lastEncodedSourceMapSpan);
                    function base64VLQFormatEncode(inValue) {
                        function base64FormatEncode(inValue) {
                            if (inValue < 64) {
                                return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.charAt(inValue);
                            }
                            throw TypeError(inValue + ": not a 64 based value");
                        }
                        if (inValue < 0) {
                            inValue = ((-inValue) << 1) + 1;
                        }
                        else {
                            inValue = inValue << 1;
                        }
                        var encodedStr = "";
                        do {
                            var currentDigit = inValue & 31;
                            inValue = inValue >> 5;
                            if (inValue > 0) {
                                currentDigit = currentDigit | 32;
                            }
                            encodedStr = encodedStr + base64FormatEncode(currentDigit);
                        } while (inValue > 0);
                        return encodedStr;
                    }
                }
                function recordSourceMapSpan(pos) {
                    var sourceLinePos = ts.getLineAndCharacterOfPosition(currentSourceFile, pos);
                    var emittedLine = writer.getLine();
                    var emittedColumn = writer.getColumn();
                    if (!lastRecordedSourceMapSpan || lastRecordedSourceMapSpan.emittedLine != emittedLine || lastRecordedSourceMapSpan.emittedColumn != emittedColumn || (lastRecordedSourceMapSpan.sourceIndex === sourceMapSourceIndex && (lastRecordedSourceMapSpan.sourceLine > sourceLinePos.line || (lastRecordedSourceMapSpan.sourceLine === sourceLinePos.line && lastRecordedSourceMapSpan.sourceColumn > sourceLinePos.character)))) {
                        encodeLastRecordedSourceMapSpan();
                        lastRecordedSourceMapSpan = {
                            emittedLine: emittedLine,
                            emittedColumn: emittedColumn,
                            sourceLine: sourceLinePos.line,
                            sourceColumn: sourceLinePos.character,
                            nameIndex: getSourceMapNameIndex(),
                            sourceIndex: sourceMapSourceIndex
                        };
                    }
                    else {
                        lastRecordedSourceMapSpan.sourceLine = sourceLinePos.line;
                        lastRecordedSourceMapSpan.sourceColumn = sourceLinePos.character;
                        lastRecordedSourceMapSpan.sourceIndex = sourceMapSourceIndex;
                    }
                }
                function recordEmitNodeStartSpan(node) {
                    recordSourceMapSpan(ts.skipTrivia(currentSourceFile.text, node.pos));
                }
                function recordEmitNodeEndSpan(node) {
                    recordSourceMapSpan(node.end);
                }
                function writeTextWithSpanRecord(tokenKind, startPos, emitFn) {
                    var tokenStartPos = ts.skipTrivia(currentSourceFile.text, startPos);
                    recordSourceMapSpan(tokenStartPos);
                    var tokenEndPos = emitTokenText(tokenKind, tokenStartPos, emitFn);
                    recordSourceMapSpan(tokenEndPos);
                    return tokenEndPos;
                }
                function recordNewSourceFileStart(node) {
                    var sourcesDirectoryPath = compilerOptions.sourceRoot ? host.getCommonSourceDirectory() : sourceMapDir;
                    sourceMapData.sourceMapSources.push(ts.getRelativePathToDirectoryOrUrl(sourcesDirectoryPath, node.fileName, host.getCurrentDirectory(), host.getCanonicalFileName, true));
                    sourceMapSourceIndex = sourceMapData.sourceMapSources.length - 1;
                    sourceMapData.inputSourceFileNames.push(node.fileName);
                }
                function recordScopeNameOfNode(node, scopeName) {
                    function recordScopeNameIndex(scopeNameIndex) {
                        sourceMapNameIndices.push(scopeNameIndex);
                    }
                    function recordScopeNameStart(scopeName) {
                        var scopeNameIndex = -1;
                        if (scopeName) {
                            var parentIndex = getSourceMapNameIndex();
                            if (parentIndex !== -1) {
                                var name = node.name;
                                if (!name || name.kind !== 122) {
                                    scopeName = "." + scopeName;
                                }
                                scopeName = sourceMapData.sourceMapNames[parentIndex] + scopeName;
                            }
                            scopeNameIndex = ts.getProperty(sourceMapNameIndexMap, scopeName);
                            if (scopeNameIndex === undefined) {
                                scopeNameIndex = sourceMapData.sourceMapNames.length;
                                sourceMapData.sourceMapNames.push(scopeName);
                                sourceMapNameIndexMap[scopeName] = scopeNameIndex;
                            }
                        }
                        recordScopeNameIndex(scopeNameIndex);
                    }
                    if (scopeName) {
                        recordScopeNameStart(scopeName);
                    }
                    else if (node.kind === 190 || node.kind === 156 || node.kind === 128 || node.kind === 127 || node.kind === 130 || node.kind === 131 || node.kind === 195 || node.kind === 191 || node.kind === 194) {
                        if (node.name) {
                            var name = node.name;
                            scopeName = name.kind === 122 ? ts.getTextOfNode(name) : node.name.text;
                        }
                        recordScopeNameStart(scopeName);
                    }
                    else {
                        recordScopeNameIndex(getSourceMapNameIndex());
                    }
                }
                function recordScopeNameEnd() {
                    sourceMapNameIndices.pop();
                }
                ;
                function writeCommentRangeWithMap(curentSourceFile, writer, comment, newLine) {
                    recordSourceMapSpan(comment.pos);
                    writeCommentRange(currentSourceFile, writer, comment, newLine);
                    recordSourceMapSpan(comment.end);
                }
                function serializeSourceMapContents(version, file, sourceRoot, sources, names, mappings) {
                    if (typeof JSON !== "undefined") {
                        return JSON.stringify({
                            version: version,
                            file: file,
                            sourceRoot: sourceRoot,
                            sources: sources,
                            names: names,
                            mappings: mappings
                        });
                    }
                    return "{\"version\":" + version + ",\"file\":\"" + ts.escapeString(file) + "\",\"sourceRoot\":\"" + ts.escapeString(sourceRoot) + "\",\"sources\":[" + serializeStringArray(sources) + "],\"names\":[" + serializeStringArray(names) + "],\"mappings\":\"" + ts.escapeString(mappings) + "\"}";
                    function serializeStringArray(list) {
                        var output = "";
                        for (var i = 0, n = list.length; i < n; i++) {
                            if (i) {
                                output += ",";
                            }
                            output += "\"" + ts.escapeString(list[i]) + "\"";
                        }
                        return output;
                    }
                }
                function writeJavaScriptAndSourceMapFile(emitOutput, writeByteOrderMark) {
                    encodeLastRecordedSourceMapSpan();
                    writeFile(host, diagnostics, sourceMapData.sourceMapFilePath, serializeSourceMapContents(3, sourceMapData.sourceMapFile, sourceMapData.sourceMapSourceRoot, sourceMapData.sourceMapSources, sourceMapData.sourceMapNames, sourceMapData.sourceMapMappings), false);
                    sourceMapDataList.push(sourceMapData);
                    writeJavaScriptFile(emitOutput + "//# sourceMappingURL=" + sourceMapData.jsSourceMappingURL, writeByteOrderMark);
                }
                var sourceMapJsFile = ts.getBaseFileName(ts.normalizeSlashes(jsFilePath));
                sourceMapData = {
                    sourceMapFilePath: jsFilePath + ".map",
                    jsSourceMappingURL: sourceMapJsFile + ".map",
                    sourceMapFile: sourceMapJsFile,
                    sourceMapSourceRoot: compilerOptions.sourceRoot || "",
                    sourceMapSources: [],
                    inputSourceFileNames: [],
                    sourceMapNames: [],
                    sourceMapMappings: "",
                    sourceMapDecodedMappings: []
                };
                sourceMapData.sourceMapSourceRoot = ts.normalizeSlashes(sourceMapData.sourceMapSourceRoot);
                if (sourceMapData.sourceMapSourceRoot.length && sourceMapData.sourceMapSourceRoot.charCodeAt(sourceMapData.sourceMapSourceRoot.length - 1) !== 47) {
                    sourceMapData.sourceMapSourceRoot += ts.directorySeparator;
                }
                if (compilerOptions.mapRoot) {
                    sourceMapDir = ts.normalizeSlashes(compilerOptions.mapRoot);
                    if (root) {
                        sourceMapDir = ts.getDirectoryPath(getSourceFilePathInNewDir(root, host, sourceMapDir));
                    }
                    if (!ts.isRootedDiskPath(sourceMapDir) && !ts.isUrl(sourceMapDir)) {
                        sourceMapDir = ts.combinePaths(host.getCommonSourceDirectory(), sourceMapDir);
                        sourceMapData.jsSourceMappingURL = ts.getRelativePathToDirectoryOrUrl(ts.getDirectoryPath(ts.normalizePath(jsFilePath)), ts.combinePaths(sourceMapDir, sourceMapData.jsSourceMappingURL), host.getCurrentDirectory(), host.getCanonicalFileName, true);
                    }
                    else {
                        sourceMapData.jsSourceMappingURL = ts.combinePaths(sourceMapDir, sourceMapData.jsSourceMappingURL);
                    }
                }
                else {
                    sourceMapDir = ts.getDirectoryPath(ts.normalizePath(jsFilePath));
                }
                function emitNodeWithMap(node) {
                    if (node) {
                        if (node.kind != 207) {
                            recordEmitNodeStartSpan(node);
                            emitNode(node);
                            recordEmitNodeEndSpan(node);
                        }
                        else {
                            recordNewSourceFileStart(node);
                            emitNode(node);
                        }
                    }
                }
                writeEmittedFiles = writeJavaScriptAndSourceMapFile;
                emit = emitNodeWithMap;
                emitStart = recordEmitNodeStartSpan;
                emitEnd = recordEmitNodeEndSpan;
                emitToken = writeTextWithSpanRecord;
                scopeEmitStart = recordScopeNameOfNode;
                scopeEmitEnd = recordScopeNameEnd;
                writeComment = writeCommentRangeWithMap;
            }
            function writeJavaScriptFile(emitOutput, writeByteOrderMark) {
                writeFile(host, diagnostics, jsFilePath, emitOutput, writeByteOrderMark);
            }
            function createTempVariable(location, forLoopVariable) {
                var name = forLoopVariable ? "_i" : undefined;
                while (true) {
                    if (name && resolver.isUnknownIdentifier(location, name)) {
                        break;
                    }
                    name = "_" + (tempCount < 25 ? String.fromCharCode(tempCount + (tempCount < 8 ? 0 : 1) + 97) : tempCount - 25);
                    tempCount++;
                }
                var result = ts.createNode(64);
                result.text = name;
                return result;
            }
            function recordTempDeclaration(name) {
                if (!tempVariables) {
                    tempVariables = [];
                }
                tempVariables.push(name);
            }
            function emitTempDeclarations(newLine) {
                if (tempVariables) {
                    if (newLine) {
                        writeLine();
                    }
                    else {
                        write(" ");
                    }
                    write("var ");
                    emitCommaList(tempVariables);
                    write(";");
                }
            }
            function emitTokenText(tokenKind, startPos, emitFn) {
                var tokenString = ts.tokenToString(tokenKind);
                if (emitFn) {
                    emitFn();
                }
                else {
                    write(tokenString);
                }
                return startPos + tokenString.length;
            }
            function emitOptional(prefix, node) {
                if (node) {
                    write(prefix);
                    emit(node);
                }
            }
            function emitParenthesized(node, parenthesized) {
                if (parenthesized) {
                    write("(");
                }
                emit(node);
                if (parenthesized) {
                    write(")");
                }
            }
            function emitTrailingCommaIfPresent(nodeList) {
                if (nodeList.hasTrailingComma) {
                    write(",");
                }
            }
            function emitList(nodes, start, count, multiLine, trailingComma) {
                if (multiLine) {
                    increaseIndent();
                }
                for (var i = 0; i < count; i++) {
                    if (multiLine) {
                        if (i) {
                            write(",");
                        }
                        writeLine();
                    }
                    else {
                        if (i) {
                            write(", ");
                        }
                    }
                    emit(nodes[start + i]);
                }
                if (trailingComma) {
                    write(",");
                }
                if (multiLine) {
                    decreaseIndent();
                    writeLine();
                }
            }
            function emitCommaList(nodes) {
                if (nodes) {
                    emitList(nodes, 0, nodes.length, false, false);
                }
            }
            function emitMultiLineList(nodes) {
                if (nodes) {
                    emitList(nodes, 0, nodes.length, true, false);
                }
            }
            function emitLines(nodes) {
                emitLinesStartingAt(nodes, 0);
            }
            function emitLinesStartingAt(nodes, startIndex) {
                for (var i = startIndex; i < nodes.length; i++) {
                    writeLine();
                    emit(nodes[i]);
                }
            }
            function isBinaryOrOctalIntegerLiteral(text) {
                if (text.length <= 0) {
                    return false;
                }
                if (text.charCodeAt(1) === 66 || text.charCodeAt(1) === 98 || text.charCodeAt(1) === 79 || text.charCodeAt(1) === 111) {
                    return true;
                }
                return false;
            }
            function emitLiteral(node) {
                var text = languageVersion < 2 && ts.isTemplateLiteralKind(node.kind) ? getTemplateLiteralAsStringLiteral(node) : node.parent ? ts.getSourceTextOfNodeFromSourceFile(currentSourceFile, node) : node.text;
                if (compilerOptions.sourceMap && (node.kind === 8 || ts.isTemplateLiteralKind(node.kind))) {
                    writer.writeLiteral(text);
                }
                else if (languageVersion < 2 && node.kind === 7 && isBinaryOrOctalIntegerLiteral(text)) {
                    write(node.text);
                }
                else {
                    write(text);
                }
            }
            function getTemplateLiteralAsStringLiteral(node) {
                return '"' + ts.escapeString(node.text) + '"';
            }
            function emitTemplateExpression(node) {
                if (languageVersion >= 2) {
                    ts.forEachChild(node, emit);
                    return;
                }
                var emitOuterParens = ts.isExpression(node.parent) && templateNeedsParens(node, node.parent);
                if (emitOuterParens) {
                    write("(");
                }
                var headEmitted = false;
                if (shouldEmitTemplateHead()) {
                    emitLiteral(node.head);
                    headEmitted = true;
                }
                for (var i = 0; i < node.templateSpans.length; i++) {
                    var templateSpan = node.templateSpans[i];
                    var needsParens = templateSpan.expression.kind !== 155 && comparePrecedenceToBinaryPlus(templateSpan.expression) !== 1;
                    if (i > 0 || headEmitted) {
                        write(" + ");
                    }
                    emitParenthesized(templateSpan.expression, needsParens);
                    if (templateSpan.literal.text.length !== 0) {
                        write(" + ");
                        emitLiteral(templateSpan.literal);
                    }
                }
                if (emitOuterParens) {
                    write(")");
                }
                function shouldEmitTemplateHead() {
                    ts.Debug.assert(node.templateSpans.length !== 0);
                    return node.head.text.length !== 0 || node.templateSpans[0].literal.text.length === 0;
                }
                function templateNeedsParens(template, parent) {
                    switch (parent.kind) {
                        case 151:
                        case 152:
                            return parent.expression === template;
                        case 153:
                        case 155:
                            return false;
                        default:
                            return comparePrecedenceToBinaryPlus(parent) !== -1;
                    }
                }
                function comparePrecedenceToBinaryPlus(expression) {
                    switch (expression.kind) {
                        case 163:
                            switch (expression.operator) {
                                case 35:
                                case 36:
                                case 37:
                                    return 1;
                                case 33:
                                case 34:
                                    return 0;
                                default:
                                    return -1;
                            }
                        case 164:
                            return -1;
                        default:
                            return 1;
                    }
                }
            }
            function emitTemplateSpan(span) {
                emit(span.expression);
                emit(span.literal);
            }
            function emitExpressionForPropertyName(node) {
                if (node.kind === 8) {
                    emitLiteral(node);
                }
                else if (node.kind === 122) {
                    emit(node.expression);
                }
                else {
                    write("\"");
                    if (node.kind === 7) {
                        write(node.text);
                    }
                    else {
                        writeTextOfNode(currentSourceFile, node);
                    }
                    write("\"");
                }
            }
            function isNotExpressionIdentifier(node) {
                var parent = node.parent;
                switch (parent.kind) {
                    case 124:
                    case 188:
                    case 146:
                    case 126:
                    case 125:
                    case 204:
                    case 205:
                    case 206:
                    case 128:
                    case 127:
                    case 190:
                    case 130:
                    case 131:
                    case 156:
                    case 191:
                    case 192:
                    case 194:
                    case 195:
                    case 197:
                        return parent.name === node;
                    case 180:
                    case 179:
                    case 198:
                        return false;
                    case 184:
                        return node.parent.label === node;
                    case 203:
                        return node.parent.name === node;
                }
            }
            function emitExpressionIdentifier(node) {
                var prefix = resolver.getExpressionNamePrefix(node);
                if (prefix) {
                    write(prefix);
                    write(".");
                }
                writeTextOfNode(currentSourceFile, node);
            }
            function emitIdentifier(node) {
                if (!node.parent) {
                    write(node.text);
                }
                else if (!isNotExpressionIdentifier(node)) {
                    emitExpressionIdentifier(node);
                }
                else {
                    writeTextOfNode(currentSourceFile, node);
                }
            }
            function emitThis(node) {
                if (resolver.getNodeCheckFlags(node) & 2) {
                    write("_this");
                }
                else {
                    write("this");
                }
            }
            function emitSuper(node) {
                var flags = resolver.getNodeCheckFlags(node);
                if (flags & 16) {
                    write("_super.prototype");
                }
                else if (flags & 32) {
                    write("_super");
                }
                else {
                    write("super");
                }
            }
            function emitObjectBindingPattern(node) {
                write("{ ");
                var elements = node.elements;
                emitList(elements, 0, elements.length, false, elements.hasTrailingComma);
                write(" }");
            }
            function emitArrayBindingPattern(node) {
                write("[");
                var elements = node.elements;
                emitList(elements, 0, elements.length, false, elements.hasTrailingComma);
                write("]");
            }
            function emitBindingElement(node) {
                if (node.propertyName) {
                    emit(node.propertyName);
                    write(": ");
                }
                if (node.dotDotDotToken) {
                    write("...");
                }
                if (ts.isBindingPattern(node.name)) {
                    emit(node.name);
                }
                else {
                    emitModuleMemberName(node);
                }
                emitOptional(" = ", node.initializer);
            }
            function emitSpreadElementExpression(node) {
                write("...");
                emit(node.expression);
            }
            function needsParenthesisForPropertyAccess(node) {
                switch (node.kind) {
                    case 64:
                    case 147:
                    case 149:
                    case 150:
                    case 151:
                    case 155:
                        return false;
                }
                return true;
            }
            function emitListWithSpread(elements, multiLine, trailingComma) {
                var pos = 0;
                var group = 0;
                var length = elements.length;
                while (pos < length) {
                    if (group === 1) {
                        write(".concat(");
                    }
                    else if (group > 1) {
                        write(", ");
                    }
                    var e = elements[pos];
                    if (e.kind === 167) {
                        e = e.expression;
                        emitParenthesized(e, group === 0 && needsParenthesisForPropertyAccess(e));
                        pos++;
                    }
                    else {
                        var i = pos;
                        while (i < length && elements[i].kind !== 167) {
                            i++;
                        }
                        write("[");
                        emitList(elements, pos, i - pos, multiLine, trailingComma && i === length);
                        write("]");
                        pos = i;
                    }
                    group++;
                }
                if (group > 1) {
                    write(")");
                }
            }
            function emitArrayLiteral(node) {
                var elements = node.elements;
                if (elements.length === 0) {
                    write("[]");
                }
                else if (languageVersion >= 2) {
                    write("[");
                    emitList(elements, 0, elements.length, (node.flags & 256) !== 0, elements.hasTrailingComma);
                    write("]");
                }
                else {
                    emitListWithSpread(elements, (node.flags & 256) !== 0, elements.hasTrailingComma);
                }
            }
            function emitObjectLiteral(node) {
                write("{");
                var properties = node.properties;
                if (properties.length) {
                    var multiLine = (node.flags & 256) !== 0;
                    if (!multiLine) {
                        write(" ");
                    }
                    emitList(properties, 0, properties.length, multiLine, properties.hasTrailingComma && languageVersion >= 1);
                    if (!multiLine) {
                        write(" ");
                    }
                }
                write("}");
            }
            function emitComputedPropertyName(node) {
                write("[");
                emit(node.expression);
                write("]");
            }
            function emitMethod(node) {
                emit(node.name);
                if (languageVersion < 2) {
                    write(": function ");
                }
                emitSignatureAndBody(node);
            }
            function emitPropertyAssignment(node) {
                emit(node.name);
                write(": ");
                emit(node.initializer);
            }
            function emitShorthandPropertyAssignment(node) {
                emit(node.name);
                if (languageVersion < 2 || resolver.getExpressionNamePrefix(node.name)) {
                    write(": ");
                    emitExpressionIdentifier(node.name);
                }
            }
            function tryEmitConstantValue(node) {
                var constantValue = resolver.getConstantValue(node);
                if (constantValue !== undefined) {
                    write(constantValue.toString());
                    if (!compilerOptions.removeComments) {
                        var propertyName = node.kind === 149 ? ts.declarationNameToString(node.name) : ts.getTextOfNode(node.argumentExpression);
                        write(" /* " + propertyName + " */");
                    }
                    return true;
                }
                return false;
            }
            function emitPropertyAccess(node) {
                if (tryEmitConstantValue(node)) {
                    return;
                }
                emit(node.expression);
                write(".");
                emit(node.name);
            }
            function emitQualifiedName(node) {
                emit(node.left);
                write(".");
                emit(node.right);
            }
            function emitIndexedAccess(node) {
                if (tryEmitConstantValue(node)) {
                    return;
                }
                emit(node.expression);
                write("[");
                emit(node.argumentExpression);
                write("]");
            }
            function hasSpreadElement(elements) {
                return ts.forEach(elements, function (e) { return e.kind === 167; });
            }
            function skipParentheses(node) {
                while (node.kind === 155 || node.kind === 154) {
                    node = node.expression;
                }
                return node;
            }
            function emitCallTarget(node) {
                if (node.kind === 64 || node.kind === 92 || node.kind === 90) {
                    emit(node);
                    return node;
                }
                var temp = createTempVariable(node);
                recordTempDeclaration(temp);
                write("(");
                emit(temp);
                write(" = ");
                emit(node);
                write(")");
                return temp;
            }
            function emitCallWithSpread(node) {
                var target;
                var expr = skipParentheses(node.expression);
                if (expr.kind === 149) {
                    target = emitCallTarget(expr.expression);
                    write(".");
                    emit(expr.name);
                }
                else if (expr.kind === 150) {
                    target = emitCallTarget(expr.expression);
                    write("[");
                    emit(expr.argumentExpression);
                    write("]");
                }
                else if (expr.kind === 90) {
                    target = expr;
                    write("_super");
                }
                else {
                    emit(node.expression);
                }
                write(".apply(");
                if (target) {
                    if (target.kind === 90) {
                        emitThis(target);
                    }
                    else {
                        emit(target);
                    }
                }
                else {
                    write("void 0");
                }
                write(", ");
                emitListWithSpread(node.arguments, false, false);
                write(")");
            }
            function emitCallExpression(node) {
                if (languageVersion < 2 && hasSpreadElement(node.arguments)) {
                    emitCallWithSpread(node);
                    return;
                }
                var superCall = false;
                if (node.expression.kind === 90) {
                    write("_super");
                    superCall = true;
                }
                else {
                    emit(node.expression);
                    superCall = node.expression.kind === 149 && node.expression.expression.kind === 90;
                }
                if (superCall) {
                    write(".call(");
                    emitThis(node.expression);
                    if (node.arguments.length) {
                        write(", ");
                        emitCommaList(node.arguments);
                    }
                    write(")");
                }
                else {
                    write("(");
                    emitCommaList(node.arguments);
                    write(")");
                }
            }
            function emitNewExpression(node) {
                write("new ");
                emit(node.expression);
                if (node.arguments) {
                    write("(");
                    emitCommaList(node.arguments);
                    write(")");
                }
            }
            function emitTaggedTemplateExpression(node) {
                emit(node.tag);
                write(" ");
                emit(node.template);
            }
            function emitParenExpression(node) {
                if (node.expression.kind === 154) {
                    var operand = node.expression.expression;
                    while (operand.kind == 154) {
                        operand = operand.expression;
                    }
                    if (operand.kind !== 161 && operand.kind !== 160 && operand.kind !== 159 && operand.kind !== 158 && operand.kind !== 162 && operand.kind !== 152 && !(operand.kind === 151 && node.parent.kind === 152) && !(operand.kind === 156 && node.parent.kind === 151)) {
                        emit(operand);
                        return;
                    }
                }
                write("(");
                emit(node.expression);
                write(")");
            }
            function emitDeleteExpression(node) {
                write(ts.tokenToString(73));
                write(" ");
                emit(node.expression);
            }
            function emitVoidExpression(node) {
                write(ts.tokenToString(98));
                write(" ");
                emit(node.expression);
            }
            function emitTypeOfExpression(node) {
                write(ts.tokenToString(96));
                write(" ");
                emit(node.expression);
            }
            function emitPrefixUnaryExpression(node) {
                write(ts.tokenToString(node.operator));
                if (node.operand.kind === 161) {
                    var operand = node.operand;
                    if (node.operator === 33 && (operand.operator === 33 || operand.operator === 38)) {
                        write(" ");
                    }
                    else if (node.operator === 34 && (operand.operator === 34 || operand.operator === 39)) {
                        write(" ");
                    }
                }
                emit(node.operand);
            }
            function emitPostfixUnaryExpression(node) {
                emit(node.operand);
                write(ts.tokenToString(node.operator));
            }
            function emitBinaryExpression(node) {
                if (languageVersion < 2 && node.operator === 52 && (node.left.kind === 148 || node.left.kind === 147)) {
                    emitDestructuring(node);
                }
                else {
                    emit(node.left);
                    if (node.operator !== 23)
                        write(" ");
                    write(ts.tokenToString(node.operator));
                    write(" ");
                    emit(node.right);
                }
            }
            function emitConditionalExpression(node) {
                emit(node.condition);
                write(" ? ");
                emit(node.whenTrue);
                write(" : ");
                emit(node.whenFalse);
            }
            function isSingleLineBlock(node) {
                if (node && node.kind === 170) {
                    var block = node;
                    return block.statements.length === 0 && nodeEndIsOnSameLineAsNodeStart(block, block);
                }
            }
            function emitBlock(node) {
                if (isSingleLineBlock(node)) {
                    emitToken(14, node.pos);
                    write(" ");
                    emitToken(15, node.statements.end);
                    return;
                }
                emitToken(14, node.pos);
                increaseIndent();
                scopeEmitStart(node.parent);
                if (node.kind === 196) {
                    ts.Debug.assert(node.parent.kind === 195);
                    emitCaptureThisForNodeIfNecessary(node.parent);
                }
                emitLines(node.statements);
                if (node.kind === 196) {
                    emitTempDeclarations(true);
                }
                decreaseIndent();
                writeLine();
                emitToken(15, node.statements.end);
                scopeEmitEnd();
            }
            function emitEmbeddedStatement(node) {
                if (node.kind === 170) {
                    write(" ");
                    emit(node);
                }
                else {
                    increaseIndent();
                    writeLine();
                    emit(node);
                    decreaseIndent();
                }
            }
            function emitExpressionStatement(node) {
                emitParenthesized(node.expression, node.expression.kind === 157);
                write(";");
            }
            function emitIfStatement(node) {
                var endPos = emitToken(83, node.pos);
                write(" ");
                endPos = emitToken(16, endPos);
                emit(node.expression);
                emitToken(17, node.expression.end);
                emitEmbeddedStatement(node.thenStatement);
                if (node.elseStatement) {
                    writeLine();
                    emitToken(75, node.thenStatement.end);
                    if (node.elseStatement.kind === 174) {
                        write(" ");
                        emit(node.elseStatement);
                    }
                    else {
                        emitEmbeddedStatement(node.elseStatement);
                    }
                }
            }
            function emitDoStatement(node) {
                write("do");
                emitEmbeddedStatement(node.statement);
                if (node.statement.kind === 170) {
                    write(" ");
                }
                else {
                    writeLine();
                }
                write("while (");
                emit(node.expression);
                write(");");
            }
            function emitWhileStatement(node) {
                write("while (");
                emit(node.expression);
                write(")");
                emitEmbeddedStatement(node.statement);
            }
            function emitForStatement(node) {
                var endPos = emitToken(81, node.pos);
                write(" ");
                endPos = emitToken(16, endPos);
                if (node.initializer && node.initializer.kind === 189) {
                    var variableDeclarationList = node.initializer;
                    var declarations = variableDeclarationList.declarations;
                    if (declarations[0] && ts.isLet(declarations[0])) {
                        emitToken(103, endPos);
                    }
                    else if (declarations[0] && ts.isConst(declarations[0])) {
                        emitToken(69, endPos);
                    }
                    else {
                        emitToken(97, endPos);
                    }
                    write(" ");
                    emitCommaList(variableDeclarationList.declarations);
                }
                else if (node.initializer) {
                    emit(node.initializer);
                }
                write(";");
                emitOptional(" ", node.condition);
                write(";");
                emitOptional(" ", node.iterator);
                write(")");
                emitEmbeddedStatement(node.statement);
            }
            function emitForInStatement(node) {
                var endPos = emitToken(81, node.pos);
                write(" ");
                endPos = emitToken(16, endPos);
                if (node.initializer.kind === 189) {
                    var variableDeclarationList = node.initializer;
                    if (variableDeclarationList.declarations.length >= 1) {
                        var decl = variableDeclarationList.declarations[0];
                        if (ts.isLet(decl)) {
                            emitToken(103, endPos);
                        }
                        else {
                            emitToken(97, endPos);
                        }
                        write(" ");
                        emit(decl);
                    }
                }
                else {
                    emit(node.initializer);
                }
                write(" in ");
                emit(node.expression);
                emitToken(17, node.expression.end);
                emitEmbeddedStatement(node.statement);
            }
            function emitBreakOrContinueStatement(node) {
                emitToken(node.kind === 180 ? 65 : 70, node.pos);
                emitOptional(" ", node.label);
                write(";");
            }
            function emitReturnStatement(node) {
                emitToken(89, node.pos);
                emitOptional(" ", node.expression);
                write(";");
            }
            function emitWithStatement(node) {
                write("with (");
                emit(node.expression);
                write(")");
                emitEmbeddedStatement(node.statement);
            }
            function emitSwitchStatement(node) {
                var endPos = emitToken(91, node.pos);
                write(" ");
                emitToken(16, endPos);
                emit(node.expression);
                endPos = emitToken(17, node.expression.end);
                write(" ");
                emitToken(14, endPos);
                increaseIndent();
                emitLines(node.clauses);
                decreaseIndent();
                writeLine();
                emitToken(15, node.clauses.end);
            }
            function isOnSameLine(node1, node2) {
                return getLineOfLocalPosition(currentSourceFile, ts.skipTrivia(currentSourceFile.text, node1.pos)) === getLineOfLocalPosition(currentSourceFile, ts.skipTrivia(currentSourceFile.text, node2.pos));
            }
            function nodeEndIsOnSameLineAsNodeStart(node1, node2) {
                return getLineOfLocalPosition(currentSourceFile, node1.end) === getLineOfLocalPosition(currentSourceFile, ts.skipTrivia(currentSourceFile.text, node2.pos));
            }
            function emitCaseOrDefaultClause(node) {
                if (node.kind === 200) {
                    write("case ");
                    emit(node.expression);
                    write(":");
                }
                else {
                    write("default:");
                }
                if (node.statements.length === 1 && isOnSameLine(node, node.statements[0])) {
                    write(" ");
                    emit(node.statements[0]);
                }
                else {
                    increaseIndent();
                    emitLines(node.statements);
                    decreaseIndent();
                }
            }
            function emitThrowStatement(node) {
                write("throw ");
                emit(node.expression);
                write(";");
            }
            function emitTryStatement(node) {
                write("try ");
                emit(node.tryBlock);
                emit(node.catchClause);
                if (node.finallyBlock) {
                    writeLine();
                    write("finally ");
                    emit(node.finallyBlock);
                }
            }
            function emitCatchClause(node) {
                writeLine();
                var endPos = emitToken(67, node.pos);
                write(" ");
                emitToken(16, endPos);
                emit(node.name);
                emitToken(17, node.name.end);
                write(" ");
                emitBlock(node.block);
            }
            function emitDebuggerStatement(node) {
                emitToken(71, node.pos);
                write(";");
            }
            function emitLabelledStatement(node) {
                emit(node.label);
                write(": ");
                emit(node.statement);
            }
            function getContainingModule(node) {
                do {
                    node = node.parent;
                } while (node && node.kind !== 195);
                return node;
            }
            function emitModuleMemberName(node) {
                emitStart(node.name);
                if (ts.getCombinedNodeFlags(node) & 1) {
                    var container = getContainingModule(node);
                    write(container ? resolver.getLocalNameOfContainer(container) : "exports");
                    write(".");
                }
                emitNode(node.name);
                emitEnd(node.name);
            }
            function emitDestructuring(root, value) {
                var emitCount = 0;
                var isDeclaration = (root.kind === 188 && !(ts.getCombinedNodeFlags(root) & 1)) || root.kind === 124;
                if (root.kind === 163) {
                    emitAssignmentExpression(root);
                }
                else {
                    emitBindingElement(root, value);
                }
                function emitAssignment(name, value) {
                    if (emitCount++) {
                        write(", ");
                    }
                    if (name.parent && (name.parent.kind === 188 || name.parent.kind === 146)) {
                        emitModuleMemberName(name.parent);
                    }
                    else {
                        emit(name);
                    }
                    write(" = ");
                    emit(value);
                }
                function ensureIdentifier(expr) {
                    if (expr.kind !== 64) {
                        var identifier = createTempVariable(root);
                        if (!isDeclaration) {
                            recordTempDeclaration(identifier);
                        }
                        emitAssignment(identifier, expr);
                        expr = identifier;
                    }
                    return expr;
                }
                function createVoidZero() {
                    var zero = ts.createNode(7);
                    zero.text = "0";
                    var result = ts.createNode(160);
                    result.expression = zero;
                    return result;
                }
                function createDefaultValueCheck(value, defaultValue) {
                    value = ensureIdentifier(value);
                    var equals = ts.createNode(163);
                    equals.left = value;
                    equals.operator = 30;
                    equals.right = createVoidZero();
                    var cond = ts.createNode(164);
                    cond.condition = equals;
                    cond.whenTrue = defaultValue;
                    cond.whenFalse = value;
                    return cond;
                }
                function createNumericLiteral(value) {
                    var node = ts.createNode(7);
                    node.text = "" + value;
                    return node;
                }
                function parenthesizeForAccess(expr) {
                    if (expr.kind === 64 || expr.kind === 149 || expr.kind === 150) {
                        return expr;
                    }
                    var node = ts.createNode(155);
                    node.expression = expr;
                    return node;
                }
                function createPropertyAccess(object, propName) {
                    if (propName.kind !== 64) {
                        return createElementAccess(object, propName);
                    }
                    var node = ts.createNode(149);
                    node.expression = parenthesizeForAccess(object);
                    node.name = propName;
                    return node;
                }
                function createElementAccess(object, index) {
                    var node = ts.createNode(150);
                    node.expression = parenthesizeForAccess(object);
                    node.argumentExpression = index;
                    return node;
                }
                function emitObjectLiteralAssignment(target, value) {
                    var properties = target.properties;
                    if (properties.length !== 1) {
                        value = ensureIdentifier(value);
                    }
                    for (var i = 0; i < properties.length; i++) {
                        var p = properties[i];
                        if (p.kind === 204 || p.kind === 205) {
                            var propName = (p.name);
                            emitDestructuringAssignment(p.initializer || propName, createPropertyAccess(value, propName));
                        }
                    }
                }
                function emitArrayLiteralAssignment(target, value) {
                    var elements = target.elements;
                    if (elements.length !== 1) {
                        value = ensureIdentifier(value);
                    }
                    for (var i = 0; i < elements.length; i++) {
                        var e = elements[i];
                        if (e.kind !== 168) {
                            if (e.kind !== 167) {
                                emitDestructuringAssignment(e, createElementAccess(value, createNumericLiteral(i)));
                            }
                            else {
                                if (i === elements.length - 1) {
                                    value = ensureIdentifier(value);
                                    emitAssignment(e.expression, value);
                                    write(".slice(" + i + ")");
                                }
                            }
                        }
                    }
                }
                function emitDestructuringAssignment(target, value) {
                    if (target.kind === 163 && target.operator === 52) {
                        value = createDefaultValueCheck(value, target.right);
                        target = target.left;
                    }
                    if (target.kind === 148) {
                        emitObjectLiteralAssignment(target, value);
                    }
                    else if (target.kind === 147) {
                        emitArrayLiteralAssignment(target, value);
                    }
                    else {
                        emitAssignment(target, value);
                    }
                }
                function emitAssignmentExpression(root) {
                    var target = root.left;
                    var value = root.right;
                    if (root.parent.kind === 173) {
                        emitDestructuringAssignment(target, value);
                    }
                    else {
                        if (root.parent.kind !== 155) {
                            write("(");
                        }
                        value = ensureIdentifier(value);
                        emitDestructuringAssignment(target, value);
                        write(", ");
                        emit(value);
                        if (root.parent.kind !== 155) {
                            write(")");
                        }
                    }
                }
                function emitBindingElement(target, value) {
                    if (target.initializer) {
                        value = value ? createDefaultValueCheck(value, target.initializer) : target.initializer;
                    }
                    else if (!value) {
                        value = createVoidZero();
                    }
                    if (ts.isBindingPattern(target.name)) {
                        var pattern = target.name;
                        var elements = pattern.elements;
                        if (elements.length !== 1) {
                            value = ensureIdentifier(value);
                        }
                        for (var i = 0; i < elements.length; i++) {
                            var element = elements[i];
                            if (pattern.kind === 144) {
                                var propName = element.propertyName || element.name;
                                emitBindingElement(element, createPropertyAccess(value, propName));
                            }
                            else if (element.kind !== 168) {
                                if (!element.dotDotDotToken) {
                                    emitBindingElement(element, createElementAccess(value, createNumericLiteral(i)));
                                }
                                else {
                                    if (i === elements.length - 1) {
                                        value = ensureIdentifier(value);
                                        emitAssignment(element.name, value);
                                        write(".slice(" + i + ")");
                                    }
                                }
                            }
                        }
                    }
                    else {
                        emitAssignment(target.name, value);
                    }
                }
            }
            function emitVariableDeclaration(node) {
                if (ts.isBindingPattern(node.name)) {
                    if (languageVersion < 2) {
                        emitDestructuring(node);
                    }
                    else {
                        emit(node.name);
                        emitOptional(" = ", node.initializer);
                    }
                }
                else {
                    emitModuleMemberName(node);
                    emitOptional(" = ", node.initializer);
                }
            }
            function emitVariableStatement(node) {
                if (!(node.flags & 1)) {
                    if (ts.isLet(node.declarationList)) {
                        write("let ");
                    }
                    else if (ts.isConst(node.declarationList)) {
                        write("const ");
                    }
                    else {
                        write("var ");
                    }
                }
                emitCommaList(node.declarationList.declarations);
                write(";");
            }
            function emitParameter(node) {
                if (languageVersion < 2) {
                    if (ts.isBindingPattern(node.name)) {
                        var name = createTempVariable(node);
                        if (!tempParameters) {
                            tempParameters = [];
                        }
                        tempParameters.push(name);
                        emit(name);
                    }
                    else {
                        emit(node.name);
                    }
                }
                else {
                    if (node.dotDotDotToken) {
                        write("...");
                    }
                    emit(node.name);
                    emitOptional(" = ", node.initializer);
                }
            }
            function emitDefaultValueAssignments(node) {
                if (languageVersion < 2) {
                    var tempIndex = 0;
                    ts.forEach(node.parameters, function (p) {
                        if (ts.isBindingPattern(p.name)) {
                            writeLine();
                            write("var ");
                            emitDestructuring(p, tempParameters[tempIndex]);
                            write(";");
                            tempIndex++;
                        }
                        else if (p.initializer) {
                            writeLine();
                            emitStart(p);
                            write("if (");
                            emitNode(p.name);
                            write(" === void 0)");
                            emitEnd(p);
                            write(" { ");
                            emitStart(p);
                            emitNode(p.name);
                            write(" = ");
                            emitNode(p.initializer);
                            emitEnd(p);
                            write("; }");
                        }
                    });
                }
            }
            function emitRestParameter(node) {
                if (languageVersion < 2 && ts.hasRestParameters(node)) {
                    var restIndex = node.parameters.length - 1;
                    var restParam = node.parameters[restIndex];
                    var tempName = createTempVariable(node, true).text;
                    writeLine();
                    emitLeadingComments(restParam);
                    emitStart(restParam);
                    write("var ");
                    emitNode(restParam.name);
                    write(" = [];");
                    emitEnd(restParam);
                    emitTrailingComments(restParam);
                    writeLine();
                    write("for (");
                    emitStart(restParam);
                    write("var " + tempName + " = " + restIndex + ";");
                    emitEnd(restParam);
                    write(" ");
                    emitStart(restParam);
                    write(tempName + " < arguments.length;");
                    emitEnd(restParam);
                    write(" ");
                    emitStart(restParam);
                    write(tempName + "++");
                    emitEnd(restParam);
                    write(") {");
                    increaseIndent();
                    writeLine();
                    emitStart(restParam);
                    emitNode(restParam.name);
                    write("[" + tempName + " - " + restIndex + "] = arguments[" + tempName + "];");
                    emitEnd(restParam);
                    decreaseIndent();
                    writeLine();
                    write("}");
                }
            }
            function emitAccessor(node) {
                write(node.kind === 130 ? "get " : "set ");
                emit(node.name);
                emitSignatureAndBody(node);
            }
            function shouldEmitAsArrowFunction(node) {
                return node.kind === 157 && languageVersion >= 2;
            }
            function emitFunctionDeclaration(node) {
                if (ts.nodeIsMissing(node.body)) {
                    return emitPinnedOrTripleSlashComments(node);
                }
                if (node.kind !== 128 && node.kind !== 127) {
                    emitLeadingComments(node);
                }
                if (!shouldEmitAsArrowFunction(node)) {
                    write("function ");
                }
                if (node.kind === 190 || (node.kind === 156 && node.name)) {
                    emit(node.name);
                }
                emitSignatureAndBody(node);
                if (node.kind !== 128 && node.kind !== 127) {
                    emitTrailingComments(node);
                }
            }
            function emitCaptureThisForNodeIfNecessary(node) {
                if (resolver.getNodeCheckFlags(node) & 4) {
                    writeLine();
                    emitStart(node);
                    write("var _this = this;");
                    emitEnd(node);
                }
            }
            function emitSignatureParameters(node) {
                increaseIndent();
                write("(");
                if (node) {
                    var parameters = node.parameters;
                    var omitCount = languageVersion < 2 && ts.hasRestParameters(node) ? 1 : 0;
                    emitList(parameters, 0, parameters.length - omitCount, false, false);
                }
                write(")");
                decreaseIndent();
            }
            function emitSignatureParametersForArrow(node) {
                if (node.parameters.length === 1 && node.pos === node.parameters[0].pos) {
                    emit(node.parameters[0]);
                    return;
                }
                emitSignatureParameters(node);
            }
            function emitSignatureAndBody(node) {
                var saveTempCount = tempCount;
                var saveTempVariables = tempVariables;
                var saveTempParameters = tempParameters;
                tempCount = 0;
                tempVariables = undefined;
                tempParameters = undefined;
                if (shouldEmitAsArrowFunction(node)) {
                    emitSignatureParametersForArrow(node);
                    write(" =>");
                }
                else {
                    emitSignatureParameters(node);
                }
                if (isSingleLineBlock(node.body)) {
                    write(" { }");
                }
                else {
                    write(" {");
                    scopeEmitStart(node);
                    if (!node.body) {
                        writeLine();
                        write("}");
                    }
                    else {
                        increaseIndent();
                        emitDetachedComments(node.body.kind === 170 ? node.body.statements : node.body);
                        var startIndex = 0;
                        if (node.body.kind === 170) {
                            startIndex = emitDirectivePrologues(node.body.statements, true);
                        }
                        var outPos = writer.getTextPos();
                        emitCaptureThisForNodeIfNecessary(node);
                        emitDefaultValueAssignments(node);
                        emitRestParameter(node);
                        if (node.body.kind !== 170 && outPos === writer.getTextPos()) {
                            decreaseIndent();
                            write(" ");
                            emitStart(node.body);
                            write("return ");
                            emitNode(node.body, true);
                            emitEnd(node.body);
                            write(";");
                            emitTempDeclarations(false);
                            write(" ");
                            emitStart(node.body);
                            write("}");
                            emitEnd(node.body);
                        }
                        else {
                            if (node.body.kind === 170) {
                                emitLinesStartingAt(node.body.statements, startIndex);
                            }
                            else {
                                writeLine();
                                emitLeadingComments(node.body);
                                write("return ");
                                emit(node.body, true);
                                write(";");
                                emitTrailingComments(node.body);
                            }
                            emitTempDeclarations(true);
                            writeLine();
                            if (node.body.kind === 170) {
                                emitLeadingCommentsOfPosition(node.body.statements.end);
                                decreaseIndent();
                                emitToken(15, node.body.statements.end);
                            }
                            else {
                                decreaseIndent();
                                emitStart(node.body);
                                write("}");
                                emitEnd(node.body);
                            }
                        }
                    }
                    scopeEmitEnd();
                }
                if (node.flags & 1) {
                    writeLine();
                    emitStart(node);
                    emitModuleMemberName(node);
                    write(" = ");
                    emit(node.name);
                    emitEnd(node);
                    write(";");
                }
                tempCount = saveTempCount;
                tempVariables = saveTempVariables;
                tempParameters = saveTempParameters;
            }
            function findInitialSuperCall(ctor) {
                if (ctor.body) {
                    var statement = ctor.body.statements[0];
                    if (statement && statement.kind === 173) {
                        var expr = statement.expression;
                        if (expr && expr.kind === 151) {
                            var func = expr.expression;
                            if (func && func.kind === 90) {
                                return statement;
                            }
                        }
                    }
                }
            }
            function emitParameterPropertyAssignments(node) {
                ts.forEach(node.parameters, function (param) {
                    if (param.flags & 112) {
                        writeLine();
                        emitStart(param);
                        emitStart(param.name);
                        write("this.");
                        emitNode(param.name);
                        emitEnd(param.name);
                        write(" = ");
                        emit(param.name);
                        write(";");
                        emitEnd(param);
                    }
                });
            }
            function emitMemberAccessForPropertyName(memberName) {
                if (memberName.kind === 8 || memberName.kind === 7) {
                    write("[");
                    emitNode(memberName);
                    write("]");
                }
                else if (memberName.kind === 122) {
                    emitComputedPropertyName(memberName);
                }
                else {
                    write(".");
                    emitNode(memberName);
                }
            }
            function emitMemberAssignments(node, staticFlag) {
                ts.forEach(node.members, function (member) {
                    if (member.kind === 126 && (member.flags & 128) === staticFlag && member.initializer) {
                        writeLine();
                        emitLeadingComments(member);
                        emitStart(member);
                        emitStart(member.name);
                        if (staticFlag) {
                            emitNode(node.name);
                        }
                        else {
                            write("this");
                        }
                        emitMemberAccessForPropertyName(member.name);
                        emitEnd(member.name);
                        write(" = ");
                        emit(member.initializer);
                        write(";");
                        emitEnd(member);
                        emitTrailingComments(member);
                    }
                });
            }
            function emitMemberFunctions(node) {
                ts.forEach(node.members, function (member) {
                    if (member.kind === 128 || node.kind === 127) {
                        if (!member.body) {
                            return emitPinnedOrTripleSlashComments(member);
                        }
                        writeLine();
                        emitLeadingComments(member);
                        emitStart(member);
                        emitStart(member.name);
                        emitNode(node.name);
                        if (!(member.flags & 128)) {
                            write(".prototype");
                        }
                        emitMemberAccessForPropertyName(member.name);
                        emitEnd(member.name);
                        write(" = ");
                        emitStart(member);
                        emitFunctionDeclaration(member);
                        emitEnd(member);
                        emitEnd(member);
                        write(";");
                        emitTrailingComments(member);
                    }
                    else if (member.kind === 130 || member.kind === 131) {
                        var accessors = getAllAccessorDeclarations(node, member);
                        if (member === accessors.firstAccessor) {
                            writeLine();
                            emitStart(member);
                            write("Object.defineProperty(");
                            emitStart(member.name);
                            emitNode(node.name);
                            if (!(member.flags & 128)) {
                                write(".prototype");
                            }
                            write(", ");
                            emitExpressionForPropertyName(member.name);
                            emitEnd(member.name);
                            write(", {");
                            increaseIndent();
                            if (accessors.getAccessor) {
                                writeLine();
                                emitLeadingComments(accessors.getAccessor);
                                write("get: ");
                                emitStart(accessors.getAccessor);
                                write("function ");
                                emitSignatureAndBody(accessors.getAccessor);
                                emitEnd(accessors.getAccessor);
                                emitTrailingComments(accessors.getAccessor);
                                write(",");
                            }
                            if (accessors.setAccessor) {
                                writeLine();
                                emitLeadingComments(accessors.setAccessor);
                                write("set: ");
                                emitStart(accessors.setAccessor);
                                write("function ");
                                emitSignatureAndBody(accessors.setAccessor);
                                emitEnd(accessors.setAccessor);
                                emitTrailingComments(accessors.setAccessor);
                                write(",");
                            }
                            writeLine();
                            write("enumerable: true,");
                            writeLine();
                            write("configurable: true");
                            decreaseIndent();
                            writeLine();
                            write("});");
                            emitEnd(member);
                        }
                    }
                });
            }
            function emitClassDeclaration(node) {
                write("var ");
                emit(node.name);
                write(" = (function (");
                var baseTypeNode = ts.getClassBaseTypeNode(node);
                if (baseTypeNode) {
                    write("_super");
                }
                write(") {");
                increaseIndent();
                scopeEmitStart(node);
                if (baseTypeNode) {
                    writeLine();
                    emitStart(baseTypeNode);
                    write("__extends(");
                    emit(node.name);
                    write(", _super);");
                    emitEnd(baseTypeNode);
                }
                writeLine();
                emitConstructorOfClass();
                emitMemberFunctions(node);
                emitMemberAssignments(node, 128);
                writeLine();
                function emitClassReturnStatement() {
                    write("return ");
                    emitNode(node.name);
                }
                emitToken(15, node.members.end, emitClassReturnStatement);
                write(";");
                decreaseIndent();
                writeLine();
                emitToken(15, node.members.end);
                scopeEmitEnd();
                emitStart(node);
                write(")(");
                if (baseTypeNode) {
                    emit(baseTypeNode.typeName);
                }
                write(");");
                emitEnd(node);
                if (node.flags & 1) {
                    writeLine();
                    emitStart(node);
                    emitModuleMemberName(node);
                    write(" = ");
                    emit(node.name);
                    emitEnd(node);
                    write(";");
                }
                function emitConstructorOfClass() {
                    var saveTempCount = tempCount;
                    var saveTempVariables = tempVariables;
                    var saveTempParameters = tempParameters;
                    tempCount = 0;
                    tempVariables = undefined;
                    tempParameters = undefined;
                    ts.forEach(node.members, function (member) {
                        if (member.kind === 129 && !member.body) {
                            emitPinnedOrTripleSlashComments(member);
                        }
                    });
                    var ctor = getFirstConstructorWithBody(node);
                    if (ctor) {
                        emitLeadingComments(ctor);
                    }
                    emitStart(ctor || node);
                    write("function ");
                    emit(node.name);
                    emitSignatureParameters(ctor);
                    write(" {");
                    scopeEmitStart(node, "constructor");
                    increaseIndent();
                    if (ctor) {
                        emitDetachedComments(ctor.body.statements);
                    }
                    emitCaptureThisForNodeIfNecessary(node);
                    if (ctor) {
                        emitDefaultValueAssignments(ctor);
                        emitRestParameter(ctor);
                        if (baseTypeNode) {
                            var superCall = findInitialSuperCall(ctor);
                            if (superCall) {
                                writeLine();
                                emit(superCall);
                            }
                        }
                        emitParameterPropertyAssignments(ctor);
                    }
                    else {
                        if (baseTypeNode) {
                            writeLine();
                            emitStart(baseTypeNode);
                            write("_super.apply(this, arguments);");
                            emitEnd(baseTypeNode);
                        }
                    }
                    emitMemberAssignments(node, 0);
                    if (ctor) {
                        var statements = ctor.body.statements;
                        if (superCall)
                            statements = statements.slice(1);
                        emitLines(statements);
                    }
                    emitTempDeclarations(true);
                    writeLine();
                    if (ctor) {
                        emitLeadingCommentsOfPosition(ctor.body.statements.end);
                    }
                    decreaseIndent();
                    emitToken(15, ctor ? ctor.body.statements.end : node.members.end);
                    scopeEmitEnd();
                    emitEnd(ctor || node);
                    if (ctor) {
                        emitTrailingComments(ctor);
                    }
                    tempCount = saveTempCount;
                    tempVariables = saveTempVariables;
                    tempParameters = saveTempParameters;
                }
            }
            function emitInterfaceDeclaration(node) {
                emitPinnedOrTripleSlashComments(node);
            }
            function shouldEmitEnumDeclaration(node) {
                var isConstEnum = ts.isConst(node);
                return !isConstEnum || compilerOptions.preserveConstEnums;
            }
            function emitEnumDeclaration(node) {
                if (!shouldEmitEnumDeclaration(node)) {
                    return;
                }
                if (!(node.flags & 1)) {
                    emitStart(node);
                    write("var ");
                    emit(node.name);
                    emitEnd(node);
                    write(";");
                }
                writeLine();
                emitStart(node);
                write("(function (");
                emitStart(node.name);
                write(resolver.getLocalNameOfContainer(node));
                emitEnd(node.name);
                write(") {");
                increaseIndent();
                scopeEmitStart(node);
                emitLines(node.members);
                decreaseIndent();
                writeLine();
                emitToken(15, node.members.end);
                scopeEmitEnd();
                write(")(");
                emitModuleMemberName(node);
                write(" || (");
                emitModuleMemberName(node);
                write(" = {}));");
                emitEnd(node);
                if (node.flags & 1) {
                    writeLine();
                    emitStart(node);
                    write("var ");
                    emit(node.name);
                    write(" = ");
                    emitModuleMemberName(node);
                    emitEnd(node);
                    write(";");
                }
            }
            function emitEnumMember(node) {
                var enumParent = node.parent;
                emitStart(node);
                write(resolver.getLocalNameOfContainer(enumParent));
                write("[");
                write(resolver.getLocalNameOfContainer(enumParent));
                write("[");
                emitExpressionForPropertyName(node.name);
                write("] = ");
                writeEnumMemberDeclarationValue(node);
                write("] = ");
                emitExpressionForPropertyName(node.name);
                emitEnd(node);
                write(";");
            }
            function writeEnumMemberDeclarationValue(member) {
                if (!member.initializer || ts.isConst(member.parent)) {
                    var value = resolver.getConstantValue(member);
                    if (value !== undefined) {
                        write(value.toString());
                        return;
                    }
                }
                if (member.initializer) {
                    emit(member.initializer);
                }
                else {
                    write("undefined");
                }
            }
            function getInnerMostModuleDeclarationFromDottedModule(moduleDeclaration) {
                if (moduleDeclaration.body.kind === 195) {
                    var recursiveInnerModule = getInnerMostModuleDeclarationFromDottedModule(moduleDeclaration.body);
                    return recursiveInnerModule || moduleDeclaration.body;
                }
            }
            function shouldEmitModuleDeclaration(node) {
                return ts.isInstantiatedModule(node, compilerOptions.preserveConstEnums);
            }
            function emitModuleDeclaration(node) {
                var shouldEmit = shouldEmitModuleDeclaration(node);
                if (!shouldEmit) {
                    return emitPinnedOrTripleSlashComments(node);
                }
                emitStart(node);
                write("var ");
                emit(node.name);
                write(";");
                emitEnd(node);
                writeLine();
                emitStart(node);
                write("(function (");
                emitStart(node.name);
                write(resolver.getLocalNameOfContainer(node));
                emitEnd(node.name);
                write(") ");
                if (node.body.kind === 196) {
                    var saveTempCount = tempCount;
                    var saveTempVariables = tempVariables;
                    tempCount = 0;
                    tempVariables = undefined;
                    emit(node.body);
                    tempCount = saveTempCount;
                    tempVariables = saveTempVariables;
                }
                else {
                    write("{");
                    increaseIndent();
                    scopeEmitStart(node);
                    emitCaptureThisForNodeIfNecessary(node);
                    writeLine();
                    emit(node.body);
                    decreaseIndent();
                    writeLine();
                    var moduleBlock = getInnerMostModuleDeclarationFromDottedModule(node).body;
                    emitToken(15, moduleBlock.statements.end);
                    scopeEmitEnd();
                }
                write(")(");
                if (node.flags & 1) {
                    emit(node.name);
                    write(" = ");
                }
                emitModuleMemberName(node);
                write(" || (");
                emitModuleMemberName(node);
                write(" = {}));");
                emitEnd(node);
            }
            function emitImportDeclaration(node) {
                var emitImportDeclaration = resolver.isReferencedImportDeclaration(node);
                if (!emitImportDeclaration) {
                    emitImportDeclaration = !ts.isExternalModule(currentSourceFile) && resolver.isTopLevelValueImportWithEntityName(node);
                }
                if (emitImportDeclaration) {
                    if (ts.isExternalModuleImportDeclaration(node) && node.parent.kind === 207 && compilerOptions.module === 2) {
                        if (node.flags & 1) {
                            writeLine();
                            emitLeadingComments(node);
                            emitStart(node);
                            emitModuleMemberName(node);
                            write(" = ");
                            emit(node.name);
                            write(";");
                            emitEnd(node);
                            emitTrailingComments(node);
                        }
                    }
                    else {
                        writeLine();
                        emitLeadingComments(node);
                        emitStart(node);
                        if (!(node.flags & 1))
                            write("var ");
                        emitModuleMemberName(node);
                        write(" = ");
                        if (ts.isInternalModuleImportDeclaration(node)) {
                            emit(node.moduleReference);
                        }
                        else {
                            var literal = ts.getExternalModuleImportDeclarationExpression(node);
                            write("require(");
                            emitStart(literal);
                            emitLiteral(literal);
                            emitEnd(literal);
                            emitToken(17, literal.end);
                        }
                        write(";");
                        emitEnd(node);
                        emitTrailingComments(node);
                    }
                }
            }
            function getExternalImportDeclarations(node) {
                var result = [];
                ts.forEach(node.statements, function (statement) {
                    if (ts.isExternalModuleImportDeclaration(statement) && resolver.isReferencedImportDeclaration(statement)) {
                        result.push(statement);
                    }
                });
                return result;
            }
            function getFirstExportAssignment(sourceFile) {
                return ts.forEach(sourceFile.statements, function (node) {
                    if (node.kind === 198) {
                        return node;
                    }
                });
            }
            function sortAMDModules(amdModules) {
                return amdModules.sort(function (moduleA, moduleB) {
                    if (moduleA.name === moduleB.name) {
                        return 0;
                    }
                    else if (!moduleA.name) {
                        return 1;
                    }
                    else {
                        return -1;
                    }
                });
            }
            function emitAMDModule(node, startIndex) {
                var imports = getExternalImportDeclarations(node);
                writeLine();
                write("define(");
                sortAMDModules(node.amdDependencies);
                if (node.amdModuleName) {
                    write("\"" + node.amdModuleName + "\", ");
                }
                write("[\"require\", \"exports\"");
                ts.forEach(imports, function (imp) {
                    write(", ");
                    emitLiteral(ts.getExternalModuleImportDeclarationExpression(imp));
                });
                ts.forEach(node.amdDependencies, function (amdDependency) {
                    var text = "\"" + amdDependency.path + "\"";
                    write(", ");
                    write(text);
                });
                write("], function (require, exports");
                ts.forEach(imports, function (imp) {
                    write(", ");
                    emit(imp.name);
                });
                ts.forEach(node.amdDependencies, function (amdDependency) {
                    if (amdDependency.name) {
                        write(", ");
                        write(amdDependency.name);
                    }
                });
                write(") {");
                increaseIndent();
                emitCaptureThisForNodeIfNecessary(node);
                emitLinesStartingAt(node.statements, startIndex);
                emitTempDeclarations(true);
                var exportName = resolver.getExportAssignmentName(node);
                if (exportName) {
                    writeLine();
                    var exportAssignment = getFirstExportAssignment(node);
                    emitStart(exportAssignment);
                    write("return ");
                    emitStart(exportAssignment.exportName);
                    write(exportName);
                    emitEnd(exportAssignment.exportName);
                    write(";");
                    emitEnd(exportAssignment);
                }
                decreaseIndent();
                writeLine();
                write("});");
            }
            function emitCommonJSModule(node, startIndex) {
                emitCaptureThisForNodeIfNecessary(node);
                emitLinesStartingAt(node.statements, startIndex);
                emitTempDeclarations(true);
                var exportName = resolver.getExportAssignmentName(node);
                if (exportName) {
                    writeLine();
                    var exportAssignment = getFirstExportAssignment(node);
                    emitStart(exportAssignment);
                    write("module.exports = ");
                    emitStart(exportAssignment.exportName);
                    write(exportName);
                    emitEnd(exportAssignment.exportName);
                    write(";");
                    emitEnd(exportAssignment);
                }
            }
            function emitDirectivePrologues(statements, startWithNewLine) {
                for (var i = 0; i < statements.length; ++i) {
                    if (ts.isPrologueDirective(statements[i])) {
                        if (startWithNewLine || i > 0) {
                            writeLine();
                        }
                        emit(statements[i]);
                    }
                    else {
                        return i;
                    }
                }
                return statements.length;
            }
            function emitSourceFile(node) {
                currentSourceFile = node;
                writeLine();
                emitDetachedComments(node);
                var startIndex = emitDirectivePrologues(node.statements, false);
                if (!extendsEmitted && resolver.getNodeCheckFlags(node) & 8) {
                    writeLine();
                    write("var __extends = this.__extends || function (d, b) {");
                    increaseIndent();
                    writeLine();
                    write("for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];");
                    writeLine();
                    write("function __() { this.constructor = d; }");
                    writeLine();
                    write("__.prototype = b.prototype;");
                    writeLine();
                    write("d.prototype = new __();");
                    decreaseIndent();
                    writeLine();
                    write("};");
                    extendsEmitted = true;
                }
                if (ts.isExternalModule(node)) {
                    if (compilerOptions.module === 2) {
                        emitAMDModule(node, startIndex);
                    }
                    else {
                        emitCommonJSModule(node, startIndex);
                    }
                }
                else {
                    emitCaptureThisForNodeIfNecessary(node);
                    emitLinesStartingAt(node.statements, startIndex);
                    emitTempDeclarations(true);
                }
                emitLeadingComments(node.endOfFileToken);
            }
            function emitNode(node, disableComments) {
                if (!node) {
                    return;
                }
                if (node.flags & 2) {
                    return emitPinnedOrTripleSlashComments(node);
                }
                var emitComments = !disableComments && shouldEmitLeadingAndTrailingComments(node);
                if (emitComments) {
                    emitLeadingComments(node);
                }
                emitJavaScriptWorker(node);
                if (emitComments) {
                    emitTrailingComments(node);
                }
            }
            function shouldEmitLeadingAndTrailingComments(node) {
                switch (node.kind) {
                    case 192:
                    case 190:
                    case 197:
                    case 193:
                    case 198:
                        return false;
                    case 195:
                        return shouldEmitModuleDeclaration(node);
                    case 194:
                        return shouldEmitEnumDeclaration(node);
                }
                return true;
            }
            function emitJavaScriptWorker(node) {
                switch (node.kind) {
                    case 64:
                        return emitIdentifier(node);
                    case 124:
                        return emitParameter(node);
                    case 128:
                    case 127:
                        return emitMethod(node);
                    case 130:
                    case 131:
                        return emitAccessor(node);
                    case 92:
                        return emitThis(node);
                    case 90:
                        return emitSuper(node);
                    case 88:
                        return write("null");
                    case 94:
                        return write("true");
                    case 79:
                        return write("false");
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                        return emitLiteral(node);
                    case 165:
                        return emitTemplateExpression(node);
                    case 169:
                        return emitTemplateSpan(node);
                    case 121:
                        return emitQualifiedName(node);
                    case 144:
                        return emitObjectBindingPattern(node);
                    case 145:
                        return emitArrayBindingPattern(node);
                    case 146:
                        return emitBindingElement(node);
                    case 147:
                        return emitArrayLiteral(node);
                    case 148:
                        return emitObjectLiteral(node);
                    case 204:
                        return emitPropertyAssignment(node);
                    case 205:
                        return emitShorthandPropertyAssignment(node);
                    case 122:
                        return emitComputedPropertyName(node);
                    case 149:
                        return emitPropertyAccess(node);
                    case 150:
                        return emitIndexedAccess(node);
                    case 151:
                        return emitCallExpression(node);
                    case 152:
                        return emitNewExpression(node);
                    case 153:
                        return emitTaggedTemplateExpression(node);
                    case 154:
                        return emit(node.expression);
                    case 155:
                        return emitParenExpression(node);
                    case 190:
                    case 156:
                    case 157:
                        return emitFunctionDeclaration(node);
                    case 158:
                        return emitDeleteExpression(node);
                    case 159:
                        return emitTypeOfExpression(node);
                    case 160:
                        return emitVoidExpression(node);
                    case 161:
                        return emitPrefixUnaryExpression(node);
                    case 162:
                        return emitPostfixUnaryExpression(node);
                    case 163:
                        return emitBinaryExpression(node);
                    case 164:
                        return emitConditionalExpression(node);
                    case 167:
                        return emitSpreadElementExpression(node);
                    case 168:
                        return;
                    case 170:
                    case 196:
                        return emitBlock(node);
                    case 171:
                        return emitVariableStatement(node);
                    case 172:
                        return write(";");
                    case 173:
                        return emitExpressionStatement(node);
                    case 174:
                        return emitIfStatement(node);
                    case 175:
                        return emitDoStatement(node);
                    case 176:
                        return emitWhileStatement(node);
                    case 177:
                        return emitForStatement(node);
                    case 178:
                        return emitForInStatement(node);
                    case 179:
                    case 180:
                        return emitBreakOrContinueStatement(node);
                    case 181:
                        return emitReturnStatement(node);
                    case 182:
                        return emitWithStatement(node);
                    case 183:
                        return emitSwitchStatement(node);
                    case 200:
                    case 201:
                        return emitCaseOrDefaultClause(node);
                    case 184:
                        return emitLabelledStatement(node);
                    case 185:
                        return emitThrowStatement(node);
                    case 186:
                        return emitTryStatement(node);
                    case 203:
                        return emitCatchClause(node);
                    case 187:
                        return emitDebuggerStatement(node);
                    case 188:
                        return emitVariableDeclaration(node);
                    case 191:
                        return emitClassDeclaration(node);
                    case 192:
                        return emitInterfaceDeclaration(node);
                    case 194:
                        return emitEnumDeclaration(node);
                    case 206:
                        return emitEnumMember(node);
                    case 195:
                        return emitModuleDeclaration(node);
                    case 197:
                        return emitImportDeclaration(node);
                    case 207:
                        return emitSourceFile(node);
                }
            }
            function hasDetachedComments(pos) {
                return detachedCommentsInfo !== undefined && detachedCommentsInfo[detachedCommentsInfo.length - 1].nodePos === pos;
            }
            function getLeadingCommentsWithoutDetachedComments() {
                var leadingComments = ts.getLeadingCommentRanges(currentSourceFile.text, detachedCommentsInfo[detachedCommentsInfo.length - 1].detachedCommentEndPos);
                if (detachedCommentsInfo.length - 1) {
                    detachedCommentsInfo.pop();
                }
                else {
                    detachedCommentsInfo = undefined;
                }
                return leadingComments;
            }
            function getLeadingCommentsToEmit(node) {
                if (node.parent) {
                    if (node.parent.kind === 207 || node.pos !== node.parent.pos) {
                        var leadingComments;
                        if (hasDetachedComments(node.pos)) {
                            leadingComments = getLeadingCommentsWithoutDetachedComments();
                        }
                        else {
                            leadingComments = ts.getLeadingCommentRangesOfNode(node, currentSourceFile);
                        }
                        return leadingComments;
                    }
                }
            }
            function emitLeadingDeclarationComments(node) {
                var leadingComments = getLeadingCommentsToEmit(node);
                emitNewLineBeforeLeadingComments(currentSourceFile, writer, node, leadingComments);
                emitComments(currentSourceFile, writer, leadingComments, true, newLine, writeComment);
            }
            function emitTrailingDeclarationComments(node) {
                if (node.parent) {
                    if (node.parent.kind === 207 || node.end !== node.parent.end) {
                        var trailingComments = ts.getTrailingCommentRanges(currentSourceFile.text, node.end);
                        emitComments(currentSourceFile, writer, trailingComments, false, newLine, writeComment);
                    }
                }
            }
            function emitLeadingCommentsOfLocalPosition(pos) {
                var leadingComments;
                if (hasDetachedComments(pos)) {
                    leadingComments = getLeadingCommentsWithoutDetachedComments();
                }
                else {
                    leadingComments = ts.getLeadingCommentRanges(currentSourceFile.text, pos);
                }
                emitNewLineBeforeLeadingComments(currentSourceFile, writer, { pos: pos, end: pos }, leadingComments);
                emitComments(currentSourceFile, writer, leadingComments, true, newLine, writeComment);
            }
            function emitDetachedCommentsAtPosition(node) {
                var leadingComments = ts.getLeadingCommentRanges(currentSourceFile.text, node.pos);
                if (leadingComments) {
                    var detachedComments = [];
                    var lastComment;
                    ts.forEach(leadingComments, function (comment) {
                        if (lastComment) {
                            var lastCommentLine = getLineOfLocalPosition(currentSourceFile, lastComment.end);
                            var commentLine = getLineOfLocalPosition(currentSourceFile, comment.pos);
                            if (commentLine >= lastCommentLine + 2) {
                                return detachedComments;
                            }
                        }
                        detachedComments.push(comment);
                        lastComment = comment;
                    });
                    if (detachedComments.length) {
                        var lastCommentLine = getLineOfLocalPosition(currentSourceFile, detachedComments[detachedComments.length - 1].end);
                        var astLine = getLineOfLocalPosition(currentSourceFile, ts.skipTrivia(currentSourceFile.text, node.pos));
                        if (astLine >= lastCommentLine + 2) {
                            emitNewLineBeforeLeadingComments(currentSourceFile, writer, node, leadingComments);
                            emitComments(currentSourceFile, writer, detachedComments, true, newLine, writeComment);
                            var currentDetachedCommentInfo = { nodePos: node.pos, detachedCommentEndPos: detachedComments[detachedComments.length - 1].end };
                            if (detachedCommentsInfo) {
                                detachedCommentsInfo.push(currentDetachedCommentInfo);
                            }
                            else {
                                detachedCommentsInfo = [currentDetachedCommentInfo];
                            }
                        }
                    }
                }
            }
            function emitPinnedOrTripleSlashCommentsOfNode(node) {
                var pinnedComments = ts.filter(getLeadingCommentsToEmit(node), isPinnedOrTripleSlashComment);
                function isPinnedOrTripleSlashComment(comment) {
                    if (currentSourceFile.text.charCodeAt(comment.pos + 1) === 42) {
                        return currentSourceFile.text.charCodeAt(comment.pos + 2) === 33;
                    }
                    else if (currentSourceFile.text.charCodeAt(comment.pos + 1) === 47 && comment.pos + 2 < comment.end && currentSourceFile.text.charCodeAt(comment.pos + 2) === 47 && currentSourceFile.text.substring(comment.pos, comment.end).match(ts.fullTripleSlashReferencePathRegEx)) {
                        return true;
                    }
                }
                emitNewLineBeforeLeadingComments(currentSourceFile, writer, node, pinnedComments);
                emitComments(currentSourceFile, writer, pinnedComments, true, newLine, writeComment);
            }
        }
        function writeDeclarationFile(jsFilePath, sourceFile) {
            var emitDeclarationResult = emitDeclarations(host, resolver, diagnostics, jsFilePath, sourceFile);
            if (!emitDeclarationResult.reportedDeclarationError) {
                var declarationOutput = emitDeclarationResult.referencePathsOutput;
                var appliedSyncOutputPos = 0;
                ts.forEach(emitDeclarationResult.aliasDeclarationEmitInfo, function (aliasEmitInfo) {
                    if (aliasEmitInfo.asynchronousOutput) {
                        declarationOutput += emitDeclarationResult.synchronousDeclarationOutput.substring(appliedSyncOutputPos, aliasEmitInfo.outputPos);
                        declarationOutput += aliasEmitInfo.asynchronousOutput;
                        appliedSyncOutputPos = aliasEmitInfo.outputPos;
                    }
                });
                declarationOutput += emitDeclarationResult.synchronousDeclarationOutput.substring(appliedSyncOutputPos);
                writeFile(host, diagnostics, ts.removeFileExtension(jsFilePath) + ".d.ts", declarationOutput, compilerOptions.emitBOM);
            }
        }
        function emitFile(jsFilePath, sourceFile) {
            emitJavaScript(jsFilePath, sourceFile);
            if (compilerOptions.declaration) {
                writeDeclarationFile(jsFilePath, sourceFile);
            }
        }
    }
    ts.emitFiles = emitFiles;
})(ts || (ts = {}));
var ts;
(function (ts) {
    ts.emitTime = 0;
    function createCompilerHost(options) {
        var currentDirectory;
        var existingDirectories = {};
        function getCanonicalFileName(fileName) {
            return ts.sys.useCaseSensitiveFileNames ? fileName : fileName.toLowerCase();
        }
        var unsupportedFileEncodingErrorCode = -2147024809;
        function getSourceFile(fileName, languageVersion, onError) {
            try {
                var text = ts.sys.readFile(fileName, options.charset);
            }
            catch (e) {
                if (onError) {
                    onError(e.number === unsupportedFileEncodingErrorCode ? ts.createCompilerDiagnostic(ts.Diagnostics.Unsupported_file_encoding).messageText : e.message);
                }
                text = "";
            }
            return text !== undefined ? ts.createSourceFile(fileName, text, languageVersion) : undefined;
        }
        function writeFile(fileName, data, writeByteOrderMark, onError) {
            function directoryExists(directoryPath) {
                if (ts.hasProperty(existingDirectories, directoryPath)) {
                    return true;
                }
                if (ts.sys.directoryExists(directoryPath)) {
                    existingDirectories[directoryPath] = true;
                    return true;
                }
                return false;
            }
            function ensureDirectoriesExist(directoryPath) {
                if (directoryPath.length > ts.getRootLength(directoryPath) && !directoryExists(directoryPath)) {
                    var parentDirectory = ts.getDirectoryPath(directoryPath);
                    ensureDirectoriesExist(parentDirectory);
                    ts.sys.createDirectory(directoryPath);
                }
            }
            try {
                ensureDirectoriesExist(ts.getDirectoryPath(ts.normalizePath(fileName)));
                ts.sys.writeFile(fileName, data, writeByteOrderMark);
            }
            catch (e) {
                if (onError) {
                    onError(e.message);
                }
            }
        }
        return {
            getSourceFile: getSourceFile,
            getDefaultLibFileName: function (options) { return ts.combinePaths(ts.getDirectoryPath(ts.normalizePath(ts.sys.getExecutingFilePath())), ts.getDefaultLibFileName(options)); },
            writeFile: writeFile,
            getCurrentDirectory: function () { return currentDirectory || (currentDirectory = ts.sys.getCurrentDirectory()); },
            useCaseSensitiveFileNames: function () { return ts.sys.useCaseSensitiveFileNames; },
            getCanonicalFileName: getCanonicalFileName,
            getNewLine: function () { return ts.sys.newLine; }
        };
    }
    ts.createCompilerHost = createCompilerHost;
    function getPreEmitDiagnostics(program) {
        var diagnostics = program.getSyntacticDiagnostics().concat(program.getGlobalDiagnostics()).concat(program.getSemanticDiagnostics());
        return ts.sortAndDeduplicateDiagnostics(diagnostics);
    }
    ts.getPreEmitDiagnostics = getPreEmitDiagnostics;
    function flattenDiagnosticMessageText(messageText, newLine) {
        if (typeof messageText === "string") {
            return messageText;
        }
        else {
            var diagnosticChain = messageText;
            var result = "";
            var indent = 0;
            while (diagnosticChain) {
                if (indent) {
                    result += newLine;
                    for (var i = 0; i < indent; i++) {
                        result += "  ";
                    }
                }
                result += diagnosticChain.messageText;
                indent++;
                diagnosticChain = diagnosticChain.next;
            }
            return result;
        }
    }
    ts.flattenDiagnosticMessageText = flattenDiagnosticMessageText;
    function createProgram(rootNames, options, host) {
        var program;
        var files = [];
        var filesByName = {};
        var diagnostics = ts.createDiagnosticCollection();
        var seenNoDefaultLib = options.noLib;
        var commonSourceDirectory;
        host = host || createCompilerHost(options);
        ts.forEach(rootNames, function (name) { return processRootFile(name, false); });
        if (!seenNoDefaultLib) {
            processRootFile(host.getDefaultLibFileName(options), true);
        }
        verifyCompilerOptions();
        var diagnosticsProducingTypeChecker;
        var noDiagnosticsTypeChecker;
        program = {
            getSourceFile: getSourceFile,
            getSourceFiles: function () { return files; },
            getCompilerOptions: function () { return options; },
            getSyntacticDiagnostics: getSyntacticDiagnostics,
            getGlobalDiagnostics: getGlobalDiagnostics,
            getSemanticDiagnostics: getSemanticDiagnostics,
            getDeclarationDiagnostics: getDeclarationDiagnostics,
            getTypeChecker: getTypeChecker,
            getDiagnosticsProducingTypeChecker: getDiagnosticsProducingTypeChecker,
            getCommonSourceDirectory: function () { return commonSourceDirectory; },
            emit: emit,
            getCurrentDirectory: host.getCurrentDirectory,
            getNodeCount: function () { return getDiagnosticsProducingTypeChecker().getNodeCount(); },
            getIdentifierCount: function () { return getDiagnosticsProducingTypeChecker().getIdentifierCount(); },
            getSymbolCount: function () { return getDiagnosticsProducingTypeChecker().getSymbolCount(); },
            getTypeCount: function () { return getDiagnosticsProducingTypeChecker().getTypeCount(); }
        };
        return program;
        function getEmitHost(writeFileCallback) {
            return {
                getCanonicalFileName: host.getCanonicalFileName,
                getCommonSourceDirectory: program.getCommonSourceDirectory,
                getCompilerOptions: program.getCompilerOptions,
                getCurrentDirectory: host.getCurrentDirectory,
                getNewLine: host.getNewLine,
                getSourceFile: program.getSourceFile,
                getSourceFiles: program.getSourceFiles,
                writeFile: writeFileCallback || host.writeFile
            };
        }
        function getDiagnosticsProducingTypeChecker() {
            return diagnosticsProducingTypeChecker || (diagnosticsProducingTypeChecker = ts.createTypeChecker(program, true));
        }
        function getTypeChecker() {
            return noDiagnosticsTypeChecker || (noDiagnosticsTypeChecker = ts.createTypeChecker(program, false));
        }
        function getDeclarationDiagnostics(targetSourceFile) {
            var resolver = getDiagnosticsProducingTypeChecker().getEmitResolver(targetSourceFile);
            return ts.getDeclarationDiagnostics(getEmitHost(), resolver, targetSourceFile);
        }
        function emit(sourceFile, writeFileCallback) {
            if (options.noEmitOnError && getPreEmitDiagnostics(this).length > 0) {
                return { diagnostics: [], sourceMaps: undefined, emitSkipped: true };
            }
            var start = new Date().getTime();
            var emitResult = ts.emitFiles(getDiagnosticsProducingTypeChecker().getEmitResolver(sourceFile), getEmitHost(writeFileCallback), sourceFile);
            ts.emitTime += new Date().getTime() - start;
            return emitResult;
        }
        function getSourceFile(fileName) {
            fileName = host.getCanonicalFileName(fileName);
            return ts.hasProperty(filesByName, fileName) ? filesByName[fileName] : undefined;
        }
        function getDiagnosticsHelper(sourceFile, getDiagnostics) {
            if (sourceFile) {
                return getDiagnostics(sourceFile);
            }
            var allDiagnostics = [];
            ts.forEach(program.getSourceFiles(), function (sourceFile) {
                ts.addRange(allDiagnostics, getDiagnostics(sourceFile));
            });
            return ts.sortAndDeduplicateDiagnostics(allDiagnostics);
        }
        function getSyntacticDiagnostics(sourceFile) {
            return getDiagnosticsHelper(sourceFile, getSyntacticDiagnosticsForFile);
        }
        function getSemanticDiagnostics(sourceFile) {
            return getDiagnosticsHelper(sourceFile, getSemanticDiagnosticsForFile);
        }
        function getSyntacticDiagnosticsForFile(sourceFile) {
            return sourceFile.parseDiagnostics;
        }
        function getSemanticDiagnosticsForFile(sourceFile) {
            var typeChecker = getDiagnosticsProducingTypeChecker();
            ts.Debug.assert(!!sourceFile.bindDiagnostics);
            var bindDiagnostics = sourceFile.bindDiagnostics;
            var checkDiagnostics = typeChecker.getDiagnostics(sourceFile);
            var programDiagnostics = diagnostics.getDiagnostics(sourceFile.fileName);
            return bindDiagnostics.concat(checkDiagnostics).concat(programDiagnostics);
        }
        function getGlobalDiagnostics() {
            var typeChecker = getDiagnosticsProducingTypeChecker();
            var allDiagnostics = [];
            ts.addRange(allDiagnostics, typeChecker.getGlobalDiagnostics());
            ts.addRange(allDiagnostics, diagnostics.getGlobalDiagnostics());
            return ts.sortAndDeduplicateDiagnostics(allDiagnostics);
        }
        function hasExtension(fileName) {
            return ts.getBaseFileName(fileName).indexOf(".") >= 0;
        }
        function processRootFile(fileName, isDefaultLib) {
            processSourceFile(ts.normalizePath(fileName), isDefaultLib);
        }
        function processSourceFile(fileName, isDefaultLib, refFile, refPos, refEnd) {
            if (refEnd !== undefined && refPos !== undefined) {
                var start = refPos;
                var length = refEnd - refPos;
            }
            var diagnostic;
            if (hasExtension(fileName)) {
                if (!options.allowNonTsExtensions && !ts.fileExtensionIs(host.getCanonicalFileName(fileName), ".ts")) {
                    diagnostic = ts.Diagnostics.File_0_must_have_extension_ts_or_d_ts;
                }
                else if (!findSourceFile(fileName, isDefaultLib, refFile, refPos, refEnd)) {
                    diagnostic = ts.Diagnostics.File_0_not_found;
                }
                else if (refFile && host.getCanonicalFileName(fileName) === host.getCanonicalFileName(refFile.fileName)) {
                    diagnostic = ts.Diagnostics.A_file_cannot_have_a_reference_to_itself;
                }
            }
            else {
                if (options.allowNonTsExtensions && !findSourceFile(fileName, isDefaultLib, refFile, refPos, refEnd)) {
                    diagnostic = ts.Diagnostics.File_0_not_found;
                }
                else if (!findSourceFile(fileName + ".ts", isDefaultLib, refFile, refPos, refEnd) && !findSourceFile(fileName + ".d.ts", isDefaultLib, refFile, refPos, refEnd)) {
                    diagnostic = ts.Diagnostics.File_0_not_found;
                    fileName += ".ts";
                }
            }
            if (diagnostic) {
                if (refFile) {
                    diagnostics.add(ts.createFileDiagnostic(refFile, start, length, diagnostic, fileName));
                }
                else {
                    diagnostics.add(ts.createCompilerDiagnostic(diagnostic, fileName));
                }
            }
        }
        function findSourceFile(fileName, isDefaultLib, refFile, refStart, refLength) {
            var canonicalName = host.getCanonicalFileName(fileName);
            if (ts.hasProperty(filesByName, canonicalName)) {
                return getSourceFileFromCache(fileName, canonicalName, false);
            }
            else {
                var normalizedAbsolutePath = ts.getNormalizedAbsolutePath(fileName, host.getCurrentDirectory());
                var canonicalAbsolutePath = host.getCanonicalFileName(normalizedAbsolutePath);
                if (ts.hasProperty(filesByName, canonicalAbsolutePath)) {
                    return getSourceFileFromCache(normalizedAbsolutePath, canonicalAbsolutePath, true);
                }
                var file = filesByName[canonicalName] = host.getSourceFile(fileName, options.target, function (hostErrorMessage) {
                    if (refFile) {
                        diagnostics.add(ts.createFileDiagnostic(refFile, refStart, refLength, ts.Diagnostics.Cannot_read_file_0_Colon_1, fileName, hostErrorMessage));
                    }
                    else {
                        diagnostics.add(ts.createCompilerDiagnostic(ts.Diagnostics.Cannot_read_file_0_Colon_1, fileName, hostErrorMessage));
                    }
                });
                if (file) {
                    seenNoDefaultLib = seenNoDefaultLib || file.hasNoDefaultLib;
                    filesByName[canonicalAbsolutePath] = file;
                    if (!options.noResolve) {
                        var basePath = ts.getDirectoryPath(fileName);
                        processReferencedFiles(file, basePath);
                        processImportedModules(file, basePath);
                    }
                    if (isDefaultLib) {
                        files.unshift(file);
                    }
                    else {
                        files.push(file);
                    }
                }
            }
            return file;
            function getSourceFileFromCache(fileName, canonicalName, useAbsolutePath) {
                var file = filesByName[canonicalName];
                if (file && host.useCaseSensitiveFileNames()) {
                    var sourceFileName = useAbsolutePath ? ts.getNormalizedAbsolutePath(file.fileName, host.getCurrentDirectory()) : file.fileName;
                    if (canonicalName !== sourceFileName) {
                        diagnostics.add(ts.createFileDiagnostic(refFile, refStart, refLength, ts.Diagnostics.File_name_0_differs_from_already_included_file_name_1_only_in_casing, fileName, sourceFileName));
                    }
                }
                return file;
            }
        }
        function processReferencedFiles(file, basePath) {
            ts.forEach(file.referencedFiles, function (ref) {
                var referencedFileName = ts.isRootedDiskPath(ref.fileName) ? ref.fileName : ts.combinePaths(basePath, ref.fileName);
                processSourceFile(ts.normalizePath(referencedFileName), false, file, ref.pos, ref.end);
            });
        }
        function processImportedModules(file, basePath) {
            ts.forEach(file.statements, function (node) {
                if (ts.isExternalModuleImportDeclaration(node) && ts.getExternalModuleImportDeclarationExpression(node).kind === 8) {
                    var nameLiteral = ts.getExternalModuleImportDeclarationExpression(node);
                    var moduleName = nameLiteral.text;
                    if (moduleName) {
                        var searchPath = basePath;
                        while (true) {
                            var searchName = ts.normalizePath(ts.combinePaths(searchPath, moduleName));
                            if (findModuleSourceFile(searchName + ".ts", nameLiteral) || findModuleSourceFile(searchName + ".d.ts", nameLiteral)) {
                                break;
                            }
                            var parentPath = ts.getDirectoryPath(searchPath);
                            if (parentPath === searchPath) {
                                break;
                            }
                            searchPath = parentPath;
                        }
                    }
                }
                else if (node.kind === 195 && node.name.kind === 8 && (node.flags & 2 || ts.isDeclarationFile(file))) {
                    ts.forEachChild(node.body, function (node) {
                        if (ts.isExternalModuleImportDeclaration(node) && ts.getExternalModuleImportDeclarationExpression(node).kind === 8) {
                            var nameLiteral = ts.getExternalModuleImportDeclarationExpression(node);
                            var moduleName = nameLiteral.text;
                            if (moduleName) {
                                var searchName = ts.normalizePath(ts.combinePaths(basePath, moduleName));
                                var tsFile = findModuleSourceFile(searchName + ".ts", nameLiteral);
                                if (!tsFile) {
                                    findModuleSourceFile(searchName + ".d.ts", nameLiteral);
                                }
                            }
                        }
                    });
                }
            });
            function findModuleSourceFile(fileName, nameLiteral) {
                return findSourceFile(fileName, false, file, nameLiteral.pos, nameLiteral.end - nameLiteral.pos);
            }
        }
        function verifyCompilerOptions() {
            if (!options.sourceMap && (options.mapRoot || options.sourceRoot)) {
                if (options.mapRoot) {
                    diagnostics.add(ts.createCompilerDiagnostic(ts.Diagnostics.Option_mapRoot_cannot_be_specified_without_specifying_sourcemap_option));
                }
                if (options.sourceRoot) {
                    diagnostics.add(ts.createCompilerDiagnostic(ts.Diagnostics.Option_sourceRoot_cannot_be_specified_without_specifying_sourcemap_option));
                }
                return;
            }
            var firstExternalModule = ts.forEach(files, function (f) { return ts.isExternalModule(f) ? f : undefined; });
            if (firstExternalModule && !options.module) {
                var externalModuleErrorSpan = ts.getErrorSpanForNode(firstExternalModule.externalModuleIndicator);
                var errorStart = ts.skipTrivia(firstExternalModule.text, externalModuleErrorSpan.pos);
                var errorLength = externalModuleErrorSpan.end - errorStart;
                diagnostics.add(ts.createFileDiagnostic(firstExternalModule, errorStart, errorLength, ts.Diagnostics.Cannot_compile_external_modules_unless_the_module_flag_is_provided));
            }
            if (options.outDir || options.sourceRoot || (options.mapRoot && (!options.out || firstExternalModule !== undefined))) {
                var commonPathComponents;
                ts.forEach(files, function (sourceFile) {
                    if (!(sourceFile.flags & 1024) && !ts.fileExtensionIs(sourceFile.fileName, ".js")) {
                        var sourcePathComponents = ts.getNormalizedPathComponents(sourceFile.fileName, host.getCurrentDirectory());
                        sourcePathComponents.pop();
                        if (commonPathComponents) {
                            for (var i = 0; i < Math.min(commonPathComponents.length, sourcePathComponents.length); i++) {
                                if (commonPathComponents[i] !== sourcePathComponents[i]) {
                                    if (i === 0) {
                                        diagnostics.add(ts.createCompilerDiagnostic(ts.Diagnostics.Cannot_find_the_common_subdirectory_path_for_the_input_files));
                                        return;
                                    }
                                    commonPathComponents.length = i;
                                    break;
                                }
                            }
                            if (sourcePathComponents.length < commonPathComponents.length) {
                                commonPathComponents.length = sourcePathComponents.length;
                            }
                        }
                        else {
                            commonPathComponents = sourcePathComponents;
                        }
                    }
                });
                commonSourceDirectory = ts.getNormalizedPathFromPathComponents(commonPathComponents);
                if (commonSourceDirectory) {
                    commonSourceDirectory += ts.directorySeparator;
                }
            }
            if (options.noEmit) {
                if (options.out || options.outDir) {
                    diagnostics.add(ts.createCompilerDiagnostic(ts.Diagnostics.Option_noEmit_cannot_be_specified_with_option_out_or_outDir));
                }
                if (options.declaration) {
                    diagnostics.add(ts.createCompilerDiagnostic(ts.Diagnostics.Option_noEmit_cannot_be_specified_with_option_declaration));
                }
            }
        }
    }
    ts.createProgram = createProgram;
})(ts || (ts = {}));
var ts;
(function (ts) {
    ts.optionDeclarations = [
        {
            name: "charset",
            type: "string"
        },
        {
            name: "codepage",
            type: "number"
        },
        {
            name: "declaration",
            shortName: "d",
            type: "boolean",
            description: ts.Diagnostics.Generates_corresponding_d_ts_file
        },
        {
            name: "diagnostics",
            type: "boolean"
        },
        {
            name: "emitBOM",
            type: "boolean"
        },
        {
            name: "help",
            shortName: "h",
            type: "boolean",
            description: ts.Diagnostics.Print_this_message
        },
        {
            name: "listFiles",
            type: "boolean"
        },
        {
            name: "locale",
            type: "string"
        },
        {
            name: "mapRoot",
            type: "string",
            isFilePath: true,
            description: ts.Diagnostics.Specifies_the_location_where_debugger_should_locate_map_files_instead_of_generated_locations,
            paramType: ts.Diagnostics.LOCATION
        },
        {
            name: "module",
            shortName: "m",
            type: {
                "commonjs": 1,
                "amd": 2
            },
            description: ts.Diagnostics.Specify_module_code_generation_Colon_commonjs_or_amd,
            paramType: ts.Diagnostics.KIND,
            error: ts.Diagnostics.Argument_for_module_option_must_be_commonjs_or_amd
        },
        {
            name: "noEmit",
            type: "boolean",
            description: ts.Diagnostics.Do_not_emit_outputs
        },
        {
            name: "noEmitOnError",
            type: "boolean",
            description: ts.Diagnostics.Do_not_emit_outputs_if_any_type_checking_errors_were_reported
        },
        {
            name: "noImplicitAny",
            type: "boolean",
            description: ts.Diagnostics.Raise_error_on_expressions_and_declarations_with_an_implied_any_type
        },
        {
            name: "noLib",
            type: "boolean"
        },
        {
            name: "noLibCheck",
            type: "boolean"
        },
        {
            name: "noResolve",
            type: "boolean"
        },
        {
            name: "out",
            type: "string",
            description: ts.Diagnostics.Concatenate_and_emit_output_to_single_file,
            paramType: ts.Diagnostics.FILE
        },
        {
            name: "outDir",
            type: "string",
            isFilePath: true,
            description: ts.Diagnostics.Redirect_output_structure_to_the_directory,
            paramType: ts.Diagnostics.DIRECTORY
        },
        {
            name: "preserveConstEnums",
            type: "boolean",
            description: ts.Diagnostics.Do_not_erase_const_enum_declarations_in_generated_code
        },
        {
            name: "project",
            shortName: "p",
            type: "string",
            isFilePath: true,
            description: ts.Diagnostics.Compile_the_project_in_the_given_directory,
            paramType: ts.Diagnostics.DIRECTORY
        },
        {
            name: "removeComments",
            type: "boolean",
            description: ts.Diagnostics.Do_not_emit_comments_to_output
        },
        {
            name: "sourceMap",
            type: "boolean",
            description: ts.Diagnostics.Generates_corresponding_map_file
        },
        {
            name: "sourceRoot",
            type: "string",
            isFilePath: true,
            description: ts.Diagnostics.Specifies_the_location_where_debugger_should_locate_TypeScript_files_instead_of_source_locations,
            paramType: ts.Diagnostics.LOCATION
        },
        {
            name: "suppressImplicitAnyIndexErrors",
            type: "boolean",
            description: ts.Diagnostics.Suppress_noImplicitAny_errors_for_indexing_objects_lacking_index_signatures
        },
        {
            name: "stripInternal",
            type: "boolean",
            description: ts.Diagnostics.Do_not_emit_declarations_for_code_that_has_an_internal_annotation,
            experimental: true
        },
        {
            name: "target",
            shortName: "t",
            type: { "es3": 0, "es5": 1, "es6": 2 },
            description: ts.Diagnostics.Specify_ECMAScript_target_version_Colon_ES3_default_ES5_or_ES6_experimental,
            paramType: ts.Diagnostics.VERSION,
            error: ts.Diagnostics.Argument_for_target_option_must_be_es3_es5_or_es6
        },
        {
            name: "version",
            shortName: "v",
            type: "boolean",
            description: ts.Diagnostics.Print_the_compiler_s_version
        },
        {
            name: "watch",
            shortName: "w",
            type: "boolean",
            description: ts.Diagnostics.Watch_input_files
        }
    ];
    function parseCommandLine(commandLine) {
        var options = {};
        var fileNames = [];
        var errors = [];
        var shortOptionNames = {};
        var optionNameMap = {};
        ts.forEach(ts.optionDeclarations, function (option) {
            optionNameMap[option.name.toLowerCase()] = option;
            if (option.shortName) {
                shortOptionNames[option.shortName] = option.name;
            }
        });
        parseStrings(commandLine);
        return {
            options: options,
            fileNames: fileNames,
            errors: errors
        };
        function parseStrings(args) {
            var i = 0;
            while (i < args.length) {
                var s = args[i++];
                if (s.charCodeAt(0) === 64) {
                    parseResponseFile(s.slice(1));
                }
                else if (s.charCodeAt(0) === 45) {
                    s = s.slice(s.charCodeAt(1) === 45 ? 2 : 1).toLowerCase();
                    if (ts.hasProperty(shortOptionNames, s)) {
                        s = shortOptionNames[s];
                    }
                    if (ts.hasProperty(optionNameMap, s)) {
                        var opt = optionNameMap[s];
                        if (!args[i] && opt.type !== "boolean") {
                            errors.push(ts.createCompilerDiagnostic(ts.Diagnostics.Compiler_option_0_expects_an_argument, opt.name));
                        }
                        switch (opt.type) {
                            case "number":
                                options[opt.name] = parseInt(args[i++]);
                                break;
                            case "boolean":
                                options[opt.name] = true;
                                break;
                            case "string":
                                options[opt.name] = args[i++] || "";
                                break;
                            default:
                                var map = opt.type;
                                var key = (args[i++] || "").toLowerCase();
                                if (ts.hasProperty(map, key)) {
                                    options[opt.name] = map[key];
                                }
                                else {
                                    errors.push(ts.createCompilerDiagnostic(opt.error));
                                }
                        }
                    }
                    else {
                        errors.push(ts.createCompilerDiagnostic(ts.Diagnostics.Unknown_compiler_option_0, s));
                    }
                }
                else {
                    fileNames.push(s);
                }
            }
        }
        function parseResponseFile(fileName) {
            var text = ts.sys.readFile(fileName);
            if (!text) {
                errors.push(ts.createCompilerDiagnostic(ts.Diagnostics.File_0_not_found, fileName));
                return;
            }
            var args = [];
            var pos = 0;
            while (true) {
                while (pos < text.length && text.charCodeAt(pos) <= 32)
                    pos++;
                if (pos >= text.length)
                    break;
                var start = pos;
                if (text.charCodeAt(start) === 34) {
                    pos++;
                    while (pos < text.length && text.charCodeAt(pos) !== 34)
                        pos++;
                    if (pos < text.length) {
                        args.push(text.substring(start + 1, pos));
                        pos++;
                    }
                    else {
                        errors.push(ts.createCompilerDiagnostic(ts.Diagnostics.Unterminated_quoted_string_in_response_file_0, fileName));
                    }
                }
                else {
                    while (text.charCodeAt(pos) > 32)
                        pos++;
                    args.push(text.substring(start, pos));
                }
            }
            parseStrings(args);
        }
    }
    ts.parseCommandLine = parseCommandLine;
    function readConfigFile(fileName) {
        try {
            var text = ts.sys.readFile(fileName);
            return /\S/.test(text) ? JSON.parse(text) : {};
        }
        catch (e) {
        }
    }
    ts.readConfigFile = readConfigFile;
    function parseConfigFile(json, basePath) {
        var errors = [];
        return {
            options: getCompilerOptions(),
            fileNames: getFiles(),
            errors: errors
        };
        function getCompilerOptions() {
            var options = {};
            var optionNameMap = {};
            ts.forEach(ts.optionDeclarations, function (option) {
                optionNameMap[option.name] = option;
            });
            var jsonOptions = json["compilerOptions"];
            if (jsonOptions) {
                for (var id in jsonOptions) {
                    if (ts.hasProperty(optionNameMap, id)) {
                        var opt = optionNameMap[id];
                        var optType = opt.type;
                        var value = jsonOptions[id];
                        var expectedType = typeof optType === "string" ? optType : "string";
                        if (typeof value === expectedType) {
                            if (typeof optType !== "string") {
                                var key = value.toLowerCase();
                                if (ts.hasProperty(optType, key)) {
                                    value = optType[key];
                                }
                                else {
                                    errors.push(ts.createCompilerDiagnostic(opt.error));
                                    value = 0;
                                }
                            }
                            if (opt.isFilePath) {
                                value = ts.normalizePath(ts.combinePaths(basePath, value));
                            }
                            options[opt.name] = value;
                        }
                        else {
                            errors.push(ts.createCompilerDiagnostic(ts.Diagnostics.Compiler_option_0_requires_a_value_of_type_1, id, expectedType));
                        }
                    }
                    else {
                        errors.push(ts.createCompilerDiagnostic(ts.Diagnostics.Unknown_compiler_option_0, id));
                    }
                }
            }
            return options;
        }
        function getFiles() {
            var files = [];
            if (ts.hasProperty(json, "files")) {
                if (json["files"] instanceof Array) {
                    var files = ts.map(json["files"], function (s) { return ts.combinePaths(basePath, s); });
                }
            }
            else {
                var sysFiles = ts.sys.readDirectory(basePath, ".ts");
                for (var i = 0; i < sysFiles.length; i++) {
                    var name = sysFiles[i];
                    if (!ts.fileExtensionIs(name, ".d.ts") || !ts.contains(sysFiles, name.substr(0, name.length - 5) + ".ts")) {
                        files.push(name);
                    }
                }
            }
            return files;
        }
    }
    ts.parseConfigFile = parseConfigFile;
})(ts || (ts = {}));
var ts;
(function (ts) {
    var version = "1.5.0.0";
    function validateLocaleAndSetLanguage(locale, errors) {
        var matchResult = /^([a-z]+)([_\-]([a-z]+))?$/.exec(locale.toLowerCase());
        if (!matchResult) {
            errors.push(ts.createCompilerDiagnostic(ts.Diagnostics.Locale_must_be_of_the_form_language_or_language_territory_For_example_0_or_1, 'en', 'ja-jp'));
            return false;
        }
        var language = matchResult[1];
        var territory = matchResult[3];
        if (!trySetLanguageAndTerritory(language, territory, errors) && !trySetLanguageAndTerritory(language, undefined, errors)) {
            errors.push(ts.createCompilerDiagnostic(ts.Diagnostics.Unsupported_locale_0, locale));
            return false;
        }
        return true;
    }
    function trySetLanguageAndTerritory(language, territory, errors) {
        var compilerFilePath = ts.normalizePath(ts.sys.getExecutingFilePath());
        var containingDirectoryPath = ts.getDirectoryPath(compilerFilePath);
        var filePath = ts.combinePaths(containingDirectoryPath, language);
        if (territory) {
            filePath = filePath + "-" + territory;
        }
        filePath = ts.sys.resolvePath(ts.combinePaths(filePath, "diagnosticMessages.generated.json"));
        if (!ts.sys.fileExists(filePath)) {
            return false;
        }
        try {
            var fileContents = ts.sys.readFile(filePath);
        }
        catch (e) {
            errors.push(ts.createCompilerDiagnostic(ts.Diagnostics.Unable_to_open_file_0, filePath));
            return false;
        }
        try {
            ts.localizedDiagnosticMessages = JSON.parse(fileContents);
        }
        catch (e) {
            errors.push(ts.createCompilerDiagnostic(ts.Diagnostics.Corrupted_locale_file_0, filePath));
            return false;
        }
        return true;
    }
    function countLines(program) {
        var count = 0;
        ts.forEach(program.getSourceFiles(), function (file) {
            count += ts.getLineAndCharacterOfPosition(file, file.end).line;
        });
        return count;
    }
    function getDiagnosticText(message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var diagnostic = ts.createCompilerDiagnostic.apply(undefined, arguments);
        return diagnostic.messageText;
    }
    function reportDiagnostic(diagnostic) {
        var output = "";
        if (diagnostic.file) {
            var loc = ts.getLineAndCharacterOfPosition(diagnostic.file, diagnostic.start);
            output += diagnostic.file.fileName + "(" + loc.line + "," + loc.character + "): ";
        }
        var category = ts.DiagnosticCategory[diagnostic.category].toLowerCase();
        output += category + " TS" + diagnostic.code + ": " + ts.flattenDiagnosticMessageText(diagnostic.messageText, ts.sys.newLine) + ts.sys.newLine;
        ts.sys.write(output);
    }
    function reportDiagnostics(diagnostics) {
        for (var i = 0; i < diagnostics.length; i++) {
            reportDiagnostic(diagnostics[i]);
        }
    }
    function padLeft(s, length) {
        while (s.length < length) {
            s = " " + s;
        }
        return s;
    }
    function padRight(s, length) {
        while (s.length < length) {
            s = s + " ";
        }
        return s;
    }
    function reportStatisticalValue(name, value) {
        ts.sys.write(padRight(name + ":", 12) + padLeft(value.toString(), 10) + ts.sys.newLine);
    }
    function reportCountStatistic(name, count) {
        reportStatisticalValue(name, "" + count);
    }
    function reportTimeStatistic(name, time) {
        reportStatisticalValue(name, (time / 1000).toFixed(2) + "s");
    }
    function isJSONSupported() {
        return typeof JSON === "object" && typeof JSON.parse === "function";
    }
    function findConfigFile() {
        var searchPath = ts.normalizePath(ts.sys.getCurrentDirectory());
        var fileName = "tsconfig.json";
        while (true) {
            if (ts.sys.fileExists(fileName)) {
                return fileName;
            }
            var parentPath = ts.getDirectoryPath(searchPath);
            if (parentPath === searchPath) {
                break;
            }
            searchPath = parentPath;
            fileName = "../" + fileName;
        }
        return undefined;
    }
    function executeCommandLine(args) {
        var commandLine = ts.parseCommandLine(args);
        var configFileName;
        var configFileWatcher;
        var cachedProgram;
        var rootFileNames;
        var compilerOptions;
        var compilerHost;
        var hostGetSourceFile;
        var timerHandle;
        if (commandLine.options.locale) {
            if (!isJSONSupported()) {
                reportDiagnostic(ts.createCompilerDiagnostic(ts.Diagnostics.The_current_host_does_not_support_the_0_option, "--locale"));
                return ts.sys.exit(1);
            }
            validateLocaleAndSetLanguage(commandLine.options.locale, commandLine.errors);
        }
        if (commandLine.errors.length > 0) {
            reportDiagnostics(commandLine.errors);
            return ts.sys.exit(1);
        }
        if (commandLine.options.version) {
            reportDiagnostic(ts.createCompilerDiagnostic(ts.Diagnostics.Version_0, version));
            return ts.sys.exit(0);
        }
        if (commandLine.options.help) {
            printVersion();
            printHelp();
            return ts.sys.exit(0);
        }
        if (commandLine.options.project) {
            if (!isJSONSupported()) {
                reportDiagnostic(ts.createCompilerDiagnostic(ts.Diagnostics.The_current_host_does_not_support_the_0_option, "--project"));
                return ts.sys.exit(1);
            }
            configFileName = ts.normalizePath(ts.combinePaths(commandLine.options.project, "tsconfig.json"));
            if (commandLine.fileNames.length !== 0) {
                reportDiagnostic(ts.createCompilerDiagnostic(ts.Diagnostics.Option_project_cannot_be_mixed_with_source_files_on_a_command_line));
                return ts.sys.exit(1);
            }
        }
        else if (commandLine.fileNames.length === 0 && isJSONSupported()) {
            configFileName = findConfigFile();
        }
        if (commandLine.fileNames.length === 0 && !configFileName) {
            printVersion();
            printHelp();
            return ts.sys.exit(0);
        }
        if (commandLine.options.watch) {
            if (!ts.sys.watchFile) {
                reportDiagnostic(ts.createCompilerDiagnostic(ts.Diagnostics.The_current_host_does_not_support_the_0_option, "--watch"));
                return ts.sys.exit(1);
            }
            if (configFileName) {
                configFileWatcher = ts.sys.watchFile(configFileName, configFileChanged);
            }
        }
        performCompilation();
        function performCompilation() {
            if (!cachedProgram) {
                if (configFileName) {
                    var configObject = ts.readConfigFile(configFileName);
                    if (!configObject) {
                        reportDiagnostic(ts.createCompilerDiagnostic(ts.Diagnostics.Unable_to_open_file_0, configFileName));
                        return ts.sys.exit(1);
                    }
                    var configParseResult = ts.parseConfigFile(configObject, ts.getDirectoryPath(configFileName));
                    if (configParseResult.errors.length > 0) {
                        reportDiagnostics(configParseResult.errors);
                        return ts.sys.exit(1);
                    }
                    rootFileNames = configParseResult.fileNames;
                    compilerOptions = ts.extend(commandLine.options, configParseResult.options);
                }
                else {
                    rootFileNames = commandLine.fileNames;
                    compilerOptions = commandLine.options;
                }
                compilerHost = ts.createCompilerHost(compilerOptions);
                hostGetSourceFile = compilerHost.getSourceFile;
                compilerHost.getSourceFile = getSourceFile;
            }
            var compileResult = compile(rootFileNames, compilerOptions, compilerHost);
            if (!commandLine.options.watch) {
                return ts.sys.exit(compileResult.exitStatus);
            }
            setCachedProgram(compileResult.program);
            reportDiagnostic(ts.createCompilerDiagnostic(ts.Diagnostics.Compilation_complete_Watching_for_file_changes));
        }
        function getSourceFile(fileName, languageVersion, onError) {
            if (cachedProgram) {
                var sourceFile = cachedProgram.getSourceFile(fileName);
                if (sourceFile && sourceFile.fileWatcher) {
                    return sourceFile;
                }
            }
            var sourceFile = hostGetSourceFile(fileName, languageVersion, onError);
            if (sourceFile && commandLine.options.watch) {
                sourceFile.fileWatcher = ts.sys.watchFile(sourceFile.fileName, function () { return sourceFileChanged(sourceFile); });
            }
            return sourceFile;
        }
        function setCachedProgram(program) {
            if (cachedProgram) {
                var newSourceFiles = program ? program.getSourceFiles() : undefined;
                ts.forEach(cachedProgram.getSourceFiles(), function (sourceFile) {
                    if (!(newSourceFiles && ts.contains(newSourceFiles, sourceFile))) {
                        if (sourceFile.fileWatcher) {
                            sourceFile.fileWatcher.close();
                            sourceFile.fileWatcher = undefined;
                        }
                    }
                });
            }
            cachedProgram = program;
        }
        function sourceFileChanged(sourceFile) {
            sourceFile.fileWatcher = undefined;
            startTimer();
        }
        function configFileChanged() {
            setCachedProgram(undefined);
            startTimer();
        }
        function startTimer() {
            if (timerHandle) {
                clearTimeout(timerHandle);
            }
            timerHandle = setTimeout(recompile, 250);
        }
        function recompile() {
            timerHandle = undefined;
            reportDiagnostic(ts.createCompilerDiagnostic(ts.Diagnostics.File_change_detected_Starting_incremental_compilation));
            performCompilation();
        }
    }
    ts.executeCommandLine = executeCommandLine;
    function compile(fileNames, compilerOptions, compilerHost) {
        ts.parseTime = 0;
        ts.bindTime = 0;
        ts.checkTime = 0;
        ts.emitTime = 0;
        var start = new Date().getTime();
        var program = ts.createProgram(fileNames, compilerOptions, compilerHost);
        var exitStatus = compileProgram();
        var end = start - new Date().getTime();
        if (compilerOptions.listFiles) {
            ts.forEach(program.getSourceFiles(), function (file) {
                ts.sys.write(file.fileName + ts.sys.newLine);
            });
        }
        if (compilerOptions.diagnostics) {
            var memoryUsed = ts.sys.getMemoryUsage ? ts.sys.getMemoryUsage() : -1;
            reportCountStatistic("Files", program.getSourceFiles().length);
            reportCountStatistic("Lines", countLines(program));
            reportCountStatistic("Nodes", program.getNodeCount());
            reportCountStatistic("Identifiers", program.getIdentifierCount());
            reportCountStatistic("Symbols", program.getSymbolCount());
            reportCountStatistic("Types", program.getTypeCount());
            if (memoryUsed >= 0) {
                reportStatisticalValue("Memory used", Math.round(memoryUsed / 1000) + "K");
            }
            reportTimeStatistic("Parse time", ts.parseTime);
            reportTimeStatistic("Bind time", ts.bindTime);
            reportTimeStatistic("Check time", ts.checkTime);
            reportTimeStatistic("Emit time", ts.emitTime);
            reportTimeStatistic("Total time", start - end);
        }
        return { program: program, exitStatus: exitStatus };
        function compileProgram() {
            var diagnostics = program.getSyntacticDiagnostics();
            reportDiagnostics(diagnostics);
            if (diagnostics.length === 0) {
                var diagnostics = program.getGlobalDiagnostics();
                reportDiagnostics(diagnostics);
                if (diagnostics.length === 0) {
                    var diagnostics = program.getSemanticDiagnostics();
                    reportDiagnostics(diagnostics);
                }
            }
            if (compilerOptions.noEmit) {
                return diagnostics.length ? 1 : 0;
            }
            var emitOutput = program.emit();
            reportDiagnostics(emitOutput.diagnostics);
            if (emitOutput.emitSkipped) {
                return 1;
            }
            if (diagnostics.length > 0 || emitOutput.diagnostics.length > 0) {
                2;
            }
            return 0;
        }
    }
    function printVersion() {
        ts.sys.write(getDiagnosticText(ts.Diagnostics.Version_0, version) + ts.sys.newLine);
    }
    function printHelp() {
        var output = "";
        var syntaxLength = getDiagnosticText(ts.Diagnostics.Syntax_Colon_0, "").length;
        var examplesLength = getDiagnosticText(ts.Diagnostics.Examples_Colon_0, "").length;
        var marginLength = Math.max(syntaxLength, examplesLength);
        var syntax = makePadding(marginLength - syntaxLength);
        syntax += "tsc [" + getDiagnosticText(ts.Diagnostics.options) + "] [" + getDiagnosticText(ts.Diagnostics.file) + " ...]";
        output += getDiagnosticText(ts.Diagnostics.Syntax_Colon_0, syntax);
        output += ts.sys.newLine + ts.sys.newLine;
        var padding = makePadding(marginLength);
        output += getDiagnosticText(ts.Diagnostics.Examples_Colon_0, makePadding(marginLength - examplesLength) + "tsc hello.ts") + ts.sys.newLine;
        output += padding + "tsc --out file.js file.ts" + ts.sys.newLine;
        output += padding + "tsc @args.txt" + ts.sys.newLine;
        output += ts.sys.newLine;
        output += getDiagnosticText(ts.Diagnostics.Options_Colon) + ts.sys.newLine;
        var optsList = ts.filter(ts.optionDeclarations.slice(), function (v) { return !v.experimental; });
        optsList.sort(function (a, b) { return ts.compareValues(a.name.toLowerCase(), b.name.toLowerCase()); });
        var marginLength = 0;
        var usageColumn = [];
        var descriptionColumn = [];
        for (var i = 0; i < optsList.length; i++) {
            var option = optsList[i];
            if (!option.description) {
                continue;
            }
            var usageText = " ";
            if (option.shortName) {
                usageText += "-" + option.shortName;
                usageText += getParamType(option);
                usageText += ", ";
            }
            usageText += "--" + option.name;
            usageText += getParamType(option);
            usageColumn.push(usageText);
            descriptionColumn.push(getDiagnosticText(option.description));
            marginLength = Math.max(usageText.length, marginLength);
        }
        var usageText = " @<" + getDiagnosticText(ts.Diagnostics.file) + ">";
        usageColumn.push(usageText);
        descriptionColumn.push(getDiagnosticText(ts.Diagnostics.Insert_command_line_options_and_files_from_a_file));
        marginLength = Math.max(usageText.length, marginLength);
        for (var i = 0; i < usageColumn.length; i++) {
            var usage = usageColumn[i];
            var description = descriptionColumn[i];
            output += usage + makePadding(marginLength - usage.length + 2) + description + ts.sys.newLine;
        }
        ts.sys.write(output);
        return;
        function getParamType(option) {
            if (option.paramType !== undefined) {
                return " " + getDiagnosticText(option.paramType);
            }
            return "";
        }
        function makePadding(paddingLength) {
            return Array(paddingLength + 1).join(" ");
        }
    }
})(ts || (ts = {}));
ts.executeCommandLine(ts.sys.args);
