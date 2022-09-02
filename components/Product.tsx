import { Container, createStyles, Grid, Title } from "@mantine/core";
import { IconGasStation, IconLeaf, IconManualGearbox, IconArrowsCross } from "@tabler/icons";
import { FeaturesCard } from "./ProductCards";

const useStyles = createStyles((theme) => ({
  Container: {
    height: '95vh',
    marginTop: '10vh',
    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },
  Title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: '100%',
    fontSize: 48,
    marginTop: "-50px",
    marginBottom: '3em',
    textAlign: 'center',
    
    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: 34,
      lineHeight: 1.15,
    },
  },
}));

export function Product({id}: any) {
  const { classes } = useStyles();

  return (
    <Container id={id} className={classes.Container}>
      <Title className={classes.Title}>Our Products</Title>

      <Grid>
        <Grid.Col span={4}>
          <FeaturesCard
            name='Paddy Waste Carpet'
            subtitle="Made for Living Room, Guest Room, Bedroom and Hall"
            offer=""
            price="$5.00"
            image="carpet_1.webp"
            button_text="Buy Now"
            data={[
              { label: 'Size: 4ft x 4ft', icon: IconArrowsCross },
              { label: '100% Sustainable Product', icon: IconLeaf },
            ]} />
        </Grid.Col>
      </Grid>
    </Container>
  )
}