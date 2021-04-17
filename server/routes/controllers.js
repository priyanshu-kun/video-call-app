const { saveCallId, getCallId } = require("./models");

module.exports = {
    saveCallId: async (req, res) => {
        try {
            const { id, signalData } = req.body;
            const data = await saveCallId(id, signalData);
            console.data(data);
            res.status(200).send({ success: true });
        }
        catch (e) {
            req.status(400).send(e.message);
        }
    },
    getCallId: async (req, res) => {
        try {
            const { id } = req.params;
            const code = await getCallId(id);
            console.log(code);
            res.status(200).send({ ...code, success: true })
        }
        catch (e) {
            res.status(400).send(e.message);
        }
    }
}