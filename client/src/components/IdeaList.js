class IdeaList {
  constructor() {
    this._ideaListEL = document.querySelector('#idea-list');
    this._ideas = [
      {
        id: 1,
        text: 'Idea 1',
        tag: 'Business',
        username: 'John',
        date: '02/01/2023',
      },
      {
        id: 2,
        text: 'Idea 2',
        tag: 'Technology',
        username: 'Joe',
        date: '02/02/2023',
      },
      {
        id: 3,
        text: 'Idea 3',
        tag: 'Education',
        username: 'Mike',
        date: '02/03/2023',
      },
    ];
  }

  render() {
    this._ideaListEL.innerHTML = this._ideas
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
  }
}

export default IdeaList;
