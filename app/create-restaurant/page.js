import { postCreateRestaurant } from '@/library/Restaurant';
import { RestaurantFormComponent } from '@/components/RestaurantFormComponent';
import { HeaderComponent } from '@/components/HeaderComponent';


export default function CreateRestaurant() {
    return (
        <>
            <HeaderComponent title="create restaurant" label="all restaurant" path="/" />
            <RestaurantFormComponent onSubmit={postCreateRestaurant} />
        </>
    )
}