import "./Ethiopia.css";
import oryx from "../../assets/travel.jpg";
import jegol from "../../assets/jegol.jpg";
import eruption from "../../assets/eruption.jpg";
import ethiopia from "../../assets/ethiopia.jpg";
import africa from "../../assets/african-woman.gif";

const Ethiopia = () => {
  return (
    <div className="ethiopia">
      <div className="ethio-head">
        <div className="ethio-topic">
          <h3 className="ethio">ETHIOPIA</h3>
          <p className="ethio-land fs-2">Land of Origins.</p>
        </div>

        <img className="eth-img" src={ethiopia} alt="ethiopia on a map" />
      </div>
      <p className="para2 mx-auto text-start fs-5 mt-5">
        Ethiopia, a country located in the Horn of Africa, is a unique and
        diverse tourist destination that offers visitors an unparalleled
        experience. The country is known for its ancient history, rich culture,
        and stunning landscapes. Visitors to Ethiopia can explore the rock-hewn
        churches of Lalibela, which are considered one of the greatest
        architectural feats in the world. Ethiopia is also home to numerous
        historical sites such as the ancient city of Axum, where visitors can
        see the ruins of ancient palaces and tombs of the former rulers. The
        country is also home to several national parks, including the Simien
        Mountains National Park, where visitors can trek and witness the beauty
        of nature, including baboons and Gelada monkeys.
      </p>

      <p className="para2 mx-auto text-start fs-5 mt-5">
        Another reason to visit Ethiopia is its rich and vibrant culture.
        Visitors can experience the country's diverse cultural traditions,
        including music, dance, and food. Ethiopian food is renowned for its
        unique flavors, and visitors can sample local delicacies such as injera,
        a sourdough flatbread, and wat, a spicy stew. The country is also home
        to a wide range of music and dance styles, including the famous
        Ethiopian shoulder dance.
      </p>
      <p className="para1 text-start mx-auto fs-5">
        Ethiopia is also home to a diverse range of wildlife, which makes it an
        ideal destination for eco-tourism. Visitors can explore the country's
        national parks and conservation areas to witness rare and endangered
        species such as the Ethiopian wolf, the gelada baboon, and the mountain
        nyala. Eco-tourism can not only offer visitors a unique experience but
        also help to raise awareness and support for conservation efforts in
        Ethiopia. In addition, eco-tourism can provide employment opportunities
        for local communities, such as park rangers and guides, while promoting
        sustainable tourism practices.
      </p>
      <p className="para1 text-start mx-auto fs-5">
        Another compelling reason to visit Ethiopia is its coffee culture.
        Ethiopia is considered the birthplace of coffee, and the country has a
        long and rich history of coffee cultivation and preparation. Visitors
        can explore the country's coffee plantations and learn about the
        different methods of roasting and brewing coffee. Moreover, coffee
        ceremonies are an integral part of Ethiopian culture and a social event
        that brings people together. Participating in a coffee ceremony can be a
        unique and memorable experience for visitors, and can provide an
        opportunity to learn more about Ethiopian culture and hospitality.
        Overall, Ethiopia's wildlife and coffee culture are two more reasons to
        visit this fascinating and diverse country.
      </p>
      <p className="para1 text-start mx-auto fs-5">
        Finally, Ethiopia's warm and welcoming people make it an ideal
        destination for those looking for an immersive cultural experience.
        Visitors to the country can expect to be greeted with hospitality and
        kindness from the locals. Ethiopia is also one of the safest
        destinations in Africa, and visitors can explore the country without
        feeling threatened. In summary, Ethiopia is a must-visit tourist
        destination that offers visitors an unforgettable experience, from
        exploring ancient ruins to trekking through the mountains and
        experiencing unique cultural traditions.
      </p>

      <div className="desc-container">
        <p className="land">Land Of Origins.</p>
        <div className="container-fluid row justify-content-center align-items-center">
          <img className="img2 col-5" src={africa} alt="a woman meditating" />
          <p className="col-5 text-start fs-4 img-desc">
            As you explore Ethiopia, you will be put in touch with your own
            origins for this is the "cradle of humanity".
          </p>
        </div>
      </div>

      <div className="things mt-4">
        <p className="things-topic">Things To Do</p>
        <p className="fs-4 things-desc text-start mx-auto lh-lg">
          From hiking and wildlife viewing to hot-air balloon trips and
          exploring museums, Ethiopia offers limitless possibilities to outdoor
          enthusiasts and curious travellers.
        </p>
      </div>

      <div className="images d-flex">
        <figure>
          <img src={jegol} alt="Jegol-Wall-of-Harar" />
          <figcaption>HISTORICAL EXPERIENCE</figcaption>
        </figure>

        <figure>
          <img src={oryx} alt="east african oryx" />
          <figcaption>NATURAL EXPERIENCE</figcaption>
        </figure>

        <figure>
          <img src={eruption} alt="ertalle" />
          <figcaption>ADVENTURE</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Ethiopia;
