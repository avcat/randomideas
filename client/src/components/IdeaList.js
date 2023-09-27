import IdeasAPI from '../services/IdeasAPI';

class IdeaList {
  constructor() {
    this._ideaListEL = document.querySelector('#idea-list');
    this._ideas = [];
    this.getIdeas();
  }

  async getIdeas() {
    try {
      const response = await IdeasAPI.getIdeas();
      this._ideas = response.data.data;
      this.render();
    } catch (err) {
      console.error(err);
    }
  }

  addIdeaToFront(idea) {
    this._ideas.push(idea);
    this.render();
  }

  render() {
    if (!this._ideaListEL) {
      return `<strong>Could not find #idea-list</strong>`;
    }

    const ideasHtml = this._ideas
      .map((idea) => {
        return `
        <div class="card">
          <button class="delete"><i class="fas fa-times"></i></button>
          <h3>
            ${idea.text}
          </h3>
          <p class="tag tag-${idea.tag.toLowerCase()}">
            ${idea.tag}
          </p>
          <p>
            Posted on <span class="date">${idea.date}</span> by
            <span class="author">${idea.username}</span>
          </p>
        </div>
      `;
      })
      .join('');

    this._ideaListEL.innerHTML = ideasHtml;
  }
}

export default IdeaList;
