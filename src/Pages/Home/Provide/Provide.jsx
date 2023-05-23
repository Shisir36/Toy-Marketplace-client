import React from 'react';
import { FlippingCard, FlippingCardFront, FlippingCardBack } from 'react-ui-cards';

const Provide = () => {
    const cards = [
        {
            title: 'Awesome Products',
            description: 'Discover a wide range of innovative and high-quality products that will exceed your expectations. From cutting-edge gadgets to stylish accessories, we have it all.',
            icon: 'https://images.unsplash.com/photo-1627693685101-687bf0eb1222?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            image: 'https://images.unsplash.com/photo-1603185999497-2e09822f82a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
        },
        {
            title: 'Best Quality',
            description: 'Experience unparalleled quality with our carefully curated selection of products. We strive to provide the best in class, ensuring durability, reliability, and customer satisfaction.',
            icon: 'https://png.pngtree.com/png-vector/20200219/ourmid/pngtree-unique-flying-achievement-flat-badge-icon-vector-for-website-png-image_2150031.jpg',
            image: "https://images.unsplash.com/photo-1596068587619-e4b11c7a3488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        },
        {
            title: 'Cute Toys',
            description: 'Indulge in the world of adorable toys that will bring joy to both kids and adults alike. Our collection showcases a variety of cuddly and interactive toys to create memorable moments.',
            icon: 'https://img.freepik.com/premium-photo/art-design-labrador-sticker-die-cut-dog-with-minimal-concept_31965-111487.jpg?w=2000',
            image: 'https://images.unsplash.com/photo-1634518016981-388b93049a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80'
        }
    ];

    return (
    <div className="container mx-auto mt-10 mb-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {cards.map((card, index) => (
      <div key={index} className="flex justify-center">
        <div >
          <FlippingCard>
            {/* Front side of the card */}
            <FlippingCardFront>
              <div className="card-front flex flex-col justify-center items-center p-3 bg-gradient-to-br from-cyan-200 to-pink-200 h-full">
                <img src={card.icon} alt="Card Icon" className="w-16 h-16 mb-3 rounded-full" />
                <h5 className="card-title text-gray-700 font-extrabold text-lg text-center mb-3">{card.title}</h5>
                <h4 className="card-title text-gray-500 text-xs font-bold text-center">{card.description}</h4>
              </div>
            </FlippingCardFront>
            {/* Back side of the card */}
            <FlippingCardBack>
              <div>
                <img src={card.image} alt="" className="h-full" />
              </div>
            </FlippingCardBack>
          </FlippingCard>
        </div>
      </div>
    ))}
  </div>
</div>
    );
};

export default Provide;