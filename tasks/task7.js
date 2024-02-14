var TransferStatus;
(function (TransferStatus) {
    TransferStatus["Pending"] = "pending";
    TransferStatus["Rejected"] = "rejected";
    TransferStatus["Completed"] = "completed";
})(TransferStatus || (TransferStatus = {}));
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["NotFound"] = "Not found: 404";
    ErrorMessages["NotEnoughSpace"] = "Not enough space: 507";
    ErrorMessages["Forbidden"] = "Forbidden: 403";
})(ErrorMessages || (ErrorMessages = {}));
var SingleFileTransfer = /** @class */ (function () {
    function SingleFileTransfer(status) {
        var _this = this;
        this.checkTransferStatus = function () {
            return _this.transferStatus;
        };
        this.stop = function (reason) {
            return "Transfer stopped, reason: ".concat(reason, ", Date: ").concat(new Date().toLocaleString());
        };
        this.makeError = function () {
            return "Status: ".concat(TransferStatus.Rejected, ", error message: ").concat(ErrorMessages.Forbidden);
        };
        this.transferStatus = status;
    }
    SingleFileTransfer.prototype.start = function (p, d) {
        return "Transfer started";
    };
    return SingleFileTransfer;
}());
var transfer = new SingleFileTransfer(TransferStatus.Pending);
console.log(transfer.checkTransferStatus());
console.log(transfer.stop("Test"));
console.log(transfer.makeError());
