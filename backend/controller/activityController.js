const { Activity } = require("../models");
async function createActivity(subject, description) {
  try {
    const newActivity = await Activity.create({
      subject: subject,
      description: description,
    });
    console.log("Activity created: ", newActivity.activitiesNo);
    return newActivity;
  } catch (error) {
    console.error("Error creating activity: ", error);
  }
}
exports.createActivity = async (req, res) => {
  const { body } = req;
  console.log(body);
  const newActivity = await createActivity(body.subject, body.description);
  if (newActivity) {
    res.status(200).json({ message: "Activity created successfully." });
  } else {
    res.status(200).json({ message: "Problem to created Activity" });
  }
};

exports.updateActivity = async (req, res) => {
  const { body } = req;
  console.log(body);
  const dataActivity = await Activity.findByPk(body.id);
  if (dataActivity != null) {
    const updated = await dataActivity.update(body.data);
    if (updated) {
      res
        .status(200)
        .json({ message: "Update successfully.", data: dataActivity });
    } else {
      res.status(200).json({ message: "Problem to Update" });
    }
  } else {
    res.status(200).json({ message: "data not found" });
  }
};
