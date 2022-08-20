console.clear();

export default  characterCard()


    characterCard.forEach(character => {
      const listItem = document.createElement('li');
      listItem.textContent = character.name;
      listItem.append(listItem);
      const img = document.createElement('img');
      img.src = character.image;
      img.classList.add('character');
      listItem.prepend(img);


      
    });