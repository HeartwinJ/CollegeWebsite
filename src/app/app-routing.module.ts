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


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  //Header Links
  { path: 'about', component: AboutUsComponent },
  { path: 'departments', component: DepartmentsComponent },
  
  //Department Links
  {
    path: 'departments/chemistry', component: ChemistryComponent, children: [
      { path: '', component: ChemHomeComponent},
      { path: 'faculty_and_staff', component: ChemFacAndStaffComponent},
      { path: 'laboratory', component: ChemLabComponent},
      { path: 'syllabus', component: ChemSyllabusComponent},
      { path: 'projects_and_intern', component: ChemProjectsAndInternComponent},
      { path: 'events', component: ChemEventsComponent}
    ]
  },
  {
    path: 'departments/civil_engineering', component: CivilEngineeringComponent, children: [
      { path: '', component: CivilHomeComponent},
      { path: 'faculty_and_staff', component: CivilFacAndStaffComponent},
      { path: 'laboratory', component: CivilLabComponent},
      { path: 'syllabus', component: CivilSyllabusComponent},
      { path: 'projects_and_intern', component: CivilProjectsAndInternComponent},
      { path: 'events', component: CivilEventsComponent}
    ]
  },
  { path: 'departments/computer_science_and_engineering', component: ComputerScienceAndEngineeringComponent, children: [
      { path: '', component: CompHomeComponent},
      { path: 'faculty_and_staff', component: CompFacAndStaffComponent},
      { path: 'laboratory', component: CompLabComponent},
      { path: 'syllabus', component: CompSyllabusComponent},
      { path: 'projects_and_intern', component: CompProjectsAndInternComponent},
      { path: 'events', component: CompEventsComponent}
    ]
  },
  { path: 'departments/electrical_and_electronics_engineering', component: ElectricalAndElectronicsEngineeringComponent, children: [
      { path: '', component: EEHomeComponent},
      { path: 'faculty_and_staff', component: EEFacAndStaffComponent},
      { path: 'laboratory', component: EELabComponent},
      { path: 'syllabus', component: EESyllabusComponent},
      { path: 'projects_and_intern', component: EEProjectsAndInternComponent},
      { path: 'events', component: EEEventsComponent}
    ]
  },
  { path: 'departments/electronics_and_communication_engineering', component: ElectronicsAndCommunicationEngineeringComponent, children: [
      { path: '', component: ECHomeComponent},
      { path: 'faculty_and_staff', component: ECFacAndStaffComponent},
      { path: 'laboratory', component: ECLabComponent},
      { path: 'syllabus', component: ECSyllabusComponent},
      { path: 'projects_and_intern', component: ECProjectsAndInternComponent},
      { path: 'events', component: ECEventsComponent}
    ]
  },
  { path: 'departments/humanities_and_social_sciences', component: HumanitiesAndSocialSciencesComponent, children: [
      { path: '', component: ScienceHomeComponent},
      { path: 'faculty_and_staff', component: ScienceFacAndStaffComponent},
      { path: 'laboratory', component: ScienceLabComponent},
      { path: 'syllabus', component: ScienceSyllabusComponent},
      { path: 'projects_and_intern', component: ScienceProjectsAndInternComponent},
      { path: 'events', component: ScienceEventsComponent}
    ]
  },
  { path: 'departments/mathematics', component: MathematicsComponent, children: [
      { path: '', component: MathHomeComponent},
      { path: 'faculty_and_staff', component: MathFacAndStaffComponent},
      { path: 'laboratory', component: MathLabComponent},
      { path: 'syllabus', component: MathSyllabusComponent},
      { path: 'projects_and_intern', component: MathProjectsAndInternComponent},
      { path: 'events', component: MathEventsComponent}
    ]
  },
  { path: 'departments/mechanical_engineering', component: MechanicalEngineeringComponent, children: [
      { path: '', component: MechHomeComponent},
      { path: 'faculty_and_staff', component: MechFacAndStaffComponent},
      { path: 'laboratory', component: MechLabComponent},
      { path: 'syllabus', component: MechSyllabusComponent},
      { path: 'projects_and_intern', component: MechProjectsAndInternComponent},
      { path: 'events', component: MechEventsComponent}
    ]
  },
  { path: 'departments/physics', component: PhysicsComponent, children: [
      { path: '', component: PhyHomeComponent},
      { path: 'faculty_and_staff', component: PhyFacAndStaffComponent},
      { path: 'laboratory', component: PhyLabComponent},
      { path: 'syllabus', component: PhySyllabusComponent},
      { path: 'projects_and_intern', component: PhyProjectsAndInternComponent},
      { path: 'events', component: PhyEventsComponent}
    ]
  },
  
  //Footer Links
  //{ path: 'facultyLogin', redirectTo: '/404' },
  //{ path: 'gallery', redirectTo: '/404' },
  //{ path: 'alumniLogin', redirectTo: '/404' },
  { path: 'forms', component: FormsDownloadComponent },
  //{ path: 'careers', redirectTo: '/404' },
  { path: 'nirf', component: NirfComponent },
  { path: 'nad', component: NadComponent },

  //Errorpages
  { path: '404', component: PageNotFoundComponentComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
