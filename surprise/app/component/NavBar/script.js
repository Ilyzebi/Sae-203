let templateFile = await fetch("./component/NavBar/template.html");
let template = await templateFile.text();

let NavBar = {};

NavBar.format = function (hAbout, hHome, hProfiles, activeProfile) {
  let html = template;
  html = html.replace("{{hAbout}}", hAbout);
  html = html.replace("{{hHome}}", hHome);
  html = html.replace("{{hProfiles}}", hProfiles);
  html = html.replace("{{activeProfile}}", activeProfile);
  return html;
};

export { NavBar };
