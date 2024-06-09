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
exports.deleteClaim = exports.updateClaim = exports.getClaimById = exports.createClaim = void 0;
const claimModel_1 = require("../models/claimModel");
function createClaim(claimData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const claim = yield claimModel_1.Claims.create(claimData);
            return claim;
        }
        catch (error) {
            console.error('error', error);
            throw error;
        }
    });
}
exports.createClaim = createClaim;
function getClaimById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const claim = yield claimModel_1.Claims.findByPk(id);
            if (!claim) {
                throw new Error('not found');
            }
            return claim;
        }
        catch (error) {
            console.error('error', error);
            throw error;
        }
    });
}
exports.getClaimById = getClaimById;
function updateClaim(id, updateData) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const claim = yield claimModel_1.Claims.findByPk(id);
            if (!claim) {
                throw new Error('not found');
            }
            yield claim.update(updateData);
            return claim;
        }
        catch (error) {
            console.error('error while updating', error);
            throw error;
        }
    });
}
exports.updateClaim = updateClaim;
function deleteClaim(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const claim = yield claimModel_1.Claims.findByPk(id);
            if (!claim) {
                throw new Error('not found');
            }
            yield claim.destroy();
            return { message: 'deleted successfully' };
        }
        catch (error) {
            console.error('error while deleting', error);
            throw error;
        }
    });
}
exports.deleteClaim = deleteClaim;
//# sourceMappingURL=claimsService.js.map