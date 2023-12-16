"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utilities/utils");
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    db: {
        connectionString: (0, utils_1.getString)(process.env.DB_CONNECTION),
    },
    jwt: {
        privateKey: (0, utils_1.getString)(process.env.JWT_PRIVATE_KEY || ''),
        publicKey: (0, utils_1.getString)(process.env.JWT_PUBLIC_KEY || ''),
        ttl: 5000,
    },
});
//# sourceMappingURL=config.js.map