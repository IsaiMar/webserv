const miriamRoute = (req, res) => {
    res.send("Miriam Mar");
};

const moroniRoute = (req, res) => {
    res.send("Moroni Mar");
};

module.exports = {
    miriamRoute,
    moroniRoute,
};