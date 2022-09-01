import { useRouter } from "next/router";
import type { NextPage } from "next";
import { Button, Container, createStyles, Title, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  container: {
    margin: 0,
    marginTop: 120,
    marginLeft: 70,
    borderTop: `1px solid ${theme.colorScheme === "dark"
      ? theme.colors.dark[5]
      : theme.colors.gray[2]
      }`,
  },
  image_1: {
    position: 'absolute',
    marginLeft: 'calc(50% - 461px + 400px)',
    padding: 0,
  },
  image_2: {
    position: 'absolute',
    marginTop: 'calc(50% - 556px)',
    marginLeft: 'calc(50% - 420px + 550px)',
    width: 420,
    padding: 0,
  },
  image_3: {
    position: 'absolute',
    marginTop: 'calc(50% - 650px)',
    marginLeft: 'calc(50% - 420px + 550px)',
    width: 300,
    padding: 0,
  },
  image_3_2: {
    position: 'absolute',
    marginTop: 'calc(50% - 650px)',
    marginRight: 'calc(50% - 420px + 550px)',
    width: 400,
    padding: 0,
  },

  button: {
    position: 'absolute',
    marginTop: -90, 
    // marginLeft: 'calc(50% - 461px + 400px)',
  }
}));

const Article: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { classes } = useStyles();

  return (
    <Container className={classes.container}>
      <Link href={'/'}><Button className={classes.button}>Back To Home</Button></Link>
      {id == '1' && (
        <>
          <img className={classes.image_1} src={'/article_1_1.webp'} width='461' height={'540'} />

          <Title>The Problem</Title>
          Fire, stubble and smoke
          <br />
          <br />
          The problem of stubble farming after the harvesting season <br />
          is one of the major reasons for the deteriorating air quality leading<br />
          to alarming pollution levels in North India, especially in Delhi NCR
          <br />
          <br />
          Effects
          Stubble Manure – A Step Towards The Change
          <br />
          <br />
          Generally helpful effects -
          <br />
          • Cheaper and easier than other removal methods.
          <br />
          • Helps to combat pests and weeds.
          <br />
          • Can reduce nitrogen tie-up.
          <br />
          <br />
          <br />
          Generally harmful effects -
          <br />
          • Loss of nutrients
          <br />
          • Pollution from smoke includes greenhouse gases and others that <br />
          damage the ozone layer.
          <br />
          • Damage to electrical and electronic equipment from floating threads <br />
          of conductive waste.
          <br />
          • Risk of fires spreading out of control.
        </>
      )}
      {id == '2' && (
        <>
          <img className={classes.image_2} src={'/article_2.webp'} />

          <Title>Conditions</Title>
          <br />
          Stubble burning in Punjab, Haryana, and Uttar Pradesh in north India has been <br />
          cited as a major cause of air pollution in Delhi since 1980. Consequently, <br />
          the government is considering the implementation of the 1,600 km long and 5 km wide Great Green Wall<br />
          of Aravalli. From April to May and October to November each year, farmers mainly in<br />
          Punjab, Haryana, and Uttar Pradesh burn an estimated 35 million tons of crop waste from their wheat<br />
          and paddy fields after harvesting as a low-cost straw-disposal practice to reduce the turnaround <br />
          time between harvesting and sowing for the first (summer) crop and the second (winter) crop. <br /><br />
          Smoke from this burning produces a cloud of particulates visible from space and has produced <br />
          what has been described as a "toxic cloud" in New Delhi, resulting in declarations of <br />
          an airpollution emergency. For this, the NGT (National Green Tribunal) instituted a fine of <br />
          ₹2 lakh on the Delhi Government for failing to file an action plan providing incentives and infrastructural<br />
          assistance to farmers to stop them from burning crop residue to prevent air pollution.<br /><br />
          Although harvesters such as the Indian-manufactured “Happy seeder" that shred the crop residues <br />
          into small pieces and uniformly spread them across the field are available as an alternative to <br />
          burning stubble, and crops such as millets and maize can be grown as ana sustainable alternative to<br />
          rice and wheat in order to conserve water, some farmers complain that the cost of these machines is <br />
          a significant financial burden, with the crops not incurred under MSP prices when compared to burning <br />
          the fields and purchasing crops that are produced under MSP prices. The Indian Agricultural Research <br />
          Institute developed an enzyme bio-decomposer solution, that can be sprayed after the harvest, <br />
          to increase organic carbon in the soil and maintain overall soil health. In 2021, they began licensing<br />
          its use to various companies. In May 2022, the Government of Punjab announced they will purchase maize,<br />
          bajra, sunflower and moong crops at MSP, encouraging farmers to adopt less water-consuming options as a <br />
          sustainable alternative to paddy and wheat in the wake of fast-depleting groundwater.
        </>
      )}
      {id == '3' && (
        <div style={{height:'150vh'}}>
          <img className={classes.image_3} src={'/article_3.png'} />

          <Title>Stories</Title>
          <br />
          (i)
          It was introduced in 2016 “The machine works well, no doubt. But what’s the use if it runs for <br />
          only 25-30 days and has to be parked in my shed for the rest of the year?” asks Palwinder Singh.
          <br />
          <br />
          The 50-year-old from Sahari village in Gurdaspur district and tehsil has not one, <br />
          but three Happy Seeders. The first of these tractor-mounted machines — which allows the planting <br />
          of wheat without the need for burning leftover straw from the previous paddy crop — <br />
          he purchased in September 2017 for Rs 1.45 lakh and got 50% of that cost reimbursed by the <br />
          Punjab government. Last month, he bought two more at Rs 1.70 lakh each as a member of a 15- <br />
          farmer producer group, eligible for a higher 80% subsidy.
          <br />
          <br />
          For farmers like him, who have invested in Happy Seeders, the issue is not about technology. <br />
          The machine cuts and lifts the standing stubble from the combine-harvested paddy, <br />
          drills the seeds of the succeeding wheat crop into the bare soil, and deposits the straw over the <br />
          sown area as a mulch cover. But happy seeder requires a tractor of 50hp to pull the machine and <br />
          if the farmer changes the tractor his old implements go useless which would be a great loss for the <br />
          farmer moreover, these machines cost more than Rs. one lakh which can’t be afforded by small farmers.
        
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <img className={classes.image_3_2} src={'/article_3_2.png'} />
          <Text align="left" ml={500} mt={100}>
          (ii) The government also decided to provide up to 80% subsidy on equipment used to manage stubble. <br />
          While the central government will bear 65% portion of the subsidy, the state will give the rest 35% amount. <br />
          But this was not the case, because as soon as the subsidy was announced on the machine, <br />
          the prices went up so the subsidy benefit never reached the farmer.
          </Text>
        </div>
      )}
    </Container>
  );
};

export default Article;