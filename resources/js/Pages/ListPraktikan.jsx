import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/SidebarAslab'; 
import { Card, Typography, Button } from "@material-tailwind/react";

const TABLE_HEAD = ["Nama", "NPM", "Kelas", "Status", "Sesi", "Action"];
const ITEMS_PER_PAGE = 5;

const ListPraktikan = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const TABLE_ROWS = [
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
      name: "Muhammad Ryan",
      npm: "06.2021.1.07461",
      org: "Frontend",
      kelas: "P",
      modul1: true,
      modul2: true,
      modul3: false,
      modul4: true,
      date: "06/02/2024",
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
      name: "Muhammad Meru",
      npm: "06.2021.1.07454",
      org: "Frontend",
      kelas: "P",
      modul1: true,
      modul2: true,
      modul3: false,
      modul4: true,
      date: "06/02/2024",
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
      name: "Muhammad Latif",
      npm: "06.2021.1.07777",
      org: "Backend",
      kelas: "P",
      modul1: true,
      modul2: true,
      modul3: false,
      modul4: true,
      date: "06/02/2024",
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
      name: "Muhammad Ibrahim",
      npm: "06.2021.1.07460",
      org: "Backend",
      kelas: "P",
      modul1: true,
      modul2: true,
      modul3: false,
      modul4: true,
      date: "06/02/2024",
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
      name: "Muhammad Davin",
      npm: "06.2022.1.07444",
      org: "Frontend",
      kelas: "P",
      modul1: true,
      modul2: true,
      modul3: false,
      modul4: true,
      date: "06/02/2024",
    },
    {
      img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg",
      name: "Muhammad Cibaduyut",
      npm: "06.2022.1.07555",
      org: "Full Stack",
      kelas: "P",
      modul1: true,
      modul2: true,
      modul3: false,
      modul4: true,
      date: "06/02/2024",
    },
  ];

  const adminMenuOptions = ['Dashboard', 'List Praktikan', 'Entry Nilai', 'Entry Pelanggaran', 'Unduh Nilai']; 

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  const renderPaginationButtons = () => {
    const totalPages = Math.ceil(TABLE_ROWS.length / ITEMS_PER_PAGE);

    return (
      <div className="flex mt-4 justify-center">
        <Button
          disabled={currentPage === 1}
          onClick={handlePrevPage}
          ripple="light"
          size='sm'
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          Back
        </Button>
        <div className="ml-2 mr-2">
          Page {currentPage} of {totalPages}
        </div>
        <Button
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
          ripple="light"
          size='sm'
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          Next
        </Button>
      </div>
    );
  };

  const renderTableRows = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, TABLE_ROWS.length);

    return TABLE_ROWS.slice(startIndex, endIndex).map(({ img, name, npm, org, kelas, modul1, modul2, modul3, modul4, date }, index) => {
      const isLast = (index + startIndex) === TABLE_ROWS.length - 1;
      const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

      const renderModulStatus = (modul, modulName) => {
        const bgColor = modul ? "bg-green-100" : "bg-yellow-200";
        return (
          <div>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${bgColor} text-blue-gray-800`}>
              {modulName}
            </span><br/>
          </div>
        );
      };

      return (
        <tr key={name}>
          <td className={classes}>
            <div className="flex items-center gap-3">
              <img
                src={img}
                alt={name}
                className="h-10 w-10 rounded-full"
              />
              <div className="flex flex-col">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {name}
                </Typography>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal opacity-70"
                >
                  {org}
                </Typography>
              </div>
            </div>
          </td>
          <td className={classes}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {npm}
            </Typography>
          </td>
          <td className={classes}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {kelas}
            </Typography>
          </td>
          <td className={classes}>
            <div className="flex flex-col gap-2">
              {renderModulStatus(modul1, 'Modul 1')}
              {renderModulStatus(modul2, 'Modul 2')}
              {renderModulStatus(modul3, 'Modul 3')}
              {renderModulStatus(modul4, 'Modul 4')}
            </div>
          </td>
          <td className={classes}>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {date}
            </Typography>
          </td>
          <td className={classes}>
            <Typography
              as="a"
              href="#"
              variant="small"
              color="blue-gray"
              className="font-medium bg-blue-200 px-7 py-1 rounded-full inline-block"
            >
              Edit
            </Typography>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="flex flex-col md:flex-row"> 
      <Sidebar menuOptions={adminMenuOptions} />
      <div className="flex-grow text-blue-700">
        <Header>
          <Card className="h-full w-full overflow-scroll">
            <div className="mb-8 flex items-center justify-between gap-8">
              <div style={{ marginLeft: '10px' }}>
                <Typography variant="h5" color="blue-gray">
                  Daftar Praktikan
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  Informasi
                </Typography>
              </div>
              <div className="flex items-center gap-5">
                <Button className='bg-blue-600' color="blue" ripple="light" size='sm'>
                  Tambah Praktikan
                </Button>
              </div>
            </div>
            <div className='overflow-x-auto' style={{ maxWidth: '100%' }}>
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head, index) => (
                      <th
                        key={index}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {renderTableRows()}
                </tbody>
              </table>
            </div>
            {renderPaginationButtons()}
          </Card>
        </Header>
        <Footer />
      </div>
    </div>
  );
};

export default ListPraktikan;
