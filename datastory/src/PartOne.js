import React from 'react';
import AllCountriesPlot from './AllCountriesPlot';

function PartOne() {
  return (<>
    <div className="part">
      <p>In the vast expanse of the Milky Way, among 100-400 billion planets, Earth remains the only known oasis of life.
        Yet, as our climate buckles under the weight of unsustainable food systems—deforestation, agricultural emissions, and soil degradation—we gamble with this irreplaceable cosmic rarity. The math is stark: while astronomers estimate 1-10 billion potentially habitable worlds in our galaxy, none offer a backup for humanity. Our industrialized farming practices, responsible for 24% of global greenhouse emissions (FAO), are quite literally burning the only menu we have. The paradox is tragic: on a planet capable of feeding 10 billion, we're instead cooking our own future—one degree, one hectare, one meal at a time. In a universe of infinite possibilities, Earth's habitability is not a given, but a responsibility we're failing to uphold.</p>
    </div>
    <div className="part">
      <h2>Is the planet dying?</h2>
      <p>Being ble to sustain its needs in an eco-friendly manner is one of humanity’s greatest challenges today. The reason being is that human activities, generally speaking, have a devastating effect on the planet and this is most notably seen through the effect of global warming that is caused by rising green house gas emissions. One well known and apparent cause for increased emissions is the substantial growth in population across the globe. Particularly with regards to nutrition, our rising numbers imply that we need to produce a larger quantity of food with a set of limited resources. To makes things worse, the escalation of food production, which in itself is a source of green house gas emissions, requires to cut down the sole counter balancing factor to CO2, that are trees. As these are facts that are merely just spoken of (for most), we aim to substantiate these claims by plotting, both at a worldwide and country level, the evolution over the last half century of population, temperature, agricultural CO2 emissions, and carbon stock (the latter being a unit measuring the living biomass’s ability to absorb carbon).</p>
      <AllCountriesPlot/>
      <p>Considering the fact that all of the data plotted above is only over a timespan of half a century, we can confirm and conclude several things. First of all, the increase in population is indeed worrying to say the least. The world population has more than doubled in just over 50 years, and if the number of inhabitants of the world continues to increase at similar rate that it has this would cause major problems. Looking at the map illustrating the population levels, we can observe that most of the population is concentrated in China and India (as you probably already know) but also that the population levels in Africa have generally increased since the 1960s. Secondly, it is apparent that climate change is real. The plot illustrates the difference in temperature compared to the average temperature over the 30-year period 1951-1980 for the respective location. We can observe that since then, temperatures have increased in the world across all countries. It is worth noting that the increasing trend in temperature could potentially be observed from a much earlier period (if the data allowed it) due to rising CO2 emissions that notably begun during the industrial revolution. Finally, although not as apparent, we can also observe that the world’s ability to absorb CO2 is decreasing while CO2 emissions are increasing. These changes, albeit relatively slight, in combination with rising population levels are more daunting than it seems.</p>
    </div>
  </>);
}

export default PartOne;
