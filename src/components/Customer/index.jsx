import React from 'react';
import styles from "./style.module.css";
import Image from "../../assets/Rectangle 1270 (3).svg";
import Image2 from "../../assets/Rectangle 12701.svg";
import BarChart from "../../assets/Group 208.svg";
import { DataList } from "./Data";
import { DataList2 } from "./Data";
import {IoCheckmarkCircle} from "react-icons/io5";
import ReactApexChart from "react-apexcharts";




const Customer = () => {
 
  const chartData = {
    series: [35, 30, 35],
  
    options: {
      chart: { type: "donut", 
        width: '100%',
      height: '100%' },
      legend: { show: false, position: 'bottom',  itemMargin: {
        horizontal: 5,
        vertical: 0
    }, },
      dataLabels: { enabled: false },
      tooltip: { enabled: false },
      fill: { colors: [ "#69E6A6","#0A2640","#0DBBFC"] },
      states: {
        hover: { filter: { type: "lighten", value: 0.5 } },
        active: { filter: { type: "none", value: 0 } }
      },
  
  
  labels: ['35% -  Agile Development', '30% -  Investor bandwidth','35% -  A/B testing '],
      plotOptions: {
        pie: {
          expandOnClick: false,
          donut: {
            size: "65%",
            labels: {
              show: true,
              name: { show: true },
              total: {
                show: false,
                showAlways: true,
              }
            }
          }
        }
      }
    }
  };
  

  return (
    <>
      <section className={styles.customer}>
        <div className={styles.container}>
          <div className={styles.con}>
            <div className={styles.ImageCon}>
              <img src={Image} alt="CustomerImage" />
            </div>
            <div className={styles.ChartCon}>
              <div className={styles.Chart}>
                <div className={styles.ChartFlow}>
                  <img src={BarChart} alt="Chart" />
                </div>
                <div className={styles.ChartGroup}>
                  <span className={styles.ChartNum}>30%</span>
                  <span className={styles.ChartText}>More income in june</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.CustomerDescription}>
            <span className={styles.content}>
              {" "}
              We connect our customers with the best, and help them keep up-and
              stay open.
            </span>
            <div className={styles.ContentMark}>
              {DataList.map((item) => (
                <div key={item.id}>
                  <div className={styles.checkText}>
                    <IoCheckmarkCircle className={styles.check} />{" "}
                    <span>{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className={styles.heroBtn}>Start now</button>
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.CustomerDescription}>
            <span className={styles.content}>
              {" "}
              We connect our customers with the best, and help them keep up-and
              stay open.
            </span>
            <div className={styles.ContentMark2}>
              {DataList2.map((item) => (
                <div key={item.id}>
                  <div className={styles.checkText2}>
                    <div className={styles.TextBox}>
                    <span>{item.image}</span>
                    <span>{item.text}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.con2}>
            <div className={styles.ImageCon}>
              <img src={Image2} alt="CustomerImage" />
            </div>
            <div className={styles.ChartCon2}>
              <div className={styles.Chart2}>
                <div className={styles.ChartFlow2}>
                      <ReactApexChart
                      options={chartData.options}
                      series={chartData.series}
                      type="donut"
                      width="179px" 
                      height="200px"
                      />
                       <div className={styles.ChartGroup2}>
                        <div className={styles.percent}> <div className={styles.color}></div> <span>35% -  Agile Development</span></div>
                        <div className={styles.percent}> <div className={styles.color2}></div> <span>30% -  Investor bandwidth</span></div>
                        <div className={styles.percent}> <div className={styles.color3}></div> <span>35% -  A/B testing </span></div>
                       </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Customer;