import { Divider, Flex, Text } from "@chakra-ui/react";
import BasicTable from "@presensi/app/_globals/components/table";
import usePeserta from "@presensi/app/_globals/hooks/usePeserta";
import { useEffect, useMemo } from "react";

const Peserta = () => {
  const { getPesertaList, list, pending } = usePeserta();

  useEffect(() => {
    getPesertaList();
  }, [getPesertaList]);

  const columns = useMemo(() => {
    return [
      {
        key: "no",
        title: "No",
        width: "5%",
        render: (_, i) => {
          return <Text>{i + 1}</Text>;
        },
      },
      {
        key: "firstname",
        title: "firstname",
        width: "20%",
        render: (data) => {
          return <Text textTransform="capitalize">{data.firstname}</Text>;
        },
      },
      {
        key: "lastname",
        title: "lastname",
        width: "30%",
        render: (data) => {
          return <Text textTransform="capitalize">{data.lastname}</Text>;
        },
      },
      {
        key: "email",
        title: "Email",
      },
      {
        key: "phone",
        title: "Phone",
        render: (data) => {
          return <Text fontSize="12px">{data.phone}</Text>;
        },
      },
      {
        key: "class",
        title: "Class",
        render: (data) => {
          return <Text fontSize="12px">{data.class}</Text>;
        },
      },
      {
        key: "lineid",
        title: "lineid",
        render: (data) => {
          return <Text fontSize="12px">{data.lineid}</Text>;
        },
      },
      {
        key: "status",
        title: "Status",
        render: (data) => {
          if (data.status) {
            return (
              <Text textTransform="capitalize" color="green.500">
                Present
              </Text>
            );
          } else {
            return (
              <Text textTransform="capitalize" color="red.500">
                Not Present Yet
              </Text>
            );
          }
        },
      },
    ];
  }, []);

  return (
    <Flex p="20px" flexDir="column">
      <Text variant="heading/h2">Daftar Peserta</Text>
      <Divider mb="20px" />
      <BasicTable
        loadingState={pending}
        datas={list?.data || []}
        columns={columns}
      />
    </Flex>
  );
};

export default Peserta;

Peserta.getLayout = function getLayout(page) {
  return <>{page}</>;
};
