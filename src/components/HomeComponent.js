import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../redux/baseurl';

function RenderCard({item,isLoading,errMess}) {

    if (isLoading) {
        return(
                <Loading />
        );
    }
    else if (errMess) {
        return(
                <h4>{errMess}</h4>
        );
    }
    else 
        return(
            <Card>
                {/* <CardImg src={baseUrl + item.image} alt={item.name} /> */}
                <CardBody>
                <CardTitle>{item.name}</CardTitle>
                
                </CardBody>
            </Card>
        );

}

function Home(props) {
    return(
        <div className="container">
            <div className="col-12">
              <h3>Home</h3>
              <hr />
            </div>  
            <div className="row align-items-start">
                {/* <div className="col-12 col-md m-1">
                    <RenderCard item={props} isLoading={props.cropsLoading} errMess={props.} />
                </div> */}
                {/* <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}  />
                </div> */}
            </div>
        </div>
    );
}

export default Home;