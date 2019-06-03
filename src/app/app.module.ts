import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OwlModule } from 'ngx-owl-carousel';
import { QuillModule } from 'ngx-quill';

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
import { ECHomeComponent } from './echome/echome.component';
import { ECFacAndStaffComponent } from './ecfac-and-staff/ecfac-and-staff.component';
import { ECLabComponent } from './eclab/eclab.component';
import { ECSyllabusComponent } from './ecsyllabus/ecsyllabus.component';
import { ECProjectsAndInternComponent } from './ecprojects-and-intern/ecprojects-and-intern.component';
import { ECEventsComponent } from './ecevents/ecevents.component';
import { EEHomeComponent } from './eehome/eehome.component';
import { EEFacAndStaffComponent } from './eefac-and-staff/eefac-and-staff.component';
import { EELabComponent } from './eelab/eelab.component';
import { EESyllabusComponent } from './eesyllabus/eesyllabus.component';
import { EEProjectsAndInternComponent } from './eeprojects-and-intern/eeprojects-and-intern.component';
import { EEEventsComponent } from './eeevents/eeevents.component';
import { ScienceHomeComponent } from './science-home/science-home.component';
import { ScienceFacAndStaffComponent } from './science-fac-and-staff/science-fac-and-staff.component';
import { ScienceLabComponent } from './science-lab/science-lab.component';
import { ScienceSyllabusComponent } from './science-syllabus/science-syllabus.component';
import { ScienceProjectsAndInternComponent } from './science-projects-and-intern/science-projects-and-intern.component';
import { ScienceEventsComponent } from './science-events/science-events.component';
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
import { MathLabComponent } from './math-lab/math-lab.component';
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
    CivilLabComponent,
    CivilSyllabusComponent,
    CivilProjectsAndInternComponent,
    CivilEventsComponent,
    CompHomeComponent,
    CompFacAndStaffComponent,
    CompLabComponent,
    CompSyllabusComponent,
    CompProjectsAndInternComponent,
    CompEventsComponent,
    ECHomeComponent,
    ECFacAndStaffComponent,
    ECLabComponent,
    ECSyllabusComponent,
    ECProjectsAndInternComponent,
    ECEventsComponent,
    EEHomeComponent,
    EEFacAndStaffComponent,
    EELabComponent,
    EESyllabusComponent,
    EEProjectsAndInternComponent,
    EEEventsComponent,
    ScienceHomeComponent,
    ScienceFacAndStaffComponent,
    ScienceLabComponent,
    ScienceSyllabusComponent,
    ScienceProjectsAndInternComponent,
    ScienceEventsComponent,
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
    MathLabComponent,
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
    CareerAndJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    QuillModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
