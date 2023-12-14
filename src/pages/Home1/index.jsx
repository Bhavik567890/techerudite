import React, { useEffect, useState } from "react";

import { Button, Img, List, Text } from "components";
import { Link } from "react-router-dom";
import { fetchBlogs, fetchContact, fetchSettings } from "services/api";
import { formatDate } from "utils";
import { useForm } from "react-hook-form";

import { toast } from "sonner";
const Home1Page = () => {
  const {
    register,
    handleSubmit,
    errors,
    formState: { isSubmitting },
    reset,
  } = useForm();
  const [blogs, setBlogs] = useState([]);
  const [settings, setSettings] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [fetchedBlogs, fetchedSettings] = await Promise.all([
          fetchBlogs(),
          fetchSettings(),
        ]);

        setBlogs(fetchedBlogs?.data);
        setSettings(fetchedSettings?.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await fetchContact(data);
      reset();
      toast(response?.message);
    } catch (error) {
      console.log("API error:", error);
    }
  };

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-mulish items-center justify-start mx-auto w-full">
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="flex flex-col items-center justify-start mx-auto w-full">
            <header className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center mt-[-NaNpx] mx-auto w-full z-[1]">
              <Img
                className="sm:flex-1 h-20 md:h-auto sm:ml-[0] ml-[60px] sm:mt-0 my-5 object-cover w-[13%] sm:w-full"
                src="images/img_bitmap.png"
                alt="bitmap"
              />
              <Text
                className="mb-[43px] sm:ml-[0] ml-[424px] sm:mt-0 mt-[52px] text-center cursor-pointer text-gray-900 text-shadow-ts text-xl tracking-[0.16px]"
                size="txtMuliRegular20"
              >
                Services
              </Text>
              <Text
                className="mb-[42px] ml-12 sm:ml-[0] cursor-pointer sm:mt-0 mt-[51px] text-center text-gray-900 text-xl tracking-[0.16px]"
                size="txtMuliRegular20"
              >
                About us
              </Text>
              <Text
                className="mb-10 sm:ml-[0] ml-[46px] cursor-pointer  sm:mt-0 mt-[53px] text-center text-gray-900 text-xl tracking-[0.16px]"
                size="txtMuliRegular20"
              >
                Blogs
              </Text>
              <Text
                className="mb-[42px] ml-12 sm:ml-[0] cursor-pointer sm:mt-0 mt-[51px] text-center text-gray-900 text-xl tracking-[0.16px]"
                size="txtMuliRegular20"
              >
                Case Studies
              </Text>
              <Button
                className="cursor-pointer   font-extrabold leading-[normal] mb-7 min-w-[178px] ml-14 sm:ml-[0] mr-[60px] sm:mt-0 mt-[38px] rounded-[27px] text-center text-xl tracking-[0.16px] uppercase"
                size="sm"
              >
                Contact us
              </Button>
            </header>

            <div className="flex flex-col md:gap-10 gap-[834px] items-center justify-start w-full">
              <div className="h-[800px] relative w-full">
                <div className="h-[800px] m-auto w-full">
                  <div className="absolute bg-blue_gray-50 flex flex-col h-full inset-[0] items-end justify-center m-auto md:pl-10 sm:pl-5 pl-[193px] pt-[193px] w-full">
                    <Img
                      className="h-[606px] md:h-auto object-cover"
                      src="images/img_path.png"
                      alt="path"
                    />
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-end justify-end my-auto p-[77px] md:px-10 sm:px-5 right-[0] w-[83%]"
                    style={{ backgroundImage: "url('images/img_group6.png')" }}
                  >
                    <Img
                      className="h-[560px] md:h-auto mr-3.5 mt-[86px] object-cover w-[58%]"
                      src="images/img_asset14x.png"
                      alt="asset14x"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[11%] flex flex-col items-start justify-start left-[5%] w-[43%]">
                  <Text
                    className="sm:text-[37px] md:text-[43px] text-[47px] text-gray-900 tracking-[0.16px] uppercase"
                    size="txtMuliBold47"
                  >
                    <>
                      How much <br />
                      could you save?
                    </>
                  </Text>
                  <Text
                    className="mt-2.5 text-gray-900 text-lg tracking-[0.16px] w-4/5 sm:w-full"
                    size="txtMuliRegular18"
                  >
                    Answer the questions below to get a fixed price quotation
                    for us to take your accountancy hassles away from you.
                  </Text>
                  <div className="bg-white-A700 flex flex-col items-center justify-start mt-7 p-7 sm:px-5 rounded-[10px] shadow-bs w-full">
                    <div className="flex flex-col gap-[21px] items-center justify-start mb-[9px] mt-1.5 w-[97%] md:w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-center text-gray-900 tracking-[0.16px] w-full"
                        size="txtMuliSemiBold28"
                      >
                        Is your turnover expected to be more than £85k?
                      </Text>
                      <div className="flex flex-row font-rubik gap-[15px] items-center justify-center w-2/5 md:w-full">
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[98px] text-center text-xl tracking-[0.16px]"
                          shape="round"
                        >
                          Yes
                        </Button>
                        <Button
                          className="cursor-pointer font-bold leading-[normal] min-w-[98px] text-center text-xl tracking-[0.16px]"
                          shape="round"
                        >
                          No
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Text
                    className="mt-[18px] text-base text-gray-900 tracking-[0.16px]"
                    size="txtMuliSemiBold16"
                  >
                    Takes less than 30 seconds
                  </Text>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[942px] items-center justify-end p-[149px] md:px-10 sm:px-5 rounded-[100px] w-full"
                style={{ backgroundImage: "url('images/img_group10.svg')" }}
              >
                <div className="flex flex-col items-center justify-start mt-[243px] w-[98%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-11 items-center justify-between w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="sm:text-[37px] md:text-[43px] text-[47px] text-gray-900 tracking-[0.16px]"
                        size="txtMuliBold47"
                      >
                        About us
                      </Text>
                      <Text
                        className="mt-[23px] text-gray-700 text-lg tracking-[0.10px] w-full"
                        size="txtMuliRegular18Gray700"
                      >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor Lorem ipsum dolor sit amet
                        consetetur sadipscing elitr
                      </Text>
                      <Img
                        className="h-[54px] mt-[41px]"
                        src="images/img_group11.svg"
                        alt="groupEleven"
                      />
                    </div>
                    <Img
                      className="h-[399px]"
                      src="images/img_2480559.svg"
                      alt="2480559"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-12 items-start justify-between mt-[-246px] w-[89%] z-[1]">
            <div className="flex relative w-[70%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[871px] items-center justify-end my-auto p-3 w-[73%]"
                style={{ backgroundImage: "url('images/img_group7.png')" }}
              >
                <div className="flex flex-col md:gap-10 gap-[60px] items-start justify-start mt-[393px] w-[56%] md:w-full">
                  <Text
                    className="sm:text-[37px] md:text-[43px] text-[47px] text-gray-900 tracking-[0.16px]"
                    size="txtMuliBold47"
                  >
                    Our Process
                  </Text>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[336px] items-center justify-center p-[58px] md:px-10 sm:px-5 w-full"
                    style={{ backgroundImage: "url('images/img_asset1.svg')" }}
                  >
                    <div className="flex flex-col gap-4 items-center justify-start my-10">
                      <Text
                        className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl"
                        size="txtMuliBold22"
                      >
                        Step 1
                      </Text>
                      <Text
                        className="leading-[24.00px] text-center text-gray-700 text-lg w-full"
                        size="txtMuliRegular18Gray700"
                      >
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor{" "}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[336px] items-center justify-start mb-3 ml-[-92.16px] mt-auto p-[58px] md:px-10 sm:px-5 w-[39%] z-[1]"
                style={{ backgroundImage: "url('images/img_asset1.svg')" }}
              >
                <div className="flex flex-col gap-4 items-center justify-start my-10">
                  <Text
                    className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl"
                    size="txtMuliBold22"
                  >
                    Step 2
                  </Text>
                  <Text
                    className="leading-[24.00px] text-center text-gray-700 text-lg w-full"
                    size="txtMuliRegular18Gray700"
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor{" "}
                  </Text>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[336px] items-center justify-start md:mt-0 mt-[523px] p-[58px] md:px-10 sm:px-5 w-[27%] md:w-full"
              style={{ backgroundImage: "url('images/img_asset1.svg')" }}
            >
              <div className="flex flex-col gap-4 items-center justify-start my-10">
                <Text
                  className="text-[22px] text-center text-gray-900 sm:text-lg md:text-xl"
                  size="txtMuliBold22"
                >
                  Step 3
                </Text>
                <Text
                  className="leading-[24.00px] text-center text-gray-700 text-lg w-full"
                  size="txtMuliRegular18Gray700"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor{" "}
                </Text>
              </div>
            </div>
          </div>

          <div className="h-[967px] md:h-[NaNpx] mt-[-NaNpx] mx-auto pt-2 w-full z-[1]">
            <div className="md:h-[948px] h-[959px] m-auto w-full">
              <div className="absolute md:h-[948px] h-[949px] inset-y-[0] my-auto right-[0] w-[93%] md:w-full">
                <div className="flex flex-col gap-[18px] h-full justify-start m-auto w-full">
                  <Text
                    className="sm:text-[37px] md:text-[43px] text-[47px] text-gray-900 tracking-[0.16px]"
                    size="txtMuliBold47"
                  >
                    Service As
                  </Text>
                  <Img
                    className="h-[871px] md:h-auto md:ml-[0] ml-[723px] object-cover"
                    src="images/img_group7.png"
                    alt="designelements"
                  />
                </div>
                <Img
                  className="absolute h-[522px] right-[9%] top-[20%]"
                  src="images/img_designelements.svg"
                  alt="designelements_One"
                />
              </div>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-[522px] items-start justify-end left-[0] p-[53px] md:px-10 sm:px-5 top-[0] w-[44%]"
                style={{ backgroundImage: "url('images/img_group8.png')" }}
              >
                <div className="bg-white-A700 flex flex-col items-center justify-center md:ml-[0] ml-[45px] mt-[75px] p-[18px] rounded-[12px] shadow-bs1 w-[64%] md:w-full">
                  <Img
                    className="h-[81px] mt-[23px] w-20"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup"
                  />
                  <Text
                    className="mt-[25px] text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[0.13px]"
                    size="txtMuliBold22"
                  >
                    Audit & Account
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-2 mt-5 text-base text-center text-gray-700 tracking-[0.09px] w-full"
                    size="txtMuliRegular16"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[9%] flex flex-col items-center justify-start left-[7%] w-[78%]">
              <div className="md:gap-5 gap-[60px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-[18px] rounded-[12px] shadow-bs2 w-full">
                  <Img
                    className="h-20 md:h-auto mt-[26px] object-cover w-20"
                    src="images/img_001budget.png"
                    alt="001budget"
                  />
                  <Text
                    className="mt-[25px] text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[0.13px]"
                    size="txtMuliBold22"
                  >
                    Budget & Projections
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-2 mt-[18px] text-base text-center text-gray-700 tracking-[0.09px] w-full"
                    size="txtMuliRegular16"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-[18px] rounded-[12px] shadow-bs2 w-full">
                  <Img
                    className="h-[69px] md:h-auto mt-[29px] object-cover"
                    src="images/img_003revenue.png"
                    alt="003revenue"
                  />
                  <Text
                    className="mt-[33px] text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[0.13px]"
                    size="txtMuliBold22"
                  >
                    Payroll & Bookkeeping
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-8 mt-[18px] text-base text-center text-gray-700 tracking-[0.09px] w-full"
                    size="txtMuliRegular16"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do ut labore et dolore magna aliqua. Ut enim ad minim veniam
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-[18px] rounded-[12px] shadow-bs2 w-full">
                  <Img
                    className="h-20 md:h-auto mt-[26px] object-cover"
                    src="images/img_004setting.png"
                    alt="004setting"
                  />
                  <Text
                    className="mt-[23px] text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[0.13px]"
                    size="txtMuliBold22"
                  >
                    Software Training & IT
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-11 mt-2 text-base text-center text-gray-700 tracking-[0.09px] w-full"
                    size="txtMuliRegular16"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim{" "}
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-[18px] rounded-[12px] shadow-bs2 w-full">
                  <Img
                    className="h-20 md:h-auto mt-[26px] object-cover w-20"
                    src="images/img_005tax.png"
                    alt="005tax"
                  />
                  <Text
                    className="mt-[23px] text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[0.13px]"
                    size="txtMuliBold22"
                  >
                    Tax planning & Returns
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-5 mt-2 text-base text-center text-gray-700 tracking-[0.09px] w-full"
                    size="txtMuliRegular16"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-center p-[18px] rounded-[12px] shadow-bs2 w-full">
                  <Img
                    className="h-20 md:h-auto mt-[26px] object-cover w-20"
                    src="images/img_006statistics.png"
                    alt="006statistics"
                  />
                  <Text
                    className="mt-[23px] text-[22px] text-center text-gray-900 sm:text-lg md:text-xl tracking-[0.13px]"
                    size="txtMuliBold22"
                  >
                    Management Information
                  </Text>
                  <Text
                    className="leading-[24.00px] mb-11 mt-2 text-base text-center text-gray-700 tracking-[0.09px] w-full"
                    size="txtMuliRegular16"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magn. Ut
                    enim ad minim veniam
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[1277px] items-center justify-start mt-[65px] p-[123px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group5.png')" }}
        >
          <div className="flex flex-col md:gap-10 gap-[145px] items-center justify-start max-w-[1084px] mb-2 mx-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[59px] items-start justify-start w-full">
                <Text
                  className="sm:text-[37px] md:text-[43px] text-[47px] text-gray-900 tracking-[0.16px]"
                  size="txtMuliBold47"
                >
                  Testimonials
                </Text>
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-20 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="md:h-[147px] h-[254px] relative w-full">
                    <div className="absolute bg-white-A700 md:h-[147px] h-[223px] inset-[0] justify-center m-auto p-[27px] sm:px-5 rounded-[12px] shadow-bs1 w-full">
                      <div className="absolute bottom-[13%] flex flex-col gap-[25px] inset-x-[0] justify-start mx-auto pt-1">
                        <Text
                          className="md:ml-[0] ml-[72px] text-black-900 text-lg"
                          size="txtMuliBold18"
                        >
                          Josh brollins
                        </Text>
                        <Text
                          className="leading-[32.00px] text-base text-gray-700_01 w-full"
                          size="txtMuliRegular16Gray70001"
                        >
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua
                        </Text>
                      </div>
                      <Img
                        className="absolute h-14 left-[6%] object-cover top-[13%] w-14"
                        src="images/img_image.png"
                        alt="image"
                      />
                    </div>
                    <Img
                      className="absolute h-[31px] left-[2%] top-[0]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Img
                      className="absolute bottom-[0] h-[31px] right-[4%]"
                      src="images/img_settings.svg"
                      alt="settings_One"
                    />
                  </div>
                  <div className="md:h-[147px] h-[254px] relative w-full">
                    <div className="absolute bg-white-A700 md:h-[147px] h-[223px] inset-[0] justify-center m-auto p-[27px] sm:px-5 rounded-[12px] shadow-bs1 w-full">
                      <div className="absolute bottom-[13%] flex flex-col gap-[25px] inset-x-[0] justify-start mx-auto pt-1">
                        <Text
                          className="md:ml-[0] ml-[72px] text-black-900 text-lg"
                          size="txtMuliBold18"
                        >
                          Josh brollins
                        </Text>
                        <Text
                          className="leading-[32.00px] text-base text-gray-700_01 w-full"
                          size="txtMuliRegular16Gray70001"
                        >
                          Lorem ipsum dolor sit amet, consetetur sadipscing
                          elitr, sed diam nonumy eirmod tempor invidunt ut
                          labore et dolore magna aliquyam erat, sed diam
                          voluptua
                        </Text>
                      </div>
                      <Img
                        className="absolute h-14 left-[6%] object-cover top-[13%] w-14"
                        src="images/img_image.png"
                        alt="image"
                      />
                    </div>
                    <Img
                      className="absolute h-[31px] left-[2%] top-[0]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                    <Img
                      className="absolute bottom-[0] h-[31px] right-[4%]"
                      src="images/img_settings.svg"
                      alt="settings_One"
                    />
                  </div>
                </List>
              </div>
            </div>
            <div className="flex flex-col items-center justify-end pt-1.5 w-full">
              <div className="flex flex-col gap-14 items-center justify-start w-full">
                <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="sm:text-[37px] md:text-[43px] text-[47px] text-gray-900 tracking-[0.16px]"
                    size="txtMuliBold47"
                  >
                    Blogs
                  </Text>
                  <div className="flex flex-row gap-2.5 items-end justify-between w-[12%]">
                    <Link
                      // href="javascript:"
                      to={"/"}
                      className="text-[22px] text-indigo-A400 sm:text-lg md:text-xl tracking-[0.07px]"
                    >
                      <Text size="txtMuliBold22IndigoA400">View All</Text>
                    </Link>
                    <Img
                      className="h-[15px] mb-1 mt-[7px]"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
                <List
                  className="sm:flex-col flex-row gap-11 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                  orientation="horizontal"
                >
                  {blogs &&
                    blogs?.length > 0 &&
                    blogs?.slice(0, 3)?.map((o, i) => (
                      <div
                        className="flex flex-1 flex-col items-center justify-start w-full"
                        key={o?.id}
                      >
                        <div className="flex flex-col items-start justify-start pb-[71px] w-full">
                          <Img
                            className="h-[200px] sm:h-auto object-cover w-full"
                            src={o?.image_url}
                            alt="bitmapcopyTwentyOne"
                          />
                          <Text
                            className="mt-[27px] text-gray-900 text-xl"
                            size="txtMuliRegular20"
                          >
                            {o?.name}
                          </Text>
                          <Text
                            className="mt-[7px] text-gray-700 text-sm"
                            size="txtMuliRegular14"
                          >
                            <span className="text-gray-700 font-mulish text-left font-normal">
                              {formatDate(o?.createdAt)}
                            </span>
                            <span className="text-red-A700 font-mulish text-left font-normal">
                              {" "}
                              {o?.writer_name}
                            </span>
                          </Text>
                          <Text
                            className="mt-[13px] text-base text-gray-700"
                            size="txtMuliRegular16"
                          >
                            {o?.short_description}
                          </Text>
                        </div>
                      </div>
                    ))}
                </List>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-end mt-24 pt-[79px] md:px-5 w-[55%] md:w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="md:gap-5 gap-[60px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                  <div className="flex flex-1 flex-col gap-[11px] items-start justify-start w-full">
                    <input
                      type="text"
                      name="fname"
                      ref={register({ required: "First Name is required" })}
                      placeholder="First Name"
                      className="mt-1 text-[15px] text-gray-700"
                    />
                    {errors.fname && <p>{errors.fname.message}</p>}
                  </div>

                  <div className="flex flex-1 flex-col gap-[11px] items-start justify-start w-full ">
                    <input
                      type="text"
                      name="lname"
                      ref={register({ required: "Last Name is required" })}
                      placeholder="Last Name"
                    />
                    {errors.lname && <p>{errors.lname.message}</p>}
                  </div>

                  <div className="flex flex-1 flex-col gap-[11px] items-start justify-start w-full">
                    <input
                      type="email"
                      name="email"
                      ref={register({
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="Email"
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                  </div>

                  <div className="flex flex-1 flex-col gap-[11px] items-start justify-start w-full">
                    <input
                      type="tel"
                      name="phone"
                      ref={register({ required: "Phone is required" })}
                      placeholder="Phone"
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}
                  </div>
                  <div className="flex flex-1 flex-col gap-[11px] items-start justify-start w-full">
                    <input
                      type="number"
                      name="budget"
                      ref={register({ required: "Budget is required" })}
                      placeholder="Budget"
                    />
                    {errors.budget && <p>{errors.budget.message}</p>}
                  </div>
                  <div className="flex flex-1 flex-col gap-[11px] items-start justify-start w-full">
                    <textarea
                      name="description"
                      ref={register({ required: "Description is required" })}
                      placeholder="Description"
                    />
                    {errors.description && <p>{errors.description.message}</p>}
                  </div>
                  <button
                    className="w-full bg-orange-500 font-bold rounded-md p-4"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <footer className="flex items-center justify-center mt-36 md:px-5 w-full">
          <div className="bg-blue_gray-50 flex flex-col items-center justify-center p-[46px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col md:gap-10 gap-[118px] items-center justify-center mt-[76px] w-[85%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                <div className="flex flex-col gap-7 items-start justify-start md:mt-0 mt-2.5">
                  <Text
                    className="leading-[32.00px] text-[22px] text-gray-900 sm:text-lg md:text-xl w-full"
                    size="txtMuliBold22"
                  >
                    Tagline will go here. Lorem ipsum doler sit amet…
                  </Text>
                  <Text
                    className="text-[22px] text-cyan-A400 sm:text-lg md:text-xl"
                    size="txtMuliBold22CyanA400"
                  >
                    {settings?.contact_mail}
                  </Text>
                </div>
                <Img
                  className="h-40 md:ml-[0] ml-[136px]"
                  src="images/img_26divider1px_blue_gray_300.svg"
                  alt="26divider1px"
                />
                <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] ml-[111px] md:mt-0 mt-2.5 pt-1">
                  <Text
                    className="text-[13px] text-gray-900"
                    size="txtMuliSemiBold13"
                  >
                    Address
                  </Text>
                  <Text
                    className="leading-[30.00px] text-[15px] text-gray-700"
                    size="txtMuliRegular15"
                  >
                    <>{settings?.address}</>
                  </Text>
                </div>
                <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] ml-[126px] md:mt-0 mt-2.5 pt-1">
                  <Text
                    className="text-[13px] text-gray-900"
                    size="txtMuliSemiBold13"
                  >
                    Contacs
                  </Text>
                  <Text
                    className="leading-[30.00px] text-[15px] text-gray-700"
                    size="txtMuliRegular15"
                  >
                    <>
                      {settings?.contact_mail}
                      <br />
                      {settings?.contact_no}
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="md:flex-1 h-[60px] sm:h-auto object-cover w-[12%] md:w-full"
                  src="images/img_bitmap.png"
                  alt="bitmap_One"
                />
                <ul className="flex md:flex-1 flex-row items-start justify-center md:ml-[0] ml-[255px] pt-[3px] px-[3px] w-[32%] md:w-full common-column-list">
                  <li>
                    <Link
                      // href="javascript:"
                      to={"/"}
                      className="mb-0.5 ml-2 text-[15px] text-center text-gray-700"
                    >
                      <Text size="txtMuliSemiBold15">About</Text>
                    </Link>
                  </li>
                  <li>
                    <Link
                      // href="javascript:"
                      to={"/"}
                      className="ml-[55px] text-[15px] text-center text-gray-700"
                    >
                      <Text size="txtMuliSemiBold15">Blogs</Text>
                    </Link>
                  </li>
                  <li>
                    <Link
                      // href="javascript:"
                      to={"/"}
                      className="ml-[50px] text-[15px] text-center text-gray-700"
                    >
                      <Text size="txtMuliSemiBold15">Contact</Text>
                    </Link>
                  </li>
                  <li>
                    <Link
                      // href="javascript:"
                      to={"/"}
                      className="ml-[39px] text-[15px] text-center text-gray-700"
                    >
                      <Text size="txtMuliSemiBold15">Services</Text>
                    </Link>
                  </li>
                </ul>
                <Text
                  className="md:ml-[0] ml-[229px] text-blue_gray-900_85 text-right text-xs"
                  size="txtMuliRegular12"
                >
                  ￼© 2022. All rights reserved
                </Text>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home1Page;
