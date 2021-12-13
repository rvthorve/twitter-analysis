import * as React from 'react';
import Chart from "react-google-charts";
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box';
import { TagCloud } from 'react-tagcloud'
import Typography from '@mui/material/Typography';
import POI from './POI';
export default function Analysis() {
   const data = [{"value":"50crBaahubali","count":1},{"value":"AAPI","count":1},{"value":"AI","count":1},{"value":"ASH21","count":4},{"value":"ASL","count":1},{"value":"AbuDhabiGP","count":1},{"value":"AbuDhabiGPLagos","count":1},{"value":"Abuja","count":1},{"value":"Agenda2030","count":1},{"value":"AllinIllinois","count":1},{"value":"AllowCOVAXforEritrea","count":1},{"value":"Amul","count":1},{"value":"AndamanAndNicobar","count":1},{"value":"Artist","count":1},{"value":"Arts","count":1},{"value":"AskTheExperts","count":1},{"value":"Assam","count":1},{"value":"AstraZeneca","count":1},{"value":"AzadiKaAmritMahotsav","count":1},{"value":"BLA","count":1},{"value":"BNT162b2","count":1},{"value":"BREAKING","count":4},{"value":"BaldwinPark","count":1},{"value":"Bayern","count":1},{"value":"Berlin","count":1},{"value":"BharatThanksModiJi","count":1},{"value":"Biden","count":4},{"value":"BidenAdministration","count":1},{"value":"BidenHarris","count":1},{"value":"BigBird","count":1},{"value":"Bihar","count":3},{"value":"BioNTech","count":1},{"value":"BlackPanther","count":1},{"value":"Booster","count":14},{"value":"BoosterShots","count":2},{"value":"BorisMustGo","count":1},{"value":"BorisTheLiar","count":1},{"value":"Boston","count":1},{"value":"Bronx","count":2},{"value":"Buffalo","count":2},{"value":"Business","count":1},{"value":"BusinessOwner","count":1},{"value":"CDC","count":3},{"value":"CNN","count":3},{"value":"COVAX","count":2},{"value":"COVAXIN","count":2},{"value":"COVI19Vaccines","count":2},{"value":"COVID","count":52},{"value":"COVID19","count":1393},{"value":"COVID19LK","count":1},{"value":"COVID19SL","count":1},{"value":"COVID19Vaccination","count":2},{"value":"COVID19Vaccine","count":6},{"value":"COVID19vaccine","count":2},{"value":"COVID22","count":2},{"value":"COVIDIOTS","count":2},{"value":"COVIDSHIELD","count":1},{"value":"COVIDVaccination","count":1},{"value":"COVIDVaccine","count":2},{"value":"COVIDVaccineForum","count":4},{"value":"COVIDVaccines","count":1},{"value":"COVID_19","count":1},{"value":"COVIDtesting","count":1},{"value":"COVIDー19","count":4},{"value":"COVISHIELD","count":1},{"value":"COWIN","count":1},{"value":"CallToAction","count":1},{"value":"Canada","count":1},{"value":"CancelTrumpism","count":1},{"value":"CatoCOVID","count":2},{"value":"CatoHealth","count":2},{"value":"CervicalCancerAwarenessMonth","count":1},{"value":"Chennaiites","count":1},{"value":"Chhattisgarh","count":1},{"value":"Christian","count":1},{"value":"Christmas","count":2},{"value":"Christmas2021","count":1},{"value":"Clinicians","count":1},{"value":"Corona","count":4},{"value":"CoronaVaccination","count":1},{"value":"CoronaVirus","count":1},{"value":"Coronavirus","count":3},{"value":"Coronawarrior","count":1},{"value":"Covaxin","count":4},{"value":"Covid","count":10},{"value":"Covid19","count":16},{"value":"Covid19UK","count":1},{"value":"Covid19Vaccines","count":2},{"value":"Covid19_Vaccination_Update","count":1},{"value":"CovidPlanB","count":1},{"value":"CovidVaccine","count":5},{"value":"CovidVaccines","count":1},{"value":"CovidVariants","count":2},{"value":"Covid_19","count":11},{"value":"Covidshield","count":4},{"value":"Covishield","count":1},{"value":"CriticalCare","count":1},{"value":"Czech","count":2},{"value":"DYK","count":28},{"value":"DecZoomMtg","count":1},{"value":"Delta","count":1},{"value":"DeltaVariant","count":62},{"value":"Deltavariant","count":2},{"value":"DiadelosMuertos","count":2},{"value":"DidYouKnow","count":1},{"value":"DisabilityAlly","count":1},{"value":"Diseases","count":1},{"value":"DoNotComply","count":1},{"value":"Domain","count":1},{"value":"EUA","count":1},{"value":"EUL","count":1},{"value":"Easter","count":1},{"value":"Education","count":1},{"value":"Entrepreneurship","count":1},{"value":"ExcelsiorPass","count":1},{"value":"F1","count":2},{"value":"F4F","count":1},{"value":"FAQ","count":3},{"value":"FDA","count":1},{"value":"FGN","count":1},{"value":"Fauci","count":1},{"value":"Federal","count":1},{"value":"FightAgainstCOVID","count":19},{"value":"FightFlu","count":2},{"value":"Fire","count":1},{"value":"Flag","count":1},{"value":"Flu","count":6},{"value":"FluFact","count":1},{"value":"FluVaccine","count":1},{"value":"FluView","count":1},{"value":"ForUsAll","count":1},{"value":"ForceVaccinate","count":1},{"value":"FoxNews","count":3},{"value":"FreeVaccineForAll","count":1},{"value":"GCC","count":1},{"value":"GERMAN","count":1},{"value":"GOPCorruptionOverCountry","count":1},{"value":"GeneTherapy","count":1},{"value":"GeorgeLatimer","count":1},{"value":"GetBoosted","count":11},{"value":"GetTheFacts","count":1},{"value":"GetTheJab","count":1},{"value":"GetTheVaxFacts","count":1},{"value":"GetVaccinated","count":109},{"value":"GetVaccinatedNow","count":11},{"value":"GetVaccinatedOrGetCovid","count":3},{"value":"GetVaxxed","count":9},{"value":"GiveUsPeace","count":1},{"value":"Goa","count":1},{"value":"Gradepaysolution","count":1},{"value":"Gratitude","count":1},{"value":"Gujarat","count":2},{"value":"Gynecology","count":1},{"value":"HCPs","count":22},{"value":"HCWs","count":1},{"value":"HPV","count":1},{"value":"HPVvaccine","count":1},{"value":"HappyBirthdayModiji","count":1},{"value":"HappyHospital","count":1},{"value":"HappyMultispecialityHospital","count":1},{"value":"HarGharDastak","count":646},{"value":"Harayan","count":1},{"value":"Haryana","count":1},{"value":"HeadlinesMatter","count":1},{"value":"Health","count":3},{"value":"HealthArmy","count":1},{"value":"HealthCanada","count":1},{"value":"HealthEquity","count":1},{"value":"Healthcare","count":2},{"value":"Hospital","count":1},{"value":"HowIRecommend","count":1},{"value":"ICYMI","count":3},{"value":"ILOlderAdults","count":1},{"value":"IndependenceDay","count":1},{"value":"India","count":5},{"value":"IndiaFightsCorona","count":29},{"value":"Influenza","count":1},{"value":"InternalMedicine","count":1},{"value":"Israel","count":2},{"value":"Ivermectin","count":3},{"value":"JOLPOL","count":1},{"value":"JabPassport","count":1},{"value":"Jabbageddon","count":1},{"value":"JanhitTimes","count":1},{"value":"Jesseprize","count":1},{"value":"JesusChrist","count":1},{"value":"Jharkhand","count":1},{"value":"JonesBeach","count":1},{"value":"KeepOthersSafe","count":2},{"value":"Kerala","count":1},{"value":"KeyVote","count":1},{"value":"LGM","count":1},{"value":"LNK","count":1},{"value":"LaborDay","count":2},{"value":"LargestVaccinationDrive","count":24},{"value":"LargestVaccineDrive","count":86},{"value":"LetitiaWright","count":1},{"value":"LetsBuildUG","count":1},{"value":"LetsGetToImmunity","count":2},{"value":"LetsGoBrandon","count":1},{"value":"LewisHamilton","count":1},{"value":"Library","count":1},{"value":"Local","count":1},{"value":"LongTermCare","count":4},{"value":"LoveOneAnother","count":1},{"value":"MDS","count":1},{"value":"MadeInIndia","count":1},{"value":"MakeInIndia","count":1},{"value":"Mandates","count":1},{"value":"MannKiBaat","count":4},{"value":"MaskMandate","count":1},{"value":"MaskUp","count":2},{"value":"MaskUpNY","count":2},{"value":"MaxVerstappen","count":1},{"value":"Mayor","count":1},{"value":"Mcu","count":1},{"value":"MedTwitter","count":1},{"value":"Meghalaya","count":1},{"value":"Mexico","count":1},{"value":"Michigan","count":1},{"value":"Minnesota","count":1},{"value":"Misinformation","count":1},{"value":"Mizoram","count":2},{"value":"Moderna","count":5},{"value":"Myocarditis","count":2},{"value":"NCDC","count":1},{"value":"NCSL","count":1},{"value":"NHS","count":1},{"value":"NIAM","count":1},{"value":"NIH","count":1},{"value":"NIIW","count":3},{"value":"NJ","count":1},{"value":"NPHCDA","count":1},{"value":"NYC","count":4},{"value":"NationalGuard","count":1},{"value":"NationalNursesDay","count":1},{"value":"NationalNursesWeek","count":1},{"value":"NearExpiry","count":1},{"value":"NeilCavuto","count":1},{"value":"NeverVoteConservative","count":1},{"value":"NewYear2022","count":1},{"value":"News","count":1},{"value":"NewsIndia","count":1},{"value":"Nicaragua","count":1},{"value":"Nigeria","count":1},{"value":"Ninja","count":1},{"value":"NoNormalWOVaccines","count":1},{"value":"NoVaccineMandates","count":1},{"value":"NoVaccinePassports","count":3},{"value":"NoVaccinePassportsAnywhere","count":5},{"value":"NoVaccine_NoPandemic","count":1},{"value":"NotoPlanB","count":1},{"value":"Nurses","count":1},{"value":"OCGN","count":1},{"value":"OMICRON","count":1},{"value":"Omicrom","count":1},{"value":"Omicron","count":34},{"value":"OmicronAlert","count":2},{"value":"OmicronIsComing","count":1},{"value":"OmicronVariant","count":15},{"value":"OmicronVirus","count":4},{"value":"Omicronvariant","count":1},{"value":"Omnicron","count":1},{"value":"OmnicronVariant","count":1},{"value":"OneWorldProtected","count":1},{"value":"OnlyonTwitter","count":1},{"value":"OperationAlliesWelcome","count":1},{"value":"Orthopedics","count":1},{"value":"PMModiAtUNGA","count":1},{"value":"Parang","count":1},{"value":"Parents","count":10},{"value":"Pediatrician","count":1},{"value":"Pediatricians","count":2},{"value":"Pediatrics","count":1},{"value":"Pentagon","count":1},{"value":"Pfizer","count":18},{"value":"Pfizergate","count":1},{"value":"Pfizervaccine","count":1},{"value":"Pharmaceutical","count":1},{"value":"PlanB","count":1},{"value":"Poetry","count":1},{"value":"Police","count":1},{"value":"Politics","count":2},{"value":"Prague","count":1},{"value":"Pregnancy","count":1},{"value":"PresidencyofHope","count":1},{"value":"President","count":1},{"value":"PresidentRamophosa","count":1},{"value":"PublicServiceDay","count":1},{"value":"Pulmonology","count":1},{"value":"Pwi","count":1},{"value":"Queens","count":3},{"value":"ROC","count":1},{"value":"Rabies","count":1},{"value":"Ramadan","count":1},{"value":"RamnathKovind","count":1},{"value":"Raptors","count":1},{"value":"RealTimeCOVID19","count":1},{"value":"Refusniks","count":1},{"value":"RegionalSecurity","count":1},{"value":"Resist","count":1},{"value":"Rochester","count":2},{"value":"Rwanda","count":1},{"value":"SARSCoV2","count":2},{"value":"SCIENCE","count":1},{"value":"SJRes29","count":1},{"value":"SabkoMuftVaccine","count":1},{"value":"SabkoVaccineMuftVaccine","count":7},{"value":"Salud","count":1},{"value":"School","count":1},{"value":"Scotland","count":1},{"value":"Senate","count":1},{"value":"SleeveUp","count":19},{"value":"SleeveUpforChildcare","count":1},{"value":"SleeveUpforHeadStart","count":1},{"value":"SleeveUpforSchools","count":2},{"value":"SlowTheSpread","count":1},{"value":"Solidarity","count":1},{"value":"SouthKorea","count":1},{"value":"SriLanka","count":3},{"value":"State","count":1},{"value":"StaySafe","count":6},{"value":"StaySafeStayHealthy","count":1},{"value":"StopTheShots","count":1},{"value":"SurakshaKaTika","count":1},{"value":"Syringe","count":1},{"value":"TMKOC","count":1},{"value":"TRIPSwaiver","count":1},{"value":"TamilNadu","count":1},{"value":"Teachers","count":1},{"value":"TeamIndia","count":3},{"value":"Technology","count":1},{"value":"Tennessee","count":2},{"value":"Thankful","count":1},{"value":"ThisIsTheirShot","count":1},{"value":"TipsToHelpYouRemember","count":1},{"value":"To_Vaccine_Is_My_Choice","count":2},{"value":"Together","count":1},{"value":"TogetherDeclaration","count":1},{"value":"TrackandTrace","count":1},{"value":"TragicMulat","count":1},{"value":"TrendsSpy","count":2},{"value":"Trump","count":1},{"value":"UK","count":1},{"value":"US","count":2},{"value":"UgMoving4wd","count":1},{"value":"Ukraine","count":1},{"value":"Unite2FightCorona","count":75},{"value":"VACCINATED","count":5},{"value":"VACCINE","count":1},{"value":"VCCH","count":1},{"value":"Vaccigen","count":1},{"value":"Vaccinate","count":4},{"value":"VaccinateNY","count":95},{"value":"VaccinateNow","count":1},{"value":"Vaccinated","count":8},{"value":"VaccinatieDoden","count":1},{"value":"VaccinatieSchade","count":1},{"value":"Vaccination","count":12},{"value":"VaccinationDriveSL","count":2},{"value":"VaccinationObligatoire","count":2},{"value":"Vaccine","count":30},{"value":"VaccineCentury","count":21},{"value":"VaccineCertificate","count":3},{"value":"VaccineDeaths","count":1},{"value":"VaccineForAll","count":2},{"value":"VaccineMaitri","count":1},{"value":"VaccineMandate","count":5},{"value":"VaccineMandates","count":3},{"value":"VaccinePassports","count":2},{"value":"VaccineSafety","count":2},{"value":"VaccineSeva","count":1},{"value":"Vaccinecentury","count":1},{"value":"Vaccines","count":7},{"value":"VaccinesSaveLives","count":4},{"value":"VaccinesWork","count":20},{"value":"VacunaCOVID19","count":1},{"value":"Vacunate","count":1},{"value":"VaxFact","count":10},{"value":"VaxLive","count":1},{"value":"VaxToSchool","count":2},{"value":"VaxUpIL","count":1},{"value":"VaxUpPhilly","count":1},{"value":"VaxandWin","count":1},{"value":"Vaxxed","count":1},{"value":"Verstappen","count":1},{"value":"VicenteFernandez","count":1},{"value":"WHO","count":1},{"value":"WNY","count":2},{"value":"WakandaForever","count":1},{"value":"We4Vaccine","count":1},{"value":"WeAreSCCOE","count":1},{"value":"WeCanDoThis","count":17},{"value":"WeHealAsOnePH","count":1},{"value":"WeMustSaveUs","count":1},{"value":"WearADamnMask","count":3},{"value":"WearAMask","count":16},{"value":"WeeklyUpdates","count":1},{"value":"WellDoneIndia","count":1},{"value":"WhatsYourWhy","count":1},{"value":"WomeninSTEM","count":4},{"value":"WorldRabiesDay","count":1},{"value":"WorldsLargestVaccinationDrive","count":1},{"value":"YankeeStadium","count":1},{"value":"abujanigeria","count":1},{"value":"against","count":1},{"value":"airports","count":1},{"value":"anger","count":3},{"value":"antivaxxers","count":12},{"value":"aspirationaldistrict","count":1},{"value":"auspol","count":1},{"value":"auspol2021","count":1},{"value":"belfast","count":3},{"value":"bharatBiotech","count":1},{"value":"bidens","count":1},{"value":"blackfungus","count":1},{"value":"blog","count":6},{"value":"blogging","count":3},{"value":"booster","count":9},{"value":"boosterprik","count":1},{"value":"boostershots","count":1},{"value":"borisjohnson","count":1},{"value":"business","count":1},{"value":"censorship","count":1},{"value":"charity","count":1},{"value":"civicduty","count":1},{"value":"commonsense","count":1},{"value":"community","count":1},{"value":"communityradio","count":2},{"value":"confused","count":1},{"value":"connectinglocals","count":1},{"value":"contractors","count":1},{"value":"corona","count":1},{"value":"coronaprotest","count":3},{"value":"coronavirus","count":19},{"value":"covaxin","count":1},{"value":"covid","count":16},{"value":"covid19","count":27},{"value":"covid19SA","count":7},{"value":"covid19aus","count":3},{"value":"covid19nsw","count":4},{"value":"covid19uk","count":1},{"value":"covidni","count":1},{"value":"covidpassport","count":1},{"value":"covidshield","count":1},{"value":"covidvacccine","count":1},{"value":"covidvaccinedeaths","count":1},{"value":"covidvariant","count":7},{"value":"covidvic","count":4},{"value":"covidwarriors","count":2},{"value":"dead","count":1},{"value":"delta","count":1},{"value":"deltavariant","count":13},{"value":"democratsenators","count":1},{"value":"die","count":1},{"value":"disinformation","count":6},{"value":"donaldtrump","count":1},{"value":"dying","count":1},{"value":"economics","count":1},{"value":"economy","count":1},{"value":"employmentlaw","count":1},{"value":"equality","count":1},{"value":"families","count":1},{"value":"federal","count":1},{"value":"fightflu","count":2},{"value":"findyourhealth","count":1},{"value":"flightdelays","count":1},{"value":"flu","count":10},{"value":"flushot","count":1},{"value":"fluvaccine","count":3},{"value":"for","count":1},{"value":"formularone","count":1},{"value":"fourthwave","count":4},{"value":"freedom","count":1},{"value":"getvaccinated","count":12},{"value":"government","count":1},{"value":"grateful","count":1},{"value":"gujarat","count":1},{"value":"health","count":4},{"value":"healthissues","count":1},{"value":"healthworkers","count":1},{"value":"help","count":2},{"value":"helpeachother","count":1},{"value":"hematology","count":1},{"value":"hepatitis","count":1},{"value":"herdimmunity","count":3},{"value":"hospital","count":6},{"value":"hospitalmarketing","count":5},{"value":"hospitals","count":1},{"value":"hotlads","count":1},{"value":"humanresources","count":1},{"value":"immunity","count":1},{"value":"indiafightscovid","count":1},{"value":"indore","count":1},{"value":"injunction","count":1},{"value":"issues","count":1},{"value":"isthisyou","count":1},{"value":"itsmath","count":1},{"value":"ivax2protect","count":3},{"value":"jabbed","count":1},{"value":"joemanchin","count":1},{"value":"judge","count":1},{"value":"ktvo","count":1},{"value":"largestVaccinationdrive","count":10},{"value":"leusm","count":1},{"value":"life","count":3},{"value":"lifestyle","count":6},{"value":"lka","count":1},{"value":"mRNA","count":3},{"value":"madhyapradesh","count":1},{"value":"mammogram","count":1},{"value":"man_wishes_he_had_taken_vaccine","count":1},{"value":"mandate","count":3},{"value":"masks","count":3},{"value":"maskup","count":1},{"value":"measles","count":2},{"value":"medialiteracy","count":1},{"value":"medtwitter","count":1},{"value":"military","count":1},{"value":"mobilecover","count":1},{"value":"moderna","count":1},{"value":"momentum","count":1},{"value":"nationwide","count":1},{"value":"nhpolitics","count":1},{"value":"nomandatoryvaccination","count":1},{"value":"normalicy","count":3},{"value":"nursinghome","count":1},{"value":"ocgn","count":1},{"value":"ocugen","count":1},{"value":"omicron","count":8},{"value":"omnicron","count":1},{"value":"omricon","count":1},{"value":"pandemic","count":6},{"value":"patients","count":1},{"value":"people","count":1},{"value":"physicians","count":5},{"value":"planetprize","count":1},{"value":"poisonjabs","count":1},{"value":"political","count":1},{"value":"politicalparties","count":1},{"value":"politics","count":1},{"value":"posters","count":1},{"value":"pregnancy","count":3},{"value":"pregnant","count":1},{"value":"primarycare","count":5},{"value":"propaganda","count":2},{"value":"publichealth","count":1},{"value":"quintillion","count":1},{"value":"radiodastak90","count":2},{"value":"recovery","count":1},{"value":"rubella","count":1},{"value":"sabkovaccinemuftvaccine","count":1},{"value":"savelives","count":1},{"value":"scam","count":1},{"value":"scicomm","count":3},{"value":"science","count":1},{"value":"sciencewins","count":1},{"value":"seattle","count":1},{"value":"share","count":1},{"value":"shingles","count":1},{"value":"smart","count":1},{"value":"southdelhifightscorona","count":1},{"value":"sputnikv","count":1},{"value":"ssgc","count":1},{"value":"staycalm","count":1},{"value":"staysafe","count":1},{"value":"sunegaujjainbadhegaujjain","count":2},{"value":"technofascism","count":1},{"value":"telegram","count":1},{"value":"transmissibility","count":1},{"value":"travel","count":3},{"value":"travelban","count":1},{"value":"truth","count":1},{"value":"truthmatters","count":1},{"value":"ujjain","count":2},{"value":"uk","count":1},{"value":"united","count":1},{"value":"unvaccinated","count":1},{"value":"upstate","count":1},{"value":"vaccinate","count":6},{"value":"vaccinated","count":30},{"value":"vaccination","count":48},{"value":"vaccinationprogramme","count":1},{"value":"vaccinations","count":7},{"value":"vaccine","count":148},{"value":"vaccinehesitant","count":3},{"value":"vaccines","count":36},{"value":"vaccineswork","count":1},{"value":"vaccins","count":1},{"value":"valsad","count":1},{"value":"variant","count":1},{"value":"vaxvantivax","count":1},{"value":"vaxxed","count":1},{"value":"virus","count":2},{"value":"wages","count":1},{"value":"whitefungus","count":1},{"value":"women","count":1},{"value":"workers","count":1},{"value":"worldwidetweets","count":1},{"value":"yellowfungus","count":1},{"value":"yyc","count":1},{"value":"اخترت_التطعيم","count":2},{"value":"ویکسین_لینا_میری_مرضی_ہے","count":2},{"value":"टीका_लगाना_मेरी_पसंद_है","count":2},{"value":"टीकाकरण","count":2}]
    return(
        <div>
            <br/>
            <br/>
        <Grid container spacing={2} padding = {2}>
            <Grid item xs={4} minHeight = {350} >
                <Chart
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Type', 'Number of Tweets'],
                        ['Covid', 31567],
                        ['Vaccination', 33485],
                        ['Others', 65052],
                    ]}
                    width={'100%'}
                    height={'100%'}
                    chartType="PieChart"
                    options={{
                        title: 'Tweet Distribution',
                    }}
                />
            </Grid>
            <Grid item xs={4} minHeight = {350}>
                <Chart
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['POI VS Non-POI', 'Number of Tweets'],
                        ['POI', 52658],
                        ['Non-POI', 63248]
                    ]}
                    width={'100%'}
                    height={'100%'}
                    chartType="PieChart"
                    options={{
                        title: 'POI vs Non-POI',
                    }}
                />
            </Grid>
            <Grid item xs={4} minHeight = {350}>
                <Chart
                    loader={<div>Loading Chart</div>}
                    data={[
                        ['Language', 'Number of Tweets'],
                        ['English', 54752],
                        ['Spanish', 32554],
                        ['Hindi', 14206]
                    ]}
                    width={'100%'}
                    height={'100%'}
                    chartType="PieChart"
                    options={{
                        title: 'Language wise tweet distribution',
                    }}
                />
            </Grid>
        </Grid>
        <br/>
        <Box sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', margin: 2, marginTop: 0, backgroundColor: "white" , minHeight:300}}>
            <Chart
                width={'100%'}
                height={'100%'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={[
                    ['POI', 'Tweets'],
                    ['Narendra Modi', 3272],
                    ['Amit Shah', 3264],
                    ['Ministry of Health of India', 3327],
                    // ['Dr. Raghu Sharma', 2879],
                    ['Mansukh Mandaviya', 3267],
                    ['Joe Biden', 3256],
                    ['CDC', 3264],
                    ['Andrew Cuomo', 3200],
                    ['Vice President Of USA', 3262],
                    ['Andrés Manuel López Obrador', 3260],
                    ['Secretaría de Salud de México', 3250],
                    // ['Porfirio Muñoz Ledo',''],
                    ['Marcelo Ebrard',3267],
                    ['Claudia Sheinbaum',3301],
                    ['Kamala Harris',3248],
                    ['Kathy Hochul',3280],
                    ['Gobierno de México',3270],
                    ['Xavier Becerra',467]
                ]}
                options={{
                    chart: {
                        title: 'POI Tweets'
                    },
                }}
            />  
         </Box>
         <br/>
         <Box sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', margin: 2, marginTop: 0, backgroundColor: "white" , height:350}}>
            <Chart
                width={'100%'}
                height={'100%'}
                chartType="GeoChart"
                data={[
                    ['Country', 'Tweets'],
                    ['India', 17427],
                    ['United States', 58642],
                    ['Mexico', 36842],
                ]}
            mapsApiKey="AIzaSyCeg3jpCCuMLPHzpcFvlJyczNTaVG58dTA"/>
         </Box>
         <Typography gutterBottom variant="h6" component="div" sx = {{margin:5}}>
            WordCloud of Hashtags of vaccine hesitancy
          </Typography>
         <Box sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', margin: 2, marginTop: 0, backgroundColor: "white" ,  maxHeight:500, overflow: 'auto'}}>
            <TagCloud
            minSize={12}
            maxSize={35}
            tags={data}
          />
         </Box>
         <br/>
        <POI/>
        </div>
    )
}