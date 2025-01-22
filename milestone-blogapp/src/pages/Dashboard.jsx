import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function Dashboard() {
  const navigate = useNavigate();

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleNavigate = () => {
    navigate("/addComment");
  };

  const handleDetail = () => {
    navigate("/login");
  };

  const handleLike = () => {
    navigate("/login");
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Published Date"
        subheader="September 14, 2016"
      />
      <CardMedia component="img" height="194" image="" alt="" />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa maxime
          placeat quia doloremque consequuntur reiciendis.
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <IconButton aria-label="add to favorites" onClick={handleLike}>
          <FavoriteIcon />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="add comment"
          onClick={handleNavigate}
        >
          <CommentIcon />
        </IconButton>
        <IconButton color="primary" aria-label="view">
          <VisibilityIcon />
        </IconButton>
        <IconButton
          sx={{ bgcolor: red[500], borderRadius: "10px" }}
          onClick={handleDetail}
        >
          Read More
        </IconButton>
      </CardActions>
    </Card>
  );
}
