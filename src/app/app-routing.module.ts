import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormsDownloadComponent } from './forms-download/forms-download.component';
import { NadComponent } from './nad/nad.component';
import { NirfComponent } from './nirf/nirf.component';
import { DepartmentsComponent } from './departments/departments.component';
import { ChemistryComponent } from './chemistry/chemistry.component';
import { CivilEngineeringComponent } from './civil-engineering/civil-engineering.component';
import { ComputerScienceAndEngineeringComponent } from './computer-science-and-engineering/computer-science-and-engineering.component';
import { ElectricalAndElectronicsEngineeringComponent } from './electrical-and-electronics-engineering/electrical-and-electronics-engineering.component';
import { ElectronicsAndCommunicationEngineeringComponent } from './electronics-and-communication-engineering/electronics-and-communication-engineering.component';
import { HumanitiesAndSocialSciencesComponent } from './humanities-and-social-sciences/humanities-and-social-sciences.component';
import { MathematicsComponent } from './mathematics/mathematics.component';
import { MechanicalEngineeringComponent } from './mechanical-engineering/mechanical-engineering.component';
import { PhysicsComponent } from './physics/physics.component';
import { ChemFacAndStaffComponent } from './chem-fac-and-staff/chem-fac-and-staff.component';
import { ChemLabComponent } from './chem-lab/chem-lab.component';
import { ChemSyllabusComponent } from './chem-syllabus/chem-syllabus.component';
import { ChemProjectsAndInternComponent } from './chem-projects-and-intern/chem-projects-and-intern.component';
import { ChemEventsComponent } from './chem-events/chem-events.component';
import { ChemHomeComponent } from './chem-home/chem-home.component';
import { CivilHomeComponent } from './civil-home/civil-home.component';
import { CivilFacAndStaffComponent } from './civil-fac-and-staff/civil-fac-and-staff.component';
import { CivilLabComponent } from './civil-lab/civil-lab.component';
import { CivilSyllabusComponent } from './civil-syllabus/civil-syllabus.component';
import { CivilProjectsAndInternComponent } from './civil-projects-and-intern/civil-projects-and-intern.component';
import { CivilEventsComponent } from './civil-events/civil-events.component';
import { CompHomeComponent } from './comp-home/comp-home.component';
import { CompFacAndStaffComponent } from './comp-fac-and-staff/comp-fac-and-staff.component';
import { CompLabComponent } from './comp-lab/comp-lab.component';
import { CompSyllabusComponent } from './comp-syllabus/comp-syllabus.component';
import { CompProjectsAndInternComponent } from './comp-projects-and-intern/comp-projects-and-intern.component';
import { CompEventsComponent } from './comp-events/comp-events.component';
import { EEHomeComponent } from './eehome/eehome.component';
import { EEFacAndStaffComponent } from './eefac-and-staff/eefac-and-staff.component';
import { EELabComponent } from './eelab/eelab.component';
import { EESyllabusComponent } from './eesyllabus/eesyllabus.component';
import { EEProjectsAndInternComponent } from './eeprojects-and-intern/eeprojects-and-intern.component';
import { EEEventsComponent } from './eeevents/eeevents.component';
import { ECHomeComponent } from './echome/echome.component';
import { ECFacAndStaffComponent } from './ecfac-and-staff/ecfac-and-staff.component';
import { ECLabComponent } from './eclab/eclab.component';
import { ECSyllabusComponent } from './ecsyllabus/ecsyllabus.component';
import { ECProjectsAndInternComponent } from './ecprojects-and-intern/ecprojects-and-intern.component';
import { ECEventsComponent } from './ecevents/ecevents.component';
import { ScienceHomeComponent } from './science-home/science-home.component';
import { ScienceFacAndStaffComponent } from './science-fac-and-staff/science-fac-and-staff.component';
import { ScienceLabComponent } from './science-lab/science-lab.component';
import { ScienceSyllabusComponent } from './science-syllabus/science-syllabus.component';
import { ScienceProjectsAndInternComponent } from './science-projects-and-intern/science-projects-and-intern.component';
import { ScienceEventsComponent } from './science-events/science-events.component';
import { MathHomeComponent } from './math-home/math-home.component';
import { MathFacAndStaffComponent } from './math-fac-and-staff/math-fac-and-staff.component';
import { MathLabComponent } from './math-lab/math-lab.component';
import { MathSyllabusComponent } from './math-syllabus/math-syllabus.component';
import { MathProjectsAndInternComponent } from './math-projects-and-intern/math-projects-and-intern.component';
import { MathEventsComponent } from './math-events/math-events.component';
import { MechHomeComponent } from './mech-home/mech-home.component';
import { MechFacAndStaffComponent } from './mech-fac-and-staff/mech-fac-and-staff.component';
import { MechLabComponent } from './mech-lab/mech-lab.component';
import { MechSyllabusComponent } from './mech-syllabus/mech-syllabus.component';
import { MechProjectsAndInternComponent } from './mech-projects-and-intern/mech-projects-and-intern.component';
import { MechEventsComponent } from './mech-events/mech-events.component';
import { PhyHomeComponent } from './phy-home/phy-home.component';
import { PhyFacAndStaffComponent } from './phy-fac-and-staff/phy-fac-and-staff.component';
import { PhyLabComponent } from './phy-lab/phy-lab.component';
import { PhySyllabusComponent } from './phy-syllabus/phy-syllabus.component';
import { PhyProjectsAndInternComponent } from './phy-projects-and-intern/phy-projects-and-intern.component';
import { PhyEventsComponent } from './phy-events/phy-events.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { AcademicsComponent } from './academics/academics.component';
import { AcademicHomeComponent } from './academic-home/academic-home.component';
import { AcademicOfficeComponent } from './academic-office/academic-office.component';
import { AcademicProgramsComponent } from './academic-programs/academic-programs.component';
import { AcademicCalendarComponent } from './academic-calendar/academic-calendar.component';
import { AcademicDocumentsComponent } from './academic-documents/academic-documents.component';
import { AcademicScholarshipsComponent } from './academic-scholarships/academic-scholarships.component';
import { AcademicFeeDetailsComponent } from './academic-fee-details/academic-fee-details.component';
import { AcademicDigitalInitiativesComponent } from './academic-digital-initiatives/academic-digital-initiatives.component';
import { AcademicAdmissionBTechComponent } from './academic-admission-btech/academic-admission-btech.component';
import { AcademicAdmissionMTechComponent } from './academic-admission-mtech/academic-admission-mtech.component';
import { AcademicAdmissionPhDComponent } from './academic-admission-ph-d/academic-admission-ph-d.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CareerAndJobComponent } from './career-and-job/career-and-job.component';
import { AdminComponent } from './admin/admin.component';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { AdminActsComponent } from './admin-acts/admin-acts.component';
import { AdminAnnualReportComponent } from './admin-annual-report/admin-annual-report.component';
import { AdminBoardOfGovernorsComponent } from './admin-board-of-governors/admin-board-of-governors.component';
import { AdminBuildingsComponent } from './admin-buildings/admin-buildings.component';
import { AdminChairmanComponent } from './admin-chairman/admin-chairman.component';
import { AdminCommitteesComponent } from './admin-committees/admin-committees.component';
import { AdminDeanComponent } from './admin-dean/admin-dean.component';
import { AdminDirectorComponent } from './admin-director/admin-director.component';
import { AdminFinanceComponent } from './admin-finance/admin-finance.component';
import { AdminHodComponent } from './admin-hod/admin-hod.component';
import { AdminHostelComponent } from './admin-hostel/admin-hostel.component';
import { AdminMinutesComponent } from './admin-minutes/admin-minutes.component';
import { AdminNewsletterComponent } from './admin-newsletter/admin-newsletter.component';
import { AdminOfficersComponent } from './admin-officers/admin-officers.component';
import { AdminRegistrarComponent } from './admin-registrar/admin-registrar.component';
import { AdminSectionStaffComponent } from './admin-section-staff/admin-section-staff.component';
import { AdminSenateComponent } from './admin-senate/admin-senate.component';
import { AdminVigilanceComponent } from './admin-vigilance/admin-vigilance.component';
import { AdminVisitorComponent } from './admin-visitor/admin-visitor.component';
import { ResearchComponent } from './research/research.component';
import { ResearchAboutComponent } from './research-about/research-about.component';
import { ResearchConsultancyProjectsComponent } from './research-consultancy-projects/research-consultancy-projects.component';
import { ResearchDeanComponent } from './research-dean/research-dean.component';
import { FpChemComponent } from './fp-chem/fp-chem.component';
import { FpCivilComponent } from './fp-civil/fp-civil.component';
import { FpCseComponent } from './fp-cse/fp-cse.component';
import { FpEceComponent } from './fp-ece/fp-ece.component';
import { FpEeeComponent } from './fp-eee/fp-eee.component';
import { FpEngComponent } from './fp-eng/fp-eng.component';
import { FpMathComponent } from './fp-math/fp-math.component';
import { FpMechComponent } from './fp-mech/fp-mech.component';
import { FpPhyComponent } from './fp-phy/fp-phy.component';
import { ResearchLopComponent } from './research-lop/research-lop.component';
import { ResearchInnovationComponent } from './research-innovation/research-innovation.component';
import { StudentwfComponent } from './studentwf/studentwf.component';
import { SwAboutComponent } from './sw-about/sw-about.component';
import { SwDeanComponent } from './sw-dean/sw-dean.component';
import { SwCulturalsComponent } from './sw-culturals/sw-culturals.component';
import { SwFacilitiesComponent } from './sw-facilities/sw-facilities.component';
import { SwGrievancesComponent } from './sw-grievances/sw-grievances.component';
import { SwRtiComponent } from './sw-rti/sw-rti.component';
import { SwRulesComponent } from './sw-rules/sw-rules.component';
import { SwSGIComponent } from './sw-sgi/sw-sgi.component';
import { SwSportsComponent } from './sw-sports/sw-sports.component';
import { SwUgcComponent } from './sw-ugc/sw-ugc.component';
import { TrainingAndPlacementComponent } from './training-and-placement/training-and-placement.component';
import { TnpAboutComponent } from './tnp-about/tnp-about.component';
import { TnpBrochureComponent } from './tnp-brochure/tnp-brochure.component';
import { TnpContactComponent } from './tnp-contact/tnp-contact.component';
import { TnpInternshipComponent } from './tnp-internship/tnp-internship.component';
import { TnpPastRecruitersComponent } from './tnp-past-recruiters/tnp-past-recruiters.component';
import { TnpProcedureComponent } from './tnp-procedure/tnp-procedure.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  //Header Links
  { path: 'about', component: AboutUsComponent },
  {
    path: 'academics', component: AcademicsComponent, children: [
      { path: '', component: AcademicHomeComponent },
      { path: 'academicOffice', component: AcademicOfficeComponent },
      { path: 'academicPrograms', component: AcademicProgramsComponent },
      { path: 'academicCalendar', component: AcademicCalendarComponent },
      { path: 'admission/btech', component: AcademicAdmissionBTechComponent },
      { path: 'admission/mtech', component: AcademicAdmissionMTechComponent },
      { path: 'admission/phd', component: AcademicAdmissionPhDComponent },
      { path: 'academicDocuments', component: AcademicDocumentsComponent },
      { path: 'scholarships', component: AcademicScholarshipsComponent },
      { path: 'feeDetails', component: AcademicFeeDetailsComponent },
      { path: 'digitalInitiatives', component: AcademicDigitalInitiativesComponent },
      { path: '**', redirectTo: '' }
    ]
  },

  //Administration Links
  {
    path: 'administration', component: AdminComponent, children: [
      { path: '', component: AdminAboutComponent },
      { path: 'admin-acts', component: AdminActsComponent },
      { path: 'admin-annual-report', component: AdminAnnualReportComponent },
      { path: 'admin-board-of-governors', component: AdminBoardOfGovernorsComponent },
      { path: 'admin-buildings', component: AdminBuildingsComponent },
      { path: 'admin-chairman', component: AdminChairmanComponent },
      { path: 'admin-committees', component: AdminCommitteesComponent },
      { path: 'admin-dean', component: AdminDeanComponent },
      { path: 'admin-director', component: AdminDirectorComponent },
      { path: 'admin-finance', component: AdminFinanceComponent },
      { path: 'admin-hod', component: AdminHodComponent },
      { path: 'admin-hostel', component: AdminHostelComponent },
      { path: 'admin-minutes', component: AdminMinutesComponent },
      { path: 'admin-newsletter', component: AdminNewsletterComponent },
      { path: 'admin-officers', component: AdminOfficersComponent },
      { path: 'admin-registrar', component: AdminRegistrarComponent },
      { path: 'admin-section-staff', component: AdminSectionStaffComponent },
      { path: 'admin-senate', component: AdminSenateComponent },
      { path: 'admin-vigilance', component: AdminVigilanceComponent },
      { path: 'admin-visitor', component: AdminVisitorComponent }
    ]
  },

  //Research and Consultancy Links
  {
    path: 'research_and_consultancy', component: ResearchComponent, children: [
      { path: '', component: ResearchAboutComponent },
      { path: 'research-consultancy-projects', component: ResearchConsultancyProjectsComponent },
      { path: 'research-dean', component: ResearchDeanComponent },
      { path: 'fp-chem', component: FpChemComponent },
      { path: 'fp-civil', component: FpCivilComponent },
      { path: 'fp-cse', component: FpCseComponent },
      { path: 'fp-ece', component: FpEceComponent },
      { path: 'fp-eee', component: FpEeeComponent },
      { path: 'fp-eng', component: FpEngComponent},
      { path: 'fp-math', component: FpMathComponent },
      { path: 'fp-mech', component: FpMechComponent },
      { path: 'fp-phy', component: FpPhyComponent},
      { path: 'research-lop', component: ResearchLopComponent },
      { path: 'research-innovation', component: ResearchInnovationComponent }
    ]
  },

  //Student Welfare Links
  {
    path: 'student_welfare', component: StudentwfComponent, children: [
      { path: '', component: SwAboutComponent },
      { path: 'sw-dean', component: SwDeanComponent },
      { path: 'sw-culturals', component: SwCulturalsComponent },
      { path: 'sw-facilities', component: SwFacilitiesComponent },
      { path: 'sw-grievances', component: SwGrievancesComponent },
      { path: 'sw-rti', component: SwRtiComponent },
      { path: 'sw-rules', component: SwRulesComponent },
      { path: 'sw-sgi', component: SwSGIComponent },
      { path: 'sw-sports', component: SwSportsComponent },
      { path: 'sw-ugc', component: SwUgcComponent }
    ]
  },

  //Training and Placement Links
  {
    path: 'training_and_placement', component: TrainingAndPlacementComponent, children: [
      { path: '', component: TnpAboutComponent },
      { path: 'tnp-brochure', component: TnpBrochureComponent },
      { path: 'tnp-contact', component: TnpContactComponent },
      { path: 'tnp-internship', component: TnpInternshipComponent },
      { path: 'tnp-past-recruiters', component: TnpPastRecruitersComponent },
      { path: 'tnp-procedure', component: TnpProcedureComponent }
    ]
  },
  
  { path: 'departments', component: DepartmentsComponent },
  
  //Department Links
  {
    path: 'departments/chemistry', component: ChemistryComponent, children: [
      { path: '', component: ChemHomeComponent},
      { path: 'faculty_and_staff', component: ChemFacAndStaffComponent},
      { path: 'laboratory', component: ChemLabComponent},
      { path: 'syllabus', component: ChemSyllabusComponent},
      { path: 'projects_and_intern', component: ChemProjectsAndInternComponent},
      { path: 'events', component: ChemEventsComponent},
      { path: '**', redirectTo: '' }
    ]
  },
  {
    path: 'departments/civil_engineering', component: CivilEngineeringComponent, children: [
      { path: '', component: CivilHomeComponent},
      { path: 'faculty_and_staff', component: CivilFacAndStaffComponent},
      { path: 'laboratory', component: CivilLabComponent},
      { path: 'syllabus', component: CivilSyllabusComponent},
      { path: 'projects_and_intern', component: CivilProjectsAndInternComponent},
      { path: 'events', component: CivilEventsComponent},
      { path: '**', redirectTo: '' }
    ]
  },
  { path: 'departments/computer_science_and_engineering', component: ComputerScienceAndEngineeringComponent, children: [
      { path: '', component: CompHomeComponent},
      { path: 'faculty_and_staff', component: CompFacAndStaffComponent},
      { path: 'laboratory', component: CompLabComponent},
      { path: 'syllabus', component: CompSyllabusComponent},
      { path: 'projects_and_intern', component: CompProjectsAndInternComponent},
      { path: 'events', component: CompEventsComponent},
      { path: '**', redirectTo: '' }
    ]
  },
  { path: 'departments/electrical_and_electronics_engineering', component: ElectricalAndElectronicsEngineeringComponent, children: [
      { path: '', component: EEHomeComponent},
      { path: 'faculty_and_staff', component: EEFacAndStaffComponent},
      { path: 'laboratory', component: EELabComponent},
      { path: 'syllabus', component: EESyllabusComponent},
      { path: 'projects_and_intern', component: EEProjectsAndInternComponent},
      { path: 'events', component: EEEventsComponent},
      { path: '**', redirectTo: '' }
    ]
  },
  { path: 'departments/electronics_and_communication_engineering', component: ElectronicsAndCommunicationEngineeringComponent, children: [
      { path: '', component: ECHomeComponent},
      { path: 'faculty_and_staff', component: ECFacAndStaffComponent},
      { path: 'laboratory', component: ECLabComponent},
      { path: 'syllabus', component: ECSyllabusComponent},
      { path: 'projects_and_intern', component: ECProjectsAndInternComponent},
      { path: 'events', component: ECEventsComponent},
      { path: '**', redirectTo: '' }
    ]
  },
  { path: 'departments/humanities_and_social_sciences', component: HumanitiesAndSocialSciencesComponent, children: [
      { path: '', component: ScienceHomeComponent},
      { path: 'faculty_and_staff', component: ScienceFacAndStaffComponent},
      { path: 'laboratory', component: ScienceLabComponent},
      { path: 'syllabus', component: ScienceSyllabusComponent},
      { path: 'projects_and_intern', component: ScienceProjectsAndInternComponent},
      { path: 'events', component: ScienceEventsComponent},
      { path: '**', redirectTo: '' }
    ]
  },
  { path: 'departments/mathematics', component: MathematicsComponent, children: [
      { path: '', component: MathHomeComponent},
      { path: 'faculty_and_staff', component: MathFacAndStaffComponent},
      { path: 'laboratory', component: MathLabComponent},
      { path: 'syllabus', component: MathSyllabusComponent},
      { path: 'projects_and_intern', component: MathProjectsAndInternComponent},
      { path: 'events', component: MathEventsComponent},
      { path: '**', redirectTo: '' }
    ]
  },
  { path: 'departments/mechanical_engineering', component: MechanicalEngineeringComponent, children: [
      { path: '', component: MechHomeComponent},
      { path: 'faculty_and_staff', component: MechFacAndStaffComponent},
      { path: 'laboratory', component: MechLabComponent},
      { path: 'syllabus', component: MechSyllabusComponent},
      { path: 'projects_and_intern', component: MechProjectsAndInternComponent},
      { path: 'events', component: MechEventsComponent},
      { path: '**', redirectTo: '' }
    ]
  },
  { path: 'departments/physics', component: PhysicsComponent, children: [
      { path: '', component: PhyHomeComponent},
      { path: 'faculty_and_staff', component: PhyFacAndStaffComponent},
      { path: 'laboratory', component: PhyLabComponent},
      { path: 'syllabus', component: PhySyllabusComponent},
      { path: 'projects_and_intern', component: PhyProjectsAndInternComponent},
      { path: 'events', component: PhyEventsComponent},
      { path: '**', redirectTo: '' }
    ]
  },
  
  //Footer Links
  { path: 'facultyLogin', redirectTo: '/501' },
  { path: 'gallery', component: GalleryComponent },
  { path: 'alumniPortal', redirectTo: '/501' },
  { path: 'forms', component: FormsDownloadComponent },
  { path: 'careers', component: CareerAndJobComponent },
  { path: 'nirf', component: NirfComponent },
  { path: 'nad', component: NadComponent },

  //Errorpages
  { path: '501', component: UnderConstructionComponent },
  { path: '404', component: PageNotFoundComponentComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
