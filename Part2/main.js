class Shortener {
  constructor() {
    const main = document.createElement("div");
    const title = document.createElement("h3");
    title.innerText = "Link Shortener";

    main.appendchild(title);

    this.main = main;
  }

  html() {
    return this.main;
  }
}
