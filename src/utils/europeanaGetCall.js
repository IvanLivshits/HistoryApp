const filterData = (data) => {
  const cleanData = data.map((item) => {
    return {
      title: item.dcTitleLangAware[0],
      image: item.edmPreview[0],
      country: item.country[0],
      description: "Placeholder description",
    };
  });
  return cleanData;
};

const getEuropeanaData = async (query) => {
  try {
    const response = await fetch(
      `https://api.europeana.eu/record/v2/search.json?profile=standard&query=${query}&rows=12&start=1&wskey=ildonetchogg`
    );
    const data = await response.json();
    console.log(data)
    return filterData(data.items);
  } catch (error) {
    console.log(error);
  }
};

export default getEuropeanaData;
