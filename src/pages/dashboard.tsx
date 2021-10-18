import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic';

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

// They need to be loaded using lazy load without SSR because they depend on the
// window object which exists only on the browser, not the server
const Chart = dynamic(()=> import('react-apexcharts'), {
  ssr: false
});

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-10-18T00:00:00.000Z',
      '2021-10-19T00:00:00.000Z',
      '2021-10-20T00:00:00.000Z',
      '2021-10-21T00:00:00.000Z',
      '2021-10-22T00:00:00.000Z',
      '2021-10-23T00:00:00.000Z',
      '2021-10-24T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
};
const series = [
  {
    name: 'series1',
    data: [31, 120, 10, 28, 51, 18, 109]
  }
];

export default function Dashboard() {
    return (
      <Flex direction="column" height="100vh">
        <Header/>
        <Flex 
          width="100%" 
          my="6" 
          maxWidth={1480}
          marginX="auto"
          paddingX="6"
        >
          <Sidebar/>
          <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
            <Box padding="8" background="gray.800" borderRadius={8} paddingBottom="4">
              <Text fontSize="large" marginBottom="4">Inscritos da Semana</Text>
              <Chart type="area" height={160} options={options} series={series}/>
            </Box>
            <Box padding="8" background="gray.800" borderRadius={8}  >
              <Text fontSize="large" marginBottom="4">Taxa de Abertura</Text>
              <Chart type="area" height={160} options={options} series={series}/>
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    )
}