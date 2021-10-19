const Photo = require("../models/Photo");

exports.getAboutPage = (req, res) => {
  res.render("about", {
    page_name: "about",
  });
};

exports.getAddPage = (req, res) => {
  res.render("add", {
    page_name: "add",
  });
};
exports.getContactPage = (req, res) => {
  res.render("contact", {
    page_name: "contact",
  });
};
exports.getIndexPage = (req, res) => {
  res.render("index", {
    page_name: "index",
  });
};

exports.getServicesPage = (req, res) => {
  res.render("services", {
    page_name: "services",
  });
};

exports.getTeamPage = (req, res) => {
  res.render("team", {
    page_name: "team",
  });
};

exports.getEditPage = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  res.render("edit", {
    photo,
  });
};
