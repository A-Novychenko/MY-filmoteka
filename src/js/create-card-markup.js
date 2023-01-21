export function createCardMurkub(arr) {
  return arr.reduce((acc, el) => {
    acc +
      `<div class="card">
            <a href="" class="card__link">
                <div class="card__img"></div>
                <div class="card__info">
                    <h2 class="card__title"></h2>
                    <p class="card__genries"></p>
                    <p class="card__date"></p>
                    <p class="card__rating"></p>
                </div>
            </a>
        </div>`;
  }, '');
}
