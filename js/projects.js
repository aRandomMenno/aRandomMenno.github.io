const url = currentLang === "en" ? "../json/projects.json" : currentLang === "nl" ? "../../json/projects.json" : "../json/projects.json";

const fetchProjects = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response not ok: " + response.status + ", " + response.statusText);
    }
    const projects = await response.json();
    return projects;
  } catch (error) {
    console.error("There was a problem with the fetch operation: ", error);
    throw error;
  }
}

const displayProjects = async (projectsData) => {
  const projectsContainer = document.querySelector(".projects-display");
  projectsContainer.innerHTML = "";

  for (let i = 0; i < projectsData.length; i += 2) {
    const section = document.createElement("section");
    section.className = "section-flex";

    const leftProject = projectsData[i];
    const leftDiv = await createProjectDiv(leftProject, currentLang, "left");
    section.appendChild(leftDiv);

    if (i + 1 < projectsData.length) {
      const rightProject = projectsData[i + 1];
      const rightDiv = await createProjectDiv(rightProject, currentLang, "right");
      section.appendChild(rightDiv);
    }

    projectsContainer.appendChild(section);
  }
}

const createProjectDiv = async (project, lang, position) => {
  const div = document.createElement("div");
  div.className = position;

  const h2 = document.createElement("h2");
  h2.textContent = project.title[lang] || project.title["en"];
  div.appendChild(h2);

  const srcAndStackDiv = document.createElement("div");
  srcAndStackDiv.className = "src-and-stack";

  const srcSpan = document.createElement("span");
  srcSpan.className = "src-code";
  srcSpan.innerHTML = `The <a href="${project.src}" target="_blank" class="link underline-anim">source code</a>`;
  srcAndStackDiv.appendChild(srcSpan);

  const stackSpan = document.createElement("span");
  stackSpan.className = "stack";
  project.langs.forEach(lang => {
    const img = document.createElement("img");
    img.src = `../icons/${lang}.svg`;
    img.alt = `${lang.charAt(0).toUpperCase() + lang.slice(1)} icon`;
    img.className = "tech-icon";
    stackSpan.appendChild(img);
  });
  srcAndStackDiv.appendChild(stackSpan);
  div.appendChild(srcAndStackDiv);

  const p = document.createElement("p");
  p.innerHTML = project.descriptions[lang] || project.descriptions["en"];
  div.appendChild(p);

  return div;
}

fetchProjects()
  .then(projects => displayProjects(projects))
  .catch(error => {
    if (currentLang === "nl") {
      document.querySelector(".projects-display").innerHTML = `<p class="danger">Gefaald om projecten te laten zien omdat: ${error}</p>`;
    } else {
      document.querySelector(".projects-display").innerHTML = `<p class="danger">Failed to show project due to: ${error}</p>`;
    }
  });