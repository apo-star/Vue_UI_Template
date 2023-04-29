
<div
            class="bg-purple-700 rounded-xl p-5 flex flex-col shadow-sm"
            style="width: 344px; height: 290px"
          >
            <div>
              <Swiper
                :modules="modules"
                :slides-per-view="1"
                :space-between="20"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :pagination="{
                  el: '.swiper-pagination',
                  type: 'bullets',
                  clickable: true,
                }"
                :effect="'fade'"
              >
                <swiper-slide>
                  <div
                    class="pt-5 px-5 pb-4 flex flex-col justify-between"
                    style="
                      width: 272px;
                      height: 164px;
                      background: linear-gradient(
                        45deg,
                        #42307d 0%,
                        #7f56d9 100%
                      );
                      box-shadow: 7.64557px 9.55696px 15.2911px
                        rgba(0, 0, 0, 0.05);
                      border-radius: 20px;
                    "
                  >
                    <div class="flex justify-between">
                      <h4 class="font-semibold text-white text-base">
                        Untitled.
                      </h4>
                      <img
                        src="../assets/dashboardIcons/paypass.svg"
                        class="h-6 w-5"
                        alt="paypass"
                      />
                    </div>
                    <div class="flex justify-between items-end">
                      <div class="flex flex-col gap-2">
                        <div class="flex justify-between">
                          <h5 class="text-white font-semibold text-xs">
                            {{ user.displayName }}
                          </h5>
                          <h5 class="text-white font-semibold text-xs">
                            06/25
                          </h5>
                        </div>
                        <h3 class="text-white font-semibold text-sm">
                          1234 1234 1234 1234
                        </h3>
                      </div>
                      <div
                        class="h-8 w-11 flex items-center"
                        style="
                          background: rgba(255, 255, 255, 0.1);
                          border-radius: 3.82278px;
                          padding: 7px;
                        "
                      >
                        <img
                          src="../assets/dashboardIcons/mastercard.svg"
                          alt=""
                          class="mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-between mt-5">
                    <p class="text-white text-sm font-medium">This month</p>
                    <p class="text-purple-200 text-sm font-normal">$1,240.40</p>
                  </div>
                  <p class="h-2 relative bg-purple-200 rounded mt-2">
                    <span
                      class="absolute h-2 bg-purple-500 rounded"
                      style="width: 54%"
                    ></span>
                  </p>
                </swiper-slide>

                <swiper-slide>
                  <div
                    class="pt-5 px-5 pb-4 flex flex-col justify-between z-20"
                    style="
                      width: 272px;
                      height: 164px;
                      background: linear-gradient(
                        45deg,
                        #101828 0%,
                        #475467 100%
                      );
                      box-shadow: 8px 10px 16px rgba(0, 0, 0, 0.05);
                      border-radius: 20px;
                    "
                  >
                    <div class="flex justify-between">
                      <h4 class="font-semibold text-white text-base">
                        Untitled.
                      </h4>
                      <img
                        src="../assets/dashboardIcons/paypass.svg"
                        class="h-6 w-5"
                        alt="paypass"
                      />
                    </div>
                    <div class="flex justify-between items-end">
                      <div class="flex flex-col gap-2">
                        <div class="flex justify-between">
                          <h5 class="text-white font-semibold text-xs">
                            {{ user.displayName }}
                          </h5>
                          <h5 class="text-white font-semibold text-xs">
                            06/25
                          </h5>
                        </div>
                        <h3 class="text-white font-semibold text-sm">
                          1234 1234 1234 1234
                        </h3>
                      </div>
                      <div
                        class="h-8 w-11 flex items-center"
                        style="
                          background: rgba(255, 255, 255, 0.1);
                          border-radius: 3.82278px;
                          padding: 7px;
                        "
                      >
                        <img
                          src="../assets/dashboardIcons/mastercard.svg"
                          alt=""
                          class="mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-between mt-5">
                    <p class="text-white text-sm font-medium">This month</p>
                    <p class="text-purple-200 text-sm font-normal">$1,240.40</p>
                  </div>
                  <p class="h-2 relative bg-purple-200 rounded mt-2">
                    <span
                      class="absolute h-2 bg-purple-500 rounded"
                      style="width: 54%"
                    ></span>
                  </p>
                </swiper-slide>

                <swiper-slide 
                  
                >
                  <div
                    class="pt-5 px-5 pb-4 flex flex-col justify-between"
                    style="
                      width: 272px;
                      height: 164px;
                      background: linear-gradient(45deg, brown 0%, #dc143c 100%);
                      box-shadow: 8px 10px 16px rgba(0, 0, 0, 0.05);
                      border-radius: 20px;
                    "
                  >
                    <div class="flex justify-between">
                      <h4 class="font-semibold text-white text-base">
                        Untitled.
                      </h4>
                      <img
                        src="../assets/dashboardIcons/paypass.svg"
                        class="h-6 w-5"
                        alt="paypass"
                      />
                    </div>
                    <div class="flex justify-between items-end">
                      <div class="flex flex-col gap-2">
                        <div class="flex justify-between">
                          <h5 class="text-white font-semibold text-xs">
                            {{ user.displayName }}
                          </h5>
                          <h5 class="text-white font-semibold text-xs">
                            06/25
                          </h5>
                        </div>
                        <h3 class="text-white font-semibold text-sm">
                          1234 1234 1234 1234
                        </h3>
                      </div>
                      <div
                        class="h-8 w-11 flex items-center"
                        style="
                          background: rgba(255, 255, 255, 0.1);
                          border-radius: 3.82278px;
                          padding: 7px;
                        "
                      >
                        <img
                          src="../assets/dashboardIcons/mastercard.svg"
                          alt=""
                          class="mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-between mt-5">
                    <p class="text-white text-sm font-medium">This month</p>
                    <p class="text-purple-200 text-sm font-normal">$1,240.40</p>
                  </div>
                  <p class="h-2 relative bg-purple-200 rounded mt-2">
                    <span
                      class="absolute h-2 bg-purple-500 rounded"
                      style="width: 54%"
                    ></span>
                  </p>
                </swiper-slide>
              </Swiper>
              <!-- <div class="flex flex-col relative mt-5 w-fit">
                <div class="swiper-pagination custom-pagination"></div>
              </div> -->
            </div>
          </div>

// data() {
    //   return {
    //     activeIndex: 2,
    //     cards: [
    //       {
    //         title: "Untitled",
    //         background: "linear-gradient(45deg, #42307d 0%, #7f56d9 100%)",
    //         expiration: "06/25",
    //         cardNumber: "1234 1234 1234 1234",
    //         icon: "/src/assets/dashboardIcons/mastercard.svg",
    //         month: "This month",
    //         amount: "$1,340.40",
    //         progress: 54,
    //       },
    //       {
    //         title: "Untitled",
    //         background: "linear-gradient(45deg, #101828 0%, #475467 100%  )",
    //         expiration: "09/26",
    //         cardNumber: "5678 5678 5678 5678",
    //         icon: "/src/assets/dashboardIcons/mastercard.svg",
    //         month: "This month",
    //         amount: "$1,240.40",
    //         progress: 54,
    //       },
    //       {
    //         title: "Untitled",
    //         background: "linear-gradient(45deg, brown 0%, #dc143c 100%)",
    //         expiration: "07/25",
    //         cardNumber: "1234 1234 1234 1234",
    //         icon: "/src/assets/dashboardIcons/mastercard.svg",
    //         month: "This month",
    //         amount: "$1,240.40",
    //         progress: 54,
    //       },
    //     ],
    //     acctButtons: [
    //       {
    //         id: 1,
    //         label: "Overview",
    //         component: "AcctOverview",
    //         data: {
    //           accountNumber: "1234567890",
    //           data() {
    //             const activeIndex = this.$refs.mySwiper.$swiper.activeIndex;
    //             return {
    //               balance: this.cards[activeIndex].amount,
    //             };
    //           },
    //         },
    //       },
    //       {
    //         id: 2,
    //         label: "Budget",
    //         component: "AcctBudget",
    //         data: {
    //           budget: "$1,240.40",
    //           spent: "$1,240.40",
    //           remaining: "$1,240.40",
    //         },
    //       },
    //     ],
    //     activeButton: null,
    //   };
    // },


    const [photoURL, setPhotoURL] = useState("https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png")

    useEffect(() => {
       setPhotoURL(currentUser.photoURL);
    }, [currentUser])
  