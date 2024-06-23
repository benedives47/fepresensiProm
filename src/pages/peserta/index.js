import Peserta from "@presensi/app/page-modules/peserta";
import React from "react";

const PesertaPage = () => {
  return <Peserta />;
};

export default PesertaPage;

PesertaPage.getLayout = function getLayout(page) {
  return <>{page}</>;
};
