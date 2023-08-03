import Post from "./Post";
import { faker } from '@faker-js/faker';

function PostList() {

    const posts = [
        {
            imagen: "https://media.cntraveler.com/photos/5fd0def5013df4de80687ce3/master/w_1600%2Cc_limit/BestCitiesInTheWorld-2020-Zurich%2C%2520Switzerland-GettyImages-483262091.jpg",
            tiempo: faker.helpers.rangeToNumber({ min: 1, max: 60 }),
            likes: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
            nombre: faker.person.firstName(),
            texto: faker.lorem.sentences(2),
            comentarios: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
        },
        {
            imagen: "https://media.cntraveler.com/photos/588a0a4fbc3623e22c9e89de/master/w_1600%2Cc_limit/bruges-Gallery-Stock-GS01079498.jpg",
            tiempo: faker.helpers.rangeToNumber({ min: 1, max: 60 }),
            likes: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
            nombre: faker.person.firstName(),
            texto: faker.lorem.sentences(2),
            comentarios: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
        },
        {
            imagen: "https://media.cntraveler.com/photos/56549cbf659c4b48748654d0/master/w_1600%2Cc_limit/christ-the-redeemer-brazil-cr-gallery-stock.jpg",
            tiempo: faker.helpers.rangeToNumber({ min: 1, max: 60 }),
            likes: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
            nombre: faker.person.firstName(),
            texto: faker.lorem.sentences(2),
            comentarios: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
        },
        {
            imagen: "https://boomersdaily.files.wordpress.com/2022/11/brasilia-brazil.jpg",
            tiempo: faker.helpers.rangeToNumber({ min: 1, max: 60 }),
            likes: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
            nombre: faker.person.firstName(),
            texto: faker.lorem.sentences(2),
            comentarios: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
        },
        {
            imagen: "https://wallpapers.com/images/featured/cancun-mexico-pmtjgvv9gw988tzg.jpg",
            tiempo: faker.helpers.rangeToNumber({ min: 1, max: 60 }),
            likes: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
            nombre: faker.person.firstName(),
            texto: faker.lorem.sentences(2),
            comentarios: faker.helpers.rangeToNumber({ min: 1, max: 100 }),
        },
    ];

    return (
        <div className="grid mt-2">
            {
                posts.map((post) => {

                    //console.log(post.tiempo);
                    //console.log(post.likes);
                    //console.log(post.nombre);
                    //console.log(post.texto);
                    //console.log(post.comentarios);

                    return <Post
                        key={faker.helpers.rangeToNumber({ min: 1, max: 999 })}
                        imagen={post.imagen}
                        tiempo={post.tiempo}
                        likes={post.likes}
                        nombre={post.nombre}
                        texto={post.texto}
                        comentarios={post.comentarios}
                    >
                    </Post>

                })
            }
        </div>
    )
}

export default PostList;