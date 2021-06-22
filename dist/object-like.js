import { stampColumns as masterStamp } from ".";
export const stamp = (field, obj) => {
    return {
        field,
        children: masterStamp(obj)
    };
};
//# sourceMappingURL=object-like.js.map