function toThousand(n){
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
module.exports = toThousand;

