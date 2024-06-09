"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClaimE = exports.updateClaimE = exports.getClaimByIdE = exports.createClaimE = void 0;
const claimsService_1 = require("../services/claimsService");
function createClaimE(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const claimData = req.body;
            const claim = yield (0, claimsService_1.createClaim)(claimData);
            res.status(201).json(claim);
        }
        catch (error) {
            console.error('error while creating', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.createClaimE = createClaimE;
function getClaimByIdE(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const claim = yield (0, claimsService_1.getClaimById)(id);
            res.status(200).json(claim);
        }
        catch (error) {
            console.error('error while getting', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.getClaimByIdE = getClaimByIdE;
function updateClaimE(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const updateData = req.body;
            const claim = yield (0, claimsService_1.updateClaim)(id, updateData);
            res.status(200).json(claim);
        }
        catch (error) {
            console.error('error while updating', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.updateClaimE = updateClaimE;
function deleteClaimE(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const result = yield (0, claimsService_1.deleteClaim)(id);
            res.status(200).json(result);
        }
        catch (error) {
            console.error('error while deleting', error);
            res.status(500).json({ error: 'internal server error' });
        }
    });
}
exports.deleteClaimE = deleteClaimE;
//# sourceMappingURL=claimsController.js.map