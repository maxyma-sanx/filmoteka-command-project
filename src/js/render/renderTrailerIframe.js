export default function renderTrailer(data) {
  // Знаходимо лише офіційний трейлер :)
  const movieID = data.find(item => item.name === 'Official Trailer');

  return `<iframe
            class="youtube";
            width="782"
            height="478"
            src="https://www.youtube.com/embed/${movieID.key}"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="trailer hidden-trailer">
          </iframe>`;
}
