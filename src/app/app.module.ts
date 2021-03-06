import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { OwlModule } from 'ngx-owl-carousel';
import { QuillModule } from 'ngx-quill';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
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
import { HumanitiesAndSocialSciencesComponent } from './humanities-and-social-sciences/humanities-and-social-sciences.component';
import { MathematicsComponent } from './mathematics/mathematics.component';
import { MechanicalEngineeringComponent } from './mechanical-engineering/mechanical-engineering.component';
import { PhysicsComponent } from './physics/physics.component';
import { ElectronicsAndCommunicationEngineeringComponent } from './electronics-and-communication-engineering/electronics-and-communication-engineering.component';
import { ChemFacAndStaffComponent } from './chem-fac-and-staff/chem-fac-and-staff.component';
import { ChemLabComponent } from './chem-lab/chem-lab.component';
import { ChemSyllabusComponent } from './chem-syllabus/chem-syllabus.component';
import { ChemProjectsAndInternComponent } from './chem-projects-and-intern/chem-projects-and-intern.component';
import { ChemEventsComponent } from './chem-events/chem-events.component';
import { ChemHomeComponent } from './chem-home/chem-home.component';
import { CivilHomeComponent } from './civil-home/civil-home.component';
import { CivilFacAndStaffComponent } from './civil-fac-and-staff/civil-fac-and-staff.component';
import { CseHomeComponent } from './cse-home/cse-home.component';
import { CseFacAndStaffComponent } from './cse-fac-and-staff/cse-fac-and-staff.component';
import { CseLabComponent } from './cse-lab/cse-lab.component';
import { CseSyllabusComponent } from './cse-syllabus/cse-syllabus.component';
import { CseProjectsAndInternComponent } from './cse-projects-and-intern/cse-projects-and-intern.component';
import { CseEventsComponent } from './cse-events/cse-events.component';
import { EceHomeComponent } from './ece-home/ece-home.component';
import { EceFacAndStaffComponent } from './ece-fac-and-staff/ece-fac-and-staff.component';
import { EceLabComponent } from './ece-lab/ece-lab.component';
import { EceSyllabusComponent } from './ece-syllabus/ece-syllabus.component';
import { EceProjectsAndInternComponent } from './ece-projects-and-intern/ece-projects-and-intern.component';
import { EceEventsComponent } from './ece-events/ece-events.component';
import { EeeHomeComponent } from './eee-home/eee-home.component';
import { EeeFacAndStaffComponent } from './eee-fac-and-staff/eee-fac-and-staff.component';
import { EeeLabComponent } from './eee-lab/eee-lab.component';
import { EeeSyllabusComponent } from './eee-syllabus/eee-syllabus.component';
import { EeeProjectsAndInternComponent } from './eee-projects-and-intern/eee-projects-and-intern.component';
import { EeeEventsComponent } from './eee-events/eee-events.component';
import { HumanitiesHomeComponent } from './humanities-home/humanities-home.component';
import { HumanitiesFacAndStaffComponent } from './humanities-fac-and-staff/humanities-fac-and-staff.component';
import { HumanitiesSyllabusComponent } from './humanities-syllabus/humanities-syllabus.component';
import { HumanitiesProjectsAndInternComponent } from './humanities-projects-and-intern/humanities-projects-and-intern.component';
import { HumanitiesEventsComponent } from './humanities-events/humanities-events.component';
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
import { MathHomeComponent } from './math-home/math-home.component';
import { MathFacAndStaffComponent } from './math-fac-and-staff/math-fac-and-staff.component';
import { MathSyllabusComponent } from './math-syllabus/math-syllabus.component';
import { MathProjectsAndInternComponent } from './math-projects-and-intern/math-projects-and-intern.component';
import { MathEventsComponent } from './math-events/math-events.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { AcademicsComponent } from './academics/academics.component';
import { AcademicOfficeComponent } from './academic-office/academic-office.component';
import { AcademicHomeComponent } from './academic-home/academic-home.component';
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

import { ResearchComponent } from './research/research.component';
import { ResearchDeanComponent } from './research-dean/research-dean.component';
import { ResearchConsultancyProjectsComponent } from './research-consultancy-projects/research-consultancy-projects.component';
import { ResearchLopComponent } from './research-lop/research-lop.component';
import { ResearchInnovationComponent } from './research-innovation/research-innovation.component';
import { ResearchAboutComponent } from './research-about/research-about.component';
import { StudentwfComponent } from './studentwf/studentwf.component';
import { SwAboutComponent } from './sw-about/sw-about.component';
import { SwDeanComponent } from './sw-dean/sw-dean.component';
import { SwRtiComponent } from './sw-rti/sw-rti.component';
import { SwUgcComponent } from './sw-ugc/sw-ugc.component';
import { SwGrievancesComponent } from './sw-grievances/sw-grievances.component';
import { SwFacilitiesComponent } from './sw-facilities/sw-facilities.component';
import { SwSGIComponent } from './sw-sgi/sw-sgi.component';
import { SwSportsComponent } from './sw-sports/sw-sports.component';
import { SwCulturalsComponent } from './sw-culturals/sw-culturals.component';
import { SwRulesComponent } from './sw-rules/sw-rules.component';
import { SwScstComponent } from './sw-scst/sw-scst.component';
import { WomenCellComponent } from './women-cell/women-cell.component';
import { TrainingAndPlacementComponent } from './training-and-placement/training-and-placement.component';
import { TnpAboutComponent } from './tnp-about/tnp-about.component';
import { TnpProcedureComponent } from './tnp-procedure/tnp-procedure.component';
import { TnpBrochureComponent } from './tnp-brochure/tnp-brochure.component';
import { TnpPastRecruitersComponent } from './tnp-past-recruiters/tnp-past-recruiters.component';
import { TnpInternshipComponent } from './tnp-internship/tnp-internship.component';
import { TnpContactComponent } from './tnp-contact/tnp-contact.component';
import { AdminComponent } from './admin/admin.component';
import { AdminVisitorComponent } from './admin-visitor/admin-visitor.component';
import { AdminChairmanComponent } from './admin-chairman/admin-chairman.component';
import { AdminDirectorComponent } from './admin-director/admin-director.component';
import { AdminBoardOfGovernorsComponent } from './admin-board-of-governors/admin-board-of-governors.component';
import { AdminSenateComponent } from './admin-senate/admin-senate.component';
import { AdminRegistrarComponent } from './admin-registrar/admin-registrar.component';
import { AdminVigilanceComponent } from './admin-vigilance/admin-vigilance.component';
import { AdminDeanComponent } from './admin-dean/admin-dean.component';
import { AdminOfficersComponent } from './admin-officers/admin-officers.component';
import { AdminHodComponent } from './admin-hod/admin-hod.component';
import { AdminBuildingsComponent } from './admin-buildings/admin-buildings.component';
import { AdminFinanceComponent } from './admin-finance/admin-finance.component';
import { AdminActsComponent } from './admin-acts/admin-acts.component';
import { AdminMinutesComponent } from './admin-minutes/admin-minutes.component';
import { AdminAnnualReportComponent } from './admin-annual-report/admin-annual-report.component';
import { AdminCommitteesComponent } from './admin-committees/admin-committees.component';
import { AdminHostelComponent } from './admin-hostel/admin-hostel.component';
import { AdminSectionStaffComponent } from './admin-section-staff/admin-section-staff.component';
import { AdminNewsletterComponent } from './admin-newsletter/admin-newsletter.component';
import { AdminAboutComponent } from './admin-about/admin-about.component';
import { FpChemComponent } from './fp-chem/fp-chem.component';
import { FpCivilComponent } from './fp-civil/fp-civil.component';
import { FpCseComponent } from './fp-cse/fp-cse.component';
import { FpEceComponent } from './fp-ece/fp-ece.component';
import { FpEeeComponent } from './fp-eee/fp-eee.component';
import { FpEngComponent } from './fp-eng/fp-eng.component';
import { FpMathComponent } from './fp-math/fp-math.component';
import { FpMechComponent } from './fp-mech/fp-mech.component';
import { FpPhyComponent } from './fp-phy/fp-phy.component';
import { FacLoginComponent } from './fac-login/fac-login.component';
import { FacPortalComponent } from './fac-portal/fac-portal.component';
import { FacPortalViewComponent } from './fac-portal-view/fac-portal-view.component';
import { FacPortalEditComponent } from './fac-portal-edit/fac-portal-edit.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { TendersComponent } from './tenders/tenders.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponentComponent,
    AboutUsComponent,
    FormsDownloadComponent,
    NadComponent,
    NirfComponent,
    DepartmentsComponent,
    ChemistryComponent,
    CivilEngineeringComponent,
    ComputerScienceAndEngineeringComponent,
    ElectricalAndElectronicsEngineeringComponent,
    HumanitiesAndSocialSciencesComponent,
    MathematicsComponent,
    MechanicalEngineeringComponent,
    PhysicsComponent,
    ElectronicsAndCommunicationEngineeringComponent,
    ChemFacAndStaffComponent,
    ChemLabComponent,
    ChemSyllabusComponent,
    ChemProjectsAndInternComponent,
    ChemEventsComponent,
    ChemHomeComponent,
    CivilHomeComponent,
    CivilFacAndStaffComponent,
    CseHomeComponent,
    CseFacAndStaffComponent,
    CseLabComponent,
    CseSyllabusComponent,
    CseProjectsAndInternComponent,
    CseEventsComponent,
    EceHomeComponent,
    EceFacAndStaffComponent,
    EceLabComponent,
    EceSyllabusComponent,
    EceProjectsAndInternComponent,
    EceEventsComponent,
    EeeHomeComponent,
    EeeFacAndStaffComponent,
    EeeLabComponent,
    EeeSyllabusComponent,
    EeeProjectsAndInternComponent,
    EeeEventsComponent,
    HumanitiesHomeComponent,
    HumanitiesFacAndStaffComponent,
    HumanitiesSyllabusComponent,
    HumanitiesProjectsAndInternComponent,
    HumanitiesEventsComponent,
    MechHomeComponent,
    MechFacAndStaffComponent,
    MechLabComponent,
    MechSyllabusComponent,
    MechProjectsAndInternComponent,
    MechEventsComponent,
    PhyHomeComponent,
    PhyFacAndStaffComponent,
    PhyLabComponent,
    PhySyllabusComponent,
    PhyProjectsAndInternComponent,
    PhyEventsComponent,
    MathHomeComponent,
    MathFacAndStaffComponent,
    MathSyllabusComponent,
    MathProjectsAndInternComponent,
    MathEventsComponent,
    UnderConstructionComponent,
    AcademicsComponent,
    AcademicOfficeComponent,
    AcademicHomeComponent,
    AcademicProgramsComponent,
    AcademicCalendarComponent,
    AcademicDocumentsComponent,
    AcademicScholarshipsComponent,
    AcademicFeeDetailsComponent,
    AcademicDigitalInitiativesComponent,
    AcademicAdmissionBTechComponent,
    AcademicAdmissionMTechComponent,
    AcademicAdmissionPhDComponent,
    GalleryComponent,
    CareerAndJobComponent,

    ResearchComponent,
    ResearchDeanComponent,
    ResearchConsultancyProjectsComponent,
    ResearchLopComponent,
    ResearchInnovationComponent,
    ResearchAboutComponent,
    StudentwfComponent,
    SwAboutComponent,
    SwDeanComponent,
    SwRtiComponent,
    SwUgcComponent,
    SwGrievancesComponent,
    SwFacilitiesComponent,
    SwSGIComponent,
    SwSportsComponent,
    SwCulturalsComponent,
    SwRulesComponent,
    SwScstComponent,
    WomenCellComponent,
    TrainingAndPlacementComponent,
    TnpAboutComponent,
    TnpBrochureComponent,
    TnpContactComponent,
    TnpInternshipComponent,
    TnpPastRecruitersComponent,
    TnpProcedureComponent,
    AdminComponent,
    AdminVisitorComponent,
    AdminChairmanComponent,
    AdminDirectorComponent,
    AdminBoardOfGovernorsComponent,
    AdminSenateComponent,
    AdminRegistrarComponent,
    AdminVigilanceComponent,
    AdminDeanComponent,
    AdminOfficersComponent,
    AdminHodComponent,
    AdminBuildingsComponent,
    AdminFinanceComponent,
    AdminActsComponent,
    AdminMinutesComponent,
    AdminAnnualReportComponent,
    AdminCommitteesComponent,
    AdminHostelComponent,
    AdminSectionStaffComponent,
    AdminNewsletterComponent,
    AdminAboutComponent,
    FpChemComponent,
    FpCivilComponent,
    FpCseComponent,
    FpEceComponent,
    FpEeeComponent,
    FpEngComponent,
    FpMathComponent,
    FpMechComponent,
    FpPhyComponent,
    FacLoginComponent,
    FacPortalComponent,
    FacPortalViewComponent,
    FacPortalEditComponent,
    NewsComponent,
    EventsComponent,
    TendersComponent,
  ],
  imports: [
    BrowserModule,
    NgxWebstorageModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    OwlModule,
    QuillModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
