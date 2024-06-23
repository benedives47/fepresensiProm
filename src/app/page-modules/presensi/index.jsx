import { Flex, Text } from "@chakra-ui/react";
import usePresention from "@presensi/app/_globals/hooks/usePresention";
import { useRouter } from "next/router";
import { useEffect } from "react";
import SuccessUpdate from "./_components/success-update";
import LoadingScreen from "@presensi/app/_globals/components/loader/loading-screen";
import { SUCCESS_MESSAGE } from "@presensi/app/_globals/constant/success-response.constant";
import AlreadyUpdate from "./_components/already-update";

const Presensi = () => {
  const router = useRouter();

  const { data, updatePresention, pending, error, successMessage } =
    usePresention();

  useEffect(() => {
    if (router?.query?.id) {
      updatePresention({ id: router?.query?.id });
    }
  }, [router?.query?.id, updatePresention]);

  useEffect(() => {
    if (error) {
      router.push({
        pathname: "/",
        query: { id: router?.query?.id },
      });
    }
  }, [error, router]);

  return (
    <Flex
      justifyContent="center"
      flexDir="column"
      position="relative"
      gap="30px"
    >
      {pending && <LoadingScreen text="Please Wait ..." />}
      {successMessage === SUCCESS_MESSAGE.ALREADY_PRESENT && (
        <AlreadyUpdate data={data.data} />
      )}
      {successMessage === SUCCESS_MESSAGE.PRESENT_SUCCESS && (
        <SuccessUpdate data={data.data} />
      )}

      <Flex flexDir="column" alignItems="center" gap="10px">
        <Flex mt="8px" flexDir="column" alignItems="center">
          <Text fontSize="14px" mb="8px" color="gray.400" fontWeight={500}>
            Trans Luxury Hotel Bandung
          </Text>
          <Text fontSize="12px" color="gray.500" fontWeight={400}>
            Jl. Gatot Subroto No. 289
          </Text>
          <Text fontSize="12px" color="gray.500" fontWeight={400}>
            Kec. Batununggal Kota Bandung
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Presensi;
