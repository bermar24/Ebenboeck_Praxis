document.addEventListener("DOMContentLoaded", function () {
    const reviews = [
        {
            name: "Joaquin BM",
            stars: "★★★★★",
            date: "vor 4 Monaten",
            text: "Sehr kompetente und professionelle Physiotherapeutin! Sie hat sich die Zeit genommen, mir alles genau zu erklären und mich auf dem Weg der Genesung zu begleiten. Sehr angenehme Atmosphäre. Definitiv empfehlenswert!"
        },
        {
            name: "Roksi Roxy",
            stars: "★★★★★",
            date: "vor 2 Wochen",
            text: "Ich kann meine Physiotherapeutin Janine nur in den höchsten Tönen loben. Sie ist eine unglaublich einfühlsame und empathische Person, die sich stets Zeit für ihre Patient*innen nimmt..."
        },
        {
            name: "Marc",
            stars: "★★★★★",
            date: "vor 3 Monaten",
            text: "Janine nimmt sich immer viel Zeit um die Probleme ihrer Patienten zu erkennen. Die Terminabsprache ist unkompliziert. Sie schafft es, den eigenen Körper verständlich näherzubringen..."
        },
        {
            name: "Fave L.",
            stars: "★★★★★",
            date: "vor 3 Monaten",
            text: "Ich war nach meiner Kreuzband-Operation zur Physiotherapie und Lymphdrainage für längere Zeit bei Janine in Behandlung. Ich habe mich immer sehr gut aufgehoben gefühlt..."
        },
        {
            name: "Erik",
            stars: "★★★★★",
            date: "vor 3 Wochen",
            text: "Frau Ebenböck nimmt sich die Zeit um die Probleme Ihrer Patienten zu erkennen, und trifft bei der Behandlung immer die richtigen Triggerpunkte. Das hat mir bei der Genesung sehr geholfen!"
        }
    ];

    let currentReview = 0;
    const reviewContent = document.getElementById("review-content");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");

    function updateReview(index) {
        reviewContent.innerHTML = `
            <p class="review-name">${reviews[index].name}</p>
            <div class="review-stars">${reviews[index].stars}</div>
            <p class="review-date">${reviews[index].date}</p>
            <p class="review-text">${reviews[index].text}</p>
        `;
    }

    prevBtn.addEventListener("click", function () {
        currentReview = (currentReview - 1 + reviews.length) % reviews.length;
        updateReview(currentReview);
    });

    nextBtn.addEventListener("click", function () {
        currentReview = (currentReview + 1) % reviews.length;
        updateReview(currentReview);
    });
});
