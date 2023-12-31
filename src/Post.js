import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

function Post(props) {

    const header = (
        <img alt="Card" src={props.imagen} />
    );

    return (
        <div className="col-12 md:col-4 lg:col-4">
            <div className="card flex justify-content-center">
                <Card header={header} className="w-20rem">
                    <div className="grid mt-2">
                        <div className="col-12">
                            <div className="postTimeStamp p-card-subtitle">{props.tiempo}min ago</div>
                            <div className="postLikes"><Button label={props.likes + "k"} icon="pi pi-heart" severity="danger" size="small" /></div>
                        </div>
                        <div className="col-12">
                            <strong>{props.nombre}</strong>
                        </div>
                        <div className="col-12">
                            <p className="p-card-content">{props.texto}</p>
                        </div>
                        <div className="col-12">
                            <Button type="button" label="Comments" icon="pi pi-comments" rounded text badge={props.comentarios} severity="secondary" badgeClassName="p-badge-info" />
                        </div>
                    </div>
                </Card>
            </div>
        </div>

    )
}

export default Post;