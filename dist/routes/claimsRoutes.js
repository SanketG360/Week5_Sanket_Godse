"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.claimsRoutes = void 0;
const express_1 = require("express");
const claimsController_1 = require("../controllers/claimsController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = (0, express_1.Router)();
exports.claimsRoutes = router;
router.post('/claims', authMiddleware_1.default, claimsController_1.createClaimE);
router.get('/claims/:id', authMiddleware_1.default, claimsController_1.getClaimByIdE);
router.put('/claims/:id', authMiddleware_1.default, claimsController_1.updateClaimE);
router.delete('/claims/:id', authMiddleware_1.default, claimsController_1.deleteClaimE);
//# sourceMappingURL=claimsRoutes.js.map