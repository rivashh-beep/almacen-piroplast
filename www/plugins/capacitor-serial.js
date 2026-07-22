var capacitorSerial = (function (exports, core) {
    'use strict';

    exports.SerialDriverEnum = void 0;
    (function (SerialDriverEnum) {
        SerialDriverEnum["FTDI_SERIAL_DRIVER"] = "FtdiSerialDriver";
        SerialDriverEnum["CDC_ACM_SERIAL_DRIVER"] = "CdcAcmSerialDriver";
        SerialDriverEnum["CP21XX_SERIAL_DRIVER"] = "Cp21xxSerialDriver";
        SerialDriverEnum["PROLIFIC_SERIAL_DRIVER"] = "ProlificSerialDriver";
        SerialDriverEnum["CH34X_SERIAL_DRIVER"] = "Ch34xSerialDriver";
    })(exports.SerialDriverEnum || (exports.SerialDriverEnum = {}));
    exports.SerialError = void 0;
    (function (SerialError) {
        SerialError["UNKNOWN_DRIVER_ERROR"] = "UNKNOWN_DRIVER_ERROR";
        SerialError["NO_DEVICE_ERROR"] = "NO_DEVICE_ERROR";
        SerialError["PARAMETER_ERROR"] = "PARAMETER_ERROR";
        SerialError["CONNECTION_ERROR"] = "CONNECTION_ERROR";
        SerialError["PORT_CLOSED_ERROR"] = "PORT_CLOSED_ERROR";
    })(exports.SerialError || (exports.SerialError = {}));

    const Serial = core.registerPlugin('Serial', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.SerialWeb()),
    });

    class SerialWeb extends core.WebPlugin {
        closeConnection() {
            throw this.unimplemented('Not implemented on web.');
        }
        openConnection(_) {
            throw this.unimplemented('Not implemented on web.');
        }
        read(_) {
            throw this.unimplemented('Not implemented on web.');
        }
        registerReadCallback(_) {
            throw this.unimplemented('Not implemented on web.');
        }
        requestSerialPermissions(_) {
            throw this.unimplemented('Not implemented on web.');
        }
        unregisterReadCallback() {
            throw this.unimplemented('Not implemented on web.');
        }
        write(_) {
            throw this.unimplemented('Not implemented on web.');
        }
        writeHexadecimal(_) {
            throw this.unimplemented('Not implemented on web.');
        }
        registerReadRawCallback(_) {
            return Promise.resolve("");
        }
        unregisterReadRawCallback() {
            return Promise.resolve(undefined);
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        SerialWeb: SerialWeb
    });

    exports.Serial = Serial;

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
