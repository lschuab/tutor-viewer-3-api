const axios = require('axios');
const URL = "http://localhost:8000"

const fall2018 = 
"Ali,Al Abboodi|LSC/3,14-0,19-0/6,10-0,14-0|BIO/156/160/181/182/201/205_CHM/130/151/235/236" +
"&Simran,Bhalla|LSC/1,12-1,16-1/2,12-1,17-0/4,12-1,16-1/5,14-0,17-0|MAT/081/082/092/093/121/122/142/150/151/182/187" +
"&Bob,Bureker|LSC/2,14-0,16-0/4,14-0,16-0|BPC/101/102/110/135_CIS/105/114/117/118/120/121/126/131/133" +
"&Alberto,Carazo Diaz|LSC/4,8-1,12-0/5,8-1,15-0|ACC/XXX_MAT/081/082/092/093/102/120/121/122/142/150/151/182/187/213/217/220" +
"&Cynthia,Cooper|LSC/1,15-0,19-0/2,8-0,16-0/3,8-0,14-0/4,8-0,13-0|TWC/XXX" +
"&Chris,Dahm|LSC/1,10-0,13-0/3,10-0,13-0/4,12-0,14-0/5,8-1,12-0/6,10-0,14-0|MAT/081/082/092/093/102/120/121/122/142/150/151/182/220" +
"&Zach,Duzan|LSC/1,12-0,15-0/3,8-1,17-1/5,8-1,17-0/6,10-0,14-0|MAT/081/082/092/093/102/121/122/142/150/151/182/187/213/217/220/230/276_PHY/101/111/112/121/131_CIS/163" +
"&Rob,Forrest|BM/2,10-1,13-1/3,13-0,16-0/4,10-1,13-1|MAT/081/082/092/093/102/120/121/122/142/150/206/220/206_GBS/221_PSY/230" +
"&James,Gallimore|LSC/2,14-0,19-0/4,8-0,11-0|ACC/111/112" +
"&Jeffrey,Gettinger|LSC/1,16-0,19-0/2,16-0,18-0/3,16-0,19-0/4,16-0,19-0|MAT/081/082/092/093/120/121/122/150/151/182/187/220/240/276" +
"&JoAnn,Gibbs|LSC/1,11-0,14-0/2,11-0,14-0|ASB/102/202/211/214/222/223/235_ASM/104/275_BIO/100/105/145/156/160/181/182/201/202_COM/XXX_ECN/211/212_GLG/101/102/110_HIS/100/101/102/103/104/110/111/113/114/273/277_PHI/XXX_PSY/101/132/240/250/260/266/290_SOC/101/130/140/212/270" +
"&Bill,Hamilton|LSC/1,8-1,12-0/1,13-0,19-0/2,8-1,12-0/2,13-0,19-0/4,10-1,15-1|BPC/101/120/110_CHM/103/151/152/230_CIS/105/114/117/150" +
"&Brenda,Hitesman|LSC/1,9-0,15-0|TWC/XXX" +
"&Bill,Johns|ML/1,16-0,19-0/3,16-0,19-0|MAT/081/082/092/093/102/120/121/122/142/150/151/182/187/213/217/220" +
"&Rishi,Kapoor|LSC/2,13-0,19-0/4,13-0,19-0/5,11-0,17-0|BIO/100/105/156/160/180/182/201/202/205/240/260_CHM/130/151/152/235/236_EMT/104_HCR/240_PHY/111/112" +
"&Hildegard,Koester|LSC/3,15-1,16-1/4,15-1,16-1|GER/XXX" +
"&Harold,Levin|LSC/1,9-1,13-1/3,9-1,13-1|MAT/120/121/122/140/141/142/150/151/182/187/206/212/213/220/230/257/206_PHY/101/111/121_GBS/221_PSY/230_CIS/150/162/163" +
"&John,Meggesin|ML/1,12-0,16-0/4,12-0,15-1|MAT/081/082/092/093/102/121/122/150/151/182/187/220_PHY/111/112/121/131" +
"&Linda,Maley|LSC/1,9-0,15-0/3,9-0,15-0|TWC/XXX" + 
"&Patrick,McKenna|LSC/3,8-0,9-0/3,17-0,19-0/4,13-1,15-1|EMT/XXX" +
"&Caitlyn,Miller|LSC/1,12-0,15-0/3,10-0,13-0|BIO/156/160/201/205" +
"&Erica,Niemoth|LSC/1,12-0,13-0/3,12-0,13-0/5,12-0,14-0|SPA/XXX" +
"&David,Petersen|LSC/1,14-0,16-0|NUR/XXX" +
"&Kevin,Rosas Hope|LSC/1,9-0,15-1,3/3,9-0,15-1_Q/1,15-1,18-0/3,15-1,18-0|MAT/081/082/092/093/102/120/121/122/142/150/151/182/187/213/217/220/227/230/241_ECE/103_CSC/120/205" +
"&Allan,Ratihn|ML/2,14-0,19-0/4,14-0,19-0|MAT/081/082/092/093/102/120/122" +
"&Melika,Sarkandi|LSC/3,8-0,10-0/5,8-0,11-0|BIO/181_CHM/151/152/235" +
"&Alan,Schwartz|LSC/2,15-1,19-0/4,15-1,19-0|MAT/081/082/092/093/102/120/121/122/142/150/151/182/187/213/217/220/230_PHY/111/112/121/122" +
"&Sylvia,Smith|LSC/2,16-1,19-0/4,16-1,19-0/6,10-0,14-0|TWC/XXX" +
"&Elizabeth,Stuff|BM/2,8-1,12-1|CHM/131/151/152" +
"&Starlight,Tucker|LSC/2,10-0,19-0/3,15-0,19-0/4,10-0,17-1/5,13-0,17-0|TWC/XXX" +
"&Palak,Verma|LSC/1,8-1,11-1/1,12-0,17-0/2,8-1,17-0|MAT/081/082/092/093/112/120/121/122/140/141/142/150/151/182/187" +
"&Brock,Weidauer|LSC/4,8-1,14-0|MAT/081/082/092/093/112/120/121/122/142/150/151/182/187/206/212/220_PHY/101/111/112/121/131_PSY/230" +
"&Amanda,Wiggins|ML/1,8-1,12-0/2,8-1,12-0/3,14-0,17-0/4,8-1,14-0|MAT/081/082/092/093/120/121/122/140/150/151/187" +
"&Jericho,Wolf|LSC/1,8-1,13-0/2,8-1,13-1/3,11-0,17-0/4,8-1,13-0_BM/4,13-1,17-0|AST/101/111/114_BIO/100/105/145/156/181/182/205/240_CHM/130/151/152_GLG/101/103/110/111_GPH/111/211_HIS/100/101/103/104/110" +
"&Peter,Yip|LSC/4,8-1,14-1_Q/1,8-1,14-1/2,8-1,14-1/3,8-1,14-1|MAT/081/082/092/093/102/120/121/122/142/150/151/182/187/206/213/217/220/230_PSY/230";

processData(fall2018)

function processData(data) {
  
  const tutors = data.split('&');
  const registeredCourses = {};
  let courseId = 1;

  for (let tutor of tutors) {
    const tutorData = tutor.split('|');

    const name = tutorData[0].split(',');
    const shiftLocations = tutorData[1].split('_');
    const courseSubjects = tutorData[2].split('_');

    const firstName = name[0];
    const lastName = name[1];


    axios.post(`${URL}/tutors`, { firstName, lastName })
      .then(response => {
        console.log(firstName + " " + lastName);
        const tutorId = response.data.id;

        const dayMap = {
          1: "Monday",
          2: "Tuesday",
          3: "Wednesday",
          4: "Thursday",
          5: "Friday",
          6:  "Saturday"
        }

        for (const location of shiftLocations) {
          const shiftsData = location.split('/');
          const center = shiftsData[0];
          console.log(center);
          const shifts = shiftsData.slice(1);
          
          for (const shift of shifts) {
            const shiftData = shift.split(",");
            const day = dayMap[shiftData[0]];
            const startTimeData = shiftData[1].split("-");
            const endTimeData = shiftData[2].split("-");
            const startTime = (startTimeData[0].length === 1 ? "0" : "") + startTimeData[0] + ":" + (startTimeData[1] !== '0' ? "30" : "00");
            const endTime = (endTimeData[0].length === 1 ? "0" : "") + endTimeData[0] + ":" + (endTimeData[1] !== '0' ? "30" : "00");

            console.log(day + ": " + startTime + " - " + endTime);
            axios.post(`${URL}/shifts`, { tutorId, center, day, startTime, endTime });
          }
        }

        const courses = [];

        for (const subject of courseSubjects) {
          const subjectData = subject.split("/");
          const coursePrefix = subjectData[0];
          const courseNumbers = subjectData.slice(1);
          for (const courseNumber of courseNumbers) {
            courses.push(coursePrefix + courseNumber);
          }
        }

        console.log(courses);
        console.log("\n\n");

        for (const course of courses) {
            if (!registeredCourses.hasOwnProperty(course)) {
              registeredCourses[course] = courseId++;
              axios.post(`${URL}/courses`, {courseCode: course});
            }
            axios.post(`${URL}/tutors/${tutorId}/courses/${registeredCourses[course]}`).catch(err => console.log("***", err));
        }
      });
  }
}

