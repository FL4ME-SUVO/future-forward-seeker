import { useState } from "react";
import { X, Plus, Building, MapPin, DollarSign, Users, Trophy, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CollegeComparison = ({ colleges = [], onRemoveCollege, onAddCollege }) => {
  const [activeTab, setActiveTab] = useState("overview");

  const comparisonData = [
    {
      category: "Basic Information",
      fields: [
        { key: "name", label: "College Name", icon: Building },
        { key: "location", label: "Location", icon: MapPin },
        { key: "type", label: "Type", icon: Building },
        { key: "ranking", label: "Ranking", icon: Trophy },
        { key: "rating", label: "Rating", icon: Star }
      ]
    },
    {
      category: "Financial",
      fields: [
        { key: "tuitionFee", label: "Tuition Fee", icon: DollarSign },
        { key: "hostelFee", label: "Hostel Fee", icon: DollarSign },
        { key: "totalFee", label: "Total Annual Fee", icon: DollarSign }
      ]
    },
    {
      category: "Placement",
      fields: [
        { key: "avgPackage", label: "Average Package", icon: DollarSign },
        { key: "highestPackage", label: "Highest Package", icon: DollarSign },
        { key: "placementRate", label: "Placement Rate", icon: Trophy }
      ]
    },
    {
      category: "Student Life",
      fields: [
        { key: "totalStudents", label: "Total Students", icon: Users },
        { key: "facultyRatio", label: "Faculty-Student Ratio", icon: Users },
        { key: "campusSize", label: "Campus Size", icon: Building }
      ]
    }
  ];

  const getFieldValue = (college, key) => {
    switch (key) {
      case "name":
        return college.name;
      case "location":
        return college.location;
      case "type":
        return college.type;
      case "ranking":
        return college.ranking;
      case "rating":
        return `${college.rating}/5`;
      case "tuitionFee":
        return college.fees?.tuition || "N/A";
      case "hostelFee":
        return college.fees?.hostel || "N/A";
      case "totalFee":
        return college.fees?.total || "N/A";
      case "avgPackage":
        return college.placement?.averagePackage || "N/A";
      case "highestPackage":
        return college.placement?.highestPackage || "N/A";
      case "placementRate":
        return college.placement?.placementRate || "N/A";
      case "totalStudents":
        return college.students?.toLocaleString() || "N/A";
      case "facultyRatio":
        return college.facultyRatio || "N/A";
      case "campusSize":
        return college.campusSize || "N/A";
      default:
        return "N/A";
    }
  };

  const getBestValue = (key) => {
    if (colleges.length === 0) return null;
    
    const values = colleges.map(college => {
      const value = getFieldValue(college, key);
      if (value === "N/A") return null;
      
      // Extract numeric value for comparison
      const numericValue = parseFloat(value.replace(/[^\d.]/g, ''));
      return { college, value, numericValue };
    }).filter(item => item.numericValue !== null);

    if (values.length === 0) return null;

    // Determine if higher or lower is better
    const isHigherBetter = ["rating", "placementRate", "avgPackage", "highestPackage"].includes(key);
    
    const best = isHigherBetter 
      ? values.reduce((max, item) => item.numericValue > max.numericValue ? item : max)
      : values.reduce((min, item) => item.numericValue < min.numericValue ? item : min);
    
    return best.college.id;
  };

  if (colleges.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Colleges Selected</h3>
          <p className="text-gray-600 mb-4">
            Add colleges to compare their features, fees, and placement statistics.
          </p>
          <Button onClick={onAddCollege}>
            <Plus className="h-4 w-4 mr-2" />
            Add Colleges to Compare
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">College Comparison</h2>
          <p className="text-gray-600">
            Compare {colleges.length} college{colleges.length !== 1 ? 's' : ''}
          </p>
        </div>
        <Button onClick={onAddCollege} disabled={colleges.length >= 4}>
          <Plus className="h-4 w-4 mr-2" />
          Add College
        </Button>
      </div>

      {/* College Headers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {colleges.map((college, index) => (
          <Card key={college.id} className="relative">
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-2 right-2 h-6 w-6 p-0"
              onClick={() => onRemoveCollege(college.id)}
            >
              <X className="h-3 w-3" />
            </Button>
            <CardContent className="p-4 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{college.name}</h3>
              <p className="text-xs text-gray-600 mb-2">{college.location}</p>
              <div className="flex items-center justify-center space-x-1">
                <Star className="h-3 w-3 text-yellow-400" />
                <span className="text-xs">{college.rating}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="financial">Financial</TabsTrigger>
              <TabsTrigger value="placement">Placement</TabsTrigger>
              <TabsTrigger value="campus">Campus Life</TabsTrigger>
            </TabsList>

            {comparisonData.map((category) => (
              <TabsContent key={category.category} value={category.category.toLowerCase().replace(' ', '')}>
                <div className="space-y-4">
                  {category.fields.map((field) => {
                    const Icon = field.icon;
                    const bestCollegeId = getBestValue(field.key);
                    
                    return (
                      <div key={field.key} className="border rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <Icon className="h-4 w-4 text-gray-500" />
                          <h4 className="font-medium text-sm">{field.label}</h4>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                          {colleges.map((college) => {
                            const value = getFieldValue(college, field.key);
                            const isBest = bestCollegeId === college.id;
                            
                            return (
                              <div
                                key={college.id}
                                className={`p-3 rounded-lg border ${
                                  isBest ? 'bg-green-50 border-green-200' : 'bg-gray-50'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium">{value}</span>
                                  {isBest && (
                                    <Badge variant="outline" className="bg-green-100 text-green-700 border-green-200 text-xs">
                                      Best
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3">
        <Button variant="outline">
          Export Comparison
        </Button>
        <Button variant="outline">
          Share Comparison
        </Button>
        <Button variant="outline">
          Save to Favorites
        </Button>
      </div>
    </div>
  );
};

export default CollegeComparison; 