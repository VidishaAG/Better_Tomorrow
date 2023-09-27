import React from 'react'

export const NGO = () => {

    const NGOlist = [
        {
            "index": 1,
            "Name": "Aashalata Victoria Wilkinson Memorial Charitable",
            "Image": "http://www.aashalata.org/css/logo/Logo.svg",
            "AreaOfWork": "Children, Education & Literacy",
            "Criteria": "Invited to participate in the 1st NGO Conference Of MWCD, 9 Oct 2017",
            "Contact": "L-96-D , 2nd Floor ,D.D.A Flats , Saket. 10058, NEW DELHI (DELHI)"
        },
        {
            "index": 2,
            "Name": "Aastha Foundation",
            "Image": "https://www.aasthafoundation.org/logo.png",
            "AreaOfWork": "Health & Family Welfare, Labour & Employment",
            "Criteria": "Received support from D.C Handicrafts, GOI, MWCD For various activities",
            "Contact": "12LF, Tansen Marg, New Delhi - 110001, Telephone 011-23358565"
        },
        {
            "index": 3,
            "Name": "Aident Social Welfare Organisation",
            "Image": "https://aident.org/images/logo.png",
            "AreaOfWork": "Livelihood, Women Empowerment",
            "Criteria": "Implementing partner under total sanitation programme of DRDA, Hissar, Vocational Centres under Sarva Siksha Abhiyan; Winner Of South Asia Regional Development Market Place (2008)",
            "Contact": "59, Bhalswa Village, Near Laxmi Narayan Mandir Jhahangirpuri"
        },
        {
            "index": 4,
            "Name": "Balasaheb Education Society",
            "Image": "https://sp-ao.shortpixel.ai/client/q_lossless,ret_img/http://www.kairasociety.org/wp-content/uploads/2016/10/logo.png",
            "AreaOfWork": "Vocational Training, Women’s Development & Empowerment",
            "Criteria": "Vocational Training, Women’s Development & Empowerment",
            "Contact": "Ralubhai Bhilabhai Soni D-1 Swastik Nagar, Chalthan Tai Palsana Distt. Surat,Gujarat E-Mail: Balasahebedu@Rediffmail.Comtel: 09404193546"
        },
        {
            "index": 5,
            "Name": "Adarsh Saraswati Shiksha Samiti",
            "Image": "http://sonepatngo.com/images/slider/logo.jpg",
            "AreaOfWork": "Children, Education & Literacy, Health & Family Welfare, HIV/AIDS, Human Rights, Micro Finance (Shgs), Nutrition, Rural Development",
            "Criteria": "In existence since 1988; Receiving funds from Haryana state social welfare board",
            "Contact": "Adarsh Saraswati Shiksha Samiti, Sant Garib Dass,Gali No. 2, Kakroi Road, Sonepat Myindiaa@Gmail. Dot.Com"
        },
        {
            "index": 6,
            "Name": "Chinmaya Organization For Rural Development(CORD), ",
            "Image": "https://www.chinmayamission.com/wp-content/uploads/2012/09/logo.png",
            "AreaOfWork": "Holistic Rural Development, Maternal and Child Care",
            "Criteria": "It is a wing of the Chinmaya Mission; its director has been awarded Padma Shri for Social Service and excellence in services in 2008 and 2012 respectively",
            "Contact": "Chinmaya Organization For Rural Development(CORD), P.O Sidhbari, Dharamsala Distt. Kangra176 057 Tel:91-1892-236987, 91-1892-234322 Mobile:91-9418036987 Email: Cordsidhbari@Gmail.Com"
        },
        {
            "index": 7,
            "Name": "All J&K Ex Servicemen Wel. Society",
            "Image": "https://indianarmy.nic.in/assets/img/presets/preset1/logo_light.png",
            "AreaOfWork": "Social Justice And Equality For Women",
            "Criteria": "Invited to participate in the 1st NGO conference of MWCD, 9 Oct 2017",
            "Contact": "Welfare Society H.O -199, Rehari Colony, J & K -180005.(Doda Cost)"
        },
        {
            "index": 8,
            "Name": "Adivasi Mahila Samaj ",
            "Image": "https://lagatar.in/wp-content/uploads/2022/03/ff1-1-1140x570.jpg",
            "AreaOfWork": "Social Justice and Equality For Women",
            "Criteria": "Invited to participate in the 1st NGO conference of MWCD, 9 Oct 2017",
            "Contact": "Veer Kunwar Singh Colony Gumla P.O. - Gumla District - Gumla State - Jharkhand Pin Code - 835207"
        },
        {
            "index": 9,
            "Name": "Aarambh India Initiative",
            "Image": "https://www.admcf.org/wp-content/uploads/2019/07/aarambh-india-logo-300x100.png",
            "AreaOfWork": "Child Welfare",
            "Criteria": "In existence since 1986, Invited to participate in the 1st NGO conference of MWCD, 9 Oct 2017; Partners with UNICEF, MWCD",
            "Contact": "Aarambh Education And Community Development Society 52 –C, Mohini Parisar Bhopal – 462022 Mp Phone: 0755 – 2751687, Fax: 0755 – 2751813"
        },
        {
            "index": 10,
            "Name": "All Backward Classes & Economic Development Organisation",
            "Image": "https://www.ngo4you.com/wp-content/uploads/2020/06/NGO-in-Thoubal-min-1024x576.jpg",
            "AreaOfWork": "Women's Development & Empowerment",
            "Criteria": "Implementing Swadhar Greh under MWCD",
            "Contact": "Samaram Bazar, Po Wanging, Dist. Thoubal Manipur – 95148"
        },
        {
            "index": 11,
            "Name": "Zoram Drivers Ramthim Board",
            "Image": "https://rp-deaddictioncentres.s3.amazonaws.com/wp-content/uploads/2020/04/1234091_520720028021998_133002731_n.jpg",
            "AreaOfWork": " Women's Development & Empowerment",
            "Criteria": "In existence since 1957,Events",
            "Contact": "C/O Friends Automobile Enterprises Chanamari, Near Police, Traffic Point, Aizawl"
        },
        {
            "index": 12,
            "Name": "Abhaya Charitable Trust",
            "Image": "http://abhayatrust.org/assets/images/abhaya_trust_logo.png",
            "AreaOfWork": "Educational Support for Poor Children Nutrition,  Women Development",
            "Criteria": "Implementing Ujjawala Scheme Under MWCD",
            "Contact": "Flat No.509, Surya Residency Opp. BSNL Office, Agraharam ELURU, West Godavari, Andhra Pradesh Tel.No.0996319988 Email ID. Abhayacharitablrust2007@Yahoo.Com"
        },
        {
            "index": 13,
            "Name": "Bui Welfare Society",
            "Image": "https://www.sentinelassam.com/wp-content/uploads/2018/09/APWWS.jpg",
            "AreaOfWork": "Women Welfare, Working Women's Hostel",
            "Criteria": "Implementation of WWH Scheme of MWCD",
            "Contact": "Bui Welfare Society Near Field Publicity Office, Daparijo, Upper Subansiri, Arunachal Pradesh"
        },
        {
            "index": 14,
            "Name": "Association for Social Health In India",
            "Image": "https://d24l7ypac8dw56.cloudfront.net/MenuImages/1460241_537034446387028_778942812_n-79985-22091.jpg",
            "AreaOfWork": "Rehabilitation of women and children",
            "Criteria": "Old organization with Rajmata of Patiala Smt. Mohinder Kaur as its President. In existence since 1965 Invited to participate in the 1st NGO Conference of MWCD, 9 Oct 2017",
            "Contact": "19, Rouse Avenue, New Delhi Date of Est 01.09.1987 Mrs. Surksha Lakhani, Hony. Secretary, Mob: 9988701472 Savera' Flat No. 907, Sector – 43-A, Chandigarh ashidelhi@hotmail.com"
        },
        {
            "index": 15,
            "Name": "Prodigals Home",
            "Image": "https://www.morungexpress.com/uploads/2021/02/53401056_1614176068_Anganwadi%20workers%20with%20the%20CMHP%20team%20and%20resource%20persons.jpg",
            "AreaOfWork": "Children, Women's Development & Empowerment",
            "Criteria": "One of the pioneering NGOs in Nagaland to have started working on drug abuse prevention and rehblitation; Date Of Estt: 1990",
            "Contact": "NSCB Building Complex, P.B No. 148, River Belt Colony, Dimapur – 797112"
        },
        {
            "index": 16,
            "Name": "ADHAR, (Agriculture Development And Human Ability Of Rural)",
            "Image": "https://5.imimg.com/data5/JA/PC/GLADMIN-10384942/child-welfare-500x500.png",
            "AreaOfWork": "Children, Health & Family Welfare, Rural Development & Poverty Alleviation, Vocational Training, Women’s Development & Empowerment",
            "Criteria": "At Khairbhadi, PO Sureswar, Via-Udyanbandh, Distt. Nuapada, Orissa E-Mail: Adharnuapada56@Yahoo.Intel: 099938461106"
        },
        {
            "index": 17,
            "Name": "District Council for Child Welfare",
            "Image": "https://im.hunt.in/cg/Sambalpur/City-Guide/SocialServicesSambalpur.jpg",
            "AreaOfWork": "Child Welfare",
            "Criteria": "At Khairbhadi, PO Sureswar, Via-Udyanbandh, Distt. Nuapada, Orissa E-Mail: Adharnuapada56@Yahoo.Intel: 099938461106"
        }
    ]

    return (
        <>
            {NGOlist.map((element, index) => {
                return(<div className='ngo-card' style={{ border: "5px dotted white" }}>
                    <img src={element.Image}></img>
                    <h1>{element.Name}</h1>
                    <p>{element.AreaOfWork}</p>
                    <p>{element.Criteria}</p>
                    <p>{element.Contact}</p>
                </div>
            )})};
        </>
    )
}
