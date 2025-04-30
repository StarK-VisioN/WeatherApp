import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}) {
    const INTI_URL = "https://images.unsplash.com/photo-1701502462424-5de9d2a2995f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";
   
    const HOT_URL = "https://media.istockphoto.com/id/641051864/photo/dusty-shore.webp?a=1&b=1&s=612x612&w=0&k=20&c=8jQRlqKi3eFBeIj023xbrKakWmP2aglxhbEngd9fe6E=";
    const COLD_URL = "https://images.unsplash.com/photo-1700589928769-89e13972f6df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvbGQlMjBwbGFjZSUyMGltYWdlfGVufDB8fDB8fHww";
    const RAIN_URL = "https://images.unsplash.com/photo-1590918481870-afedfbeb29f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbiUyMHBsYWNlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";

    return(
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p></p>
          <p>Humidity = {info.humidity}</p>
          <p>Minimum Temperature = {info.tempMin}&deg;C</p>
          <p>Maximum Temperature = {info.tempMax}&deg;C</p>
          <p>The weather can be described as <b>"{info.weather}"</b> feels Like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    )
}