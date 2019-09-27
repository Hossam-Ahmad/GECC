import {environment} from '../../environments/environment';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class ContentService {

    constructor(public fs: AngularFirestore) {}

    getSlider() {
        return this.fs.collection('slider').valueChanges();
    }

    addSlider(Image, Title, subTitle) {
        this.fs.collection('slider').add({
            image : Image,
            title : Title,
            subtitle : subTitle
        });
    }

    updateSlider() {

    }

    getFeatures() {
        return this.fs.collection('top-features').valueChanges();
    }

    updateFeatures() {

    }

    getCompany() {
        return this.fs.collection('company').valueChanges();
    }

    updateCompany() {

    }

    getTopSerices() {
        return this.fs.collection('top-services').valueChanges();
    }

    updateTopServices() {

    }

    getSerices() {
        return this.fs.collection('services').valueChanges();
    }

    updateServices() {

    }

    getTopPortfolio() {
        return this.fs.collection('top-portfolio').valueChanges();
    }

    updateTopPortfolio() {

    }

    getPortfolio() {
        return this.fs.collection('portfolio').valueChanges();
    }

    updatePortfolio() {

    }

}
